# Badge Test Cases

## 분석 요약

### Badge Core 정의 (Badge.ts)

| 구분 | 내용 |
|------|------|
| **displayName** | `'Badge'` |
| **defaultProps** | `variant: 'solid'`, `color: 'primary'`, `size: 'md'` |
| **propTypes.variant** | `['solid', 'outline', 'subtle']` |
| **propTypes.color** | `['primary', 'secondary', 'danger', 'success', 'warning', 'info']` |
| **propTypes.size** | `['sm', 'md', 'lg']` |

### mapPropsToAttrs 로직

```typescript
{
  class: 'badge',
  'data-variant': merged.variant,
  'data-color': merged.color,
  'data-size': merged.size,
}
```

**핵심 로직:**
- 상태 props 없음 (loading, disabled 등 없음)
- 정적 표시 컴포넌트 (인라인 `<span>` 요소)
- 단순히 variant, color, size를 data-* 속성으로 변환

---

## 1. Core Test Cases

### 1.1 displayName 검증

| TC ID | 테스트명 | 입력 | 예상 결과 | 우선순위 |
|-------|----------|------|----------|----------|
| TC-C001 | displayName이 정확하다 | `Badge.displayName` | `'Badge'` | P0 |

### 1.2 defaultProps 검증

| TC ID | 테스트명 | 입력 | 예상 결과 | 우선순위 |
|-------|----------|------|----------|----------|
| TC-C010 | variant 기본값 | `Badge.defaultProps.variant` | `'solid'` | P0 |
| TC-C011 | color 기본값 | `Badge.defaultProps.color` | `'primary'` | P0 |
| TC-C012 | size 기본값 | `Badge.defaultProps.size` | `'md'` | P0 |

### 1.3 propTypes 검증

| TC ID | 테스트명 | 입력 | 예상 결과 | 우선순위 |
|-------|----------|------|----------|----------|
| TC-C020 | variant 옵션 포함 확인 | `BadgeVariants` | `['solid', 'outline', 'subtle']` 모두 포함 | P0 |
| TC-C021 | color 옵션 포함 확인 | `BadgeColors` | `['primary', 'secondary', 'danger', 'success', 'warning', 'info']` 모두 포함 | P0 |
| TC-C022 | size 옵션 포함 확인 | `BadgeSizes` | `['sm', 'md', 'lg']` 모두 포함 | P0 |

### 1.4 mapPropsToAttrs - 기본값 적용

| TC ID | 테스트명 | 입력 | 예상 결과 | 우선순위 |
|-------|----------|------|----------|----------|
| TC-C100 | 빈 객체 전달 시 기본값 적용 | `{}` | `class: 'badge'`, `data-variant: 'solid'`, `data-color: 'primary'`, `data-size: 'md'` | P0 |

### 1.5 mapPropsToAttrs - variant 개별 검증

| TC ID | 테스트명 | 입력 | 예상 결과 | 우선순위 |
|-------|----------|------|----------|----------|
| TC-C110 | variant: solid | `{ variant: 'solid' }` | `data-variant: 'solid'` | P0 |
| TC-C111 | variant: outline | `{ variant: 'outline' }` | `data-variant: 'outline'` | P0 |
| TC-C112 | variant: subtle | `{ variant: 'subtle' }` | `data-variant: 'subtle'` | P0 |

### 1.6 mapPropsToAttrs - color 개별 검증

| TC ID | 테스트명 | 입력 | 예상 결과 | 우선순위 |
|-------|----------|------|----------|----------|
| TC-C120 | color: primary | `{ color: 'primary' }` | `data-color: 'primary'` | P0 |
| TC-C121 | color: secondary | `{ color: 'secondary' }` | `data-color: 'secondary'` | P0 |
| TC-C122 | color: danger | `{ color: 'danger' }` | `data-color: 'danger'` | P0 |
| TC-C123 | color: success | `{ color: 'success' }` | `data-color: 'success'` | P0 |
| TC-C124 | color: warning | `{ color: 'warning' }` | `data-color: 'warning'` | P0 |
| TC-C125 | color: info | `{ color: 'info' }` | `data-color: 'info'` | P0 |

