import { renderToString } from "preact-render-to-string";

import { Thumbnail, ThumbnailColors } from "#/components/thumbnail.tsx";
import { define } from "#/routes/puzzles/[slug]/_middleware.ts";

// Matches the Oshi theme's rendered board colors.
// ui1: destination gold, ui2: puck cream, ui3: blocker indigo, ui4: wall bamboo,
// hole: sumi ink, portal: teal on deep plum
const OG_COLORS: ThumbnailColors = {
  ui1: "#e3b23c",
  ui2: "#f4e9d8",
  ui3: "#4a5fc1",
  ui4: "#7c9473",
  hole: "#08070a",
  portal: "#4fd1c5",
  portalAlt: "#341421",
};

// Oshi theme surface-1
const BACKGROUND = "#120f11";

export const handler = define.handlers({
  GET(ctx) {
    const { puzzle } = ctx.state;

    const svg = renderToString(
      <Thumbnail
        board={puzzle.board}
        width={400}
        height={400}
        colors={OG_COLORS}
        background={BACKGROUND}
      />,
    );

    return new Response(svg, {
      headers: { "content-type": "image/svg+xml" },
    });
  },
});
