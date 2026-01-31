# Development Guide

## Commands

```bash
# Install dependencies
pnpm install

# Development mode (all packages watch)
pnpm dev

# Build all packages
pnpm build

# Run tests
pnpm test

# Run tests in watch mode
pnpm test:watch

# Run specific test file
pnpm test packages/ds-core/src/__tests__/button.test.ts

# Run tests with coverage and update dashboard
pnpm test:dashboard

# Clean all build artifacts
pnpm clean

# Storybook (runs on port 6006)
cd packages/ds-storybook && pnpm dev
```

## Development Notes

- All packages use ESM (`"type": "module"`)
- React wrapper pattern: `export const Button = createComponent(ButtonDef) as React.ComponentType<ButtonProps>`
- Vue wrapper pattern: Similar, using `defineComponent`
- Tests focus on component definitions and `mapPropsToAttrs`, not rendered output

## Adding a New Component

1. **Core definition**: `packages/ds-core/src/components/ComponentName.ts`
2. **React wrapper**: `packages/ds-react/src/ComponentName.tsx`
3. **Vue wrapper**: `packages/ds-vue/src/ComponentName.ts`
4. **SCSS styles**: `packages/ds-styles/src/components/_component-name.scss`
5. **Stories**: `packages/ds-storybook/src/stories/ComponentName.stories.tsx`
6. **Tests**: `packages/ds-core/src/__tests__/component-name.test.ts`

## Project Structure

```
woosgem/
├── .github/workflows/       # CI/CD
├── coverage/                # Test coverage reports
├── docs/                    # Documentation
├── packages/
│   ├── ds-core/            # Component definitions + CSP
│   ├── ds-react/           # React wrappers
│   ├── ds-vue/             # Vue wrappers
│   ├── ds-styles/          # SCSS styles
│   ├── ds-storybook/       # Storybook
│   └── utils/              # Utilities
├── scripts/                 # Build scripts
└── vitest.config.ts        # Test configuration
```
