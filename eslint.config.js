import js from '@eslint/js';
import react from 'eslint-plugin-react';
import typescript from '@typescript-eslint/eslint-plugin';
import typescriptParser from '@typescript-eslint/parser';

export default [
  // 기본 권장 설정
  js.configs.recommended,

  // TypeScript 설정
  {
    files: ['**/*.ts', '**/*.tsx'],
    languageOptions: {
      parser: typescriptParser,
      parserOptions: {
        ecmaVersion: 'latest',
        sourceType: 'module',
      },
    },
    plugins: {
      '@typescript-eslint': typescript,
    },
    rules: {
      '@typescript-eslint/no-var-requires': 'off',
      '@typescript-eslint/no-empty-function': 'off',
      '@typescript-eslint/no-unused-vars': [
        'warn',
        { ignoreRestSiblings: true },
      ],
    },
  },

  // React 설정
  {
    files: ['**/*.jsx', '**/*.tsx'],
    plugins: {
      react,
    },
    rules: {
      'react/react-in-jsx-scope': 'off', // React 17+에서는 불필요
      'react/no-unknown-property': ['error', { ignore: ['css'] }], // Emotion 호환
    },
  },

  // 글로벌 객체 설정 (window, process 등)
  {
    files: ['**/*.js', '**/*.ts', '**/*.tsx'],
    languageOptions: {
      globals: {
        window: 'readonly',
        process: 'readonly',
        global: 'readonly',
        React: 'readonly',
        HTMLDivElement: 'readonly',
        HTMLInputElement: 'readonly',
      },
    },
  },
  {
    ignores: ['apps/client/public/'], // Public 폴더 내 파일 ESLint 제외
  },
];
