import CheckForm from './CheckForm';
import OrderSummery from './OrderSummery';
const CheckoutPage = () => {
  return (
    <>
      <section className="bg-pale-grey">
        <div className="app-container  py-25">
          <div className="flex flex-col md:flex-row gap-5">
            <div className="w-full  md:w-[60%]">
              <div className="space-y-2.5">
                <h4>Shipping Address</h4>
                <CheckForm />
              </div>
              <div className=""></div>
            </div>
            <div className="w-full  md:w-[40%] space-y-2.5">
              <h4>Your Order</h4>
              <OrderSummery />
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default CheckoutPage;
