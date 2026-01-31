# ListItem Test Cases

## 분석 요약

### ListItem Core 정의 (ListItem.ts)

| 구분 | 내용 |
|------|------|
| **displayName** | `'ListItem'` |
| **defaultProps** | `variant: 'default'`, `selected: false`, `disabled: false`, `divider: false` |
| **propTypes.variant** | `['default', 'interactive']` |

### mapPropsToAttrs 로직

```typescript
{
  class: 'list-item',
  'data-variant': merged.variant,
  'data-state': selected ? 'selected' : disabled ? 'disabled' : undefined,
  'data-divider': divider || undefined,
  'aria-selected': selected || undefined,
  'aria-disabled': disabled || undefined,
}
```

**핵심 로직:**
- `selected`와 `disabled` 모두 true일 때: `data-state`는 `'selected'` (selected 우선)
- `aria-selected`: `selected`가 true일 때만 `true`, false면 `undefined`
- `aria-disabled`: `disabled`가 true일 때만 `true`, false면 `undefined`
- `data-divider`: true일 때만 `true`, false면 `undefined`

---

## 1. Core Test Cases

### 1.1 displayName 검증

| TC ID | 테스트명 | 입력 | 예상 결과 | 우선순위 |
|-------|----------|------|----------|----------|
| TC-C001 | displayName이 정확하다 | `ListItem.displayName` | `'ListItem'` | P0 |

### 1.2 defaultProps 검증

| TC ID | 테스트명 | 입력 | 예상 결과 | 우선순위 |
|-------|----------|------|----------|----------|
| TC-C010 | variant 기본값 | `ListItem.defaultProps.variant` | `'default'` | P0 |
| TC-C011 | selected 기본값 | `ListItem.defaultProps.selected` | `false` | P0 |
| TC-C012 | disabled 기본값 | `ListItem.defaultProps.disabled` | `false` | P0 |
| TC-C013 | divider 기본값 | `ListItem.defaultProps.divider` | `false` | P0 |

### 1.3 propTypes 검증

| TC ID | 테스트명 | 입력 | 예상 결과 | 우선순위 |
|-------|----------|------|----------|----------|
| TC-C020 | variant 옵션 포함 확인 | `ListItemVariants` | `['default', 'interactive']` 모두 포함 | P0 |

### 1.4 mapPropsToAttrs - 기본값 적용

| TC ID | 테스트명 | 입력 | 예상 결과 | 우선순위 |
|-------|----------|------|----------|----------|
| TC-C100 | 빈 객체 전달 시 기본값 적용 | `{}` | `class: 'list-item'`, `data-variant: 'default'`, `data-state: undefined`, `data-divider: undefined`, `aria-selected: undefined`, `aria-disabled: undefined` | P0 |

### 1.5 mapPropsToAttrs - variant 개별 검증

| TC ID | 테스트명 | 입력 | 예상 결과 | 우선순위 |
|-------|----------|------|----------|----------|
| TC-C110 | variant: default | `{ variant: 'default' }` | `data-variant: 'default'` | P0 |
| TC-C111 | variant: interactive | `{ variant: 'interactive' }` | `data-variant: 'interactive'` | P0 |

### 1.6 mapPropsToAttrs - 상태(selected/disabled) 검증

| TC ID | 테스트명 | 입력 | 예상 결과 | 우선순위 |
|-------|----------|------|----------|----------|
| TC-C120 | selected: true | `{ selected: true }` | `data-state: 'selected'`, `aria-selected: true` | P0 |
| TC-C121 | selected: false | `{ selected: false }` | `data-state: undefined`, `aria-selected: undefined` | P0 |
| TC-C122 | disabled: true | `{ disabled: true }` | `data-state: 'disabled'`, `aria-disabled: true` | P0 |
| TC-C123 | disabled: false | `{ disabled: false }` | `data-state: undefined`, `aria-disabled: undefined` | P0 |
| TC-C124 | selected + disabled 동시 true | `{ selected: true, disabled: true }` | `data-state: 'selected'` (selected 우선), `aria-selected: true`, `aria-disabled: true` | P0 |
| TC-C125 | selected: true, disabled: false | `{ selected: true, disabled: false }` | `data-state: 'selected'`, `aria-selected: true`, `aria-disabled: undefined` | P1 |
| TC-C126 | selected: false, disabled: true | `{ selected: false, disabled: true }` | `data-state: 'disabled'`, `aria-selected: undefined`, `aria-disabled: true` | P1 |

