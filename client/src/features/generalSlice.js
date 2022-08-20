import { createSlice, createAsyncThunk, nanoid } from "@reduxjs/toolkit";
import axios from "axios";

const base_url = "  http://localhost:3001/docs";

// get request
export const asyncGetDocument = createAsyncThunk(
  "documents/asyncGetDocument",
  async (_, { rejectWithValue }) => {
    try {
      const response = await axios.get(base_url);
      return response.data;
    } catch (error) {
      return rejectWithValue([], error);
    }
  }
);

// post request
export const asyncAddDocument = createAsyncThunk(
  "documents/asyncAddDocument",
  async (payload, { rejectWithValue }) => {
    try {
      const response = await axios.post(base_url, {
        id: nanoid(),
        title: payload.title,
        date: payload.date,
        description: payload.description,
        file: payload.file,
      });
      return response.data;
    } catch (error) {
      return rejectWithValue([], error);
    }
  }
);

const initialState = {
  isDark: false,
  docs: [],
  loading: false,
  error: null,
};

const generalSlice = createSlice({
  name: "general",
  initialState,
  reducers: {
    toggleDarkMode: (state) => {
      state.isDark = !state.isDark;
    },
  },
  extraReducers: {
    // success
    [asyncGetDocument.fulfilled]: (state, action) => {
      return { ...state, docs: action.payload, loading: false, error: null };
    },
    // loading
    [asyncGetDocument.pending]: (state, action) => {
      return { ...state, docs: [], loading: true, error: null };
    },
    // failed
    [asyncGetDocument.rejected]: (state, action) => {
      return {
        ...state,
        docs: [],
        loading: false,
        error: action.payload.message,
      };
    },
    // add
    [asyncAddDocument.fulfilled]: (state, action) => {
      state.docs.push(action.payload);
    },
  },
});

export const { toggleDarkMode } = generalSlice.actions;

export default generalSlice.reducer;
