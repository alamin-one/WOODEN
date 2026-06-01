import { useLocation, useParams } from 'react-router';
import { useDbcontext } from '../../contexts/dB/DbContextprovider';
import Button from '../../components/ui/Button';
import { useAuth } from '../../contexts/auth/AuthContextprovider';
import QntyCtrl from '../cart/QntyCtrl';
import rating from '../../utils/Rating';
import toast from 'react-hot-toast';

const SingleProduct = () => {
  const { user } = useAuth();
  const { products, adToCartFN } = useDbcontext();
  const { state } = useLocation();
  const { id } = useParams();
  const product = state?.pItem || products?.find(f => f.id === id);
  const ratings = rating(product?.rating);

  /*  */
  if (!product)
    return <div className="app-container  py-25 h-screen">Loading...</div>;
  return (
    <>
      <section>
        <div className="app-container  py-25">
          {/* product img & title */}
          <div className="flex flex-col sm:flex-row gap-10">
            {/* box one */}
            <div className="w-full sm:w-[50%]">
              <img
                src={product.thumbnail}
                alt=""
                className="w-full h-full max-h-125 md:max-h-125 border-2 rounded-2xl border-deep-aqua/10"
              />
              <div className="mt-4 flex gap-2 justify-end">
                {product?.images.map((pItem, pIndex) => (
                  <div
                    key={pIndex}
                    className="w-25 h-25 bg-pale-grey rounded-2xl overflow-hidden!"
                  >
                    <img
                      src={pItem}
                      alt={pIndex}
                      className="w-full h-full border rounded-2xl border-deep-aqua/20 hover:border-deep-aqua"
                    />
                  </div>
                ))}
              </div>
            </div>

            {/* box two */}
            <div className="w-full sm:w-[50%] flex flex-col justify-center items-start ">
              <div>
                <h2 className="">{product.title}</h2>
                <div className="flex gap-5">
                  <p className="text-[14px] flex items-center gap-2">
                    rating:
                    <span className="text-Deep-aqua flex gap-1 text-md">
                      {ratings}{' '}
                    </span>
                  </p>
                  <p className="text-[14px]">
                    reviews:
                    <span className="text-Deep-aqua"> {product.reviews}</span>
                  </p>
                </div>

                <h6 className="mt-3 text-3xl text-deep-aqua font-bold">
                  {product.price}৳
                </h6>
                <p className="text-[14px]">
                  stock:
                  <span className="text-deep-aqua"> {product.stock}</span>
                </p>
              </div>

              {user ? (
                <Button
                  onClick={() => adToCartFN(product)}
                  className="mt-8 mb-2"
                >
                  AddToCart
                </Button>
              ) : (
                <Button
                  onClick={() =>
                    toast.error(
                      'You need to be logged in to add items to cart.',
                    )
                  }
                  className="mt-8 mb-2"
                >
                  AddToCart
                </Button>
              )}

              <div className="flex gap-4 items-center">
                <QntyCtrl product={product} />

                <p className="text-[14px]">
                  stock:
                  <span className="text-deep-aqua"> {product.stock}</span>
                </p>
              </div>
              <div className="mt-3">
                <p className="text-[14px]">
                  SKU :
                  <span className="text-gray-400"> EDE{product.stock}#DTR</span>
                </p>
                <p className="text-[14px]">
                  Category :
                  <span className="text-gray-400"> {product.category}</span>
                </p>
                <p className="text-[14px]">
                  subCategory :
                  <span className="text-gray-400"> {product.subCategory}</span>
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

            <p>{product.description}</p>
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
