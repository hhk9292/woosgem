# Code Style Guidelines

## TypeScript

- 암묵적 any 금지, 명시적 타입 선언
- 함수 반환 타입 명시 권장
- `as const satisfies` 패턴 사용
- 배럴 파일(index.ts)은 re-export만

```typescript
// Good
export const Button = {
  displayName: 'Button',
  defaultProps: { variant: 'filled' },
} as const satisfies ComponentDefinition;

// Bad
export const Button = {
  displayName: 'Button',
  defaultProps: { variant: 'filled' },
};
```

## React/Vue

- Props는 별도 타입으로 정의
- Compound component 패턴 (Button.Item 등)
- forwardRef + memo 조합

```typescript
// React wrapper pattern
export const Button = createComponent(ButtonDef) as React.ComponentType<ButtonProps>;
```

## Formatting

| Rule | Value |
|------|-------|
| 들여쓰기 | 2 spaces |
| 세미콜론 | 사용 |
| 따옴표 | 작은따옴표 (JSX 제외) |
| 줄 길이 | 100자 권장 |
| 후행 쉼표 | ES5 스타일 |

## Naming Conventions

| Type | Convention | Example |
|------|------------|---------|
| Component | PascalCase | `Button.ts` |
| SCSS file | kebab-case with underscore | `_button.scss` |
| Test file | kebab-case with .test | `button.test.ts` |
| CSS class | kebab-case | `.btn-primary` |
| Data attribute | kebab-case | `data-variant` |
| CSS variable | `--wg-` prefix | `--wg-color-primary` |
