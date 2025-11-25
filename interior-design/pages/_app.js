import '../styles/global-headings.css'
import '../styles/global-fonts.css'
import '../styles/scroll-animations.css'
import ScrollToTop from '../components/ui/ScrollToTop/ScrollToTop'
import GoogleAnalytics from '../components/ui/GoogleAnalytics/GoogleAnalytics'
import CookieBanner from '../components/ui/CookieBanner/CookieBanner'

export default function App({ Component, pageProps }) {
    return (
      <>
        <GoogleAnalytics />
        <Component {...pageProps} />
        <ScrollToTop />
        <CookieBanner />
      </>
    )
}