### 1.7 mapPropsToAttrs - divider 검증

| TC ID | 테스트명 | 입력 | 예상 결과 | 우선순위 |
|-------|----------|------|----------|----------|
| TC-C130 | divider: true | `{ divider: true }` | `data-divider: true` | P0 |
| TC-C131 | divider: false | `{ divider: false }` | `data-divider: undefined` | P0 |

### 1.8 mapPropsToAttrs - 복합 조합 검증

| TC ID | 테스트명 | 입력 | 예상 결과 | 우선순위 |
|-------|----------|------|----------|----------|
| TC-C140 | 모든 props 조합 1 | `{ variant: 'interactive', selected: true, divider: true }` | `data-variant: 'interactive'`, `data-state: 'selected'`, `data-divider: true`, `aria-selected: true` | P0 |
| TC-C141 | 모든 props 조합 2 | `{ variant: 'default', disabled: true, divider: false }` | `data-variant: 'default'`, `data-state: 'disabled'`, `data-divider: undefined`, `aria-disabled: true` | P0 |
| TC-C142 | 모든 props 조합 3 | `{ variant: 'interactive', selected: true, disabled: true, divider: true }` | `data-state: 'selected'` (selected 우선), `aria-selected: true`, `aria-disabled: true`, `data-divider: true` | P0 |

### 1.9 template 검증

| TC ID | 테스트명 | 입력 | 예상 결과 | 우선순위 |
|-------|----------|------|----------|----------|
| TC-C150 | tag가 li이다 | `ListItem.template.tag` | `'li'` | P0 |
| TC-C151 | default 슬롯 포함 | `ListItem.template.slots` | `['default']` 포함 | P0 |

---

## 2. React Wrapper Test Cases

### 2.1 Core mapPropsToAttrs 결과와 DOM 일치 검증

| TC ID | 테스트명 | 입력 | 예상 결과 | 우선순위 |
|-------|----------|------|----------|----------|
| TC-R100 | 기본 props로 렌더링 시 Core 결과 일치 | `<ListItem>Item</ListItem>` | DOM 속성이 `mapPropsToAttrs({})` 결과와 일치 | P0 |
| TC-R101 | variant prop이 Core 결과와 일치 | `<ListItem variant="interactive">` | `data-variant="interactive"` | P0 |
| TC-R102 | selected prop이 Core 결과와 일치 | `<ListItem selected>` | `data-state="selected"`, `aria-selected="true"` | P0 |
| TC-R103 | disabled prop이 Core 결과와 일치 | `<ListItem disabled>` | `data-state="disabled"`, `aria-disabled="true"` | P0 |
| TC-R104 | divider prop이 Core 결과와 일치 | `<ListItem divider>` | `data-divider="true"` | P0 |
| TC-R105 | 복합 props가 Core 결과와 일치 | `<ListItem variant="interactive" selected divider>` | 모든 data-* 및 aria-* 속성 일치 | P0 |
| TC-R106 | selected + disabled 동시 true | `<ListItem selected disabled>` | `data-state="selected"`, `aria-selected="true"`, `aria-disabled="true"` | P0 |

### 2.2 이벤트 핸들러 검증

