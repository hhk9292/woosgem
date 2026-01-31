# Button Test Cases

## 분석 요약

### Button Core 정의 (Button.ts)

| 구분 | 내용 |
|------|------|
| **displayName** | `'Button'` |
| **defaultProps** | `variant: 'filled'`, `color: 'primary'`, `size: 'md'`, `loading: false`, `disabled: false`, `fullWidth: false` |
| **propTypes.variant** | `['filled', 'outline', 'ghost', 'link']` |
| **propTypes.color** | `['primary', 'secondary', 'danger', 'success']` |
| **propTypes.size** | `['xs', 'sm', 'md', 'lg']` |

### mapPropsToAttrs 로직

```typescript
{
  class: 'btn',
  'data-variant': merged.variant,
  'data-color': merged.color,
  'data-size': merged.size,
  'data-state': loading ? 'loading' : disabled ? 'disabled' : undefined,
  'data-full-width': fullWidth || undefined,
  disabled: disabled || loading || undefined,
}
```

**핵심 로직:**
- `loading`과 `disabled` 모두 true일 때: `data-state`는 `'loading'` (loading 우선)
- `disabled` 속성: `loading` 또는 `disabled`가 true면 true
- `data-full-width`: true일 때만 `true`, false면 `undefined`

---

## 1. Core Test Cases

### 1.1 displayName 검증

| TC ID | 테스트명 | 입력 | 예상 결과 | 우선순위 |
|-------|----------|------|----------|----------|
| TC-C001 | displayName이 정확하다 | `Button.displayName` | `'Button'` | P0 |

### 1.2 defaultProps 검증

| TC ID | 테스트명 | 입력 | 예상 결과 | 우선순위 |
|-------|----------|------|----------|----------|
| TC-C010 | variant 기본값 | `Button.defaultProps.variant` | `'filled'` | P0 |
| TC-C011 | color 기본값 | `Button.defaultProps.color` | `'primary'` | P0 |
| TC-C012 | size 기본값 | `Button.defaultProps.size` | `'md'` | P0 |
| TC-C013 | loading 기본값 | `Button.defaultProps.loading` | `false` | P0 |
| TC-C014 | disabled 기본값 | `Button.defaultProps.disabled` | `false` | P0 |
| TC-C015 | fullWidth 기본값 | `Button.defaultProps.fullWidth` | `false` | P0 |

### 1.3 propTypes 검증

| TC ID | 테스트명 | 입력 | 예상 결과 | 우선순위 |
|-------|----------|------|----------|----------|
| TC-C020 | variant 옵션 포함 확인 | `ButtonVariants` | `['filled', 'outline', 'ghost', 'link']` 모두 포함 | P0 |
| TC-C021 | color 옵션 포함 확인 | `ButtonColors` | `['primary', 'secondary', 'danger', 'success']` 모두 포함 | P0 |
| TC-C022 | size 옵션 포함 확인 | `ButtonSizes` | `['xs', 'sm', 'md', 'lg']` 모두 포함 | P0 |

### 1.4 mapPropsToAttrs - 기본값 적용

| TC ID | 테스트명 | 입력 | 예상 결과 | 우선순위 |
|-------|----------|------|----------|----------|
| TC-C100 | 빈 객체 전달 시 기본값 적용 | `{}` | `class: 'btn'`, `data-variant: 'filled'`, `data-color: 'primary'`, `data-size: 'md'`, `data-state: undefined` | P0 |

### 1.5 mapPropsToAttrs - variant 개별 검증

| TC ID | 테스트명 | 입력 | 예상 결과 | 우선순위 |
|-------|----------|------|----------|----------|
| TC-C110 | variant: filled | `{ variant: 'filled' }` | `data-variant: 'filled'` | P0 |
| TC-C111 | variant: outline | `{ variant: 'outline' }` | `data-variant: 'outline'` | P0 |
| TC-C112 | variant: ghost | `{ variant: 'ghost' }` | `data-variant: 'ghost'` | P0 |
| TC-C113 | variant: link | `{ variant: 'link' }` | `data-variant: 'link'` | P0 |

### 1.6 mapPropsToAttrs - color 개별 검증

