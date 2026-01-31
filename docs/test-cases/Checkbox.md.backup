# Checkbox Test Cases

## 분석 요약

### Checkbox Core 정의 (Checkbox.ts)

| 구분 | 내용 |
|------|------|
| **displayName** | `'Checkbox'` |
| **defaultProps** | `size: 'md'`, `checked: false`, `indeterminate: false`, `disabled: false` |
| **propTypes.size** | `['sm', 'md', 'lg']` |

### mapPropsToAttrs 로직

```typescript
{
  class: 'checkbox',
  'data-size': merged.size,
  'data-state': disabled ? 'disabled' : indeterminate ? 'indeterminate' : checked ? 'checked' : 'unchecked',
  'aria-checked': indeterminate ? 'mixed' : checked ? 'true' : 'false',
  role: 'checkbox',
  tabIndex: disabled ? -1 : 0,
  disabled: disabled || undefined,
}
```

**핵심 로직:**
- 상태 우선순위: `disabled` > `indeterminate` > `checked` > `unchecked`
- `data-state`: 우선순위에 따라 `'disabled'`, `'indeterminate'`, `'checked'`, `'unchecked'` 중 하나
- `aria-checked`: `indeterminate`일 때 `'mixed'`, `checked`일 때 `'true'`, 아니면 `'false'`
- `tabIndex`: `disabled`일 때 `-1`, 아니면 `0`
- `role`: 항상 `'checkbox'`

---

## 1. Core Test Cases

### 1.1 displayName 검증

| TC ID | 테스트명 | 입력 | 예상 결과 | 우선순위 |
|-------|----------|------|----------|----------|
| TC-C001 | displayName이 정확하다 | `Checkbox.displayName` | `'Checkbox'` | P0 |

### 1.2 defaultProps 검증

| TC ID | 테스트명 | 입력 | 예상 결과 | 우선순위 |
|-------|----------|------|----------|----------|
| TC-C010 | size 기본값 | `Checkbox.defaultProps.size` | `'md'` | P0 |
| TC-C011 | checked 기본값 | `Checkbox.defaultProps.checked` | `false` | P0 |
| TC-C012 | indeterminate 기본값 | `Checkbox.defaultProps.indeterminate` | `false` | P0 |
| TC-C013 | disabled 기본값 | `Checkbox.defaultProps.disabled` | `false` | P0 |

### 1.3 propTypes 검증

| TC ID | 테스트명 | 입력 | 예상 결과 | 우선순위 |
|-------|----------|------|----------|----------|
| TC-C020 | size 옵션 포함 확인 | `CheckboxSizes` | `['sm', 'md', 'lg']` 모두 포함 | P0 |

### 1.4 mapPropsToAttrs - 기본값 적용

| TC ID | 테스트명 | 입력 | 예상 결과 | 우선순위 |
|-------|----------|------|----------|----------|
| TC-C100 | 빈 객체 전달 시 기본값 적용 | `{}` | `class: 'checkbox'`, `data-size: 'md'`, `data-state: 'unchecked'`, `aria-checked: 'false'`, `role: 'checkbox'`, `tabIndex: 0` | P0 |

### 1.5 mapPropsToAttrs - size 개별 검증

| TC ID | 테스트명 | 입력 | 예상 결과 | 우선순위 |
|-------|----------|------|----------|----------|
| TC-C110 | size: sm | `{ size: 'sm' }` | `data-size: 'sm'` | P0 |
| TC-C111 | size: md | `{ size: 'md' }` | `data-size: 'md'` | P0 |
| TC-C112 | size: lg | `{ size: 'lg' }` | `data-size: 'lg'` | P0 |

### 1.6 mapPropsToAttrs - 상태(checked/indeterminate/disabled) 검증

| TC ID | 테스트명 | 입력 | 예상 결과 | 우선순위 |
|-------|----------|------|----------|----------|
| TC-C120 | checked: true | `{ checked: true }` | `data-state: 'checked'`, `aria-checked: 'true'` | P0 |
| TC-C121 | checked: false | `{ checked: false }` | `data-state: 'unchecked'`, `aria-checked: 'false'` | P0 |
| TC-C122 | indeterminate: true | `{ indeterminate: true }` | `data-state: 'indeterminate'`, `aria-checked: 'mixed'` | P0 |
| TC-C123 | indeterminate: false | `{ indeterminate: false }` | `data-state: 'unchecked'` (checked도 false면) | P0 |
| TC-C124 | disabled: true | `{ disabled: true }` | `data-state: 'disabled'`, `disabled: true`, `tabIndex: -1` | P0 |
| TC-C125 | disabled: false | `{ disabled: false }` | `data-state: 'unchecked'` (checked, indeterminate도 false면), `tabIndex: 0` | P0 |

