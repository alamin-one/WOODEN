import { Link } from 'react-router';



const table = ['Order ID', 'Date', 'Items', 'Total', 'Status', 'Action'];

const statusStyles = {
  Delivered: 'bg-emerald-100 text-emerald-700',
  Shipped: 'bg-sky-100 text-sky-700',
  Processing: 'bg-amber-100 text-amber-700',
};
const OrdertabileDesktop = ({ currentOrder }) => {
  console.log(currentOrder)
  return (
    <div className=" w-full hidden lg:block">
      <table className="w-full ">
        <thead>
          <tr className="bg-pale-grey">
            {table.map(h => (
              <th
                key={h}
                className="text-left text-[11px] font-semibold tracking-widest text-gray-400 uppercase px-6 py-3"
              >
                {h}
              </th>
            ))}
          </tr>
        </thead>
        <tbody>
          {currentOrder?.map((o, i) => (
            <tr
              key={i}
              className={`border-t border-gray-50 transition-colors `}
            >
              <td className="px-6 py-4 text-sm font-medium text-gray-600">
                #{o.id}
              </td>
              <td className="px-6 py-4 text-sm text-gray-500">{o.date}</td>
              <td className="px-6 py-4 text-sm text-gray-700">
                {o.items.length}
              </td>
              <td className="px-6 py-4 text-sm font-semibold text-gray-800">
                {o.total}
              </td>
              <td className="px-6 py-4">
                <span
                  className={`text-xs font-semibold px-3 py-1 rounded-full ${statusStyles[o.status]}`}
                >
                  {o.status}
                </span>
              </td>
              <td className="px-6 py-4">
                <Link
                  to={`orders/${o.id}`}
                  className="text-sm font-medium text-teal-600 hover:text-teal-700 transition-colors"
                >
                  View
                </Link>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default OrdertabileDesktop;
