# SegmentedControl Test Cases

## 분석 요약

### SegmentedControl Core 정의 (SegmentedControl.ts)

| 구분 | 내용 |
|------|------|
| **displayName** | `'SegmentedControl'` |
| **defaultProps** | `size: 'md'`, `fullWidth: false`, `disabled: false` |
| **propTypes.size** | `['sm', 'md', 'lg']` |
| **template.tag** | `'div'` |
| **role** | `'group'` (고정값) |

### SegmentedControlItem Core 정의

| 구분 | 내용 |
|------|------|
| **displayName** | `'SegmentedControlItem'` |
| **defaultProps** | `selected: false`, `disabled: false` |
| **template.tag** | `'button'` |

### SegmentedControl mapPropsToAttrs 로직

```typescript
{
  class: 'segmented-control',
  role: 'group',
  'data-size': merged.size,
  'data-full-width': merged.fullWidth || undefined,
  'data-disabled': merged.disabled || undefined,
}
```

**핵심 로직:**
- `role`은 항상 `'group'` (접근성을 위한 고정값)
- `data-full-width`, `data-disabled`: true일 때만 해당 값, false면 `undefined`

### SegmentedControlItem mapPropsToAttrs 로직

```typescript
{
  class: 'segmented-control-item',
  'data-state': merged.selected ? 'selected' : merged.disabled ? 'disabled' : undefined,
  'aria-selected': merged.selected || undefined,
  disabled: merged.disabled || undefined,
}
```

**핵심 로직 (상태 우선순위):**
- `selected`가 true면: `data-state: 'selected'`, `aria-selected: true`, `disabled: undefined`
- `selected`가 false이고 `disabled`가 true면: `data-state: 'disabled'`, `disabled: true`
- 둘 다 false면: 모든 속성 `undefined`
- **중요**: `selected` 우선순위가 `disabled`보다 높음

---

## 1. Core Test Cases - SegmentedControl

### 1.1 displayName 검증

| TC ID | 테스트명 | 입력 | 예상 결과 | 우선순위 |
|-------|----------|------|----------|----------|
| TC-C001 | displayName이 정확하다 | `SegmentedControl.displayName` | `'SegmentedControl'` | P0 |

### 1.2 defaultProps 검증

| TC ID | 테스트명 | 입력 | 예상 결과 | 우선순위 |
|-------|----------|------|----------|----------|
| TC-C010 | size 기본값 | `SegmentedControl.defaultProps.size` | `'md'` | P0 |
| TC-C011 | fullWidth 기본값 | `SegmentedControl.defaultProps.fullWidth` | `false` | P0 |
| TC-C012 | disabled 기본값 | `SegmentedControl.defaultProps.disabled` | `false` | P0 |

### 1.3 propTypes 검증

| TC ID | 테스트명 | 입력 | 예상 결과 | 우선순위 |
|-------|----------|------|----------|----------|
| TC-C020 | size 옵션 포함 확인 | `SegmentedControlSizes` | `['sm', 'md', 'lg']` 모두 포함 | P0 |

### 1.4 mapPropsToAttrs - 기본값 적용

| TC ID | 테스트명 | 입력 | 예상 결과 | 우선순위 |
|-------|----------|------|----------|----------|
| TC-C100 | 빈 객체 전달 시 기본값 적용 | `{}` | `class: 'segmented-control'`, `role: 'group'`, `data-size: 'md'`, `data-full-width: undefined`, `data-disabled: undefined` | P0 |

### 1.5 mapPropsToAttrs - size 개별 검증

| TC ID | 테스트명 | 입력 | 예상 결과 | 우선순위 |
|-------|----------|------|----------|----------|
| TC-C110 | size: sm | `{ size: 'sm' }` | `data-size: 'sm'` | P0 |
| TC-C111 | size: md | `{ size: 'md' }` | `data-size: 'md'` | P0 |
| TC-C112 | size: lg | `{ size: 'lg' }` | `data-size: 'lg'` | P0 |

### 1.6 mapPropsToAttrs - fullWidth 검증

