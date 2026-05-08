# SportsDash — React Sports Category Explorer

> A dark-themed, filterable sports dashboard built with React — demonstrating component architecture, local state management, and real-time UI feedback with toast notifications.

---

## Table of Contents

- [Overview](#overview)
- [Tools and Technologies](#tools-and-technologies)
- [Project Structure](#project-structure)
- [Methods](#methods)
- [Key Insights](#key-insights)
- [Output](#output)
- [How to Run This Project](#how-to-run-this-project)
- [Result and Conclusion](#result-and-conclusion)
- [Future Work](#future-work)
- [Author and Contact](#author-and-contact)

---

## Overview

SportsDash is a React application that lets users explore **30 sports** across **5 categories** — Team, Individual, Combat, Water, and Motor. Each sport is presented as a styled card with a cover image, description, and a toggleable like button backed by instant toast feedback.

The goal was to demonstrate the core pillars of React development in a focused, readable project: **state-driven UI**, **dynamic filtering**, **component reusability**, and **clean prop contracts** — all without over-engineering.

---

## Tools and Technologies

| Technology | Purpose |
|---|---|
| **React 19** | Functional components, hooks-based state management |
| **Tailwind CSS** | Utility-first styling with custom dark theme (`bgDark`, `bgDark2`) |
| **react-toastify** | Instant user feedback on like / unlike actions |
| **react-icons** | `FcLike` / `FcLikePlaceholder` heart toggle icons |
| **Create React App** | Build tooling and dev server |

> **Design Decision:** State is kept deliberately local — `liked` IDs live in `Grid`, filter selection lives in `App`. No external state library needed; every piece of state lives at the lowest component that owns it.

---

## Project Structure

```
src/
├── components/
│   ├── Card.js        # Individual sport card — image, desc, like toggle
│   ├── Grid.js        # Renders filtered card grid, owns liked[] state
│   ├── Navbar.js      # Top bar with dashboard title
│   └── Titles.js      # Category filter buttons with active highlight
├── data.js            # Static data — CATEGORIES + 30 sport entries
├── App.js             # Root — filter state + layout composition
└── index.js           # Entry point — React root + ToastContainer mount
```

**Architecture pattern:** Single-directional data flow — `App` owns the active category, passes it to `Titles` (for active styling) and `Grid` (for filtering). `Grid` owns `liked[]` and threads it down to each `Card` as a prop.

---

## Methods

**Dynamic Category Filtering**

`App.js` holds `title` in `useState`, initialized to `CATEGORIES[0].label`. `Titles` renders a button per category, calling `props.change(label)` on click. `Grid` maps `title` to the correct data export via a `categoryMap` object — no conditionals chain, just a clean key lookup.

**Like Toggle with Instant Feedback**

`Card`'s `clickHandler` checks `props.liked.includes(props.id)` to decide add vs. remove, then calls `props.update` with the appropriate array operation. `react-toastify` fires a `success` or `warning` toast on every toggle — zero-latency feedback without any custom modal or alert.

**Description Truncation**

Cards cap descriptions at 100 characters with an ellipsis: `props.desc.length > 100 ? props.desc.substring(0, 100) + "..." : props.desc` — keeps the grid visually uniform regardless of data variance.

**Active Filter Highlight**

`Titles` applies a conditional Tailwind class: `border-white bg-opacity-60` when `props.title === data.label`, else `border-transparent bg-opacity-40` — a single ternary drives the entire active-state visual without separate state.

**Custom Tailwind Theme**

`index.css` extends Tailwind with `bgDark` and `bgDark2` — keeping color tokens in one place and out of component markup.

---

## Key Insights

- **State ownership at the right level:** `liked[]` lives in `Grid` (not `App`) because no sibling component needs it — lifting state only as far as necessary is a mark of clean React thinking.
- **`categoryMap` over if/else chains:** Using an object lookup (`categoryMap[props.title]`) to map filter labels to data arrays is more scalable and readable than a switch or if-else ladder.
- **Prop contracts stay minimal:** Each `Card` receives only what it renders — no bloated prop objects, no spread abuse. This makes components easy to test and reuse.
- **UX details compound:** Truncated descriptions, hover scale (`hover:scale-125`), active filter border, and toast feedback together produce a polished feel built entirely from Tailwind utilities and one toast library.

---

## Output

| View | Description |
|---|---|
| **Default / All Sports** | Full 30-card grid in a responsive wrap layout on a dark background |
| **Filtered View** | Any of 5 category filters — Team, Individual, Combat, Water, Motor — narrows the grid instantly |
| **Like Toggle** | Heart icon switches between filled and outlined; toast fires on every interaction |
| **Active Filter** | Selected category button gets a white border highlight for clear visual feedback |

---

## How to Run This Project

**Prerequisites:** Node.js (v14 or higher) and npm

**Step 1: Clone the repository**
```bash
git clone https://github.com/ManasGulati/sportsdash.git
cd sportsdash
```

**Step 2: Install dependencies**
```bash
npm install
```

**Step 3: Start the development server**
```bash
npm start
```

Opens at [http://localhost:3000](http://localhost:3000). No API key or backend required — all data is local.

**Step 4: Build for production (optional)**
```bash
npm run build
```

---

## Result and Conclusion

SportsDash is a focused demonstration of React fundamentals done correctly — clean component decomposition, unidirectional data flow, minimal and well-placed state, and a UI that responds instantly to every user action.

**Key achievements:**
- ✅ Stateful category filtering with dynamic active-button highlight
- ✅ Per-card like toggle with toast feedback — zero custom modal overhead
- ✅ 30 sports across 5 categories rendered from a structured local data layer
- ✅ Fully responsive dark-themed layout using Tailwind CSS with custom color tokens
- ✅ Clean prop contracts and correct state ownership throughout component tree

---

## Future Work

- [ ] Add **localStorage persistence** so liked sports survive page refresh
- [ ] Integrate a **search bar** for filtering by sport name within a category
- [ ] Connect to a **live sports API** to replace static data with real-world content
- [ ] Add a **Liked Sports page** to view all favourited cards in one place
- [ ] Implement **React Router DOM** for category-based URL routing (`/sports/combat`)
- [ ] Add **animations** (Framer Motion) for card entry and filter transitions
- [ ] Deploy to **Vercel** with CI/CD via GitHub Actions

---

## Author and Contact

**Developed by:** Manas Gulati

- **GitHub:** [github.com/ManasGulati](https://github.com/ManasGulati)
- **LinkedIn:** [linkedin.com/in/manasgulatiryu](https://linkedin.com/in/manasgulatiryu)
- **Email:** manasgulati222@gmail.com

---

> Built with React 19, Tailwind CSS, react-toastify, and react-icons.
