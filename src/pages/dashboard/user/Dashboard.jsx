import { Link } from 'react-router';
import OrderTabileMobile from './OrderTabileMobile';
import OrdertabileDesktop from './OrdertabileDesktop';

function StatCard({ label, value, sub }) {
  return (
    <div className="bg-white rounded-2xl border border-gray-100 p-5 flex flex-col gap-1 shadow-sm">
      <span className="text-[11px] font-semibold tracking-widest text-gray-400 uppercase">
        {label}
      </span>
      <span className="text-3xl font-bold text-deep-aqua mt-1">{value}</span>
      {sub && (
        <span className={`text-sm font-medium text-emerald-600`}>{sub}</span>
      )}
    </div>
  );
}

const UDashboard = () => {
  return (
    <>
      <div className="bg-white md:bg-pale-grey rounded-xl p-0 md:p-8">
        {/* Header */}
        <div className="mb-8">
          <h1 className="text-3xl font-bold text-deep-aqua">
            Welcome back, John!
          </h1>
          <p className="mt-1 text-sm">
            Here's what's happening with your account today.
          </p>
        </div>

        {/* */}

        <div className="grid grid-cols-2 md:grid-cols-4 gap-4 mb-8">
          <StatCard label="Total Orders" value="24" sub="↑ 3 this month" />
          <StatCard
            label="Total Spent"
            value="$1,840"
            sub="↑ $320 this month"
          />
          <StatCard label="Wishlist Items" value="4" />
          <StatCard label="Reward Points" value="1,840" sub="= $18.40 value" />
        </div>

        {/* Orders Table */}
        <div className="bg-white rounded-2xl border border-gray-100 shadow-sm overflow-hidden">
          <div className="flex items-center justify-between px-6 py-4 border-b border-gray-100">
            <h6 className="">Recent Orders</h6>
            <Link className="text-sm font-medium text-teal-600 hover:text-teal-700 transition-colors">
              View All →
            </Link>
          </div>
          {/* desktop */}
          <OrdertabileDesktop />
          {/* mobile */}
          <OrderTabileMobile />
        </div>
      </div>
    </>
  );
};

export default UDashboard;
