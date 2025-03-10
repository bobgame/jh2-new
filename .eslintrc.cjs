// ESLint 配置文件，采用 CommonJS 模块格式
module.exports = {
  root: true,
  ignorePatterns: [
    "projects/**/*"
  ],
  overrides: [
    {
      files: [
        "*.ts"
      ],
      parserOptions: {
        project: [
          "tsconfig.json"
        ],
        createDefaultProgram: true
      },
      extends: [
        "eslint:recommended",
        "plugin:@typescript-eslint/recommended",
        "plugin:@angular-eslint/recommended",
        "plugin:@angular-eslint/template/process-inline-templates",
        "plugin:prettier/recommended"
      ],
      rules: {
        indent: [
          2,
          2,
          {
            SwitchCase: 1
          }
        ],
        "comma-spacing": [
          "error",
          {
            before: false,
            after: true
          }
        ],
        quotes: [
          "error",
          "single",
          {
            allowTemplateLiterals: true
          }
        ],
        "comma-dangle": [
          2,
          "always-multiline"
        ],
        "space-before-function-paren": [
          "error",
          {
            anonymous: "always",
            named: "never",
            asyncArrow: "always"
          }
        ],
        "@typescript-eslint/no-this-alias": [
          "error",
          {
            allowDestructuring: false,
            allowedNames: [
              "self"
            ]
          }
        ],
        "@angular-eslint/directive-selector": [
          "error",
          {
            type: "attribute",
            prefix: [
              "app",
              "jh"
            ],
            style: "camelCase"
          }
        ],
        "@angular-eslint/component-selector": [
          "error",
          {
            type: "element",
            prefix: [
              "app",
              "jh"
            ],
            style: "kebab-case"
          }
        ],
        "@typescript-eslint/no-unsafe-function-type": "off",
        "@typescript-eslint/no-explicit-any": "warn",
        "@typescript-eslint/no-unused-vars": "off",
        "no-case-declarations": "off",
        "no-useless-escape": "off",
        "no-empty": "off",
        "no-constant-condition": "warn",
        "@angular-eslint/no-empty-lifecycle-method": "off",
        semi: [
          "error",
          "never"
        ],
        "no-multi-spaces": [
          "error",
          {
            ignoreEOLComments: true
          }
        ],
        "end-of-line": "off",
        "spaced-comment": [
          "error",
          "always",
          {
            markers: [
              "/"
            ]
          }
        ],
        "no-mixed-spaces-and-tabs": [
          "error",
          "smart-tabs"
        ],
        "no-trailing-spaces": [
          "error"
        ],
        "keyword-spacing": [
          "error",
          {
            before: true,
            after: true
          }
        ],
        "space-before-blocks": [
          "error",
          "always"
        ],
        "key-spacing": [
          "error",
          {
            beforeColon: false,
            afterColon: true
          }
        ]
      }
    },
    {
      files: [
        "*.html"
      ],
      extends: [
        "plugin:@angular-eslint/template/recommended"
      ],
      rules: {}
    }
  ]
};