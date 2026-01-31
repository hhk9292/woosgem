# 아이콘 제작 의뢰서 (To: Asset Creator)

Planner가 정의한 필수 아이콘 리스트를 바탕으로 SVG 에셋 제작을 요청합니다.

## 1. 참고 파일
- **필수 리스트**: `packages/ds-icons/metadata/required-icons.json`
- **제작 가이드**: `packages/ds-icons/README.md`

## 2. 작업 요청 사항
1. **리스트 전수 제작**: `required-icons.json`에 정의된 7개 카테고리, 약 40종의 아이콘을 모두 제작해 주세요.
2. **규격 준수**: 
   - **md (기본)**: 24x24 px 캔버스 유지
   - 라이브 영역(20x20 px) 내 배치 권장
   - `fill="currentColor"` 또는 `stroke="currentColor"` 사용
3. **사이즈 확장**:
   - `md` 제작 후 `scripts/generate-icon-sizes.js`를 실행하여 `sm` (20x20), `lg` (32x32) 버전을 생성합니다.
4. **최적화 프로세스**:
   - `svg/md/` 디렉토리에 파일 추가 후 `pnpm run optimize`를 실행하여 정리
   - 작업 완료된 아이콘은 `svg/md/` 디렉토리에 `kebab-case` 네이밍 규칙을 지켜 업로드해 주시기 바랍니다.

## 3. 우선순위
1. **Navigation & Layout** (서비스의 뼈대)
2. **Actions** (주요 인터랙션)
3. **Status & Feedback** (사용자 경험 품질)
4. 나머지 카테고리 순차 진행
