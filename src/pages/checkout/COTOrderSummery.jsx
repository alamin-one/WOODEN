import Button from '../../components/ui/Button';
import { Link, useNavigate } from 'react-router';
import Checkout from '../../components/checkout/Checkout';
import { useAuth } from '../../contexts/auth/AuthContextprovider';
import { useUserOrder } from '../../contexts/userOrder/UserOrderProvider';
import toast from 'react-hot-toast';

/*  */
const OrderSummery = ({ address }) => {
  const { cartItem } = useUserOrder();
  const { user } = useAuth();
  const userId = user?.uid;
  // const [orderummary, setOrdersummary] = useState();

  const subtotal = cartItem?.reduce((acc, item) => {
    return acc + item.price * item.quantity;
  }, 10);

  let d = 0.25;
  const discount = subtotal * d;
  const finalTotal = subtotal - discount || 0;
  const Shipping = 'Free';
  const navigate = useNavigate();
  /* plase order */
  const plaseOrder = () => {
    Checkout(
      userId,
      address,
      cartItem,
      subtotal,
      discount,
      Shipping,
      finalTotal,
      navigate,
    );
  };
  return (
    <div className="w-full max-w-sm  bg-pale-grey rounded-2xl border border-deep-aqua/30 overflow-hidden">
      {/* Cart Items */}

      {cartItem?.map((item, index) => (
        <div
          key={index}
          className="px-5 pt-5 pb-4 border-b border-gray-100 flex flex-col gap-4 w-full"
        >
          <div className="flex items-center justify-between w-full gap-1">
            <div className="w-2/3 flex  gap-2 ">
              <div className="w-14 h-14 rounded-xl object-cover ">
                <img
                  src={item.thumbnail}
                  alt={'item.name'}
                  className="w-full h-full"
                />
              </div>
              <div className="flex flex-col ">
                <p className="text-sm font-medium line-clamp-1">{item.title}</p>
                <div className="text-xs text-gray-400 mt-0.5">
                  {item.category} {item.brand}
                  <p className="text-xs text-deep-aqua">
                    {' '}
                    {item.quantity} X {item.price}
                  </p>
                </div>
              </div>
            </div>
            <p className="text-sm font-semibold text-deep-aqua w-1/3 text-end">
              {item.price * item.quantity} ৳
            </p>
          </div>
        </div>
      ))}

      {/* Discount Code */}
      <div className="px-5 py-4 flex items-center gap-2 border-b border-deep-aqua/30">
        <div className="flex flex-1 items-center gap-2 border border-gray-200 rounded-lg px-3 py-2.5 w-2/3 ">
          <input
            placeholder="Discount code"
            className="flex-1 text-sm text-gray-700 bg-transparent outline-none placeholder:text-gray-400"
          />
        </div>
        <Button className="m-5">
          <Link> Apply</Link>
        </Button>
      </div>

      <div className="p-5 flex flex-col gap-3 text-sm text-gray-600 pb-2 border-b border-deep-aqua/30">
        <div className="flex justify-between pb-2 border-b border-deep-aqua/20">
          <span>Subtotal</span>
          <span>{subtotal} ৳</span>
        </div>
        <div className="flex justify-between  pb-2 border-b border-deep-aqua/30">
          <span>{d * 100}%discount </span>
          <span className="font-medium ">- {discount || 0}৳ </span>
        </div>
        <div className="flex justify-between  pb-2 border-b border-deep-aqua/30">
          <span>Shipping</span>
          <span className="font-medium ">{Shipping}</span>
        </div>

        <div className="h-px bg-gray-100 my-1" />
        <div className="flex justify-between items-center">
          <span className="text-base font-bold text-deep-aqua">Total</span>
          <span className="text-xl font-bold text-deep-aqua">
            {finalTotal} ৳
          </span>
        </div>
      </div>

      {/* Button */}

      {cartItem?.length === 0 ? (
        <Button
          onClick={() => toast.error('Your cart is empty!')}
          className="m-5"
        >
          Plase order
        </Button>
      ) : (
        <Button onClick={() => plaseOrder()} className="m-5">
          Plase order
        </Button>
      )}
    </div>
  );
};

export default OrderSummery;
