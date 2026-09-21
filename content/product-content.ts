export type Industry = {
  id: "aviation" | "medical" | "semiconductor" | "outdoor";
  number: string;
  title: string;
  preview: [string, string];
  image: string;
  imageAlt: string;
  imageWidth: number;
  details: Array<{ label: string; value: string }>;
};

export const productFeatures = [
  {
    label: "제품 표기",
    items: ["SPF50+ / PA++++", "자외선 차단"],
  },
  {
    label: "프로젝트 검토 항목",
    items: [
      "생활방사선 대응 기술",
      "색 변화 기반 카멜레온 기능",
      "산업환경 활용 가능성 검토",
    ],
  },
] as const;

export const industries: Industry[] = [
  {
    id: "aviation",
    number: "01",
    title: "항공",
    preview: ["우주방사선", "장거리·고고도"],
    image: "/images/industry/aviation.png",
    imageAlt: "구름과 하늘을 배경으로 비행하는 항공기",
    imageWidth: 258,
    details: [
      { label: "노출원", value: "우주방사선" },
      {
        label: "취약 상황",
        value: "장거리·고고도·고위도 비행, 장시간 반복 비행",
      },
      {
        label: "기존 보호수단",
        value: "피폭선량 모니터링, 노선·고도·비행시간 및 스케줄 관리",
      },
      {
        label: "프로젝트 관점",
        value:
          "차폐를 대체하는 제품이 아니라, 장시간 비행 환경에서 노출 피부를 보조적으로 관리하는 방향을 검토합니다.",
      },
    ],
  },
  {
    id: "medical",
    number: "02",
    title: "의료",
    preview: ["산란·누설방사선", "눈·손 국소 노출"],
    image: "/images/industry/medical.png",
    imageAlt: "CT 의료 영상 장비가 있는 검사 환경",
    imageWidth: 258,
    details: [
      { label: "노출원", value: "산란선·누설선·방사성동위원소" },
      { label: "취약 부위", value: "눈·얼굴 주변·목·손" },
      {
        label: "기존 보호수단",
        value: "납 앞치마, 갑상선 보호대, 납안경, 이동식·천장형 차폐막",
      },
      {
        label: "프로젝트 관점",
        value:
          "기존 방호구가 가리지 못하는 국소 노출 부위를 보조적으로 보호·관리할 가능성을 살펴봅니다.",
      },
    ],
  },
  {
    id: "semiconductor",
    number: "03",
    title: "반도체",
    preview: ["산업용 X선 등", "정비·점검 환경"],
    image: "/images/industry/semiconductor.png",
    imageAlt: "검사 장비 아래 놓인 반도체 웨이퍼",
    imageWidth: 259,
    details: [
      {
        label: "노출원",
        value: "산업용 X선, 이온주입기 제동복사 X선",
      },
      {
        label: "취약 부위·상황",
        value: "얼굴·목·귀·손등, 정비 시 장비 인접 부위",
      },
      {
        label: "기존 보호수단",
        value: "밀폐형 차폐 설계, 인터락, 작업절차, 개인선량 관리",
      },
      {
        label: "프로젝트 관점",
        value:
          "정상 공정뿐 아니라 정비·점검 과정의 노출 위험까지 고려합니다.",
      },
    ],
  },
  {
    id: "outdoor",
    number: "04",
    title: "옥외작업",
    preview: ["UVA·UVB", "장시간 반복 노출"],
    image: "/images/industry/outdoor.png",
    imageAlt: "햇빛 아래 안전모와 작업복을 착용한 옥외 근로자",
    imageWidth: 258,
    details: [
      { label: "노출원", value: "태양 UVA·UVB" },
      {
        label: "취약 부위·환경",
        value: "얼굴·목·귀·손, 열·땀·마찰 환경",
      },
      {
        label: "기존 보호수단",
        value: "자외선차단제, 모자·긴소매, 그늘 제공, 작업시간 조정",
      },
      {
        label: "프로젝트 관점",
        value:
          "차단 성능뿐 아니라 땀·수분·마찰 환경에서 얼마나 오래 유지되는지도 함께 봅니다.",
      },
    ],
  },
];

