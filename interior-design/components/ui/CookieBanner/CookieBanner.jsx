import React, { useState, useEffect } from 'react';
import { setCookie, getCookie } from '../../../lib/cookies';
import { GA_TRACKING_ID } from '../../../lib/gtag';
import styles from './cookieBanner.module.scss';

const CookieBanner = () => {
  const [showBanner, setShowBanner] = useState(false);

  useEffect(() => {
    // Check if user has already made a choice
    const consent = getCookie('cookie-consent');
    if (!consent) {
      setShowBanner(true);
    }
  }, []);

  const handleAccept = () => {
    setCookie('cookie-consent', 'accepted', 365);
    setShowBanner(false);
    // Update Google Analytics consent immediately
    if (typeof window !== 'undefined' && window.gtag && GA_TRACKING_ID) {
      // Update consent to allow analytics
      window.gtag('consent', 'update', {
        'analytics_storage': 'granted',
        'ad_storage': 'granted'
      });
      // Track pageview immediately after consent is granted
      // Use setTimeout to ensure consent update is processed first
      setTimeout(() => {
        window.gtag('config', GA_TRACKING_ID, {
          page_path: window.location.pathname,
        });
      }, 100);
    }
    // Trigger custom event to notify GoogleAnalytics component
    if (typeof window !== 'undefined') {
      window.dispatchEvent(new Event('cookieConsentAccepted'));
    }
  };

  const handleDecline = () => {
    setCookie('cookie-consent', 'declined', 365);
    setShowBanner(false);
  };

  if (!showBanner) return null;

  return (
    <div className={styles.cookieBanner}>
      <div className={styles.cookieContent}>
        <div className={styles.cookieText}>
          <p className={styles.cookieTitle}>We use cookies</p>
          <p className={styles.cookieDescription}>
            We use cookies to analyze site usage and improve your experience. 
            By clicking &quot;Accept&quot;, you consent to our use of cookies.
          </p>
        </div>
        <div className={styles.cookieButtons}>
          <button 
            className={styles.declineButton} 
            onClick={handleDecline}
            aria-label="Decline cookies"
          >
            Decline
          </button>
          <button 
            className={styles.acceptButton} 
            onClick={handleAccept}
            aria-label="Accept cookies"
          >
            Accept
          </button>
        </div>
      </div>
    </div>
  );
};

export default CookieBanner;

