# Tab Test Cases

## 분석 요약

### Tab Core 정의 (Tab.ts)

| 구분 | 내용 |
|------|------|
| **displayName** | `'Tab'` |
| **defaultProps** | `variant: 'underline'`, `size: 'md'`, `selected: false`, `disabled: false`, `fullWidth: false` |
| **propTypes.variant** | `['underline', 'filled']` |
| **propTypes.size** | `['sm', 'md', 'lg']` |

### mapPropsToAttrs 로직

```typescript
{
  class: 'tab',
  role: 'tab',
  'data-variant': merged.variant,
  'data-size': merged.size,
  'data-state': selected ? 'selected' : disabled ? 'disabled' : undefined,
  'data-full-width': fullWidth || undefined,
  'aria-selected': selected || undefined,
  disabled: disabled || undefined,
}
```

**핵심 로직:**
- `selected`와 `disabled` 모두 true일 때: `data-state`는 `'selected'` (selected 우선)
- `aria-selected`: `selected`가 true일 때만 true
- `disabled` 속성: `disabled`가 true일 때만 true
- `role`: 항상 `'tab'` (고정)
- `data-full-width`: true일 때만 `true`, false면 `undefined`

### Tab 컴포넌트 보호 속성

다음 속성들은 Core에서 관리하며 사용자가 오버라이드할 수 없습니다:

| 속성 | Core 값 | 이유 |
|------|---------|------|
| `role` | `'tab'` | 접근성 일관성 (WAI-ARIA 탭 역할 보장) |
| `aria-selected` | `selected`에 따라 자동 설정 | 상태 관리 무결성 (selected prop과 동기화) |
| `data-variant` | `merged.variant` | 디자인 일관성 |
| `data-size` | `merged.size` | 디자인 일관성 |
| `data-state` | 상태 우선순위에 따라 자동 계산 | 상태 관리 무결성 |
| `data-full-width` | `fullWidth`에 따라 자동 설정 | 레이아웃 일관성 |

---

## 1. Core Test Cases

### 1.1 displayName 검증

| TC ID | 테스트명 | 입력 | 예상 결과 | 우선순위 |
|-------|----------|------|----------|----------|
| TC-C001 | displayName이 정확하다 | `Tab.displayName` | `'Tab'` | P0 |

### 1.2 defaultProps 검증

| TC ID | 테스트명 | 입력 | 예상 결과 | 우선순위 |
|-------|----------|------|----------|----------|
| TC-C010 | variant 기본값 | `Tab.defaultProps.variant` | `'underline'` | P0 |
| TC-C011 | size 기본값 | `Tab.defaultProps.size` | `'md'` | P0 |
| TC-C012 | selected 기본값 | `Tab.defaultProps.selected` | `false` | P0 |
| TC-C013 | disabled 기본값 | `Tab.defaultProps.disabled` | `false` | P0 |
| TC-C014 | fullWidth 기본값 | `Tab.defaultProps.fullWidth` | `false` | P0 |

### 1.3 propTypes 검증

| TC ID | 테스트명 | 입력 | 예상 결과 | 우선순위 |
|-------|----------|------|----------|----------|
| TC-C020 | variant 옵션 포함 확인 | `TabVariants` | `['underline', 'filled']` 모두 포함 | P0 |
| TC-C021 | size 옵션 포함 확인 | `TabSizes` | `['sm', 'md', 'lg']` 모두 포함 | P0 |

### 1.4 mapPropsToAttrs - 기본값 적용

| TC ID | 테스트명 | 입력 | 예상 결과 | 우선순위 |
|-------|----------|------|----------|----------|
| TC-C100 | 빈 객체 전달 시 기본값 적용 | `{}` | `class: 'tab'`, `role: 'tab'`, `data-variant: 'underline'`, `data-size: 'md'`, `data-state: undefined`, `aria-selected: undefined` | P0 |

### 1.5 mapPropsToAttrs - variant 개별 검증

