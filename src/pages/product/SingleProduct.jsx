import { Link } from 'react-router';
import Button from '../../components/ui/Button';
import QntyCtrl from '../cart/QntyCtrl';

const SingleProduct = () => {
  return (
    <>
      <section>
        <div className="app-container  py-25">
          {/* product img & title */}
          <div className="flex flex-col sm:flex-row gap-10">
            {/* box one */}
            <div className="w-full sm:w-[50%]">
              <img
                src="img/furniture03.png.png.png"
                alt=""
                className="w-full h-full max-h-125 md:max-h-125"
              />
              <div className="grid grid-cols-4">
                <div className="w-20 h-20 bg-green-50"></div>
                <div className="w-20 h-20 bg-green-50"></div>
                <div className="w-20 h-20 bg-green-50"></div>
              </div>
            </div>

            {/* box two */}
            <div className="w-full sm:w-[50%] flex flex-col justify-center items-start ">
              <div>
                <h2 className="">Papasan Chair</h2>
                <div className="flex gap-5">
                  <p className="text-[14px]">
                    rating:<span className="text-Deep-aqua"> 3.0</span>
                  </p>
                  <p className="text-[14px]">
                    reviews:<span className="text-Deep-aqua"> 214</span>
                  </p>
                </div>

                <h6 className="mt-3 text-3xl text-deep-aqua font-bold">
                  $120.00
                </h6>
                <p className="text-[14px]">
                  stock:
                  <span className="text-deep-aqua"> 20</span>
                </p>
              </div>
              <Button className="mt-8 mb-2">
                <Link>AddToCart</Link>
              </Button>
              <div className="flex gap-4 items-center">
                <QntyCtrl />
                <p className="text-[14px]">
                  stock:
                  <span className="text-deep-aqua"> 20</span>
                </p>
              </div>
              <div className="mt-3">
                <p className="text-[14px]">
                  SKU :<span className="text-gray-400">N/A</span>
                </p>
                <p className="text-[14px]">
                  Category :<span className="text-gray-400">N/A</span>
                </p>
                <p className="text-[14px]">
                  subCategory :<span className="text-gray-400">N/A</span>
                </p>

                {/* social icons */}
              </div>
            </div>
          </div>
        </div>
      </section>
      <section className=" bg-white">
        <div className="app-container  pb-5">
          {/* product Description */}
          <div className="md:mt-5 md:w-2/3">
            <h2>Product Description</h2>

            <p>
              Duis aute irure dolor in reprehenderit in voluptate velit esse
              cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat
              cupidatat non proident.Lorem ipsum dolor sit amet, consectetur
              adipisicing elit, sed do eiusmod tempor incididunt ut labore et
              dolore magna aliqua.
            </p>
          </div>

          {/* Related Products */}
          <div className="mt-8">
            <h4 className="cart text-Almost-black">Related Products</h4>

            {/* product container */}
            <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-4 xl:grid-cols-5 gap-5">
              {/* product card */}
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default SingleProduct;
