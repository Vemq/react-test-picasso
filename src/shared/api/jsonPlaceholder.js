import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react'

export const jsonPlaceholderApi = createApi({
  reducerPath: 'jsonPlaceholderApi',
  baseQuery: fetchBaseQuery({ baseUrl: 'https://jsonplaceholder.typicode.com/' }),
  endpoints: (builder) => ({
    getPostById: builder.query({
      query: (id) => `posts/${id}`,
    }),
    getAllPosts: builder.query({
      query: () => 'posts',
    }),
  }),
})

export const { useGetPostByIdQuery, useGetAllPostsQuery } = jsonPlaceholderApi