| TC ID | 테스트명 | 입력 | 예상 결과 | 우선순위 |
|-------|----------|------|----------|----------|
| TC-C110 | variant: underline | `{ variant: 'underline' }` | `data-variant: 'underline'` | P0 |
| TC-C111 | variant: filled | `{ variant: 'filled' }` | `data-variant: 'filled'` | P0 |

### 1.6 mapPropsToAttrs - size 개별 검증

| TC ID | 테스트명 | 입력 | 예상 결과 | 우선순위 |
|-------|----------|------|----------|----------|
| TC-C120 | size: sm | `{ size: 'sm' }` | `data-size: 'sm'` | P0 |
| TC-C121 | size: md | `{ size: 'md' }` | `data-size: 'md'` | P0 |
| TC-C122 | size: lg | `{ size: 'lg' }` | `data-size: 'lg'` | P0 |

### 1.7 mapPropsToAttrs - 상태(selected/disabled) 검증

| TC ID | 테스트명 | 입력 | 예상 결과 | 우선순위 |
|-------|----------|------|----------|----------|
| TC-C130 | selected: true | `{ selected: true }` | `data-state: 'selected'`, `aria-selected: true`, `disabled: undefined` | P0 |
| TC-C131 | selected: false | `{ selected: false }` | `data-state: undefined` (disabled도 false면), `aria-selected: undefined` | P0 |
| TC-C132 | disabled: true | `{ disabled: true }` | `data-state: 'disabled'`, `disabled: true`, `aria-selected: undefined` | P0 |
| TC-C133 | disabled: false | `{ disabled: false }` | `data-state: undefined` (selected도 false면), `disabled: undefined` | P0 |
| TC-C134 | selected + disabled 동시 true | `{ selected: true, disabled: true }` | `data-state: 'selected'` (selected 우선), `aria-selected: true`, `disabled: true` | P0 |
| TC-C135 | selected: true, disabled: false | `{ selected: true, disabled: false }` | `data-state: 'selected'`, `aria-selected: true`, `disabled: undefined` | P1 |
| TC-C136 | selected: false, disabled: true | `{ selected: false, disabled: true }` | `data-state: 'disabled'`, `aria-selected: undefined`, `disabled: true` | P1 |

### 1.8 mapPropsToAttrs - fullWidth 검증

| TC ID | 테스트명 | 입력 | 예상 결과 | 우선순위 |
|-------|----------|------|----------|----------|
| TC-C140 | fullWidth: true | `{ fullWidth: true }` | `data-full-width: true` | P0 |
| TC-C141 | fullWidth: false | `{ fullWidth: false }` | `data-full-width: undefined` | P0 |

### 1.9 mapPropsToAttrs - role 고정값 검증

| TC ID | 테스트명 | 입력 | 예상 결과 | 우선순위 |
|-------|----------|------|----------|----------|
| TC-C150 | role 항상 tab | `{}` | `role: 'tab'` | P0 |
| TC-C151 | role 변경 불가 (props 영향 없음) | `{ selected: true, disabled: true }` | `role: 'tab'` | P0 |

### 1.10 mapPropsToAttrs - 복합 조합 검증

| TC ID | 테스트명 | 입력 | 예상 결과 | 우선순위 |
|-------|----------|------|----------|----------|
| TC-C160 | 모든 props 조합 1 | `{ variant: 'filled', size: 'lg' }` | 해당 data-* 속성 일치 | P0 |
| TC-C161 | 모든 props 조합 2 | `{ variant: 'underline', size: 'sm', fullWidth: true }` | 해당 data-* 속성 일치 | P0 |
| TC-C162 | 상태 + 스타일 조합 | `{ variant: 'filled', size: 'md', selected: true }` | `data-state: 'selected'`, `aria-selected: true`, 기타 속성 일치 | P0 |

### 1.11 template 검증

| TC ID | 테스트명 | 입력 | 예상 결과 | 우선순위 |
|-------|----------|------|----------|----------|
| TC-C170 | tag가 button이다 | `Tab.template.tag` | `'button'` | P0 |
| TC-C171 | default 슬롯 포함 | `Tab.template.slots` | `['default']` 포함 | P0 |

