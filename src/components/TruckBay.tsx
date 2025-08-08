import { TruckIcon } from './TruckIcon';

interface TruckBayProps {
  bayNumber: number;
  status: 'available' | 'occupied' | 'warning' | 'neutral' | 'inactive';
  info?: string;
  trailerNumber?: string | null;
  transporterName?: string | null;
  screenSize?: '4k' | 'xlarge' | 'large' | 'medium' | 'small';
}

export const TruckBay = ({ bayNumber, status, info, trailerNumber, transporterName, screenSize }: TruckBayProps) => {
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
        <TruckIcon
          status={status}
          trailerNumber={trailerNumber}
          transporterName={transporterName}
          screenSize={screenSize}
        />
      </div>
    </div>
  );
};