| TC ID | 테스트명 | 입력 | 예상 결과 | 우선순위 |
|-------|----------|------|----------|----------|
| TC-C120 | color: primary | `{ color: 'primary' }` | `data-color: 'primary'` | P0 |
| TC-C121 | color: secondary | `{ color: 'secondary' }` | `data-color: 'secondary'` | P0 |
| TC-C122 | color: danger | `{ color: 'danger' }` | `data-color: 'danger'` | P0 |
| TC-C123 | color: success | `{ color: 'success' }` | `data-color: 'success'` | P0 |

### 1.7 mapPropsToAttrs - size 개별 검증

| TC ID | 테스트명 | 입력 | 예상 결과 | 우선순위 |
|-------|----------|------|----------|----------|
| TC-C130 | size: xs | `{ size: 'xs' }` | `data-size: 'xs'` | P0 |
| TC-C131 | size: sm | `{ size: 'sm' }` | `data-size: 'sm'` | P0 |
| TC-C132 | size: md | `{ size: 'md' }` | `data-size: 'md'` | P0 |
| TC-C133 | size: lg | `{ size: 'lg' }` | `data-size: 'lg'` | P0 |

### 1.8 mapPropsToAttrs - 상태(loading/disabled) 검증

| TC ID | 테스트명 | 입력 | 예상 결과 | 우선순위 |
|-------|----------|------|----------|----------|
| TC-C140 | loading: true | `{ loading: true }` | `data-state: 'loading'`, `disabled: true` | P0 |
| TC-C141 | loading: false | `{ loading: false }` | `data-state: undefined` (disabled도 false면) | P0 |
| TC-C142 | disabled: true | `{ disabled: true }` | `data-state: 'disabled'`, `disabled: true` | P0 |
| TC-C143 | disabled: false | `{ disabled: false }` | `data-state: undefined` (loading도 false면) | P0 |
| TC-C144 | loading + disabled 동시 true | `{ loading: true, disabled: true }` | `data-state: 'loading'` (loading 우선), `disabled: true` | P0 |
| TC-C145 | loading: true, disabled: false | `{ loading: true, disabled: false }` | `data-state: 'loading'`, `disabled: true` | P1 |
| TC-C146 | loading: false, disabled: true | `{ loading: false, disabled: true }` | `data-state: 'disabled'`, `disabled: true` | P1 |

### 1.9 mapPropsToAttrs - fullWidth 검증

| TC ID | 테스트명 | 입력 | 예상 결과 | 우선순위 |
|-------|----------|------|----------|----------|
| TC-C150 | fullWidth: true | `{ fullWidth: true }` | `data-full-width: true` | P0 |
| TC-C151 | fullWidth: false | `{ fullWidth: false }` | `data-full-width: undefined` | P0 |

### 1.10 mapPropsToAttrs - 복합 조합 검증

| TC ID | 테스트명 | 입력 | 예상 결과 | 우선순위 |
|-------|----------|------|----------|----------|
| TC-C160 | 모든 props 조합 1 | `{ variant: 'outline', color: 'danger', size: 'lg' }` | 해당 data-* 속성 일치 | P0 |
| TC-C161 | 모든 props 조합 2 | `{ variant: 'ghost', color: 'success', size: 'xs', fullWidth: true }` | 해당 data-* 속성 일치 | P0 |
| TC-C162 | 상태 + 스타일 조합 | `{ variant: 'link', color: 'secondary', size: 'sm', loading: true }` | `data-state: 'loading'`, 기타 속성 일치 | P0 |

### 1.11 template 검증

| TC ID | 테스트명 | 입력 | 예상 결과 | 우선순위 |
|-------|----------|------|----------|----------|
| TC-C170 | tag가 button이다 | `Button.template.tag` | `'button'` | P0 |
| TC-C171 | default 슬롯 포함 | `Button.template.slots` | `['default']` 포함 | P0 |

---

## 2. React Wrapper Test Cases

### 2.1 Core mapPropsToAttrs 결과와 DOM 일치 검증

