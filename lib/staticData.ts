import { BedType } from '../types/room';

//* 1월부터 12월까지
export const monthList = [
  '1월',
  '2월',
  '3월',
  '4월',
  '5월',
  '6월',
  '7월',
  '8월',
  '9월',
  '10월',
  '11월',
  '12월',
];

//* 1부터 31까지
export const dayList = Array.from(Array(31), (_, i) => String(i + 1));

//* 2020부터 1900년까지
export const yearList = Array.from(Array(121), (_, i) => String(2020 - i));

//* 숙소 큰 범위의 건물 유형
export const largeBuildingTypeList = [
  '아파트',
  '주택',
  '별채',
  '독특한 장소',
  'B&B',
  '부티크호텔',
];

//* 아파트 건물 유형
export const apartmentBuildingTypeList = [
  '아파트',
  '공동주택',
  '별채',
  '카사 파르티쿨라르(쿠바)',
  '로프트',
  '레지던스',
];

//* 주택 건물 유형
export const houseBuildingTypeList = [
  '주택',
  '방갈로',
  '통나무집',
  '카사',
  '파르티쿨라르(쿠바)',
  '살레',
  '전원주택',
  '키클라데스',
  '주택(그리스',
  '담무소(이탈리아)',
  '동하우스',
  '땅속의 집',
  '농장 체험 숙박',
  '하우스 보트',
  '오두막',
  '등대',
  '펜션(한국)',
  '마차(영국, 프랑스)',
  '초소형 주택',
  '타운하우스',
  '트룰로(이탈리아)',
  '저택',
];

//* 별채 건물 유형
export const secondaryUnitBuildingTypeList = [
  '게스트용 별채',
  '게스트 스위트',
  '농장 체험 숙박',
];

//* 독특한 숙소 건물 유형
export const uniqueSpaceBuildingTypeList = [
  '헛간',
  '보트',
  '버스',
  '캠핑카',
  '캠핑장',
  '성',
  '동굴',
  '돔하우스',
  '땅속의 집',
  '농장 체험 숙박',
  '하우스 보트',
  '오두막',
  '이글루',
  '섬',
  '등대',
  '팬션(한국)',
  '비행기',
  '마차',
  '텐트',
  '초소형 주택',
  '티피',
  '기차',
  '트리하우스',
  '풍차',
  '유르트',
];

//* B&B 건물유형
export const bnbBuildingTypeList = [
  'B&B',
  '카사 파르티쿨라르',
  '농장 체험 숙박',
  '민수',
  '산장',
  '료칸',
];

//* 부티크 호텔 건물유형
export const boutiqueHotelBuildingTypeList = [
  '부티크 호텔',
  '아파트 호텔',
  '헤리티지 호텔',
  '호스텔',
  '호텔',
  '산장',
  '리조트',
  '레지던스',
  '객잔',
];

//* 침실 개수
export const bedroomCountList = Array.from(Array(16), (_, i) => `침실 ${i}개`);

//* 침대 유형
export const bedTypes: BedType[] = [
  '다른 침대 추가',
  '소파',
  '에어 메트릭스',
  '요와 이불',
  '싱글',
  '더블',
  '퀸',
  '이층 침대',
  '바닥용 에어매트릭스',
  '유아 침대',
  '유아용 침대',
  '해먹',
  '물침대',
];

//* 국가 리스트
export const countryList = [
  '대한민국',
  '미국',
  '일본',
  '중국',
  '영국',
  '프랑스',
  '베트남',
  '인도',
  '페루',
  '캐나다',
  '아일랜드',
  '가나',
  '이집트',
  '터키',
];

//* 편의 시설
export const amentityList = [
  '무선 인터넷',
  'TV',
  '난방',
  '에어컨',
  '다리미',
  '샴푸',
  '헤어 드라이어',
  '조식, 커피 차',
  '업무가능 공간/책상',
  '벽난로',
  '옷장/서랍장',
  '게스트 전용 출입문',
];

//* 편의 공간
export const convinienceList = [
  '주방',
  '세탁 공간 - 세탁기',
  '주차',
  '헬스장',
  '수영장',
  '자쿠지',
];