| TC ID | 테스트명 | 입력 | 예상 결과 | 우선순위 |
|-------|----------|------|----------|----------|
| TC-C120 | fullWidth: true | `{ fullWidth: true }` | `data-full-width: true` | P0 |
| TC-C121 | fullWidth: false | `{ fullWidth: false }` | `data-full-width: undefined` | P0 |

### 1.7 mapPropsToAttrs - disabled 검증

| TC ID | 테스트명 | 입력 | 예상 결과 | 우선순위 |
|-------|----------|------|----------|----------|
| TC-C130 | disabled: true | `{ disabled: true }` | `data-disabled: true` | P0 |
| TC-C131 | disabled: false | `{ disabled: false }` | `data-disabled: undefined` | P0 |

### 1.8 mapPropsToAttrs - role 고정값 검증

| TC ID | 테스트명 | 입력 | 예상 결과 | 우선순위 |
|-------|----------|------|----------|----------|
| TC-C140 | role이 항상 group | `{ size: 'sm' }` | `role: 'group'` | P0 |
| TC-C141 | role이 항상 group (2) | `{ fullWidth: true, disabled: true }` | `role: 'group'` | P0 |

### 1.9 mapPropsToAttrs - 복합 조합 검증

| TC ID | 테스트명 | 입력 | 예상 결과 | 우선순위 |
|-------|----------|------|----------|----------|
| TC-C150 | 모든 props 조합 1 | `{ size: 'lg', fullWidth: true }` | 해당 data-* 속성 일치, `role: 'group'` | P0 |
| TC-C151 | 모든 props 조합 2 | `{ size: 'sm', disabled: true }` | 해당 data-* 속성 일치, `role: 'group'` | P0 |

### 1.10 template 검증

| TC ID | 테스트명 | 입력 | 예상 결과 | 우선순위 |
|-------|----------|------|----------|----------|
| TC-C170 | tag가 div이다 | `SegmentedControl.template.tag` | `'div'` | P0 |
| TC-C171 | default 슬롯 포함 | `SegmentedControl.template.slots` | `['default']` 포함 | P0 |

---

## 2. Core Test Cases - SegmentedControlItem

### 2.1 displayName 검증

| TC ID | 테스트명 | 입력 | 예상 결과 | 우선순위 |
|-------|----------|------|----------|----------|
| TC-I001 | displayName이 정확하다 | `SegmentedControlItem.displayName` | `'SegmentedControlItem'` | P0 |

### 2.2 defaultProps 검증

| TC ID | 테스트명 | 입력 | 예상 결과 | 우선순위 |
|-------|----------|------|----------|----------|
| TC-I010 | selected 기본값 | `SegmentedControlItem.defaultProps.selected` | `false` | P0 |
| TC-I011 | disabled 기본값 | `SegmentedControlItem.defaultProps.disabled` | `false` | P0 |

### 2.3 mapPropsToAttrs - 기본값 적용

| TC ID | 테스트명 | 입력 | 예상 결과 | 우선순위 |
|-------|----------|------|----------|----------|
| TC-I100 | 빈 객체 전달 시 기본값 적용 | `{}` | `class: 'segmented-control-item'`, `data-state: undefined`, `aria-selected: undefined`, `disabled: undefined` | P0 |

### 2.4 mapPropsToAttrs - selected 검증

| TC ID | 테스트명 | 입력 | 예상 결과 | 우선순위 |
|-------|----------|------|----------|----------|
| TC-I110 | selected: true | `{ selected: true }` | `data-state: 'selected'`, `aria-selected: true`, `disabled: undefined` | P0 |
| TC-I111 | selected: false | `{ selected: false }` | `data-state: undefined` (disabled도 false면), `aria-selected: undefined` | P0 |

### 2.5 mapPropsToAttrs - disabled 검증

| TC ID | 테스트명 | 입력 | 예상 결과 | 우선순위 |
|-------|----------|------|----------|----------|
| TC-I120 | disabled: true | `{ disabled: true }` | `data-state: 'disabled'`, `disabled: true` | P0 |
| TC-I121 | disabled: false | `{ disabled: false }` | `data-state: undefined` (selected도 false면) | P0 |