---

## 2. React Wrapper Test Cases

### 2.1 Core mapPropsToAttrs 결과와 DOM 일치 검증

| TC ID | 테스트명 | 입력 | 예상 결과 | 우선순위 |
|-------|----------|------|----------|----------|
| TC-R100 | 기본 props로 렌더링 시 Core 결과 일치 | `<Tab>Home</Tab>` | DOM 속성이 `mapPropsToAttrs({})` 결과와 일치 | P0 |
| TC-R101 | variant prop이 Core 결과와 일치 | `<Tab variant="filled">` | `data-variant="filled"` | P0 |
| TC-R102 | size prop이 Core 결과와 일치 | `<Tab size="lg">` | `data-size="lg"` | P0 |
| TC-R103 | selected prop이 Core 결과와 일치 | `<Tab selected>` | `data-state="selected"`, `aria-selected="true"` | P0 |
| TC-R104 | disabled prop이 Core 결과와 일치 | `<Tab disabled>` | `data-state="disabled"`, `disabled` 속성 존재 | P0 |
| TC-R105 | fullWidth prop이 Core 결과와 일치 | `<Tab fullWidth>` | `data-full-width="true"` | P0 |
| TC-R106 | 복합 props가 Core 결과와 일치 | `<Tab variant="filled" size="sm" selected>` | 모든 data-* 속성 일치 | P0 |
| TC-R107 | role 항상 tab | `<Tab>` | `role="tab"` | P0 |

### 2.2 이벤트 핸들러 검증

| TC ID | 테스트명 | 입력 | 예상 결과 | 우선순위 |
|-------|----------|------|----------|----------|
| TC-R200 | onClick 호출 | 탭 클릭 | `onClick` 핸들러 1회 호출 | P0 |
| TC-R201 | disabled 상태에서 onClick 미호출 | `<Tab disabled onClick={fn}>` 클릭 | `onClick` 호출되지 않음 | P0 |
| TC-R202 | selected 상태에서 onClick 호출됨 | `<Tab selected onClick={fn}>` 클릭 | `onClick` 1회 호출 (disabled 아니므로) | P0 |
| TC-R203 | 여러 번 클릭 시 매번 호출 | 3회 클릭 | `onClick` 3회 호출 | P1 |
| TC-R204 | 이벤트 객체 전달 확인 | 클릭 | `onClick(event)` 호출 시 event 객체 포함 | P1 |

### 2.3 React 전용 props 검증

| TC ID | 테스트명 | 입력 | 예상 결과 | 우선순위 |
|-------|----------|------|----------|----------|
| TC-R300 | children 렌더링 | `<Tab>Home</Tab>` | 탭 텍스트 `"Home"` | P0 |
| TC-R301 | JSX children 렌더링 | `<Tab><span>Icon</span>Text</Tab>` | children 정상 렌더링 | P1 |
| TC-R302 | className 병합 | `<Tab className="custom">` | `class="tab custom"` | P0 |
| TC-R303 | type prop 적용 | `<Tab type="submit">` | `type="submit"` | P0 |
| TC-R304 | type="button" 기본값 (암묵적) | `<Tab>` | `type="button"` (form submit 방지) | P0 |
| TC-R305 | aria-label 적용 | `<Tab aria-label="Close">` | `aria-label="Close"` | P0 |
| TC-R306 | ref 전달 | `ref={tabRef}` | `tabRef.current`가 HTMLButtonElement | P0 |

### 2.4 기타 네이티브 속성 전달

| TC ID | 테스트명 | 입력 | 예상 결과 | 우선순위 |
|-------|----------|------|----------|----------|
| TC-R400 | id 속성 전달 | `<Tab id="my-tab">` | `id="my-tab"` | P1 |
| TC-R401 | data-testid 전달 | `<Tab data-testid="home-tab">` | `data-testid="home-tab"` | P1 |
| TC-R402 | tabIndex 전달 | `<Tab tabIndex={-1}>` | `tabindex="-1"` | P2 |

