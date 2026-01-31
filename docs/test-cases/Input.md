# Input Test Cases

## 분석 요약

### Input Core 정의 (Input.ts)

| 구분 | 내용 |
|------|------|
| **displayName** | `'Input'` |
| **defaultProps** | `variant: 'outline'`, `size: 'md'`, `error: false`, `success: false`, `disabled: false` |
| **propTypes.variant** | `['outline', 'filled', 'underline']` |
| **propTypes.size** | `['sm', 'md', 'lg']` |

### mapPropsToAttrs 로직

```typescript
{
  class: 'input',
  'data-variant': merged.variant,
  'data-size': merged.size,
  'data-state': error ? 'error' : success ? 'success' : disabled ? 'disabled' : undefined,
  disabled: disabled || undefined,
}
```

**핵심 로직:**
- 상태 우선순위: `error` > `success` > `disabled` > `normal`
- `data-state`: error가 최우선, 다음 success, 그 다음 disabled
- `disabled` 속성: disabled가 true일 때만 true

---

## 1. Core Test Cases

### 1.1 displayName 검증

| TC ID | 테스트명 | 입력 | 예상 결과 | 우선순위 |
|-------|----------|------|----------|----------|
| TC-C001 | displayName이 정확하다 | `Input.displayName` | `'Input'` | P0 |

### 1.2 defaultProps 검증

| TC ID | 테스트명 | 입력 | 예상 결과 | 우선순위 |
|-------|----------|------|----------|----------|
| TC-C010 | variant 기본값 | `Input.defaultProps.variant` | `'outline'` | P0 |
| TC-C011 | size 기본값 | `Input.defaultProps.size` | `'md'` | P0 |
| TC-C012 | error 기본값 | `Input.defaultProps.error` | `false` | P0 |
| TC-C013 | success 기본값 | `Input.defaultProps.success` | `false` | P0 |
| TC-C014 | disabled 기본값 | `Input.defaultProps.disabled` | `false` | P0 |

### 1.3 propTypes 검증

| TC ID | 테스트명 | 입력 | 예상 결과 | 우선순위 |
|-------|----------|------|----------|----------|
| TC-C020 | variant 옵션 포함 확인 | `InputVariants` | `['outline', 'filled', 'underline']` 모두 포함 | P0 |
| TC-C021 | size 옵션 포함 확인 | `InputSizes` | `['sm', 'md', 'lg']` 모두 포함 | P0 |

### 1.4 mapPropsToAttrs - 기본값 적용

| TC ID | 테스트명 | 입력 | 예상 결과 | 우선순위 |
|-------|----------|------|----------|----------|
| TC-C100 | 빈 객체 전달 시 기본값 적용 | `{}` | `class: 'input'`, `data-variant: 'outline'`, `data-size: 'md'`, `data-state: undefined`, `disabled: undefined` | P0 |

### 1.5 mapPropsToAttrs - variant 개별 검증

| TC ID | 테스트명 | 입력 | 예상 결과 | 우선순위 |
|-------|----------|------|----------|----------|
| TC-C110 | variant: outline | `{ variant: 'outline' }` | `data-variant: 'outline'` | P0 |
| TC-C111 | variant: filled | `{ variant: 'filled' }` | `data-variant: 'filled'` | P0 |
| TC-C112 | variant: underline | `{ variant: 'underline' }` | `data-variant: 'underline'` | P0 |

### 1.6 mapPropsToAttrs - size 개별 검증

| TC ID | 테스트명 | 입력 | 예상 결과 | 우선순위 |
|-------|----------|------|----------|----------|
| TC-C120 | size: sm | `{ size: 'sm' }` | `data-size: 'sm'` | P0 |
| TC-C121 | size: md | `{ size: 'md' }` | `data-size: 'md'` | P0 |
| TC-C122 | size: lg | `{ size: 'lg' }` | `data-size: 'lg'` | P0 |

### 1.7 mapPropsToAttrs - 상태(error/success/disabled) 검증