| TC ID | 테스트명 | 입력 | 예상 결과 | 우선순위 |
|-------|----------|------|----------|----------|
| TC-R200 | onClick 호출 | 리스트 아이템 클릭 | `onClick` 핸들러 1회 호출 | P0 |
| TC-R201 | disabled 상태에서 onClick 동작 | `<ListItem disabled onClick={fn}>` 클릭 | `onClick` 호출됨 (네이티브 li는 disabled 미지원) | P0 |
| TC-R202 | 여러 번 클릭 시 매번 호출 | 3회 클릭 | `onClick` 3회 호출 | P1 |
| TC-R203 | 이벤트 객체 전달 확인 | 클릭 | `onClick(event)` 호출 시 event 객체 포함 | P1 |

### 2.3 React 전용 props 검증

| TC ID | 테스트명 | 입력 | 예상 결과 | 우선순위 |
|-------|----------|------|----------|----------|
| TC-R300 | children 렌더링 | `<ListItem>Hello</ListItem>` | 아이템 텍스트 `"Hello"` | P0 |
| TC-R301 | JSX children 렌더링 | `<ListItem><span>Icon</span>Text</ListItem>` | children 정상 렌더링 | P1 |
| TC-R302 | className 병합 | `<ListItem className="custom">` | `class="list-item custom"` | P0 |
| TC-R303 | role prop 적용 | `<ListItem role="option">` | `role="option"` | P0 |
| TC-R304 | aria-label 적용 | `<ListItem aria-label="Menu item">` | `aria-label="Menu item"` | P0 |
| TC-R305 | ref 전달 | `ref={itemRef}` | `itemRef.current`가 HTMLLIElement | P0 |

### 2.4 기타 네이티브 속성 전달

| TC ID | 테스트명 | 입력 | 예상 결과 | 우선순위 |
|-------|----------|------|----------|----------|
| TC-R400 | id 속성 전달 | `<ListItem id="my-item">` | `id="my-item"` | P1 |
| TC-R401 | data-testid 전달 | `<ListItem data-testid="list-item-1">` | `data-testid="list-item-1"` | P1 |
| TC-R402 | tabIndex 전달 | `<ListItem tabIndex={0}>` | `tabindex="0"` | P2 |

---

## 3. Vue Wrapper Test Cases

### 3.1 Core mapPropsToAttrs 결과와 DOM 일치 검증

| TC ID | 테스트명 | 입력 | 예상 결과 | 우선순위 |
|-------|----------|------|----------|----------|
| TC-V100 | 기본 props로 렌더링 시 Core 결과 일치 | `<ListItem>Item</ListItem>` | DOM 속성이 Core 결과와 일치 | P0 |
| TC-V101 | variant prop이 Core 결과와 일치 | `<ListItem variant="interactive">` | `data-variant="interactive"` | P0 |
| TC-V102 | selected prop이 Core 결과와 일치 | `<ListItem :selected="true">` | `data-state="selected"`, `aria-selected="true"` | P0 |
| TC-V103 | disabled prop이 Core 결과와 일치 | `<ListItem :disabled="true">` | `data-state="disabled"`, `aria-disabled="true"` | P0 |
| TC-V104 | divider prop이 Core 결과와 일치 | `<ListItem :divider="true">` | `data-divider="true"` | P0 |
| TC-V105 | selected + disabled 동시 true | `<ListItem :selected="true" :disabled="true">` | `data-state="selected"` | P0 |

### 3.2 이벤트 핸들러 검증

| TC ID | 테스트명 | 입력 | 예상 결과 | 우선순위 |
|-------|----------|------|----------|----------|
| TC-V200 | @click 호출 | 리스트 아이템 클릭 | 핸들러 1회 호출 | P0 |
| TC-V201 | disabled 상태에서 @click 동작 | `:disabled="true"` 상태에서 클릭 | 핸들러 호출됨 (li는 disabled 미지원) | P0 |
| TC-V202 | 이벤트 객체 전달 확인 | 클릭 | MouseEvent 객체 전달 | P1 |

### 3.3 Vue 전용 props/attrs 검증

