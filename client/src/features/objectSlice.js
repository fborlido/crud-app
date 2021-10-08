import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import {
  fetchObjectsAPI,
  addObjectAPI,
  deleteObjectAPI,
  updateObjectAPI
} from "../api/ObjectsAPI";

const initialState = {
  objects: [],
};

export const fetchObjects = createAsyncThunk("getObjects", async () => {
  const objects = await fetchObjectsAPI();
  return objects.data;
});

export const addObject = createAsyncThunk("addObject", async (values) => {
  const newObject = await addObjectAPI(values);
  return newObject;
});

export const deleteObject = createAsyncThunk("deleteObject", async (id) => {
  const response = await deleteObjectAPI(id);
  return response.data;
});

export const updateObject = createAsyncThunk("updateObject", async (id) => {
  const response = await updateObjectAPI(id);
  return response.data;
});

const objectSlice = createSlice({
  name: "objects",
  initialState,
  reducers: {},
  extraReducers: {
    [fetchObjects.fulfilled]: (state, action) => {
      state.objects = action.payload;
    },
  },
});

//export const {} = objectSlice.actions;
export default objectSlice.reducer;
