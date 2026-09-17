import { PuzzlePage } from "./puzzle-page.ts";
import { expect, setup } from "#/e2e/base.ts";
import { solvePuzzle } from "#/e2e/helpers.ts";

// -- Completing a puzzle as a returning player ---

Deno.test("a returning player who solves a puzzle sees the celebration dialog", async () => {
  const { page, asUser, teardown } = await setup();
  try {
    await asUser({ name: "e2eliza" });
    const moves = await solvePuzzle("lasse");
    const puzzlePage = await new PuzzlePage(page).goto("lasse");
    await puzzlePage.solveByClicking(moves);

    await expect(puzzlePage.celebrationDialog.heading).toBeVisible();
    await expect(puzzlePage.celebrationDialog.seeSolvesLink).toBeVisible();
  } finally {
    await teardown();
  }
});

Deno.test("without JavaScript — a returning player submits their solve via the solution dialog", async () => {
  const { page, asUser, teardown } = await setup({ javaScriptEnabled: false });
  try {
    await asUser({ name: "e2edna" });
    const moves = await solvePuzzle("mia");
    const puzzlePage = await new PuzzlePage(page).goto("mia");
    await puzzlePage.solveByClicking(moves);

    await expect(puzzlePage.solutionDialog.heading).toBeVisible();
    const solutionsPage = await puzzlePage.solutionDialog.submitName("e2edna");
    await expect(solutionsPage.solveByName("e2edna")).toBeVisible();
  } finally {
    await teardown();
  }
});

Deno.test("a returning player sees the celebration dialog when submitting a duplicate solve", async () => {
  const { page, asUser, addSolution, teardown } = await setup();
  try {
    await asUser({ name: "e2ebbe" });
    const moves = await solvePuzzle("leo");
    await addSolution({ puzzleSlug: "leo", moves });
    const puzzlePage = await new PuzzlePage(page).goto("leo");
    await puzzlePage.solveByClicking(moves);

    await expect(puzzlePage.celebrationDialog.heading).toBeVisible();
    await expect(puzzlePage.celebrationDialog.seeSolvesLink).toBeVisible();
  } finally {
    await teardown();
  }
});

// -- Tutorial nudge ---

Deno.test("a new user sees the tutorial nudge on the puzzle page", async () => {
  const { page, teardown } = await setup();
  try {
    const puzzlePage = await new PuzzlePage(page).goto("lasse");

    await expect(puzzlePage.tutorialNudge).toBeVisible();
  } finally {
    await teardown();
  }
});

Deno.test("a returning user does not see the tutorial nudge", async () => {
  const { page, asUser, teardown } = await setup();
  try {
    await asUser({ name: "e2enudge", skillLevel: "beginner" });

    const puzzlePage = await new PuzzlePage(page).goto("lasse");

    await expect(puzzlePage.tutorialNudge).not.toBeVisible();
  } finally {
    await teardown();
  }
});

// -- Completing a puzzle as a new player ---

Deno.test("a new player who solves a puzzle using the keyboard is prompted to save their solve", async () => {
  const { page, teardown } = await setup();
  try {
    const moves = await solvePuzzle("kim");
    const puzzlePage = await new PuzzlePage(page).goto("kim");
    await puzzlePage.solveByKeyboard(moves);

    await expect(puzzlePage.solutionDialog.heading).toBeVisible();
  } finally {
    await teardown();
  }
});

Deno.test("a new player who completes a puzzle is prompted to save their solve", async () => {
  const { page, teardown } = await setup();
  try {
    const moves = await solvePuzzle("soren");
    const puzzlePage = await new PuzzlePage(page).goto("soren");
    await puzzlePage.solveByClicking(moves);

    await expect(puzzlePage.solutionDialog.heading).toBeVisible();
    await expect(puzzlePage.solutionDialog.usernameInput).toBeVisible();
  } finally {
    await teardown();
  }
});

Deno.test("a new player who submits their name is taken to the solutions page", async () => {
  const { page, teardown } = await setup();
  try {
    const moves = await solvePuzzle("sos");
    const puzzlePage = await new PuzzlePage(page).goto("sos");
    await puzzlePage.solveByClicking(moves);
    await puzzlePage.solutionDialog.submitName("e2eleanor");

    await expect(page).toHaveURL(/\/puzzles\/sos\/solutions/);
  } finally {
    await teardown();
  }
});
