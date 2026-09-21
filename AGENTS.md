# SARAH SUNCARE 프로젝트 작업 지침

이 문서는 이 저장소에서 작업하는 모든 사람과 자동화 에이전트에게 적용되는 최상위 작업 규칙이다.

## 작업 시작 전 필수 절차

모든 작업을 시작하기 전에 다음 문서를 아래 순서대로 **매번 읽고**, 현재 요구사항과 진행 상태를 확인한다.

1. `PRD.md` — 제품 목표, 범위, 사용자 요구사항, 완료 기준
2. `DESIGN.md` — 시각 방향, 레이아웃, 반응형 동작, 인터랙션
3. `CONTENT.md` — 확정 문구, 줄바꿈, 라우트별 콘텐츠
4. `TECH_SPEC.md` — 기술 구조, 구현 원칙, 검증 기준
5. `TASKS.md` — 작업 순서와 현재 체크 상태

문서 간 충돌이 발견되면 임의로 구현하지 않는다. 먼저 다섯 문서를 함께 정리해 하나의 일관된 기준으로 만든 뒤 작업한다. 요구사항 변경 시 관련 문서를 먼저 또는 코드와 함께 갱신하고 `TASKS.md`의 상태도 반영한다.

## 프로젝트 원칙

- 삼성바이오로직스 홈페이지에서는 넓은 여백, 고정 헤더, 대형 히어로, 스크롤 후 등장하는 카드형 탐색 섹션이라는 구성감만 참고한다.
- 삼성의 로고, 상표, 문구, 이미지, 코드 또는 고유한 시각 요소를 복제하지 않는다.
- 결과물은 과학적이고 깨끗하며 신뢰감 있는 프리미엄 선케어 브랜드라는 독립적인 SARAH SUNCARE 정체성을 가져야 한다.
- 요청 범위 밖의 기능, 페이지, 라이브러리를 임의로 추가하지 않는다.

## 구현 규칙

### 반응형 디자인

- 모바일 우선으로 구현하고 작은 모바일부터 대형 데스크톱까지 콘텐츠가 겹치거나 잘리지 않는지 확인한다.
- 특정 기기 폭에 맞춘 임시값보다 콘텐츠 흐름에 맞는 유연한 그리드, 간격, 글자 크기를 사용한다.
- 데스크톱 히어로는 텍스트와 제품 이미지의 2열, 모바일은 자연스러운 1열 구조를 유지한다.
- 탐색 카드는 데스크톱 3열, 모바일 1열로 제공한다.

### 접근성

- WCAG 2.2 AA를 목표로 색 대비, 키보드 조작, 포커스 표시, 의미 있는 대체 텍스트를 제공한다.
- `header`, `main`, `section`, `nav`, `article`, 제목 요소 등 시맨틱 HTML을 우선 사용하며 제목 계층을 건너뛰지 않는다.
- 링크와 버튼은 용도에 맞는 네이티브 요소를 사용한다. 카드 링크는 전체 영역을 클릭·키보드 활성화할 수 있어야 한다.
- 시각적 상태만으로 의미를 전달하지 않으며 hover, focus-visible, active 상태를 모두 구분한다.
- 장식 요소는 보조 기술에서 제외하고, 이미지 대체 텍스트는 맥락과 목적에 맞게 작성한다.
- 애니메이션 대상 텍스트도 처음부터 DOM에 존재해야 한다. JavaScript 실패 시에도 내용을 읽을 수 있어야 한다.
- `prefers-reduced-motion: reduce`에서는 등장·부유·시차 효과를 제거하고 모든 콘텐츠를 즉시 표시한다.

### 이미지

- 제품 이미지 기본 경로는 `/images/sarah-suncare.png`다.
- 원본 종횡비를 항상 유지한다. 제품 이미지는 `object-contain`으로 표시하며 찌그러뜨리거나 임의로 잘라내지 않는다.
- 레이아웃 이동을 줄이도록 이미지의 고유 크기 또는 `aspect-ratio`/`sizes` 정보를 제공한다.
- 별도 카드 이미지가 없으므로 외부 스톡 이미지를 다운로드하지 않는다. 카드 비주얼은 CSS 그라데이션과 단순한 추상 도형으로 만든다.

### 성능

- 서버 컴포넌트를 기본으로 하고 브라우저 API가 필요한 최소 범위만 클라이언트 컴포넌트로 분리한다.
- 불필요한 애니메이션·UI 라이브러리를 추가하지 않는다. CSS와 `IntersectionObserver`를 우선 사용한다.
- 이미지 최적화, 적절한 `sizes`, 폰트 로딩, 최소 JavaScript를 통해 Core Web Vitals 저하를 방지한다.
- 애니메이션에는 가능한 한 `opacity`, `transform`, 제한적인 `filter`만 사용하고 지속적인 고비용 스크롤 연산을 피한다.

### 품질과 검증

- 구현 후 수정 범위에 맞는 테스트와 수동 확인을 수행한다.
- 최소한 npm lint 명령과 production build를 모두 실행해 성공을 확인한다. 실제 명령은 초기 구성 후 `package.json`의 scripts를 기준으로 하며 기본 제안은 `npm run lint`, `npm run build`다.
- 검증 오류를 무시하거나 규칙을 비활성화해 통과시키지 않는다. 원인을 수정하거나 해결 불가 사유를 명확히 기록한다.
- 반응형 레이아웃, 키보드 탐색, 포커스, 색 대비, reduced motion, 이미지 비율, 링크 경로를 수동으로 확인한다.
- 작업을 완료하면 `TASKS.md`의 해당 항목을 갱신하고, 변경 파일과 검증 결과를 함께 보고한다.


<!-- BEGIN:nextjs-agent-rules -->

# This is NOT the Next.js you know

This version has breaking changes — APIs, conventions, and file structure may all differ from your training data. Read the relevant guide in `node_modules/next/dist/docs/` (resolved from this file's directory; in monorepos the `next` package may not be visible from the repo root) before writing any code. Heed deprecation notices.

This block is written and re-added by `next dev` — verify at `node_modules/next/dist/server/lib/generate-agent-files.js`. Removing it from a diff only re-creates the uncommitted change; committing it with your work keeps the tree clean.

<!-- END:nextjs-agent-rules -->