### 1.7 mapPropsToAttrs - size 개별 검증

| TC ID | 테스트명 | 입력 | 예상 결과 | 우선순위 |
|-------|----------|------|----------|----------|
| TC-C130 | size: sm | `{ size: 'sm' }` | `data-size: 'sm'` | P0 |
| TC-C131 | size: md | `{ size: 'md' }` | `data-size: 'md'` | P0 |
| TC-C132 | size: lg | `{ size: 'lg' }` | `data-size: 'lg'` | P0 |

### 1.8 mapPropsToAttrs - 복합 조합 검증

| TC ID | 테스트명 | 입력 | 예상 결과 | 우선순위 |
|-------|----------|------|----------|----------|
| TC-C140 | 모든 props 조합 1 | `{ variant: 'outline', color: 'danger', size: 'lg' }` | 해당 data-* 속성 일치 | P0 |
| TC-C141 | 모든 props 조합 2 | `{ variant: 'subtle', color: 'warning', size: 'sm' }` | 해당 data-* 속성 일치 | P0 |
| TC-C142 | 모든 props 조합 3 | `{ variant: 'solid', color: 'info', size: 'md' }` | 해당 data-* 속성 일치 | P0 |

### 1.9 template 검증

| TC ID | 테스트명 | 입력 | 예상 결과 | 우선순위 |
|-------|----------|------|----------|----------|
| TC-C150 | tag가 span이다 | `Badge.template.tag` | `'span'` | P0 |
| TC-C151 | default 슬롯 포함 | `Badge.template.slots` | `['default']` 포함 | P0 |

---

## 2. React Wrapper Test Cases

### 2.1 Core mapPropsToAttrs 결과와 DOM 일치 검증

| TC ID | 테스트명 | 입력 | 예상 결과 | 우선순위 |
|-------|----------|------|----------|----------|
| TC-R100 | 기본 props로 렌더링 시 Core 결과 일치 | `<Badge>New</Badge>` | DOM 속성이 `mapPropsToAttrs({})` 결과와 일치 | P0 |
| TC-R101 | variant prop이 Core 결과와 일치 | `<Badge variant="outline">` | `data-variant="outline"` | P0 |
| TC-R102 | color prop이 Core 결과와 일치 | `<Badge color="danger">` | `data-color="danger"` | P0 |
| TC-R103 | size prop이 Core 결과와 일치 | `<Badge size="lg">` | `data-size="lg"` | P0 |
| TC-R104 | 복합 props가 Core 결과와 일치 | `<Badge variant="subtle" color="success" size="sm">` | 모든 data-* 속성 일치 | P0 |

### 2.2 React 전용 props 검증

| TC ID | 테스트명 | 입력 | 예상 결과 | 우선순위 |
|-------|----------|------|----------|----------|
| TC-R200 | children 렌더링 | `<Badge>New</Badge>` | 배지 텍스트 `"New"` | P0 |
| TC-R201 | JSX children 렌더링 | `<Badge><span>Icon</span>Text</Badge>` | children 정상 렌더링 | P1 |
| TC-R202 | className 병합 | `<Badge className="custom">` | `class="badge custom"` | P0 |
| TC-R203 | aria-label 적용 | `<Badge aria-label="Status">` | `aria-label="Status"` | P0 |
| TC-R204 | ref 전달 | `ref={badgeRef}` | `badgeRef.current`가 HTMLSpanElement | P0 |

### 2.3 기타 네이티브 속성 전달

| TC ID | 테스트명 | 입력 | 예상 결과 | 우선순위 |
|-------|----------|------|----------|----------|
| TC-R300 | id 속성 전달 | `<Badge id="my-badge">` | `id="my-badge"` | P1 |
| TC-R301 | data-testid 전달 | `<Badge data-testid="status-badge">` | `data-testid="status-badge"` | P1 |
| TC-R302 | tabIndex 전달 | `<Badge tabIndex={0}>` | `tabindex="0"` | P2 |

---

## 3. Vue Wrapper Test Cases

### 3.1 Core mapPropsToAttrs 결과와 DOM 일치 검증

