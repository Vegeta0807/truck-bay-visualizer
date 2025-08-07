import { TruckIcon } from './TruckIcon';

interface TruckBayProps {
  bayNumber: number;
  status: 'available' | 'occupied' | 'warning' | 'neutral' | 'inactive';
  info?: string;
}

export const TruckBay = ({ bayNumber, status, info }: TruckBayProps) => {
  return (
    <div className="truck-bay">
      {/* Bay info label */}
      <div className="truck-bay-label">
        Bay {bayNumber}
      </div>

      {/* Additional info if provided */}
      {info && (
        <div className="truck-bay-info">
          {info}
        </div>
      )}

      {/* Truck icon container */}
      <div className="truck-icon-container">
        <TruckIcon status={status} />
      </div>
    </div>
  );
};