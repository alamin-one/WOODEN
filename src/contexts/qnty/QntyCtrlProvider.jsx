import {
  doc,
  getDoc,
  getFirestore,
  onSnapshot,
  setDoc,
  updateDoc,
} from 'firebase/firestore';
import app from '../../firebase';
import { useAuth } from '../auth/AuthContextprovider';

import { useContext, useEffect, useState } from 'react';
import qntyContext from './qntyContext';
import { useLocation } from 'react-router';
import toast from 'react-hot-toast';

/* custom hook */
// eslint-disable-next-line react-refresh/only-export-components
export const useQntyCtrl = () => {
  return useContext(qntyContext);
};

const QntyCtrlProvider = ({ children }) => {
  const { state } = useLocation();
  const db = getFirestore(app);
  const [qty, setQty] = useState(1);
  const { user } = useAuth();
  const userID = user?.uid;
  const pId = state?.pItem?.id;
  /*  */

  useEffect(() => {
    if (!pId || !userID) return;
    const docRef = doc(db, 'users', userID, 'cart', pId);
    const uns = onSnapshot(docRef, snp => {
      if (snp.exists()) {
        const data = snp.data();
        setQty(data.quantity);
      } else {
        setQty(1);
      }
    });
    return () => uns();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [pId, userID]);

  const quantityFn = async (value, product) => {
    const docRef = doc(db, 'users', userID, 'cart', pId);
    const snapshort = await getDoc(docRef);
    if (snapshort.exists()) {
      let nq;
      setQty(prev => {
        if (value === 'inc') {
          if (prev < product.stock) {
            nq = prev + 1;
          } else {
            nq = prev;
          }
        }
        if (value === 'dec') {
          if (prev > 1) {
            nq = prev - 1;
          } else {
            nq = prev;
          }
        }
        updateDoc(docRef, {
          quantity: nq,
        });
        return nq;
      });
    } else {
      toast.success('Product Add Success');
      await setDoc(docRef, {
        title: product.title,
        price: product.price,
        discountPrice: product.discountPrice,
        category: product.category,
        brand: product.brand,
        quantity: 1,
        thumbnail: product.thumbnail,
        colors: product.colors,
      });
    }
  };

  const value = {
    quantityFn,
    qty,
    // setCurrentP,
  };
  return <qntyContext.Provider value={value}>{children}</qntyContext.Provider>;
};

export default QntyCtrlProvider;
