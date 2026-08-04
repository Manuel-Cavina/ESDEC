import { nextJsConfig } from "@workspace/eslint-config/next-js"

/** @type {import("eslint").Linter.Config} */
export default [
  ...nextJsConfig,
  {
    // Config files (postcss.config.js, etc.) son CommonJS de Node, no bundle del navegador.
    files: ["*.config.js", "*.config.cjs"],
    languageOptions: {
      globals: {
        module: "writable",
        require: "readonly",
        exports: "writable",
        process: "readonly",
        __dirname: "readonly",
      },
    },
  },
]
