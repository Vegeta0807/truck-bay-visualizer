interface CarIndicatorProps {
  status: 'available' | 'occupied' | 'warning' | 'neutral' | 'inactive';
  size: 'large' | 'medium' | 'small';
  className?: string;
}

export const CarIndicator = ({ status, size, className = "" }: CarIndicatorProps) => {
  const getStatusClass = () => {
    switch (status) {
      case 'available':
        return 'car-status-available';
      case 'occupied':
        return 'car-status-occupied';
      case 'warning':
        return 'car-status-warning';
      case 'neutral':
        return 'car-status-neutral';
      case 'inactive':
        return 'car-status-inactive';
      default:
        return 'car-status-neutral';
    }
  };

  const getSizeClass = () => {
    switch (size) {
      case 'large':
        return 'car-indicator-large';
      case 'medium':
        return 'car-indicator-medium';
      case 'small':
        return 'car-indicator-small';
      default:
        return 'car-indicator-medium';
    }
  };

  // Render different types based on size for better performance and visibility
  const renderCarIndicator = () => {
    const baseClasses = `car-indicator ${getSizeClass()} ${getStatusClass()} ${className}`;

    if (size === 'small') {
      // Simple colored box for very small sizes (tablets) - uses status colors
      return (
        <div
          className={`${baseClasses} car-indicator-box`}
          style={{
            borderRadius: '2px',
          }}
        />
      );
    }

    if (size === 'medium') {
      // Medium detail car shape - wider and longer
      return (
        <svg
          viewBox="0 0 80 120"
          className={baseClasses}
          xmlns="http://www.w3.org/2000/svg"
        >
          {/* Car body - wider and much longer */}
          <rect x="5" y="5" width="70" height="110" rx="4" />
          {/* Car hood */}
          <rect x="10" y="10" width="60" height="25" rx="3" />
          {/* Wheels */}
          <circle cx="3" cy="25" r="5" className="svg-muted" />
          <circle cx="77" cy="25" r="5" className="svg-muted" />
          <circle cx="3" cy="95" r="5" className="svg-muted" />
          <circle cx="77" cy="95" r="5" className="svg-muted" />
          {/* Windows - wider and more */}
          <rect x="15" y="40" width="50" height="15" className="svg-background" />
          <rect x="15" y="60" width="50" height="15" className="svg-background" />
          <rect x="15" y="80" width="50" height="15" className="svg-background" />
        </svg>
      );
    }

    // Large size - detailed car SVG - very wide and long
    return (
      <svg
        viewBox="0 0 100 150"
        className={baseClasses}
        xmlns="http://www.w3.org/2000/svg"
      >
        {/* Car body - very wide and much longer */}
        <rect x="5" y="5" width="90" height="140" rx="5" />

        {/* Car hood */}
        <rect x="10" y="10" width="80" height="30" rx="3" />

        {/* Car roof */}
        <rect x="8" y="40" width="84" height="50" rx="4" />

        {/* Wheels */}
        <circle cx="3" cy="30" r="6" className="svg-muted" />
        <circle cx="97" cy="30" r="6" className="svg-muted" />
        <circle cx="3" cy="120" r="6" className="svg-muted" />
        <circle cx="97" cy="120" r="6" className="svg-muted" />

        {/* Windows - much wider and more */}
        <rect x="15" y="50" width="70" height="12" className="svg-background" />
        <rect x="15" y="70" width="70" height="12" className="svg-background" />
        <rect x="15" y="90" width="70" height="12" className="svg-background" />
        <rect x="15" y="110" width="70" height="10" className="svg-background" />
      </svg>
    );
  };

  return renderCarIndicator();
};