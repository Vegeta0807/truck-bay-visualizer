import { createAsyncThunk } from '@reduxjs/toolkit';

// Mock API function - replace with your actual API utility
const makeAPICall = async (url, method, payload) => {
  // Simulate API call delay
  await new Promise(resolve => setTimeout(resolve, 1000));

  // Mock successful response
  return {
    data: {
      status: 'success',
      message: method === 'POST' && url.includes('assign')
        ? 'Trailer assigned successfully'
        : 'Trailer released successfully',
      data: payload
    }
  };
};

// Mock API endpoints - replace with your actual API constants
const apiCollection = {
  assignTrailer: '/api/trailer/assign',
  releaseTrailer: '/api/trailer/release',
  fetchTrailerDropdown: '/api/trailer/dropdown',
  fetchLoadingBayData: '/api/loading-bay/data'
};

export const assignTrailer = createAsyncThunk(
  'trailerManagement/assignTrailer',
  async (payload, { rejectWithValue }) => {
    try {
      const response = await makeAPICall(
        apiCollection.assignTrailer,
        'POST',
        payload,
      );
      return response.data;
    } catch (error) {
      return rejectWithValue(
        error?.message || 'Failed to assign trailer.',
      );
    }
  },
);

export const releaseTrailer = createAsyncThunk(
  'trailerManagement/releaseTrailer',
  async (payload, { rejectWithValue }) => {
    try {
      const response = await makeAPICall(
        apiCollection.releaseTrailer,
        'POST',
        payload,
      );
      return response.data;
    } catch (error) {
      return rejectWithValue(
        error?.message || 'Failed to release trailer.',
      );
    }
  },
);

export const fetchTrailerDropdown = createAsyncThunk(
  'trailerManagement/fetchTrailerDropdown',
  async (payload = {}, { rejectWithValue }) => {
    try {
      // Mock trailer dropdown data
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

      await new Promise(resolve => setTimeout(resolve, 500));

      return {
        data: mockTrailers,
        status: 'success'
      };
    } catch (error) {
      return rejectWithValue(
        error?.message || 'Failed to fetch trailer dropdown',
      );
    }
  },
);

export const fetchLoadingBayData = createAsyncThunk(
  'trailerManagement/fetchLoadingBayData',
  async (payload = {}, { rejectWithValue }) => {
    try {
      const response = await makeAPICall(
        apiCollection.fetchLoadingBayData,
        'GET',
        payload,
      );
      return response.data;
    } catch (error) {
      return rejectWithValue(
        error?.message || 'Failed to fetch loading bay data',
      );
    }
  },
);
