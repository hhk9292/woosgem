# IconButton Test Cases

## 분석 요약

### IconButton Core 정의 (IconButton.ts)

| 구분 | 내용 |
|------|------|
| **displayName** | `'IconButton'` |
| **defaultProps** | `variant: 'filled'`, `color: 'primary'`, `size: 'md'`, `shape: 'square'` |
| **propTypes.variant** | `['filled', 'outline', 'ghost']` |
| **propTypes.color** | `['primary', 'secondary', 'danger']` |
| **propTypes.size** | `['xs', 'sm', 'md', 'lg']` |
| **propTypes.shape** | `['square', 'circle']` |

### mapPropsToAttrs 로직

```typescript
{
  class: 'icon-btn',
  'data-variant': merged.variant,
  'data-color': merged.color,
  'data-size': merged.size,
  'data-shape': merged.shape,
}
```

**핵심 차이점 (vs Button):**
- `loading` prop 없음
- `fullWidth` prop 없음
- `data-state` 속성 없음
- `disabled` 속성 mapPropsToAttrs에서 처리하지 않음 (React/Vue에서 직접 처리)
- `shape` prop 추가 (`'square'`, `'circle'`)
- class: `'icon-btn'` (Button의 `'btn'`과 다름)

---

## 1. Core Test Cases

### 1.1 displayName 검증

| TC ID | 테스트명 | 입력 | 예상 결과 | 우선순위 |
|-------|----------|------|----------|----------|
| TC-C001 | displayName이 정확하다 | `IconButton.displayName` | `'IconButton'` | P0 |

### 1.2 defaultProps 검증

| TC ID | 테스트명 | 입력 | 예상 결과 | 우선순위 |
|-------|----------|------|----------|----------|
| TC-C010 | variant 기본값 | `IconButton.defaultProps.variant` | `'filled'` | P0 |
| TC-C011 | color 기본값 | `IconButton.defaultProps.color` | `'primary'` | P0 |
| TC-C012 | size 기본값 | `IconButton.defaultProps.size` | `'md'` | P0 |
| TC-C013 | shape 기본값 | `IconButton.defaultProps.shape` | `'square'` | P0 |

### 1.3 propTypes 검증

| TC ID | 테스트명 | 입력 | 예상 결과 | 우선순위 |
|-------|----------|------|----------|----------|
| TC-C020 | variant 옵션 포함 확인 | `IconButtonVariants` | `['filled', 'outline', 'ghost']` 모두 포함 | P0 |
| TC-C021 | color 옵션 포함 확인 | `IconButtonColors` | `['primary', 'secondary', 'danger']` 모두 포함 | P0 |
| TC-C022 | size 옵션 포함 확인 | `IconButtonSizes` | `['xs', 'sm', 'md', 'lg']` 모두 포함 | P0 |
| TC-C023 | shape 옵션 포함 확인 | `IconButtonShapes` | `['square', 'circle']` 모두 포함 | P0 |

### 1.4 mapPropsToAttrs - 기본값 적용

| TC ID | 테스트명 | 입력 | 예상 결과 | 우선순위 |
|-------|----------|------|----------|----------|
| TC-C100 | 빈 객체 전달 시 기본값 적용 | `{}` | `class: 'icon-btn'`, `data-variant: 'filled'`, `data-color: 'primary'`, `data-size: 'md'`, `data-shape: 'square'` | P0 |

### 1.5 mapPropsToAttrs - variant 개별 검증

| TC ID | 테스트명 | 입력 | 예상 결과 | 우선순위 |
|-------|----------|------|----------|----------|
| TC-C110 | variant: filled | `{ variant: 'filled' }` | `data-variant: 'filled'` | P0 |
| TC-C111 | variant: outline | `{ variant: 'outline' }` | `data-variant: 'outline'` | P0 |
| TC-C112 | variant: ghost | `{ variant: 'ghost' }` | `data-variant: 'ghost'` | P0 |

### 1.6 mapPropsToAttrs - color 개별 검증

| TC ID | 테스트명 | 입력 | 예상 결과 | 우선순위 |
|-------|----------|------|----------|----------|
| TC-C120 | color: primary | `{ color: 'primary' }` | `data-color: 'primary'` | P0 |
| TC-C121 | color: secondary | `{ color: 'secondary' }` | `data-color: 'secondary'` | P0 |
| TC-C122 | color: danger | `{ color: 'danger' }` | `data-color: 'danger'` | P0 |

