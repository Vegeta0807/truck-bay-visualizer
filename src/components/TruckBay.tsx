import { TruckIcon } from './TruckIcon';

interface TruckBayProps {
  bayNumber: number;
  status: 'available' | 'occupied' | 'warning' | 'neutral' | 'inactive';
  info?: string;
}

export const TruckBay = ({ bayNumber, status, info }: TruckBayProps) => {
  return (
    <div className="flex flex-col items-center h-full">
      {/* Bay info label */}
      <div className="bg-accent text-accent-foreground px-2 py-1 rounded-t text-xs font-semibold mb-1 w-full text-center">
        Bay {bayNumber}
      </div>
      
      {/* Additional info if provided */}
      {info && (
        <div className="text-xs text-muted-foreground mb-1 text-center px-1">
          {info}
        </div>
      )}
      
      {/* Truck icon container */}
      <div className="flex-1 w-full max-w-20 lg:max-w-24">
        <TruckIcon status={status} className="drop-shadow-sm" />
      </div>
    </div>
  );
};