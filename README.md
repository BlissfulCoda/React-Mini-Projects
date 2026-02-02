# React Lesson Assignments — Rating UI

A series of React lesson assignments that cover core React concepts. Each assignment uses a design created in **Figma** and brings it to life with React, so you practice both design fidelity and React patterns in one project.

---

## Overview

This repo contains incremental lessons built around a single feedback UI. Each lesson adds new concepts and features on top of the same design, so you see how real apps grow from simple components to more structured, maintainable code.

---

## Lesson 1 — Foundations

**Concepts covered:** JSX, Conditional rendering, Props, State, Event Listeners, Children, Styling, Component composition.

You build the initial feedback interface from the Figma design:

- **Header** — Assignment title and “Give us feedback” messaging
- **Tabs** — “Feedback” vs “Request same service” (conditional rendering + state)
- **Emoji rating** — Clickable emoji options (props, state, event listeners, composition)
- **Comment area** — Label and textarea (controlled input and state)
- **Submit** — Button and footer with terms link

By the end of Lesson 1, you’ll have a working UI that uses components, local state, and events, styled to match the Figma spec.

---

## Lesson 2 — Forms & Data Flow

**Concepts covered:** Form data, avoiding prop drilling.

Building on the same design from Lesson 1, you’ll:

- **Incorporate form data** — Collect and handle the emoji rating, comment, and any other fields as a proper form (e.g. controlled inputs, submission handler).
- **Avoid prop drilling** — Refactor so that shared state (e.g. form values, active tab) is not passed through many layers of components. You’ll explore patterns like lifting state, context, or other approaches appropriate to the lesson level.

The UI stays consistent with the Figma design while the code becomes easier to maintain and extend.

---

## Getting Started

```bash
npm install
npm run dev
```

Open the app in your browser and use the Figma design as the reference for layout, copy, and interactions.

---

## Tech Stack

- **React** + **Vite** — Fast dev server and build
- **Figma** — Source of truth for layout and styling

Each lesson builds on the previous one; follow the lessons in order for the best learning path.
