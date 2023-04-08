import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";

const initialState = {
  projects: [],
  alert: {},
  redirectSuccess: false,
};

export const addProject = createAsyncThunk(
  "project/addProject",
  async function (projectName, thunkApi) {
    const projectsLocalStorage = JSON.parse(localStorage.getItem("projects"));
    const uniqueId =
      Date.now().toString(36) + Math.random().toString(36).slice(2);

    const newProject = {
      id: uniqueId,
      name: projectName,
      fields: [],
    };

    localStorage.setItem(
      "projects",
      JSON.stringify({ ...projectsLocalStorage, [uniqueId]: newProject })
    );

    thunkApi.dispatch(
      setAlertWithTimeOutRedirect({
        msg: "Project Created Successfully",
        error: false,
      })
    );

    return newProject;
  }
);

export const setAlertWithTimeOut = createAsyncThunk(
  "project/createAsyncThunk",
  async function (alert, thunkApi) {
    thunkApi.dispatch(setAlert(alert));

    setTimeout(() => {
      thunkApi.dispatch(setAlert({}));
    }, 3000);
  }
);

export const setAlertWithTimeOutRedirect = createAsyncThunk(
  "project/createAsyncThunk",
  async function (alert, thunkApi) {
    thunkApi.dispatch(setAlert(alert));

    setTimeout(() => {
      thunkApi.dispatch(setAlert({}));
      thunkApi.dispatch(changeRedirectTrue());
    }, 3000);
  }
);

const projectSlice = createSlice({
  name: "projects",
  initialState,
  reducers: {
    setAlert: (state, action) => {
      state.alert = action.payload;
    },
    changeRedirect: (state, action) => {
      state.redirectSuccess = false;
    },
    changeRedirectTrue: (state, action) => {
      state.redirectSuccess = true;
    },
  },
  extraReducers(builder) {},
});

export const { setAlert, changeRedirect, changeRedirectTrue } =
  projectSlice.actions;
export default projectSlice.reducer;
