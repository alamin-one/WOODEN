import { useContext, useEffect, useState } from 'react';
import userOrderContext from './userOrderContext';
import { collection, getFirestore, onSnapshot } from 'firebase/firestore';
import app from '../../firebase';
import { useAuth } from '../auth/AuthContextprovider';

/* custom hook */
// eslint-disable-next-line react-refresh/only-export-components
export const useUserOrder = () => {
  return useContext(userOrderContext);
};

const UserOrderProvider = ({ children }) => {
  const db = getFirestore(app);
  const { user } = useAuth();
  const userID = user?.uid;
  const [cartItem, setCartItem] = useState();

  useEffect(() => {
    if (!user) return;
    const docRef = collection(db, 'users', userID, 'cart');
    const uns = onSnapshot(docRef, snp => {
      if (!snp.empty) {
        const data = snp.docs.map(i => ({
          id: i.id,
          ...i.data(),
        }));
        setCartItem(data);
      } else {
        setCartItem([]);
      }
    });
    return () => uns();
  }, [db, user, userID]);

  const value = {
    cartItem,
  };
  return (
    <userOrderContext.Provider value={value}>
      {children}
    </userOrderContext.Provider>
  );
};

export default UserOrderProvider;
