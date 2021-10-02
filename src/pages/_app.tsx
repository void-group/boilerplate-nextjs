import { AppProps } from 'next/app';
import Head from 'next/head';

import { globalStyles } from '../styles/globalStyles';

function MyApp({ Component, pageProps }: AppProps): JSX.Element {
  globalStyles();
  return (
    <>
      <Head>
        <title>PWA - Boilerplate</title>
        <link rel="manifest" href="/manifest.json" />
      </Head>
      <Component {...pageProps} />
    </>
  );
}

export default MyApp;
