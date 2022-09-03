module.exports = {
  env: {
    browser: true,
    es2021: true,
  },
  extends: [
    "plugin:@next/next/recommended",
    "eslint:recommended",
    "plugin:react/recommended",
    "plugin:react-hooks/recommended",
  ],
  overrides: [],
  parserOptions: {
    ecmaVersion: "latest",
    sourceType: "module",
  },
  plugins: ["react"],
  rules: {
    "react/react-in-jsx-scope": 0,
    "react/prop-types": 0,
  },
};
