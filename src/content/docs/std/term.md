---
title: std/term
description: Write ANSI colors and styles, clear the terminal, and move its cursor.
---

```zap
import "std/term" as term;
```

`Color` contains `Default`, the eight standard colors, and their `Bright...`
variants. Pass a `Style` record to `setStyle`:

```zap
var success = term.Style{
    foreground: term.Color.BrightGreen,
    background: term.Color.Default,
    bold: true,
    dim: false,
    underline: false,
    inverse: false,
};

term.setStyle(success);
println("build succeeded");
term.resetStyle();
```

The remaining functions emit ANSI terminal control sequences:

| Function | Effect |
| --- | --- |
| `clear()` | Clears the screen and moves the cursor home |
| `clearLine()` | Clears the current line |
| `eraseToLineEnd()` | Erases from the cursor to the line end |
| `moveTo(row, column)` | Moves to zero-based row and column |
| `moveUp`, `moveDown`, `moveLeft`, `moveRight` | Moves by a positive number of cells |
| `hideCursor()`, `showCursor()` | Changes cursor visibility |
| `saveCursor()`, `restoreCursor()` | Saves or restores the cursor position |

These functions assume an ANSI-compatible terminal.