### 2.6 mapPropsToAttrs - 상태 우선순위 검증

| TC ID | 테스트명 | 입력 | 예상 결과 | 우선순위 |
|-------|----------|------|----------|----------|
| TC-I130 | selected + disabled 동시 true | `{ selected: true, disabled: true }` | `data-state: 'selected'` (selected 우선), `aria-selected: true`, `disabled: undefined` | P0 |
| TC-I131 | selected: true, disabled: false | `{ selected: true, disabled: false }` | `data-state: 'selected'`, `aria-selected: true`, `disabled: undefined` | P1 |
| TC-I132 | selected: false, disabled: true | `{ selected: false, disabled: true }` | `data-state: 'disabled'`, `disabled: true`, `aria-selected: undefined` | P1 |

### 2.7 template 검증

| TC ID | 테스트명 | 입력 | 예상 결과 | 우선순위 |
|-------|----------|------|----------|----------|
| TC-I170 | tag가 button이다 | `SegmentedControlItem.template.tag` | `'button'` | P0 |
| TC-I171 | default 슬롯 포함 | `SegmentedControlItem.template.slots` | `['default']` 포함 | P0 |

---

## 3. React Wrapper Test Cases - SegmentedControl

### 3.1 Core mapPropsToAttrs 결과와 DOM 일치 검증

| TC ID | 테스트명 | 입력 | 예상 결과 | 우선순위 |
|-------|----------|------|----------|----------|
| TC-R100 | 기본 props로 렌더링 시 Core 결과 일치 | `<SegmentedControl>...</SegmentedControl>` | DOM 속성이 `mapPropsToAttrs({})` 결과와 일치 | P0 |
| TC-R101 | size prop이 Core 결과와 일치 | `<SegmentedControl size="lg">` | `data-size="lg"` | P0 |
| TC-R102 | fullWidth prop이 Core 결과와 일치 | `<SegmentedControl fullWidth>` | `data-full-width="true"` | P0 |
| TC-R103 | disabled prop이 Core 결과와 일치 | `<SegmentedControl disabled>` | `data-disabled="true"` | P0 |
| TC-R104 | role이 항상 group | `<SegmentedControl>` | `role="group"` | P0 |
| TC-R105 | 복합 props가 Core 결과와 일치 | `<SegmentedControl size="sm" fullWidth disabled>` | 모든 data-* 속성 일치 | P0 |

### 3.2 React 전용 props 검증

| TC ID | 테스트명 | 입력 | 예상 결과 | 우선순위 |
|-------|----------|------|----------|----------|
| TC-R200 | children 렌더링 | `<SegmentedControl><div>content</div></SegmentedControl>` | children 정상 렌더링 | P0 |
| TC-R201 | className 병합 | `<SegmentedControl className="custom">` | `class="segmented-control custom"` | P0 |
| TC-R202 | aria-label 적용 | `<SegmentedControl aria-label="Options">` | `aria-label="Options"` | P0 |
| TC-R203 | ref 전달 | `ref={divRef}` | `divRef.current`가 HTMLDivElement | P0 |

---

## 4. React Wrapper Test Cases - SegmentedControlItem

### 4.1 Core mapPropsToAttrs 결과와 DOM 일치 검증

| TC ID | 테스트명 | 입력 | 예상 결과 | 우선순위 |
|-------|----------|------|----------|----------|
| TC-RI100 | 기본 props로 렌더링 시 Core 결과 일치 | `<SegmentedControl.Item>Item</SegmentedControl.Item>` | DOM 속성이 Core 결과와 일치 | P0 |
| TC-RI101 | selected prop이 Core 결과와 일치 | `<SegmentedControl.Item selected>` | `data-state="selected"`, `aria-selected="true"` | P0 |
| TC-RI102 | disabled prop이 Core 결과와 일치 | `<SegmentedControl.Item disabled>` | `data-state="disabled"`, `disabled` 속성 존재 | P0 |
| TC-RI103 | selected + disabled 우선순위 | `<SegmentedControl.Item selected disabled>` | `data-state="selected"` (selected 우선) | P0 |

