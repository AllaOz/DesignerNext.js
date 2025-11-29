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

    // Function to check consent and update if needed
    const checkAndUpdateConsent = () => {
      const cookieConsent = getCookie('cookie-consent');

      if (cookieConsent === 'accepted') {
        // Update consent to allow analytics
        window.gtag('consent', 'update', {
          'analytics_storage': 'granted',
          'ad_storage': 'granted'
        });

        // Track initial pageview after consent is granted
        // Use setTimeout to ensure consent update is processed
        setTimeout(() => {
          pageview(window.location.pathname);
        }, 100);
      }
      // If consent is 'declined' or not set, consent remains 'denied' (set in _document.js)
    };

    // Check consent immediately on mount
    checkAndUpdateConsent();

    // Set up route change tracking (only if consent is granted)
    const handleRouteChange = (url) => {
      const cookieConsent = getCookie('cookie-consent');
      if (cookieConsent === 'accepted') {
        pageview(url);
      }
    };

    router.events.on('routeChangeComplete', handleRouteChange);
    router.events.on('hashChangeComplete', handleRouteChange);

    // Listen for consent acceptance
    const handleConsentAccepted = () => {
      checkAndUpdateConsent();
    };

    window.addEventListener('cookieConsentAccepted', handleConsentAccepted);

    return () => {
      router.events.off('routeChangeComplete', handleRouteChange);
      router.events.off('hashChangeComplete', handleRouteChange);
      window.removeEventListener('cookieConsentAccepted', handleConsentAccepted);
    };
  }, [router.events]);

  // Component doesn't render anything - script is in _document.js
  return null;
}