---

## 3. Vue Wrapper Test Cases

### 3.1 Core mapPropsToAttrs 결과와 DOM 일치 검증

| TC ID | 테스트명 | 입력 | 예상 결과 | 우선순위 |
|-------|----------|------|----------|----------|
| TC-V100 | 기본 props로 렌더링 시 Core 결과 일치 | `<Tab>Home</Tab>` | DOM 속성이 Core 결과와 일치 | P0 |
| TC-V101 | variant prop이 Core 결과와 일치 | `<Tab variant="filled">` | `data-variant="filled"` | P0 |
| TC-V102 | size prop이 Core 결과와 일치 | `<Tab size="lg">` | `data-size="lg"` | P0 |
| TC-V103 | selected prop이 Core 결과와 일치 | `<Tab :selected="true">` | `data-state="selected"`, `aria-selected="true"` | P0 |
| TC-V104 | disabled prop이 Core 결과와 일치 | `<Tab :disabled="true">` | `data-state="disabled"` | P0 |
| TC-V105 | fullWidth prop이 Core 결과와 일치 | `<Tab :full-width="true">` | `data-full-width="true"` | P0 |
| TC-V106 | role 항상 tab | `<Tab>` | `role="tab"` | P0 |

### 3.2 이벤트 핸들러 검증

| TC ID | 테스트명 | 입력 | 예상 결과 | 우선순위 |
|-------|----------|------|----------|----------|
| TC-V200 | @click 호출 | 탭 클릭 | 핸들러 1회 호출 | P0 |
| TC-V201 | disabled 상태에서 @click 미호출 | `:disabled="true"` 상태에서 클릭 | 핸들러 미호출 | P0 |
| TC-V202 | selected 상태에서 @click 호출됨 | `:selected="true"` 상태에서 클릭 | 핸들러 1회 호출 | P0 |
| TC-V203 | 이벤트 객체 전달 확인 | 클릭 | MouseEvent 객체 전달 | P1 |

### 3.3 Vue 전용 props/attrs 검증

| TC ID | 테스트명 | 입력 | 예상 결과 | 우선순위 |
|-------|----------|------|----------|----------|
| TC-V300 | 슬롯 콘텐츠 렌더링 | `<Tab>Home</Tab>` | 탭 텍스트 `"Home"` | P0 |
| TC-V301 | class 병합 | `<Tab class="custom">` | `class="tab custom"` | P0 |
| TC-V302 | type prop 적용 | `<Tab type="submit">` | `type="submit"` | P0 |
| TC-V303 | aria-label 적용 | `<Tab aria-label="Close">` | `aria-label="Close"` | P0 |

---

## 4. 예외 케이스 Test Cases

### 4.1 props 미전달

| TC ID | 테스트명 | 입력 | 예상 결과 | 정책 | 우선순위 |
|-------|----------|------|----------|------|----------|
| TC-E100 | 모든 props 미전달 (Core) | `mapPropsToAttrs({})` | defaultProps 적용 | Fallback | P0 |
| TC-E101 | 모든 props 미전달 (React) | `<Tab />` | defaultProps로 렌더링 | Fallback | P0 |
| TC-E102 | 모든 props 미전달 (Vue) | `<Tab />` | defaultProps로 렌더링 | Fallback | P0 |

### 4.2 undefined 전달

| TC ID | 테스트명 | 입력 | 예상 결과 | 정책 | 우선순위 |
|-------|----------|------|----------|------|----------|
| TC-E110 | variant: undefined | `{ variant: undefined }` | defaultProps.variant 적용 (`'underline'`) | Fallback | P0 |
| TC-E111 | size: undefined | `{ size: undefined }` | defaultProps.size 적용 (`'md'`) | Fallback | P0 |
| TC-E112 | selected: undefined | `{ selected: undefined }` | defaultProps.selected 적용 (`false`) | Fallback | P0 |
| TC-E113 | disabled: undefined | `{ disabled: undefined }` | defaultProps.disabled 적용 (`false`) | Fallback | P0 |
| TC-E114 | fullWidth: undefined | `{ fullWidth: undefined }` | defaultProps.fullWidth 적용 (`false`) | Fallback | P0 |