### 4.2 이벤트 핸들러 검증

| TC ID | 테스트명 | 입력 | 예상 결과 | 우선순위 |
|-------|----------|------|----------|----------|
| TC-RI200 | onClick 호출 | 아이템 클릭 | `onClick` 핸들러 1회 호출 | P0 |
| TC-RI201 | disabled 상태에서 onClick 미호출 | `<SegmentedControl.Item disabled onClick={fn}>` 클릭 | `onClick` 호출되지 않음 | P0 |
| TC-RI202 | selected 상태에서 onClick 호출 | `<SegmentedControl.Item selected onClick={fn}>` 클릭 | `onClick` 호출됨 (disabled 아님) | P0 |
| TC-RI203 | 이벤트 객체 전달 확인 | 클릭 | `onClick(event)` 호출 시 event 객체 포함 | P1 |

### 4.3 React 전용 props 검증

| TC ID | 테스트명 | 입력 | 예상 결과 | 우선순위 |
|-------|----------|------|----------|----------|
| TC-RI300 | children 렌더링 | `<SegmentedControl.Item>Text</SegmentedControl.Item>` | 텍스트 "Text" | P0 |
| TC-RI301 | className 병합 | `<SegmentedControl.Item className="custom">` | `class="segmented-control-item custom"` | P0 |
| TC-RI302 | type prop 적용 | `<SegmentedControl.Item type="submit">` | `type="submit"` | P0 |
| TC-RI303 | type="button" 기본값 (암묵적) | `<SegmentedControl.Item>` | `type="button"` (form submit 방지) | P0 |
| TC-RI304 | aria-label 적용 | `<SegmentedControl.Item aria-label="Select">` | `aria-label="Select"` | P0 |
| TC-RI305 | ref 전달 | `ref={buttonRef}` | `buttonRef.current`가 HTMLButtonElement | P0 |

---

## 5. Vue Wrapper Test Cases - SegmentedControl

### 5.1 Core mapPropsToAttrs 결과와 DOM 일치 검증

| TC ID | 테스트명 | 입력 | 예상 결과 | 우선순위 |
|-------|----------|------|----------|----------|
| TC-V100 | 기본 props로 렌더링 시 Core 결과 일치 | `<SegmentedControl>...</SegmentedControl>` | DOM 속성이 Core 결과와 일치 | P0 |
| TC-V101 | size prop이 Core 결과와 일치 | `<SegmentedControl size="lg">` | `data-size="lg"` | P0 |
| TC-V102 | fullWidth prop이 Core 결과와 일치 | `<SegmentedControl :full-width="true">` | `data-full-width="true"` | P0 |
| TC-V103 | disabled prop이 Core 결과와 일치 | `<SegmentedControl :disabled="true">` | `data-disabled="true"` | P0 |
| TC-V104 | role이 항상 group | `<SegmentedControl>` | `role="group"` | P0 |

### 5.2 Vue 전용 props/attrs 검증

| TC ID | 테스트명 | 입력 | 예상 결과 | 우선순위 |
|-------|----------|------|----------|----------|
| TC-V200 | 슬롯 콘텐츠 렌더링 | `<SegmentedControl><div>content</div></SegmentedControl>` | 슬롯 정상 렌더링 | P0 |
| TC-V201 | class 병합 | `<SegmentedControl class="custom">` | `class="segmented-control custom"` | P0 |
| TC-V202 | aria-label 적용 | `<SegmentedControl aria-label="Options">` | `aria-label="Options"` | P0 |

---

## 6. Vue Wrapper Test Cases - SegmentedControlItem

### 6.1 Core mapPropsToAttrs 결과와 DOM 일치 검증

