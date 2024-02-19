import {createSlice} from '@reduxjs/toolkit';

const initialState = {
    company: null,
    employees: [],
    projects: [],
    tasks: []
};

const companySlice = createSlice({
    name: 'company',
    initialState,
    reducers: {
        setCompany: (state, action) => {
            state.company = action.payload;
        },
        setEmployees: (state, action) => {
            state.employees = action.payload;
        },
        setProjects: (state, action) => {
            state.projects = action.payload;
        },
        setTasks: (state, action) => {
            state.tasks = action.payload;
        },
        resetSlice: (state) => {
            state.company = null;
            state.employees = [];
            state.projects = [];
            state.tasks = [];
        }
    },
});

export const {
    setCompany,
    setEmployees,
    setProjects,
    setTasks,
    resetSlice
} = companySlice.actions;
export default companySlice.reducer;