| TC ID | 테스트명 | 입력 | 예상 결과 | 우선순위 |
|-------|----------|------|----------|----------|
| TC-V300 | 슬롯 콘텐츠 렌더링 | `<ListItem>Hello</ListItem>` | 아이템 텍스트 `"Hello"` | P0 |
| TC-V301 | class 병합 | `<ListItem class="custom">` | `class="list-item custom"` | P0 |
| TC-V302 | role 속성 적용 | `<ListItem role="option">` | `role="option"` | P0 |
| TC-V303 | aria-label 적용 | `<ListItem aria-label="Menu item">` | `aria-label="Menu item"` | P0 |

---

## 4. 예외 케이스 Test Cases

### 4.1 props 미전달

| TC ID | 테스트명 | 입력 | 예상 결과 | 정책 | 우선순위 |
|-------|----------|------|----------|------|----------|
| TC-E100 | 모든 props 미전달 (Core) | `mapPropsToAttrs({})` | defaultProps 적용 | Fallback | P0 |
| TC-E101 | 모든 props 미전달 (React) | `<ListItem />` | defaultProps로 렌더링 | Fallback | P0 |
| TC-E102 | 모든 props 미전달 (Vue) | `<ListItem />` | defaultProps로 렌더링 | Fallback | P0 |

### 4.2 undefined 전달

| TC ID | 테스트명 | 입력 | 예상 결과 | 정책 | 우선순위 |
|-------|----------|------|----------|------|----------|
| TC-E110 | variant: undefined | `{ variant: undefined }` | defaultProps.variant 적용 (`'default'`) | Fallback | P0 |
| TC-E111 | selected: undefined | `{ selected: undefined }` | defaultProps.selected 적용 (`false`) | Fallback | P0 |
| TC-E112 | disabled: undefined | `{ disabled: undefined }` | defaultProps.disabled 적용 (`false`) | Fallback | P0 |
| TC-E113 | divider: undefined | `{ divider: undefined }` | defaultProps.divider 적용 (`false`) | Fallback | P0 |

### 4.3 null 전달

| TC ID | 테스트명 | 입력 | 예상 결과 | 정책 | 우선순위 |
|-------|----------|------|----------|------|----------|
| TC-E120 | variant: null | `{ variant: null }` | defaultProps.variant 적용 | Fallback | P1 |
| TC-E121 | selected: null | `{ selected: null }` | defaultProps.selected 적용 | Fallback | P1 |
| TC-E122 | disabled: null | `{ disabled: null }` | defaultProps.disabled 적용 | Fallback | P1 |

### 4.4 빈 문자열 전달

| TC ID | 테스트명 | 입력 | 예상 결과 | 정책 | 우선순위 |
|-------|----------|------|----------|------|----------|
| TC-E130 | variant: '' | `{ variant: '' }` | defaultProps.variant 적용 | Fallback | P1 |

### 4.5 유효하지 않은 값 전달

| TC ID | 테스트명 | 입력 | 예상 결과 | 정책 | 우선순위 |
|-------|----------|------|----------|------|----------|
| TC-E140 | 유효하지 않은 variant | `{ variant: 'invalid' }` | defaultProps.variant + console.warn | Fallback + Warn | P1 |

### 4.6 React 전용 예외 케이스

| TC ID | 테스트명 | 입력 | 예상 결과 | 정책 | 우선순위 |
|-------|----------|------|----------|------|----------|
| TC-E200 | children: null | `<ListItem>{null}</ListItem>` | 빈 리스트 아이템 렌더링 | React 기본 동작 | P1 |
| TC-E201 | children: undefined | `<ListItem>{undefined}</ListItem>` | 빈 리스트 아이템 렌더링 | React 기본 동작 | P1 |
| TC-E202 | children 없음 | `<ListItem></ListItem>` | 빈 리스트 아이템 렌더링 | 허용 | P1 |
| TC-E203 | className: undefined | `<ListItem className={undefined}>` | `class="list-item"` | className 생략 | P1 |
| TC-E204 | onClick: undefined | `<ListItem onClick={undefined}>` | 클릭해도 에러 없음 | 무시 | P1 |

---

## 5. 커스터마이즈/오버라이드 Test Cases

> 참고: [Component Customization Policy](../api/component-customization.md)

