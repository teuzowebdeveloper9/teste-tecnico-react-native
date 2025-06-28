import js from "@eslint/js";
import globals from "globals";
import pluginReact from "eslint-plugin-react";
import { defineConfig } from "eslint/config";


export default defineConfig([
  { files: ["**/*.{js,mjs,cjs,jsx,tsx}"], plugins: { js }, extends: ["js/recommended"] },
  { files: ["**/*.{js,mjs,cjs,jsx,tsx}"], languageOptions: { globals: globals.browser } },
  pluginReact.configs.flat.recommended,
  {
  "extends": [
    "some-config-you-chose", 
    "plugin:prettier/recommended"
  ]
}
]);