### 1.7 mapPropsToAttrs - size 개별 검증

| TC ID | 테스트명 | 입력 | 예상 결과 | 우선순위 |
|-------|----------|------|----------|----------|
| TC-C130 | size: xs | `{ size: 'xs' }` | `data-size: 'xs'` | P0 |
| TC-C131 | size: sm | `{ size: 'sm' }` | `data-size: 'sm'` | P0 |
| TC-C132 | size: md | `{ size: 'md' }` | `data-size: 'md'` | P0 |
| TC-C133 | size: lg | `{ size: 'lg' }` | `data-size: 'lg'` | P0 |

### 1.8 mapPropsToAttrs - shape 개별 검증

| TC ID | 테스트명 | 입력 | 예상 결과 | 우선순위 |
|-------|----------|------|----------|----------|
| TC-C140 | shape: square | `{ shape: 'square' }` | `data-shape: 'square'` | P0 |
| TC-C141 | shape: circle | `{ shape: 'circle' }` | `data-shape: 'circle'` | P0 |

### 1.9 mapPropsToAttrs - 복합 조합 검증

| TC ID | 테스트명 | 입력 | 예상 결과 | 우선순위 |
|-------|----------|------|----------|----------|
| TC-C150 | 모든 props 조합 1 | `{ variant: 'outline', color: 'danger', size: 'lg', shape: 'circle' }` | 해당 data-* 속성 일치 | P0 |
| TC-C151 | 모든 props 조합 2 | `{ variant: 'ghost', color: 'secondary', size: 'xs', shape: 'square' }` | 해당 data-* 속성 일치 | P0 |
| TC-C152 | 기본값 일부 오버라이드 | `{ variant: 'outline', shape: 'circle' }` | `data-variant: 'outline'`, `data-shape: 'circle'`, 나머지 기본값 | P0 |

### 1.10 template 검증

| TC ID | 테스트명 | 입력 | 예상 결과 | 우선순위 |
|-------|----------|------|----------|----------|
| TC-C160 | tag가 button이다 | `IconButton.template.tag` | `'button'` | P0 |
| TC-C161 | default 슬롯 포함 | `IconButton.template.slots` | `['default']` 포함 | P0 |

---

## 2. React Wrapper Test Cases

### 2.1 Core mapPropsToAttrs 결과와 DOM 일치 검증

| TC ID | 테스트명 | 입력 | 예상 결과 | 우선순위 |
|-------|----------|------|----------|----------|
| TC-R100 | 기본 props로 렌더링 시 Core 결과 일치 | `<IconButton><Icon /></IconButton>` | DOM 속성이 `mapPropsToAttrs({})` 결과와 일치 | P0 |
| TC-R101 | variant prop이 Core 결과와 일치 | `<IconButton variant="outline">` | `data-variant="outline"` | P0 |
| TC-R102 | color prop이 Core 결과와 일치 | `<IconButton color="danger">` | `data-color="danger"` | P0 |
| TC-R103 | size prop이 Core 결과와 일치 | `<IconButton size="lg">` | `data-size="lg"` | P0 |
| TC-R104 | shape prop이 Core 결과와 일치 | `<IconButton shape="circle">` | `data-shape="circle"` | P0 |
| TC-R105 | 복합 props가 Core 결과와 일치 | `<IconButton variant="ghost" color="secondary" size="sm" shape="circle">` | 모든 data-* 속성 일치 | P0 |

### 2.2 이벤트 핸들러 검증

| TC ID | 테스트명 | 입력 | 예상 결과 | 우선순위 |
|-------|----------|------|----------|----------|
| TC-R200 | onClick 호출 | 버튼 클릭 | `onClick` 핸들러 1회 호출 | P0 |
| TC-R201 | disabled 상태에서 onClick 미호출 | `<IconButton disabled onClick={fn}>` 클릭 | `onClick` 호출되지 않음 | P0 |
| TC-R202 | 여러 번 클릭 시 매번 호출 | 3회 클릭 | `onClick` 3회 호출 | P1 |
| TC-R203 | 이벤트 객체 전달 확인 | 클릭 | `onClick(event)` 호출 시 event 객체 포함 | P1 |

### 2.3 React 전용 props 검증

