import icon from '../../assets/icons/icon';
import { useDbcontext } from '../../contexts/dB/DbContextprovider';
import { Link } from 'react-router';
import Loader from '../../components/ui/Loader';

const Bestselling = () => {
  const { error, loading, products } = useDbcontext();
  const isBestSeller = products?.filter(b => b.isBestSeller === true);
  return (
    <>
      <section className="">
        <div className="app-container pt-0 pb-10 space-y-10">
          {/*  */}
          <div className=" flex flex-col justify-center items-center ">
            <h2>Best selling Furniture</h2>
            <p className="text-center">
              Shop versatile furniture perfect for multi-use spaces
            </p>
          </div>

          {/*  <!--  product container --> */}
          {error && 'There was an Error'}
          {loading && <Loader />}
          <div className="grid grid-cols-2 sm:grid-cols-3  lg:grid-cols-4  xl:grid-cols-5 gap-5">
            {/* product item */}
            {!error && !loading && products.length == 0 && 'Data not Found!!'}
            {!error &&
              !loading &&
              isBestSeller.slice(0, 10).map((pItem, pIndex) => (
                <Link to={`/singleproduct/${pItem.id}`} key={pIndex}>
                  <div className="space-y-2.5 group ">
                    <div className="flex justify-center items-center bg-pale-grey rounded-2xl  overflow-hidden">
                      <img
                        src={pItem.thumbnail}
                        alt={pItem.thumbnail}
                        className="h-50  group-hover:scale-125 transition ease-in-out duration-500"
                      />
                    </div>
                    <div>
                      <h6 className="line-clamp-1">{pItem.title}</h6>
                      <div className="flex flex-row items-center gap-5 text-deep-aqua">
                        <p className=" text-deep-aqua font-bold ">
                          {pItem.price}৳
                        </p>
                        {icon.heartSodil}
                      </div>
                    </div>
                  </div>
                </Link>
              ))}

            {/*  */}
          </div>
        </div>
      </section>
    </>
  );
};

export default Bestselling;
