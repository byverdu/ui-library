# UI Library

A modern React component library built with TypeScript, esbuild, and Material-UI (MUI). A Dev mode is also available where you can see the changes and test components in the playground, is built with vite. This library provides reusable UI components, hooks, exports MUI components and theming solutions that can be consumed by multiple applications.

## 📦 What's Included

- Using **esbuild** as the bundler for fast, efficient builds
- Supporting **subpath exports** for granular imports
- Providing **independent component bundling**
- **Components**: Reusable React components built on top of MUI
- **Hooks**: Custom React hooks for common functionality
- **Theme**: Centralized theming system with MUI integration and a custom theme provider
- **MUI Re-exports**: Direct access to MUI components without duplicate dependencies
- **Dev mode**: A playground where you can see the changes and test components

## 🛠 Bundler Choice: esbuild

**esbuild** over other bundlers because:

### Advantages over Webpack

- **10-100x faster** build times
- Simpler configuration
- Better tree-shaking
- Native ES modules support

### Advantages over Vite

- More predictable output structure
- Better support for library builds
- No virtual modules issues (Vite creates `_virtuals` folders)

### Advantages over Rollup

- Significantly faster builds
- Built-in TypeScript support
- Less configuration complexity

## 📁 Project Structure

```text
src/
├── index.ts              # Main entry point
├── lib/                  # Reusable components
│   ├── AppBar/
│   ├── Checkbox/
│   ├── IconButton/
│   └── Logo/
├── hooks/                # Custom React hooks
│   ├── useGetBoundingClientRect.tsx
│   └── useSetTabTitle.tsx
├── theme/                # Theming system
│   ├── ThemeProvider.tsx
│   ├── theme.ts
│   └── types.ts
└── mui/                  # MUI re-exports
    └── index.ts
```

## 🔧 Installation & Usage

### Installing the Library

```bash
npm install @your-org/ui-library
# or
pnpm add @your-org/ui-library
# or
yarn add @your-org/ui-library
```

### Basic Usage

```typescript
// Import everything from main entry
import { AppBar, Checkbox, ThemeProvider, MUI } from '@your-org/ui-library';

// Or use subpath imports for better tree-shaking
import AppBar from '@your-org/ui-library/lib/AppBar';
import { AppBar } from '@your-org/ui-library/lib';
import { useSetTabTitle } from '@your-org/ui-library/hooks';
import { ThemeProvider } from '@your-org/ui-library/theme';
import { Button } from '@your-org/ui-library'; // Re-exported MUI components
```

## 📦 Subpath Exports

The library supports granular imports through subpath exports:

```typescript
// Components
import { AppBar } from '@your-org/ui-library/lib/AppBar';
import { Checkbox } from '@your-org/ui-library/lib/Checkbox';

// Hooks
import { useSetTabTitle } from '@your-org/ui-library/hooks';

// Theme
import { ThemeProvider } from '@your-org/ui-library/theme';

// MUI components (re-exported to avoid duplication)
import { MUIBox } from '@your-org/ui-library/mui';

// From multiple entry points
import { MUIBox, Checkbox, useSetTabTitle } from '@your-org/ui-library';
```

### Available Subpaths

- `@your-org/ui-library` - Main entry point
- `@your-org/ui-library/lib` - All components
- `@your-org/ui-library/lib/*` - Individual components
- `@your-org/ui-library/hooks` - All hooks
- `@your-org/ui-library/hooks/*` - Individual hooks
- `@your-org/ui-library/theme` - Theme system
- `@your-org/ui-library/theme/*` - Individual theme files
- `@your-org/ui-library/mui` - MUI components

## 🧪 Local Development & Testing

### Running the Playground

1. Run `pnpm run dev` to start the local server at `http://localhost:5173`.
2. The Playground is under the `dev` folder.

### Testing with pnpm link

The recommended way to test the library locally with consuming applications:

1. **In the library directory:**

```bash
# Build the library
pnpm run build

# Link the package globally
pnpm link --global
```

2. **In your consuming application (optional):**

```bash
# Link to the local library
pnpm link --global @your-org/ui-library
```

3. **Important: Handle React Hook Issues**

When testing locally, you might encounter React hooks issues. Solve this by linking React from the consuming app to the library:

```bash
# In the consuming app, link React
cd node_modules/react
pnpm link --global

# In the library directory, use the linked React
cd /path/to/ui-library
pnpm link --global react
```

### Alternative: File Protocol with bundled package

1. In module project, execute `npm pack`
2. This will build a `<package-name>-<version>.tar.gz` file.
3. Move the file to the consumer project
4. In consuming app's package.json, add the file protocol:

```bash
# In consuming app's package.json
{
  "dependencies": {
    "@your-org/ui-library": "file:../path/to/ui-library"
  }
}
```

### Development Workflow

1. Make changes to the library
2. Run `pnpm run build` to rebuild
3. Changes will be immediately available in linked applications
4. For automatic rebuilding: `pnpm run build:watch`

## 🎨 MUI Integration

### Why Re-export MUI

The library re-exports Material-UI components to:

