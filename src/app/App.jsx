import {
  RouterProvider,
  createBrowserRouter,
  Navigate,
} from 'react-router-dom';
import { ApiProvider } from '@reduxjs/toolkit/query/react';
import { jsonPlaceholderApi } from '../shared/api';

import { PostListPage } from '../pages/posts';
import { SinglePostPage } from '../pages/post';
import { ErrorPage } from '../pages/error';

const router = createBrowserRouter([
  {
    path: '/',
    element: <Navigate to="posts" />,
    errorElement: <ErrorPage />,
  },
  {
    path: 'posts',
    element: <PostListPage />,
    errorElement: <ErrorPage />,
  },
  {
    path: 'posts/:postId',
    element: <SinglePostPage />,
    errorElement: <ErrorPage />,
  },
]);

export default function App() {
  return (
    <ApiProvider api={jsonPlaceholderApi}>
      <RouterProvider router={router} />
    </ApiProvider>
  );
}