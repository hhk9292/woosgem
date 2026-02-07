# WooSGem

**English** | [한국어](./README.ko.md)

### Build & Quality
[![CI](https://github.com/hhk9292/woosgem/actions/workflows/test.yml/badge.svg)](https://github.com/hhk9292/woosgem/actions/workflows/test.yml)
[![Tests](https://img.shields.io/badge/tests-1136%20passed-brightgreen)](./docs/test-report.md)
[![Coverage](https://img.shields.io/badge/coverage-62%25-brightgreen)](./docs/test-report.md)

### Project Status
[![Components](https://img.shields.io/badge/components-15-blue)](./docs/roadmap.md)
[![Storybook](https://img.shields.io/badge/stories-106-blueviolet)](./packages/ds-storybook)
[![Vibe Coding](https://img.shields.io/badge/Vibe%20Coding-Claude%20Code-orange)](https://claude.ai/code)
[![Node](https://img.shields.io/badge/node-%3E%3D18-brightgreen)](https://nodejs.org)
[![License](https://img.shields.io/badge/license-MIT-blue)](./LICENSE)

A scalable, theme-aware design system for modern web applications.
This project is built with **Vibe Coding** powered by **Claude Code**.

## Dashboard
- [Detailed Test & Coverage Report](./docs/test-report.md)

## Quick Links

- [API Docs](./docs/api/)
- [Getting Started](./docs/guides/getting-started.md)
- [Roadmap](./docs/roadmap.md)

## Features

- **Multi-Framework Support**: Provides both React and Vue components
- **Theme System**: Runtime theme switching and build-time theme splitting
- **Color Set Protocol**: Generates 81 tokens from minimal input
- **Icon System**: Multi-size (sm, md, lg) SVG assets with theme support (`currentColor`)
- **Type Safety**: Written in TypeScript with full type support
- **Monorepo Architecture**: Efficient build system powered by Turborepo
- **Storybook**: Interactive component documentation and demos

## Installation

### React

```bash
# npm
npm install @woosgem/ds-react @woosgem/ds-styles

# pnpm
pnpm add @woosgem/ds-react @woosgem/ds-styles

# yarn
yarn add @woosgem/ds-react @woosgem/ds-styles
```

### Vue

```bash
# npm
npm install @woosgem/ds-vue @woosgem/ds-styles

# pnpm
pnpm add @woosgem/ds-vue @woosgem/ds-styles

# yarn
yarn add @woosgem/ds-vue @woosgem/ds-styles
```

## Quick Start

### React

```typescript
// main.tsx or App.tsx
import '@woosgem/ds-styles';
import { Button, Badge, Input } from '@woosgem/ds-react';

function App() {
  return (
    <div>
      <Button variant="primary" size="md">
        Click Me
      </Button>

      <Badge variant="success" size="sm">
        New Message
      </Badge>

      <Input
        placeholder="Enter your email"
        fullWidth
      />
    </div>
  );
}

export default App;
```

## Components

Currently **15 components** are available, all with both React and Vue implementations.

### Action (2)
- **Button** - filled/outline/ghost/link variants, 6 colors (primary/secondary/danger/success/warning/info)
- **IconButton** - Icon-only button, 3 shapes (circle/square/none)

### Form (5)
- **Input** - outline/filled/underline variants, error/success states
- **Textarea** - outline/filled variants, resize options (none/vertical/horizontal/both)
- **Checkbox** - Headless compound pattern
- **Radio** - Includes RadioGroup, horizontal/vertical layouts
- **Switch** - Toggle switch, 3 colors (primary/secondary/success)

### Feedback (2)
- **Alert** - info/success/warning/error states, filled/outline/subtle variants, closable option
- **Spinner** - Loading indicator, 4 sizes (xs/sm/md/lg)

### Data Display (3)
- **Badge** - filled/outline/subtle variants, 6 colors
- **Avatar** - circle/square shapes, xs~xl sizes
- **ListItem** - List item component

### Navigation (2)
- **Tab** - underline/filled variants, primary/secondary colors
- **SegmentedControl** - Segmented control component

### Layout (1)
- **Divider** - 6 color variations (default/muted/primary/secondary/danger/success)

> See [Roadmap](./docs/roadmap.md) for the complete component roadmap.

## Theme System

### Available Themes

- **default** - Light theme (default)
- **dark** - Dark theme (Carbon-inspired)

### Runtime Theme Switching

```typescript
// Include all themes
import '@woosgem/styles';

// Switch theme
function setTheme(theme: 'default' | 'dark') {
  document.documentElement.setAttribute('data-theme', theme);
}

function ThemeSwitcher() {
  return (
    <div>
      <button onClick={() => setTheme('default')}>Light</button>
      <button onClick={() => setTheme('dark')}>Dark</button>
    </div>
  );
}
```

### Build-Time Theme Splitting

Load only specific themes to reduce bundle size:

```typescript
// Use dark theme only
import '@woosgem/ds-styles/themes/dark';

// Or light theme only
import '@woosgem/ds-styles/themes/default';
```

## Color Set Protocol (CSP)

A protocol for generating complete themes from minimal input.

```typescript
import { generateColorSet, generateThemeCSS } from '@woosgem/ds-core';

// Minimal definition (only 4 fields required)
const myTheme = {
  id: 'brand',
  name: 'Brand Theme',
  mode: 'light',
  primary: { base: '#2563EB' },
};

// Generates 81 tokens automatically
const resolved = generateColorSet(myTheme);

// Output CSS Custom Properties
const css = generateThemeCSS(resolved);
```

### Smart Defaults

- Specify only `primary.base` to auto-generate 81 color tokens
- Appropriate defaults applied based on mode (light/dark)
- Hover, active, alpha states automatically derived

> See [docs/api/csp.md](./docs/api/csp.md) for the complete schema.

## Development

### Requirements

- Node.js >= 18
- pnpm >= 10.28.2

### Setup & Commands

```bash
# Install dependencies
pnpm install

# Development mode
pnpm dev

# Build
pnpm build

# Run Storybook
pnpm --filter @woosgem/ds-storybook dev

# Run tests
pnpm test:all
```

### Project Structure

```
woosgem/
├── packages/
│   ├── ds-core/      # Component definitions + CSP + token system
│   ├── ds-react/     # React components (15)
│   ├── ds-vue/       # Vue components (15)
│   ├── ds-styles/    # SCSS styles and themes (default/dark)
│   ├── ds-icons/     # SVG icon assets (sm/md/lg)
│   ├── ds-test/      # Consolidated test suite (1,136 tests)
│   ├── ds-storybook/ # Storybook (106 stories)
│   └── utils/        # Utility functions
├── turbo.json         # Turborepo configuration
└── pnpm-workspace.yaml
```

## Contributing

### Adding a New Component

1. Add component definition in `packages/ds-core/src/components`
2. Add styles in `packages/ds-styles/src/components`
3. Add framework implementations in `packages/ds-react/src` and `packages/ds-vue/src`
4. Add stories in `packages/ds-storybook/src/stories`
5. Add tests in `packages/ds-test/src`

### Adding a New Theme (Using CSP)

```typescript
import { generateColorSet, generateThemeCSS } from '@woosgem/ds-core';

const newTheme = {
  id: 'custom',
  name: 'Custom Theme',
  mode: 'light',
  primary: { base: '#YOUR_COLOR' },
  // Optional: secondary, semantic, text, background, etc.
};

const css = generateThemeCSS(generateColorSet(newTheme));
```

## License

MIT
