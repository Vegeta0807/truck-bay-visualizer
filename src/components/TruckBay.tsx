import { TruckIcon } from './TruckIcon';

interface TruckBayProps {
  bayNumber: number;
  status: 'available' | 'occupied' | 'warning' | 'neutral' | 'inactive';
  info?: string;
  trailerNumber?: string | null;
  transporterName?: string | null;
  screenSize?: '4k' | 'xlarge' | 'large' | 'medium' | 'small';
  assignedAt?: string | null;
}

export const TruckBay = ({ bayNumber, status, info, trailerNumber, transporterName, screenSize, assignedAt }: TruckBayProps) => {
  const getISTTime = (utcTimestamp: string | null): string => {
    if (!utcTimestamp) return '';

    const utcTime = new Date(utcTimestamp);
    const istTime = new Date(utcTime.getTime() + (5.5 * 60 * 60 * 1000));

    return istTime.toLocaleTimeString('en-IN', {
      hour12: false,
      hour: '2-digit',
      minute: '2-digit'
    });
  };
  return (
    <div className="truck-bay">
      {/* Bay info label */}
      <div className="truck-bay-label">
        Bay {bayNumber}
      </div>

      {assignedAt ? (
        <div className="truck-bay-info">
          {getISTTime(assignedAt)}
        </div>
      ) : info ? (
        <div className="truck-bay-info">
          {info}
        </div>
      ) : null}

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