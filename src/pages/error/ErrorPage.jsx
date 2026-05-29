import { Link } from 'react-router';
import Button from '../../components/ui/Button';
import icon from '../../assets/icons/icon';

const ErrorPage = () => {
  return (
    <section className="bg-white ">
      <div className=" min-h-screen  app-container  py-25 flex flex-col items-center justify-center">
        <p className="text-[160px] font-bold text-gray-100 leading-none select-none">
          404
        </p>
        <p className="text-xs text-gray-500">
          Oops! The page you're looking for doesn't exist or has been moved.
        </p>
        <div className=" flex gap-5 mt-5">
          <Button>
            <Link to={'/'}>
              <div className="flex items-center justify-between gap-2">
                {icon.home}Back to Home
              </div>
            </Link>
          </Button>

          <Button>
            <Link to={'/shop'}>Browse Shop</Link>
          </Button>
        </div>
      </div>
    </section>
  );
};

export default ErrorPage;
