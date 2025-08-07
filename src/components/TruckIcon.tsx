interface TruckIconProps {
  status: 'available' | 'occupied' | 'warning' | 'neutral' | 'inactive';
  className?: string;
}

export const TruckIcon = ({ status, className = "" }: TruckIconProps) => {
  const getStatusClass = () => {
    switch (status) {
      case 'available':
        return 'truck-status-available';
      case 'occupied':
        return 'truck-status-occupied';
      case 'warning':
        return 'truck-status-warning';
      case 'neutral':
        return 'truck-status-neutral';
      case 'inactive':
        return 'truck-status-inactive';
      default:
        return 'truck-status-neutral';
    }
  };

  return (
    <svg
      viewBox="0 0 40 60"
      className={`${getStatusClass()} ${className}`}
      style={{
        width: '100%',
        height: '100%',
        display: 'block', /* Remove inline spacing */
        margin: 0,
        padding: 0
      }}
      xmlns="http://www.w3.org/2000/svg"
      preserveAspectRatio="none" /* Allow stretching to fill container */
    >
      {/* Truck cab (top view) - edge to edge, compact */}
      <rect x="0" y="0" width="40" height="10" rx="2" />

      {/* Truck trailer (top view) - smaller but still visible */}
      <rect x="0" y="10" width="40" height="50" rx="3" />

      {/* Front windshield line - centered */}
      <line
        x1="5"
        y1="2"
        x2="35"
        y2="2"
        stroke="var(--background-color)"
        strokeWidth="2"
        style={{ opacity: 0.8 }}
      />
    </svg>
  );
};