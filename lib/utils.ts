//* "token=value" 를 {token: "value"}로 바꾸는 함수
export const cookieStringToObject = (cookieString: string | undefined) => {
  const cookies: { [key: string]: string } = {};
  if (cookieString) {
    //* "token=value"
    const itemString = cookieString?.split(/\s*;\s*/);
    itemString.forEach((pairs) => {
      //* ["token", "value"]
      const pair = pairs.split(/\s*;\s*/);
      const arr = pair[0].split('=');
      // cookies[pair[0]] = pair.splice(1).join('=');
      cookies[arr[0]] = arr[1];
    });
  }
  return cookies;
};

//* string에서 number만 return 하는 함수
export const getNumber = (string: string): number | null => {
  const numbers = string.match(/\d/g)?.join('');
  if (numbers) {
    return Number(numbers);
  }
  return null;
};

//* 금액 변경시
export const makeMoneyString = (num: number) => {
  return num.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ',');
};
