import js from '@eslint/js'
import reactHooks from 'eslint-plugin-react-hooks'
import reactRefresh from 'eslint-plugin-react-refresh'
import globals from 'globals'
import tseslint from 'typescript-eslint'

export default tseslint.config(
  { ignores: ['dist'] },
  {
    extends: [js.configs.recommended, ...tseslint.configs.recommended],
    files: ['**/*.{ts,tsx}'],
    languageOptions: {
      ecmaVersion: 2020,
      globals: globals.browser,
    },
    plugins: {
      'react-hooks': reactHooks,
      'react-refresh': reactRefresh,
    },
    rules: {
      ...reactHooks.configs.recommended.rules,
      'react-refresh/only-export-components': [
        'warn',
        { allowConstantExport: true },
      ],

      /**
       * 🛡️ KIP PATTERN ENFORCEMENT
       *
       * This rule prevents importing files with underscore prefix from outside their directory.
       * Files starting with _ are PRIVATE to their component folder.
       *
       * ❌ BAD:  import { useLoginForm } from '../LoginForm/_hook'
       * ✅ GOOD: import { useLoginForm } from '../LoginForm'
       */
    },
  },
)