| TC ID | 테스트명 | 입력 | 예상 결과 | 우선순위 |
|-------|----------|------|----------|----------|
| TC-C130 | error: true | `{ error: true }` | `data-state: 'error'`, `disabled: undefined` | P0 |
| TC-C131 | error: false | `{ error: false }` | `data-state: undefined` (success, disabled도 false일 때) | P0 |
| TC-C132 | success: true | `{ success: true }` | `data-state: 'success'`, `disabled: undefined` | P0 |
| TC-C133 | success: false | `{ success: false }` | `data-state: undefined` (error, disabled도 false일 때) | P0 |
| TC-C134 | disabled: true | `{ disabled: true }` | `data-state: 'disabled'`, `disabled: true` | P0 |
| TC-C135 | disabled: false | `{ disabled: false }` | `data-state: undefined`, `disabled: undefined` | P0 |

### 1.8 mapPropsToAttrs - 상태 우선순위 검증

| TC ID | 테스트명 | 입력 | 예상 결과 | 우선순위 |
|-------|----------|------|----------|----------|
| TC-C140 | error + success 동시 true | `{ error: true, success: true }` | `data-state: 'error'` (error 우선) | P0 |
| TC-C141 | error + disabled 동시 true | `{ error: true, disabled: true }` | `data-state: 'error'` (error 우선), `disabled: true` | P0 |
| TC-C142 | success + disabled 동시 true | `{ success: true, disabled: true }` | `data-state: 'success'` (success 우선), `disabled: true` | P0 |
| TC-C143 | error + success + disabled 모두 true | `{ error: true, success: true, disabled: true }` | `data-state: 'error'` (error 최우선), `disabled: true` | P0 |
| TC-C144 | error: true, success: false, disabled: false | `{ error: true, success: false, disabled: false }` | `data-state: 'error'` | P1 |
| TC-C145 | error: false, success: true, disabled: false | `{ error: false, success: true, disabled: false }` | `data-state: 'success'` | P1 |
| TC-C146 | error: false, success: false, disabled: true | `{ error: false, success: false, disabled: true }` | `data-state: 'disabled'`, `disabled: true` | P1 |

### 1.9 mapPropsToAttrs - 복합 조합 검증

| TC ID | 테스트명 | 입력 | 예상 결과 | 우선순위 |
|-------|----------|------|----------|----------|
| TC-C150 | 모든 props 조합 1 | `{ variant: 'filled', size: 'lg' }` | 해당 data-* 속성 일치 | P0 |
| TC-C151 | 모든 props 조합 2 | `{ variant: 'underline', size: 'sm', success: true }` | `data-state: 'success'`, 기타 속성 일치 | P0 |
| TC-C152 | 상태 + 스타일 조합 | `{ variant: 'outline', size: 'md', error: true }` | `data-state: 'error'`, 기타 속성 일치 | P0 |

### 1.10 template 검증

| TC ID | 테스트명 | 입력 | 예상 결과 | 우선순위 |
|-------|----------|------|----------|----------|
| TC-C160 | tag가 input이다 | `Input.template.tag` | `'input'` | P0 |

---

## 2. React Wrapper Test Cases

### 2.1 Core mapPropsToAttrs 결과와 DOM 일치 검증

| TC ID | 테스트명 | 입력 | 예상 결과 | 우선순위 |
|-------|----------|------|----------|----------|
| TC-R100 | 기본 props로 렌더링 시 Core 결과 일치 | `<Input />` | DOM 속성이 `mapPropsToAttrs({})` 결과와 일치 | P0 |
| TC-R101 | variant prop이 Core 결과와 일치 | `<Input variant="filled" />` | `data-variant="filled"` | P0 |
| TC-R102 | size prop이 Core 결과와 일치 | `<Input size="lg" />` | `data-size="lg"` | P0 |
| TC-R103 | error prop이 Core 결과와 일치 | `<Input error />` | `data-state="error"` | P0 |
| TC-R104 | success prop이 Core 결과와 일치 | `<Input success />` | `data-state="success"` | P0 |
| TC-R105 | disabled prop이 Core 결과와 일치 | `<Input disabled />` | `data-state="disabled"`, `disabled` 속성 존재 | P0 |
| TC-R106 | 복합 props가 Core 결과와 일치 | `<Input variant="underline" size="sm" error />` | 모든 data-* 속성 일치 | P0 |

