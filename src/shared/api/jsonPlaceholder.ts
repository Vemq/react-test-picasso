import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react';

interface Post {
  body: string;
  id: number;
  title: string;
  userId: number;
}

export const jsonPlaceholderApi = createApi({
  reducerPath: 'jsonPlaceholderApi',
  baseQuery: fetchBaseQuery({
    baseUrl: 'https://jsonplaceholder.typicode.com/',
  }),
  endpoints: (builder) => ({
    getPostById: builder.query<Post, string>({
      query: (id) => `posts/${id}`,
    }),
    getAllPosts: builder.query<Post[], void>({
      query: () => 'posts',
    }),
  }),
});

export const { useGetPostByIdQuery, useGetAllPostsQuery } = jsonPlaceholderApi;