| TC ID | 테스트명 | 입력 | 예상 결과 | 우선순위 |
|-------|----------|------|----------|----------|
| TC-R300 | children 렌더링 (아이콘) | `<IconButton><SearchIcon /></IconButton>` | 아이콘 정상 렌더링 | P0 |
| TC-R301 | JSX children 렌더링 | `<IconButton><svg>...</svg></IconButton>` | children 정상 렌더링 | P1 |
| TC-R302 | className 병합 | `<IconButton className="custom">` | `class="icon-btn custom"` | P0 |
| TC-R303 | type prop 적용 | `<IconButton type="submit">` | `type="submit"` | P0 |
| TC-R304 | type="button" 기본값 | `<IconButton>` | `type="button"` (form submit 방지) | P0 |
| TC-R305 | type="reset" 적용 | `<IconButton type="reset">` | `type="reset"` | P1 |
| TC-R306 | aria-label 적용 (권장) | `<IconButton aria-label="Close">` | `aria-label="Close"` | P0 |
| TC-R307 | ref 전달 | `ref={buttonRef}` | `buttonRef.current`가 HTMLButtonElement | P0 |
| TC-R308 | disabled prop 적용 | `<IconButton disabled>` | `disabled` 속성 존재 | P0 |

### 2.4 기타 네이티브 속성 전달

| TC ID | 테스트명 | 입력 | 예상 결과 | 우선순위 |
|-------|----------|------|----------|----------|
| TC-R400 | id 속성 전달 | `<IconButton id="my-icon-btn">` | `id="my-icon-btn"` | P1 |
| TC-R401 | data-testid 전달 | `<IconButton data-testid="close-btn">` | `data-testid="close-btn"` | P1 |
| TC-R402 | tabIndex 전달 | `<IconButton tabIndex={-1}>` | `tabindex="-1"` | P2 |

---

## 3. Vue Wrapper Test Cases

### 3.1 Core mapPropsToAttrs 결과와 DOM 일치 검증

| TC ID | 테스트명 | 입력 | 예상 결과 | 우선순위 |
|-------|----------|------|----------|----------|
| TC-V100 | 기본 props로 렌더링 시 Core 결과 일치 | `<IconButton><Icon /></IconButton>` | DOM 속성이 Core 결과와 일치 | P0 |
| TC-V101 | variant prop이 Core 결과와 일치 | `<IconButton variant="outline">` | `data-variant="outline"` | P0 |
| TC-V102 | color prop이 Core 결과와 일치 | `<IconButton color="danger">` | `data-color="danger"` | P0 |
| TC-V103 | size prop이 Core 결과와 일치 | `<IconButton size="lg">` | `data-size="lg"` | P0 |
| TC-V104 | shape prop이 Core 결과와 일치 | `<IconButton shape="circle">` | `data-shape="circle"` | P0 |

### 3.2 이벤트 핸들러 검증

| TC ID | 테스트명 | 입력 | 예상 결과 | 우선순위 |
|-------|----------|------|----------|----------|
| TC-V200 | @click 호출 | 버튼 클릭 | 핸들러 1회 호출 | P0 |
| TC-V201 | disabled 상태에서 @click 미호출 | `:disabled="true"` 상태에서 클릭 | 핸들러 미호출 | P0 |
| TC-V202 | 이벤트 객체 전달 확인 | 클릭 | MouseEvent 객체 전달 | P1 |

### 3.3 Vue 전용 props/attrs 검증

| TC ID | 테스트명 | 입력 | 예상 결과 | 우선순위 |
|-------|----------|------|----------|----------|
| TC-V300 | 슬롯 콘텐츠 렌더링 | `<IconButton><i class="icon" /></IconButton>` | 아이콘 정상 렌더링 | P0 |
| TC-V301 | class 병합 | `<IconButton class="custom">` | `class="icon-btn custom"` | P0 |
| TC-V302 | type prop 적용 | `<IconButton type="submit">` | `type="submit"` | P0 |
| TC-V303 | aria-label 적용 | `<IconButton aria-label="Close">` | `aria-label="Close"` | P0 |

---

## 4. 예외 케이스 Test Cases

### 4.1 props 미전달

| TC ID | 테스트명 | 입력 | 예상 결과 | 정책 | 우선순위 |
|-------|----------|------|----------|------|----------|
| TC-E100 | 모든 props 미전달 (Core) | `mapPropsToAttrs({})` | defaultProps 적용 | Fallback | P0 |
| TC-E101 | 모든 props 미전달 (React) | `<IconButton />` | defaultProps로 렌더링 | Fallback | P0 |
| TC-E102 | 모든 props 미전달 (Vue) | `<IconButton />` | defaultProps로 렌더링 | Fallback | P0 |

