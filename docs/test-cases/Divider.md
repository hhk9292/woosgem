# Divider Test Cases

## 분석 요약

### Divider Core 정의 (Divider.ts)

| 구분 | 내용 |
|------|------|
| **displayName** | `'Divider'` |
| **defaultProps** | `orientation: 'horizontal'`, `variant: 'solid'`, `spacing: 'md'` |
| **propTypes.orientation** | `['horizontal', 'vertical']` |
| **propTypes.variant** | `['solid', 'dashed']` |
| **propTypes.spacing** | `['none', 'sm', 'md', 'lg']` |

### mapPropsToAttrs 로직

```typescript
{
  class: 'divider',
  role: 'separator',
  'data-orientation': merged.orientation,
  'data-variant': merged.variant,
  'data-spacing': merged.spacing,
  'aria-orientation': merged.orientation,
}
```

**핵심 로직:**
- `role`: 항상 `'separator'` 고정 (접근성)
- `aria-orientation`: `orientation` prop과 자동 동기화
- `template.tag`: `'hr'` (semantic HTML)
- `template.slots`: `[]` (슬롯 없음)

---

## 1. Core Test Cases

### 1.1 displayName 검증

| TC ID | 테스트명 | 입력 | 예상 결과 | 우선순위 |
|-------|----------|------|----------|----------|
| TC-C001 | displayName이 정확하다 | `Divider.displayName` | `'Divider'` | P0 |

### 1.2 defaultProps 검증

| TC ID | 테스트명 | 입력 | 예상 결과 | 우선순위 |
|-------|----------|------|----------|----------|
| TC-C010 | orientation 기본값 | `Divider.defaultProps.orientation` | `'horizontal'` | P0 |
| TC-C011 | variant 기본값 | `Divider.defaultProps.variant` | `'solid'` | P0 |
| TC-C012 | spacing 기본값 | `Divider.defaultProps.spacing` | `'md'` | P0 |

### 1.3 propTypes 검증

| TC ID | 테스트명 | 입력 | 예상 결과 | 우선순위 |
|-------|----------|------|----------|----------|
| TC-C020 | orientation 옵션 포함 확인 | `DividerOrientations` | `['horizontal', 'vertical']` 모두 포함 | P0 |
| TC-C021 | variant 옵션 포함 확인 | `DividerVariants` | `['solid', 'dashed']` 모두 포함 | P0 |
| TC-C022 | spacing 옵션 포함 확인 | `DividerSpacings` | `['none', 'sm', 'md', 'lg']` 모두 포함 | P0 |

### 1.4 mapPropsToAttrs - 기본값 적용

| TC ID | 테스트명 | 입력 | 예상 결과 | 우선순위 |
|-------|----------|------|----------|----------|
| TC-C100 | 빈 객체 전달 시 기본값 적용 | `{}` | `class: 'divider'`, `role: 'separator'`, `data-orientation: 'horizontal'`, `data-variant: 'solid'`, `data-spacing: 'md'`, `aria-orientation: 'horizontal'` | P0 |

### 1.5 mapPropsToAttrs - orientation 개별 검증

| TC ID | 테스트명 | 입력 | 예상 결과 | 우선순위 |
|-------|----------|------|----------|----------|
| TC-C110 | orientation: horizontal | `{ orientation: 'horizontal' }` | `data-orientation: 'horizontal'`, `aria-orientation: 'horizontal'` | P0 |
| TC-C111 | orientation: vertical | `{ orientation: 'vertical' }` | `data-orientation: 'vertical'`, `aria-orientation: 'vertical'` | P0 |

### 1.6 mapPropsToAttrs - variant 개별 검증

| TC ID | 테스트명 | 입력 | 예상 결과 | 우선순위 |
|-------|----------|------|----------|----------|
| TC-C120 | variant: solid | `{ variant: 'solid' }` | `data-variant: 'solid'` | P0 |
| TC-C121 | variant: dashed | `{ variant: 'dashed' }` | `data-variant: 'dashed'` | P0 |

### 1.7 mapPropsToAttrs - spacing 개별 검증