- **Avoid peer dependency conflicts** in consuming applications
- **Ensure version consistency** across all apps using the library
- **Reduce bundle size** by preventing duplicate MUI imports
- **Simplify dependency management** for consuming applications

### Usage

```typescript
// Instead of importing MUI directly in your app:
// import { Button, TextField } from '@mui/material'; // ❌ Don't do this

// Use the re-exported MUI from the library:
import { MUIButton, MUITextField } from '@your-org/ui-library'; // ✅ Preferred approach

function MyComponent() {
  return (
    <div>
      <MUIButton variant="contained">Click me</MUIButton>
      <MUITextField label="Enter text" />
    </div>
  );
}
```

## 🔨 Build System

### Build Scripts

```bash
# Clean and build everything
pnpm run build

# Build with watch mode for development
pnpm run build:watch

# Build only TypeScript declarations
pnpm run build:types

# Clean dist folder
pnpm run clean
```

### Build Output Structure

```text
dist/
├── index.js              # Main entry
├── index.d.ts            # Main types
├── lib/
│   ├── index.js          # All components
│   ├── index.d.ts
│   ├── AppBar/
│   │   ├── index.js      # Individual component
│   │   ├── index.d.ts
│   │   ├── AppBar.d.ts
│   │   └── AppBar.js
│   └── ...
├── hooks/
│   ├── index.js          # All hooks
│   └── *.js              # Individual hooks
└── theme/
    ├── index.js          # Theme system
    └── *.js              # Individual theme files
```

## 🔧 TypeScript Configuration

The library uses modern TypeScript configuration:

```json
{
  "compilerOptions": {
    "moduleResolution": "bundler",
    "module": "ES2022",
    "target": "ES2020",
    "jsx": "react-jsx"
  }
}
```

### Module Resolution

Using `"moduleResolution": "bundler"` enables:

- Better tree-shaking
- Proper subpath exports support
- Modern import/export handling

### TODO:

- [ ] Add Jest for testing
- [ ] Find a way to create documentation

## 📚 Resources

## 🔨 What JS bundler to use?

- [Time to Say Goodbye to Webpack](https://gaurav-techgeek.medium.com/time-to-say-goodbye-to-webpack-5bf06ff48823)
- [JS Toolbox 2024 Part 3: Bundlers and Test Frameworks](https://medium.com/@raygunio/js-toolbox-2024-part-3-bundlers-and-test-frameworks-c60f55f26920)
- [Why Webpack Slowly Losing Leadership to Vite and There is No Way to Compete in 2024](https://levelup.gitconnected.com/why-webpack-slowly-lousing-leadership-to-vite-and-there-is-no-way-to-compete-in-2024-advanced-js-8678e5545444)
- [esbuild Getting Started](https://esbuild.github.io/getting-started/)
- [Vite](https://vite.dev/)
- [Webpack](https://webpack.js.org/)
- [Turborepo](https://turbo.build/)
- [Can Rsbuild be used to build libraries or UI components?](https://rsbuild.dev/guide/faq/general#can-rsbuild-be-used-to-build-libraries-or-ui-components)
- [Buildable and Publishable Libraries - Nx](https://nx.dev/concepts/buildable-and-publishable-libraries)

## 📦 How to publish

- [Introduction to GitHub Packages](https://docs.github.com/en/packages/learn-github-packages/introduction-to-github-packages)
- [Working with the npm registry](https://docs.github.com/en/packages/working-with-a-github-packages-registry/working-with-the-npm-registry)

## 🛣️ Subpath implementation

- [Subpath Exports](https://nodejs.org/api/packages.html#subpath-exports)
- [How to support subpath imports using React, Rollup, and TypeScript](https://medium.com/singapore-gds/how-to-support-subpath-imports-using-react-rollup-typescript-1d3d331f821b)
- [Importing from subfolders for a JavaScript package](https://stackoverflow.com/questions/62518396/importing-from-subfolders-for-a-javascript-package/66537252#66537252)
- [How to create a single source npm module](https://www.sensedeep.com/blog/posts/2021/how-to-create-single-source-npm-module.html)
- [Setting up subpath import aliases in a TypeScript project](https://medium.com/@vitaliypotapov/setting-up-subpath-import-aliases-in-a-typescript-project-3ee027b75f1d)
- [The native way to configure path aliases in frontend projects](https://dev.to/nodge/the-native-way-to-configure-path-aliases-in-frontend-projects-ce4)
- [Browse MUI Material](https://unpkg.com/browse/@mui/material@5.3.1/)
- [TypeScript module resolution bundler value](https://www.typescriptlang.org/tsconfig/#moduleResolution)
- [TypeScript and subpath imports](https://stackoverflow.com/questions/73327767/typescript-and-subpath-imports)

## 🛣️ How to test the library locally with another app

- [pnpm link](https://pnpm.io/cli/link)
- [How to test npm packages locally with pnpm](https://medium.com/frontendweb/how-to-test-npm-packages-locally-with-pnpm-bd37cd950497)
- [Solving the problem with npm link and React hooks](https://medium.com/bbc-product-technology/solving-the-problem-with-npm-link-and-react-hooks-266c832dd019)
- [File Protocol with bundled package](https://stackoverflow.com/a/59766644/1823109)