### 2.2 이벤트 핸들러 검증

| TC ID | 테스트명 | 입력 | 예상 결과 | 우선순위 |
|-------|----------|------|----------|----------|
| TC-R200 | onChange 호출 | 값 입력 | `onChange` 핸들러 호출 | P0 |
| TC-R201 | onInput 호출 | 값 입력 | `onInput` 핸들러 호출 | P0 |
| TC-R202 | onFocus 호출 | input 포커스 | `onFocus` 핸들러 호출 | P0 |
| TC-R203 | onBlur 호출 | input 블러 | `onBlur` 핸들러 호출 | P0 |
| TC-R204 | disabled 상태에서 onChange 미호출 | `<Input disabled onChange={fn} />` 입력 | `onChange` 호출되지 않음 (브라우저 기본 동작) | P0 |
| TC-R205 | 이벤트 객체 전달 확인 | 입력 | `onChange(event)` 호출 시 event 객체 포함 | P1 |
| TC-R206 | onChange에 value 전달 | 입력 | `event.target.value`에 입력값 포함 | P1 |

### 2.3 Controlled/Uncontrolled 모드 검증

| TC ID | 테스트명 | 입력 | 예상 결과 | 우선순위 |
|-------|----------|------|----------|----------|
| TC-R300 | Uncontrolled 모드 - defaultValue | `<Input defaultValue="hello" />` | 초기값 `"hello"`, 사용자 입력 가능 | P0 |
| TC-R301 | Controlled 모드 - value + onChange | `<Input value={value} onChange={setValue} />` | value 변경 시 input 값 변경됨 | P0 |
| TC-R302 | Controlled 모드 - onChange 없이 value만 | `<Input value="fixed" />` | 읽기 전용처럼 동작 (React 경고 발생) | P1 |
| TC-R303 | value undefined로 uncontrolled 전환 | `value={undefined}` | uncontrolled 모드로 동작 | P1 |

### 2.4 React 전용 props 검증

| TC ID | 테스트명 | 입력 | 예상 결과 | 우선순위 |
|-------|----------|------|----------|----------|
| TC-R400 | className 병합 | `<Input className="custom" />` | `class="input custom"` | P0 |
| TC-R401 | type prop 적용 | `<Input type="email" />` | `type="email"` | P0 |
| TC-R402 | type="text" 기본값 | `<Input />` | `type="text"` | P0 |
| TC-R403 | placeholder 적용 | `<Input placeholder="Enter text" />` | `placeholder="Enter text"` | P0 |
| TC-R404 | aria-label 적용 | `<Input aria-label="Username" />` | `aria-label="Username"` | P0 |
| TC-R405 | ref 전달 | `ref={inputRef}` | `inputRef.current`가 HTMLInputElement | P0 |
| TC-R406 | name 속성 | `<Input name="username" />` | `name="username"` | P1 |
| TC-R407 | required 속성 | `<Input required />` | `required` 속성 존재 | P1 |
| TC-R408 | readOnly 속성 | `<Input readOnly />` | `readonly` 속성 존재 | P1 |

### 2.5 기타 네이티브 속성 전달

| TC ID | 테스트명 | 입력 | 예상 결과 | 우선순위 |
|-------|----------|------|----------|----------|
| TC-R500 | id 속성 전달 | `<Input id="my-input" />` | `id="my-input"` | P1 |
| TC-R501 | data-testid 전달 | `<Input data-testid="email-input" />` | `data-testid="email-input"` | P1 |
| TC-R502 | maxLength 전달 | `<Input maxLength={10} />` | `maxlength="10"` | P1 |
| TC-R503 | pattern 전달 | `<Input pattern="[0-9]*" />` | `pattern="[0-9]*"` | P2 |

