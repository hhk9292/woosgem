# Avatar Test Cases

## 분석 요약

### Avatar Core 정의 (Avatar.ts)

| 구분 | 내용 |
|------|------|
| **displayName** | `'Avatar'` |
| **defaultProps** | `size: 'md'`, `shape: 'circle'`, `src: ''`, `alt: ''`, `fallback: ''` |
| **propTypes.size** | `['xs', 'sm', 'md', 'lg', 'xl']` |
| **propTypes.shape** | `['circle', 'square']` |

### mapPropsToAttrs 로직

```typescript
{
  class: 'avatar',
  'data-size': merged.size,
  'data-shape': merged.shape,
  'data-has-image': merged.src ? true : undefined,
}
```

**핵심 로직:**
- `data-has-image`: src가 존재하면 `true`, 없으면 `undefined`
- `src`, `alt`, `fallback`은 attrs가 아닌 렌더링 로직에서 사용

---

## 1. Core Test Cases

### 1.1 displayName 검증

| TC ID | 테스트명 | 입력 | 예상 결과 | 우선순위 |
|-------|----------|------|----------|----------|
| TC-C001 | displayName이 정확하다 | `Avatar.displayName` | `'Avatar'` | P0 |

### 1.2 defaultProps 검증

| TC ID | 테스트명 | 입력 | 예상 결과 | 우선순위 |
|-------|----------|------|----------|----------|
| TC-C010 | size 기본값 | `Avatar.defaultProps.size` | `'md'` | P0 |
| TC-C011 | shape 기본값 | `Avatar.defaultProps.shape` | `'circle'` | P0 |
| TC-C012 | src 기본값 | `Avatar.defaultProps.src` | `''` | P0 |
| TC-C013 | alt 기본값 | `Avatar.defaultProps.alt` | `''` | P0 |
| TC-C014 | fallback 기본값 | `Avatar.defaultProps.fallback` | `''` | P0 |

### 1.3 propTypes 검증

| TC ID | 테스트명 | 입력 | 예상 결과 | 우선순위 |
|-------|----------|------|----------|----------|
| TC-C020 | size 옵션 포함 확인 | `AvatarSizes` | `['xs', 'sm', 'md', 'lg', 'xl']` 모두 포함 | P0 |
| TC-C021 | shape 옵션 포함 확인 | `AvatarShapes` | `['circle', 'square']` 모두 포함 | P0 |

### 1.4 mapPropsToAttrs - 기본값 적용

| TC ID | 테스트명 | 입력 | 예상 결과 | 우선순위 |
|-------|----------|------|----------|----------|
| TC-C100 | 빈 객체 전달 시 기본값 적용 | `{}` | `class: 'avatar'`, `data-size: 'md'`, `data-shape: 'circle'`, `data-has-image: undefined` | P0 |

### 1.5 mapPropsToAttrs - size 개별 검증

| TC ID | 테스트명 | 입력 | 예상 결과 | 우선순위 |
|-------|----------|------|----------|----------|
| TC-C110 | size: xs | `{ size: 'xs' }` | `data-size: 'xs'` | P0 |
| TC-C111 | size: sm | `{ size: 'sm' }` | `data-size: 'sm'` | P0 |
| TC-C112 | size: md | `{ size: 'md' }` | `data-size: 'md'` | P0 |
| TC-C113 | size: lg | `{ size: 'lg' }` | `data-size: 'lg'` | P0 |
| TC-C114 | size: xl | `{ size: 'xl' }` | `data-size: 'xl'` | P0 |

### 1.6 mapPropsToAttrs - shape 개별 검증

| TC ID | 테스트명 | 입력 | 예상 결과 | 우선순위 |
|-------|----------|------|----------|----------|
| TC-C120 | shape: circle | `{ shape: 'circle' }` | `data-shape: 'circle'` | P0 |
| TC-C121 | shape: square | `{ shape: 'square' }` | `data-shape: 'square'` | P0 |

### 1.7 mapPropsToAttrs - data-has-image 검증

| TC ID | 테스트명 | 입력 | 예상 결과 | 우선순위 |
|-------|----------|------|----------|----------|
| TC-C130 | src가 있을 때 | `{ src: '/avatar.jpg' }` | `data-has-image: true` | P0 |
| TC-C131 | src가 빈 문자열일 때 | `{ src: '' }` | `data-has-image: undefined` | P0 |
| TC-C132 | src가 없을 때 | `{}` | `data-has-image: undefined` | P0 |

### 1.8 mapPropsToAttrs - 복합 조합 검증

