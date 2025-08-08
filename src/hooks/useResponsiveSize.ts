import { useState, useEffect } from 'react';

export const useResponsiveSize = () => {
  // Initialize with a function to get the correct initial state
  const [screenSize, setScreenSize] = useState<'4k' | 'xlarge' | 'large' | 'medium' | 'small'>(() => {
    if (typeof window === 'undefined') return 'large';
    const width = window.innerWidth;
    if (width < 768) return 'small';
    if (width >= 768 && width < 1024) return 'medium'; // Tablets (10 bays)
    if (width >= 1024 && width < 1440) return 'large'; // Small desktop (15 bays, smaller)
    if (width >= 1440 && width < 2560) return 'xlarge'; // Large desktop (15 bays, normal size)
    return '4k'; // 4K and larger displays (15 bays, large cars)
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
      // Large Desktop: 1440px to 2559px (show 15 bays, normal size)
      else if (width >= 1440 && width < 2560) {
        setScreenSize('xlarge');
      }
      // 4K and larger: 2560px and above (show 15 bays, large cars)
      else {
        setScreenSize('4k');
      }
    };

    updateScreenSize();
    window.addEventListener('resize', updateScreenSize);
    return () => window.removeEventListener('resize', updateScreenSize);
  }, []);

  return screenSize;
};