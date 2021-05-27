import Head from 'next/head'

import { Layout } from '../components/Layout'

import { GlobalStyle }  from '../styles/global'

function MyApp({ Component, pageProps }) {
  return (
    <>
      <Head>
        <title>Sagan</title>
      </Head>

      <GlobalStyle/>
      <Layout>
        <Component {...pageProps} />
      </Layout>
    </>
  )
}

export default MyApp