### 1.7 mapPropsToAttrs - 상태 우선순위 검증

| TC ID | 테스트명 | 입력 | 예상 결과 | 우선순위 |
|-------|----------|------|----------|----------|
| TC-C130 | disabled > indeterminate | `{ disabled: true, indeterminate: true }` | `data-state: 'disabled'` | P0 |
| TC-C131 | disabled > checked | `{ disabled: true, checked: true }` | `data-state: 'disabled'` | P0 |
| TC-C132 | indeterminate > checked | `{ indeterminate: true, checked: true }` | `data-state: 'indeterminate'`, `aria-checked: 'mixed'` | P0 |
| TC-C133 | 모든 상태 true | `{ disabled: true, indeterminate: true, checked: true }` | `data-state: 'disabled'` (disabled 우선) | P0 |
| TC-C134 | disabled: false, indeterminate: true, checked: true | `{ disabled: false, indeterminate: true, checked: true }` | `data-state: 'indeterminate'` | P0 |
| TC-C135 | disabled: false, indeterminate: false, checked: true | `{ disabled: false, indeterminate: false, checked: true }` | `data-state: 'checked'` | P0 |

### 1.8 mapPropsToAttrs - tabIndex 검증

| TC ID | 테스트명 | 입력 | 예상 결과 | 우선순위 |
|-------|----------|------|----------|----------|
| TC-C140 | disabled: true일 때 tabIndex | `{ disabled: true }` | `tabIndex: -1` | P0 |
| TC-C141 | disabled: false일 때 tabIndex | `{ disabled: false }` | `tabIndex: 0` | P0 |

### 1.9 mapPropsToAttrs - role 검증

| TC ID | 테스트명 | 입력 | 예상 결과 | 우선순위 |
|-------|----------|------|----------|----------|
| TC-C150 | role이 checkbox이다 | `{}` | `role: 'checkbox'` | P0 |

### 1.10 mapPropsToAttrs - 복합 조합 검증

| TC ID | 테스트명 | 입력 | 예상 결과 | 우선순위 |
|-------|----------|------|----------|----------|
| TC-C160 | size + checked 조합 | `{ size: 'lg', checked: true }` | `data-size: 'lg'`, `data-state: 'checked'` | P0 |
| TC-C161 | size + indeterminate 조합 | `{ size: 'sm', indeterminate: true }` | `data-size: 'sm'`, `data-state: 'indeterminate'` | P0 |
| TC-C162 | size + disabled 조합 | `{ size: 'md', disabled: true }` | `data-size: 'md'`, `data-state: 'disabled'` | P0 |

### 1.11 template 검증

| TC ID | 테스트명 | 입력 | 예상 결과 | 우선순위 |
|-------|----------|------|----------|----------|
| TC-C170 | tag가 div이다 | `Checkbox.template.tag` | `'div'` | P0 |
| TC-C171 | default 슬롯 포함 | `Checkbox.template.slots` | `['default']` 포함 | P0 |

---

## 2. React Wrapper Test Cases

### 2.1 Core mapPropsToAttrs 결과와 DOM 일치 검증

| TC ID | 테스트명 | 입력 | 예상 결과 | 우선순위 |
|-------|----------|------|----------|----------|
| TC-R100 | 기본 props로 렌더링 시 Core 결과 일치 | `<Checkbox />` | DOM 속성이 `mapPropsToAttrs({})` 결과와 일치 | P0 |
| TC-R101 | size prop이 Core 결과와 일치 | `<Checkbox size="lg" />` | `data-size="lg"` | P0 |
| TC-R102 | checked prop이 Core 결과와 일치 | `<Checkbox checked />` | `data-state="checked"`, `aria-checked="true"` | P0 |
| TC-R103 | indeterminate prop이 Core 결과와 일치 | `<Checkbox indeterminate />` | `data-state="indeterminate"`, `aria-checked="mixed"` | P0 |
| TC-R104 | disabled prop이 Core 결과와 일치 | `<Checkbox disabled />` | `data-state="disabled"`, `disabled` 속성 존재, `tabindex="-1"` | P0 |
| TC-R105 | 복합 props가 Core 결과와 일치 | `<Checkbox size="sm" checked disabled />` | 모든 data-* 속성 일치 | P0 |