| TC ID | 테스트명 | 입력 | 예상 결과 | 우선순위 |
|-------|----------|------|----------|----------|
| TC-R100 | 기본 props로 렌더링 시 Core 결과 일치 | `<Button>Click</Button>` | DOM 속성이 `mapPropsToAttrs({})` 결과와 일치 | P0 |
| TC-R101 | variant prop이 Core 결과와 일치 | `<Button variant="outline">` | `data-variant="outline"` | P0 |
| TC-R102 | color prop이 Core 결과와 일치 | `<Button color="danger">` | `data-color="danger"` | P0 |
| TC-R103 | size prop이 Core 결과와 일치 | `<Button size="lg">` | `data-size="lg"` | P0 |
| TC-R104 | disabled prop이 Core 결과와 일치 | `<Button disabled>` | `data-state="disabled"`, `disabled` 속성 존재 | P0 |
| TC-R105 | loading prop이 Core 결과와 일치 | `<Button loading>` | `data-state="loading"`, `disabled` 속성 존재 | P0 |
| TC-R106 | fullWidth prop이 Core 결과와 일치 | `<Button fullWidth>` | `data-full-width="true"` | P0 |
| TC-R107 | 복합 props가 Core 결과와 일치 | `<Button variant="ghost" color="secondary" size="sm" disabled>` | 모든 data-* 속성 일치 | P0 |

### 2.2 이벤트 핸들러 검증

| TC ID | 테스트명 | 입력 | 예상 결과 | 우선순위 |
|-------|----------|------|----------|----------|
| TC-R200 | onClick 호출 | 버튼 클릭 | `onClick` 핸들러 1회 호출 | P0 |
| TC-R201 | disabled 상태에서 onClick 미호출 | `<Button disabled onClick={fn}>` 클릭 | `onClick` 호출되지 않음 | P0 |
| TC-R202 | loading 상태에서 onClick 미호출 | `<Button loading onClick={fn}>` 클릭 | `onClick` 호출되지 않음 | P0 |
| TC-R203 | 여러 번 클릭 시 매번 호출 | 3회 클릭 | `onClick` 3회 호출 | P1 |
| TC-R204 | 이벤트 객체 전달 확인 | 클릭 | `onClick(event)` 호출 시 event 객체 포함 | P1 |

### 2.3 React 전용 props 검증

| TC ID | 테스트명 | 입력 | 예상 결과 | 우선순위 |
|-------|----------|------|----------|----------|
| TC-R300 | children 렌더링 | `<Button>Hello</Button>` | 버튼 텍스트 `"Hello"` | P0 |
| TC-R301 | JSX children 렌더링 | `<Button><span>Icon</span>Text</Button>` | children 정상 렌더링 | P1 |
| TC-R302 | className 병합 | `<Button className="custom">` | `class="btn custom"` | P0 |
| TC-R303 | type prop 적용 | `<Button type="submit">` | `type="submit"` | P0 |
| TC-R304 | type="button" 기본값 (암묵적) | `<Button>` | `type="button"` (form submit 방지) | P0 |
| TC-R305 | type="reset" 적용 | `<Button type="reset">` | `type="reset"` | P1 |
| TC-R306 | aria-label 적용 | `<Button aria-label="Close">` | `aria-label="Close"` | P0 |
| TC-R307 | ref 전달 | `ref={buttonRef}` | `buttonRef.current`가 HTMLButtonElement | P0 |

### 2.4 기타 네이티브 속성 전달

| TC ID | 테스트명 | 입력 | 예상 결과 | 우선순위 |
|-------|----------|------|----------|----------|
| TC-R400 | id 속성 전달 | `<Button id="my-btn">` | `id="my-btn"` | P1 |
| TC-R401 | data-testid 전달 | `<Button data-testid="submit-btn">` | `data-testid="submit-btn"` | P1 |
| TC-R402 | tabIndex 전달 | `<Button tabIndex={-1}>` | `tabindex="-1"` | P2 |

---

## 3. Vue Wrapper Test Cases

### 3.1 Core mapPropsToAttrs 결과와 DOM 일치 검증

