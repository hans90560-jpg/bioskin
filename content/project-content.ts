export const projectStats = [
  { value: 5, unit: "명", label: "참여 학생" },
  { value: 4, unit: "개", label: "분석 산업 분야" },
  { value: 288, unit: "건", label: "최종 분석 대상 특허 문헌" },
  { value: 3, unit: "회", label: "피부모델 관련 실험 활동" },
] as const;

export const technologyGroups = [
  {
    number: "01",
    title: "성분의 역할",
    body: "전성분을 자외선 차단, 유화·점도 안정화, 사용감 조절, 보습·피부 컨디셔닝, 색조·광학 기능으로 분류했습니다. 각 성분이 차단 기능뿐 아니라 도포감, 분산성, 제형 안정성과 어떻게 연결되는지 정리했습니다.",
  },
  {
    number: "02",
    title: "제형과 기술적 특징",
    body: "HIPE 기반 에멀전 구조와 색 변화 기술의 개념을 검토하고, 제품의 기술적 특징과 산업현장 사용 조건을 연결해 살펴보았습니다.",
  },
  {
    number: "03",
    title: "후속 평가 방향",
    body: "도포 균일성, 땀·물·마찰 이후의 지속성, 보호구와의 호환성, 색 변화 조건과 재현성을 평가 항목으로 검토했습니다. 제품 도포군과 미도포군의 피부모델 반응을 비교하는 E-SKIN 기반 평가 방향도 정리했습니다.",
  },
] as const;

export const evaluationKeywords = [
  "도포 균일성",
  "땀·물·마찰 이후 지속성",
  "보호구 호환성",
  "색 변화 조건과 재현성",
  "E-SKIN 기반 도포군·미도포군 비교",
] as const;

export const projectIndustries = [
  {
    number: "01",
    name: "항공",
    question: "장시간 비행 환경에서 어떤 사용성이 필요할까?",
    research: "장거리·고고도 비행에 따른 우주방사선 노출환경을 조사했습니다.",
    requirement: "건조한 기내에서의 보습, 장시간 착용감, 간편한 재도포를 검토했습니다.",
  },
  {
    number: "02",
    name: "의료",
    question: "반복되는 세정과 보호구 착용에 적합할까?",
    research: "영상진단, 중재시술, 핵의학 등 업무별 노출 특성과 국소 부위의 관리 문제를 조사했습니다.",
    requirement: "반복 세정과 소독제 사용, 마스크·보호구 착용으로 인한 마찰과 밀폐를 고려했습니다.",
  },
  {
    number: "03",
    name: "반도체",
    question: "정밀한 작업환경과 함께 사용할 수 있을까?",
    research: "정상 가동과 장비 점검·정비 상황을 구분하여 노출환경을 살펴보았습니다.",
    requirement: "보호구 호환성, 묻어남과 표면 전이, 입자 발생 가능성 등 작업장 적합성을 검토 항목으로 정리했습니다.",
  },
  {
    number: "04",
    name: "옥외작업",
    question: "땀과 마찰이 이어지는 현장에서 사용할 수 있을까?",
    research: "건설, 농업, 우편배달, 조선 등 장시간 태양 자외선에 노출되는 작업환경을 조사했습니다.",
    requirement: "자외선 차단 성능과 함께 내수성, 내마찰성, 재도포 편의성을 주요 요구사항으로 도출했습니다.",
  },
] as const;

export const patentCountries = [
  { name: "중국", value: 127 },
  { name: "유럽", value: 64 },
  { name: "미국", value: 60 },
  { name: "한국", value: 20 },
  { name: "일본", value: 17 },
] as const;

export const patentPerspectives = [
  {
    number: "01",
    title: "차단 소재와 제형",
    body: "보호 기능을 구현하는 소재와 제형 설계를 검토했습니다.",
  },
  {
    number: "02",
    title: "생물학적 보호",
    body: "피부 반응과 생물학적 보호 접근을 검토했습니다.",
  },
  {
    number: "03",
    title: "노출 감지",
    body: "색 변화 등 노출을 시각적으로 확인하는 기술을 검토했습니다.",
  },
] as const;

