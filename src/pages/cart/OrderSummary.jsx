/*  */
const OrderSummary = ({ cartItem }) => {
  const total = cartItem?.reduce((acc, item) => {
    return acc + item.price * item.quantity;
  }, 0);

  let d = 0.25;
  const discount = total * d;
  const finalTotal = total - discount;

  return (
    <div className="flex flex-col gap-3 text-sm text-gray-600">
      <div className="flex justify-between  pb-2 border-b  border-gray-300">
        <span>Subtotal</span>
        <span>{total} ৳</span>
      </div>
      <div className="flex justify-between pb-2 border-b  border-gray-300">
        <span>{d * 100}%discount </span>
        <span className="font-medium ">- {discount}৳ </span>
      </div>
      <div className="flex justify-between pb-2 border-b  border-gray-300">
        <span>Shipping</span>
        <span className="font-medium ">Free</span>
      </div>

      <div className="h-px bg-gray-100 my-1" />
      <div className="flex justify-between items-center">
        <span className="text-base  text-deep-aqua">Total</span>
        <span className="text-md  text-deep-aqua">{finalTotal} ৳</span>
      </div>
    </div>
  );
};

export default OrderSummary;
