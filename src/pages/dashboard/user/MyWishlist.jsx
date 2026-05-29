import { product } from '../../../assets/images';

const MyWishlist = () => {
  return (
    <>
      <div className="bg-white md:bg-pale-grey rounded-xl p-0 md:p-8">
        {/* Header */}
        <div className="mb-8">
          <h1 className="text-3xl font-bold text-deep-aqua">My Wishlist</h1>
          <p className="mt-1 text-sm">4 items saved to your wishlist</p>
        </div>
        {/* my wishlist  product  */}
        <div className="grid grid-cols-2 md:grid-cols-4">
          <div className="space-y-2.5 group border border-deep-aqua/20 rounded-xl overflow-hidden">
            <div className="flex justify-center items-center bg-pale-grey rounded-2xl  overflow-hidden">
              <img
                src={product}
                alt={product}
                className="group-hover:scale-125 transition ease-in-out duration-500 max-w-20 max-h20"
              />
            </div>
            <div className="px-4 py-2 bg-white">
              <h6>VintageNest Bookshelf</h6>
              <div className="flex flex-row items-center gap-5 text-deep-aqua">
                <p className=" text-deep-aqua font-bold"> $120.00</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default MyWishlist;
