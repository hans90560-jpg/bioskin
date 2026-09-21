export const marketQuestions = [
  {
    label: "공급자 관점",
    question: "관련 소재·제형 기술과 생산 기반이 존재하는가?",
  },
  {
    label: "사용자·구매자 관점",
    question: "어떤 현장에서 필요하며, 어떤 조건을 충족해야 하는가?",
  },
] as const;

export const supplyCases = [
  {
    id: "A",
    category: "피부 도포형 제품 사례",
    name: "BLOXR · ULTRABLOX",
    image: "/images/market/ultrablox-product-source.png",
    width: 745,
    height: 802,
    alt: "BLOXR ULTRABLOX X-Ray Attenuating Cream 제품 소개 화면",
    summary:
      "의료 절차에서 사용하는 피부 도포형 X선 감쇠 제품이 별도 기업에 의해 소개되고 있음을 확인한 사례입니다.",
    note:
      "SARAH SUNCARE와 다른 기업의 제품이며, 이 사례를 일반 방사선이나 우주방사선 보호 성능으로 확대해 해석하지 않습니다.",
    sourceLabel: "BLOXR 사용 안내서",
    sourceUrl:
      "https://bloxr.com/wp-content/uploads/2020/02/79053B-ULTRABLOX-Instructions-for-Use.pdf",
  },
  {
    id: "B",
    category: "선케어 개발·생산 사례",
    name: "한국콜마 · 구다이글로벌",
    image: "/images/market/kolmar-goodai-source.png",
    width: 512,
    height: 493,
    alt: "한국콜마와 구다이글로벌의 선케어 공동개발 사례를 다룬 제공 기사 캡처",
    summary:
      "브랜드와 제조사가 제품을 공동개발하고 생산해 온 사례를 통해 국내 선케어 제조 기반을 살펴봤습니다.",
    note:
      "공식 보도자료의 최근 5년 누적 판매 1억 개는 해당 계열 브랜드·집계 범위의 수치이며, 전체 시장 규모나 연간 판매량을 뜻하지 않습니다.",
    sourceLabel: "한국콜마 공식 보도자료",
    sourceUrl:
      "https://www.kolmar.co.kr/pr/news.php/Links.aspx?code=korBasic&idx=7125&ptype=view",
  },
  {
    id: "C",
    category: "제형·생산 공급망 사례",
    name: "코스맥스",
    image: "/images/market/cosmax-keminova-booth.png",
    width: 500,
    height: 374,
    alt: "COSMAX와 KEMINOVA 이름이 표시된 전시 부스 제공 사진",
    summary:
      "다양한 화장품 제형을 개발·생산하는 공급망 사례를 바탕으로 선케어 생산 역량과 연결 지점을 조사했습니다.",
    note:
      "제공 사진의 행사명·장소·촬영일은 확인되지 않았습니다. 회사 전체 실적을 선케어 매출이나 시장 규모로 해석하지 않습니다.",
    sourceLabel: "코스맥스 기업 정보",
    sourceUrl: "https://www.cosmax.com/",
  },
] as const;

export const additionalSupplyCases = [
  {
    name: "MSLINEENG",
    field: "이동형 X선·C-arm 환경의 방사선 차폐 제품",
    point:
      "피부 도포형 제품과 기존 차폐 장비의 역할이 어떻게 다른지, 보완 관계를 설정할 때 살펴볼 사례입니다.",
    sourceLabel: "MSLINEENG 기업 소개",
    sourceUrl: "https://en.mslineeng.com/aboutUs",
  },
  {
    name: "Melanoir",
    field: "멜라닌 기반 방사선 보호 소재 연구 사례",
    point:
      "화장품 제형에 적용할 수 있는지와 대상 방사선·시험 조건을 별도로 확인해야 합니다.",
    sourceLabel: "제공 원문",
    sourceUrl: null,
  },
  {
    name: "BASF · 아모레퍼시픽",
    field: "항산화 자외선 차단 기술 공동개발 사례",
    point:
      "자외선 차단 소재와 피부 보호 연구를 연결하는 개발 사례로 살펴봤으며 산업환경 적용성은 별도 검토 대상입니다.",
    sourceLabel: "아모레퍼시픽 공식 보도자료",
    sourceUrl: "https://www.apgroup.com/int/ko/news/2025-03-14-1.html",
  },
] as const;

