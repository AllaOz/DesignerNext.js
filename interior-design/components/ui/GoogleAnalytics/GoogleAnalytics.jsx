import Script from 'next/script';
import { useRouter } from 'next/router';
import { useEffect, useState } from 'react';
import { GA_TRACKING_ID, pageview } from '../../../lib/gtag';
import { getCookie } from '../../../lib/cookies';

export default function GoogleAnalytics() {
  const router = useRouter();
  const [consent, setConsent] = useState(null);

  useEffect(() => {
    // Check cookie consent on client side
    const checkConsent = () => {
      const cookieConsent = getCookie('cookie-consent');
      setConsent(cookieConsent);

      if (cookieConsent === 'accepted' && GA_TRACKING_ID) {
        const handleRouteChange = (url) => {
          pageview(url);
        };

        router.events.on('routeChangeComplete', handleRouteChange);
        router.events.on('hashChangeComplete', handleRouteChange);

        // Track initial pageview
        pageview(window.location.pathname);

        return () => {
          router.events.off('routeChangeComplete', handleRouteChange);
          router.events.off('hashChangeComplete', handleRouteChange);
        };
      }
    };

    checkConsent();

    // Listen for consent acceptance
    const handleConsentAccepted = () => {
      checkConsent();
    };

    window.addEventListener('cookieConsentAccepted', handleConsentAccepted);

    return () => {
      window.removeEventListener('cookieConsentAccepted', handleConsentAccepted);
    };
  }, [router.events]);

  // Only load GA if user has accepted cookies
  if (!GA_TRACKING_ID || consent !== 'accepted') {
    return null;
  }

  return (
    <>
      <Script
        strategy="afterInteractive"
        src={`https://www.googletagmanager.com/gtag/js?id=${GA_TRACKING_ID}`}
      />
      <Script
        id="gtag-init"
        strategy="afterInteractive"
        dangerouslySetInnerHTML={{
          __html: `
            window.dataLayer = window.dataLayer || [];
            function gtag(){dataLayer.push(arguments);}
            gtag('js', new Date());
            gtag('config', '${GA_TRACKING_ID}', {
              page_path: window.location.pathname,
            });
          `,
        }}
      />
    </>
  );
}

