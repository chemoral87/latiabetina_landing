module.exports = {
  root: true,
  env: {
    browser: true,
    node: true
  },
  parserOptions: {
    parser: "@babel/eslint-parser",
    requireConfigFile: false
  },
  extends: ["@nuxtjs", "plugin:nuxt/recommended"],
  plugins: [],
  // add your custom rules here
  rules: {
    "quotes": ["error", "double", { avoidEscape: true }],
    "semi": ["error", "always"],
    "space-before-function-paren": ["error", "never"],
    "vue/singleline-html-element-content-newline": "off",
    "vue/multiline-html-element-content-newline": "off",
    "vue/max-attributes-per-line": "off"
  }
};