| TC ID | 테스트명 | 입력 | 예상 결과 | 우선순위 |
|-------|----------|------|----------|----------|
| TC-V100 | 기본 props로 렌더링 시 Core 결과 일치 | `<Badge>New</Badge>` | DOM 속성이 Core 결과와 일치 | P0 |
| TC-V101 | variant prop이 Core 결과와 일치 | `<Badge variant="outline">` | `data-variant="outline"` | P0 |
| TC-V102 | color prop이 Core 결과와 일치 | `<Badge color="danger">` | `data-color="danger"` | P0 |
| TC-V103 | size prop이 Core 결과와 일치 | `<Badge size="lg">` | `data-size="lg"` | P0 |

### 3.2 Vue 전용 props/attrs 검증

| TC ID | 테스트명 | 입력 | 예상 결과 | 우선순위 |
|-------|----------|------|----------|----------|
| TC-V200 | 슬롯 콘텐츠 렌더링 | `<Badge>New</Badge>` | 배지 텍스트 `"New"` | P0 |
| TC-V201 | class 병합 | `<Badge class="custom">` | `class="badge custom"` | P0 |
| TC-V202 | aria-label 적용 | `<Badge aria-label="Status">` | `aria-label="Status"` | P0 |

---

## 4. 예외 케이스 Test Cases

### 4.1 props 미전달

| TC ID | 테스트명 | 입력 | 예상 결과 | 정책 | 우선순위 |
|-------|----------|------|----------|------|----------|
| TC-E100 | 모든 props 미전달 (Core) | `mapPropsToAttrs({})` | defaultProps 적용 | Fallback | P0 |
| TC-E101 | 모든 props 미전달 (React) | `<Badge />` | defaultProps로 렌더링 | Fallback | P0 |
| TC-E102 | 모든 props 미전달 (Vue) | `<Badge />` | defaultProps로 렌더링 | Fallback | P0 |

### 4.2 undefined 전달

| TC ID | 테스트명 | 입력 | 예상 결과 | 정책 | 우선순위 |
|-------|----------|------|----------|------|----------|
| TC-E110 | variant: undefined | `{ variant: undefined }` | defaultProps.variant 적용 (`'solid'`) | Fallback | P0 |
| TC-E111 | color: undefined | `{ color: undefined }` | defaultProps.color 적용 (`'primary'`) | Fallback | P0 |
| TC-E112 | size: undefined | `{ size: undefined }` | defaultProps.size 적용 (`'md'`) | Fallback | P0 |

### 4.3 null 전달

| TC ID | 테스트명 | 입력 | 예상 결과 | 정책 | 우선순위 |
|-------|----------|------|----------|------|----------|
| TC-E120 | variant: null | `{ variant: null }` | defaultProps.variant 적용 | Fallback | P1 |
| TC-E121 | color: null | `{ color: null }` | defaultProps.color 적용 | Fallback | P1 |
| TC-E122 | size: null | `{ size: null }` | defaultProps.size 적용 | Fallback | P1 |

### 4.4 빈 문자열 전달

| TC ID | 테스트명 | 입력 | 예상 결과 | 정책 | 우선순위 |
|-------|----------|------|----------|------|----------|
| TC-E130 | variant: '' | `{ variant: '' }` | defaultProps.variant 적용 | Fallback | P1 |
| TC-E131 | color: '' | `{ color: '' }` | defaultProps.color 적용 | Fallback | P1 |
| TC-E132 | size: '' | `{ size: '' }` | defaultProps.size 적용 | Fallback | P1 |

### 4.5 유효하지 않은 값 전달

| TC ID | 테스트명 | 입력 | 예상 결과 | 정책 | 우선순위 |
|-------|----------|------|----------|------|----------|
| TC-E140 | 유효하지 않은 variant | `{ variant: 'invalid' }` | defaultProps.variant + console.warn | Fallback + Warn | P1 |
| TC-E141 | 유효하지 않은 color | `{ color: 'invalid' }` | defaultProps.color + console.warn | Fallback + Warn | P1 |
| TC-E142 | 유효하지 않은 size | `{ size: 'invalid' }` | defaultProps.size + console.warn | Fallback + Warn | P1 |

