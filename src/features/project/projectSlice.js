import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import arrayComponents from "../../options/componentOptions";
import FormCreate from "../../components/projectComponents/FormCreate";
import { FORMULARIO } from "../../options/componentOptions";

const initialState = {
  projects: [],
  alert: {},
  redirectSuccess: false,
  project: {},
};

export const addProject = createAsyncThunk(
  "project/addProject",
  async function (projectName, thunkApi) {
    const projectsLocalStorage =
      JSON.parse(localStorage.getItem("projects")) || [];
    const uniqueId =
      Date.now().toString(36) + Math.random().toString(36).slice(2);

    const newProject = {
      id: uniqueId,
      name: projectName,
      components: [],
      layout: [],
    };

    localStorage.setItem(
      "projects",
      JSON.stringify([...projectsLocalStorage, newProject])
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

export const addComponentToProject = createAsyncThunk(
  "project/addComponentToProject",
  async function (type, thunkApi) {
    const project = structuredClone({
      ...thunkApi.getState().projects.project,
    });
    const uniqueId =
      Date.now().toString(36) + Math.random().toString(36).slice(2);

    project.layout.push({ i: uniqueId, x: 0, y: 0, w: 6, h: 6 });

    project.components.push({
      id: uniqueId,
      style: "1",

      componentType: type,
      subComponents: [],
    });

    return project;
  }
);

export const getProject = createAsyncThunk(
  "project/getProject",
  async function (id, thunkApi) {
    const state = thunkApi.getState().projects;

    const project = state.projects.filter((item) => item.id === id);

    if (!project[0]) {
      thunkApi.dispatch(
        setAlertWithTimeOutRedirect({
          msg: "There has been an error",
          error: true,
        })
      );
      return thunkApi.rejectWithValue({ error: "error" });
    }

    return project[0];
  }
);

export const getProjects = createAsyncThunk(
  "projects/getProjects",
  async function (thunkApi) {
    const projects = JSON.parse(localStorage.getItem("projects"));

    return projects || [];
  }
);

export const setAlertWithTimeOutRedirect = createAsyncThunk(
  "project/setAlertWithTimeOutRedirect",
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
  extraReducers(builder) {
    builder.addCase(getProjects.fulfilled, (state, action) => {
      state.projects = action.payload;
    });
    builder.addCase(getProject.rejected, (state, action) => {});
    builder.addCase(getProject.fulfilled, (state, action) => {
      state.project = action.payload;
    });
    builder.addCase(addComponentToProject.fulfilled, (state, action) => {
      state.project = action.payload;
    });
    builder.addCase(addComponentToProject.rejected, (state, action) => {
      console.log(action);
    });
  },
});

export const { setAlert, changeRedirect, changeRedirectTrue } =
  projectSlice.actions;
export default projectSlice.reducer;
