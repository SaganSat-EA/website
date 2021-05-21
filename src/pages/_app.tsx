import { Header }  from '../components/Header'

import { GlobalStyle }  from '../styles/global'

function MyApp({ Component, pageProps }) {
  return (
    <main>
      <GlobalStyle/>

      <Header />
      <Component {...pageProps} />
    </main>
  )
}

export default MyApp
