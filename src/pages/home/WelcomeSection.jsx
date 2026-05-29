import { Link } from 'react-router';
import { banner2, banner3, banner4 } from '../../assets/images';

const WelcomeSection = () => {
  return (
    <section className="bg-white">
      <div className="app-container py-10  md:py-20 flex flex-col lg:flex-row gap-5">
        <div className="w-full lg:w-[40%] flex  flex-col sm:flex-row lg:flex-col p-7.5 space-y-1.25 rounded-2xl bg-deep-aqua ">
          <div className=" sm:w-[50%] lg:w-full flex flex-col justify-center items-start space-y-2.5">
            <h4 className="cart text-white">Innovative Furniture</h4>
            <p className="p text-white">
              Upgrade your home with our innovative furniture designs.
            </p>

            <Link
              to={'/shop'}
              className="text-sm font-medium text-white border-b px-0.5 hover:tracking-[2px] transition-all duration-300"
            >
              Shop Now
            </Link>
          </div>
          <div className="sm:w-[50%] lg:w-full">
            <img src={banner2} alt={banner2} />
          </div>
        </div>
        <div className="w-full lg:w-[60%] space-y-5">
          <div className="w-full  p-7.5 space-y-1.25 flex flex-col sm:flex-row rounded-2xl bg-pale-grey">
            <div className="flex flex-col justify-center items-start space-y-2.5">
              <h4>Innovative Furniture</h4>
              <p>Upgrade your home with our innovative furniture designs.</p>

              <Link
                href="Shop.html"
                className="text-sm font-medium text-Almost-black border-b px-0.5 hover:tracking-[2px] transition-all duration-300"
              >
                Shop Now
              </Link>
            </div>
            <img src={banner3} alt={banner3} />
          </div>
          <div className="w-full  p-7.5 space-y-1.25 flex flex-col sm:flex-row rounded-2xl bg-pale-grey">
            <div className="flex flex-col justify-center items-start space-y-2.5">
              <h4 className="cart text-Almost-black ">Innovative Furniture</h4>
              <p className="p text-Almost-black ">
                Upgrade your home with our innovative furniture designs.
              </p>
              <Link
                href="Shop.html"
                className="text-sm font-medium text-Almost-black border-b px-0.5 hover:tracking-[2px] transition-all duration-300"
              >
                Shop Now
              </Link>
            </div>
            <img src={banner4} alt={banner4} />
          </div>
        </div>
      </div>
    </section>
  );
};

export default WelcomeSection;
