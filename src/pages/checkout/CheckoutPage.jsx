import { useState } from 'react';
import CheckForm from './CheckForm';
import OrderSummery from './COTOrderSummery';
const CheckoutPage = () => {
  const [address, setAddress] = useState();

  

  return (
    <>
      <section className="bg-pale-grey">
        <div className="app-container  py-25">
          <div className="flex flex-col md:flex-row gap-5">
            <div className="w-full  md:w-[60%]">
              <div className="space-y-2.5">
                <h4>Shipping Address</h4>
                <CheckForm setAddress={setAddress} />
              </div>
              <div className=""></div>
            </div>
            <div className="w-full  md:w-[40%] space-y-2.5">
              <h4>Your Order</h4>
              <OrderSummery address={address} />
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default CheckoutPage;