### 4.2 undefined 전달

| TC ID | 테스트명 | 입력 | 예상 결과 | 정책 | 우선순위 |
|-------|----------|------|----------|------|----------|
| TC-E110 | variant: undefined | `{ variant: undefined }` | defaultProps.variant 적용 (`'filled'`) | Fallback | P0 |
| TC-E111 | color: undefined | `{ color: undefined }` | defaultProps.color 적용 (`'primary'`) | Fallback | P0 |
| TC-E112 | size: undefined | `{ size: undefined }` | defaultProps.size 적용 (`'md'`) | Fallback | P0 |
| TC-E113 | shape: undefined | `{ shape: undefined }` | defaultProps.shape 적용 (`'square'`) | Fallback | P0 |

### 4.3 null 전달 (결정 필요)

| TC ID | 테스트명 | 입력 | 예상 결과 | 정책 | 우선순위 |
|-------|----------|------|----------|------|----------|
| TC-E120 | variant: null | `{ variant: null }` | defaultProps.variant 적용 | Fallback | P1 |
| TC-E121 | color: null | `{ color: null }` | defaultProps.color 적용 | Fallback | P1 |
| TC-E122 | size: null | `{ size: null }` | defaultProps.size 적용 | Fallback | P1 |
| TC-E123 | shape: null | `{ shape: null }` | defaultProps.shape 적용 | Fallback | P1 |

### 4.4 빈 문자열 전달 (결정 필요)

| TC ID | 테스트명 | 입력 | 예상 결과 | 정책 | 우선순위 |
|-------|----------|------|----------|------|----------|
| TC-E130 | variant: '' | `{ variant: '' }` | defaultProps.variant 적용 | Fallback | P1 |
| TC-E131 | color: '' | `{ color: '' }` | defaultProps.color 적용 | Fallback | P1 |
| TC-E132 | size: '' | `{ size: '' }` | defaultProps.size 적용 | Fallback | P1 |
| TC-E133 | shape: '' | `{ shape: '' }` | defaultProps.shape 적용 | Fallback | P1 |

### 4.5 유효하지 않은 값 전달 (결정 필요)

| TC ID | 테스트명 | 입력 | 예상 결과 | 정책 | 우선순위 |
|-------|----------|------|----------|------|----------|
| TC-E140 | 유효하지 않은 variant | `{ variant: 'invalid' }` | defaultProps.variant + console.warn | Fallback + Warn | P1 |
| TC-E141 | 유효하지 않은 color | `{ color: 'invalid' }` | defaultProps.color + console.warn | Fallback + Warn | P1 |
| TC-E142 | 유효하지 않은 size | `{ size: 'invalid' }` | defaultProps.size + console.warn | Fallback + Warn | P1 |
| TC-E143 | 유효하지 않은 shape | `{ shape: 'invalid' }` | defaultProps.shape + console.warn | Fallback + Warn | P1 |

### 4.6 React 전용 예외 케이스

| TC ID | 테스트명 | 입력 | 예상 결과 | 정책 | 우선순위 |
|-------|----------|------|----------|------|----------|
| TC-E200 | children: null | `<IconButton>{null}</IconButton>` | 빈 버튼 렌더링 | React 기본 동작 | P1 |
| TC-E201 | children: undefined | `<IconButton>{undefined}</IconButton>` | 빈 버튼 렌더링 | React 기본 동작 | P1 |
| TC-E202 | children 없음 | `<IconButton></IconButton>` | 빈 버튼 렌더링 (접근성 경고 권장) | 허용 | P1 |
| TC-E203 | className: undefined | `<IconButton className={undefined}>` | `class="icon-btn"` | className 생략 | P1 |
| TC-E204 | onClick: undefined | `<IconButton onClick={undefined}>` | 클릭해도 에러 없음 | 무시 | P1 |

---

## 5. 커스터마이즈/오버라이드 Test Cases

> 참고: [Component Customization Policy](../api/component-customization.md)

### 5.1 className 병합 (L2 - 허용)

