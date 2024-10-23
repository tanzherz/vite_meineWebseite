# React + Vite

This template provides a minimal setup to get React working in Vite with HMR and some ESLint rules.

Currently, two official plugins are available:

- [@vitejs/plugin-react](https://github.com/vitejs/vite-plugin-react/blob/main/packages/plugin-react/README.md) uses [Babel](https://babeljs.io/) for Fast Refresh
- [@vitejs/plugin-react-swc](https://github.com/vitejs/vite-plugin-react-swc) uses [SWC](https://swc.rs/) for Fast Refresh

```js
const params = Object.fromEntries([
  ...new URL(request.url).searchParams.entries(),
])
```

Entweder

const params = new URL(request.url).searchParams
const search = params.get('siegel')

oder

const params = Object.fromEntries([
...new URL(request.url).searchParams.entries(),

])

// It takes a URL string from the request.url property.
// It creates a URL object from that URL string.
// It extracts the query parameters using the searchParams property.
// It converts the query parameters into an iterable of key-value pairs using the entries() method.
// It spreads these key-value pairs into an array.
// It uses Object.fromEntries() to create a new object where the key-value pairs become properties of the object.
