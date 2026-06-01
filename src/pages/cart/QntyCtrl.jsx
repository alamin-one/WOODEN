import {
  doc,
  getDoc,
  getFirestore,
  onSnapshot,
  setDoc,
  updateDoc,
} from 'firebase/firestore';
import app from '../../firebase';
import { useAuth } from '../../contexts/auth/AuthContextprovider';
import { useEffect, useState } from 'react';
import toast from 'react-hot-toast';
import { useDbcontext } from '../../contexts/dB/DbContextprovider';

const QntyCtrl = ({ product }) => {
  const { products } = useDbcontext();
  const [qty, setQty] = useState(1);
  const { user } = useAuth();
  const userID = user?.uid;
  const db = getFirestore(app);
  useEffect(() => {
    if (!product.id || !userID) return;
    const docRef = doc(db, 'users', userID, 'cart', product.id);
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
  }, [product.id, userID]);
  const crps = products?.find(f => f.id === product.id);

  const quantityFn = async (value, product) => {
    const docRef = doc(db, 'users', userID, 'cart', product.id);
    const snapshort = await getDoc(docRef);
    if (snapshort.exists()) {
      let nq;
      setQty(prev => {
        if (value === 'inc') {
          if (prev < crps.stock) {
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

  return (
    <div className="mt-2 w-32 h-8 flex  bg-pale-grey border border-gray-100 rounded-md ">
      <div
        onClick={() => {
          quantityFn('inc', product);
        }}
        className="w-1/3 h-full flex items-center justify-center cursor-pointer"
      >
        +
      </div>
      <div className="bg-white w-1/3 h-full flex items-center justify-center">
        {qty}
      </div>
      <div
        onClick={() => quantityFn('dec', product)}
        className="w-1/3 h-full flex items-center justify-center cursor-pointer"
      >
        -
      </div>
    </div>
  );
};

export default QntyCtrl;
