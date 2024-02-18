import {createSlice} from '@reduxjs/toolkit';

const initialState = {
    empresa: null,
    funcionarios: [],
    projetos: [],
    tarefas: []
};

const empresaSlice = createSlice({
    name: 'empresa',
    initialState,
    reducers: {
        setEmpresa: (state, action) => {
            state.empresa = action.payload;
        },
        setFuncionarios: (state, action) => {
            state.funcionarios = action.payload;
        },
        setProjetos: (state, action) => {
            state.projetos = action.payload;
        },
        setTarefas: (state, action) => {
            state.tarefas = action.payload;
        },
        reset: (state) => {
            state.empresa = null;
            state.funcionarios = [];
            state.projetos = [];
            state.tarefas = [];
        }
    },
});

export const {setEmpresa} = empresaSlice.actions;
export default empresaSlice.reducer;