---

## 3. Vue Wrapper Test Cases

### 3.1 Core mapPropsToAttrs 결과와 DOM 일치 검증

| TC ID | 테스트명 | 입력 | 예상 결과 | 우선순위 |
|-------|----------|------|----------|----------|
| TC-V100 | 기본 props로 렌더링 시 Core 결과 일치 | `<Input />` | DOM 속성이 Core 결과와 일치 | P0 |
| TC-V101 | variant prop이 Core 결과와 일치 | `<Input variant="filled" />` | `data-variant="filled"` | P0 |
| TC-V102 | size prop이 Core 결과와 일치 | `<Input size="lg" />` | `data-size="lg"` | P0 |
| TC-V103 | error prop이 Core 결과와 일치 | `<Input :error="true" />` | `data-state="error"` | P0 |
| TC-V104 | success prop이 Core 결과와 일치 | `<Input :success="true" />` | `data-state="success"` | P0 |
| TC-V105 | disabled prop이 Core 결과와 일치 | `<Input :disabled="true" />` | `data-state="disabled"` | P0 |

### 3.2 이벤트 핸들러 검증

| TC ID | 테스트명 | 입력 | 예상 결과 | 우선순위 |
|-------|----------|------|----------|----------|
| TC-V200 | @change 호출 | 값 입력 후 blur | 핸들러 호출 | P0 |
| TC-V201 | @input 호출 | 값 입력 | 핸들러 실시간 호출 | P0 |
| TC-V202 | @focus 호출 | input 포커스 | 핸들러 호출 | P0 |
| TC-V203 | @blur 호출 | input 블러 | 핸들러 호출 | P0 |
| TC-V204 | disabled 상태에서 @input 미호출 | `:disabled="true"` 상태에서 입력 | 핸들러 미호출 | P0 |
| TC-V205 | 이벤트 객체 전달 확인 | 입력 | Event 객체 전달 | P1 |

### 3.3 v-model 양방향 바인딩 검증

| TC ID | 테스트명 | 입력 | 예상 결과 | 우선순위 |
|-------|----------|------|----------|----------|
| TC-V300 | v-model 초기값 | `<Input v-model="text" />`, `text='hello'` | input 값이 `'hello'` | P0 |
| TC-V301 | v-model 값 변경 (외부 -> input) | `text` 변경 | input 값 업데이트됨 | P0 |
| TC-V302 | v-model 값 변경 (input -> 외부) | input에 입력 | `text` 변수 업데이트됨 | P0 |
| TC-V303 | v-model undefined | `v-model="undefined"` | 빈 input | P1 |

### 3.4 Vue 전용 props/attrs 검증

| TC ID | 테스트명 | 입력 | 예상 결과 | 우선순위 |
|-------|----------|------|----------|----------|
| TC-V400 | class 병합 | `<Input class="custom" />` | `class="input custom"` | P0 |
| TC-V401 | type prop 적용 | `<Input type="password" />` | `type="password"` | P0 |
| TC-V402 | placeholder 적용 | `<Input placeholder="Enter" />` | `placeholder="Enter"` | P0 |
| TC-V403 | aria-label 적용 | `<Input aria-label="Email" />` | `aria-label="Email"` | P0 |

---

## 4. 예외 케이스 Test Cases

### 4.1 props 미전달

| TC ID | 테스트명 | 입력 | 예상 결과 | 정책 | 우선순위 |
|-------|----------|------|----------|------|----------|
| TC-E100 | 모든 props 미전달 (Core) | `mapPropsToAttrs({})` | defaultProps 적용 | Fallback | P0 |
| TC-E101 | 모든 props 미전달 (React) | `<Input />` | defaultProps로 렌더링 | Fallback | P0 |
| TC-E102 | 모든 props 미전달 (Vue) | `<Input />` | defaultProps로 렌더링 | Fallback | P0 |

### 4.2 undefined 전달