### 2.2 이벤트 핸들러 검증

| TC ID | 테스트명 | 입력 | 예상 결과 | 우선순위 |
|-------|----------|------|----------|----------|
| TC-R200 | onChange 호출 | 체크박스 클릭 | `onChange` 핸들러 1회 호출 | P0 |
| TC-R201 | disabled 상태에서 onChange 미호출 | `<Checkbox disabled onChange={fn} />` 클릭 | `onChange` 호출되지 않음 | P0 |
| TC-R202 | onChange에 checked 값 전달 | 클릭 (unchecked -> checked) | `onChange(true)` 호출 | P0 |
| TC-R203 | onChange에 checked 값 전달 (반대) | 클릭 (checked -> unchecked) | `onChange(false)` 호출 | P0 |
| TC-R204 | onClick 호출 | 체크박스 클릭 | `onClick` 핸들러 1회 호출 | P1 |
| TC-R205 | disabled 상태에서 onClick 미호출 | `<Checkbox disabled onClick={fn} />` 클릭 | `onClick` 호출되지 않음 | P1 |
| TC-R206 | 여러 번 클릭 시 매번 호출 | 3회 클릭 | `onChange` 3회 호출 | P1 |

### 2.3 키보드 접근성 검증

| TC ID | 테스트명 | 입력 | 예상 결과 | 우선순위 |
|-------|----------|------|----------|----------|
| TC-R210 | Space 키로 토글 | Space 키 누름 (unchecked) | `onChange(true)` 호출 | P0 |
| TC-R211 | Space 키로 토글 (반대) | Space 키 누름 (checked) | `onChange(false)` 호출 | P0 |
| TC-R212 | disabled 상태에서 Space 키 무시 | `<Checkbox disabled />` + Space | `onChange` 호출되지 않음 | P0 |

### 2.4 React 전용 props 검증

| TC ID | 테스트명 | 입력 | 예상 결과 | 우선순위 |
|-------|----------|------|----------|----------|
| TC-R300 | children 렌더링 | `<Checkbox>Label</Checkbox>` | 체크박스 옆에 "Label" 텍스트 | P0 |
| TC-R301 | JSX children 렌더링 | `<Checkbox><span>Custom</span></Checkbox>` | children 정상 렌더링 | P1 |
| TC-R302 | className 병합 | `<Checkbox className="custom" />` | `class="checkbox custom"` | P0 |
| TC-R303 | aria-label 적용 | `<Checkbox aria-label="Accept terms" />` | `aria-label="Accept terms"` | P0 |
| TC-R304 | ref 전달 | `ref={checkboxRef}` | `checkboxRef.current`가 HTMLDivElement | P0 |

### 2.5 기타 네이티브 속성 전달

| TC ID | 테스트명 | 입력 | 예상 결과 | 우선순위 |
|-------|----------|------|----------|----------|
| TC-R400 | id 속성 전달 | `<Checkbox id="my-checkbox" />` | `id="my-checkbox"` | P1 |
| TC-R401 | data-testid 전달 | `<Checkbox data-testid="terms" />` | `data-testid="terms"` | P1 |

---

## 3. Vue Wrapper Test Cases

### 3.1 Core mapPropsToAttrs 결과와 DOM 일치 검증

| TC ID | 테스트명 | 입력 | 예상 결과 | 우선순위 |
|-------|----------|------|----------|----------|
| TC-V100 | 기본 props로 렌더링 시 Core 결과 일치 | `<Checkbox />` | DOM 속성이 Core 결과와 일치 | P0 |
| TC-V101 | size prop이 Core 결과와 일치 | `<Checkbox size="lg" />` | `data-size="lg"` | P0 |
| TC-V102 | checked prop이 Core 결과와 일치 | `<Checkbox :checked="true" />` | `data-state="checked"` | P0 |
| TC-V103 | indeterminate prop이 Core 결과와 일치 | `<Checkbox :indeterminate="true" />` | `data-state="indeterminate"` | P0 |
| TC-V104 | disabled prop이 Core 결과와 일치 | `<Checkbox :disabled="true" />` | `data-state="disabled"` | P0 |

### 3.2 이벤트 핸들러 검증