| TC ID | 테스트명 | 입력 | 예상 결과 | 우선순위 |
|-------|----------|------|----------|----------|
| TC-O100 | className 추가 시 병합 | `<IconButton className="custom">` | `class="icon-btn custom"` | P0 |
| TC-O101 | className 여러 개 추가 | `<IconButton className="a b c">` | `class="icon-btn a b c"` | P0 |
| TC-O102 | className undefined | `<IconButton className={undefined}>` | `class="icon-btn"` | P1 |
| TC-O103 | className 빈 문자열 | `<IconButton className="">` | `class="icon-btn "` 또는 `class="icon-btn"` | P1 |

### 5.2 style prop (L2 - 허용)

| TC ID | 테스트명 | 입력 | 예상 결과 | 구현상태 | 우선순위 |
|-------|----------|------|----------|----------|----------|
| TC-O110 | style 인라인 적용 | `<IconButton style={{ marginTop: 8 }}>` | `style="margin-top: 8px"` | ✅ 구현됨 | P0 |
| TC-O111 | style 복합 속성 | `<IconButton style={{ color: 'red', fontSize: 14 }}>` | 스타일 적용됨 | ✅ 구현됨 | P1 |
| TC-O112 | style undefined | `<IconButton style={undefined}>` | 스타일 없음 | ✅ 구현됨 | P1 |

### 5.3 data-* 속성 추가 (L2 - 허용)

| TC ID | 테스트명 | 입력 | 예상 결과 | 우선순위 |
|-------|----------|------|----------|----------|
| TC-O120 | data-testid 추가 | `<IconButton data-testid="close">` | `data-testid="close"` | P0 |
| TC-O121 | data-analytics 추가 | `<IconButton data-analytics="icon-click">` | `data-analytics="icon-click"` | P1 |
| TC-O122 | 여러 data-* 추가 | `<IconButton data-a="1" data-b="2">` | 모두 적용됨 | P1 |

### 5.4 보호 속성 오버라이드 시도 (L3 - 차단) ✅ 구현됨

| TC ID | 테스트명 | 입력 | 예상 결과 | 정책 | 우선순위 |
|-------|----------|------|----------|------|----------|
| TC-O130 | data-variant 오버라이드 시도 | `<IconButton data-variant="custom">` | Core 값 유지 (`data-variant="filled"`) | 차단 | P0 |
| TC-O131 | data-color 오버라이드 시도 | `<IconButton data-color="custom">` | Core 값 유지 | 차단 | P0 |
| TC-O132 | data-size 오버라이드 시도 | `<IconButton data-size="custom">` | Core 값 유지 | 차단 | P0 |
| TC-O133 | data-shape 오버라이드 시도 | `<IconButton data-shape="custom">` | Core 값 유지 | 차단 | P0 |
| TC-O134 | class 직접 오버라이드 시도 | `<IconButton class="override">` | 무시 (className 사용) | 차단 | P1 |

> React: attrs가 Core attrs에 의해 덮어씌워짐 (구현됨)
> Vue: `inheritAttrs: false` + PROTECTED_ATTRS 필터링 (구현됨)

### 5.5 aria-* 속성 (L2 - 허용)

| TC ID | 테스트명 | 입력 | 예상 결과 | 우선순위 |
|-------|----------|------|----------|----------|
| TC-O140 | aria-label (권장) | `<IconButton aria-label="Close">` | `aria-label="Close"` | P0 |
| TC-O141 | aria-pressed | `<IconButton aria-pressed="true">` | `aria-pressed="true"` | P0 |
| TC-O142 | aria-expanded | `<IconButton aria-expanded="false">` | `aria-expanded="false"` | P0 |
| TC-O143 | aria-describedby | `<IconButton aria-describedby="desc">` | `aria-describedby="desc"` | P1 |
| TC-O144 | aria-controls | `<IconButton aria-controls="menu">` | `aria-controls="menu"` | P1 |
| TC-O145 | 여러 aria-* 조합 | `<IconButton aria-label="Menu" aria-expanded="true">` | 모두 적용됨 | P1 |

### 5.6 이벤트 핸들러 추가 (L2 - 허용)

