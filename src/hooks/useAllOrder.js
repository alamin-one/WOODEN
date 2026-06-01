import { useEffect, useState } from 'react';
import { useAuth } from '../contexts/auth/AuthContextprovider';
import { collection, getFirestore, onSnapshot } from 'firebase/firestore';
import app from '../firebase';
const useAllOrder = () => {
  const [allOrder, setAllOrder] = useState();
  const { user } = useAuth();
  const db = getFirestore(app);
  useEffect(() => {
    const docRef = collection(db, 'orders');
    const uns = onSnapshot(docRef, snp => {
      const data = snp.docs.map(d => ({
        id: d.id,
        ...d.data(),
      }));
      setAllOrder(data);
    });
    return () => uns();
  }, [db, user?.id]);

  const currentOrder = allOrder?.filter(i => i.userId === user?.uid);
  return currentOrder;
};

export default useAllOrder;
