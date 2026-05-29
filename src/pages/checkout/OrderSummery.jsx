import { useState } from 'react';
import Button from '../../components/ui/Button';
import { Link } from 'react-router';

const OrderSummery = () => {
  const [discount, setDiscount] = useState('');

  return (
    <div className="w-full max-w-sm bg-white rounded-2xl border border-gray-200 overflow-hidden">
      {/* Cart Items */}
      <div className="px-5 pt-5 pb-4 flex flex-col gap-4">
        <div className="flex items-center gap-3">
          {/* Image */}
          <div className="relative shrink-0">
            <img
              src={'item.image'}
              alt={'item.name'}
              className="w-14 h-14 rounded-xl object-cover border border-gray-200"
            />
            <span className="absolute -top-2 -right-2 w-4 h-4 bg-deep-aqua text-white text-[8px] font-semibold rounded-full flex items-center justify-center">
              {'item.qty'}
            </span>
          </div>

          {/* Info */}
          <div className="flex-1 min-w-0">
            <p className="text-sm font-medium text-almost-black leading-snug truncate">
              {'item.name'}
            </p>
            <p className="text-xs text-gray-400 mt-0.5">{'item.variant'}</p>
          </div>

          {/* Price */}
          <p className="text-sm font-semibold text-deep-aqua whitespace-nowrap">
            prie
          </p>
        </div>
      </div>

      <div className="h-px bg-gray-100 mx-5" />

      {/* Discount Code */}
      <div className="px-5 py-4 flex items-center gap-2">
        <div className="flex flex-1 items-center gap-2 border border-gray-200 rounded-lg px-3 py-2.5 w-2/3 ">
          <svg
            className="w-4 h-4 text-gray-400 shrink-0"
            viewBox="0 0 24 24"
            fill="none"
            stroke="currentColor"
            strokeWidth="2"
          >
            <path d="M20.59 13.41l-7.17 7.17a2 2 0 01-2.83 0L2 12V2h10l8.59 8.59a2 2 0 010 2.82z" />
            <line x1="7" y1="7" x2="7.01" y2="7" />
          </svg>
          <input
            value={discount}
            onChange={e => setDiscount(e.target.value)}
            placeholder="Discount code"
            className="flex-1 text-sm text-gray-700 bg-transparent outline-none placeholder:text-gray-400"
          />
        </div>
        <Button className="m-5">
          <Link> Apply</Link>
        </Button>
      </div>

      <div className="h-px bg-gray-100 mx-5" />

      {/* Price Breakdown */}
      <div className="px-5 py-4 flex flex-col gap-2.5">
        <div className="flex justify-between text-sm text-gray-600">
          <span>Subtotal</span>
          <span className="font-medium text-gray-900">100</span>
        </div>
        <div className="flex justify-between text-sm text-gray-600">
          <span>Shipping</span>
          <span className="font-medium text-gray-900">${'shipping'}</span>
        </div>
        <div className="flex justify-between text-sm text-gray-600">
          <div className="flex items-center gap-1">
            <span>taxes</span>
          </div>
          <span className="font-medium text-gray-900">txt</span>
        </div>
      </div>

      <div className="h-px bg-gray-100 mx-5" />

      {/* Total */}
      <div className="px-5 py-4 flex justify-between items-center">
        <span className="text-base font-semibold text-deep-aqua">Total</span>
        <div className="flex items-start gap-0.5">
          <span className="text-[10px] text-gray-500 mt-1">*</span>
          <span className="text-xl font-bold text-deep-aqua">total</span>
        </div>
      </div>

      {/* CTA Button */}
      <Button className="m-5">
        <Link>Continue to Payment</Link>
      </Button>
    </div>
  );
};

export default OrderSummery;
