# Shopping Cart

A small online shop built with React: browse products, choose a quantity, add them to the cart, and manage the cart. The products come from the [Fake Store API](https://fakestoreapi.com/).

Built for the [Shopping Cart project](https://www.theodinproject.com/lessons/node-path-react-new-shopping-cart) of [The Odin Project](https://www.theodinproject.com/) Full Stack JavaScript path.

**Live demo:** _coming soon_

## Features

- **Shop page**: a responsive grid of product cards, with image, category, description and price
- **Quantity selector** on each card: type a number or use the − and + buttons; only whole, positive numbers are accepted
- **Add to cart**: adds the chosen quantity, or increases it if the product is already in the cart
- **Cart badge** in the navigation bar, updated in real time with the number of items
- **Cart page**: change the quantity of each item, remove an item (with the delete button, or with − at quantity 1), and see the total price
- **Loading and error states** while the products are fetched
- **Light and dark mode**, with the user's choice saved
- **Responsive navigation**: a sticky app bar, with a burger menu on small screens

## Built with

- [React](https://react.dev/) and [Vite](https://vite.dev/)
- [Material UI](https://mui.com/material-ui/) and [Material Icons](https://mui.com/material-ui/material-icons/)
- [React Router](https://reactrouter.com/) (nested routes with a shared layout)
- [Vitest](https://vitest.dev/) and [React Testing Library](https://testing-library.com/docs/react-testing-library/intro/)
- [ESLint](https://eslint.org/) and [Prettier](https://prettier.io/)

Started from my [vite-react-mui-starter](https://github.com/wingfeat/vite-react-mui-starter) template.

## How it works

- **The cart state lives in `Layout`**, the parent route of every page. It holds the `cart` array and the functions that change it (`addToCart`, `updateQuantity`, `removeFromCart`), and passes them to the pages with `<Outlet context={...} />`. The pages read them with `useOutletContext()`.
- **The badge count is computed**, not stored: a `reduce` adds up the quantities of the cart items on every render.
- **The cart is never mutated**: every change creates a new array with `map`, `filter` or the spread syntax.
- **`QuantitySelector` is a controlled component** (`value` and `onChange`). It does not know where it is used: on a product card it changes a local quantity, and in the cart it updates the cart.

## Getting started

```bash
git clone https://github.com/wingfeat/Shopping-Cart.git
cd Shopping-Cart
npm install
npm run dev
```

## Scripts

| Command                | What it does                                 |
| ---------------------- | -------------------------------------------- |
| `npm run dev`          | starts the development server                |
| `npm run build`        | builds the app into `dist/`                  |
| `npm run preview`      | serves the built app locally                 |
| `npm test`             | runs the tests in watch mode                 |
| `npm run test:run`     | runs the tests once                          |
| `npm run lint`         | checks the code with ESLint                  |
| `npm run format`       | formats every file with Prettier             |
| `npm run format:check` | checks the formatting without changing files |

## Project structure

```
src/
├── api/
│   └── fetchProducts.js      ← fetches the products from the Fake Store API
├── components/
│   ├── layout/Layout.jsx     ← app bar, cart badge, burger menu, cart state, <Outlet />
│   └── ui/
│       ├── ProductCard.jsx   ← one product of the shop, with its own quantity
│       ├── QuantitySelector.jsx
│       ├── Section.jsx
│       ├── ThemeToggle.jsx
│       └── constants.js      ← shared styles
├── pages/                    ← one component per route
│   ├── ShopPage.jsx          ← "/"
│   ├── CartPage.jsx          ← "/your-cart"
│   └── ErrorPage.jsx         ← unknown routes
├── theme/                    ← colors, typography, shapes, shadows, component defaults
├── routes.jsx                ← the route list (shared with the tests)
└── main.jsx
tests/
```

## Tests

```bash
npm run test:run
```

The tests cover the theme (colors in both modes, shapes, shadows, typography), the custom button variant, the theme toggle, and the layout (error page, burger menu).

## Deployment

Deployed on [Vercel](https://vercel.com/) with the **Vite** preset (`npm run build`, output `dist`). `vercel.json` sends every route to `index.html`, so refreshing the cart page does not return a 404.
