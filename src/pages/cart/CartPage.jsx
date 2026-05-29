import { Link } from 'react-router';
import Button from '../../components/ui/Button';
import QntyCtrl from './QntyCtrl';
const CartPage = () => {
  return (
    <section className="bg-white min-h-175">
      <div className="app-container  py-25  flex gap-5 flex-col md:flex-row">
        {/* Left  */}
        <div className="flex-1 flex flex-col gap-4  w-full md:w-[70%]">
          {/* Item 1 */}
          <div className="bg-white border border-gray-200 rounded-2xl p-4 flex  flex-col md:flex-row justify-between items-center gap-4">
            <div className="w-full flex justify-between items-center gap-5">
              <img
                src="https://placehold.co/80x80/f3f4f6/9ca3af?text=Chair"
                alt="product"
                className="w-20 h-20 rounded-xl object-cover bg-gray-100 shrink-0"
              />
              <div className="flex-1 min-w-0">
                <p className="text-sm font-semibold text-gray-900">
                  VintageNest Armchair
                </p>
                <p className="text-xs text-gray-400 mt-0.5">
                  Color: Natural | Size: Medium
                </p>
                <p className="text-sm font-bold text-cyan-500 mt-2">$120.00</p>
              </div>
            </div>

            <div className="w-full flex justify-between items-center gap-5">
              <QntyCtrl />

              <p className="text-sm font-bold text-gray-900 w-20 text-right">
                $120.00
              </p>
              <button className="ml-1 text-gray-300 hover:text-red-400">
                <svg
                  className="w-5 h-5"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="2"
                >
                  <polyline points="3 6 5 6 21 6" />
                  <path d="M19 6l-1 14a2 2 0 01-2 2H8a2 2 0 01-2-2L5 6" />
                  <path d="M10 11v6M14 11v6" />
                  <path d="M9 6V4a1 1 0 011-1h4a1 1 0 011 1v2" />
                </svg>
              </button>
            </div>
          </div>

          {/* Continue Shopping */}
          <button className="flex items-center gap-2 text-sm text-gray-400 hover:text-gray-600 mt-1 w-fit">
            <svg
              className="w-4 h-4"
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              strokeWidth="2"
            >
              <path d="M19 12H5M12 19l-7-7 7-7" />
            </svg>
            Continue Shopping
          </button>
        </div>

        {/* Right*/}
        <div className=" shrink-0 flex flex-col gap-4  w-full md:w-[30%]">
          {/* Summary */}
          <div className=" bg-white border border-gray-200 rounded-2xl p-5">
            <p className="text-deep-aqua text-sm font-semibold  mb-4">
              Order Summary
            </p>

            <div className="flex flex-col gap-3 text-sm text-gray-600">
              <div className="flex justify-between">
                <span>Subtotal</span>
                <span>$568.00</span>
              </div>
              <div className="flex justify-between">
                <span>Shipping</span>
                <span className="font-medium ">$9.00</span>
              </div>
              <div className="flex justify-between">
                <span>taxes</span>
                <span className="font-medium ">9.00</span>
              </div>

              <div className="h-px bg-gray-100 my-1" />
              <div className="flex justify-between items-center">
                <span className="text-base font-bold text-deep-aqua">
                  Total
                </span>
                <span className="text-xl font-bold text-deep-aqua">
                  $582.00
                </span>
              </div>
            </div>

            <Button className="mt-5">
              <Link>Continue to Payment</Link>
            </Button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default CartPage;
