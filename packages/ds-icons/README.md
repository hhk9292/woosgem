# @woosgem/ds-icons

WooSGem 디자인 시스템을 위한 순수 SVG 아이콘 에셋 패키지입니다.

## 제작 가이드라인 (Asset Creator 원칙)

아이콘의 일관성과 최적화를 위해 다음 규칙을 반드시 준수해야 합니다.

### 1. 그리드 시스템 및 사이즈
- **사이즈 변형**:
  - `sm`: 20x20 px
  - `md`: 24x24 px (기본)
  - `lg`: 32x32 px
- **라이브 영역 (Live Area)**:
  - `md` 기준 20x20 px (상하좌우 2px 여백)
  - 타 사이즈는 `md`를 기준으로 스케일링하여 일관성을 유지합니다.
- **캔버스 제한**: 모든 아이콘은 지정된 캔버스 크기를 절대 넘어서는 안 됩니다.

### 2. 스타일 규칙
- **색상**: 특정 색상(Hex, RGB)을 직접 넣지 마세요.
  - `fill="currentColor"` 또는 `stroke="currentColor"`를 사용합니다.
- **패스(Path)**: 가능한 한 패스를 합치고(Outline Strokes), 단순화하여 파일 크기를 줄입니다.
- **명명 규칙**: `kebab-case`를 사용하며, 사이즈별 디렉토리에 관리합니다.
  - 예: `svg/md/arrow-right.svg`

### 3. 작업 프로세스
1. `svg/md/` 디렉토리에 기준이 되는 24x24 SVG 파일을 추가합니다.
2. `scripts/generate-icon-sizes.js` (또는 자동화 도구)를 통해 `sm`, `lg` 버전을 생성합니다.
3. 다음 명령어를 실행하여 SVG를 최적화합니다:
   ```bash
   pnpm run optimize
   ```
4. 최적화된 결과물이 각 디렉토리에 덮어씌워집니다.

## 최적화 도구 (SVGO 설정)
본 패키지는 `svgo.config.js`를 통해 다음 작업을 자동으로 수행합니다:
- `viewBox` 유지
- 불필요한 메타데이터 삭제
- `fill="currentColor"` 속성 강제 적용