### 5.1 className 병합 (L2 - 허용)

| TC ID | 테스트명 | 입력 | 예상 결과 | 우선순위 |
|-------|----------|------|----------|----------|
| TC-O100 | className 추가 시 병합 | `<ListItem className="custom">` | `class="list-item custom"` | P0 |
| TC-O101 | className 여러 개 추가 | `<ListItem className="a b c">` | `class="list-item a b c"` | P0 |
| TC-O102 | className undefined | `<ListItem className={undefined}>` | `class="list-item"` | P1 |
| TC-O103 | className 빈 문자열 | `<ListItem className="">` | `class="list-item "` 또는 `class="list-item"` | P1 |

### 5.2 style prop (L2 - 허용)

| TC ID | 테스트명 | 입력 | 예상 결과 | 구현상태 | 우선순위 |
|-------|----------|------|----------|----------|----------|
| TC-O110 | style 인라인 적용 | `<ListItem style={{ padding: 8 }}>` | `style="padding: 8px"` | 구현 예정 | P0 |
| TC-O111 | style 복합 속성 | `<ListItem style={{ color: 'red', fontSize: 14 }}>` | 스타일 적용됨 | 구현 예정 | P1 |
| TC-O112 | style undefined | `<ListItem style={undefined}>` | 스타일 없음 | 구현 예정 | P1 |

### 5.3 data-* 속성 추가 (L2 - 허용)

| TC ID | 테스트명 | 입력 | 예상 결과 | 우선순위 |
|-------|----------|------|----------|----------|
| TC-O120 | data-testid 추가 | `<ListItem data-testid="item-1">` | `data-testid="item-1"` | P0 |
| TC-O121 | data-index 추가 | `<ListItem data-index="0">` | `data-index="0"` | P1 |
| TC-O122 | 여러 data-* 추가 | `<ListItem data-a="1" data-b="2">` | 모두 적용됨 | P1 |

### 5.4 보호 속성 오버라이드 시도 (L3 - 차단)

| TC ID | 테스트명 | 입력 | 예상 결과 | 정책 | 우선순위 |
|-------|----------|------|----------|------|----------|
| TC-O130 | data-variant 오버라이드 시도 | `<ListItem data-variant="custom">` | Core 값 유지 (`data-variant="default"`) | 차단 | P0 |
| TC-O131 | data-state 오버라이드 시도 | `<ListItem data-state="custom">` | Core 값 유지 | 차단 | P0 |
| TC-O132 | data-divider 오버라이드 시도 | `<ListItem data-divider="custom">` | Core 값 유지 | 차단 | P0 |
| TC-O133 | aria-selected 오버라이드 시도 | `<ListItem aria-selected="false">` | Core 값 유지 | 차단 | P0 |
| TC-O134 | aria-disabled 오버라이드 시도 | `<ListItem aria-disabled="false">` | Core 값 유지 | 차단 | P0 |
| TC-O135 | class 직접 오버라이드 시도 | `<ListItem class="override">` | 무시 (className 사용) | 차단 | P1 |

> React: attrs가 Core attrs에 의해 덮어씌워짐
> Vue: `inheritAttrs: false` + PROTECTED_ATTRS 필터링

### 5.5 aria-* 속성 추가 (L2 - 허용, 단 보호 속성 제외)

| TC ID | 테스트명 | 입력 | 예상 결과 | 우선순위 |
|-------|----------|------|----------|----------|
| TC-O140 | aria-label | `<ListItem aria-label="Menu item">` | `aria-label="Menu item"` | P0 |
| TC-O141 | aria-labelledby | `<ListItem aria-labelledby="label-id">` | `aria-labelledby="label-id"` | P0 |
| TC-O142 | aria-describedby | `<ListItem aria-describedby="desc">` | `aria-describedby="desc"` | P1 |
| TC-O143 | aria-current | `<ListItem aria-current="page">` | `aria-current="page"` | P0 |
| TC-O144 | 여러 aria-* 조합 | `<ListItem aria-label="Item" aria-current="page">` | 모두 적용됨 | P1 |