export const industryUsers = [
  {
    name: "항공",
    user: "항공 승무원",
    buyer: "항공사·개인",
    conditions: ["보습", "장시간 사용감", "메이크업 호환성", "재도포 편의성"],
    validation:
      "우주방사선에 대한 적용 가능성은 별도 검증이 필요합니다. 의료용 X선 제품 사례만으로 항공 환경의 보호 성능을 추정하지 않습니다.",
  },
  {
    name: "의료",
    user: "관련 진료·시술에 참여하는 의료 종사자",
    buyer: "병원·의료기관",
    conditions: ["피부 안전성", "손 작업성", "세정성", "장갑 등 보호구와의 호환성"],
    validation:
      "해당 방사선과 사용 조건에서의 성능 및 안전성 검증이 필요합니다.",
  },
  {
    name: "반도체",
    user: "특정 장비의 점검·정비 작업자",
    buyer: "반도체 기업·협력사",
    conditions: ["저묻어남", "입자·잔류 최소화", "작업환경 및 보호구 적합성"],
    validation:
      "작업별 노출 조건과 클린룸 적합성을 확인해야 합니다. 전체 종사자가 동일한 방사선 노출 조건에 있다고 표현하지 않습니다.",
  },
  {
    name: "옥외작업",
    user: "건설·농업·조선·배달 등 장시간 옥외작업자",
    buyer: "기업·사업장·개인",
    conditions: ["UVA·UVB 차단", "내수성", "땀과 마찰", "재도포 편의성"],
    validation:
      "실제 작업 조건에서의 사용성과 지속성을 확인해야 합니다. 재도포가 필요 없는 제품처럼 표현하지 않습니다.",
  },
] as const;

export const validationGaps = [
  {
    name: "항공",
    current: "일반 피부 관리 제품·노출관리",
    gap: "장시간 사용성 및 우주방사선 관련 적용 가능성 검증",
  },
  {
    name: "의료",
    current: "기존 보호구·일부 피부 도포형 제품 사례",
    gap: "사용 조건별 보호 성능, 피부 안전성, 작업성과의 양립",
  },
  {
    name: "반도체",
    current: "설비 차폐·보호구 중심",
    gap: "특정 정비 작업과 클린룸 환경에서의 적합성",
  },
  {
    name: "옥외작업",
    current: "일반·스포츠 선케어",
    gap: "장시간 작업 중 땀·물·마찰 및 재도포 편의성",
  },
] as const;

export const furtherDirections = [
  {
    name: "의료",
    description: "사용 조건별 X선 감쇠 성능, 피부 안전성, 작업 적합성",
  },
  {
    name: "반도체",
    description: "특정 정비 작업과 클린룸 환경 적합성",
  },
  {
    name: "항공",
    description: "우주방사선 관련 별도 성능 검증과 장시간 사용 조건",
  },
] as const;

export const marketReferences = [
  {
    organization: "CJ올리브영",
    title: "CJ올리브영, 기후변화 대응해 ‘서바이벌 뷰티’ 선보인다",
    date: "2026.04.24",
    url: "https://cjnews.cj.net/cj%EC%98%AC%EB%A6%AC%EB%B8%8C%EC%98%81-%EA%B8%B0%ED%9B%84%EB%B3%80%ED%99%94-%EB%8C%80%EC%9D%91%ED%95%B4-%EC%84%9C%EB%B0%94%EC%9D%B4%EB%B2%8C-%EB%B7%B0%ED%8B%B0-%EC%84%A0%EB%B3%B4/",
  },
  {
    organization: "BLOXR Solutions",
    title: "ULTRABLOX X-Ray Attenuating Cream — Instructions for Use",
    date: null,
    url: "https://bloxr.com/wp-content/uploads/2020/02/79053B-ULTRABLOX-Instructions-for-Use.pdf",
  },
  {
    organization: "한국콜마",
    title: "콜마-구다이글로벌, K-선케어 1억개 판매 돌파 주역 한자리에 뭉쳤다",
    date: "2026.03.24",
    url: "https://www.kolmar.co.kr/pr/news.php/Links.aspx?code=korBasic&idx=7125&ptype=view",
  },
  {
    organization: "코스맥스",
    title: "기업 및 글로벌 생산 네트워크 소개",
    date: null,
    url: "https://www.cosmax.com/",
  },
  {
    organization: "MSLINEENG",
    title: "Company Overview",
    date: null,
    url: "https://en.mslineeng.com/aboutUs",
  },
  {
    organization: "아모레퍼시픽",
    title: "아모레퍼시픽, 바스프와 피부 저속노화 자외선 차단기술 공동개발",
    date: "2025.03.14",
    url: "https://www.apgroup.com/int/ko/news/2025-03-14-1.html",
  },
] as const;