| TC ID | 테스트명 | 입력 | 예상 결과 | 우선순위 |
|-------|----------|------|----------|----------|
| TC-V100 | 기본 props로 렌더링 시 Core 결과 일치 | `<Button>Click</Button>` | DOM 속성이 Core 결과와 일치 | P0 |
| TC-V101 | variant prop이 Core 결과와 일치 | `<Button variant="outline">` | `data-variant="outline"` | P0 |
| TC-V102 | color prop이 Core 결과와 일치 | `<Button color="danger">` | `data-color="danger"` | P0 |
| TC-V103 | size prop이 Core 결과와 일치 | `<Button size="lg">` | `data-size="lg"` | P0 |
| TC-V104 | disabled prop이 Core 결과와 일치 | `<Button :disabled="true">` | `data-state="disabled"` | P0 |
| TC-V105 | loading prop이 Core 결과와 일치 | `<Button :loading="true">` | `data-state="loading"` | P0 |
| TC-V106 | fullWidth prop이 Core 결과와 일치 | `<Button :full-width="true">` | `data-full-width="true"` | P0 |

### 3.2 이벤트 핸들러 검증

| TC ID | 테스트명 | 입력 | 예상 결과 | 우선순위 |
|-------|----------|------|----------|----------|
| TC-V200 | @click 호출 | 버튼 클릭 | 핸들러 1회 호출 | P0 |
| TC-V201 | disabled 상태에서 @click 미호출 | `:disabled="true"` 상태에서 클릭 | 핸들러 미호출 | P0 |
| TC-V202 | loading 상태에서 @click 미호출 | `:loading="true"` 상태에서 클릭 | 핸들러 미호출 | P0 |
| TC-V203 | 이벤트 객체 전달 확인 | 클릭 | MouseEvent 객체 전달 | P1 |

### 3.3 Vue 전용 props/attrs 검증

| TC ID | 테스트명 | 입력 | 예상 결과 | 우선순위 |
|-------|----------|------|----------|----------|
| TC-V300 | 슬롯 콘텐츠 렌더링 | `<Button>Hello</Button>` | 버튼 텍스트 `"Hello"` | P0 |
| TC-V301 | class 병합 | `<Button class="custom">` | `class="btn custom"` | P0 |
| TC-V302 | type prop 적용 | `<Button type="submit">` | `type="submit"` | P0 |
| TC-V303 | aria-label 적용 | `<Button aria-label="Close">` | `aria-label="Close"` | P0 |

---

## 4. 예외 케이스 Test Cases

### 4.1 props 미전달

| TC ID | 테스트명 | 입력 | 예상 결과 | 정책 | 우선순위 |
|-------|----------|------|----------|------|----------|
| TC-E100 | 모든 props 미전달 (Core) | `mapPropsToAttrs({})` | defaultProps 적용 | Fallback | P0 |
| TC-E101 | 모든 props 미전달 (React) | `<Button />` | defaultProps로 렌더링 | Fallback | P0 |
| TC-E102 | 모든 props 미전달 (Vue) | `<Button />` | defaultProps로 렌더링 | Fallback | P0 |

### 4.2 undefined 전달

| TC ID | 테스트명 | 입력 | 예상 결과 | 정책 | 우선순위 |
|-------|----------|------|----------|------|----------|
| TC-E110 | variant: undefined | `{ variant: undefined }` | defaultProps.variant 적용 (`'filled'`) | Fallback | P0 |
| TC-E111 | color: undefined | `{ color: undefined }` | defaultProps.color 적용 (`'primary'`) | Fallback | P0 |
| TC-E112 | size: undefined | `{ size: undefined }` | defaultProps.size 적용 (`'md'`) | Fallback | P0 |
| TC-E113 | loading: undefined | `{ loading: undefined }` | defaultProps.loading 적용 (`false`) | Fallback | P0 |
| TC-E114 | disabled: undefined | `{ disabled: undefined }` | defaultProps.disabled 적용 (`false`) | Fallback | P0 |
| TC-E115 | fullWidth: undefined | `{ fullWidth: undefined }` | defaultProps.fullWidth 적용 (`false`) | Fallback | P0 |

### 4.3 null 전달 (결정 필요)

