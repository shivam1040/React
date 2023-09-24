import { createBrowserRouter, RouterProvider } from 'react-router-dom';

//import BlogPage, { loader as postsLoader } from './pages/Blog';
import HomePage from './pages/Home';
//import PostPage, { loader as postLoader } from './pages/Post';
import RootLayout from './pages/Root';
import { lazy, Suspense } from 'react';

//way to import componenents, since import returns promise lazy is used to handle it
const BlogPage = lazy(() => import('./pages/Blog'))
const PostPage = lazy(() => import('./pages/Post'))
const router = createBrowserRouter([
  {
    path: '/',
    element: <RootLayout />,
    children: [
      {
        index: true,
        element: <HomePage />,
      },
      {
        path: 'posts',
        children: [
          // { index: true, element: <BlogPage />, loader: postsLoader },
          //way to load postLoader lazily, so this only loaded when user opens this route, similar for blogpage which is now a variable and suspense is used to wait for the componenent to load
          { index: true, element: <Suspense><BlogPage /></Suspense>, loader: () => import('./pages/Blog').then(module => module.loader()) },
          //the meta is club of all the params passed to this loader, since we are calling the loader lazily si these params also need to be directed to laze loader
          { path: ':id', element: <Suspense><PostPage /></Suspense>, loader: (meta) => import('./pages/Post').then(m => m.loader(meta)) },
        ],
      },
    ],
  },
]);

function App() {
  return <RouterProvider router={router} />;
}

export default App;
