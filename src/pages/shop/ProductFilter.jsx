import icon from '../../assets/icons/icon';
import CategoryFilter from '../../utils/CategoryFilter';
import BrandFilter from '../../utils/BrandFilter';
import Button from '../../components/ui/Button';
import { useDbcontext } from '../../contexts/dB/DbContextprovider';
import Loader from '../../components/ui/Loader';
import { useEffect, useState } from 'react';
/*  */

const ProductFilter = ({ products, setFiltered }) => {
  const { catError, catLoading, category } = useDbcontext();
  const [isFilterCategory, setIsFilterCategory] = useState([]);
  const [brand, setBrand] = useState([]);
  const [isFilterBrand, setIsFilterBrand] = useState([]);

  /* sat All Filtered  products */
  useEffect(() => {
    const setFilteredP = () => {
      let filtered = products;
      /* category filter */
      if (isFilterCategory.length > 0) {
        filtered = filtered.filter(f => isFilterCategory.includes(f.category));
      }

      /* brand filter */
      if (isFilterBrand.length > 0) {
        filtered = filtered.filter(f =>
          isFilterBrand.includes(f.brand.trim().toLowerCase()),
        );
      }
      setFiltered(filtered);
    };
    setFilteredP();
  }, [products, isFilterCategory, isFilterBrand]);

  /* set category */
  const isFilterCategoryFN = (label, checked) => {
    const trim = label.trim().toLowerCase();
    setIsFilterCategory(prev => {
      if (checked) {
        return prev.filter(f => f !== trim);
      } else {
        return [...prev, trim];
      }
    });
  };

  /* brand Filter All FN */
  useEffect(() => {
    const brandFN = () => {
      let b = [...new Set(products?.map(p => p.brand.trim().toLowerCase()))];
      setBrand(b);
    };
    brandFN();
  }, [products]);

  const isFilterBrandFN = (label, checked) => {
    const trim = label.trim().toLowerCase();
    setIsFilterBrand(prev => {
      if (checked) {
        return prev.filter(b => b !== trim);
      } else {
        return [...prev, trim];
      }
    });
  };

  return (
    <>
      <div className="border rounded-md border-deep-aqua/20 bg-pale-grey">
        {/*  */}
        <div className=" p-4 pb-1 bg-pale-grey  border-b border-deep-aqua/20 text-deep-aqua text-2xl flex gap-1 ">
          {icon.filter}
          <h5 className="text-deep-aqua">All Filter</h5>
        </div>
        {/*  */}
        <div className="p-4 ">
          <h6 className="mb-3 text-deep-aqua text-xl">Category</h6>
          <div className=" pb-4  mt-0 space-y-4  border-b border-deep-aqua/20 ">
            {catError && 'There was an Error'}
            {!catError &&
              !catLoading &&
              catError.category === 0 &&
              'Data not Found!!'}
            {catLoading && <Loader />}
            {!catError &&
              !catLoading &&
              category.map((cItem, CIndex) => (
                <CategoryFilter
                  label={cItem.name}
                  key={CIndex}
                  isFilterCategoryFN={isFilterCategoryFN}
                />
              ))}
          </div>
          {/* brand */}
          {/*  */}
          <h6 className="mb-3 mt-4 text-deep-aqua text-xl">Brand</h6>
          <div className="pb-4  mt-0 space-y-4  border-b border-deep-aqua/20">
            {catError && 'There was an Error'}
            {!catError &&
              !catLoading &&
              catError.category === 0 &&
              'Data not Found!!'}
            {catLoading && <Loader />}
            {!catError &&
              !catLoading &&
              brand?.map((cItem, CIndex) => (
                <BrandFilter
                  label={cItem}
                  key={CIndex}
                  isFilterBrandFN={isFilterBrandFN}
                />
              ))}
          </div>
        </div>
        <div className="p-4 ">
          <Button className="w-full mt-5">Clear Filter</Button>
        </div>
      </div>
    </>
  );
};

export default ProductFilter;