### 4.3 null 전달

| TC ID | 테스트명 | 입력 | 예상 결과 | 정책 | 우선순위 |
|-------|----------|------|----------|------|----------|
| TC-E120 | variant: null | `{ variant: null }` | defaultProps.variant 적용 | Fallback | P1 |
| TC-E121 | size: null | `{ size: null }` | defaultProps.size 적용 | Fallback | P1 |

### 4.4 빈 문자열 전달

| TC ID | 테스트명 | 입력 | 예상 결과 | 정책 | 우선순위 |
|-------|----------|------|----------|------|----------|
| TC-E130 | variant: '' | `{ variant: '' }` | defaultProps.variant 적용 | Fallback | P1 |
| TC-E131 | size: '' | `{ size: '' }` | defaultProps.size 적용 | Fallback | P1 |

### 4.5 유효하지 않은 값 전달

| TC ID | 테스트명 | 입력 | 예상 결과 | 정책 | 우선순위 |
|-------|----------|------|----------|------|----------|
| TC-E140 | 유효하지 않은 variant | `{ variant: 'invalid' }` | defaultProps.variant + console.warn | Fallback + Warn | P1 |
| TC-E141 | 유효하지 않은 size | `{ size: 'invalid' }` | defaultProps.size + console.warn | Fallback + Warn | P1 |

### 4.6 React 전용 예외 케이스

| TC ID | 테스트명 | 입력 | 예상 결과 | 정책 | 우선순위 |
|-------|----------|------|----------|------|----------|
| TC-E200 | children: null | `<Tab>{null}</Tab>` | 빈 탭 렌더링 | React 기본 동작 | P1 |
| TC-E201 | children: undefined | `<Tab>{undefined}</Tab>` | 빈 탭 렌더링 | React 기본 동작 | P1 |
| TC-E202 | children 없음 | `<Tab></Tab>` | 빈 탭 렌더링 | 허용 | P1 |
| TC-E203 | className: undefined | `<Tab className={undefined}>` | `class="tab"` | className 생략 | P1 |
| TC-E204 | onClick: undefined | `<Tab onClick={undefined}>` | 클릭해도 에러 없음 | 무시 | P1 |

---

## 5. 커스터마이즈/오버라이드 Test Cases

> 참고: [Component Customization Policy](../api/component-customization.md)

### 5.1 className 병합 (L2 - 허용)

| TC ID | 테스트명 | 입력 | 예상 결과 | 우선순위 |
|-------|----------|------|----------|----------|
| TC-O100 | className 추가 시 병합 | `<Tab className="custom">` | `class="tab custom"` | P0 |
| TC-O101 | className 여러 개 추가 | `<Tab className="a b c">` | `class="tab a b c"` | P0 |
| TC-O102 | className undefined | `<Tab className={undefined}>` | `class="tab"` | P1 |
| TC-O103 | className 빈 문자열 | `<Tab className="">` | `class="tab "` 또는 `class="tab"` | P1 |

### 5.2 style prop (L2 - 허용)

| TC ID | 테스트명 | 입력 | 예상 결과 | 구현상태 | 우선순위 |
|-------|----------|------|----------|----------|----------|
| TC-O110 | style 인라인 적용 | `<Tab style={{ marginTop: 8 }}>` | `style="margin-top: 8px"` | ✅ 구현됨 | P0 |
| TC-O111 | style 복합 속성 | `<Tab style={{ color: 'red', fontSize: 14 }}>` | 스타일 적용됨 | ✅ 구현됨 | P1 |
| TC-O112 | style undefined | `<Tab style={undefined}>` | 스타일 없음 | ✅ 구현됨 | P1 |

### 5.3 data-* 속성 추가 (L2 - 허용)

