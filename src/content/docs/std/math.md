---
title: std/math
description: Mathematical constants, integer helpers, and Float64 operations.
---

```zap
import "std/math" as math;
```

| Function | Result |
| --- | --- |
| `abs(x)` | Absolute value for `Int`, `Float`, or `Float64` |
| `min(a, b)`, `max(a, b)` | Smaller or larger `Int` or `Float64` argument |
| `clamp(value, low, high)` | Limits an `Int` or `Float64` to an inclusive interval |
| `sign(x)` | Sign of an `Int` or `Float64` |
| `sqrt(x: Float64) Float64` | Square root |
| `floor`, `ceil`, `round`, `trunc` | Float64 rounding operations |
| `pow`, `sin`, `cos`, `tan`, `asin`, `acos`, `atan`, `atan2` | Float64 power and trigonometric operations |
| `exp`, `log`, `log10`, `log2` | Float64 exponential and logarithmic operations |
| `gcd(a, b)`, `lcm(a, b)` | Greatest common divisor or least common multiple |
| `isPowerOfTwo(n)`, `nextPowerOfTwo(n)` | Integer power-of-two helpers |
| `degToRad(deg)`, `radToDeg(rad)` | Converts Float64 angles |

Constants are `PI`, `E`, `TAU`, `SQRT2`, `DEG_TO_RAD`, and `RAD_TO_DEG`, all
as `Float64`.

```zap
import "std/math" as math;

fun hypotenuse(a: Float64, b: Float64) Float64 {
    return math.sqrt(a * a + b * b);
}
```
