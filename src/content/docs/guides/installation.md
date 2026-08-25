---
title: Install Zap
description: Install Zap with zapup, the Zap toolchain installer.
---

Install the latest Zap toolchain with zapup:

```bash
curl --proto '=https' --tlsv1.2 -sSf https://zaplang.xyz/install.sh | sh
```

Check the compiler installation:

```bash
zapc --version
zapc --print-stdlib-path
```

The second command is useful when configuring an editor or diagnosing a custom
installation.

## Install Thor

Use Thor to create, build, and run Zap applications. Install it after `zapc`:

```bash
git clone https://github.com/thezaplang/thor
cd thor
./build.sh
sudo cp build/thor /usr/local/bin/thor
thor --version
```

Thor invokes the installed `zapc`; it does not keep a second copy of the Zap
standard library. See [Thor build tool](/guides/thor/) for project
configuration and dependencies.

## Build from source

A source build requires:

- Clang 15+ or GCC 12.1+
- LLVM 21 development libraries
- Meson and Ninja
- OpenSSL development libraries
- Python 3

Clone and build the repository:

```bash
git clone https://github.com/thezaplang/zap.git
cd zap
./build.sh
```

The compiler is written to `build/zapc`. Add that directory to your `PATH` for
daily use, then install Thor with the instructions above. `zapc` remains useful
for editor configuration and low-level compiler diagnostics; Thor is the
normal application workflow.

## Verify a development build

Run both test suites before changing the compiler:

```bash
meson test -C build --print-errorlogs
./run_tests.sh
```

Continue with [Your first program](/guides/first_program/).
