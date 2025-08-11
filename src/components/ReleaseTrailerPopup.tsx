import React from 'react';

interface ReleaseTrailerPopupProps {
  isOpen: boolean;
  onClose: () => void;
  bayNumber: number;
  trailerNumber: string;
  onRelease: () => void;
}

export const ReleaseTrailerPopup: React.FC<ReleaseTrailerPopupProps> = ({
  isOpen,
  onClose,
  bayNumber,
  trailerNumber,
  onRelease
}) => {
  if (!isOpen) return null;

  const handleRelease = () => {
    console.log('Releasing trailer:', trailerNumber, 'from bay:', bayNumber);
    // TODO: Dispatch thunk action here
    onRelease();
    onClose();
  };

  const handleCancel = () => {
    onClose();
  };

  return (
    <div className="popup-overlay">
      <div className="popup-container">
        <div className="popup-header">
          <h2 className="popup-title">Release Trailer</h2>
        </div>
        
        <div className="popup-content">
          {/* Bay Number Display */}
          <div className="form-group">
            <label className="form-label">Bay No</label>
            <div className="bay-number-display">
              {bayNumber.toString().padStart(2, '0')}
            </div>
          </div>

          {/* Trailer Number Display */}
          <div className="form-group">
            <label className="form-label">Trailer Number</label>
            <div className="trailer-number-display">
              {trailerNumber}
            </div>
          </div>
        </div>

        {/* Action Buttons */}
        <div className="popup-actions">
          <button 
            type="button" 
            className="btn btn-cancel"
            onClick={handleCancel}
          >
            CANCEL
          </button>
          <button 
            type="button" 
            className="btn btn-release"
            onClick={handleRelease}
          >
            RELEASE
          </button>
        </div>
      </div>
    </div>
  );
};
