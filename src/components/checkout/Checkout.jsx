import {
  addDoc,
  collection,
  deleteDoc,
  doc,
  getFirestore,
} from 'firebase/firestore';
import app from '../../firebase';
import toast from 'react-hot-toast';
const Checkout = async (
  userId,
  address,
  cartItem,
  subtotal,
  discount,
  Shipping,
  finalTotal,
) => {
  const orderDetls = {
    userId: userId,
    status: 'pending',
    createdAt: null,

    address: {
      firstName: address?.firstName,
      lastName: address?.lastName,
      email: address?.email,
      phone: address?.phone,
      city: address?.city,
      zipCode: address?.zip,
      note: address?.description,
    },

    items: cartItem.map(item => ({
      productId: item?.id,
      title: item?.title,
      thumbnail: item?.thumbnail,
      price: item?.price,
      quantity: item?.quantity,
      colors: item?.colors?.map(c => ({ color: c })),
    })),

    subtotal: subtotal,
    discount: discount,
    Shipping: Shipping,
    total: finalTotal,

    paymentMethod: 'cash_on_delivery',
    paymentStatus: 'unpaid',
  };
  const db = getFirestore(app);
  const docFef = collection(db, 'orders');
  await addDoc(docFef, orderDetls);
  toast.success('Order Placed Successfully');

  const deleteC = cartItem.map(p =>
    deleteDoc(doc(db, 'users', userId, 'cart', p.id)),
  );
  await Promise.all(deleteC);
};

export default Checkout;
