---
title: How to call a function in Zap
---

calling functions is almost identical to any other language
all we need to know is what arguments it accepts and what is returned, and of course what it does

as we showed you in the first example `println` it was nothing else than a simple function call

Let's assume you have a function like this:

```zap
fn add(a: i32, b: i32) -> i32{
return a+b;
}
```

To call it, just type `add(4,5)` where 4 and 5 are the arguments we pass to the function
