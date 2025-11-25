import { useRouter } from 'next/router';
import { useEffect } from 'react';
import { GA_TRACKING_ID, pageview } from '../../../lib/gtag';
import { getCookie } from '../../../lib/cookies';

export default function GoogleAnalytics() {
  const router = useRouter();

  useEffect(() => {
    // Check if gtag is available (script is loaded in _document.js)
    if (typeof window === 'undefined' || !window.gtag || !GA_TRACKING_ID) {
      return;
    }

    // Check cookie consent on client side
    const checkConsent = () => {
      const cookieConsent = getCookie('cookie-consent');

      if (cookieConsent === 'accepted') {
        // Update consent to allow analytics
        window.gtag('consent', 'update', {
          'analytics_storage': 'granted',
          'ad_storage': 'granted'
        });

        // Track initial pageview
        pageview(window.location.pathname);

        // Set up route change tracking
        const handleRouteChange = (url) => {
          pageview(url);
        };

        router.events.on('routeChangeComplete', handleRouteChange);
        router.events.on('hashChangeComplete', handleRouteChange);

        return () => {
          router.events.off('routeChangeComplete', handleRouteChange);
          router.events.off('hashChangeComplete', handleRouteChange);
        };
      } else if (cookieConsent === 'declined') {
        // Ensure consent is denied
        window.gtag('consent', 'update', {
          'analytics_storage': 'denied',
          'ad_storage': 'denied'
        });
      }
    };

    // Initial check
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

  // Component doesn't render anything - script is in _document.js
  return null;
}

