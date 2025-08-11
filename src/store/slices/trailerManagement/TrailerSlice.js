import { createSlice } from '@reduxjs/toolkit';
import {
  assignTrailer,
  releaseTrailer,
  fetchTrailerDropdown,
  fetchLoadingBayData,
} from './TrailerThunk';

const initialState = {
  loading: false,
  dropdownLoading: false,
  error: null,
  status: null,
  message: null,

  // Dropdown data
  trailerDropdownData: [],

  // Loading bay data
  loadingBayData: [],

  // Form data
  assignmentForm: {
    bayNumber: null,
    trailerNumber: '',
  },

  releaseForm: {
    bayNumber: null,
    trailerNumber: '',
  },
};

const TrailerSlice = createSlice({
  name: 'trailerManagement',
  initialState,
  reducers: {
    // Update assignment form fields
    updateAssignmentForm: (state, action) => {
      Object.entries(action.payload).forEach(([key, value]) => {
        state.assignmentForm[key] = value;
      });
    },

    // Update release form fields
    updateReleaseForm: (state, action) => {
      Object.entries(action.payload).forEach(([key, value]) => {
        state.releaseForm[key] = value;
      });
    },
    
    // Set message
    setMessage: (state, action) => {
      state.message = action.payload;
    },
    
    // Set status
    setStatus: (state, action) => {
      state.status = action.payload;
    },
    
    // Clear message and status
    clearMessage: (state) => {
      state.message = null;
      state.status = null;
      state.error = null;
    },
    
    // Reset assignment form
    resetAssignmentForm: (state) => {
      state.assignmentForm = {
        bayNumber: null,
        trailerNumber: '',
      };
    },
    
    // Reset release form
    resetReleaseForm: (state) => {
      state.releaseForm = {
        bayNumber: null,
        trailerNumber: '',
      };
    },
  },

  extraReducers: (builder) => {
    // Assign Trailer
    builder
      .addCase(assignTrailer.pending, (state) => {
        state.loading = true;
        state.error = null;
        state.status = null;
        state.message = null;
      })
      .addCase(assignTrailer.fulfilled, (state, action) => {
        state.loading = false;
        state.status = action.payload.status;
        state.message = action.payload.message;
      })
      .addCase(assignTrailer.rejected, (state, action) => {
        state.loading = false;
        state.error = action.payload;
        state.status = 'error';
        state.message = action.payload || 'Failed to assign trailer';
      });

    // Release Trailer
    builder
      .addCase(releaseTrailer.pending, (state) => {
        state.loading = true;
        state.error = null;
        state.status = null;
        state.message = null;
      })
      .addCase(releaseTrailer.fulfilled, (state, action) => {
        state.loading = false;
        state.status = action.payload.status;
        state.message = action.payload.message;
      })
      .addCase(releaseTrailer.rejected, (state, action) => {
        state.loading = false;
        state.error = action.payload;
        state.status = 'error';
        state.message = action.payload || 'Failed to release trailer';
      });

    // Fetch Trailer Dropdown
    builder
      .addCase(fetchTrailerDropdown.pending, (state) => {
        state.dropdownLoading = true;
        state.error = null;
      })
      .addCase(fetchTrailerDropdown.fulfilled, (state, action) => {
        state.dropdownLoading = false;
        state.trailerDropdownData = action.payload.data;
      })
      .addCase(fetchTrailerDropdown.rejected, (state, action) => {
        state.dropdownLoading = false;
        state.error = action.payload;
        state.trailerDropdownData = [];
      });

    // Fetch Loading Bay Data
    builder
      .addCase(fetchLoadingBayData.pending, (state) => {
        state.loading = true;
        state.error = null;
      })
      .addCase(fetchLoadingBayData.fulfilled, (state, action) => {
        state.loading = false;
        state.loadingBayData = action.payload.data || [];
      })
      .addCase(fetchLoadingBayData.rejected, (state, action) => {
        state.loading = false;
        state.error = action.payload;
        state.loadingBayData = [];
      });
  },
});

export const {
  updateAssignmentForm,
  updateReleaseForm,
  setMessage,
  setStatus,
  clearMessage,
  resetAssignmentForm,
  resetReleaseForm,
} = TrailerSlice.actions;

export default TrailerSlice.reducer;
