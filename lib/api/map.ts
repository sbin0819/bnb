import axios from '.';

type GetLocationInfoAPIResponse = {
  country: string;
  city: string;
  district: string;
  streetAddress: string;
  detailAddress: string;
  postcode: string;
  latitude: number;
  longitude: number;
};

//* 현재 위치 정보 가져오기 api
export const getLocationInfoAPI = async ({
  latitude,
  longitude,
}: {
  latitude: number;
  longitude: number;
}) =>
  axios.get<GetLocationInfoAPIResponse>(
    `/api/maps/location?latitude=${latitude}&longitude=${longitude}`,
  );
