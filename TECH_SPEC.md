# SARAH SUNCARE 홈페이지 기술 명세

## 1. 현재 저장소 상태와 기술 스택

현재 프로젝트는 다음 구성으로 구현되어 있다.

- Next.js 16.3.5 App Router
- TypeScript 6.0.3
- Tailwind CSS 4.3.3
- npm
- React/Next.js 기본 기능, CSS, `IntersectionObserver` 중심의 경량 구현
- 제품 이미지 공개 경로: `/images/sarah-suncare.png`

정확한 설치 버전과 명령은 `package.json`과 `package-lock.json`을 기준으로 한다. 불필요한 애니메이션 또는 UI 라이브러리는 추가하지 않는다.

## 2. 제안 디렉터리 구조

```text
app/
  layout.tsx
  page.tsx
  globals.css
  market-analysis/
    page.tsx
  product/
    page.tsx
  project/
    page.tsx
components/
  site-header.tsx
  hero.tsx
  hero-reveal.tsx        # 브라우저 API가 필요한 최소 클라이언트 경계
  project-navigation.tsx
  placeholder-page.tsx
  product/
    industry-cards.tsx   # 상세 펼침 상태를 다루는 클라이언트 컴포넌트
    formula-showcase.tsx # 06 기능군 비주얼과 성분 펼침 상태
    scroll-reveal.tsx    # 점진적 향상 방식의 등장 효과
    technical-principle.tsx
  project/
    project-stats.tsx    # 주요 수치의 진입 감지·1회성 카운트업
content/
  product-content.ts     # 제품 특징, 산업환경, 평가 단계, 성분 데이터
public/
  images/
    sarah-suncare.png
    e-skin.png
    industry/
      aviation.png
      medical.png
      semiconductor.png
      outdoor.png
    formula/
      uv-protection.png
      texture.png
      stability.png
      skin-conditioning.png
      optical-color.png
      quality-support.png
assets/
  references/
    industry-cards-source.png  # 제공된 목표 카드 이미지 원본 보존본
```

구조는 구현 과정에서 단순화할 수 있다. 재사용이 한 번뿐인 작은 마크업까지 과도하게 컴포넌트화하지 않는다.

## 3. 렌더링과 컴포넌트 경계

- `app/layout.tsx`, 각 페이지와 정적 카드 콘텐츠는 서버 컴포넌트를 기본으로 한다. 공통 헤더는 현재 경로에 따라 홈 내 스크롤 동작을 분기하는 작은 클라이언트 컴포넌트로 둔다.
- IntersectionObserver와 모션 활성화 상태 관리가 필요한 최소 래퍼만 `'use client'` 컴포넌트로 분리한다.
- 카드 목록은 정적 데이터로 정의해 라우트, 제목, 설명의 불일치를 막는다.
- 공통 헤더를 네 페이지에서 재사용하고 시장분석에만 임시 페이지 셸을 사용한다.
- 제품소개 페이지의 정적 본문과 도식은 서버 컴포넌트로 유지하고 산업 카드 상태 및 IntersectionObserver 래퍼만 클라이언트 경계로 둔다.
- 성분 기능군 데이터는 정적 모듈에 유지하고 `formula-showcase.tsx`만 펼침 버튼 상태를 위한 작은 클라이언트 경계로 둔다.
- 산업, 단계, 성분 데이터는 `content/product-content.ts`에 모아 반복 마크업과 콘텐츠 불일치를 줄인다.
- 프로젝트 소개의 산업, 특허 분포, 실험 조건, 참여자 등 반복 데이터는 `content/project-content.ts`에 모으고 본문은 서버 컴포넌트에서 렌더링한다.
- 프로젝트 주요 수치만 `project-stats.tsx`의 작은 클라이언트 경계로 분리한다. 서버 HTML에는 최종 수치를 렌더링하고, 모션 허용 환경에서만 항목별 IntersectionObserver와 `requestAnimationFrame`으로 숫자 텍스트를 향상한다.
- 콘텐츠를 API나 CMS에서 가져오지 않으며 초기 버전은 정적 렌더링 대상으로 유지한다.

## 4. 라우팅

App Router의 파일 기반 경로를 사용한다.

| 파일 | URL |
| --- | --- |
| `app/page.tsx` | `/` |
| `app/market-analysis/page.tsx` | `/market-analysis` |
| `app/product/page.tsx` | `/product` |
| `app/project/page.tsx` | `/project` |

