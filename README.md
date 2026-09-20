<div align="center">

# ＯＳＨＩ　押し

**Slide the puck to the target. Fewest moves wins.**

[![Deno](https://img.shields.io/badge/deno-2.x-000000?logo=deno&logoColor=white)](https://deno.land)
[![Fresh](https://img.shields.io/badge/fresh-2-2563eb)](https://fresh.deno.dev)
[![Preact](https://img.shields.io/badge/preact-10-673ab8?logo=preact&logoColor=white)](https://preactjs.com)
[![Tailwind CSS](https://img.shields.io/badge/tailwindcss-4-38bdf8?logo=tailwindcss&logoColor=white)](https://tailwindcss.com)
[![License: MIT](https://img.shields.io/badge/license-MIT-green.svg)](LICENSE)

*"Push" in Japanese. A Ricochet-Robots-inspired sliding puzzle that works
fully server-side, no JavaScript required.*

**[Play it now](https://oshi.blue153.deno.net/)**

https://github.com/user-attachments/assets/a2dfc731-cbcd-4447-8e4a-76cd5f1f22f0

</div>

## Features

- **Progressive enhancement** — full server-side state management and, works
  without JavaScript
- **Touch & keyboard** — swipe on mobile, arrow-keys or `u`/`r`/`h` shortcuts on
  desktop
- **CSS-only replays** — animated solution playback, no JS animation libraries
- **Smart solver** — BFS-based solver finds optimal solutions and powers the
  hint system
- **Dark/light theme** — follows system preference
- **Puzzle editor** — create, generate, and share your own puzzles with a
  live-solving minimum moves badge
- **Leaderboards** — compare your solution against others

## Editor

The built-in editor lets you create puzzles from scratch or generate random
solvable boards with configurable minimum moves. A debounced solver runs on every
edit, showing the optimal solution length in real time. Use **Download** to
export a puzzle as a `.md` file and **Import** to load one back in.

## Tech Stack

| Layer     | Tech                                                                                 |
| --------- | ------------------------------------------------------------------------------------ |
| Runtime   | [Deno](https://deno.land)                                                            |
| Framework | [Fresh 2](https://fresh.deno.dev)                                                    |
| UI        | [Preact](https://preactjs.com) + [Signals](https://preactjs.com/guide/v10/signals/)  |
| Styling   | [Tailwind CSS v4](https://tailwindcss.com) + [Open Props](https://open-props.style/) |
| Storage   | [Deno KV](https://deno.com/kv)                                                       |
| Touch     | [ZingTouch](https://zingchart.github.io/zingtouch/)                                  |
| Build     | [Vite](https://vite.dev)                                                             |

## Getting Started

Requires [Deno](https://deno.land/manual/getting_started/installation).

```bash
# Start dev server with file watching
deno task dev

# Build for production
deno task build

# Preview production build
deno task preview
```

## Project Structure

```
routes/          File-system routes (pages + API)
islands/         Interactive Preact components (hydrated client-side)
components/      Static server-rendered components
game/            Core game logic (board, solver, parser, types, cookies)
client/          Browser-only code (touch, keyboard, routing)
lib/             Portable utilities (env, analytics, replay, build tools)
db/              Deno KV database layer
static/puzzles/  Puzzle definitions in Markdown + ASCII
```

## Puzzle Format

Puzzles are Markdown files with YAML frontmatter and an ASCII board:

```markdown
---
name: My Puzzle
slug: my-puzzle
createdAt: 2025-06-15T00:00:00.000Z
---

+ A B C D E F G H +
1 #     #         |
2   X             |
3    |            |
4                 |
5                 |
6         @       |
7                 |
8 #               |
+-----------------+
```

Symbols: `@` = puck (player piece), `X` = destination, `#` = blocker,
`|` = vertical wall, `_` = horizontal wall.

The easiest way to create a puzzle is via the in-app editor at `/puzzles/new`.
Design your board, then click **Download** to save the `.md` file. Use
**Import** to load it back into the editor later. Place it in
`static/puzzles/` and run `deno task update-puzzles` to register it.

## License

MIT
