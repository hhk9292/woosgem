# Color Set Protocol (CSP) Schema

Color Set Protocol은 최소한의 입력으로 완전한 테마를 생성하는 표준화된 스키마입니다.

## 개요

- **필수 필드**: 4개 (`id`, `name`, `mode`, `primary.base`)
- **생성 토큰**: 81개
- **Smart Defaults**: 모드(light/dark)에 따른 지능형 기본값

## 스키마 구조

### 필수 필드

```typescript
interface ColorSetDefinition {
  id: string;              // 테마 고유 식별자 (e.g., 'ocean-blue')
  name: string;            // 테마 이름 (e.g., 'Ocean Blue Theme')
  mode: 'light' | 'dark';  // 테마 모드
  primary: {
    base: HexColor;        // 기본 브랜드 색상 (필수)
    hover?: HexColor;      // 호버 상태 (자동 파생)
    active?: HexColor;     // 활성 상태 (자동 파생)
  };
}
```

### 선택 필드

모든 선택 필드는 생략 시 smart defaults가 적용됩니다.

```typescript
interface ColorSetDefinition {
  // ... 필수 필드 ...

  secondary?: {
    base?: HexColor;
    hover?: HexColor;
    active?: HexColor;
  };

  semantic?: {
    danger?: { base?: HexColor; hover?: HexColor; active?: HexColor };
    success?: { base?: HexColor; hover?: HexColor; active?: HexColor };
    warning?: { base?: HexColor; hover?: HexColor; active?: HexColor };
    info?: { base?: HexColor; hover?: HexColor; active?: HexColor };
  };

  text?: {
    default?: HexColor;
    muted?: HexColor;
    subtle?: HexColor;
    inverse?: HexColor;
  };

  background?: {
    default?: HexColor;
    subtle?: HexColor;
    muted?: HexColor;
    elevated?: HexColor;
  };

  border?: {
    default?: HexColor;
    hover?: HexColor;
  };

  focusRing?: HexColor;

  neutral?: {
    50?: HexColor;
    100?: HexColor;
    // ... 200-900
    950?: HexColor;
  };

  surface?: {
    default?: HexColor;
    raised?: HexColor;
    overlay?: HexColor;
    sunken?: HexColor;
  };

  input?: {
    background?: HexColor;
    border?: HexColor;
    borderHover?: HexColor;
    borderFocus?: HexColor;
    placeholder?: HexColor;
    disabled?: HexColor;
    disabledBorder?: HexColor;
  };

  link?: {
    default?: HexColor;
    hover?: HexColor;
    visited?: HexColor;
    active?: HexColor;
  };

  state?: {
    disabled?: HexColor;
    disabledText?: HexColor;
    selected?: HexColor;
    selectedText?: HexColor;
    hover?: HexColor;
    pressed?: HexColor;
  };

  shadow?: {
    default?: ColorValue;
    medium?: ColorValue;
    large?: ColorValue;
  };
}
```

## Smart Defaults

### Light Mode 기본값

| 카테고리 | 토큰 | 기본값 |
|---------|------|--------|
| Semantic | danger | `#DC2626` |
| | success | `#16A34A` |
| | warning | `#F59E0B` |
| | info | `#2563EB` |
| Text | default | `#111827` |
| | muted | `#6B7280` |
| | subtle | `#9CA3AF` |
| | inverse | `#FFFFFF` |
| Background | default | `#FFFFFF` |
| | subtle | `#F9FAFB` |
| | muted | `#F3F4F6` |
| | elevated | `#FFFFFF` |
| Border | default | `#E5E7EB` |

### Dark Mode 기본값

| 카테고리 | 토큰 | 기본값 |
|---------|------|--------|
| Semantic | danger | `#EF4444` |
| | success | `#22C55E` |
| | warning | `#F59E0B` |
| | info | `#3B82F6` |
| Text | default | `#F9FAFB` |
| | muted | `#9CA3AF` |
| | subtle | `#6B7280` |
| | inverse | `#111827` |
| Background | default | `#111827` |
| | subtle | `#1F2937` |
| | muted | `#374151` |
| | elevated | `#1F2937` |
| Border | default | `#374151` |

## 자동 파생 규칙

### 상태 변환

| 파생 토큰 | Light Mode | Dark Mode |
|----------|------------|-----------|
| `*-hover` | darken 10% | lighten 10% |
| `*-active` | darken 15% | lighten 15% |
| `*-alpha-10` | 10% opacity | 10% opacity |
| `*-alpha-20` | 20% opacity | 20% opacity |

### Accent Light 색상

| 파생 토큰 | Light Mode | Dark Mode |
|----------|------------|-----------|
| `*-light` | lighten 45% | 10% opacity |
| `*-light-darken-5` | lighten 40% | 15% opacity |

