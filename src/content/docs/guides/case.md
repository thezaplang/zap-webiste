---
title: Case statements
description: Match values, enum variants, records, and nested shapes.
---

Use `case` to choose a branch from the shape or value of one expression. Each
arm has a pattern followed by a block. The first matching arm runs.

## Enum payloads

Patterns can select an enum variant and bind its payload:

```zap
enum Delivery {
    Ready(String),
    Delayed(Int),
}

fun label(delivery: Delivery) String {
    case delivery {
        Delivery.Ready(address) {
            return "ready for " + address;
        }
        Delivery.Delayed(0) {
            return "arriving now";
        }
        Delivery.Delayed(minutes) {
            return "arrives in " + toString(minutes) + " minutes";
        }
    }
}
```

Use `_` when a matched value is not needed. `else` handles all remaining
values:

```zap
case delivery {
    Delivery.Ready(_) {
        println("ready");
    }
    else {
        println("not ready");
    }
}
```

## Literals and records

Patterns can also match literal values and fields of records or structs. Field
patterns may be nested, and an unmentioned field is not constrained:

```zap
record Address {
    city: String,
}

record Parcel {
    address: Address,
    priority: Int,
}

fun route(parcel: Parcel) String {
    case parcel {
        Parcel { address: Address { city: "Warsaw" }, priority } {
            return "local priority " + toString(priority);
        }
        Parcel { address: Address { city } } {
            return "send to " + city;
        }
    }
}
```

A `case` must cover every possible value. For enums, that can mean one arm per
variant; for partial literal or record patterns, add an `else` arm.
