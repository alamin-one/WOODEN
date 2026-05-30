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
  const db = getFirestore(app);

  /* get all products FN*/
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

  /* provide value */
  const value = {
    error,
    loading,
    products,
  };
  return <dbContext.Provider value={value}>{children}</dbContext.Provider>;
};

export default DbContextprovider;