- 탐색 카드는 Next.js `Link`를 사용하고 카드 전체 영역을 하나의 링크로 만든다.
- 공통 헤더의 프로젝트명은 `Link href="/"`를 사용한다. 상세 페이지에서는 기본 App Router 이동으로 홈 최상단을 열고, 이미 홈인 경우 `onNavigate`에서 이동을 가로채 `window.scrollTo`를 호출한다. 스크롤 방식은 `matchMedia('(prefers-reduced-motion: reduce)')` 결과에 따라 `smooth` 또는 `auto`로 선택한다.
- `Contact Us`는 인스타그램 `https://www.instagram.com/sarasun5502/`로 연결되는 네이티브 외부 앵커로 구현한다. 새 탭을 열고 `rel="noopener noreferrer"`, 새 창 안내가 포함된 접근 가능한 이름과 키보드 포커스를 제공한다.
- 홈으로 돌아가기는 `Link href="/"`를 사용한다.

## 5. 시맨틱 HTML 구조

### 홈

```text
body
├─ header
└─ main
   ├─ section (히어로, aria-labelledby)
   │  ├─ h1 (그룹 1)
   │  ├─ 그룹 2 본문
   │  ├─ 그룹 3 강조 문구
   │  ├─ 그룹 4 브랜드 문구
   │  └─ 제품 이미지
   └─ section (프로젝트 살펴보기, aria-labelledby)
      ├─ h2
      └─ nav (상세 페이지 탐색)
         └─ 카드 링크 3개
```

- 시각 배치를 위해 DOM 읽기 순서를 뒤집지 않는다.
- 카드 내부 제목은 전체 문서 계층에 맞는 제목 요소를 사용한다.
- 각 라우트는 고유한 `h1` 한 개를 가진다. 제품소개는 이어지는 여섯 구간, 프로젝트 소개는 이어지는 여덟 영역을 논리적인 `h2`·`h3` 계층으로 구성한다.
- 아이콘과 추상 도형은 장식인 경우 `aria-hidden="true"`로 숨긴다.

## 6. 이미지 처리

- 제품 원본 파일은 `public/images/sarah-suncare.png`에 두고 URL은 `/images/sarah-suncare.png`로 사용한다.
- `next/image`의 `Image`를 우선 사용하고 실제 원본의 `width`와 `height`를 제공한다.
- 스타일은 `width: 100%`, `height: auto`, `object-fit: contain`을 기본으로 한다. 고정 높이 컨테이너를 사용할 경우에도 전체 제품이 보이도록 `object-contain`을 유지한다.
- 뷰포트별 렌더링 크기에 맞는 `sizes`를 지정한다. 첫 화면 핵심 이미지라면 측정 후 `priority` 또는 최신 Next.js의 동등한 선로드 옵션을 검토하되 무조건 적용하지 않는다.
- 홈 탐색 카드는 외부 이미지를 추가하지 않고 CSS gradient와 pseudo-element로 추상 비주얼을 만든다.
- 제품소개 산업 카드는 제공된 목표 이미지의 텍스트 없는 상단 장면을 픽셀 크롭한 로컬 이미지를 `next/image`로 사용한다. 각 크롭의 원본 비율(약 258×212)을 유지하고 주요 피사체를 가리지 않으며, 이미지에 포함된 원형 아이콘을 HTML로 중복하지 않는다.
- 제품소개 성분 섹션은 생성한 1448×1086 PNG 여섯 장을 로컬 자산으로 보존하고 `next/image`와 정확한 `width`, `height`, `sizes`로 제공한다. 모든 이미지는 상징적 소재 비주얼이며 실제 실험 결과나 성능 입증 도식으로 설명하지 않는다.
- E-SKIN 원본은 `public/images/e-skin.png`로 복사해 `/images/e-skin.png`에서 제공하고 원본 1431×266 비율을 유지한다.
- 프로젝트 활동 사진은 `public/images/project/`에 의미 있는 파일명으로 최적화한 게시용 사본을 둔다. `next/image`에 각 사본의 실제 `width`, `height`, `sizes`를 제공하고 인물·시료·기술 개념도를 임의로 자르지 않는다.
- 회의 캡처 `image02.png`, `image03.png`, `9.png`의 원본은 공개 경로에 복사하지 않는다. 숫자 식별자가 제거된 게시용 사본만 제공하며 원본-게시용 대응과 처리 방식은 `assets/references/project-image-sources.md`에 기록한다.
- 저해상도 피부모델 교육 화면은 원본 게시용 사본 크기 이상으로 확대하지 않는다. 날짜 미확인 온라인 캡처는 특정 일정과 연결하지 않는다.
- 이미지 파일이 아직 준비되지 않았다면 빌드를 깨뜨리는 임의 파일이나 외부 이미지를 넣지 말고, 자산 제공 여부를 `TASKS.md`에서 확인한 뒤 구현한다.

## 7. 등장 애니메이션 설계

### 점진적 향상