| TC ID | 테스트명 | 입력 | 예상 결과 | 우선순위 |
|-------|----------|------|----------|----------|
| TC-O150 | onFocus 핸들러 | `<IconButton onFocus={fn}>` | focus 시 호출됨 | P0 |
| TC-O151 | onBlur 핸들러 | `<IconButton onBlur={fn}>` | blur 시 호출됨 | P0 |
| TC-O152 | onMouseEnter 핸들러 | `<IconButton onMouseEnter={fn}>` | hover 시 호출됨 | P1 |
| TC-O153 | onMouseLeave 핸들러 | `<IconButton onMouseLeave={fn}>` | leave 시 호출됨 | P1 |
| TC-O154 | onKeyDown 핸들러 | `<IconButton onKeyDown={fn}>` | keydown 시 호출됨 | P1 |
| TC-O155 | 여러 이벤트 조합 | `<IconButton onClick={a} onFocus={b} onBlur={c}>` | 각각 호출됨 | P1 |

### 5.7 disabled 오버라이드 (L3 - 제한적 허용)

| TC ID | 테스트명 | 입력 | 예상 결과 | 정책 | 우선순위 |
|-------|----------|------|----------|------|----------|
| TC-O160 | disabled=true 명시 | `<IconButton disabled>` | disabled 적용 | 허용 | P0 |
| TC-O161 | disabled=false 명시 | `<IconButton disabled={false}>` | disabled 해제 | 허용 | P0 |

### 5.8 Native HTML 속성 전달 (L2 - 허용)

| TC ID | 테스트명 | 입력 | 예상 결과 | 우선순위 |
|-------|----------|------|----------|----------|
| TC-O170 | id 속성 | `<IconButton id="my-icon-btn">` | `id="my-icon-btn"` | P0 |
| TC-O171 | name 속성 | `<IconButton name="icon">` | `name="icon"` | P1 |
| TC-O172 | form 속성 | `<IconButton form="myForm">` | `form="myForm"` | P1 |
| TC-O173 | tabIndex 속성 | `<IconButton tabIndex={-1}>` | `tabindex="-1"` | P1 |
| TC-O174 | title 속성 | `<IconButton title="Click me">` | `title="Click me"` | P1 |

### 5.9 ref 접근 (L2 - 허용)

| TC ID | 테스트명 | 입력 | 예상 결과 | 우선순위 |
|-------|----------|------|----------|----------|
| TC-O180 | ref로 DOM 접근 | `ref={buttonRef}` | `buttonRef.current`가 HTMLButtonElement | P0 |
| TC-O181 | ref로 focus 호출 | `buttonRef.current.focus()` | 버튼 포커스됨 | P0 |
| TC-O182 | ref로 click 호출 | `buttonRef.current.click()` | onClick 호출됨 | P1 |
| TC-O183 | callback ref | `ref={(el) => { myRef = el }}` | el이 HTMLButtonElement | P1 |

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
const safeVariant = IconButtonVariants.includes(merged.variant)
  ? merged.variant
  : IconButton.defaultProps.variant;

if (process.env.NODE_ENV !== 'production' && merged.variant !== safeVariant) {
  console.warn(`[IconButton] Invalid variant "${merged.variant}". Using default "${safeVariant}".`);
}
```

---

## 7. TC 요약

| 카테고리 | P0 | P1 | P2 | 합계 |
|----------|----|----|----|----|
| Core (TC-C*) | 19 | 0 | 0 | 19 |
| React Wrapper (TC-R*) | 12 | 5 | 1 | 18 |
| Vue Wrapper (TC-V*) | 8 | 3 | 0 | 11 |
| 예외 케이스 (TC-E*) | 8 | 13 | 0 | 21 |
| 커스터마이즈 (TC-O*) | 18 | 19 | 0 | 37 |
| **합계** | **65** | **40** | **1** | **106** |

---

## 8. 검토 상태

- [x] Junior Developer 작성 완료 (2026-01-31)
- [ ] QA Tester 검토 대기
- [ ] 에러 처리 정책 최종 확정

### Button과의 주요 차이점

| 항목 | Button | IconButton |
|------|--------|------------|
| class | `'btn'` | `'icon-btn'` |
| loading prop | ✅ 있음 | ❌ 없음 |
| fullWidth prop | ✅ 있음 | ❌ 없음 |
| shape prop | ❌ 없음 | ✅ 있음 (`'square'`, `'circle'`) |
| data-state | ✅ 있음 | ❌ 없음 |
| color 옵션 | 4개 (primary, secondary, danger, success) | 3개 (primary, secondary, danger) |
| variant 옵션 | 4개 (filled, outline, ghost, link) | 3개 (filled, outline, ghost) |
| aria-label | 선택 | **권장** (아이콘 전용이므로) |
