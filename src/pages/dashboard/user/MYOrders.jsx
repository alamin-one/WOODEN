import { useParams } from 'react-router';
import Button from '../../../components/ui/Button';
import useAllOrder from '../../../hooks/useAllOrder';

const MYOrders = () => {
  const { id } = useParams();
  console.log(id);

  const currentOrde = useAllOrder();
  const cp = currentOrde?.find(f => f.id === id);
  console.log(cp);

  return (
    <>
      <div className="bg-white md:bg-pale-grey rounded-xl p-0 md:p-8">
        <div className="mb-5">
          {/* Header */}
          <div className="mb-8">
            <h1 className="text-xl font-bold text-deep-aqua">#{cp?.id}</h1>
            <p className="mt-1 text-sm">Lorem ipsum dolor sit.</p>
          </div>
          {/*  */}
          {/*             <div className="w-full  p-4 rounded-xl bg-deep-aqua/10 ">
              <p className="font-bold"> Package in Transit Tracking:</p>
              <p className="text-gray-400">
                {' '}
                TRK-492817305 · Est. delivery: May 24, 2025
              </p>
            </div> */}

          {/*  */}
          <div className=" mt-10 flex flex-col md:flex-row gap-5">
            <div className="w-full">
              <div className=" border border-deep-aqua/20 rounded-xl  overflow-hidden">
                <div className="p-4 border-b border-deep-aqua/20">
                  <p>
                    <strong>Order Items</strong>
                  </p>
                </div>
                {/* dynamic order list  */}
                <div className="">
                  {cp?.items?.map((item, index) => (
                    <div
                      key={index}
                      className="p-4 flex justify-between items-center gap-3 border-b border-deep-aqua/20 rounded"
                    >
                      <div className=" md:w-1/5">
                        <img src={item.thumbnail} alt="aaa" />
                      </div>
                      <div className="w-full">
                        <h6 className="text-deep-aqua">{item.title}</h6>
                        <p className="text-xs">
                          Color: Natural · Qty: {item.quantity}
                        </p>
                      </div>
                      <div className=" md:w-1/5">
                        <h6 className="text-deep-aqua"> {item.price}৳</h6>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
              <div className=" p-4 mt-5 border border-deep-aqua/20 rounded-xl  overflow-hidden">
                <h6 className="text-deep-aqua">Shipping Address</h6>
                <p className="text-xs flex flex-col gap-1">
                  <span>
                    {cp?.address?.firstName} {cp?.address?.lastName}
                  </span>
                  <span>E-mail : {cp?.address?.email}</span>
                  <span>phone :{cp?.address?.phone}</span>
                  <span>
                    {cp?.address?.city}, {cp?.address?.zipCode}
                  </span>
                  {cp?.address?.note && <span>{cp?.address?.note}</span>}
                </p>
              </div>
            </div>
            <div className="p-4 w-full md:w-1/2 border border-deep-aqua/20 rounded-xl">
              <h6 className="text-deep-aqua">Shipping Address</h6>

              <div className="py-1 mt-3 text-xs text-gray-600 border-b border-gray-300 flex justify-between">
                <span>Subtotal</span>
                <span>{cp?.subtotal}৳</span>
              </div>
              <div className="py-1 mt-3 text-xs text-gray-600 border-b border-gray-300 flex justify-between">
                <span>Shipping</span>
                <span className="text-green-500">{cp?.Shipping}</span>
              </div>
              <div className="py-1 mt-3 text-xs text-gray-600 border-b border-gray-300 flex justify-between">
                <span>Discount</span>
                <span className="text-red-500">-{cp?.discount}৳</span>
              </div>

              <div className="py-1 mt-3 text-xs text-gray-600 border-b border-gray-300 flex justify-between">
                <span>Total</span>
                <span>{cp?.total}৳</span>
              </div>

              <div className="mt-5 space-y-1">
                <Button className="w-full">Download Invoice </Button>
                <Button className="w-full">Request Return </Button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default MYOrders;
