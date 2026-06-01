const OrderSummary = ({ cartItem }) => {

  const total = cartItem.reduce((acc, item) => {
    return acc + item.price * item.quantity;
  }, 10);

  let d = 0.25;
  const discount = total * d;
  const finalTotal = total - discount;

  return (
    <div className="flex flex-col gap-3 text-sm text-gray-600">
      <div className="flex justify-between">
        <span>Subtotal</span>
        <span>{total} ৳</span>
      </div>
      <div className="flex justify-between">
        <span>{d * 100}%discount </span>
        <span className="font-medium ">- {discount}৳ </span>
      </div>
      <div className="flex justify-between">
        <span>Shipping</span>
        <span className="font-medium ">Free</span>
      </div>

      <div className="h-px bg-gray-100 my-1" />
      <div className="flex justify-between items-center">
        <span className="text-base font-bold text-deep-aqua">Total</span>
        <span className="text-xl font-bold text-deep-aqua">{finalTotal} ৳</span>
      </div>
    </div>
  );
};

export default OrderSummary;
