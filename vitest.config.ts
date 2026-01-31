import { defineConfig } from 'vitest/config';

export default defineConfig({
  test: {
    globals: true,
    reporters: ['default', 'json'],
    outputFile: {
      json: './coverage/test-results.json',
    },
    include: ['packages/ds-core/src/__tests__/**/*.test.ts'],
    exclude: ['packages/ds-react/**', 'packages/ds-vue/**'],
    coverage: {
      provider: 'v8',
      reporter: ['text', 'html', 'lcov', 'json-summary'],
      reportsDirectory: './coverage',
      include: ['packages/ds-core/src/**/*.ts'],
      exclude: [
        '**/__tests__/**',
        '**/*.test.ts',
        '**/*.d.ts',
        '**/index.ts',
        '**/types.ts',
        '**/tokens/**',
        '**/protocol/schema.ts',
      ],
      thresholds: {
        statements: 60,
        branches: 60,
        functions: 50,
        lines: 60,
      },
    },
  },
});