| TC ID | 테스트명 | 입력 | 예상 결과 | 우선순위 |
|-------|----------|------|----------|----------|
| TC-C130 | spacing: none | `{ spacing: 'none' }` | `data-spacing: 'none'` | P0 |
| TC-C131 | spacing: sm | `{ spacing: 'sm' }` | `data-spacing: 'sm'` | P0 |
| TC-C132 | spacing: md | `{ spacing: 'md' }` | `data-spacing: 'md'` | P0 |
| TC-C133 | spacing: lg | `{ spacing: 'lg' }` | `data-spacing: 'lg'` | P0 |

### 1.8 mapPropsToAttrs - 접근성 속성 검증

| TC ID | 테스트명 | 입력 | 예상 결과 | 우선순위 |
|-------|----------|------|----------|----------|
| TC-C140 | role 고정값 확인 | `{}` | `role: 'separator'` | P0 |
| TC-C141 | aria-orientation과 orientation 동기화 (horizontal) | `{ orientation: 'horizontal' }` | `aria-orientation: 'horizontal'` | P0 |
| TC-C142 | aria-orientation과 orientation 동기화 (vertical) | `{ orientation: 'vertical' }` | `aria-orientation: 'vertical'` | P0 |

### 1.9 mapPropsToAttrs - 복합 조합 검증

| TC ID | 테스트명 | 입력 | 예상 결과 | 우선순위 |
|-------|----------|------|----------|----------|
| TC-C150 | 모든 props 조합 1 | `{ orientation: 'vertical', variant: 'dashed', spacing: 'lg' }` | 해당 data-* 속성 일치 | P0 |
| TC-C151 | 모든 props 조합 2 | `{ orientation: 'horizontal', variant: 'solid', spacing: 'none' }` | 해당 data-* 속성 일치 | P0 |
| TC-C152 | 모든 props 조합 3 | `{ orientation: 'vertical', variant: 'solid', spacing: 'sm' }` | 해당 data-* 속성 일치 | P0 |

### 1.10 template 검증

| TC ID | 테스트명 | 입력 | 예상 결과 | 우선순위 |
|-------|----------|------|----------|----------|
| TC-C160 | tag가 hr이다 | `Divider.template.tag` | `'hr'` | P0 |
| TC-C161 | slots가 빈 배열이다 | `Divider.template.slots` | `[]` | P0 |

---

## 2. React Wrapper Test Cases

### 2.1 Core mapPropsToAttrs 결과와 DOM 일치 검증

| TC ID | 테스트명 | 입력 | 예상 결과 | 우선순위 |
|-------|----------|------|----------|----------|
| TC-R100 | 기본 props로 렌더링 시 Core 결과 일치 | `<Divider />` | DOM 속성이 `mapPropsToAttrs({})` 결과와 일치 | P0 |
| TC-R101 | orientation prop이 Core 결과와 일치 | `<Divider orientation="vertical" />` | `data-orientation="vertical"`, `aria-orientation="vertical"` | P0 |
| TC-R102 | variant prop이 Core 결과와 일치 | `<Divider variant="dashed" />` | `data-variant="dashed"` | P0 |
| TC-R103 | spacing prop이 Core 결과와 일치 | `<Divider spacing="lg" />` | `data-spacing="lg"` | P0 |
| TC-R104 | 복합 props가 Core 결과와 일치 | `<Divider orientation="vertical" variant="dashed" spacing="sm" />` | 모든 data-* 속성 일치 | P0 |
| TC-R105 | role 속성 확인 | `<Divider />` | `role="separator"` | P0 |
| TC-R106 | aria-orientation 자동 동기화 | `<Divider orientation="horizontal" />` | `aria-orientation="horizontal"` | P0 |

### 2.2 React 전용 props 검증

| TC ID | 테스트명 | 입력 | 예상 결과 | 우선순위 |
|-------|----------|------|----------|----------|
| TC-R200 | className 병합 | `<Divider className="custom" />` | `class="divider custom"` | P0 |
| TC-R201 | className 여러 개 추가 | `<Divider className="a b c" />` | `class="divider a b c"` | P0 |
| TC-R202 | aria-label 적용 | `<Divider aria-label="Section divider" />` | `aria-label="Section divider"` | P0 |
| TC-R203 | ref 전달 | `ref={dividerRef}` | `dividerRef.current`가 HTMLHRElement | P0 |

### 2.3 기타 네이티브 속성 전달