| TC ID | 테스트명 | 입력 | 예상 결과 | 우선순위 |
|-------|----------|------|----------|----------|
| TC-C140 | 모든 props 조합 1 | `{ size: 'lg', shape: 'square', src: '/img.jpg' }` | 해당 data-* 속성 일치, `data-has-image: true` | P0 |
| TC-C141 | 모든 props 조합 2 | `{ size: 'xs', shape: 'circle' }` | 해당 data-* 속성 일치, `data-has-image: undefined` | P0 |
| TC-C142 | size + shape + fallback | `{ size: 'md', shape: 'square', fallback: 'AB' }` | 해당 data-* 속성 일치 (fallback은 attrs에 영향 없음) | P0 |

### 1.9 template 검증

| TC ID | 테스트명 | 입력 | 예상 결과 | 우선순위 |
|-------|----------|------|----------|----------|
| TC-C150 | tag가 div이다 | `Avatar.template.tag` | `'div'` | P0 |
| TC-C151 | default 슬롯 포함 | `Avatar.template.slots` | `['default']` 포함 | P0 |

---

## 2. React Wrapper Test Cases

### 2.1 Core mapPropsToAttrs 결과와 DOM 일치 검증

| TC ID | 테스트명 | 입력 | 예상 결과 | 우선순위 |
|-------|----------|------|----------|----------|
| TC-R100 | 기본 props로 렌더링 시 Core 결과 일치 | `<Avatar />` | DOM 속성이 `mapPropsToAttrs({})` 결과와 일치 | P0 |
| TC-R101 | size prop이 Core 결과와 일치 | `<Avatar size="lg" />` | `data-size="lg"` | P0 |
| TC-R102 | shape prop이 Core 결과와 일치 | `<Avatar shape="square" />` | `data-shape="square"` | P0 |
| TC-R103 | src가 있을 때 Core 결과와 일치 | `<Avatar src="/avatar.jpg" />` | `data-has-image="true"` | P0 |
| TC-R104 | src가 없을 때 Core 결과와 일치 | `<Avatar />` | `data-has-image` 속성 없음 | P0 |
| TC-R105 | 복합 props가 Core 결과와 일치 | `<Avatar size="xl" shape="circle" src="/img.jpg" />` | 모든 data-* 속성 일치 | P0 |

### 2.2 이미지 렌더링 검증

| TC ID | 테스트명 | 입력 | 예상 결과 | 우선순위 |
|-------|----------|------|----------|----------|
| TC-R200 | src가 있을 때 img 렌더링 | `<Avatar src="/avatar.jpg" alt="User" />` | `<img src="/avatar.jpg" alt="User" />` 포함 | P0 |
| TC-R201 | src가 없을 때 img 미렌더링 | `<Avatar />` | `<img>` 태그 없음 | P0 |
| TC-R202 | src + alt 모두 전달 | `<Avatar src="/img.jpg" alt="John Doe" />` | img의 alt 속성 일치 | P0 |
| TC-R203 | src만 전달 (alt 없음) | `<Avatar src="/img.jpg" />` | img 렌더링, alt="" | P1 |

### 2.3 폴백 콘텐츠 렌더링 검증

| TC ID | 테스트명 | 입력 | 예상 결과 | 우선순위 |
|-------|----------|------|----------|----------|
| TC-R210 | src 없고 children 있을 때 | `<Avatar>AB</Avatar>` | children 렌더링 | P0 |
| TC-R211 | src 없고 fallback 있을 때 | `<Avatar fallback="AB" />` | fallback 텍스트 렌더링 | P0 |
| TC-R212 | src 있을 때 children 무시 | `<Avatar src="/img.jpg">AB</Avatar>` | img만 렌더링, children 무시 | P0 |
| TC-R213 | src 있을 때 fallback 무시 | `<Avatar src="/img.jpg" fallback="AB" />` | img만 렌더링, fallback 무시 | P0 |
| TC-R214 | children과 fallback 동시 전달 | `<Avatar fallback="AB">CD</Avatar>` | children 우선 렌더링 | P1 |

### 2.4 React 전용 props 검증

| TC ID | 테스트명 | 입력 | 예상 결과 | 우선순위 |
|-------|----------|------|----------|----------|
| TC-R300 | className 병합 | `<Avatar className="custom" />` | `class="avatar custom"` | P0 |
| TC-R301 | aria-label 적용 | `<Avatar aria-label="User profile" />` | `aria-label="User profile"` | P0 |
| TC-R302 | ref 전달 | `ref={avatarRef}` | `avatarRef.current`가 HTMLDivElement | P0 |
| TC-R303 | children JSX 렌더링 | `<Avatar><span>JD</span></Avatar>` | children 정상 렌더링 | P1 |

