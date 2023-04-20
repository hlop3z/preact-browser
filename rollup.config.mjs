import terser from "@rollup/plugin-terser";

export default {
  input: "./src/main.js",
  output: {
    file: "./dist/preact.min.js",
    format: "iife",
    name: "preact",
  },
  plugins: [terser()],
};