| TC ID | 테스트명 | 입력 | 예상 결과 | 정책 | 우선순위 |
|-------|----------|------|----------|------|----------|
| TC-E120 | variant: null | `{ variant: null }` | defaultProps.variant 적용 | Fallback | P1 |
| TC-E121 | color: null | `{ color: null }` | defaultProps.color 적용 | Fallback | P1 |
| TC-E122 | size: null | `{ size: null }` | defaultProps.size 적용 | Fallback | P1 |

### 4.4 빈 문자열 전달 (결정 필요)

| TC ID | 테스트명 | 입력 | 예상 결과 | 정책 | 우선순위 |
|-------|----------|------|----------|------|----------|
| TC-E130 | variant: '' | `{ variant: '' }` | defaultProps.variant 적용 | Fallback | P1 |
| TC-E131 | color: '' | `{ color: '' }` | defaultProps.color 적용 | Fallback | P1 |
| TC-E132 | size: '' | `{ size: '' }` | defaultProps.size 적용 | Fallback | P1 |

### 4.5 유효하지 않은 값 전달 (결정 필요)

| TC ID | 테스트명 | 입력 | 예상 결과 | 정책 | 우선순위 |
|-------|----------|------|----------|------|----------|
| TC-E140 | 유효하지 않은 variant | `{ variant: 'invalid' }` | defaultProps.variant + console.warn | Fallback + Warn | P1 |
| TC-E141 | 유효하지 않은 color | `{ color: 'invalid' }` | defaultProps.color + console.warn | Fallback + Warn | P1 |
| TC-E142 | 유효하지 않은 size | `{ size: 'invalid' }` | defaultProps.size + console.warn | Fallback + Warn | P1 |

### 4.6 React 전용 예외 케이스

| TC ID | 테스트명 | 입력 | 예상 결과 | 정책 | 우선순위 |
|-------|----------|------|----------|------|----------|
| TC-E200 | children: null | `<Button>{null}</Button>` | 빈 버튼 렌더링 | React 기본 동작 | P1 |
| TC-E201 | children: undefined | `<Button>{undefined}</Button>` | 빈 버튼 렌더링 | React 기본 동작 | P1 |
| TC-E202 | children 없음 | `<Button></Button>` | 빈 버튼 렌더링 | 허용 | P1 |
| TC-E203 | className: undefined | `<Button className={undefined}>` | `class="btn"` | className 생략 | P1 |
| TC-E204 | onClick: undefined | `<Button onClick={undefined}>` | 클릭해도 에러 없음 | 무시 | P1 |

---

## 5. 커스터마이즈/오버라이드 Test Cases

> 참고: [Component Customization Policy](../api/component-customization.md)

### 5.1 className 병합 (L2 - 허용)

| TC ID | 테스트명 | 입력 | 예상 결과 | 우선순위 |
|-------|----------|------|----------|----------|
| TC-O100 | className 추가 시 병합 | `<Button className="custom">` | `class="btn custom"` | P0 |
| TC-O101 | className 여러 개 추가 | `<Button className="a b c">` | `class="btn a b c"` | P0 |
| TC-O102 | className undefined | `<Button className={undefined}>` | `class="btn"` | P1 |
| TC-O103 | className 빈 문자열 | `<Button className="">` | `class="btn "` 또는 `class="btn"` | P1 |

### 5.2 style prop (L2 - 허용)

| TC ID | 테스트명 | 입력 | 예상 결과 | 구현상태 | 우선순위 |
|-------|----------|------|----------|----------|----------|
| TC-O110 | style 인라인 적용 | `<Button style={{ marginTop: 8 }}>` | `style="margin-top: 8px"` | ✅ 구현됨 | P0 |
| TC-O111 | style 복합 속성 | `<Button style={{ color: 'red', fontSize: 14 }}>` | 스타일 적용됨 | ✅ 구현됨 | P1 |
| TC-O112 | style undefined | `<Button style={undefined}>` | 스타일 없음 | ✅ 구현됨 | P1 |

### 5.3 data-* 속성 추가 (L2 - 허용)

