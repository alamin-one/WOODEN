import { createRoot } from 'react-dom/client';
import { createBrowserRouter, Navigate } from 'react-router';
import { RouterProvider } from 'react-router/dom';
/* page import */
import App from './App.jsx';
import HomePage from './pages/home/HomePage.jsx';
import ShopPage from './pages/shop/ShopPage.jsx';
import SingleProduct from './pages/product/SingleProduct.jsx';
import About from './pages/about/About.jsx';
import ContactPage from './pages/contact/ContactPage.jsx';
import CheckoutPage from './pages/checkout/CheckoutPage.jsx';
import CartPage from './pages/cart/CartPage.jsx';
import UserDeshboard from './pages/dashboard/user/UserDeshboard.jsx';
import ErrorPage from './pages/error/ErrorPage.jsx';
import SignINUP from './pages/auth/SignINUP.jsx';
import Dashboard from './pages/dashboard/user/Dashboard.jsx';
import MYOrders from './pages/dashboard/user/MYOrders.jsx';
import MyAddresses from './pages/dashboard/user/MyAddresses.jsx';
/* style */
import './index.css';
import Maindash from './pages/dashboard/user/Maindash.jsx';
import PrivetRoutes from './routes/PrivetRoutes.jsx';

/* routing  */
const router = createBrowserRouter([
  {
    path: '/',
    element: <App />,
    children: [
      { path: '/', element: <HomePage /> },
      { path: '/shop', element: <ShopPage /> },
      { path: '/shop/:category', element: <ShopPage /> },
      { path: '/singleproduct/:id', element: <SingleProduct /> },
      {
        path: '/about',
        element: <About />,
      },
      { path: '/contact', element: <ContactPage /> },
      {
        path: '/checkout',
        element: (
          <PrivetRoutes>
            <CheckoutPage />
          </PrivetRoutes>
        ),
      },
      {
        path: '/cart',
        element: (
          <PrivetRoutes>
            <CartPage />,
          </PrivetRoutes>
        ),
      },
      {
        path: '/my-account',
        element: (
          <PrivetRoutes>
            <UserDeshboard />
          </PrivetRoutes>
        ),
      },
      {
        path: '/my-account/',
        element: (
          <PrivetRoutes>
            <UserDeshboard />,
          </PrivetRoutes>
        ),

        children: [
          {
            path: 'dashboard',
            element: <Maindash />,
            children: [
              {
                index: true,
                element: <Dashboard />,
              },
              {
                path: 'orders/:id',
                element: <MYOrders />,
              },
            ],
          },
          {
            index: true,
            element: <Navigate to="/my-account/dashboard" replace />,
          },
          {
            path: 'addresses',
            element: <MyAddresses />,
          },
        ],
      },
      { path: '/login', element: <SignINUP /> },
      { path: '/register', element: <SignINUP /> },
      { path: '*', element: <ErrorPage /> },
    ],
  },
]);

createRoot(document.getElementById('root')).render(
  <RouterProvider router={router} />,
);
