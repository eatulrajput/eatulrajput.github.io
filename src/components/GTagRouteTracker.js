// src/components/GTagRouteTracker.js
import { useEffect } from 'react';
import { useLocation } from 'react-router-dom';

const GTagRouteTracker = () => {
  const location = useLocation();

  useEffect(() => {
    if (window.gtag) {
      window.gtag('config', 'G-9C3YK4FNWZ', {
        page_path: location.pathname + location.search,
      });
    }
  }, [location]);

  return null;
};

export default GTagRouteTracker;