| TC ID | 테스트명 | 입력 | 예상 결과 | 우선순위 |
|-------|----------|------|----------|----------|
| TC-O120 | data-testid 추가 | `<Button data-testid="submit">` | `data-testid="submit"` | P0 |
| TC-O121 | data-analytics 추가 | `<Button data-analytics="click">` | `data-analytics="click"` | P1 |
| TC-O122 | 여러 data-* 추가 | `<Button data-a="1" data-b="2">` | 모두 적용됨 | P1 |

### 5.4 보호 속성 오버라이드 시도 (L3 - 차단) ✅ 구현됨

| TC ID | 테스트명 | 입력 | 예상 결과 | 정책 | 우선순위 |
|-------|----------|------|----------|------|----------|
| TC-O130 | data-variant 오버라이드 시도 | `<Button data-variant="custom">` | Core 값 유지 (`data-variant="filled"`) | 차단 | P0 |
| TC-O131 | data-color 오버라이드 시도 | `<Button data-color="custom">` | Core 값 유지 | 차단 | P0 |
| TC-O132 | data-size 오버라이드 시도 | `<Button data-size="custom">` | Core 값 유지 | 차단 | P0 |
| TC-O133 | data-state 오버라이드 시도 | `<Button data-state="custom">` | Core 값 유지 | 차단 | P0 |
| TC-O134 | data-full-width 오버라이드 시도 | `<Button data-full-width="false">` | Core 값 유지 | 차단 | P0 |
| TC-O135 | class 직접 오버라이드 시도 | `<Button class="override">` | 무시 (className 사용) | 차단 | P1 |

> React: attrs가 Core attrs에 의해 덮어씌워짐 (구현됨)
> Vue: `inheritAttrs: false` + PROTECTED_ATTRS 필터링 (구현됨)

### 5.5 aria-* 속성 (L2 - 허용)

| TC ID | 테스트명 | 입력 | 예상 결과 | 우선순위 |
|-------|----------|------|----------|----------|
| TC-O140 | aria-label | `<Button aria-label="Close">` | `aria-label="Close"` | P0 |
| TC-O141 | aria-pressed | `<Button aria-pressed="true">` | `aria-pressed="true"` | P0 |
| TC-O142 | aria-expanded | `<Button aria-expanded="false">` | `aria-expanded="false"` | P0 |
| TC-O143 | aria-describedby | `<Button aria-describedby="desc">` | `aria-describedby="desc"` | P1 |
| TC-O144 | aria-controls | `<Button aria-controls="menu">` | `aria-controls="menu"` | P1 |
| TC-O145 | 여러 aria-* 조합 | `<Button aria-label="Menu" aria-expanded="true">` | 모두 적용됨 | P1 |

### 5.6 이벤트 핸들러 추가 (L2 - 허용)

| TC ID | 테스트명 | 입력 | 예상 결과 | 우선순위 |
|-------|----------|------|----------|----------|
| TC-O150 | onFocus 핸들러 | `<Button onFocus={fn}>` | focus 시 호출됨 | P0 |
| TC-O151 | onBlur 핸들러 | `<Button onBlur={fn}>` | blur 시 호출됨 | P0 |
| TC-O152 | onMouseEnter 핸들러 | `<Button onMouseEnter={fn}>` | hover 시 호출됨 | P1 |
| TC-O153 | onMouseLeave 핸들러 | `<Button onMouseLeave={fn}>` | leave 시 호출됨 | P1 |
| TC-O154 | onKeyDown 핸들러 | `<Button onKeyDown={fn}>` | keydown 시 호출됨 | P1 |
| TC-O155 | 여러 이벤트 조합 | `<Button onClick={a} onFocus={b} onBlur={c}>` | 각각 호출됨 | P1 |

### 5.7 disabled 오버라이드 (L3 - 제한적 허용)

| TC ID | 테스트명 | 입력 | 예상 결과 | 정책 | 우선순위 |
|-------|----------|------|----------|------|----------|
| TC-O160 | disabled=true 명시 | `<Button disabled>` | disabled 적용 | 허용 | P0 |
| TC-O161 | disabled=false 명시 | `<Button disabled={false}>` | disabled 해제 | 허용 | P0 |
| TC-O162 | loading=true + disabled=false | `<Button loading disabled={false}>` | disabled=true (loading 우선) | Core 우선 | P0 |
| TC-O163 | loading=false + disabled=true | `<Button loading={false} disabled>` | disabled=true | 허용 | P0 |

