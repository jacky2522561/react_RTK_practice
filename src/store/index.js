import {configureStore,createSlice} from '@reduxjs/toolkit';

const listSlice = createSlice({
    name:'list',
    initialState: [],
    reducers:{
        addItem: (state,action)=>{
            state.push(action.payload);
        },
        removeItem: (state,action) =>{
            const index = state.indexOf(action.payload);
            state.splice(index,1);
        }
    }
})

const inputSlice = createSlice({
    name:'input',
    initialState:'',
    reducers:{
        inputType:(state,action)=>{
            state = action.payload;
        }
    }
})

const store = configureStore({
    reducer:{
        list:listSlice.reducer,
        input:inputSlice.reducer
    }
})

export default store;
export const {addItem,removeItem} = listSlice.actions;
export const {inputType} = inputSlice.actions;