### 4.6 React 전용 예외 케이스

| TC ID | 테스트명 | 입력 | 예상 결과 | 정책 | 우선순위 |
|-------|----------|------|----------|------|----------|
| TC-E200 | children: null | `<Badge>{null}</Badge>` | 빈 배지 렌더링 | React 기본 동작 | P1 |
| TC-E201 | children: undefined | `<Badge>{undefined}</Badge>` | 빈 배지 렌더링 | React 기본 동작 | P1 |
| TC-E202 | children 없음 | `<Badge></Badge>` | 빈 배지 렌더링 | 허용 | P1 |
| TC-E203 | className: undefined | `<Badge className={undefined}>` | `class="badge"` | className 생략 | P1 |

---

## 5. 커스터마이즈/오버라이드 Test Cases

> 참고: [Component Customization Policy](../api/component-customization.md)

### 5.1 className 병합 (L2 - 허용)

| TC ID | 테스트명 | 입력 | 예상 결과 | 우선순위 |
|-------|----------|------|----------|----------|
| TC-O100 | className 추가 시 병합 | `<Badge className="custom">` | `class="badge custom"` | P0 |
| TC-O101 | className 여러 개 추가 | `<Badge className="a b c">` | `class="badge a b c"` | P0 |
| TC-O102 | className undefined | `<Badge className={undefined}>` | `class="badge"` | P1 |
| TC-O103 | className 빈 문자열 | `<Badge className="">` | `class="badge "` 또는 `class="badge"` | P1 |

### 5.2 style prop (L2 - 허용)

| TC ID | 테스트명 | 입력 | 예상 결과 | 구현상태 | 우선순위 |
|-------|----------|------|----------|----------|----------|
| TC-O110 | style 인라인 적용 | `<Badge style={{ marginLeft: 8 }}>` | `style="margin-left: 8px"` | 구현 예정 | P0 |
| TC-O111 | style 복합 속성 | `<Badge style={{ color: 'red', fontSize: 12 }}>` | 스타일 적용됨 | 구현 예정 | P1 |
| TC-O112 | style undefined | `<Badge style={undefined}>` | 스타일 없음 | 구현 예정 | P1 |

### 5.3 data-* 속성 추가 (L2 - 허용)

| TC ID | 테스트명 | 입력 | 예상 결과 | 우선순위 |
|-------|----------|------|----------|----------|
| TC-O120 | data-testid 추가 | `<Badge data-testid="status">` | `data-testid="status"` | P0 |
| TC-O121 | data-analytics 추가 | `<Badge data-analytics="badge">` | `data-analytics="badge"` | P1 |
| TC-O122 | 여러 data-* 추가 | `<Badge data-a="1" data-b="2">` | 모두 적용됨 | P1 |

### 5.4 보호 속성 오버라이드 시도 (L3 - 차단)

| TC ID | 테스트명 | 입력 | 예상 결과 | 정책 | 우선순위 |
|-------|----------|------|----------|------|----------|
| TC-O130 | data-variant 오버라이드 시도 | `<Badge data-variant="custom">` | Core 값 유지 (`data-variant="solid"`) | 차단 | P0 |
| TC-O131 | data-color 오버라이드 시도 | `<Badge data-color="custom">` | Core 값 유지 | 차단 | P0 |
| TC-O132 | data-size 오버라이드 시도 | `<Badge data-size="custom">` | Core 값 유지 | 차단 | P0 |
| TC-O133 | class 직접 오버라이드 시도 | `<Badge class="override">` | 무시 (className 사용) | 차단 | P1 |

> React: attrs가 Core attrs에 의해 덮어씌워짐
> Vue: `inheritAttrs: false` + PROTECTED_ATTRS 필터링

### 5.5 aria-* 속성 (L2 - 허용)

