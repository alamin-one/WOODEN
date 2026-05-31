import { shopbenner } from '../../assets/images';
import Benner from '../../components/shared/Benner';
import { useDbcontext } from '../../contexts/dB/DbContextprovider';
import { Link } from 'react-router';
import Loader from '../../components/ui/Loader';
import InfiniteScroll from 'react-infinite-scroll-component';
import { useState } from 'react';
import ProductItem from './ProductItem';
import ProductFilter from './ProductFilter';

const ShopPage = () => {
  const { error, loading, products } = useDbcontext();
  const [filtered, setFiltered] = useState([]);
  /* scroling products FN*/
  const [isNext, setIsNext] = useState(8);
  const isScroll = filtered?.slice(0, isNext) || [];
  const fetchMore = () => {
    setIsNext(prev => prev + 5);
  };
  /*  */
  return (
    <>
      <Benner title="Shop" bg={shopbenner} />
      <div className="mt-8 px-5 flex flex-col justify-center items-center ">
        <h2>Out Furniture</h2>
        <p className="text-center">
          Shop versatile furniture perfect for multi-use spaces
        </p>
      </div>

      <section className="pt-10 pb-10 bg-white">
        <div className="app-container flex flex-col md:flex-row gap-5">
          {/* filter */}
          <div className="w-full md:w-1/5">
            <ProductFilter products={products} setFiltered={setFiltered} />
          </div>
          {/* products */}
          <div className="w-full">
            {error && 'There was an Error'}
            {loading && <Loader />}
            <InfiniteScroll
              next={fetchMore}
              dataLength={isScroll?.length}
              hasMore={isNext < products?.length || 0}
            >
              <div className="grid grid-cols-2 sm:grid-cols-3  lg:grid-cols-4  xl:grid-cols-4 gap-5">
                {/* product item */}
                {!error &&
                  !loading &&
                  products.length == 0 &&
                  'Data not Found!!'}
                {!error &&
                  !loading &&
                  isScroll.map((pItem, pIndex) => (
                    <Link
                      key={pIndex}
                      to={`/singleproduct/${pItem.id}`}
                      state={{ pItem }}
                    >
                      <ProductItem pItem={pItem} />
                    </Link>
                  ))}
                {/*  */}
              </div>
            </InfiniteScroll>
          </div>
        </div>
      </section>
    </>
  );
};

export default ShopPage;