### 2.5 기타 네이티브 속성 전달

| TC ID | 테스트명 | 입력 | 예상 결과 | 우선순위 |
|-------|----------|------|----------|----------|
| TC-R400 | id 속성 전달 | `<Avatar id="user-avatar" />` | `id="user-avatar"` | P1 |
| TC-R401 | data-testid 전달 | `<Avatar data-testid="avatar" />` | `data-testid="avatar"` | P1 |
| TC-R402 | style 전달 | `<Avatar style={{ marginTop: 8 }} />` | `style="margin-top: 8px"` | P1 |

---

## 3. Vue Wrapper Test Cases

### 3.1 Core mapPropsToAttrs 결과와 DOM 일치 검증

| TC ID | 테스트명 | 입력 | 예상 결과 | 우선순위 |
|-------|----------|------|----------|----------|
| TC-V100 | 기본 props로 렌더링 시 Core 결과 일치 | `<Avatar />` | DOM 속성이 Core 결과와 일치 | P0 |
| TC-V101 | size prop이 Core 결과와 일치 | `<Avatar size="lg" />` | `data-size="lg"` | P0 |
| TC-V102 | shape prop이 Core 결과와 일치 | `<Avatar shape="square" />` | `data-shape="square"` | P0 |
| TC-V103 | src가 있을 때 Core 결과와 일치 | `<Avatar src="/avatar.jpg" />` | `data-has-image="true"` | P0 |
| TC-V104 | src가 없을 때 Core 결과와 일치 | `<Avatar />` | `data-has-image` 속성 없음 | P0 |
| TC-V105 | 복합 props가 Core 결과와 일치 | `<Avatar size="xl" shape="circle" src="/img.jpg" />` | 모든 data-* 속성 일치 | P0 |

### 3.2 이미지 렌더링 검증

| TC ID | 테스트명 | 입력 | 예상 결과 | 우선순위 |
|-------|----------|------|----------|----------|
| TC-V200 | src가 있을 때 img 렌더링 | `<Avatar src="/avatar.jpg" alt="User" />` | `<img src="/avatar.jpg" alt="User" />` 포함 | P0 |
| TC-V201 | src가 없을 때 img 미렌더링 | `<Avatar />` | `<img>` 태그 없음 | P0 |
| TC-V202 | src + alt 모두 전달 | `<Avatar src="/img.jpg" alt="John Doe" />` | img의 alt 속성 일치 | P0 |

### 3.3 폴백 콘텐츠 렌더링 검증

| TC ID | 테스트명 | 입력 | 예상 결과 | 우선순위 |
|-------|----------|------|----------|----------|
| TC-V210 | src 없고 슬롯 있을 때 | `<Avatar>AB</Avatar>` | 슬롯 콘텐츠 렌더링 | P0 |
| TC-V211 | src 없고 fallback 있을 때 | `<Avatar fallback="AB" />` | fallback 텍스트 렌더링 | P0 |
| TC-V212 | src 있을 때 슬롯 무시 | `<Avatar src="/img.jpg">AB</Avatar>` | img만 렌더링, 슬롯 무시 | P0 |
| TC-V213 | src 있을 때 fallback 무시 | `<Avatar src="/img.jpg" fallback="AB" />` | img만 렌더링, fallback 무시 | P0 |

### 3.4 Vue 전용 props/attrs 검증

| TC ID | 테스트명 | 입력 | 예상 결과 | 우선순위 |
|-------|----------|------|----------|----------|
| TC-V300 | class 병합 | `<Avatar class="custom" />` | `class="avatar custom"` | P0 |
| TC-V301 | aria-label 적용 | `<Avatar aria-label="User profile" />` | `aria-label="User profile"` | P0 |

---

## 4. 예외 케이스 Test Cases

### 4.1 props 미전달

| TC ID | 테스트명 | 입력 | 예상 결과 | 정책 | 우선순위 |
|-------|----------|------|----------|------|----------|
| TC-E100 | 모든 props 미전달 (Core) | `mapPropsToAttrs({})` | defaultProps 적용 | Fallback | P0 |
| TC-E101 | 모든 props 미전달 (React) | `<Avatar />` | defaultProps로 렌더링 | Fallback | P0 |
| TC-E102 | 모든 props 미전달 (Vue) | `<Avatar />` | defaultProps로 렌더링 | Fallback | P0 |

