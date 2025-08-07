import { useState, useEffect } from 'react';
import { TruckBay } from '../components/TruckBay';
import { BaySection } from '../components/BaySection';
import { useResponsiveSize } from '../hooks/useResponsiveSize';

const Index = () => {
  const screenSize = useResponsiveSize();
  
  // Mock data for trucks
  const [trucks] = useState(() => 
    Array.from({ length: 15 }, (_, i) => ({
      id: i + 1,
      bayNumber: i + 1,
      status: Math.random() > 0.7 ? 'occupied' : Math.random() > 0.5 ? 'available' : 'neutral',
      info: `Vehicle Logistics Pte Ltd`
    }))
  );

  // Mock data for loading bays (15 bays, one for each truck)
  const [loadingBays] = useState(() =>
    Array.from({ length: 15 }, (_, truckIndex) => ({
      truckId: truckIndex + 1,
      cars: Array.from({ length: 8 }, (_, carIndex) => ({
        id: `loading-${truckIndex}-${carIndex}`,
        status: Math.random() > 0.6 ? 'occupied' : Math.random() > 0.4 ? 'available' : 'neutral'
      }))
    }))
  );

  // Mock data for buffer bays (15 bays, one for each truck)
  const [bufferBays] = useState(() =>
    Array.from({ length: 15 }, (_, truckIndex) => ({
      truckId: truckIndex + 1,
      cars: Array.from({ length: 8 }, (_, carIndex) => ({
        id: `buffer-${truckIndex}-${carIndex}`,
        status: Math.random() > 0.5 ? 'available' : Math.random() > 0.3 ? 'occupied' : 'warning'
      }))
    }))
  );

  // Simulate real-time updates
  useEffect(() => {
    const interval = setInterval(() => {
      // Here you would update the status based on API response
      // For demo purposes, we'll just log that updates would happen
      console.log('Status updates would occur here based on API response');
    }, 5000);

    return () => clearInterval(interval);
  }, []);

  const getColumnsToShow = () => {
    switch (screenSize) {
      case 'small':
        return 15; // Mobile: show all, but in single column (scrollable)
      case 'medium':
        return 15; // Tablet: show all 15 columns with very small sizing
      case 'large':
        return 15; // Small Desktop: show all 15 columns with smaller sizing
      case 'xlarge':
      default:
        return 15; // Large Desktop: show all 15 columns with normal sizing
    }
  };

  const getTruckRowClasses = () => {
    switch (screenSize) {
      case 'small':
        return 'truck-row bay-row bay-row-mobile';
      case 'medium':
        return 'truck-row bay-row bay-row-tablet';
      case 'large':
        return 'truck-row bay-row bay-row-desktop-small'; // New class for smaller desktop
      case 'xlarge':
      default:
        return 'truck-row bay-row bay-row-desktop';
    }
  };

  const getBayRowClasses = () => {
    switch (screenSize) {
      case 'small':
        return 'bay-row-section bay-row bay-row-mobile';
      case 'medium':
        return 'bay-row-section bay-row bay-row-tablet';
      case 'large':
        return 'bay-row-section bay-row bay-row-desktop-small';
      case 'xlarge':
      default:
        return 'bay-row-section bay-row bay-row-desktop';
    }
  };

  const columnsToShow = getColumnsToShow();

  return (
    <div className="app-container">
      <div className="app-content">

        {/* Truck Bays Row - Gets more space */}
        <div className={getTruckRowClasses()}>
          {trucks.slice(0, columnsToShow).map((truck) => (
            <TruckBay
              key={truck.id}
              bayNumber={truck.bayNumber}
              status={truck.status as any}
              info={truck.info}
            />
          ))}
        </div>

        {/* Loading Bays Row */}
        <div className={getBayRowClasses()}>
          {loadingBays.slice(0, columnsToShow).map((bay) => (
            <BaySection
              key={`loading-${bay.truckId}`}
              title={`L${bay.truckId}`}
              bayType="loading"
              cars={bay.cars as any}
              screenSize={screenSize}
            />
          ))}
        </div>

        {/* Buffer Bays Row */}
        <div className={getBayRowClasses()}>
          {bufferBays.slice(0, columnsToShow).map((bay) => (
            <BaySection
              key={`buffer-${bay.truckId}`}
              title={`B${bay.truckId}`}
              bayType="buffer"
              cars={bay.cars as any}
              screenSize={screenSize}
            />
          ))}
        </div>
      </div>
    </div>
  );
};

export default Index;
