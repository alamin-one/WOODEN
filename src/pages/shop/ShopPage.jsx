import { product, shopbenner } from '../../assets/images';
import icon from '../../assets/icons/icon';
import CategoryFilter from '../../utils/CategoryFilter';
import Benner from '../../components/shared/Benner';

const ShopPage = () => {
  const category = [
    { title: 'cheair' },
    { title: 'sufa' },
    { title: 'table' },
    { title: 'dyning' },
  ];

  /* local satate */

  return (
    <>
      <Benner title="Shop" bg={shopbenner} />
      <section className="pt-10 pb-10 bg-white">
        <div className="app-container flex gap-5">
          {/* filter */}
          <div className="w-1/5">
            <div className="p-4 space-y-5 bg-white border border-gray-50 rounded-xl shadow-[0px_0px_20px_10px_rgba(0,0,0,0.03)]">
              <div className="space-y-4  mtb-10">
                {category.map((item, index) => (
                  <CategoryFilter label={item.title} key={index} />
                ))}
              </div>
            </div>
          </div>

          {/* products */}
          <div className="w-full">
            <div className="grid grid-cols-2 sm:grid-cols-3  lg:grid-cols-4  xl:grid-cols-4 gap-5">
              {/* product item */}
              <div className="space-y-2.5 group ">
                <div className="bg-pale-grey rounded-2xl  overflow-hidden">
                  <img
                    src={product}
                    alt={product}
                    className="group-hover:scale-125 transition ease-in-out duration-500"
                  />
                </div>
                <div>
                  <h6>VintageNest Bookshelf</h6>
                  <div className="flex flex-row items-center gap-5 text-deep-aqua">
                    <p className=" text-deep-aqua font-bold"> $120.00</p>
                    {icon.heartSodil}
                  </div>
                </div>
              </div>
              {/* product item */}
              <div className="space-y-2.5 group ">
                <div className="bg-pale-grey rounded-2xl  overflow-hidden">
                  <img
                    src={product}
                    alt={product}
                    className="group-hover:scale-125 transition ease-in-out duration-500"
                  />
                </div>
                <div>
                  <h6>VintageNest Bookshelf</h6>
                  <div className="flex flex-row items-center gap-5 text-deep-aqua">
                    <p className=" text-deep-aqua font-bold"> $120.00</p>
                    {icon.heartSodil}
                  </div>
                </div>
              </div>
              {/* product item */}
              <div className="space-y-2.5 group ">
                <div className="bg-pale-grey rounded-2xl  overflow-hidden">
                  <img
                    src={product}
                    alt={product}
                    className="group-hover:scale-125 transition ease-in-out duration-500"
                  />
                </div>
                <div>
                  <h6>VintageNest Bookshelf</h6>
                  <div className="flex flex-row items-center gap-5 text-deep-aqua">
                    <p className=" text-deep-aqua font-bold"> $120.00</p>
                    {icon.heartSodil}
                  </div>
                </div>
              </div>
              {/* product item */}
              <div className="space-y-2.5 group ">
                <div className="bg-pale-grey rounded-2xl  overflow-hidden">
                  <img
                    src={product}
                    alt={product}
                    className="group-hover:scale-125 transition ease-in-out duration-500"
                  />
                </div>
                <div>
                  <h6>VintageNest Bookshelf</h6>
                  <div className="flex flex-row items-center gap-5 text-deep-aqua">
                    <p className=" text-deep-aqua font-bold"> $120.00</p>
                    {icon.heartSodil}
                  </div>
                </div>
              </div>
              {/* product item */}
              <div className="space-y-2.5 group ">
                <div className="bg-pale-grey rounded-2xl  overflow-hidden">
                  <img
                    src={product}
                    alt={product}
                    className="group-hover:scale-125 transition ease-in-out duration-500"
                  />
                </div>
                <div>
                  <h6>VintageNest Bookshelf</h6>
                  <div className="flex flex-row items-center gap-5 text-deep-aqua">
                    <p className=" text-deep-aqua font-bold"> $120.00</p>
                    {icon.heartSodil}
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default ShopPage;
