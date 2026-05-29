const OrderTabileMobile = () => {
  return (
    <div className=" w-full lg:hidden p-2 mb-3 border-b border-gray-200">
      <table className="w-full  ">
        <tbody>
          <tr className="bg-white rounded-[10px] ">
            <td className="py-2 px-2 text-gray-700 text-[14px] font-bold">
              Order ID
            </td>
            <td className="py-2 px-2 text-gray-700 text-[14px]">
              #WT-2024-089
            </td>
          </tr>
          <tr className="bg-white rounded-[10px] ">
            <td className="py-2 px-2 text-gray-700 text-[14px] font-bold">
              Date
            </td>
            <td className="py-2 px-2 text-gray-700 text-[14px]">
              May 18, 2025
            </td>
          </tr>
          <tr className="bg-white rounded-[10px] ">
            <td className="py-2 px-2 text-gray-700 text-[14px] font-bold">
              Items
            </td>
            <td className="py-2 px-2 text-gray-700 text-[14px]">
              VintageNest Armchair
            </td>
          </tr>
          <tr className="bg-white rounded-[10px] ">
            <td className="py-2 px-2 text-gray-700 text-[14px] font-bold">
              Total
            </td>
            <td className="py-2 px-2 text-gray-700 text-[14px]">$120.00</td>
          </tr>
          <tr className="bg-white rounded-[10px] ">
            <td className="py-2 px-2 text-gray-700 text-[14px] font-bold">
              Status
            </td>
            <td className="py-2 px-2 text-gray-700 text-[14px]">Delivered</td>
          </tr>
        </tbody>
      </table>
    </div>
  );
};

export default OrderTabileMobile;
