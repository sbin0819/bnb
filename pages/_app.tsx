import App, { AppContext, AppProps } from 'next/app';
import GlobalStyle from '../styles/GlobalStyle';
import Header from '../components/Header';

import { wrapper } from '../store';
import { cookieStringToObject } from '../lib/utils';

import axios from 'axios';
import { meAPI } from '../lib/api/auth';
import { userActions } from '../store/user';

const app = ({ Component, pageProps }: AppProps) => {
  return (
    <>
      <Header />
      <GlobalStyle />
      <Component {...pageProps} />
      <div id="root-modal" />
    </>
  );
};

app.getInitialProps = async (context: AppContext) => {
  const appInitialProps = await App.getInitialProps(context);
  const cookieObject = cookieStringToObject(context.ctx.req?.headers.cookie);
  const { store } = context.ctx;
  const { isLogged } = store.getState().user;
  try {
    if (!isLogged && cookieObject.access_token) {
      axios.defaults.headers.cookie = cookieObject.access_token;
      // ! not working
      // const {data} = await meAPI();
      // ? axios.get 을 할 때 process.env 를 가지고 오지 못하는 거 같음
      const { data } = await axios.get(`http://localhost:3000/api/auth/me`);
      store.dispatch(userActions.setLoggedUser(data));
    }
  } catch (e) {
    console.log(e);
  }

  return { ...appInitialProps };
};

export default wrapper.withRedux(app);
