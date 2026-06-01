import {
  collection,doc,getDoc,getDocs,getFirestore,increment,setDoc,updateDoc,
} from 'firebase/firestore';
import app from '../../firebase';
import { useContext, useEffect, useState } from 'react';
import dbContext from './dbContext';
import { useAuth } from '../auth/AuthContextprovider';
import toast from 'react-hot-toast';


/* custom hook */
// eslint-disable-next-line react-refresh/only-export-components
export const useDbcontext = () => {
  return useContext(dbContext);
};

/* db context provider */
const DbContextprovider = ({ children }) => {
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(false);
  const [products, setProducts] = useState(null);
  const [catLoading, setCatLoading] = useState(true);
  const [catError, setCatError] = useState(false);
  const [category, setCategory] = useState(null);

  const db = getFirestore(app);
  const { user } = useAuth();
  const userID = user?.uid;

  /* get all Products FN*/
  useEffect(() => {
    const getProducts = async () => {
      try {
        setError(false);
        setLoading(true);
        const snapshort = await getDocs(collection(db, 'products'));
        const data = (await snapshort).docs.map(p => ({
          id: p.id,
          ...p.data(),
        }));
        setProducts(data);
        setLoading(false);
      } catch (err) {
        setError(true);
        console.log(err.message);
      }
    };
    getProducts();
  }, [db]);

  /* get all Category */
  useEffect(() => {
    const category = async () => {
      try {
        setCatError(false);
        setCatLoading(true);
        const snapshort = await getDocs(collection(db, 'categories'));
        const data = (await snapshort).docs.map(c => ({
          id: c.id,
          ...c.data(),
        }));
        setCategory(data);
        setCatLoading(false);
      } catch (err) {
        console.log(err);
        setCatError(true);
      }
    };

    category();
  }, [db]);

  /*  add cart FN */
  const adToCartFN = async product => {
    let docRef = doc(db, 'users', userID, 'cart', product.id);
    const snapshort = await getDoc(docRef);
    if (snapshort.exists()) {
      toast.error('Product Already Added, Quantity Updated!');
      await updateDoc(docRef, {
        quantity: increment(1),
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

  /* provide value */
  const value = {
    error,loading,products,catError,catLoading,category,adToCartFN,
  };
  return <dbContext.Provider value={value}>{children}</dbContext.Provider>;
};

export default DbContextprovider;
