import { useState, useEffect } from 'react';

export const useResponsiveSize = () => {
  // Initialize with a function to get the correct initial state
  const [screenSize, setScreenSize] = useState<'xlarge' | 'large' | 'medium' | 'small'>(() => {
    if (typeof window === 'undefined') return 'large';
    const width = window.innerWidth;
    if (width < 768) return 'small';
    if (width >= 768 && width < 1024) return 'medium'; // Tablets (10 bays)
    if (width >= 1024 && width < 1440) return 'large'; // Small desktop (15 bays, smaller)
    return 'xlarge'; // Large desktop (15 bays, normal size)
  });

  useEffect(() => {
    const updateScreenSize = () => {
      const width = window.innerWidth;

      // Mobile: below 768px
      if (width < 768) {
        setScreenSize('small');
      }
      // Tablet: 768px to 1023px (show 10 bays)
      else if (width >= 768 && width < 1024) {
        setScreenSize('medium');
      }
      // Small Desktop: 1024px to 1439px (show 15 bays, smaller size)
      else if (width >= 1024 && width < 1440) {
        setScreenSize('large');
      }
      // Large Desktop: 1440px and above (show 15 bays, normal size)
      else {
        setScreenSize('xlarge');
      }
    };

    updateScreenSize();
    window.addEventListener('resize', updateScreenSize);
    return () => window.removeEventListener('resize', updateScreenSize);
  }, []);

  return screenSize;
};