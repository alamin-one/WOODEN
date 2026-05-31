import { collection, getDocs, getFirestore } from 'firebase/firestore';
import app from '../../firebase';
import { useContext, useEffect, useState } from 'react';
import dbContext from './dbContext';
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

  /* provide value */
  const value = {
    error,
    loading,
    products,
    catError,
    catLoading,
    category,
  };
  return <dbContext.Provider value={value}>{children}</dbContext.Provider>;
};

export default DbContextprovider;