### 5.8 Native HTML 속성 전달 (L2 - 허용)

| TC ID | 테스트명 | 입력 | 예상 결과 | 우선순위 |
|-------|----------|------|----------|----------|
| TC-O170 | id 속성 | `<Button id="my-btn">` | `id="my-btn"` | P0 |
| TC-O171 | name 속성 | `<Button name="submit">` | `name="submit"` | P1 |
| TC-O172 | form 속성 | `<Button form="myForm">` | `form="myForm"` | P1 |
| TC-O173 | tabIndex 속성 | `<Button tabIndex={-1}>` | `tabindex="-1"` | P1 |
| TC-O174 | title 속성 | `<Button title="Click me">` | `title="Click me"` | P1 |

### 5.9 ref 접근 (L2 - 허용)

| TC ID | 테스트명 | 입력 | 예상 결과 | 우선순위 |
|-------|----------|------|----------|----------|
| TC-O180 | ref로 DOM 접근 | `ref={buttonRef}` | `buttonRef.current`가 HTMLButtonElement | P0 |
| TC-O181 | ref로 focus 호출 | `buttonRef.current.focus()` | 버튼 포커스됨 | P0 |
| TC-O182 | ref로 click 호출 | `buttonRef.current.click()` | onClick 호출됨 | P1 |
| TC-O183 | callback ref | `ref={(el) => { myRef = el }}` | el이 HTMLButtonElement | P1 |

---

## 6. 에러 처리 정책

### 5.1 정책 결정

| 상황 | 정책 | 이유 |
|------|------|------|
| props 미전달 | Fallback (defaultProps) | 사용 편의성 |
| undefined 전달 | Fallback (defaultProps) | JS spread 동작과 일치 |
| null 전달 | Fallback (defaultProps) | 안전한 렌더링 보장 |
| 빈 문자열 전달 | Fallback (defaultProps) | 잘못된 data-* 속성 방지 |
| 유효하지 않은 값 | Fallback + console.warn (dev only) | 개발자에게 알림 + 안전한 렌더링 |

### 5.2 구현 제안

```typescript
// mapPropsToAttrs 내부에서 방어 로직 추가
const safeVariant = ButtonVariants.includes(merged.variant)
  ? merged.variant
  : Button.defaultProps.variant;

if (process.env.NODE_ENV !== 'production' && merged.variant !== safeVariant) {
  console.warn(`[Button] Invalid variant "${merged.variant}". Using default "${safeVariant}".`);
}
```

---

## 7. TC 요약

| 카테고리 | P0 | P1 | P2 | 합계 |
|----------|----|----|----|----|
| Core (TC-C*) | 27 | 4 | 0 | 31 |
| React Wrapper (TC-R*) | 12 | 7 | 1 | 20 |
| Vue Wrapper (TC-V*) | 10 | 4 | 0 | 14 |
| 예외 케이스 (TC-E*) | 9 | 12 | 0 | 21 |
| 커스터마이즈 (TC-O*) | 18 | 19 | 0 | 37 |
| **합계** | **76** | **46** | **1** | **123** |

---

## 8. 검토 상태

- [x] QA Tester 검토 완료 (2026-01-31)
- [x] 누락 TC 추가
- [ ] 에러 처리 정책 최종 확정

### 구현 완료된 TC (2026-01-31)

| 영역 | 구현된 TC |
|------|----------|
| React | TC-R100~R107, TC-R200~R203, TC-R300, TC-R302~R303, TC-R306 |
| React 보호 속성 | TC-O200~O204 (data-variant, color, size, state, full-width) |
| React 기본값 | TC-D100 (type="button" 기본값), TC-D101 (type="submit") |
| React style | TC-O180 (style prop) |
| Vue | TC-V100~V108, TC-V200~V202, TC-V300~V303 |
| Vue 보호 속성 | TC-O200~O203 (data-variant, color, size, state) |
| Vue style | TC-O180 (style prop) |