export const experimentOneActivities = [
  {
    number: "01",
    title: "전층배양피부 제작 원리 학습",
    body: "콜라겐과 섬유아세포로 진피층을 형성하고, 그 위에 각질형성세포를 시딩하는 과정을 배웠습니다. 윗면은 공기에 노출시키고 아래쪽에서는 배양액을 공급하는 공기·액체 계면 배양을 통해 표피의 분화와 성숙을 유도하는 원리를 살펴보았습니다.",
  },
  {
    number: "02",
    title: "피부 오가노이드 개념 학습",
    body: "인간 유도만능줄기세포인 hiPSC의 배양부터 세포 응집체 형성, 단계적인 분화와 성숙에 이르는 과정을 학습했습니다. 배지와 분화 유도 인자 조절을 통해 세포의 자기조직화를 유도하는 방식과 전층배양피부 제작 방식의 차이를 이해했습니다.",
  },
  {
    number: "03",
    title: "세포배양 기초 및 시딩 수행",
    body: "무균 작업, 배양액 교체, 세포 밀집도 확인, 세포 분리·회수, 혈구계산판을 이용한 세포 수 측정이 배양 상태와 시딩 조건 관리에 어떻게 연결되는지 배웠습니다. 전체 제작 과정에 대한 안내를 바탕으로 표피세포 시딩을 직접 수행했습니다.",
  },
] as const;

export const sampleGroups = [
  { count: "2개", label: "선크림 도포 후 UV 조사" },
  { count: "2개", label: "선크림 미도포 후 UV 조사" },
  { count: "3개", label: "별도 처리 없이 유지한 비교군" },
] as const;

export const experimentSteps = [
  "UV 조사 전 시료의 상태를 사진으로 기록했습니다.",
  "기존 배양액을 제거했습니다.",
  "시료 위에 PDMS를 배치하고, 선크림 도포군에 크림을 도포했습니다.",
  "새로운 배양액을 공급했습니다.",
  "정해진 조건에서 UV를 조사했습니다.",
] as const;

export const experimentConditions = [
  { term: "인공피부 크기", value: "11 mm" },
  { term: "UV 파장", value: "254 nm" },
  { term: "조사 시간", value: "3분" },
  {
    term: "5 mm·3 mm 링 형태의 PDMS",
    value: "선크림이 퍼지는 범위를 제한하는 용도",
  },
  {
    term: "5 mm 구멍을 뚫은 사포",
    value: "빛을 차단해 가려진 영역의 세포를 보호하는 용도",
  },
] as const;

export const projectOutputs = [
  {
    number: "01",
    title: "인스타그램 카드뉴스",
    body: "프로젝트의 배경, 주요 활동과 조사 내용을 간결하게 전달하는 콘텐츠.",
  },
  {
    number: "02",
    title: "블로그",
    body: "멘토링과 실험 과정, 조사 결과를 자세하게 담는 활동 기록.",
  },
  {
    number: "03",
    title: "프로젝트 포트폴리오",
    body: "제품·기술 조사, 산업환경 분석, 특허 조사, 멘토링, 체험평가와 실험 활동을 종합하여 프로젝트 수행 과정과 참여자의 역량을 전달하는 결과물.",
  },
] as const;

export const students = [
  { role: "팀장", name: "김채현" },
  { role: "팀원", name: "위하늘" },
  { role: "팀원", name: "한수빈" },
  { role: "팀원", name: "신인혜" },
  { role: "팀원", name: "이채현" },
] as const;

export const mentors = [
  { role: "기업멘토", name: "남상미", affiliation: "상미뷰네뜨㈜ 대표" },
  { role: "지도교수", name: "정재현", affiliation: "숭실대학교 화학공학과" },
] as const;
