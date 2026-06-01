# Wooden — Furniture E-Commerce

A full-stack furniture e-commerce web app built with React and Firebase.

## Live Demo

[wooden-furniture.vercel.app](#)

---

## Features

- Product listing with category and brand filters
- Single product page with image gallery and rating
- Cart management with realtime quantity update
- Checkout with shipping address and order placement
- User authentication (Email & Google)
- Order history dashboard
- Private route protection

---

## Tech Stack

| Frontend        | Backend            |
| --------------- | ------------------ |
| React 19        | Firebase Firestore |
| React Router    | Firebase Auth      |
| Tailwind CSS    |                    |
| React Hot Toast |                    |

---

## Project Structure

```
src/
├── assets/         # icons, images
├── components/     # shared UI components
├── contexts/       # auth and db context
├── hooks/          # custom hooks
├── layout/         # main layout
├── pages/          # all pages
├── routes/         # private routes
├── services/       # utility functions
└── utils/          # filters, rating
```

---

## Getting Started

```bash
# install dependencies
npm install

# start dev server
npm run dev
```

---

## Environment Variables

Create a `.env.local` file:

```
VITE_API_KEY=
VITE_AUTH_DOMAIN=
VITE_PROJECT_ID=
VITE_STORAGE_BUCKET=
VITE_MESSAGING_SENDER_ID=
VITE_APP_ID=
```

---

## Repository

[github.com/alamin-one/WOODEN](https://github.com/alamin-one/WOODEN)

---

## Developed by

**Al-Amin** — [github.com/alamin-one](https://github.com/alamin-one)

---

## License
