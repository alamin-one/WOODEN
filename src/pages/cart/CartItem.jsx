import { deleteDoc, doc, getFirestore } from 'firebase/firestore';
import app from '../../firebase';
import { useAuth } from '../../contexts/auth/AuthContextprovider';
import QntyCtrl from './QntyCtrl';
import icon from '../../assets/icons/icon';

/*  */
const CartItem = ({ product }) => {
  const { user } = useAuth();
  const userID = user?.uid;
  const db = getFirestore(app);
  const docRef = doc(db, 'users', userID, 'cart', product.id);
  const deleteP = () => {
    deleteDoc(docRef);
  };

  return (
    <div className="bg-pale-grey/25 border border-gray-200 rounded-2xl p-4 flex  flex-col md:flex-row justify-between items-center gap-4">
      <div className="w-full flex justify-between items-center gap-5">
        <img
          src={product.thumbnail}
          alt="product"
          className="w-20 h-20 rounded-xl object-cover bg-gray-100 shrink-0"
        />
        <div className="flex-1 min-w-0">
          <p className="text-sm font-semibold text-gray-900">{product.title}</p>
          <div className="text-xs space-x-2 flex-wrap text-gray-400 mt-0.5">
            colors :{' '}
            {product.colors.map((c, i) => (
              <span key={i}>{c}</span>
            ))}
          </div>
          <p className="text-sm font-bold text-cyan-500 mt-2">
            {' '}
            {product.price}৳
          </p>
        </div>
      </div>
      <div className="w-full flex justify-between items-center gap-5">
        <QntyCtrl product={product} />

        <p className="text-sm font-bold text-gray-900 w-20 text-right">
          {product.price}৳
        </p>
        <button
          onClick={deleteP}
          className="ml-1 text-gray-300 hover:text-red-400"
        >
          {icon.delet}
        </button>
      </div>
    </div>
  );
};

export default CartItem;