| TC ID | 테스트명 | 입력 | 예상 결과 | 우선순위 |
|-------|----------|------|----------|----------|
| TC-O120 | data-testid 추가 | `<Tab data-testid="home">` | `data-testid="home"` | P0 |
| TC-O121 | data-analytics 추가 | `<Tab data-analytics="click">` | `data-analytics="click"` | P1 |
| TC-O122 | 여러 data-* 추가 | `<Tab data-a="1" data-b="2">` | 모두 적용됨 | P1 |

### 5.4 보호 속성 오버라이드 시도 (L3 - 차단)

| TC ID | 테스트명 | 입력 | 예상 결과 | 정책 | 우선순위 |
|-------|----------|------|----------|------|----------|
| TC-O130 | data-variant 오버라이드 시도 | `<Tab data-variant="custom">` | Core 값 유지 (`data-variant="underline"`) | 차단 | P0 |
| TC-O131 | data-size 오버라이드 시도 | `<Tab data-size="custom">` | Core 값 유지 | 차단 | P0 |
| TC-O132 | data-state 오버라이드 시도 | `<Tab data-state="custom">` | Core 값 유지 | 차단 | P0 |
| TC-O133 | data-full-width 오버라이드 시도 | `<Tab data-full-width="false">` | Core 값 유지 | 차단 | P0 |
| TC-O134 | role 오버라이드 시도 | `<Tab role="button">` | Core 값 유지 (`role="tab"`) | 차단 | P0 |
| TC-O135 | aria-selected 오버라이드 시도 | `<Tab aria-selected="false">` | Core 값 유지 | 차단 | P0 |

> React: attrs가 Core attrs에 의해 덮어씌워짐
> Vue: `inheritAttrs: false` + PROTECTED_ATTRS 필터링

### 5.5 aria-* 속성 (L2 - 허용, 단 aria-selected 제외)

| TC ID | 테스트명 | 입력 | 예상 결과 | 우선순위 |
|-------|----------|------|----------|----------|
| TC-O140 | aria-label | `<Tab aria-label="Close">` | `aria-label="Close"` | P0 |
| TC-O141 | aria-describedby | `<Tab aria-describedby="desc">` | `aria-describedby="desc"` | P1 |
| TC-O142 | aria-controls | `<Tab aria-controls="panel">` | `aria-controls="panel"` | P0 |
| TC-O143 | 여러 aria-* 조합 | `<Tab aria-label="Home" aria-controls="panel-1">` | 모두 적용됨 | P1 |

### 5.6 이벤트 핸들러 추가 (L2 - 허용)

| TC ID | 테스트명 | 입력 | 예상 결과 | 우선순위 |
|-------|----------|------|----------|----------|
| TC-O150 | onFocus 핸들러 | `<Tab onFocus={fn}>` | focus 시 호출됨 | P0 |
| TC-O151 | onBlur 핸들러 | `<Tab onBlur={fn}>` | blur 시 호출됨 | P0 |
| TC-O152 | onMouseEnter 핸들러 | `<Tab onMouseEnter={fn}>` | hover 시 호출됨 | P1 |
| TC-O153 | onKeyDown 핸들러 | `<Tab onKeyDown={fn}>` | keydown 시 호출됨 | P0 |
| TC-O154 | 여러 이벤트 조합 | `<Tab onClick={a} onFocus={b} onKeyDown={c}>` | 각각 호출됨 | P1 |

### 5.7 disabled 오버라이드 (L3 - 제한적 허용)

| TC ID | 테스트명 | 입력 | 예상 결과 | 정책 | 우선순위 |
|-------|----------|------|----------|------|----------|
| TC-O160 | disabled=true 명시 | `<Tab disabled>` | disabled 적용 | 허용 | P0 |
| TC-O161 | disabled=false 명시 | `<Tab disabled={false}>` | disabled 해제 | 허용 | P0 |
| TC-O162 | selected=true + disabled=true | `<Tab selected disabled>` | `data-state="selected"` (selected 우선), disabled=true | Core 우선 | P0 |

