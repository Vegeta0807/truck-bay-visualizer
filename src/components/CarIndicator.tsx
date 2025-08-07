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
        return 'w-6 h-8';
      case 'medium':
        return 'w-3 h-4';
      case 'small':
        return 'w-2 h-2';
      default:
        return 'w-4 h-6';
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
      viewBox="0 0 40 60"
      className={`${getSizeClasses()} ${getStatusColor()} ${className}`}
      xmlns="http://www.w3.org/2000/svg"
    >
      {/* Car body */}
      <rect x="12.5" y="5" width="15" height="50" rx="2" />
      
      {/* Car hood */}
      <rect x="15" y="10" width="10" height="15" rx="1" />
      
      {/* Car roof */}
      <rect x="14" y="25" width="12" height="20" rx="2" />
      
      {/* Wheels */}
      <circle cx="8" cy="15" r="3" className="fill-muted" />
      <circle cx="32" cy="15" r="3" className="fill-muted" />
      <circle cx="8" cy="45" r="3" className="fill-muted" />
      <circle cx="32" cy="45" r="3" className="fill-muted" />
      
      {/* Windows */}
      <rect x="16" y="27" width="6" height="6" className="fill-background opacity-70" />
      <rect x="16" y="35" width="6" height="6" className="fill-background opacity-70" />
    </svg>
  );
};