## 생성되는 토큰 (81개)

### Primary (5개)
- `primary`, `primary-hover`, `primary-active`, `primary-alpha-10`, `primary-alpha-20`

### Secondary (4개)
- `secondary`, `secondary-hover`, `secondary-active`, `secondary-alpha-10`

### Semantic (16개)
- Danger: `danger`, `danger-hover`, `danger-active`, `danger-alpha-20`, `danger-lighten-20`
- Success: `success`, `success-hover`, `success-active`, `success-alpha-20`, `success-lighten-20`
- Warning: `warning`, `warning-hover`, `warning-active`
- Info: `info`, `info-hover`, `info-active`

### Text (4개)
- `text`, `text-muted`, `text-subtle`, `text-inverse`

### Background (6개)
- `background`, `background-subtle`, `background-muted`, `background-elevated`
- `background-muted-darken-3`, `background-subtle-darken-3`

### Border (2개)
- `border`, `border-hover`

### Accent Lights (8개)
- `red-light`, `green-light`, `yellow-light`, `blue-light`
- `red-light-darken-5`, `green-light-darken-5`, `yellow-light-darken-5`, `blue-light-darken-5`

### Focus (1개)
- `focus-ring`

### Neutral (11개)
- `neutral-50` ~ `neutral-950`

### Surface (4개)
- `surface`, `surface-raised`, `surface-overlay`, `surface-sunken`

### Input (7개)
- `input-background`, `input-border`, `input-border-hover`, `input-border-focus`
- `input-placeholder`, `input-disabled`, `input-disabled-border`

### Link (4개)
- `link`, `link-hover`, `link-visited`, `link-active`

### State (6개)
- `state-disabled`, `state-disabled-text`, `state-selected`, `state-selected-text`
- `state-hover`, `state-pressed`

### Shadow (3개)
- `shadow-default`, `shadow-medium`, `shadow-large`

## 사용 예시

### 최소 정의

```typescript
import { generateColorSet } from '@woosgem/core';

const theme = {
  id: 'brand',
  name: 'Brand Theme',
  mode: 'light',
  primary: { base: '#2563EB' },
};

const resolved = generateColorSet(theme);
// → 81개 토큰 생성
```

### 커스텀 semantic 색상

```typescript
const theme = {
  id: 'custom',
  name: 'Custom Theme',
  mode: 'light',
  primary: { base: '#8B5CF6' },
  semantic: {
    danger: { base: '#DC2626' },
    success: { base: '#059669' },
  },
};
```

### 완전한 커스텀 정의

```typescript
const theme = {
  id: 'corporate',
  name: 'Corporate Theme',
  mode: 'light',
  primary: {
    base: '#003366',
    hover: '#002244',
    active: '#001122',
  },
  secondary: { base: '#666666' },
  text: {
    default: '#1A1A1A',
    muted: '#666666',
    subtle: '#999999',
    inverse: '#FFFFFF',
  },
  background: {
    default: '#FFFFFF',
    subtle: '#F8F8F8',
    muted: '#EEEEEE',
    elevated: '#FFFFFF',
  },
};
```

## 출력 형식

### CSS Custom Properties

```typescript
import { generateThemeCSS } from '@woosgem/core';

const css = generateThemeCSS(resolved);
// →
// [data-theme="brand"] {
//   --wg-color-primary: #2563EB;
//   --wg-color-primary-hover: #1D4ED8;
//   ...
// }
```

### SCSS Map

```typescript
import { generateSCSSMap } from '@woosgem/core';

const scss = generateSCSSMap(resolved);
// →
// $brand-colors: (
//   'primary': #2563EB,
//   'primary-hover': #1D4ED8,
//   ...
// );
```

### TypeScript Constants

```typescript
import { generateTypeScriptConstants } from '@woosgem/core';

const ts = generateTypeScriptConstants(resolved);
// →
// export const brandColors = {
//   primary: '#2563EB',
//   primaryHover: '#1D4ED8',
//   ...
// } as const;
```

## 검증

### 스키마 검증

```typescript
import { validateColorSet } from '@woosgem/core';

const result = validateColorSet(theme);
// {
//   valid: true,
//   errors: [],
//   warnings: []
// }
```

### 대비 검증 (WCAG)

```typescript
import { validateDefinitionContrast } from '@woosgem/core';

const result = validateDefinitionContrast(theme);
// {
//   passed: true,
//   checks: [...],
//   warnings: []
// }
```

## 타입 정의

```typescript
type HexColor = `#${string}`;
type ColorValue = HexColor | `rgba(${string})`;
type ThemeMode = 'light' | 'dark';
```
