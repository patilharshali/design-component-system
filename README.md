# React + TypeScript + Vite

This template provides a minimal setup to get React working in Vite with HMR and some ESLint rules.

Currently, two official plugins are available:

- [@vitejs/plugin-react](https://github.com/vitejs/vite-plugin-react/blob/main/packages/plugin-react) uses [Babel](https://babeljs.io/) (or [oxc](https://oxc.rs) when used in [rolldown-vite](https://vite.dev/guide/rolldown)) for Fast Refresh
- [@vitejs/plugin-react-swc](https://github.com/vitejs/vite-plugin-react/blob/main/packages/plugin-react-swc) uses [SWC](https://swc.rs/) for Fast Refresh

## React Compiler

The React Compiler is not enabled on this template because of its impact on dev & build performances. To add it, see [this documentation](https://react.dev/learn/react-compiler/installation).

## Expanding the ESLint configuration

If you are developing a production application, we recommend updating the configuration to enable type-aware lint rules:

```js
export default defineConfig([
  globalIgnores(['dist']),
  {
    files: ['**/*.{ts,tsx}'],
    extends: [
      // Other configs...

      // Remove tseslint.configs.recommended and replace with this
      tseslint.configs.recommendedTypeChecked,
      // Alternatively, use this for stricter rules
      tseslint.configs.strictTypeChecked,
      // Optionally, add this for stylistic rules
      tseslint.configs.stylisticTypeChecked,

      // Other configs...
    ],
    languageOptions: {
      parserOptions: {
        project: ['./tsconfig.node.json', './tsconfig.app.json'],
        tsconfigRootDir: import.meta.dirname,
      },
      // other options...
    },
  },
])
```

You can also install [eslint-plugin-react-x](https://github.com/Rel1cx/eslint-react/tree/main/packages/plugins/eslint-plugin-react-x) and [eslint-plugin-react-dom](https://github.com/Rel1cx/eslint-react/tree/main/packages/plugins/eslint-plugin-react-dom) for React-specific lint rules:

```js
// eslint.config.js
import reactX from 'eslint-plugin-react-x'
import reactDom from 'eslint-plugin-react-dom'

export default defineConfig([
  globalIgnores(['dist']),
  {
    files: ['**/*.{ts,tsx}'],
    extends: [
      // Other configs...
      // Enable lint rules for React
      reactX.configs['recommended-typescript'],
      // Enable lint rules for React DOM
      reactDom.configs.recommended,
    ],
    languageOptions: {
      parserOptions: {
        project: ['./tsconfig.node.json', './tsconfig.app.json'],
        tsconfigRootDir: import.meta.dirname,
      },
      // other options...
    },
  },
])
```

# Design System

A React + TypeScript Design System with versioned Storybook for app teams.

---

## Getting Started

Install the package in your project:

```bash
npm install @your-org/design-system
# or
yarn add @your-org/design-system

import { Button, Select, Input } from '@your-org/design-system';

<Button label="Click Me" />
<Select options={[{ label: 'Option 1', value: '1' }]} value="1" />
<Input placeholder="Enter text" />


https://<user>.github.io/<repo>/<version>/


# Install a specific version
npm install @your-org/design-system@1.2.0

import { Button, Select } from '@your-org/design-system';

<Button
  label="Submit"
  icon={{ name: 'plus', size: 'small' }}
/>

<Select
  options={[{ label: 'Option 1', value: '1' }]}
  value="1"
/>


npm version patch   # Bug fixes
npm version minor   # New features
npm version major   # Breaking changes


git push origin main --tags


https://<user>.github.io/<repo>/vX.Y.Z/


export const DESIGN_SYSTEM_VERSION = '1.2.0';


# after bumping version in package.json
git add package.json
git commit -m "Bump version to 1.2.0"
git tag v1.2.0
git push origin main --tags
