import Button from '../../components/ui/Button';
import { banner5 } from '../../assets/images';
import { Link } from 'react-router';

const OfferSection = () => {
  return (
    <>
      <section className=" bg-pale-grey ">
        <div className="app-container  py-5    flex justify-between flex-col sm:flex-row rounded-2xl bg-Pale-grey ">
          <div className="w-full md:w-[50%]  flex flex-col justify-center">
            <h2>Flat 30% off limited time offer!</h2>

            <div className="flex flex-rows gap-5 my-5 ">
              <div className="p-2 px-10 border border-gray-300 rounded-sm">
                <p className="text-deep-aqua text-3xl">00</p>
                <p className="text-deep-aqua text-[12px]">Days</p>
              </div>
              <div className="p-2 px-10 border border-gray-300 rounded-sm">
                <p className="text-deep-aqua text-3xl">00</p>
                <p className="text-deep-aqua text-[12px]">Days</p>
              </div>
              <div className="p-2 px-10 border border-gray-300 rounded-sm">
                <p className="text-deep-aqua text-3xl">00</p>
                <p className="text-deep-aqua text-[12px]">Days</p>
              </div>
            </div>
            <Button className="w-fit">
              <Link to={'/shop'}>Buye Now</Link>
            </Button>
          </div>

          <div className="w-full  md:w-[50%] ">
            <img src={banner5} alt={banner5} />
          </div>
        </div>
        <div />
      </section>
    </>
  );
};

export default OfferSection;
