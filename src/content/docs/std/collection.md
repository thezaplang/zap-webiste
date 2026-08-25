---
title: std/collection
description: Generic linked lists, stacks, queues, sets, and string-keyed maps.
---

`List`, `Stack`, `Queue`, `HashSet`, and `HashMap` are in the automatic
prelude. Import the module explicitly when using a module namespace:

```zap
import "std/collection" as collection;
```

## List

`List<T>` is a linked collection:

```zap
var queue = new List<String>();
queue.push("compile");
queue.push("link");

println(queue.popFront());
println(toString(queue.len()));
```

| Group | Methods |
| --- | --- |
| Inspect | `len()`, `isEmpty()`, `front()`, `back()`, `at(index)` |
| Add | `push(value)`, `pushFront(value)`, `insert(index, value)` |
| Change | `set(index, value)` |
| Remove | `popFront()`, `popBack()`, `removeAt(index)`, `clear()` |

Invalid indices and operations that require an element from an empty list call
`panic`.

## HashMap

`HashMap<V>` stores values under `String` keys:

```zap
var ports = new HashMap<Int>();
ports.put("http", 80);
ports.put("https", 443);

var secure = ports.getOr("https", 0);
```

Methods: `len()`, `isEmpty()`, `clear()`, `contains(key)`, `put(key, value)`,
`get(key)`, `getOr(key, fallback)`, `remove(key)`, and `bucketCapacity()`.

`get` calls `panic` when the key is absent. Use `contains` or `getOr` when
absence is expected.

## Stack and Queue

`Stack<T>` is last-in, first-out. Its methods are `len()`, `isEmpty()`,
`clear()`, `push(value)`, `pop()`, and `peek()`.

`Queue<T>` is first-in, first-out. Its methods are `len()`, `isEmpty()`,
`clear()`, `enqueue(value)`, `dequeue()`, and `peek()`.

`pop`, `peek`, and `dequeue` call `panic` on an empty collection.

## HashSet

`HashSet` stores unique `String` keys. Its methods are `len()`, `isEmpty()`,
`clear()`, `add(key)`, `contains(key)`, and `remove(key)`. `add` and `remove`
return whether the set changed.
