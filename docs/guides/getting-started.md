# Getting Started

WooSGem 디자인 시스템을 프로젝트에 적용하는 방법을 안내합니다.

## 설치

### React 프로젝트

```bash
pnpm add @woosgem/ds-react @woosgem/ds-styles
```

### Vue 프로젝트

```bash
pnpm add @woosgem/ds-vue @woosgem/ds-styles
```

## 기본 설정

### 1. 스타일 import

애플리케이션 진입점에서 스타일을 import합니다.

```typescript
// main.tsx 또는 main.ts
import '@woosgem/ds-styles';
```

### 2. 컴포넌트 사용

#### React

```tsx
import { Button, Input, Badge } from '@woosgem/ds-react';

function App() {
  return (
    <div>
      <Button variant="filled" color="primary" size="md">
        Submit
      </Button>
      <Input placeholder="Enter your email" fullWidth />
      <Badge variant="success">Active</Badge>
    </div>
  );
}
```

#### Vue

```vue
<template>
  <div>
    <Button variant="filled" color="primary" size="md">
      Submit
    </Button>
    <Input placeholder="Enter your email" fullWidth />
    <Badge variant="success">Active</Badge>
  </div>
</template>

<script setup>
import { Button, Input, Badge } from '@woosgem/ds-vue';
</script>
```

## 테마 시스템

### 런타임 테마 전환

```typescript
// 테마 전환
document.documentElement.setAttribute('data-theme', 'dark');

// 기본 테마로 복원
document.documentElement.setAttribute('data-theme', 'default');
```

### 빌드타임 테마 분리

번들 크기 최적화를 위해 특정 테마만 로드할 수 있습니다.

```typescript
// 다크 테마만 사용
import '@woosgem/ds-styles/themes/dark';

// 라이트 테마만 사용
import '@woosgem/ds-styles/themes/default';
```

## 사용 가능한 컴포넌트

| 컴포넌트 | 설명 |
|---------|------|
| Button | 다양한 variant와 size를 지원하는 버튼 |
| IconButton | 아이콘 전용 버튼 |
| Input | 텍스트 입력 필드 |
| Checkbox | 체크박스 |
| Badge | 상태 표시 배지 |
| Tab | 탭 네비게이션 |
| Avatar | 사용자 아바타 |
| ListItem | 리스트 아이템 |
| SegmentedControl | 세그먼트 컨트롤 |
| Divider | 구분선 |

## 다음 단계

- [API 문서](../api/csp.md) - Color Set Protocol 상세 스키마
- [Roadmap](../roadmap.md) - 프로젝트 로드맵 및 TODO
