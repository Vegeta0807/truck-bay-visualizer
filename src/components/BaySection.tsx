import { CarIndicator } from './CarIndicator';

interface BaySectionProps {
  title: string;
  bayType: 'loading' | 'buffer';
  cars: Array<{
    id: number;
    status: 'available' | 'occupied' | 'warning' | 'neutral' | 'inactive';
  }>;
  screenSize: 'large' | 'medium' | 'small';
}

export const BaySection = ({ title, bayType, cars, screenSize }: BaySectionProps) => {
  const getBayColor = () => {
    return bayType === 'loading' ? 'border-bay-loading' : 'border-bay-buffer';
  };

  const getGridClasses = () => {
    switch (screenSize) {
      case 'small':
        return 'grid-cols-2 gap-0.5';
      case 'medium':
        return 'grid-cols-4 gap-1';
      case 'large':
      default:
        return 'grid-cols-4 gap-1';
    }
  };

  const getCarSize = (): 'large' | 'medium' | 'small' => {
    switch (screenSize) {
      case 'small':
        return 'small';
      case 'medium':
        return 'medium';
      case 'large':
      default:
        return 'large';
    }
  };

  return (
    <div className={`bg-card border-2 ${getBayColor()} rounded p-1 lg:p-2 h-full flex flex-col`}>
      <h3 className="text-bay-text font-semibold text-center mb-1 text-xs lg:text-sm">
        {title}
      </h3>
      <div className={`grid ${getGridClasses()} flex-1 items-center justify-items-center content-center`}>
        {cars.map((car) => (
          <CarIndicator
            key={car.id}
            status={car.status}
            size={getCarSize()}
            className="transition-all duration-300"
          />
        ))}
      </div>
    </div>
  );
};