1. 서버가 모든 텍스트를 보이는 상태로 렌더링한다.
2. 클라이언트에서 모션 허용 여부와 IntersectionObserver 지원 여부를 확인한다.
3. 모션 가능 환경에만 향상 클래스 또는 data attribute를 적용한다.
4. 히어로 관찰 시 그룹별 visible 상태를 적용한다.
5. 관찰 후 observer를 해제해 불필요한 작업을 막는다.

이 방식은 JavaScript가 실패하거나 비활성화되어도 텍스트가 숨겨지지 않게 한다. hydration 이전에 텍스트를 무조건 숨기는 CSS는 사용하지 않는다.

### CSS 기준

- 시작: `opacity: 0`, `transform: translateY(24px)`, 낮은 수준의 `filter: blur(...)`.
- 완료: `opacity: 1`, `transform: translateY(0)`, `filter: blur(0)`.
- 각 그룹은 CSS custom property 또는 `nth-child`로 제한된 stagger를 적용한다.
- `will-change`는 장시간·광범위하게 선언하지 않고 실제 전환 직전 또는 작은 범위에만 사용한다.
- `@media (prefers-reduced-motion: reduce)`에서 모든 콘텐츠를 최종 상태로 강제하고 transition/animation을 제거한다.
- 제품 부유 효과가 포함되면 transform 범위를 작게 하고 reduced motion에서 중단한다.

### 프로젝트 주요 수치 카운트업

- 항목별 IntersectionObserver 임계값은 0.3으로 두고 관찰 대상이 30% 이상 보일 때 시작한다.
- 1.8초 동안 ease-out 곡선으로 정수를 갱신하고 목표값에 정확히 고정한 뒤 해당 항목의 관찰을 해제한다.
- 숫자만 갱신하며 단위와 설명은 정적 DOM으로 유지한다. 숫자는 `tabular-nums`와 목표 자릿수 최소 너비를 사용한다.
- 변화하는 시각 숫자는 보조 기술에서 제외하고, 별도의 시각적 숨김 텍스트로 최종값을 한 번만 제공한다.
- reduced motion, IntersectionObserver 미지원, JavaScript 비활성 환경에서는 서버가 렌더링한 최종값을 유지한다.

## 8. 스타일링과 반응형

- Tailwind utility를 기본으로 사용하되 전역 토큰, reduced motion 보완, 복잡한 반복 스타일은 `globals.css` 또는 일관된 컴포넌트 클래스에 둔다.
- 모바일 우선 스타일을 작성한다.
- 히어로는 기본 1열에서 데스크톱 2열로, 카드 그리드는 기본 1열에서 데스크톱 3열로 전환한다.
- 고정 픽셀 높이보다 `min-height`, 유동적 패딩, `clamp()`를 사용해 텍스트 확대에 대응한다.
- sticky 헤더 높이는 앵커와 포커스 대상이 가려지지 않도록 CSS 변수 또는 일관된 토큰으로 관리한다.
- 320px에서 가로 스크롤이 생기지 않도록 긴 영문 브랜드명과 헤더 간격을 확인한다.

## 9. 접근성 구현 기준

- WCAG 2.2 AA를 목표로 한다.
- 모든 내부 이동은 키보드로 접근·활성화할 수 있어야 한다.
- `:focus-visible` 상태는 제거하지 않고 최소 2px의 명확한 링을 제공한다.
- 카드 hover에 있는 정보와 affordance는 focus에서도 동일하게 전달한다.
- 색 대비는 브라우저 개발 도구 또는 접근성 검사 도구로 측정한다.
- 이미지 alt는 `CONTENT.md`를 기준으로 하며 장식 이미지는 빈 alt 또는 aria-hidden으로 처리한다.
- 페이지별 제목, 메타 설명, `lang="ko"`를 설정한다.
- 애니메이션과 opacity 변화가 콘텐츠 접근을 지연시키거나 보조 기술의 읽기를 막지 않게 한다.

## 10. 성능 기준

- 초기 페이지에 꼭 필요한 JavaScript만 전송하고 애니메이션 라이브러리를 추가하지 않는다.
- 지속적인 scroll listener를 피하고 IntersectionObserver를 사용한다.
- 이미지 크기와 `sizes`를 정확히 제공해 CLS와 과도한 다운로드를 줄인다.
- 웹폰트를 추가할 경우 필요한 subset/weight만 사용하고 `font-display` 전략을 검토한다.
- 복잡한 box-shadow, 큰 blur 레이어, 무한 애니메이션을 피한다.
- production build 결과와 브라우저 성능 패널에서 hydration 경고, layout shift, 장시간 task를 확인한다.

## 11. 메타데이터