| TC ID | 테스트명 | 입력 | 예상 결과 | 우선순위 |
|-------|----------|------|----------|----------|
| TC-O140 | aria-label | `<Badge aria-label="Status">` | `aria-label="Status"` | P0 |
| TC-O141 | aria-live | `<Badge aria-live="polite">` | `aria-live="polite"` | P0 |
| TC-O142 | aria-describedby | `<Badge aria-describedby="desc">` | `aria-describedby="desc"` | P1 |
| TC-O143 | 여러 aria-* 조합 | `<Badge aria-label="New" aria-live="polite">` | 모두 적용됨 | P1 |

### 5.6 이벤트 핸들러 추가 (L2 - 허용)

| TC ID | 테스트명 | 입력 | 예상 결과 | 우선순위 |
|-------|----------|------|----------|----------|
| TC-O150 | onMouseEnter 핸들러 | `<Badge onMouseEnter={fn}>` | hover 시 호출됨 | P1 |
| TC-O151 | onMouseLeave 핸들러 | `<Badge onMouseLeave={fn}>` | leave 시 호출됨 | P1 |
| TC-O152 | onClick 핸들러 | `<Badge onClick={fn}>` | 클릭 시 호출됨 | P1 |
| TC-O153 | 여러 이벤트 조합 | `<Badge onClick={a} onMouseEnter={b}>` | 각각 호출됨 | P1 |

### 5.7 Native HTML 속성 전달 (L2 - 허용)

| TC ID | 테스트명 | 입력 | 예상 결과 | 우선순위 |
|-------|----------|------|----------|----------|
| TC-O160 | id 속성 | `<Badge id="my-badge">` | `id="my-badge"` | P0 |
| TC-O161 | title 속성 | `<Badge title="Tooltip">` | `title="Tooltip"` | P1 |
| TC-O162 | tabIndex 속성 | `<Badge tabIndex={0}>` | `tabindex="0"` | P1 |

### 5.8 ref 접근 (L2 - 허용)

| TC ID | 테스트명 | 입력 | 예상 결과 | 우선순위 |
|-------|----------|------|----------|----------|
| TC-O170 | ref로 DOM 접근 | `ref={badgeRef}` | `badgeRef.current`가 HTMLSpanElement | P0 |
| TC-O171 | ref로 속성 읽기 | `badgeRef.current.textContent` | 배지 텍스트 반환 | P1 |
| TC-O172 | callback ref | `ref={(el) => { myRef = el }}` | el이 HTMLSpanElement | P1 |

---

## 6. 에러 처리 정책

### 6.1 정책 결정

| 상황 | 정책 | 이유 |
|------|------|------|
| props 미전달 | Fallback (defaultProps) | 사용 편의성 |
| undefined 전달 | Fallback (defaultProps) | JS spread 동작과 일치 |
| null 전달 | Fallback (defaultProps) | 안전한 렌더링 보장 |
| 빈 문자열 전달 | Fallback (defaultProps) | 잘못된 data-* 속성 방지 |
| 유효하지 않은 값 | Fallback + console.warn (dev only) | 개발자에게 알림 + 안전한 렌더링 |

### 6.2 구현 제안

```typescript
// mapPropsToAttrs 내부에서 방어 로직 추가
const safeVariant = BadgeVariants.includes(merged.variant)
  ? merged.variant
  : Badge.defaultProps.variant;

if (process.env.NODE_ENV !== 'production' && merged.variant !== safeVariant) {
  console.warn(`[Badge] Invalid variant "${merged.variant}". Using default "${safeVariant}".`);
}
```

---

## 7. TC 요약

| 카테고리 | P0 | P1 | P2 | 합계 |
|----------|----|----|----|----|
| Core (TC-C*) | 18 | 0 | 0 | 18 |
| React Wrapper (TC-R*) | 7 | 2 | 1 | 10 |
| Vue Wrapper (TC-V*) | 7 | 0 | 0 | 7 |
| 예외 케이스 (TC-E*) | 6 | 10 | 0 | 16 |
| 커스터마이즈 (TC-O*) | 13 | 17 | 0 | 30 |
| **합계** | **51** | **29** | **1** | **81** |

---

## 8. 검토 상태

- [ ] QA Tester 검토 필요
- [ ] 에러 처리 정책 최종 확정
- [ ] 구현 후 TC 검증