### 4.2 undefined 전달

| TC ID | 테스트명 | 입력 | 예상 결과 | 정책 | 우선순위 |
|-------|----------|------|----------|------|----------|
| TC-E110 | size: undefined | `{ size: undefined }` | defaultProps.size 적용 (`'md'`) | Fallback | P0 |
| TC-E111 | shape: undefined | `{ shape: undefined }` | defaultProps.shape 적용 (`'circle'`) | Fallback | P0 |
| TC-E112 | src: undefined | `{ src: undefined }` | defaultProps.src 적용 (`''`), `data-has-image: undefined` | Fallback | P0 |

### 4.3 null 전달

| TC ID | 테스트명 | 입력 | 예상 결과 | 정책 | 우선순위 |
|-------|----------|------|----------|------|----------|
| TC-E120 | size: null | `{ size: null }` | defaultProps.size 적용 | Fallback | P1 |
| TC-E121 | shape: null | `{ shape: null }` | defaultProps.shape 적용 | Fallback | P1 |
| TC-E122 | src: null | `{ src: null }` | defaultProps.src 적용 | Fallback | P1 |

### 4.4 빈 문자열 전달

| TC ID | 테스트명 | 입력 | 예상 결과 | 정책 | 우선순위 |
|-------|----------|------|----------|------|----------|
| TC-E130 | size: '' | `{ size: '' }` | defaultProps.size 적용 | Fallback | P1 |
| TC-E131 | shape: '' | `{ shape: '' }` | defaultProps.shape 적용 | Fallback | P1 |
| TC-E132 | src: '' | `{ src: '' }` | `data-has-image: undefined` (빈 문자열은 falsy) | 정상 동작 | P0 |

### 4.5 유효하지 않은 값 전달

| TC ID | 테스트명 | 입력 | 예상 결과 | 정책 | 우선순위 |
|-------|----------|------|----------|------|----------|
| TC-E140 | 유효하지 않은 size | `{ size: 'invalid' }` | defaultProps.size + console.warn | Fallback + Warn | P1 |
| TC-E141 | 유효하지 않은 shape | `{ shape: 'invalid' }` | defaultProps.shape + console.warn | Fallback + Warn | P1 |

### 4.6 React 전용 예외 케이스

| TC ID | 테스트명 | 입력 | 예상 결과 | 정책 | 우선순위 |
|-------|----------|------|----------|------|----------|
| TC-E200 | children: null | `<Avatar>{null}</Avatar>` | 빈 아바타 렌더링 (fallback 사용 가능) | React 기본 동작 | P1 |
| TC-E201 | children: undefined | `<Avatar>{undefined}</Avatar>` | 빈 아바타 렌더링 | React 기본 동작 | P1 |
| TC-E202 | children 없음 | `<Avatar></Avatar>` | 빈 아바타 렌더링 | 허용 | P1 |
| TC-E203 | className: undefined | `<Avatar className={undefined} />` | `class="avatar"` | className 생략 | P1 |

---

## 5. 커스터마이즈/오버라이드 Test Cases

> 참고: [Component Customization Policy](../api/component-customization.md)

### 5.1 className 병합 (L2 - 허용)

| TC ID | 테스트명 | 입력 | 예상 결과 | 우선순위 |
|-------|----------|------|----------|----------|
| TC-O100 | className 추가 시 병합 | `<Avatar className="custom" />` | `class="avatar custom"` | P0 |
| TC-O101 | className 여러 개 추가 | `<Avatar className="a b c" />` | `class="avatar a b c"` | P0 |
| TC-O102 | className undefined | `<Avatar className={undefined} />` | `class="avatar"` | P1 |

### 5.2 style prop (L2 - 허용)

| TC ID | 테스트명 | 입력 | 예상 결과 | 구현상태 | 우선순위 |
|-------|----------|------|----------|----------|----------|
| TC-O110 | style 인라인 적용 | `<Avatar style={{ marginTop: 8 }} />` | `style="margin-top: 8px"` | ✅ 구현됨 | P0 |
| TC-O111 | style 복합 속성 | `<Avatar style={{ border: '1px solid red', padding: 4 }} />` | 스타일 적용됨 | ✅ 구현됨 | P1 |

### 5.3 data-* 속성 추가 (L2 - 허용)

| TC ID | 테스트명 | 입력 | 예상 결과 | 우선순위 |
|-------|----------|------|----------|----------|
| TC-O120 | data-testid 추가 | `<Avatar data-testid="user-avatar" />` | `data-testid="user-avatar"` | P0 |
| TC-O121 | data-user-id 추가 | `<Avatar data-user-id="123" />` | `data-user-id="123"` | P1 |

