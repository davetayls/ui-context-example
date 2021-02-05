import '../styles/globals.css'
import { UIContextProvider } from '../src/UIContext'

function MyApp({ Component, pageProps }) {
  return (
    <UIContextProvider>
      <Component {...pageProps} />
    </UIContextProvider>
  )
}

export default MyApp