### 5.6 이벤트 핸들러 추가 (L2 - 허용)

| TC ID | 테스트명 | 입력 | 예상 결과 | 우선순위 |
|-------|----------|------|----------|----------|
| TC-O150 | onFocus 핸들러 | `<ListItem onFocus={fn}>` | focus 시 호출됨 | P0 |
| TC-O151 | onBlur 핸들러 | `<ListItem onBlur={fn}>` | blur 시 호출됨 | P0 |
| TC-O152 | onMouseEnter 핸들러 | `<ListItem onMouseEnter={fn}>` | hover 시 호출됨 | P1 |
| TC-O153 | onMouseLeave 핸들러 | `<ListItem onMouseLeave={fn}>` | leave 시 호출됨 | P1 |
| TC-O154 | onKeyDown 핸들러 | `<ListItem onKeyDown={fn}>` | keydown 시 호출됨 | P1 |
| TC-O155 | 여러 이벤트 조합 | `<ListItem onClick={a} onFocus={b} onBlur={c}>` | 각각 호출됨 | P1 |

### 5.7 Native HTML 속성 전달 (L2 - 허용)

| TC ID | 테스트명 | 입력 | 예상 결과 | 우선순위 |
|-------|----------|------|----------|----------|
| TC-O160 | id 속성 | `<ListItem id="my-item">` | `id="my-item"` | P0 |
| TC-O161 | role 속성 | `<ListItem role="option">` | `role="option"` | P0 |
| TC-O162 | tabIndex 속성 | `<ListItem tabIndex={0}>` | `tabindex="0"` | P1 |
| TC-O163 | title 속성 | `<ListItem title="Hover text">` | `title="Hover text"` | P1 |

### 5.8 ref 접근 (L2 - 허용)

| TC ID | 테스트명 | 입력 | 예상 결과 | 우선순위 |
|-------|----------|------|----------|----------|
| TC-O170 | ref로 DOM 접근 | `ref={itemRef}` | `itemRef.current`가 HTMLLIElement | P0 |
| TC-O171 | ref로 focus 호출 | `itemRef.current.focus()` | 리스트 아이템 포커스됨 | P0 |
| TC-O172 | ref로 click 호출 | `itemRef.current.click()` | onClick 호출됨 | P1 |
| TC-O173 | callback ref | `ref={(el) => { myRef = el }}` | el이 HTMLLIElement | P1 |

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
const safeVariant = ListItemVariants.includes(merged.variant)
  ? merged.variant
  : ListItem.defaultProps.variant;

if (process.env.NODE_ENV !== 'production' && merged.variant !== safeVariant) {
  console.warn(`[ListItem] Invalid variant "${merged.variant}". Using default "${safeVariant}".`);
}
```

---

## 7. TC 요약

| 카테고리 | P0 | P1 | P2 | 합계 |
|----------|----|----|----|----|
| Core (TC-C*) | 17 | 2 | 0 | 19 |
| React Wrapper (TC-R*) | 11 | 5 | 1 | 17 |
| Vue Wrapper (TC-V*) | 10 | 1 | 0 | 11 |
| 예외 케이스 (TC-E*) | 7 | 9 | 0 | 16 |
| 커스터마이즈 (TC-O*) | 16 | 8 | 0 | 24 |
| **합계** | **61** | **25** | **1** | **87** |

---

## 8. 검토 상태

- [ ] QA Tester 검토 완료
- [ ] 누락 TC 추가
- [ ] 에러 처리 정책 최종 확정

### 구현 예정 항목

| 영역 | 구현 필요 TC |
|------|-------------|
| React | TC-R100~R106, TC-R200~R203, TC-R300~R305 |
| React 보호 속성 | TC-O130~O135 (data-variant, data-state, data-divider, aria-selected, aria-disabled) |
| Vue | TC-V100~V105, TC-V200~V202, TC-V300~V303 |
| Vue 보호 속성 | TC-O130~O135 |
