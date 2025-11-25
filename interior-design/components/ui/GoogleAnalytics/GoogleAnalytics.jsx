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

    // Function to update consent and track pageview
    const updateConsentAndTrack = () => {
      const cookieConsent = getCookie('cookie-consent');

      if (cookieConsent === 'accepted') {
        // Update consent to allow analytics
        window.gtag('consent', 'update', {
          'analytics_storage': 'granted',
          'ad_storage': 'granted'
        });

        // Track initial pageview
        pageview(window.location.pathname);
      } else if (cookieConsent === 'declined') {
        // Ensure consent is denied
        window.gtag('consent', 'update', {
          'analytics_storage': 'denied',
          'ad_storage': 'denied'
        });
      }
    };

    // Check consent immediately on mount
    updateConsentAndTrack();

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
      updateConsentAndTrack();
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