| TC ID | 테스트명 | 입력 | 예상 결과 | 우선순위 |
|-------|----------|------|----------|----------|
| TC-V200 | @change 호출 | 체크박스 클릭 | 핸들러 1회 호출 | P0 |
| TC-V201 | disabled 상태에서 @change 미호출 | `:disabled="true"` 상태에서 클릭 | 핸들러 미호출 | P0 |
| TC-V202 | @change에 checked 값 전달 | 클릭 (unchecked -> checked) | `event` 값이 `true` | P0 |
| TC-V203 | @click 호출 | 체크박스 클릭 | 핸들러 1회 호출 | P1 |

### 3.3 v-model 지원 검증

| TC ID | 테스트명 | 입력 | 예상 결과 | 우선순위 |
|-------|----------|------|----------|----------|
| TC-V210 | v-model 양방향 바인딩 | `<Checkbox v-model="value" />` + 클릭 | `value`가 `true`로 변경 | P0 |
| TC-V211 | v-model 반대 방향 | 클릭 (checked -> unchecked) | `value`가 `false`로 변경 | P0 |
| TC-V212 | v-model 초기값 반영 | `v-model="true"` | `data-state="checked"` | P0 |

### 3.4 키보드 접근성 검증

| TC ID | 테스트명 | 입력 | 예상 결과 | 우선순위 |
|-------|----------|------|----------|----------|
| TC-V220 | Space 키로 토글 | Space 키 누름 | `@change` 호출 | P0 |
| TC-V221 | disabled 상태에서 Space 키 무시 | `:disabled="true"` + Space | `@change` 호출되지 않음 | P0 |

### 3.5 Vue 전용 props/attrs 검증

| TC ID | 테스트명 | 입력 | 예상 결과 | 우선순위 |
|-------|----------|------|----------|----------|
| TC-V300 | 슬롯 콘텐츠 렌더링 | `<Checkbox>Label</Checkbox>` | 체크박스 옆에 "Label" 텍스트 | P0 |
| TC-V301 | class 병합 | `<Checkbox class="custom" />` | `class="checkbox custom"` | P0 |
| TC-V302 | aria-label 적용 | `<Checkbox aria-label="Accept" />` | `aria-label="Accept"` | P0 |

---

## 4. 예외 케이스 Test Cases

### 4.1 props 미전달

| TC ID | 테스트명 | 입력 | 예상 결과 | 정책 | 우선순위 |
|-------|----------|------|----------|------|----------|
| TC-E100 | 모든 props 미전달 (Core) | `mapPropsToAttrs({})` | defaultProps 적용 | Fallback | P0 |
| TC-E101 | 모든 props 미전달 (React) | `<Checkbox />` | defaultProps로 렌더링 | Fallback | P0 |
| TC-E102 | 모든 props 미전달 (Vue) | `<Checkbox />` | defaultProps로 렌더링 | Fallback | P0 |

### 4.2 undefined 전달

| TC ID | 테스트명 | 입력 | 예상 결과 | 정책 | 우선순위 |
|-------|----------|------|----------|------|----------|
| TC-E110 | size: undefined | `{ size: undefined }` | defaultProps.size 적용 (`'md'`) | Fallback | P0 |
| TC-E111 | checked: undefined | `{ checked: undefined }` | defaultProps.checked 적용 (`false`) | Fallback | P0 |
| TC-E112 | indeterminate: undefined | `{ indeterminate: undefined }` | defaultProps.indeterminate 적용 (`false`) | Fallback | P0 |
| TC-E113 | disabled: undefined | `{ disabled: undefined }` | defaultProps.disabled 적용 (`false`) | Fallback | P0 |

### 4.3 null 전달

| TC ID | 테스트명 | 입력 | 예상 결과 | 정책 | 우선순위 |
|-------|----------|------|----------|------|----------|
| TC-E120 | size: null | `{ size: null }` | defaultProps.size 적용 | Fallback | P1 |
| TC-E121 | checked: null | `{ checked: null }` | defaultProps.checked 적용 | Fallback | P1 |
| TC-E122 | indeterminate: null | `{ indeterminate: null }` | defaultProps.indeterminate 적용 | Fallback | P1 |

### 4.4 빈 문자열 전달

| TC ID | 테스트명 | 입력 | 예상 결과 | 정책 | 우선순위 |
|-------|----------|------|----------|------|----------|
| TC-E130 | size: '' | `{ size: '' }` | defaultProps.size 적용 | Fallback | P1 |

### 4.5 유효하지 않은 값 전달

