# MyBank — React Router Demo

A small, beginner-friendly banking dashboard built with React and React Router. It demonstrates how navigation links connect to page components without reloading the app.

The interface includes a home page with a sample bank card and recent transactions, a user profile page, and a transactions page. All account information is fictional.

## Requirements

- Node.js and npm

## Run the project

Install the dependencies:

```bash
npm install
```

Start the development server:

```bash
npm run dev
```

Open the local URL printed in the terminal.

## Routes

| URL | Page |
| --- | --- |
| `/` | Home |
| `/profile` | User profile |
| `/transactions` | Recent transactions |

## How routing works

`BrowserRouter` enables client-side routing for the app. `NavLink` creates navigation links and marks the current page as active. `Routes` contains the route definitions, and each `Route` maps a URL path to a React component.

These parts are in `src/App.jsx`:

```jsx
<BrowserRouter>
  <nav>
    <NavLink to="/" end>Home</NavLink>
    <NavLink to="/profile">Profile</NavLink>
    <NavLink to="/transactions">Transactions</NavLink>
  </nav>

  <Routes>
    <Route path="/" element={<Home />} />
    <Route path="/profile" element={<Profile />} />
    <Route path="/transactions" element={<Transactions />} />
  </Routes>
</BrowserRouter>
```

To add a page, create a React component, add a `NavLink`, then add a matching `Route`.

## Project files

- `src/App.jsx` — page components, navigation, and route definitions
- `src/App.css` — layout and component styles
- `src/index.css` — global styles

## Build for production

```bash
npm run build
```
