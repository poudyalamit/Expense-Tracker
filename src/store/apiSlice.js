import {createApi,fetchBaseQuery} from '@reduxjs/toolkit/query/react'

const baseURI='http://localhost:8080';

export const apiSlice=createApi({
    baseQuery:fetchBaseQuery({baseUrl:baseURI }),
    endpoints:builder=>({
        getCategories :builder.query({
            //get categories from baseURI
            query:() => './api/categories'
        })
    })
})

export default apiSlice;