| TC ID | 테스트명 | 입력 | 예상 결과 | 우선순위 |
|-------|----------|------|----------|----------|
| TC-R300 | id 속성 전달 | `<Divider id="main-divider" />` | `id="main-divider"` | P1 |
| TC-R301 | data-testid 전달 | `<Divider data-testid="divider-1" />` | `data-testid="divider-1"` | P1 |

---

## 3. Vue Wrapper Test Cases

### 3.1 Core mapPropsToAttrs 결과와 DOM 일치 검증

| TC ID | 테스트명 | 입력 | 예상 결과 | 우선순위 |
|-------|----------|------|----------|----------|
| TC-V100 | 기본 props로 렌더링 시 Core 결과 일치 | `<Divider />` | DOM 속성이 Core 결과와 일치 | P0 |
| TC-V101 | orientation prop이 Core 결과와 일치 | `<Divider orientation="vertical" />` | `data-orientation="vertical"`, `aria-orientation="vertical"` | P0 |
| TC-V102 | variant prop이 Core 결과와 일치 | `<Divider variant="dashed" />` | `data-variant="dashed"` | P0 |
| TC-V103 | spacing prop이 Core 결과와 일치 | `<Divider spacing="lg" />` | `data-spacing="lg"` | P0 |
| TC-V104 | 복합 props가 Core 결과와 일치 | `<Divider orientation="vertical" variant="dashed" spacing="sm" />` | 모든 data-* 속성 일치 | P0 |
| TC-V105 | role 속성 확인 | `<Divider />` | `role="separator"` | P0 |
| TC-V106 | aria-orientation 자동 동기화 | `<Divider orientation="horizontal" />` | `aria-orientation="horizontal"` | P0 |

### 3.2 Vue 전용 props/attrs 검증

| TC ID | 테스트명 | 입력 | 예상 결과 | 우선순위 |
|-------|----------|------|----------|----------|
| TC-V200 | class 병합 | `<Divider class="custom" />` | `class="divider custom"` | P0 |
| TC-V201 | class 여러 개 추가 | `<Divider class="a b c" />` | `class="divider a b c"` | P0 |
| TC-V202 | aria-label 적용 | `<Divider aria-label="Section divider" />` | `aria-label="Section divider"` | P0 |

---

## 4. 예외 케이스 Test Cases

### 4.1 props 미전달

| TC ID | 테스트명 | 입력 | 예상 결과 | 정책 | 우선순위 |
|-------|----------|------|----------|------|----------|
| TC-E100 | 모든 props 미전달 (Core) | `mapPropsToAttrs({})` | defaultProps 적용 | Fallback | P0 |
| TC-E101 | 모든 props 미전달 (React) | `<Divider />` | defaultProps로 렌더링 | Fallback | P0 |
| TC-E102 | 모든 props 미전달 (Vue) | `<Divider />` | defaultProps로 렌더링 | Fallback | P0 |

### 4.2 undefined 전달

| TC ID | 테스트명 | 입력 | 예상 결과 | 정책 | 우선순위 |
|-------|----------|------|----------|------|----------|
| TC-E110 | orientation: undefined | `{ orientation: undefined }` | defaultProps.orientation 적용 (`'horizontal'`) | Fallback | P0 |
| TC-E111 | variant: undefined | `{ variant: undefined }` | defaultProps.variant 적용 (`'solid'`) | Fallback | P0 |
| TC-E112 | spacing: undefined | `{ spacing: undefined }` | defaultProps.spacing 적용 (`'md'`) | Fallback | P0 |

### 4.3 null 전달

| TC ID | 테스트명 | 입력 | 예상 결과 | 정책 | 우선순위 |
|-------|----------|------|----------|------|----------|
| TC-E120 | orientation: null | `{ orientation: null }` | defaultProps.orientation 적용 | Fallback | P1 |
| TC-E121 | variant: null | `{ variant: null }` | defaultProps.variant 적용 | Fallback | P1 |
| TC-E122 | spacing: null | `{ spacing: null }` | defaultProps.spacing 적용 | Fallback | P1 |

### 4.4 빈 문자열 전달