### 5.8 Native HTML 속성 전달 (L2 - 허용)

| TC ID | 테스트명 | 입력 | 예상 결과 | 우선순위 |
|-------|----------|------|----------|----------|
| TC-O170 | id 속성 | `<Tab id="my-tab">` | `id="my-tab"` | P0 |
| TC-O171 | name 속성 | `<Tab name="tab">` | `name="tab"` | P1 |
| TC-O172 | tabIndex 속성 | `<Tab tabIndex={-1}>` | `tabindex="-1"` | P1 |
| TC-O173 | title 속성 | `<Tab title="Click me">` | `title="Click me"` | P1 |

### 5.9 ref 접근 (L2 - 허용)

| TC ID | 테스트명 | 입력 | 예상 결과 | 우선순위 |
|-------|----------|------|----------|----------|
| TC-O180 | ref로 DOM 접근 | `ref={tabRef}` | `tabRef.current`가 HTMLButtonElement | P0 |
| TC-O181 | ref로 focus 호출 | `tabRef.current.focus()` | 탭 포커스됨 | P0 |
| TC-O182 | ref로 click 호출 | `tabRef.current.click()` | onClick 호출됨 | P1 |

---

## 6. 접근성 Test Cases

### 6.1 키보드 네비게이션

| TC ID | 테스트명 | 입력 | 예상 결과 | 우선순위 |
|-------|----------|------|----------|----------|
| TC-A100 | Tab 키로 포커스 이동 | Tab 키 입력 | 다음 탭으로 포커스 이동 | P0 |
| TC-A101 | Shift+Tab으로 역방향 이동 | Shift+Tab 키 입력 | 이전 탭으로 포커스 이동 | P0 |
| TC-A102 | Enter 키로 선택 | Tab 포커스 상태에서 Enter | onClick 호출됨 | P0 |
| TC-A103 | Space 키로 선택 | Tab 포커스 상태에서 Space | onClick 호출됨 | P0 |
| TC-A104 | disabled 탭은 포커스 불가 | disabled 탭에 Tab 키 | 건너뛰고 다음 요소로 포커스 | P0 |

### 6.2 스크린 리더 지원

| TC ID | 테스트명 | 입력 | 예상 결과 | 우선순위 |
|-------|----------|------|----------|----------|
| TC-A200 | role="tab" 선언 | `<Tab>` | 스크린 리더가 "tab" 역할 인식 | P0 |
| TC-A201 | selected 상태 전달 | `<Tab selected>` | `aria-selected="true"` | P0 |
| TC-A202 | selected 아닐 때 aria-selected | `<Tab>` | `aria-selected` 속성 없음 또는 false | P0 |
| TC-A203 | disabled 상태 전달 | `<Tab disabled>` | `disabled` 속성 존재 | P0 |
| TC-A204 | aria-label 지원 | `<Tab aria-label="Settings">` | 스크린 리더가 "Settings" 읽음 | P0 |
| TC-A205 | aria-controls 지원 | `<Tab aria-controls="panel-1">` | 연결된 패널 ID 전달 | P0 |

---

## 7. TC 요약

| 카테고리 | P0 | P1 | P2 | 합계 |
|----------|----|----|----|----|
| Core (TC-C*) | 26 | 2 | 0 | 28 |
| React Wrapper (TC-R*) | 13 | 5 | 1 | 19 |
| Vue Wrapper (TC-V*) | 10 | 1 | 0 | 11 |
| 예외 케이스 (TC-E*) | 8 | 10 | 0 | 18 |
| 커스터마이즈 (TC-O*) | 16 | 11 | 0 | 27 |
| 접근성 (TC-A*) | 10 | 0 | 0 | 10 |
| **합계** | **83** | **29** | **1** | **113** |

---

## 8. 검토 상태

- [ ] QA Tester 검토 필요
- [ ] 에러 처리 정책 확정 필요
- [ ] 접근성 TC 추가 검증 필요
