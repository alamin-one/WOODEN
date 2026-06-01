import { Link } from 'react-router';
import Button from '../../components/ui/Button';
import OrderSummary from './OrderSummary';
import CartItem from './CartItem';
import { useUserOrder } from '../../contexts/userOrder/UserOrderProvider';

const CartPage = () => {
  const { cartItem } = useUserOrder();

  if (!cartItem) return <div className="h-[80vh]">Loading</div>;
  return (
    <section className="bg-white min-h-175">
      <div className="app-container  py-25  flex gap-5 flex-col md:flex-row">
        {/* Left  */}
        <div className="flex-1 flex flex-col gap-4  w-full md:w-[70%]">
          {/* Item 1 */}

          {cartItem.map((item, index) => (
            <CartItem product={item} key={index} />
          ))}
        </div>

        {/* Right*/}
        <div className=" shrink-0 flex flex-col gap-4  w-full md:w-[30%]">
          {/* Summary */}
          <div className=" bg-white border border-gray-200 rounded-2xl p-5">
            <p className="text-deep-aqua text-sm font-semibold  mb-4">
              Order Summary
            </p>
            <OrderSummary cartItem={cartItem} />
            <Button className="mt-5">
              <Link to={'/checkout'}>Continue to Payment</Link>
            </Button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default CartPage;
