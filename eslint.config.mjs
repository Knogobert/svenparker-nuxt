import vue from "eslint-plugin-vue";
import prettier from "eslint-plugin-prettier";
import globals from "globals";
import path from "node:path";
import { fileURLToPath } from "node:url";
import js from "@eslint/js";
import { FlatCompat } from "@eslint/eslintrc";

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);
const compat = new FlatCompat({
    baseDirectory: __dirname,
    recommendedConfig: js.configs.recommended,
    allConfig: js.configs.all
});

export default [
    ...compat.extends("plugin:vue/recommended", "plugin:prettier/recommended"),
    {
        plugins: {
            vue,
            prettier,
        },

        languageOptions: {
            globals: {
                ...globals.browser,
                ...globals.node,
            },
            parser: "@babel/eslint-parser",
            parserOptions: {
                ecmaVersion: 2022,
                sourceType: "module",
                requireConfigFile: false,
                babelOptions: {
                    presets: ["@babel/preset-env"],
                },
            },
        },

        rules: {
            "no-console": "off",
            "no-debugger": "off",

            "vue/max-attributes-per-line": ["error", {
                singleline: {
                    max: 1
                },
                multiline: {
                    max: 1
                }
            }],
        },
    },
];