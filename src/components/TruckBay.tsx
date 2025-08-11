import { TruckIcon } from './TruckIcon';
import { AssignTrailerPopup } from './AssignTrailerPopup';
import { ReleaseTrailerPopup } from './ReleaseTrailerPopup';
import { useState } from 'react';

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
  const [isAssignPopupOpen, setIsAssignPopupOpen] = useState(false);
  const [isReleasePopupOpen, setIsReleasePopupOpen] = useState(false);

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

  const handleTruckClick = () => {
    if (status === 'neutral') {
      // Open assign popup for grey trucks (unassigned)
      setIsAssignPopupOpen(true);
    } else if (status === 'available' || status === 'occupied') {
      // Open release popup for green and red trucks (assigned)
      setIsReleasePopupOpen(true);
    }
  };

  const handleAssignTrailer = (data: { trailerNumber: string }) => {
    console.log('Assigning trailer:', data.trailerNumber, 'to bay:', bayNumber);
    // TODO: Dispatch thunk action here
    setIsAssignPopupOpen(false);
  };

  const handleReleaseTrailer = () => {
    console.log('Releasing trailer from bay:', bayNumber);
    // TODO: Dispatch thunk action here
    setIsReleasePopupOpen(false);
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
      <div
        className={`truck-icon-container ${(status === 'neutral' || status === 'available' || status === 'occupied') ? 'clickable' : ''}`}
        onClick={handleTruckClick}
      >
        <TruckIcon
          status={status}
          trailerNumber={trailerNumber}
          transporterName={transporterName}
          screenSize={screenSize}
        />
      </div>

      {/* Assign Trailer Popup */}
      <AssignTrailerPopup
        isOpen={isAssignPopupOpen}
        onClose={() => setIsAssignPopupOpen(false)}
        bayNumber={bayNumber}
        onSubmit={handleAssignTrailer}
      />

      {/* Release Trailer Popup */}
      <ReleaseTrailerPopup
        isOpen={isReleasePopupOpen}
        onClose={() => setIsReleasePopupOpen(false)}
        bayNumber={bayNumber}
        trailerNumber={trailerNumber || ''}
        onRelease={handleReleaseTrailer}
      />
    </div>
  );
};