---
title: Deferred execution
description: Run cleanup work when the current scope is left.
---

`defer` schedules one statement or block to run when its enclosing scope is
left. Deferred work runs in last-in, first-out order.

```zap
fun writeStatus(ready: Bool) {
    defer println("status closed");

    if !ready {
        return;
    }

    println("status open");
}
```

The deferred `println` runs both after the normal end of `writeStatus` and when
the function returns early. A deferred block is useful when cleanup has more
than one step:

```zap
fun publish() {
    defer {
        println("flush");
        println("close");
    }

    println("write");
}
```

Defers belong to the scope where they appear. Leaving a loop body with `break`
or `continue` also runs that iteration's deferred work.
