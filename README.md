
## structure
src/
│
├── assets/
│   ├── images/
│   ├── icons/
│   ├── banners/
│   └── dummy-data/
│
├── components/
│   ├── ui/
│   │   ├── Button.jsx
│   │   ├── Input.jsx
│   │   ├── Modal.jsx
│   │   ├── Loader.jsx
│   │   └── Table.jsx
│   │
│   ├── shared/
│   │   ├── Navbar.jsx
│   │   ├── Footer.jsx
│   │   ├── Sidebar.jsx
│   │   ├── SearchBar.jsx
│   │   ├── Pagination.jsx
│   │   └── SectionTitle.jsx
│   │
│   ├── product/
│   │   ├── ProductCard.jsx
│   │   ├── ProductGrid.jsx
│   │   ├── ProductDetails.jsx
│   │   ├── ProductImageGallery.jsx
│   │   └── ProductReview.jsx
│   │
│   ├── cart/
│   │   ├── CartItem.jsx
│   │   ├── CartSummary.jsx
│   │   └── CouponBox.jsx
│   │
│   ├── checkout/
│   │   ├── CheckoutForm.jsx
│   │   ├── PaymentMethod.jsx
│   │   └── AddressForm.jsx
│   │
│   └── dashboard/
│       ├── admin/
│       └── user/
│
├── layouts/
│   ├── MainLayout.jsx
│   ├── DashboardLayout.jsx
│   └── AuthLayout.jsx
│
├── pages/
│   ├── home/
│   │   └── Home.jsx
│   │
│   ├── shop/
│   │   ├── Shop.jsx
│   │   ├── CategoryProducts.jsx
│   │   └── SearchProducts.jsx
│   │
│   ├── product/
│   │   └── SingleProduct.jsx
│   │
│   ├── cart/
│   │   └── Cart.jsx
│   │
│   ├── checkout/
│   │   └── Checkout.jsx
│   │
│   ├── order/
│   │   ├── Orders.jsx
│   │   ├── OrderDetails.jsx
│   │   └── TrackOrder.jsx
│   │
│   ├── dashboard/
│   │   ├── admin/
│   │   │   ├── AdminDashboard.jsx
│   │   │   ├── AddProduct.jsx
│   │   │   ├── EditProduct.jsx
│   │   │   ├── ManageOrders.jsx
│   │   │   ├── ManageUsers.jsx
│   │   │   └── Analytics.jsx
│   │   │
│   │   └── user/
│   │       ├── UserDashboard.jsx
│   │       ├── Wishlist.jsx
│   │       ├── MyOrders.jsx
│   │       ├── Address.jsx
│   │       ├── Profile.jsx
│   │       └── Settings.jsx
│   │
│   ├── auth/
│   │   ├── Login.jsx
│   │   ├── Register.jsx
│   │   ├── ForgotPassword.jsx
│   │   └── VerifyEmail.jsx
│   │
│   ├── about/
│   │   └── About.jsx
│   │
│   ├── contact/
│   │   └── Contact.jsx
│   │
│   └── error/
│       └── NotFound.jsx
│
├── routes/
│   ├── AppRoutes.jsx
│   ├── PrivateRoute.jsx
│   ├── AdminRoute.jsx
│   └── UserRoute.jsx
│
├── hooks/
│   ├── useAuth.js
│   ├── useCart.js
│   ├── useProducts.js
│   ├── useOrders.js
│   └── useFirestore.js
│
├── context/
│   ├── AuthProvider.jsx
│   ├── CartProvider.jsx
│   └── ProductProvider.jsx
│
├── firebase/
│   ├── firebase.config.js
│   ├── auth.js
│   ├── firestore.js
│   └── storage.js
│
├── services/
│   ├── productService.js
│   ├── orderService.js
│   ├── authService.js
│   └── paymentService.js
│
├── utils/
│   ├── calculateDiscount.js
│   ├── formatPrice.js
│   ├── generateOrderId.js
│   └── validation.js
│
├── constants/
│   ├── categories.js
│   ├── roles.js
│   └── menuLinks.js
│
├── styles/
│   ├── globals.css
│   └── tailwind.css
│
├── App.jsx
└── main.jsx



/

/shop
/shop/:category
/product/:id

/cart
/checkout

/login
/register

/dashboard/user
/dashboard/user/orders
/dashboard/user/address

/dashboard/admin
/dashboard/admin/add-product
/dashboard/admin/orders
/dashboard/admin/users

users
products
orders
categories
reviews
coupons
wishlist



## Important Features
1. User Side
2. Add to cart
3. Buy now
4. Product search
5. Filter
6. Review system
7. Order tracking
8. Address management
9. Wishlist


## Admin Side
1. Add product
2. Edit/Delete product
3. Manage orders
4. Change order status
5. Analytics
6. User management


## Tech Stack
1. React
2. React Router
3. Tailwind CSS
4. Firebase
5. Context API / Redux Toolkit
6. React Hook Form
7. React Hot Toast
8. Swiper JS
9. 5ster


## Ecommerce Flow
Home
 → Shop
   → Single Product
      → Add To Cart
         → Checkout
            → Order Place
               → User Dashboard




# Cliend frontend
2. Toster => Toster holo je Notification => eita auto notification dekhai apni
   cal korben ar auto notification dekhabe. \*\*\* npm install react-hot-toast
   \*\* import {Toaster } from 'react-hot-toast'<Toaster position="top-right" />
  # data-aos="fade-right">
3. search suggestion => all data theke finter . tolowarcase . includes . slide 