| TC ID | 테스트명 | 입력 | 예상 결과 | 정책 | 우선순위 |
|-------|----------|------|----------|------|----------|
| TC-E110 | variant: undefined | `{ variant: undefined }` | defaultProps.variant 적용 (`'outline'`) | Fallback | P0 |
| TC-E111 | size: undefined | `{ size: undefined }` | defaultProps.size 적용 (`'md'`) | Fallback | P0 |
| TC-E112 | error: undefined | `{ error: undefined }` | defaultProps.error 적용 (`false`) | Fallback | P0 |
| TC-E113 | success: undefined | `{ success: undefined }` | defaultProps.success 적용 (`false`) | Fallback | P0 |
| TC-E114 | disabled: undefined | `{ disabled: undefined }` | defaultProps.disabled 적용 (`false`) | Fallback | P0 |

### 4.3 null 전달 (결정 필요)

| TC ID | 테스트명 | 입력 | 예상 결과 | 정책 | 우선순위 |
|-------|----------|------|----------|------|----------|
| TC-E120 | variant: null | `{ variant: null }` | defaultProps.variant 적용 | Fallback | P1 |
| TC-E121 | size: null | `{ size: null }` | defaultProps.size 적용 | Fallback | P1 |
| TC-E122 | error: null | `{ error: null }` | defaultProps.error 적용 | Fallback | P1 |

### 4.4 빈 문자열 전달 (결정 필요)

| TC ID | 테스트명 | 입력 | 예상 결과 | 정책 | 우선순위 |
|-------|----------|------|----------|------|----------|
| TC-E130 | variant: '' | `{ variant: '' }` | defaultProps.variant 적용 | Fallback | P1 |
| TC-E131 | size: '' | `{ size: '' }` | defaultProps.size 적용 | Fallback | P1 |

### 4.5 유효하지 않은 값 전달 (결정 필요)

| TC ID | 테스트명 | 입력 | 예상 결과 | 정책 | 우선순위 |
|-------|----------|------|----------|------|----------|
| TC-E140 | 유효하지 않은 variant | `{ variant: 'invalid' }` | defaultProps.variant + console.warn | Fallback + Warn | P1 |
| TC-E141 | 유효하지 않은 size | `{ size: 'invalid' }` | defaultProps.size + console.warn | Fallback + Warn | P1 |

### 4.6 React 전용 예외 케이스

| TC ID | 테스트명 | 입력 | 예상 결과 | 정책 | 우선순위 |
|-------|----------|------|----------|------|----------|
| TC-E200 | value: null | `<Input value={null} />` | 빈 input 렌더링 | React 기본 동작 | P1 |
| TC-E201 | value: undefined | `<Input value={undefined} />` | uncontrolled 모드 | React 기본 동작 | P1 |
| TC-E202 | className: undefined | `<Input className={undefined} />` | `class="input"` | className 생략 | P1 |
| TC-E203 | onChange: undefined | `<Input onChange={undefined} />` | 입력해도 에러 없음 | 무시 | P1 |

---

## 5. 커스터마이즈/오버라이드 Test Cases

> 참고: [Component Customization Policy](../api/component-customization.md)

### 5.1 className 병합 (L2 - 허용)

| TC ID | 테스트명 | 입력 | 예상 결과 | 우선순위 |
|-------|----------|------|----------|----------|
| TC-O100 | className 추가 시 병합 | `<Input className="custom" />` | `class="input custom"` | P0 |
| TC-O101 | className 여러 개 추가 | `<Input className="a b c" />` | `class="input a b c"` | P0 |
| TC-O102 | className undefined | `<Input className={undefined} />` | `class="input"` | P1 |
| TC-O103 | className 빈 문자열 | `<Input className="" />` | `class="input "` 또는 `class="input"` | P1 |

### 5.2 style prop (L2 - 허용)

| TC ID | 테스트명 | 입력 | 예상 결과 | 구현상태 | 우선순위 |
|-------|----------|------|----------|----------|----------|
| TC-O110 | style 인라인 적용 | `<Input style={{ width: 200 }} />` | `style="width: 200px"` | ✅ 구현됨 | P0 |
| TC-O111 | style 복합 속성 | `<Input style={{ border: '1px solid red', padding: 8 }} />` | 스타일 적용됨 | ✅ 구현됨 | P1 |
| TC-O112 | style undefined | `<Input style={undefined} />` | 스타일 없음 | ✅ 구현됨 | P1 |

