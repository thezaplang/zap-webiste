---
title: Variables
description: Declare mutable and immutable local values with optional type inference.
---

Use `var` to declare a local variable:

```zap
var attempts: Int = 0;
var host: String = "127.0.0.1";
```

A variable may be assigned again:

```zap
var status = "waiting";
status = "ready";
```

The new value must have a compatible type. A variable's type does not change
after its declaration.

## Immutable bindings

Use `let` for a local binding that cannot be assigned again. Like `var`, it
accepts either an inferred or explicit type and always has an initializer:

```zap
let host = "127.0.0.1";
let port: Int = 8080;
```

The binding is immutable, not the object it refers to. A `let` binding can call
methods that change the referenced object:

```zap
let names = new List<String>();
names.push("Ada");
println(names.front());
```

Use `let` when the name should keep the same value, and `var` when the binding
itself must be assigned again.

## Type inference

The compiler can infer a variable's type from its initializer:

```zap
var port = 8080;
var ready = true;
var language = "Zap";
```

An explicit type is useful when the intended type differs from the literal's
default or when it makes an API boundary clearer:

```zap
var status: Int32 = 200;
var ratio: Float64 = 0.75;
```

## Initialization and assignment

A declaration introduces a name:

```zap
var count = 1;
```

An assignment changes the value of an existing variable:

```zap
count = count + 1;
```

Using an unknown name or assigning an incompatible value is a compile-time
error.

## Scope

A variable is visible from its declaration to the end of the enclosing block:

```zap
fun choose(enabled: Bool) String {
    if enabled {
        var result = "enabled";
        return result;
    }

    return "disabled";
}
```

`result` is not visible outside the `if` block.

Continue with [primitive types](/guides/primitive_types/).