### 5.4 보호 속성 오버라이드 시도 (L3 - 차단) ✅ 구현됨

| TC ID | 테스트명 | 입력 | 예상 결과 | 정책 | 우선순위 |
|-------|----------|------|----------|------|----------|
| TC-O130 | data-size 오버라이드 시도 | `<Avatar data-size="custom" />` | Core 값 유지 (`data-size="md"`) | 차단 | P0 |
| TC-O131 | data-shape 오버라이드 시도 | `<Avatar data-shape="custom" />` | Core 값 유지 | 차단 | P0 |
| TC-O132 | data-has-image 오버라이드 시도 | `<Avatar data-has-image="false" />` | Core 값 유지 | 차단 | P0 |
| TC-O133 | class 직접 오버라이드 시도 | `<Avatar class="override" />` | 무시 (className 사용) | 차단 | P1 |

> React: attrs가 Core attrs에 의해 덮어씌워짐 (구현됨)
> Vue: `inheritAttrs: false` + PROTECTED_ATTRS 필터링 (구현됨)

### 5.5 aria-* 속성 (L2 - 허용)

| TC ID | 테스트명 | 입력 | 예상 결과 | 우선순위 |
|-------|----------|------|----------|----------|
| TC-O140 | aria-label | `<Avatar aria-label="User profile" />` | `aria-label="User profile"` | P0 |
| TC-O141 | aria-describedby | `<Avatar aria-describedby="desc" />` | `aria-describedby="desc"` | P1 |
| TC-O142 | 여러 aria-* 조합 | `<Avatar aria-label="User" aria-hidden="true" />` | 모두 적용됨 | P1 |

### 5.6 이벤트 핸들러 추가 (L2 - 허용)

| TC ID | 테스트명 | 입력 | 예상 결과 | 우선순위 |
|-------|----------|------|----------|----------|
| TC-O150 | onClick 핸들러 | `<Avatar onClick={fn} />` | 클릭 시 호출됨 | P0 |
| TC-O151 | onMouseEnter 핸들러 | `<Avatar onMouseEnter={fn} />` | hover 시 호출됨 | P1 |
| TC-O152 | onFocus 핸들러 | `<Avatar onFocus={fn} />` | focus 시 호출됨 | P1 |

### 5.7 Native HTML 속성 전달 (L2 - 허용)

| TC ID | 테스트명 | 입력 | 예상 결과 | 우선순위 |
|-------|----------|------|----------|----------|
| TC-O160 | id 속성 | `<Avatar id="user-avatar" />` | `id="user-avatar"` | P0 |
| TC-O161 | title 속성 | `<Avatar title="User Avatar" />` | `title="User Avatar"` | P1 |
| TC-O162 | role 속성 | `<Avatar role="img" />` | `role="img"` | P1 |

### 5.8 ref 접근 (L2 - 허용)

| TC ID | 테스트명 | 입력 | 예상 결과 | 우선순위 |
|-------|----------|------|----------|----------|
| TC-O170 | ref로 DOM 접근 | `ref={avatarRef}` | `avatarRef.current`가 HTMLDivElement | P0 |
| TC-O171 | ref로 focus 호출 | `avatarRef.current.focus()` | 아바타 포커스됨 | P1 |
| TC-O172 | callback ref | `ref={(el) => { myRef = el }}` | el이 HTMLDivElement | P1 |

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
const safeSize = AvatarSizes.includes(merged.size)
  ? merged.size
  : Avatar.defaultProps.size;

if (process.env.NODE_ENV !== 'production' && merged.size !== safeSize) {
  console.warn(`[Avatar] Invalid size "${merged.size}". Using default "${safeSize}".`);
}
```

---

## 7. TC 요약

| 카테고리 | P0 | P1 | P2 | 합계 |
|----------|----|----|----|----|
| Core (TC-C*) | 21 | 0 | 0 | 21 |
| React Wrapper (TC-R*) | 18 | 9 | 0 | 27 |
| Vue Wrapper (TC-V*) | 14 | 0 | 0 | 14 |
| 예외 케이스 (TC-E*) | 5 | 10 | 0 | 15 |
| 커스터마이즈 (TC-O*) | 11 | 10 | 0 | 21 |
| **합계** | **69** | **29** | **0** | **98** |

---

## 8. 검토 상태

- [ ] QA Tester 검토 완료
- [ ] 누락 TC 확인
- [ ] 에러 처리 정책 최종 확정
