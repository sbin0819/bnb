import axios from 'axios';
import { UserType } from '../../types/user';
//* 회원가입 body

interface SignUpAPIBody {
  email: string;
  firstname: string;
  lastname: string;
  password: string;
  birthday: string;
}

//* 회원가입 api

export const signupAPI = (body: SignUpAPIBody) =>
  axios.post<UserType>('/api/auth/signup', body);
//* 회원가입 폼 제출하기
// const onSubmitSignUp = async (event: React.FocusEvent<HTMLFormElement>) => {
//     event.preventDefault();

//     try {
//       const signupBody = {
//         email,
//         lastname,
//         firstname,
//         password,
//         birthday: new Date(
//           `${birthYear}-${birthMonth!.replace('월', '')}-${birthday}`
//         ).toString()
//       };
//       await signupAPI(signupBody);
//     } catch (e) {
//       console.log(e);
//     }
//   };