export const projectSteps = [
  "제품·기술 조사",
  "산업 노출환경 분석",
  "E-SKIN 기반 생체영향평가",
  "산업현장 적용·개선 방향 도출",
] as const;

export const evaluationSteps = [
  "Fibroblast",
  "Dermis",
  "Keratinocyte",
  "Air-liquid culture",
  "Full-thickness skin",
  "제품 적용·평가",
] as const;

export const formulaShowcaseGroups = [
  {
    id: "uv-protection",
    name: "UV PROTECTION",
    detailName: "UV PROTECTION",
    summary: "복합 자외선 차단",
    image: "/images/formula/uv-protection.png",
    imageAlt:
      "반투명 블루 유리 레이어로 표현한 자외선 차단 기능군의 상징 이미지",
    ingredients: [
      "에칠헥실메톡시신나메이트",
      "비스-에칠헥실옥시페놀메톡시페닐트리아진",
      "옥토크릴렌",
      "에칠헥실트리아존",
      "티타늄디옥사이드",
    ],
    function: "UVA·UVB 복합 차단 시스템",
  },
  {
    id: "texture",
    name: "TEXTURE",
    detailName: "TEXTURE & SPREADABILITY",
    summary: "발림성·분산성",
    image: "/images/formula/texture.png",
    imageAlt:
      "화이트 크림과 투명한 블루 젤 리본으로 표현한 발림성과 분산성의 상징 이미지",
    ingredients: [
      "사이클로펜타실록세인",
      "부틸옥틸살리실레이트",
      "실리카",
      "폴리메틸실세스퀴옥세인",
    ],
    function: "발림성·분산성·도포 균일성 조절",
  },
  {
    id: "stability",
    name: "STABILITY",
    detailName: "EMULSION & STABILITY",
    summary: "에멀전·점도 유지",
    image: "/images/formula/stability.png",
    imageAlt:
      "화이트와 블루 소재의 정돈된 층과 투명 구체로 표현한 안정성의 상징 이미지",
    ingredients: ["글리세릴스테아레이트", "PEG-100 스테아레이트", "카보머", "잔탄검"],
    function: "제형 구조와 점도 안정성 유지",
  },
  {
    id: "skin-conditioning",
    name: "SKIN CONDITIONING",
    detailName: "SKIN CONDITIONING",
    summary: "보습·컨디셔닝",
    image: "/images/formula/skin-conditioning.png",
    imageAlt:
      "투명한 수분 방울과 촉촉한 젤 소재로 표현한 피부 컨디셔닝의 상징 이미지",
    ingredients: [
      "나이아신아마이드",
      "사카라이드아이소머레이트",
      "토코페롤",
      "아데노신",
      "식물 유래 추출물",
    ],
    function: "수분 유지와 피부 컨디셔닝 보조",
  },
  {
    id: "optical-color",
    name: "OPTICAL / COLOR",
    detailName: "OPTICAL & COLOR",
    summary: "색조·광학 표현",
    image: "/images/formula/optical-color.png",
    imageAlt:
      "은은한 블루와 보라빛의 반투명 프리즘 소재로 표현한 광학 기능군의 상징 이미지",
    ingredients: [
      "비스머스옥시클로라이드",
      "마이카",
      "적색산화철",
      "티타늄디옥사이드",
    ],
    function: "색조 및 광학적 표현에 관여",
  },
  {
    id: "quality-support",
    name: "QUALITY SUPPORT",
    summary: "제품 안정성 보조",
    image: "/images/formula/quality-support.png",
    imageAlt:
      "투명한 유리 접시에 정돈된 크림과 젤 샘플로 표현한 품질 보조 기능의 상징 이미지",
  },
] as const;
