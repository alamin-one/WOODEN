import LoginForm from './LoginForm';
import { signin } from '../../assets/images';
import Button from '../../components/ui/Button';
import RegisterForm from './RegisterForm';
import { Link, useLocation } from 'react-router';
import { useAuth } from '../../contexts/auth/AuthContextprovider';
import icon from '../../assets/icons/icon';

/*  */
const SignINUP = () => {
  const { signinGoogle } = useAuth();
  const l = useLocation();
  return (
    <>
      <section>
        <div className="app-container  py-25 min-h-screen flex justify-center items-center w-2/3 ">
          <div className="w-full md:w-2/3 flex flex-col md:flex-row border border-gray-300 rounded-xl overflow-hidden">
            {/* Left */}
            <div
              className="w-full md:w-1/2 bg-cover bg-center rounded-b-xl md:rounded-b-none md:rounded-r-xl"
              style={{ backgroundImage: `url(${signin})` }}
            >
              <div className="w-full h-full p-10 flex flex-col justify-center items-center gap-2.5  md:rounded-b-none md:rounded-r-xl bg-[#28555ca1]">
                {/* Sign Up Button */}
                <div className="mt-5 ">
                  {l.pathname === '/login' ? (
                    <Button className="bg-white text-deep-aqua!">
                      <Link to={'/register'}>Register</Link>
                    </Button>
                  ) : (
                    <Button className="bg-white text-deep-aqua!">
                      <Link to={'/login'}>LogIn</Link>
                    </Button>
                  )}
                </div>
              </div>
            </div>

            {/* Right */}
            <div className="w-full md:w-1/2 p-10 flex flex-col gap-5 ">
              {/* */}
              <h2 className="text-2xl font-semibold text-teal-700 text-center">
                {l.pathname === '/login'
                  ? ' Sign in to The Wooden Touch'
                  : ' Register'}
              </h2>
              {l.pathname === '/login' ? <LoginForm /> : <RegisterForm />}
              <div className="flex flex-col  items-center">
                <div className=" text-gray-600 w-full flex items-center gap-2">
                  <span className="w-full bg-gray-300 h-px"></span>
                  <span>or</span>
                  <span className="w-full bg-gray-300 h-px"></span>
                </div>
                <div
                  onClick={signinGoogle}
                  className="mt-2 flex items-center gap-1 text-xl text-deep-aqua cursor-pointer"
                >
                  {icon.google}{' '}
                  <span className="text-xs">Contineu With google</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default SignINUP;
