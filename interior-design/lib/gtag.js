// Google Analytics utility functions

export const GA_TRACKING_ID = process.env.NEXT_PUBLIC_GA_ID || '';

// Log the pageview with their URL
export const pageview = (url) => {
  if (typeof window !== 'undefined' && window.gtag && GA_TRACKING_ID) {
    window.gtag('config', GA_TRACKING_ID, {
      page_path: url,
    });
  }
};

// Log specific events happening
export const event = ({ action, category, label, value }) => {
  if (typeof window !== 'undefined' && window.gtag) {
    window.gtag('event', action, {
      event_category: category,
      event_label: label,
      value: value,
    });
  }
};

// Update consent mode
export const updateConsent = (granted) => {
  if (typeof window !== 'undefined' && window.gtag) {
    window.gtag('consent', 'update', {
      'analytics_storage': granted ? 'granted' : 'denied',
      'ad_storage': granted ? 'granted' : 'denied'
    });
  }
};


