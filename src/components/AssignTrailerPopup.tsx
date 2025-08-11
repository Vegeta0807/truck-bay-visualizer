import React, { useState } from 'react';
import { z } from 'zod';

// Zod validation schema
const assignTrailerSchema = z.object({
  trailerNumber: z.string().min(1, 'Trailer number is required'),
});

type AssignTrailerFormData = z.infer<typeof assignTrailerSchema>;

interface AssignTrailerPopupProps {
  isOpen: boolean;
  onClose: () => void;
  bayNumber: number;
  onSubmit: (data: AssignTrailerFormData) => void;
}

// Mock trailer data for dropdown
const mockTrailers = [
  'MH14AB7890',
  'DL09X5432',
  'KA05Z8901',
  'UP16X2345',
  'TN07B6789',
  'GJ10P4567',
  'RJ14K8765',
  'AP09D1234',
  'PB08C5678',
  'HR26AB9876',
  'WB22CD3456',
  'OD05EF7890',
  'JH20GH5678',
  'CG04IJ9012',
  'AS07KL3456'
];

export const AssignTrailerPopup: React.FC<AssignTrailerPopupProps> = ({
  isOpen,
  onClose,
  bayNumber,
  onSubmit
}) => {
  const [selectedTrailer, setSelectedTrailer] = useState<string>('');
  const [isDropdownOpen, setIsDropdownOpen] = useState(false);
  const [errors, setErrors] = useState<{ trailerNumber?: string }>({});

  if (!isOpen) return null;

  const handleSubmit = () => {
    try {
      const validatedData = assignTrailerSchema.parse({
        trailerNumber: selectedTrailer
      });
      
      onSubmit(validatedData);
      setErrors({});
      onClose();
    } catch (error) {
      if (error instanceof z.ZodError) {
        const fieldErrors: { trailerNumber?: string } = {};
        error.errors.forEach((err) => {
          if (err.path[0] === 'trailerNumber') {
            fieldErrors.trailerNumber = err.message;
          }
        });
        setErrors(fieldErrors);
      }
    }
  };

  const handleCancel = () => {
    setSelectedTrailer('');
    setErrors({});
    onClose();
  };

  const handleTrailerSelect = (trailer: string) => {
    setSelectedTrailer(trailer);
    setIsDropdownOpen(false);
    setErrors({});
  };

  return (
    <div className="popup-overlay">
      <div className="popup-container">
        <div className="popup-header">
          <h2 className="popup-title">Assign Trailer</h2>
        </div>
        
        <div className="popup-content">
          {/* Bay Number Display */}
          <div className="form-group">
            <label className="form-label">Bay No</label>
            <div className="bay-number-display">
              {bayNumber.toString().padStart(2, '0')}
            </div>
          </div>

          {/* Trailer Number Dropdown */}
          <div className="form-group">
            <label className="form-label required">
              Trailer Number <span className="required-asterisk">*</span>
            </label>
            <div className="dropdown-container">
              <button
                type="button"
                className={`dropdown-button ${errors.trailerNumber ? 'error' : ''}`}
                onClick={() => setIsDropdownOpen(!isDropdownOpen)}
              >
                <span className={selectedTrailer ? 'selected' : 'placeholder'}>
                  {selectedTrailer || 'Select Trailer'}
                </span>
                <svg 
                  className={`dropdown-arrow ${isDropdownOpen ? 'open' : ''}`}
                  width="12" 
                  height="12" 
                  viewBox="0 0 12 12"
                >
                  <path d="M3 4.5L6 7.5L9 4.5" stroke="currentColor" strokeWidth="1.5" fill="none"/>
                </svg>
              </button>
              
              {isDropdownOpen && (
                <div className="dropdown-menu">
                  {mockTrailers.map((trailer) => (
                    <button
                      key={trailer}
                      type="button"
                      className="dropdown-item"
                      onClick={() => handleTrailerSelect(trailer)}
                    >
                      {trailer}
                    </button>
                  ))}
                </div>
              )}
            </div>
            {errors.trailerNumber && (
              <span className="error-message">{errors.trailerNumber}</span>
            )}
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
            className="btn btn-save"
            onClick={handleSubmit}
          >
            SAVE
          </button>
        </div>
      </div>
    </div>
  );
};