| TC ID | 테스트명 | 입력 | 예상 결과 | 정책 | 우선순위 |
|-------|----------|------|----------|------|----------|
| TC-E130 | orientation: '' | `{ orientation: '' }` | defaultProps.orientation 적용 | Fallback | P1 |
| TC-E131 | variant: '' | `{ variant: '' }` | defaultProps.variant 적용 | Fallback | P1 |
| TC-E132 | spacing: '' | `{ spacing: '' }` | defaultProps.spacing 적용 | Fallback | P1 |

### 4.5 유효하지 않은 값 전달

| TC ID | 테스트명 | 입력 | 예상 결과 | 정책 | 우선순위 |
|-------|----------|------|----------|------|----------|
| TC-E140 | 유효하지 않은 orientation | `{ orientation: 'invalid' }` | defaultProps.orientation + console.warn | Fallback + Warn | P1 |
| TC-E141 | 유효하지 않은 variant | `{ variant: 'invalid' }` | defaultProps.variant + console.warn | Fallback + Warn | P1 |
| TC-E142 | 유효하지 않은 spacing | `{ spacing: 'invalid' }` | defaultProps.spacing + console.warn | Fallback + Warn | P1 |

### 4.6 React 전용 예외 케이스

| TC ID | 테스트명 | 입력 | 예상 결과 | 정책 | 우선순위 |
|-------|----------|------|----------|------|----------|
| TC-E200 | className: undefined | `<Divider className={undefined} />` | `class="divider"` | className 생략 | P1 |
| TC-E201 | className: null | `<Divider className={null} />` | `class="divider"` | className 생략 | P1 |

---

## 5. 커스터마이즈/오버라이드 Test Cases

> 참고: [Component Customization Policy](../api/component-customization.md)

### 5.1 className 병합 (L2 - 허용)

| TC ID | 테스트명 | 입력 | 예상 결과 | 우선순위 |
|-------|----------|------|----------|----------|
| TC-O100 | className 추가 시 병합 | `<Divider className="custom" />` | `class="divider custom"` | P0 |
| TC-O101 | className 여러 개 추가 | `<Divider className="a b c" />` | `class="divider a b c"` | P0 |
| TC-O102 | className undefined | `<Divider className={undefined} />` | `class="divider"` | P1 |
| TC-O103 | className 빈 문자열 | `<Divider className="" />` | `class="divider "` 또는 `class="divider"` | P1 |

### 5.2 style prop (L2 - 허용)

| TC ID | 테스트명 | 입력 | 예상 결과 | 구현상태 | 우선순위 |
|-------|----------|------|----------|----------|----------|
| TC-O110 | style 인라인 적용 | `<Divider style={{ marginTop: 8 }} />` | `style="margin-top: 8px"` | ✅ 구현됨 | P0 |
| TC-O111 | style 복합 속성 | `<Divider style={{ borderColor: 'red', opacity: 0.5 }} />` | 스타일 적용됨 | ✅ 구현됨 | P1 |
| TC-O112 | style undefined | `<Divider style={undefined} />` | 스타일 없음 | ✅ 구현됨 | P1 |

### 5.3 data-* 속성 추가 (L2 - 허용)

| TC ID | 테스트명 | 입력 | 예상 결과 | 우선순위 |
|-------|----------|------|----------|----------|
| TC-O120 | data-testid 추가 | `<Divider data-testid="divider" />` | `data-testid="divider"` | P0 |
| TC-O121 | data-section 추가 | `<Divider data-section="header" />` | `data-section="header"` | P1 |
| TC-O122 | 여러 data-* 추가 | `<Divider data-a="1" data-b="2" />` | 모두 적용됨 | P1 |

### 5.4 보호 속성 오버라이드 시도 (L3 - 차단)

| TC ID | 테스트명 | 입력 | 예상 결과 | 정책 | 우선순위 |
|-------|----------|------|----------|------|----------|
| TC-O130 | data-orientation 오버라이드 시도 | `<Divider data-orientation="custom" />` | Core 값 유지 (`data-orientation="horizontal"`) | 차단 | P0 |
| TC-O131 | data-variant 오버라이드 시도 | `<Divider data-variant="custom" />` | Core 값 유지 | 차단 | P0 |
| TC-O132 | data-spacing 오버라이드 시도 | `<Divider data-spacing="custom" />` | Core 값 유지 | 차단 | P0 |
| TC-O133 | role 오버라이드 시도 | `<Divider role="presentation" />` | Core 값 유지 (`role="separator"`) | 차단 | P0 |
| TC-O134 | aria-orientation 오버라이드 시도 | `<Divider aria-orientation="custom" />` | Core 값 유지 | 차단 | P0 |
| TC-O135 | class 직접 오버라이드 시도 | `<Divider class="override" />` | 무시 (className 사용) | 차단 | P1 |

