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

  return (
    <div className="min-h-screen bg-background text-foreground p-2 lg:p-4 overflow-hidden">
      <div className="h-screen flex flex-col gap-2 lg:gap-4">

        {/* Truck Bays Row - 15 columns */}
        <div className="flex-1 grid grid-cols-15 gap-1 lg:gap-2">
          {trucks.map((truck) => (
            <TruckBay
              key={truck.id}
              bayNumber={truck.bayNumber}
              status={truck.status as any}
              info={truck.info}
            />
          ))}
        </div>

        {/* Loading Bays Row - 15 columns, one for each truck */}
        <div className="flex-1 grid grid-cols-15 gap-1 lg:gap-2">
          {loadingBays.map((bay) => (
            <BaySection
              key={`loading-${bay.truckId}`}
              title={`L${bay.truckId}`}
              bayType="loading"
              cars={bay.cars as any}
              screenSize={screenSize}
            />
          ))}
        </div>

        {/* Buffer Bays Row - 15 columns, one for each truck */}
        <div className="flex-1 grid grid-cols-15 gap-1 lg:gap-2">
          {bufferBays.map((bay) => (
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
