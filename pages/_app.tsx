import App, { AppContext, AppProps } from 'next/app';
import GlobalStyle from '../styles/GlobalStyle';
import Header from '../components/Header';

import { wrapper } from '../store';
import { cookieStringToObject } from '../lib/utils';

import axios from 'axios';
import { meAPI } from '../lib/api/auth';

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
      // axios.defaults.headers.cookie = cookieObject.access_token;
      // ! not working
      // const {data} = await meAPI();
      const { data } = await axios.get(
        `${process.env.NEXT_PUBLIC_API_URL}/api/auth/me`
      );
      console.log(data);
    }
  } catch (e) {
    console.log(e);
  }

  return { ...appInitialProps };
};

export default wrapper.withRedux(app);
