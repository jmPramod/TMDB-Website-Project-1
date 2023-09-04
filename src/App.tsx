import { lazy, Suspense } from 'react';
import * as React from 'react';
// import * as ReactDOM from 'react-dom/client';
import { createBrowserRouter, RouterProvider } from 'react-router-dom';
import './App.css';
import GenericLoading from './components/GenericLoading';

// const LoginPage = lazy(() => import('./components/Login'));

// const RegisterPage = lazy(() => import('./components/Login'));
const genericLoadingLoader = () => <GenericLoading />;
const MissingPage = lazy(() => import('./pages/Missing'));
const CommonPage = lazy(() => import('./pages/CommonPage'));
// const HomePage = lazy(() => import('./pages/Home'));
function App() {
  const router = createBrowserRouter([
    {
      path: '/',
      element: <CommonPage />,
      errorElement: <MissingPage />,
      loader: genericLoadingLoader,
      children: [
        {
          path: '/home',
          // element: <HomePage />,
        },
        {
          path: '/sign-up',
          // element: <HomePage />,
        },
        {
          path: '/login',
          // element: <LoginPage />,
        },
      ],
    },
  ]);

  return (
    <React.StrictMode>
      <Suspense fallback={<GenericLoading />}>
        <RouterProvider router={router} />
      </Suspense>
    </React.StrictMode>
  );
}
export default App;