> React: attrs가 Core attrs에 의해 덮어씌워짐 (구현됨)
> Vue: `inheritAttrs: false` + PROTECTED_ATTRS 필터링 (구현됨)

### 5.5 aria-* 속성 (L2 - 허용, 단 aria-orientation은 L3)

| TC ID | 테스트명 | 입력 | 예상 결과 | 우선순위 |
|-------|----------|------|----------|----------|
| TC-O140 | aria-label | `<Divider aria-label="Content separator" />` | `aria-label="Content separator"` | P0 |
| TC-O141 | aria-labelledby | `<Divider aria-labelledby="section-title" />` | `aria-labelledby="section-title"` | P1 |
| TC-O142 | aria-describedby | `<Divider aria-describedby="desc" />` | `aria-describedby="desc"` | P1 |
| TC-O143 | aria-hidden | `<Divider aria-hidden="true" />` | `aria-hidden="true"` | P1 |

### 5.6 Native HTML 속성 전달 (L2 - 허용)

| TC ID | 테스트명 | 입력 | 예상 결과 | 우선순위 |
|-------|----------|------|----------|----------|
| TC-O150 | id 속성 | `<Divider id="main-divider" />` | `id="main-divider"` | P0 |
| TC-O151 | title 속성 | `<Divider title="Separator" />` | `title="Separator"` | P1 |
| TC-O152 | hidden 속성 | `<Divider hidden />` | `hidden` 속성 적용 | P1 |

### 5.7 ref 접근 (L2 - 허용)

| TC ID | 테스트명 | 입력 | 예상 결과 | 우선순위 |
|-------|----------|------|----------|----------|
| TC-O160 | ref로 DOM 접근 | `ref={dividerRef}` | `dividerRef.current`가 HTMLHRElement | P0 |
| TC-O161 | ref로 메서드 호출 | `dividerRef.current.scrollIntoView()` | 메서드 실행됨 | P1 |
| TC-O162 | callback ref | `ref={(el) => { myRef = el }}` | el이 HTMLHRElement | P1 |

---

## 6. TC 요약

| 카테고리 | P0 | P1 | P2 | 합계 |
|----------|----|----|----|----|
| Core (TC-C*) | 23 | 0 | 0 | 23 |
| React Wrapper (TC-R*) | 9 | 2 | 0 | 11 |
| Vue Wrapper (TC-V*) | 10 | 0 | 0 | 10 |
| 예외 케이스 (TC-E*) | 6 | 10 | 0 | 16 |
| 커스터마이즈 (TC-O*) | 13 | 15 | 0 | 28 |
| **합계** | **61** | **27** | **0** | **88** |

---

## 7. 검토 상태

- [ ] QA Tester 검토 완료
- [ ] 누락 TC 확인
- [ ] 에러 처리 정책 확인

---

## 8. 참고 사항

### 8.1 Button과의 차이점

| 항목 | Button | Divider |
|------|--------|---------|
| **template.tag** | `'button'` | `'hr'` (semantic HTML) |
| **template.slots** | `['default']` | `[]` (슬롯 없음) |
| **이벤트 핸들러** | `onClick` 등 지원 | 없음 (비상호작용) |
| **상태 관리** | `loading`, `disabled` | 없음 (정적 요소) |
| **접근성 속성** | 동적 | `role="separator"`, `aria-orientation` 고정 |

### 8.2 접근성 핵심 요구사항

- `role="separator"`: 시맨틱 구분자 역할 명시
- `aria-orientation`: orientation prop과 항상 동기화
- `<hr>` 태그 사용: 시맨틱 HTML 준수

### 8.3 스타일 설계 특징

- `spacing`: 구분선 주변 여백 제어 (`'none'`, `'sm'`, `'md'`, `'lg'`)
- `variant`: 선 스타일 (`'solid'`, `'dashed'`)
- `orientation`: 방향 (`'horizontal'`, `'vertical'`)
