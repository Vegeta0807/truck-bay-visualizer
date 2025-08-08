import { CarIndicator } from './CarIndicator';

interface BaySectionProps {
  title: string;
  bayType: 'loading' | 'buffer';
  cars: Array<{
    id: number;
    status: 'available' | 'occupied' | 'warning' | 'neutral' | 'inactive';
  }>;
  screenSize: '4k' | 'xlarge' | 'large' | 'medium' | 'small';
}

export const BaySection = ({ title, bayType, cars, screenSize }: BaySectionProps) => {
  const getBayTypeClass = () => {
    return bayType === 'loading' ? 'bay-section-loading' : 'bay-section-buffer';
  };

  const getCarSize = (): 'large' | 'medium' | 'small' => {
    switch (screenSize) {
      case 'small':
        return 'medium'; // Use medium for mobile to make cars visible
      case 'medium':
        return 'small'; // Use small size (boxes) for tablets to fit properly
      case 'large':
        return 'medium'; // Use medium SVG cars for small desktop (1024px-1439px)
      case 'xlarge':
        return 'large'; // Use large detailed SVG cars for large desktop (1440px+)
      case '4k':
      default:
        return 'large'; // Use large detailed SVG cars for 4K displays
    }
  };

  return (
    <div className={`bay-section ${getBayTypeClass()}`}>
      <div className="bay-section-grid">
        {cars.map((car) => (
          <CarIndicator
            key={car.id}
            status={car.status}
            size={getCarSize()}
          />
        ))}
      </div>
    </div>
  );
};