- 루트 layout에서 한국어 문서 언어와 공통 메타데이터를 설정한다.
- 홈과 각 연결 페이지에 `CONTENT.md`의 제목과 설명을 적용한다.
- 상세 콘텐츠가 없는 초기 버전에서는 구조화 데이터를 추정해 추가하지 않는다.

## 12. 검증 전략

### 시장분석 구현

- `/market-analysis`는 서버 컴포넌트 페이지와 정적 콘텐츠 데이터 모듈을 기본으로 사용한다.
- `+281%`만 작은 클라이언트 컴포넌트에서 `IntersectionObserver`와 `requestAnimationFrame`으로 약 1.8초간 갱신한다. 30% 진입 시 한 번만 실행하고 reduced motion·미지원·JavaScript 비활성 환경에서는 서버 최종값을 유지한다.
- 시각 숫자는 `aria-hidden`으로 두고 스크린리더용 최종값을 별도 제공한다. `tabular-nums`와 3자리 폭을 예약해 레이아웃 이동을 막는다.
- 조사 이미지에는 `next/image`의 원본 크기와 반응형 `sizes`를 제공하고, 기사 캡처는 네이티브 `details/summary`로 접근한다.
- 외부 링크는 실제 확인한 공식 URL만 새 탭으로 열며 `rel="noreferrer"`를 적용한다.
- 공급·사용자·검증 과제 데이터는 `content/market-content.ts`에서 관리한다.

### 자동 검증

- `npm run lint`
- `npm run build`
- 프로젝트 초기화 시 테스트 러너가 포함되면 컴포넌트/라우트에 맞는 테스트 명령도 package scripts에 정의한다.
- 가능하면 접근성 자동 검사 도구로 홈과 세 연결 페이지의 명백한 위반을 확인한다. 새 도구 도입은 비용과 범위를 먼저 검토한다.

### 수동 검증

- 화면 폭 320, 375, 768, 1024, 1440px에서 레이아웃 확인
- 키보드만으로 세 카드와 홈 복귀 링크 탐색
- hover, focus-visible, active 상태 확인
- reduced motion 환경에서 모든 텍스트 즉시 노출 및 부유 효과 제거 확인
- 200% 확대와 긴 텍스트에서 겹침·잘림·가로 스크롤 확인
- 제품 이미지 원본 비율과 `object-contain` 확인
- `/`, `/market-analysis`, `/product`, `/project` 직접 접근과 이동 확인
- 제품소개 여섯 섹션 순서, 산업 카드의 hover·버튼·키보드·터치 상태와 `aria-expanded` 확인
- 390px에서 E-SKIN 도식 내부 스크롤과 별도 세로 텍스트 흐름, 성분 그룹 가독성 확인
- 개발자 콘솔의 오류와 hydration 경고 확인

## 13. 구현 금지 사항

- Framer Motion 등 불필요한 애니메이션 라이브러리 추가
- 외부 스톡 사진 다운로드 또는 원격 이미지 의존
- 제품 이미지의 `object-cover`, 비율 왜곡, 임의 크롭
- 콘텐츠를 숨긴 채 JavaScript 성공에 의존하는 구현
- 클릭되지 않는 요소에 링크/버튼 역할을 흉내 내는 구현
- 삼성바이오로직스의 코드, 이미지, 로고, 고유 문구 또는 디자인 복제

## 14. GitHub Pages 배포

- 로컬 개발에서는 기존 루트 경로(`/`)와 Next.js 이미지 처리를 유지한다.
- Pages 빌드에서는 `NEXT_PUBLIC_BASE_PATH=/bioskin`을 지정한다. `next.config.ts`가 이 값으로 정적 내보내기(`output: "export"`), `basePath`, `trailingSlash`와 이미지 원본 제공을 활성화한다.
- `next/link`의 내부 경로는 Next.js가 `basePath`를 적용한다. `public/images/` 자산은 `lib/site-asset-path.ts`로 같은 접두 경로를 적용한다.
- `.github/workflows/deploy-pages.yml`은 `main` 푸시 또는 수동 실행 시 npm 의존성 설치, lint, 정적 빌드를 수행하고 `out/`을 GitHub Pages에 배포한다. `public/.nojekyll`은 게시 산출물에 포함한다.
- GitHub 저장소의 Settings → Pages → Build and deployment → Source는 **GitHub Actions**로 선택해야 한다. 정적 산출물은 저장소 루트가 아니라 워크플로의 `out/` 아티팩트에서 제공한다.
- 공개 주소는 기본 프로젝트 사이트 설정에서 `https://hans90560-jpg.github.io/bioskin/`이다. 커스텀 도메인이나 저장소 이름이 바뀌면 base path 설정을 함께 갱신한다.
