---
title: std/json
description: Parse, build, inspect, and serialize JSON values.
---

```zap
import "std/json" as json;
```

`parse` reads one complete JSON document and returns a failable `Value`:

```zap
var value = json.parse("{\"name\":\"Zap\",\"active\":true}") or err {
    eprintln(err.message);
    return 1;
};

var object = value.asObject() or err {
    eprintln(err.message);
    return 1;
};
var name = object.getString("name") or err {
    eprintln(err.message);
    return 1;
};
println(name);
```

## Types

- `Kind` identifies `String`, `Number`, `Boolean`, `Null`, `Object`, or
  `Array`.
- `Value` has constructors for every JSON kind, predicates such as `isArray()`,
  checked accessors `asString()`, `asInt()`, `asUInt()`, `asFloat64()`,
  `asBool()`, `asObject()`, and `asArray()`, plus `stringify()`.
- `Object` provides overloaded `put`, `putNull`, `has`, `size`, `get`,
  `keyAt`, typed `getString`, `getInt`, `getUInt`, `getFloat64`, `getBool`,
  `getObject`, and `getArray`, plus `stringify()`.
- `Array` provides overloaded `push`, `pushNull`, `size`, `at`, the matching
  typed getters, and `stringify()`.

`parse(text)` and `parse(text, maxDepth)` report `json.Error` on invalid JSON.
The checked accessors and serializers use the same error type. JSON strings,
numbers, booleans, nulls, objects, arrays, escapes, and nested values are
supported.
