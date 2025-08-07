interface TruckIconProps {
  status: 'available' | 'occupied' | 'warning' | 'neutral' | 'inactive';
  className?: string;
}

export const TruckIcon = ({ status, className = "" }: TruckIconProps) => {
  const getStatusColor = () => {
    switch (status) {
      case 'available':
        return 'fill-status-available';
      case 'occupied':
        return 'fill-status-occupied';
      case 'warning':
        return 'fill-status-warning';
      case 'neutral':
        return 'fill-status-neutral';
      case 'inactive':
        return 'fill-status-inactive';
      default:
        return 'fill-status-neutral';
    }
  };

  return (
    <svg
      viewBox="0 0 100 60"
      className={`w-full h-full ${getStatusColor()} ${className}`}
      xmlns="http://www.w3.org/2000/svg"
    >
      {/* Truck cab */}
      <rect x="10" y="20" width="25" height="25" rx="3" />
      
      {/* Truck trailer */}
      <rect x="35" y="15" width="45" height="30" rx="3" />
      
      {/* Wheels */}
      <circle cx="22" cy="50" r="5" className="fill-muted" />
      <circle cx="47" cy="50" r="5" className="fill-muted" />
      <circle cx="70" cy="50" r="5" className="fill-muted" />
      
      {/* Details */}
      <rect x="37" y="18" width="8" height="8" className="fill-background" />
      <rect x="47" y="18" width="8" height="8" className="fill-background" />
      <rect x="57" y="18" width="8" height="8" className="fill-background" />
    </svg>
  );
};