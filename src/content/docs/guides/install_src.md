---
title: Setting up
description: instaling
---

## Installation

### Prerequisites

- Git
- CMake >= 3.31.6
- Make/Ninja
- Clang >= 19
- LLVM >= 19

## clone repository

```bash
git clone https://github.com/thezaplang/zap.git
cd zap
mkdir -p build
cmake -B build -S .
cmake --build build
```

### Verify Installation

```bash
zap --version
```
