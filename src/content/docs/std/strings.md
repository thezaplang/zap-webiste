---
title: std/strings
description: Split StringView values and join lists of owned strings.
---

The automatic prelude exports all functions from this module.

| Function | Result |
| --- | --- |
| `split(text, delimiter)` | All parts, including empty parts |
| `splitN(text, delimiter, limit)` | At most `limit` parts; non-positive means unlimited |
| `splitTrimmed(text, delimiter)` | Parts with surrounding whitespace removed |
| `join(parts, delimiter)` | One owned string |
| `makeNullTerm(text) *Char` | Allocates a null-terminated C string |

```zap
fun main() Int {
    var fields = splitTrimmed("name, email, role", ',');
    println(fields.at(1));
    println(join(fields, " | "));
    return 0;
}
```

The split functions accept a borrowed `StringView` and return a `List<String>`
whose elements own their storage.

`makeNullTerm` allocates with `std/mem`; call `mem.free` exactly once when the
pointer is no longer needed. `fromNullTerm(pointer)` is an `unsafe` helper for
copying a C string into a Zap `String`.