| TC ID | 테스트명 | 입력 | 예상 결과 | 정책 | 우선순위 |
|-------|----------|------|----------|------|----------|
| TC-E140 | 유효하지 않은 size | `{ size: 'invalid' }` | defaultProps.size + console.warn | Fallback + Warn | P1 |
| TC-E141 | checked: 문자열 | `{ checked: 'true' }` | truthy 값으로 처리 또는 Fallback | 결정 필요 | P1 |
| TC-E142 | indeterminate: 문자열 | `{ indeterminate: 'true' }` | truthy 값으로 처리 또는 Fallback | 결정 필요 | P1 |

### 4.6 React 전용 예외 케이스

| TC ID | 테스트명 | 입력 | 예상 결과 | 정책 | 우선순위 |
|-------|----------|------|----------|------|----------|
| TC-E200 | children: null | `<Checkbox>{null}</Checkbox>` | 빈 체크박스 렌더링 | React 기본 동작 | P1 |
| TC-E201 | children: undefined | `<Checkbox>{undefined}</Checkbox>` | 빈 체크박스 렌더링 | React 기본 동작 | P1 |
| TC-E202 | children 없음 | `<Checkbox />` | 빈 체크박스 렌더링 | 허용 | P1 |
| TC-E203 | className: undefined | `<Checkbox className={undefined} />` | `class="checkbox"` | className 생략 | P1 |
| TC-E204 | onChange: undefined | `<Checkbox onChange={undefined} />` | 클릭해도 에러 없음 | 무시 | P1 |

---

## 5. 커스터마이즈/오버라이드 Test Cases

> 참고: [Component Customization Policy](../api/component-customization.md)

### 5.1 className 병합 (L2 - 허용)

| TC ID | 테스트명 | 입력 | 예상 결과 | 우선순위 |
|-------|----------|------|----------|----------|
| TC-O100 | className 추가 시 병합 | `<Checkbox className="custom" />` | `class="checkbox custom"` | P0 |
| TC-O101 | className 여러 개 추가 | `<Checkbox className="a b c" />` | `class="checkbox a b c"` | P0 |
| TC-O102 | className undefined | `<Checkbox className={undefined} />` | `class="checkbox"` | P1 |
| TC-O103 | className 빈 문자열 | `<Checkbox className="" />` | `class="checkbox "` 또는 `class="checkbox"` | P1 |

### 5.2 style prop (L2 - 허용)

| TC ID | 테스트명 | 입력 | 예상 결과 | 구현상태 | 우선순위 |
|-------|----------|------|----------|----------|----------|
| TC-O110 | style 인라인 적용 | `<Checkbox style={{ marginTop: 8 }} />` | `style="margin-top: 8px"` | ✅ 구현됨 | P0 |
| TC-O111 | style 복합 속성 | `<Checkbox style={{ color: 'red', fontSize: 14 }} />` | 스타일 적용됨 | ✅ 구현됨 | P1 |
| TC-O112 | style undefined | `<Checkbox style={undefined} />` | 스타일 없음 | ✅ 구현됨 | P1 |

### 5.3 data-* 속성 추가 (L2 - 허용)

| TC ID | 테스트명 | 입력 | 예상 결과 | 우선순위 |
|-------|----------|------|----------|----------|
| TC-O120 | data-testid 추가 | `<Checkbox data-testid="terms" />` | `data-testid="terms"` | P0 |
| TC-O121 | data-analytics 추가 | `<Checkbox data-analytics="track" />` | `data-analytics="track"` | P1 |
| TC-O122 | 여러 data-* 추가 | `<Checkbox data-a="1" data-b="2" />` | 모두 적용됨 | P1 |

### 5.4 보호 속성 오버라이드 시도 (L3 - 차단)

| TC ID | 테스트명 | 입력 | 예상 결과 | 정책 | 우선순위 |
|-------|----------|------|----------|------|----------|
| TC-O130 | data-size 오버라이드 시도 | `<Checkbox data-size="custom" />` | Core 값 유지 (`data-size="md"`) | 차단 | P0 |
| TC-O131 | data-state 오버라이드 시도 | `<Checkbox data-state="custom" />` | Core 값 유지 | 차단 | P0 |
| TC-O132 | class 직접 오버라이드 시도 | `<Checkbox class="override" />` | 무시 (className 사용) | 차단 | P1 |

> React: attrs가 Core attrs에 의해 덮어씌워짐
> Vue: `inheritAttrs: false` + PROTECTED_ATTRS 필터링

### 5.5 aria-* 속성 (L2 - 허용)

