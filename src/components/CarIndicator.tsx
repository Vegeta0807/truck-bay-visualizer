interface CarIndicatorProps {
  status: 'available' | 'occupied' | 'warning' | 'neutral' | 'inactive';
  size: 'large' | 'medium' | 'small';
  className?: string;
}

export const CarIndicator = ({ status, size, className = "" }: CarIndicatorProps) => {
  const getStatusColor = () => {
    switch (status) {
      case 'available':
        return 'fill-status-available border-status-available';
      case 'occupied':
        return 'fill-status-occupied border-status-occupied';
      case 'warning':
        return 'fill-status-warning border-status-warning';
      case 'neutral':
        return 'fill-status-neutral border-status-neutral';
      case 'inactive':
        return 'fill-status-inactive border-status-inactive';
      default:
        return 'fill-status-neutral border-status-neutral';
    }
  };

  const getSizeClasses = () => {
    switch (size) {
      case 'large':
        return 'w-8 h-6';
      case 'medium':
        return 'w-4 h-3';
      case 'small':
        return 'w-2 h-2';
      default:
        return 'w-6 h-4';
    }
  };

  // For small size, render as a simple dot
  if (size === 'small') {
    return (
      <div 
        className={`rounded-full ${getStatusColor()} ${getSizeClasses()} ${className}`}
      />
    );
  }

  // For medium size, render as a simple box
  if (size === 'medium') {
    return (
      <div 
        className={`rounded border-2 ${getStatusColor()} ${getSizeClasses()} ${className}`}
      />
    );
  }

  // For large size, render detailed car SVG
  return (
    <svg
      viewBox="0 0 60 40"
      className={`${getSizeClasses()} ${getStatusColor()} ${className}`}
      xmlns="http://www.w3.org/2000/svg"
    >
      {/* Car body */}
      <rect x="5" y="15" width="50" height="15" rx="2" />
      
      {/* Car hood */}
      <rect x="10" y="10" width="15" height="10" rx="1" />
      
      {/* Car roof */}
      <rect x="25" y="8" width="20" height="12" rx="2" />
      
      {/* Wheels */}
      <circle cx="15" cy="32" r="3" className="fill-muted" />
      <circle cx="45" cy="32" r="3" className="fill-muted" />
      
      {/* Windows */}
      <rect x="27" y="10" width="6" height="6" className="fill-background opacity-70" />
      <rect x="35" y="10" width="6" height="6" className="fill-background opacity-70" />
    </svg>
  );
};