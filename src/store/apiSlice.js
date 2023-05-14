import {createApi,fetchBaseQuery} from '@reduxjs/toolkit/query/react'

const baseURI='http://localhost:8080';

export const apiSlice=createApi({
    baseQuery:fetchBaseQuery({baseUrl:baseURI }),
    endpoints:builder=>({
        //get categories
        getCategories :builder.query({
            //get categories from baseURI
            query:() => './api/categories'
        }),
        //get labels
        getLabels:builder.query({
            query:()=> '/api/labels'
        }),

        //add new transaction
        addTransaction: builder.mutation({
            query:(initialTransaction)=>({
                //post req for transaction
                url:'/api/transaction',
                method:"POST",
                body: initialTransaction
            })
        }),

        //delete record
        deleteTransaction: builder.mutation({
            query:recordId=>({
                //Delete req for transaction
                url:'/api/transaction',
                method:"DELETE",
                body: recordId
            })
        })
    })
})

export default apiSlice;