| TC ID | 테스트명 | 입력 | 예상 결과 | 우선순위 |
|-------|----------|------|----------|----------|
| TC-O140 | aria-label | `<Checkbox aria-label="Accept terms" />` | `aria-label="Accept terms"` | P0 |
| TC-O141 | aria-describedby | `<Checkbox aria-describedby="desc" />` | `aria-describedby="desc"` | P1 |
| TC-O142 | aria-checked 오버라이드 시도 | `<Checkbox aria-checked="true" />` | Core 값 유지 (우선순위에 따라 결정) | 차단 또는 허용 (정책 결정 필요) | P1 |
| TC-O143 | 여러 aria-* 조합 | `<Checkbox aria-label="Accept" aria-describedby="terms" />` | 모두 적용됨 | P1 |

### 5.6 이벤트 핸들러 추가 (L2 - 허용)

| TC ID | 테스트명 | 입력 | 예상 결과 | 우선순위 |
|-------|----------|------|----------|----------|
| TC-O150 | onFocus 핸들러 | `<Checkbox onFocus={fn} />` | focus 시 호출됨 | P0 |
| TC-O151 | onBlur 핸들러 | `<Checkbox onBlur={fn} />` | blur 시 호출됨 | P0 |
| TC-O152 | onMouseEnter 핸들러 | `<Checkbox onMouseEnter={fn} />` | hover 시 호출됨 | P1 |
| TC-O153 | onMouseLeave 핸들러 | `<Checkbox onMouseLeave={fn} />` | leave 시 호출됨 | P1 |
| TC-O154 | onKeyDown 핸들러 | `<Checkbox onKeyDown={fn} />` | keydown 시 호출됨 | P1 |
| TC-O155 | 여러 이벤트 조합 | `<Checkbox onChange={a} onFocus={b} onBlur={c} />` | 각각 호출됨 | P1 |

### 5.7 role 오버라이드 (L3 - 차단)

| TC ID | 테스트명 | 입력 | 예상 결과 | 정책 | 우선순위 |
|-------|----------|------|----------|------|----------|
| TC-O160 | role 오버라이드 시도 | `<Checkbox role="button" />` | Core 값 유지 (`role="checkbox"`) | 차단 | P0 |

### 5.8 Native HTML 속성 전달 (L2 - 허용)

| TC ID | 테스트명 | 입력 | 예상 결과 | 우선순위 |
|-------|----------|------|----------|----------|
| TC-O170 | id 속성 | `<Checkbox id="my-checkbox" />` | `id="my-checkbox"` | P0 |
| TC-O171 | title 속성 | `<Checkbox title="Select this" />` | `title="Select this"` | P1 |
| TC-O172 | tabIndex 오버라이드 시도 | `<Checkbox tabIndex={5} />` | Core 값 유지 (disabled 상태에 따라 결정) | 차단 또는 허용 (정책 결정 필요) | P1 |

### 5.9 ref 접근 (L2 - 허용)

| TC ID | 테스트명 | 입력 | 예상 결과 | 우선순위 |
|-------|----------|------|----------|----------|
| TC-O180 | ref로 DOM 접근 | `ref={checkboxRef}` | `checkboxRef.current`가 HTMLDivElement | P0 |
| TC-O181 | ref로 focus 호출 | `checkboxRef.current.focus()` | 체크박스 포커스됨 | P0 |
| TC-O182 | callback ref | `ref={(el) => { myRef = el }}` | el이 HTMLDivElement | P1 |

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
const safeSize = CheckboxSizes.includes(merged.size)
  ? merged.size
  : Checkbox.defaultProps.size;

if (process.env.NODE_ENV !== 'production' && merged.size !== safeSize) {
  console.warn(`[Checkbox] Invalid size "${merged.size}". Using default "${safeSize}".`);
}
```

---

## 7. TC 요약

| 카테고리 | P0 | P1 | P2 | 합계 |
|----------|----|----|----|----|
| Core (TC-C*) | 27 | 0 | 0 | 27 |
| React Wrapper (TC-R*) | 15 | 7 | 0 | 22 |
| Vue Wrapper (TC-V*) | 13 | 1 | 0 | 14 |
| 예외 케이스 (TC-E*) | 8 | 10 | 0 | 18 |
| 커스터마이즈 (TC-O*) | 13 | 17 | 0 | 30 |
| **합계** | **76** | **35** | **0** | **111** |

---

## 8. 검토 상태

- [ ] QA Tester 검토 대기
- [ ] 누락 TC 확인 필요
- [ ] 에러 처리 정책 최종 확정
- [ ] aria-checked, role, tabIndex 오버라이드 정책 결정 필요
