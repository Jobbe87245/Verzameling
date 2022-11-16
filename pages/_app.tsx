import '../styles/globals.sass'
import '../styles/index.sass'
import '../styles/contact.sass'
import '../styles/login.sass'
import '../styles/register.sass'
import '../styles/collectie.sass'
import type { AppProps } from 'next/app'

function MyApp({ Component, pageProps }: AppProps) {
  return <Component {...pageProps} />
}

export default MyApp