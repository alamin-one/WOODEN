import { Link } from 'react-router';

const OrderTabileMobile = ({ currentOrder }) => {
  return (
    <div className="w-full lg:hidden p-2 bg-pale-grey text-gray-600 text-[13px]" >
      <table className="w-full">
        {currentOrder?.map((o, i) => (
          <tbody key={i} className="w-full">
            <tr>
              <td className="py-2 px-2 text-[14px] font-bold">Order ID</td>
              <td className="py-2 px-2 text-gray-500 text-[14px]">#{o?.id}</td>
            </tr>
            <tr>
              <td className="py-2 px-2 border-b border-gray-200 ">
                Date
              </td>
              <td className="py-2 px-2 border-b border-gray-200">
                {o?.createdAt?.toDate().toLocaleDateString()}
              </td>
            </tr>
            <tr>
              <td className="py-2 px-2 border-b border-gray-200 ">
                Items
              </td>
              <td className="py-2 px-2 border-b border-gray-200">
                {o?.items?.length}
              </td>
            </tr>
            <tr>
              <td className="py-2 px-2 border-b border-gray-200 ">
                Total
              </td>
              <td className="py-2 px-2 border-b border-gray-200">
                {o?.total}৳
              </td>
            </tr>
            <tr>
              <td className="py-2 px-2 border-b border-gray-200 ">
                Status
              </td>
              <td className="py-2 px-2 border-b border-gray-200">
                {o?.status}
              </td>
            </tr>
            <tr>
              <td className="py-2 px-2 pb-4">
                <Link
                  to={`orders/${o?.id}`}
                  className="text-sm font-medium text-teal-600 hover:text-teal-700"
                >
                  View details →
                </Link>
              </td>
            </tr>
          </tbody>
        ))}
      </table>
    </div>
  );
};

export default OrderTabileMobile;
