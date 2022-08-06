import PropTypes from 'prop-types';
import Head from 'next/head';
import CssBaseline from '@mui/material/CssBaseline';
import { CacheProvider } from '@emotion/react';
import createEmotionCache from '../src/createEmotionCache';
import AppLayout from '../src/layout/AppLayout';
import { SessionProvider, useSession } from "next-auth/react"
import { Container } from '@mui/material';
import Loading from '../src/Loading';
import "../styles/globals.css";

// Client-side cache, shared for the whole session of the user in the browser.
const clientSideEmotionCache = createEmotionCache();


export default function App(props) {
  const {
    Component,
    emotionCache = clientSideEmotionCache,
    pageProps: { session, ...pageProps }
  } = props;

  return (
    <SessionProvider session={session}>
      <CacheProvider value={emotionCache}>
        <Head>
          <meta name="viewport" content="initial-scale=1, width=device-width" />
        </Head>

        {Component.auth ? (
          <Auth>
            <AppLayout pageTitle={Component.pageTitle}>
              <CssBaseline />
              <Component {...pageProps} />
            </AppLayout>
          </Auth>
        ) : (
          <>
            <CssBaseline />
            <Component {...pageProps} />
          </>
        )}
      </CacheProvider>
    </SessionProvider>
  );
}

function Auth({ children }) {
  // if `{ required: true }` is supplied, `status` can only be "loading" or "authenticated"
  const { status } = useSession({ required: true })

  if (status === "loading") {
    return <Container maxWidth="sm" sx={{ display: "grid", height: "100vh", placeItems: "center" }}>
      <Loading />
    </Container>
  }

  return children
}

App.propTypes = {
  Component: PropTypes.elementType.isRequired,
  emotionCache: PropTypes.object,
  pageProps: PropTypes.object.isRequired,
};