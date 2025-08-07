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
      viewBox="0 0 60 100"
      className={`w-full h-full ${getStatusColor()} ${className}`}
      xmlns="http://www.w3.org/2000/svg"
    >
      {/* Truck cab */}
      <rect x="17.5" y="10" width="25" height="25" rx="3" />
      
      {/* Truck trailer */}
      <rect x="15" y="35" width="30" height="45" rx="3" />
      
      {/* Wheels */}
      <circle cx="22" cy="85" r="5" className="fill-muted" />
      <circle cx="38" cy="85" r="5" className="fill-muted" />
      <circle cx="30" cy="70" r="5" className="fill-muted" />
      
      {/* Details */}
      <rect x="18" y="37" width="8" height="8" className="fill-background" />
      <rect x="18" y="47" width="8" height="8" className="fill-background" />
      <rect x="18" y="57" width="8" height="8" className="fill-background" />
      
      <rect x="34" y="37" width="8" height="8" className="fill-background" />
      <rect x="34" y="47" width="8" height="8" className="fill-background" />
      <rect x="34" y="57" width="8" height="8" className="fill-background" />
    </svg>
  );
};