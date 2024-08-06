import pluginJs from "@eslint/js";
import eslintConfigPrettier from "eslint-config-prettier";
import globals from "globals";
import tseslint from "typescript-eslint";

export default [
	{ files: ["**/*.{js,mjs,cjs,ts}"] },
	{ languageOptions: { globals: globals.browser } },
	pluginJs.configs.recommended,
	...tseslint.configs.recommended,
	eslintConfigPrettier,
	{
		ignores: ["eslint.config.mjs", "vitest.config.mjs", "html", "logs", "coverage"],
	},

	// My Custom Rules
	{
		rules: {
			"no-await-in-loop": ["warn"],
			"no-self-compare": ["warn"],

			"accessor-pairs": ["warn"],
			"arrow-body-style": ["warn", "as-needed"],
			"block-scoped-var": ["warn"],
			"camelcase": ["warn", { properties: "never" }],
			"class-methods-use-this": ["warn"],
			"complexity": ["warn", { max: 10 }],
			"consistent-return": ["warn"],
			"consistent-this": ["warn", "self"],
			"curly": ["warn", "all"],
			"default-case": ["warn"],
			"default-case-last": ["warn"],
			"default-param-last": ["warn"],
			"dot-notation": ["warn"],
			"eqeqeq": ["warn", "always"],
			"func-name-matching": ["warn"],
			"func-names": ["warn", "as-needed"],
			"func-style": ["warn", "declaration", { allowArrowFunctions: true }],
			"grouped-accessor-pairs": ["warn", "getBeforeSet"],
			"id-length": ["warn", { min: 2, max: 30 }],
			"max-classes-per-file": ["warn", 1],
			"max-depth": ["warn", { max: 4 }],
			"max-lines": [
				"warn",
				{ max: 500, skipBlankLines: true, skipComments: true },
			],
			"max-lines-per-function": [
				"warn",
				{ max: 50, skipBlankLines: true, skipComments: true },
			],
			"max-params": ["warn", { max: 4 }],
			"new-cap": ["warn", { newIsCap: true, capIsNew: false }],
			"no-array-constructor": ["warn"],
			"no-console": ["warn", { allow: ["warn", "error"] }],
			"no-else-return": ["warn", { allowElseIf: false }],
			"no-empty": ["warn", { allowEmptyCatch: true }],
			"no-empty-function": ["warn"],
			"no-empty-static-block": ["warn"],
			"no-eq-null": ["warn"],
			"no-eval": ["warn"],
			"no-extend-native": ["warn"],
			"no-extra-bind": ["warn"],
			"no-extra-boolean-cast": ["warn"],
			"no-extra-label": ["warn"],
			"no-global-assign": ["warn"],
			"no-implicit-coercion": [
				"warn",
				{ boolean: false, number: true, string: true },
			],
			"no-implicit-globals": ["warn"],
			"no-implied-eval": ["warn"],
			"no-inline-comments": ["warn"],
			"no-invalid-this": ["warn"],
			"no-iterator": ["warn"],
			"no-label-var": ["warn"],
			"no-labels": ["warn", { allowLoop: false, allowSwitch: false }],
			"no-lone-blocks": ["warn"],
			"no-lonely-if": ["warn"],
			"no-loop-func": ["warn"],
			"no-magic-numbers": [
				"warn",
				{ ignore: [0, 1], ignoreArrayIndexes: true },
			],
			"no-multi-assign": ["warn"],
			"no-multi-str": ["warn"],
			"no-duplicate-imports": ["warn"],
			"vars-on-top": ["warn"],
			"sort-imports": [
				"warn",
				{
					ignoreCase: true,
					ignoreDeclarationSort: true,
					ignoreMemberSort: false,
					memberSyntaxSortOrder: ["none", "all", "multiple", "single"],
				},
			],
			"prefer-template": ["warn"],
			"prefer-spread": ["warn"],
			"prefer-rest-params": ["warn"],
			"prefer-destructuring": [
				"warn",
				{
					array: true,
					object: true,
				},
				{
					enforceForRenamedProperties: false,
				},
			],
			"prefer-const": ["warn"],
			"prefer-arrow-callback": ["warn"],
		},
	},
];