| TC ID | 테스트명 | 입력 | 예상 결과 | 우선순위 |
|-------|----------|------|----------|----------|
| TC-VI100 | 기본 props로 렌더링 시 Core 결과 일치 | `<SegmentedControlItem>Item</SegmentedControlItem>` | DOM 속성이 Core 결과와 일치 | P0 |
| TC-VI101 | selected prop이 Core 결과와 일치 | `<SegmentedControlItem :selected="true">` | `data-state="selected"` | P0 |
| TC-VI102 | disabled prop이 Core 결과와 일치 | `<SegmentedControlItem :disabled="true">` | `data-state="disabled"` | P0 |
| TC-VI103 | selected + disabled 우선순위 | `<SegmentedControlItem :selected="true" :disabled="true">` | `data-state="selected"` | P0 |

### 6.2 이벤트 핸들러 검증

| TC ID | 테스트명 | 입력 | 예상 결과 | 우선순위 |
|-------|----------|------|----------|----------|
| TC-VI200 | @click 호출 | 아이템 클릭 | 핸들러 1회 호출 | P0 |
| TC-VI201 | disabled 상태에서 @click 미호출 | `:disabled="true"` 상태에서 클릭 | 핸들러 미호출 | P0 |
| TC-VI202 | selected 상태에서 @click 호출 | `:selected="true"` 상태에서 클릭 | 핸들러 호출됨 | P0 |
| TC-VI203 | 이벤트 객체 전달 확인 | 클릭 | MouseEvent 객체 전달 | P1 |

### 6.3 Vue 전용 props/attrs 검증

| TC ID | 테스트명 | 입력 | 예상 결과 | 우선순위 |
|-------|----------|------|----------|----------|
| TC-VI300 | 슬롯 콘텐츠 렌더링 | `<SegmentedControlItem>Text</SegmentedControlItem>` | 텍스트 "Text" | P0 |
| TC-VI301 | class 병합 | `<SegmentedControlItem class="custom">` | `class="segmented-control-item custom"` | P0 |
| TC-VI302 | type prop 적용 | `<SegmentedControlItem type="submit">` | `type="submit"` | P0 |
| TC-VI303 | aria-label 적용 | `<SegmentedControlItem aria-label="Select">` | `aria-label="Select"` | P0 |

---

## 7. 예외 케이스 Test Cases

### 7.1 props 미전달 - SegmentedControl

| TC ID | 테스트명 | 입력 | 예상 결과 | 정책 | 우선순위 |
|-------|----------|------|----------|------|----------|
| TC-E100 | 모든 props 미전달 (Core) | `mapPropsToAttrs({})` | defaultProps 적용 | Fallback | P0 |
| TC-E101 | 모든 props 미전달 (React) | `<SegmentedControl />` | defaultProps로 렌더링 | Fallback | P0 |
| TC-E102 | 모든 props 미전달 (Vue) | `<SegmentedControl />` | defaultProps로 렌더링 | Fallback | P0 |

### 7.2 undefined 전달 - SegmentedControl

| TC ID | 테스트명 | 입력 | 예상 결과 | 정책 | 우선순위 |
|-------|----------|------|----------|------|----------|
| TC-E110 | size: undefined | `{ size: undefined }` | defaultProps.size 적용 (`'md'`) | Fallback | P0 |
| TC-E111 | fullWidth: undefined | `{ fullWidth: undefined }` | defaultProps.fullWidth 적용 (`false`) | Fallback | P0 |
| TC-E112 | disabled: undefined | `{ disabled: undefined }` | defaultProps.disabled 적용 (`false`) | Fallback | P0 |

### 7.3 null 전달 - SegmentedControl

| TC ID | 테스트명 | 입력 | 예상 결과 | 정책 | 우선순위 |
|-------|----------|------|----------|------|----------|
| TC-E120 | size: null | `{ size: null }` | defaultProps.size 적용 | Fallback | P1 |
| TC-E121 | fullWidth: null | `{ fullWidth: null }` | defaultProps.fullWidth 적용 | Fallback | P1 |
| TC-E122 | disabled: null | `{ disabled: null }` | defaultProps.disabled 적용 | Fallback | P1 |

### 7.4 유효하지 않은 값 전달 - SegmentedControl

