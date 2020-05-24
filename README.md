# Tailwind CSS Dropdown

<p>
  <a href="https://codecov.io/gh/estevanmaito/tailwindcss-dropdown"><img src="https://codecov.io/gh/estevanmaito/tailwindcss-dropdown/branch/master/graph/badge.svg" alt="codecov" /></a>
  <a href="https://travis-ci.com/github/estevanmaito/tailwindcss-dropdown"><img src="https://img.shields.io/travis/estevanmaito/tailwindcss-dropdown" alt="Travis (.org)" /></a>
  <a href="https://www.npmjs.com/package/mytailwindcss-dropdown"><img src="https://img.shields.io/npm/v/tailwindcss-dropdown" alt="npm" /></a>
  <a href="https://github.com/estevanmaito/tailwindcss-dropdown/blob/master/LICENSE"><img src="https://img.shields.io/github/license/estevanmaito/tailwindcss-dropdown" alt="MIT License" /></a>
</p>

A plugin to create accessible, JavaScript free dropdowns with Tailwind CSS. This is not a component (although you can use the examples below as a blueprint).

## 💿 Install

```sh
npm install tailwindcss-dropdown
```

In `tailwind.config.js` add `dropdown` to your `display` variants and require the plugin, like this:

```js
module.exports = {
  theme: {},
  variants: {
    display: ['responsive', 'dropdown']
  },
  plugins: [require('tailwindcss-dropdown')],
}
```


## 🚀 Usage

This plugin adds `dropdown` as a variant for `display` utilities. Translating: you can use `dropdown:block` to change the `display` of a child `ul` to `block` (or any other property listed [here](https://tailwindcss.com/docs/display/#app))

It depends heavily on the structure of your HTML. eg:

```html
<ul class="flex space-x-6" role="navigation">
  <li><a href=#>Home</a></li>
  <li><a href=#>Support</a></li>
  <!-- 1) dropdown:block -->
  <li class="relative dropdown:block" aria-haspopup="true">
    <a href=#>Products</a>
    <!-- 2) will transform this ul in a block when focused -->
    <ul class="hidden absolute right-0 w-auto" aria-label="submenu">
      <li><a href=#>macOS</a></li>
      <li><a href=#>Windows</a></li>
    </ul>
  </li>
</ul>
```

Note that `dropdown:block` must contain a `ul` as child. The same could be done with a `button`:

```html
<!-- 1) dropdown:block -->
<button class="relative dropdown:block" role="navigation" aria-haspopup="true">
  Products
  <!-- 2) will transform this ul in a block when focused -->
  <ul class="absolute right-0 hidden w-auto" aria-label="submenu">
    <li><a href="#">macOS</a></li>
    <li><a href="#">Windows</a></li>
  </ul>
</button>
```

## 🧙‍♂️ How it works?

The code for `dropdown:block` (and for every other display value, like `dropdown:grid`, etc) will look like this:

```css
.dropdown\:block:focus-within > ul {
  display: block;
}
```

So, when the element with class `dropdown:block` has focus within, the `ul` inside it turns into a `block`.