### 5.3 data-* 속성 추가 (L2 - 허용)

| TC ID | 테스트명 | 입력 | 예상 결과 | 우선순위 |
|-------|----------|------|----------|----------|
| TC-O120 | data-testid 추가 | `<Input data-testid="email" />` | `data-testid="email"` | P0 |
| TC-O121 | data-analytics 추가 | `<Input data-analytics="input" />` | `data-analytics="input"` | P1 |
| TC-O122 | 여러 data-* 추가 | `<Input data-a="1" data-b="2" />` | 모두 적용됨 | P1 |

### 5.4 보호 속성 오버라이드 시도 (L3 - 차단) ✅ 구현됨

| TC ID | 테스트명 | 입력 | 예상 결과 | 정책 | 우선순위 |
|-------|----------|------|----------|------|----------|
| TC-O130 | data-variant 오버라이드 시도 | `<Input data-variant="custom" />` | Core 값 유지 (`data-variant="outline"`) | 차단 | P0 |
| TC-O131 | data-size 오버라이드 시도 | `<Input data-size="custom" />` | Core 값 유지 | 차단 | P0 |
| TC-O132 | data-state 오버라이드 시도 | `<Input data-state="custom" />` | Core 값 유지 | 차단 | P0 |
| TC-O133 | class 직접 오버라이드 시도 | `<Input class="override" />` | 무시 (className 사용) | 차단 | P1 |

> React: attrs가 Core attrs에 의해 덮어씌워짐 (구현됨)
> Vue: `inheritAttrs: false` + PROTECTED_ATTRS 필터링 (구현됨)

### 5.5 aria-* 속성 (L2 - 허용)

| TC ID | 테스트명 | 입력 | 예상 결과 | 우선순위 |
|-------|----------|------|----------|----------|
| TC-O140 | aria-label | `<Input aria-label="Username" />` | `aria-label="Username"` | P0 |
| TC-O141 | aria-required | `<Input aria-required="true" />` | `aria-required="true"` | P0 |
| TC-O142 | aria-invalid | `<Input aria-invalid="true" />` | `aria-invalid="true"` | P0 |
| TC-O143 | aria-describedby | `<Input aria-describedby="help" />` | `aria-describedby="help"` | P1 |
| TC-O144 | 여러 aria-* 조합 | `<Input aria-label="Email" aria-required="true" />` | 모두 적용됨 | P1 |

### 5.6 이벤트 핸들러 추가 (L2 - 허용)

| TC ID | 테스트명 | 입력 | 예상 결과 | 우선순위 |
|-------|----------|------|----------|----------|
| TC-O150 | onFocus 핸들러 | `<Input onFocus={fn} />` | focus 시 호출됨 | P0 |
| TC-O151 | onBlur 핸들러 | `<Input onBlur={fn} />` | blur 시 호출됨 | P0 |
| TC-O152 | onKeyDown 핸들러 | `<Input onKeyDown={fn} />` | keydown 시 호출됨 | P1 |
| TC-O153 | onKeyUp 핸들러 | `<Input onKeyUp={fn} />` | keyup 시 호출됨 | P1 |
| TC-O154 | onKeyPress 핸들러 | `<Input onKeyPress={fn} />` | keypress 시 호출됨 | P1 |
| TC-O155 | 여러 이벤트 조합 | `<Input onChange={a} onFocus={b} onBlur={c} />` | 각각 호출됨 | P1 |

### 5.7 disabled 오버라이드 (L3 - 제한적 허용)