| TC ID | 테스트명 | 입력 | 예상 결과 | 정책 | 우선순위 |
|-------|----------|------|----------|------|----------|
| TC-E130 | 유효하지 않은 size | `{ size: 'invalid' }` | defaultProps.size + console.warn | Fallback + Warn | P1 |

### 7.5 props 미전달 - SegmentedControlItem

| TC ID | 테스트명 | 입력 | 예상 결과 | 정책 | 우선순위 |
|-------|----------|------|----------|------|----------|
| TC-E200 | 모든 props 미전달 (Core) | `mapPropsToAttrs({})` | defaultProps 적용 | Fallback | P0 |
| TC-E201 | 모든 props 미전달 (React) | `<SegmentedControl.Item />` | defaultProps로 렌더링 | Fallback | P0 |
| TC-E202 | 모든 props 미전달 (Vue) | `<SegmentedControlItem />` | defaultProps로 렌더링 | Fallback | P0 |

### 7.6 undefined 전달 - SegmentedControlItem

| TC ID | 테스트명 | 입력 | 예상 결과 | 정책 | 우선순위 |
|-------|----------|------|----------|------|----------|
| TC-E210 | selected: undefined | `{ selected: undefined }` | defaultProps.selected 적용 (`false`) | Fallback | P0 |
| TC-E211 | disabled: undefined | `{ disabled: undefined }` | defaultProps.disabled 적용 (`false`) | Fallback | P0 |

### 7.7 React 전용 예외 케이스

| TC ID | 테스트명 | 입력 | 예상 결과 | 정책 | 우선순위 |
|-------|----------|------|----------|------|----------|
| TC-E300 | children: null | `<SegmentedControl>{null}</SegmentedControl>` | 빈 컨테이너 렌더링 | React 기본 동작 | P1 |
| TC-E301 | children: undefined | `<SegmentedControl.Item>{undefined}</SegmentedControl.Item>` | 빈 버튼 렌더링 | React 기본 동작 | P1 |
| TC-E302 | className: undefined | `<SegmentedControl className={undefined}>` | `class="segmented-control"` | className 생략 | P1 |
| TC-E303 | onClick: undefined | `<SegmentedControl.Item onClick={undefined}>` | 클릭해도 에러 없음 | 무시 | P1 |

---

## 8. 커스터마이즈/오버라이드 Test Cases

> 참고: [Component Customization Policy](../api/component-customization.md)

### 8.1 className 병합 (L2 - 허용)

| TC ID | 테스트명 | 입력 | 예상 결과 | 우선순위 |
|-------|----------|------|----------|----------|
| TC-O100 | SegmentedControl className 추가 시 병합 | `<SegmentedControl className="custom">` | `class="segmented-control custom"` | P0 |
| TC-O101 | SegmentedControlItem className 추가 시 병합 | `<SegmentedControl.Item className="custom">` | `class="segmented-control-item custom"` | P0 |
| TC-O102 | className 여러 개 추가 | `<SegmentedControl className="a b c">` | `class="segmented-control a b c"` | P0 |

### 8.2 style prop (L2 - 허용)

| TC ID | 테스트명 | 입력 | 예상 결과 | 구현상태 | 우선순위 |
|-------|----------|------|----------|----------|----------|
| TC-O110 | style 인라인 적용 | `<SegmentedControl style={{ gap: 8 }}>` | `style="gap: 8px"` | ✅ 구현됨 | P0 |

### 8.3 data-* 속성 추가 (L2 - 허용)

| TC ID | 테스트명 | 입력 | 예상 결과 | 우선순위 |
|-------|----------|------|----------|----------|
| TC-O120 | data-testid 추가 | `<SegmentedControl data-testid="tabs">` | `data-testid="tabs"` | P0 |
| TC-O121 | data-analytics 추가 | `<SegmentedControl.Item data-analytics="click">` | `data-analytics="click"` | P1 |

### 8.4 보호 속성 오버라이드 시도 (L3 - 차단)

