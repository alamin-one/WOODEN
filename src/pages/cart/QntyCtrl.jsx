import { useQntyCtrl } from '../../contexts/qnty/QntyCtrlProvider';

const QntyCtrl = ({ product }) => {
  const { quantityFn, qty } = useQntyCtrl();

  return (
    <div className="mt-2 w-32 h-8 flex  bg-pale-grey border border-gray-100 rounded-md ">
      <div
        onClick={() => quantityFn('inc', product)}
        className="w-1/3 h-full flex items-center justify-center cursor-pointer"
      >
        +
      </div>
      <div className="bg-white w-1/3 h-full flex items-center justify-center">
        {qty}
      </div>
      <div
        onClick={() => quantityFn('dec', product)}
        className="w-1/3 h-full flex items-center justify-center cursor-pointer"
      >
        -
      </div>
    </div>
  );
};

export default QntyCtrl;
