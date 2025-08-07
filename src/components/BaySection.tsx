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
        return 'grid-cols-4 gap-1';
      case 'medium':
        return 'grid-cols-6 gap-2';
      case 'large':
      default:
        return 'grid-cols-8 gap-3';
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
    <div className={`bg-card border-2 ${getBayColor()} rounded-lg p-3 h-full flex flex-col`}>
      <h3 className="text-bay-text font-semibold text-center mb-2 text-sm lg:text-base">
        {title}
      </h3>
      <div className={`grid ${getGridClasses()} flex-1 items-center justify-items-center`}>
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