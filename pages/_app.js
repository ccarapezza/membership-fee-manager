import PropTypes from 'prop-types';
import Head from 'next/head';
import CssBaseline from '@mui/material/CssBaseline';
import { CacheProvider } from '@emotion/react';
import createEmotionCache from '../src/createEmotionCache';
import AppLayout from '../src/layout/AppLayout';
import { SessionProvider } from "next-auth/react"
import { useEffect } from 'react';
import { useRouter } from 'next/router'

// Client-side cache, shared for the whole session of the user in the browser.
const clientSideEmotionCache = createEmotionCache();

export default function MyApp(props) {
  const {
    Component,
    emotionCache = clientSideEmotionCache,
    pageProps: { session, ...pageProps }
  } = props;

  const router = useRouter();

  useEffect(() => {
    console.log("session", session);
    if(!session){
      router.push("/auth/signIn")
    }
  }, [session])  

  return (
    <SessionProvider session={session}>
      <CacheProvider value={emotionCache}>
        <Head>
          <meta name="viewport" content="initial-scale=1, width=device-width" />
        </Head>
        <AppLayout>
          {/* CssBaseline kickstart an elegant, consistent, and simple baseline to build upon. */}
          <CssBaseline />
          <Component {...pageProps} />
        </AppLayout>
      </CacheProvider>
    </SessionProvider>
  );
}

MyApp.propTypes = {
  Component: PropTypes.elementType.isRequired,
  emotionCache: PropTypes.object,
  pageProps: PropTypes.object.isRequired,
};