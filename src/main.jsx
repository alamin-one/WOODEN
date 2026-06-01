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
import MyWishlist from './pages/dashboard/user/MyWishlist.jsx';
import MyAddresses from './pages/dashboard/user/MyAddresses.jsx';
import MySettings from './pages/dashboard/user/MySettings.jsx';
/* style */
import './index.css';
import Maindash from './pages/dashboard/user/Maindash.jsx';

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
      { path: '/about', element: <About /> },
      { path: '/contact', element: <ContactPage /> },
      { path: '/checkout', element: <CheckoutPage /> },
      { path: '/cart', element: <CartPage /> },
      { path: '/my-account', element: <UserDeshboard /> },
      {
        path: '/my-account/',
        element: <UserDeshboard />,
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
            path: 'wishlist',
            element: <MyWishlist />,
          },
          {
            path: 'addresses',
            element: <MyAddresses />,
          },
          {
            path: 'settings',
            element: <MySettings />,
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
