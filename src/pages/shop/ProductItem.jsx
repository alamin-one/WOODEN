import icon from '../../assets/icons/icon';
const ProductItem = ({ pItem }) => {
  return (
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
          <p className=" text-deep-aqua font-bold ">{pItem.price}৳</p>
          {icon.heartSodil}
        </div>
      </div>
    </div>
  );
};

export default ProductItem;