| TC ID | 테스트명 | 입력 | 예상 결과 | 정책 | 우선순위 |
|-------|----------|------|----------|------|----------|
| TC-O130 | data-size 오버라이드 시도 | `<SegmentedControl data-size="custom">` | Core 값 유지 (`data-size="md"`) | 차단 | P0 |
| TC-O131 | data-full-width 오버라이드 시도 | `<SegmentedControl data-full-width="false">` | Core 값 유지 | 차단 | P0 |
| TC-O132 | data-disabled 오버라이드 시도 | `<SegmentedControl data-disabled="false">` | Core 값 유지 | 차단 | P0 |
| TC-O133 | role 오버라이드 시도 | `<SegmentedControl role="tablist">` | Core 값 유지 (`role="group"`) | 차단 | P0 |
| TC-O134 | data-state 오버라이드 시도 (Item) | `<SegmentedControl.Item data-state="custom">` | Core 값 유지 | 차단 | P0 |
| TC-O135 | aria-selected 오버라이드 시도 (Item) | `<SegmentedControl.Item aria-selected="false">` | Core 값 유지 | 차단 | P0 |

> React: attrs가 Core attrs에 의해 덮어씌워짐 (구현됨)
> Vue: `inheritAttrs: false` + PROTECTED_ATTRS 필터링 (구현됨)

### 8.5 aria-* 속성 (L2 - 허용, 단 보호 속성 제외)

| TC ID | 테스트명 | 입력 | 예상 결과 | 우선순위 |
|-------|----------|------|----------|----------|
| TC-O140 | aria-label (SegmentedControl) | `<SegmentedControl aria-label="Tabs">` | `aria-label="Tabs"` | P0 |
| TC-O141 | aria-label (Item) | `<SegmentedControl.Item aria-label="Option">` | `aria-label="Option"` | P0 |
| TC-O142 | aria-describedby | `<SegmentedControl aria-describedby="desc">` | `aria-describedby="desc"` | P1 |
| TC-O143 | aria-controls | `<SegmentedControl.Item aria-controls="panel">` | `aria-controls="panel"` | P1 |

### 8.6 이벤트 핸들러 추가 (L2 - 허용)

| TC ID | 테스트명 | 입력 | 예상 결과 | 우선순위 |
|-------|----------|------|----------|----------|
| TC-O150 | onFocus 핸들러 (Item) | `<SegmentedControl.Item onFocus={fn}>` | focus 시 호출됨 | P0 |
| TC-O151 | onBlur 핸들러 (Item) | `<SegmentedControl.Item onBlur={fn}>` | blur 시 호출됨 | P0 |
| TC-O152 | onMouseEnter 핸들러 | `<SegmentedControl.Item onMouseEnter={fn}>` | hover 시 호출됨 | P1 |

### 8.7 Native HTML 속성 전달 (L2 - 허용)

| TC ID | 테스트명 | 입력 | 예상 결과 | 우선순위 |
|-------|----------|------|----------|----------|
| TC-O160 | id 속성 | `<SegmentedControl id="my-tabs">` | `id="my-tabs"` | P0 |
| TC-O161 | tabIndex 속성 (Item) | `<SegmentedControl.Item tabIndex={-1}>` | `tabindex="-1"` | P1 |
| TC-O162 | title 속성 | `<SegmentedControl.Item title="Tooltip">` | `title="Tooltip"` | P1 |

### 8.8 ref 접근 (L2 - 허용)

| TC ID | 테스트명 | 입력 | 예상 결과 | 우선순위 |
|-------|----------|------|----------|----------|
| TC-O170 | ref로 DOM 접근 (SegmentedControl) | `ref={divRef}` | `divRef.current`가 HTMLDivElement | P0 |
| TC-O171 | ref로 DOM 접근 (Item) | `ref={buttonRef}` | `buttonRef.current`가 HTMLButtonElement | P0 |
| TC-O172 | ref로 focus 호출 (Item) | `buttonRef.current.focus()` | 아이템 포커스됨 | P0 |

---

## 9. 통합 시나리오 Test Cases

### 9.1 단일 선택 패턴

