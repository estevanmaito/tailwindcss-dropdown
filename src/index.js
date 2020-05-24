module.exports = ({ addVariant, e }) => {
  addVariant('dropdown', ({ modifySelectors, separator }) => {
    modifySelectors(({ className }) => {
      return `.${e(`dropdown${separator}${className}`)}:focus-within > ul`
    })
  })
}
