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