| TC ID | 테스트명 | 설명 | 예상 결과 | 우선순위 |
|-------|----------|------|----------|----------|
| TC-S100 | 하나의 아이템만 selected | 여러 아이템 중 하나만 selected=true | selected 아이템만 `data-state="selected"` | P0 |
| TC-S101 | selected 아이템 클릭 시 재선택 | selected 아이템 클릭 | onClick 호출됨 (disabled 아님) | P1 |
| TC-S102 | 다른 아이템 선택 시 상태 변경 | 다른 아이템 클릭 → state 업데이트 | 이전 아이템 selected=false, 새 아이템 selected=true | P0 |

### 9.2 전체 disabled 시나리오

| TC ID | 테스트명 | 설명 | 예상 결과 | 우선순위 |
|-------|----------|------|----------|----------|
| TC-S200 | SegmentedControl disabled 적용 | `<SegmentedControl disabled>` | `data-disabled="true"` 렌더링 | P0 |
| TC-S201 | 개별 Item disabled | `<SegmentedControl.Item disabled>` | 해당 아이템만 `data-state="disabled"` | P0 |
| TC-S202 | 전체 disabled + 개별 selected | `<SegmentedControl disabled>` 내 `<Item selected>` | Item은 `data-state="selected"` (우선순위) | P1 |

### 9.3 키보드 접근성

| TC ID | 테스트명 | 설명 | 예상 결과 | 우선순위 |
|-------|----------|------|----------|----------|
| TC-S300 | Tab으로 포커스 이동 | Tab 키 | 첫 아이템으로 포커스 이동 | P0 |
| TC-S301 | Arrow 키로 아이템 간 이동 | 포커스 후 → 키 | 다음 아이템으로 포커스 이동 (사용자 구현) | P1 |
| TC-S302 | Enter/Space로 선택 | 포커스 후 Enter | onClick 호출 | P0 |
| TC-S303 | disabled 아이템은 포커스 불가 | Tab 순회 | disabled 아이템 건너뜀 | P0 |

### 9.4 fullWidth 레이아웃

| TC ID | 테스트명 | 설명 | 예상 결과 | 우선순위 |
|-------|----------|------|----------|----------|
| TC-S400 | fullWidth: true 적용 | `<SegmentedControl fullWidth>` | `data-full-width="true"` 렌더링 | P0 |
| TC-S401 | fullWidth: false 적용 | `<SegmentedControl fullWidth={false}>` | `data-full-width: undefined` | P0 |

---

## 10. TC 요약

| 카테고리 | P0 | P1 | P2 | 합계 |
|----------|----|----|----|----|
| Core - SegmentedControl (TC-C*) | 17 | 0 | 0 | 17 |
| Core - SegmentedControlItem (TC-I*) | 10 | 2 | 0 | 12 |
| React - SegmentedControl (TC-R*) | 10 | 0 | 0 | 10 |
| React - SegmentedControlItem (TC-RI*) | 13 | 1 | 0 | 14 |
| Vue - SegmentedControl (TC-V*) | 7 | 0 | 0 | 7 |
| Vue - SegmentedControlItem (TC-VI*) | 9 | 1 | 0 | 10 |
| 예외 케이스 (TC-E*) | 11 | 5 | 0 | 16 |
| 커스터마이즈 (TC-O*) | 16 | 9 | 0 | 25 |
| 통합 시나리오 (TC-S*) | 10 | 5 | 0 | 15 |
| **합계** | **103** | **23** | **0** | **126** |

**실제 TC 개수: 126개** (111개 요청 → 추가 TC 반영)

---

## 11. 검토 상태

- [x] Junior Developer 작성 완료 (2026-01-31)
- [ ] QA Tester 검토 대기
- [ ] 에러 처리 정책 최종 확정
- [ ] 키보드 접근성 구현 가이드 추가

### 참고 사항

- Button.md 형식을 참고하여 작성
- SegmentedControl/Item 두 컴포넌트 모두 포함
- 상태 우선순위 로직 (selected > disabled) 반영
- role='group' 고정값 검증 추가
- 통합 시나리오 섹션 추가 (단일 선택, 키보드 접근성 등)
