import '../styles/global-headings.css'
import '../styles/global-fonts.css'
import '../styles/scroll-animations.css'
import ScrollToTop from '../components/ui/ScrollToTop/ScrollToTop'

export default function App({ Component, pageProps }) {
    return (
      <>
        <Component {...pageProps} />
        <ScrollToTop />
      </>
    )
}
