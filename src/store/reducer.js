import { createSlice } from "@reduxjs/toolkit";

const InitialState={
    categories:[],
    transaction:[]
}


export const expenseSlice=createSlice({
    name:'expense',
    InitialState,
    reducers:{
        getTransactions:(state)=>{

        }
    }
})

export const {getTransactions} =expenseSlice.actions;
export default expenseSlice.reducer;