| TC ID | 테스트명 | 입력 | 예상 결과 | 정책 | 우선순위 |
|-------|----------|------|----------|------|----------|
| TC-O160 | disabled=true 명시 | `<Input disabled />` | disabled 적용 | 허용 | P0 |
| TC-O161 | disabled=false 명시 | `<Input disabled={false} />` | disabled 해제 | 허용 | P0 |
| TC-O162 | error=true + disabled=false | `<Input error disabled={false} />` | `data-state="error"`, disabled=false (error 우선, disabled 해제) | Core 우선 | P0 |

### 5.8 Native HTML 속성 전달 (L2 - 허용)

| TC ID | 테스트명 | 입력 | 예상 결과 | 우선순위 |
|-------|----------|------|----------|----------|
| TC-O170 | id 속성 | `<Input id="my-input" />` | `id="my-input"` | P0 |
| TC-O171 | name 속성 | `<Input name="email" />` | `name="email"` | P0 |
| TC-O172 | placeholder 속성 | `<Input placeholder="Enter email" />` | `placeholder="Enter email"` | P0 |
| TC-O173 | maxLength 속성 | `<Input maxLength={10} />` | `maxlength="10"` | P1 |
| TC-O174 | pattern 속성 | `<Input pattern="[0-9]*" />` | `pattern="[0-9]*"` | P1 |
| TC-O175 | required 속성 | `<Input required />` | `required` 속성 존재 | P1 |
| TC-O176 | readOnly 속성 | `<Input readOnly />` | `readonly` 속성 존재 | P1 |

### 5.9 ref 접근 (L2 - 허용)

| TC ID | 테스트명 | 입력 | 예상 결과 | 우선순위 |
|-------|----------|------|----------|----------|
| TC-O180 | ref로 DOM 접근 | `ref={inputRef}` | `inputRef.current`가 HTMLInputElement | P0 |
| TC-O181 | ref로 focus 호출 | `inputRef.current.focus()` | input 포커스됨 | P0 |
| TC-O182 | ref로 value 접근 | `inputRef.current.value` | input 값 읽기 가능 | P1 |
| TC-O183 | callback ref | `ref={(el) => { myRef = el }}` | el이 HTMLInputElement | P1 |

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
const safeVariant = InputVariants.includes(merged.variant)
  ? merged.variant
  : Input.defaultProps.variant;

if (process.env.NODE_ENV !== 'production' && merged.variant !== safeVariant) {
  console.warn(`[Input] Invalid variant "${merged.variant}". Using default "${safeVariant}".`);
}
```

---

## 7. TC 요약

| 카테고리 | P0 | P1 | P2 | 합계 |
|----------|----|----|----|----|
| Core (TC-C*) | 26 | 3 | 0 | 29 |
| React Wrapper (TC-R*) | 15 | 9 | 1 | 25 |
| Vue Wrapper (TC-V*) | 13 | 2 | 0 | 15 |
| 예외 케이스 (TC-E*) | 8 | 10 | 0 | 18 |
| 커스터마이즈 (TC-O*) | 19 | 15 | 0 | 34 |
| **합계** | **81** | **39** | **1** | **121** |

---

## 8. 검토 상태

- [ ] QA Tester 검토 대기
- [ ] 누락 TC 검토 필요
- [ ] 에러 처리 정책 최종 확정 필요

### 구현 예정

| 영역 | 구현 예정 TC |
|------|-------------|
| Core | TC-C001~C160 (전체) |
| React | TC-R100~R503 (전체) |
| Vue | TC-V100~V403 (전체) |
| 보호 속성 | TC-O130~O133 (data-variant, data-size, data-state, class) |
| 예외 처리 | TC-E100~E203 (전체) |

---

## 9. 참고 사항

### Input 컴포넌트 특징
- Button과 달리 **form input**이므로 value/onChange/v-model 관련 TC 필요
- **상태 우선순위**: error > success > disabled > normal
- **controlled/uncontrolled** 모드 지원 (React)
- **v-model** 양방향 바인딩 지원 (Vue)

### Button과의 차이점
1. children 대신 value prop 사용
2. onClick 대신 onChange/onInput 이벤트
3. loading 상태 없음 (대신 error/success 상태)
4. type="text" 기본값 (Button은 type="button")
