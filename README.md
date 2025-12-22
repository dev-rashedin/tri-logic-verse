# Tri Logic Verse: JavaScript, Python & Go in the Real World

Learn JS, Python, and Go with examples, comparisons, problem-solving, and mini-projects.

---

## Overview

Welcome to **Tri Logic Verse**, a curated learning path for **JavaScript, Python, and Go**.
This repository is designed for self-taught developers, career switchers, or anyone from a **non-CS background** who wants to understand these three languages, how they compare, and how to use them in real-world projects.

Here you'll find:

- History and purpose of each language
- What problems they solve and their limitations
- Job market demand for each language
- Comparison tables for syntax, runtime, and ecosystem
- Example solutions to the same problem in all three languages
- Dedicated folders to **learn, explore under-the-hood, solve problems, and practice mini-projects**

---

## History & Purpose

### JavaScript (JS)

- **Created:** 1995 by Brendan Eich
- **Purpose:** Originally to make web pages interactive; now used for frontend, backend (Node.js), mobile, and desktop apps.
- **Strengths:** Full-stack web development, fast iteration, huge ecosystem (npm).
- **Limitations:** Single-threaded, weak typing (unless using TypeScript), can be inconsistent across environments.

### Python

- **Created:** 1991 by Guido van Rossum
- **Purpose:** General-purpose, beginner-friendly language; widely used in AI, data science, automation, scripting, and web development.
- **Strengths:** Simple syntax, large standard library, excellent for AI/ML and automation.
- **Limitations:** Slower runtime, less suitable for high-performance concurrent backend systems, dynamic typing can hide bugs.

### Go (Golang)

- **Created:** 2009 by Robert Griesemer, Rob Pike, and Ken Thompson at Google
- **Purpose:** Build high-performance backend services and scalable cloud applications.
- **Strengths:** Simple syntax, static typing, concurrency with goroutines, fast compilation, great tooling.
- **Limitations:** Limited generics support (improving), smaller ecosystem compared to JS/Python, minimalistic standard library.

---

## Job Market Demand

| Language   | Average Salary (US) | Popular Roles                         | Trends                 |
| ---------- | ------------------- | ------------------------------------- | ---------------------- |
| JavaScript | $110k–$130k         | Frontend, Full-stack, Node.js Backend | Stable, huge demand    |
| Python     | $115k–$140k         | AI/ML, Backend, Automation, Scripting | Rising (AI boom)       |
| Go         | $120k–$150k         | Cloud Backend, Microservices, DevOps  | Growing (cloud-native) |

_Note: Salaries are approximate and may vary by location and experience._

---

## High-Level Comparison

| Concept     | JavaScript      | Python            | Go                      |
| ----------- | --------------- | ----------------- | ----------------------- |
| Print       | `console.log()` | `print()`         | `fmt.Println()`         |
| Typing      | Dynamic         | Dynamic           | Static                  |
| Concurrency | Async / Promise | Async / Threading | Goroutines / Channels   |
| Compilation | Interpreted     | Interpreted       | Compiled                |
| Paradigm    | Multi-paradigm  | Multi-paradigm    | Procedural / Concurrent |
| Ecosystem   | Huge (npm)      | Huge (PyPI)       | Growing (modules)       |

---

## Detailed Language Differences

### Syntax Differences

- **Variables:**

  - JS: `let name = "Alice"`
  - Python: `name = "Alice"`
  - Go: `var name string = "Alice"`

- **Functions:**

  - JS: `function greet() { return "Hi"; }`
  - Python: `def greet(): return "Hi"`
  - Go: `func greet() string { return "Hi" }`

- **Conditionals:**
  - JS: `if (x > 5) { ... }`
  - Python: `if x > 5:`
  - Go: `if x > 5 { ... }`

### Runtime & Performance

- **JS:** Interpreted by V8 engine; single-threaded, event loop handles concurrency.
- **Python:** Interpreted by CPython; single-threaded, GIL limits true parallelism.
- **Go:** Compiled to machine code; supports goroutines for lightweight concurrent execution.

### Ecosystem & Tooling

- **JS:** npm, Node.js, React, Vue, Next.js, Deno
- **Python:** PyPI, FastAPI, Django, Pandas, TensorFlow
- **Go:** Standard library, modules, Docker, Kubernetes, cloud-native frameworks

---

## Example Problem Solving

**Problem:** Print all numbers from 1 to 5

```javascript
// JavaScript
for (let i = 1; i <= 5; i++) {
  console.log(i);
}
```

```python
# Python
for i in range(1, 6):
    print(i)
```

```go
// Go
package main
import "fmt"

func main() {
    for i := 1; i <= 5; i++ {
        fmt.Println(i)
    }
}
```

---

## Repo Structure

```
jpg-trinity/
│
├─ README.md                  ← This overview + comparison + examples
│
├─ javascript/
│   ├─ README.md              ← JS learning path index
│   ├─ learn/
│   ├─ under-the-hood/
│   ├─ problem-solving/
│   └─ projects/
│
├─ python/
│   ├─ README.md
│   ├─ learn/
│   ├─ under-the-hood/
│   ├─ problem-solving/
│   └─ projects/
│
├─ golang/
│   ├─ README.md
│   ├─ learn/
│   ├─ under-the-hood/
│   ├─ problem-solving/
│   └─ projects/
│
└─ assets/                    ← images, charts, etc.
```

---

## Contribution

If you want to contribute:

- Add more example problems in `problem-solving/`
- Add mini-projects in respective language folders
- Suggest improvements in syntax comparisons or under-the-hood explanations

Pull requests and stars are highly appreciated! ⭐

---

## License

This project is **MIT licensed**.
