import LoginForm from './LoginForm';
import { signin } from '../../assets/images';
import Button from '../../components/ui/Button';
import RegisterForm from './RegisterForm';
import { Link } from 'react-router';

const SignINUP = () => {
  return (
    <>
      <section>
        <div className="app-container  py-25 min-h-screen flex justify-center items-center w-2/3 ">
          <div className="flex flex-col md:flex-row border border-gray-300 rounded-xl overflow-hidden">
            {/* Left */}
            <div
              className="w-full md:w-1/2 bg-cover bg-center rounded-b-xl md:rounded-b-none md:rounded-r-xl"
              style={{ backgroundImage: `url(${signin})` }}
            >
              <div className="w-full h-full p-10 flex flex-col justify-center items-center gap-2.5  md:rounded-b-none md:rounded-r-xl bg-[#28555ca1]">
                {/* Heading */}
                <h2 className="text-2xl font-semibold text-white text-center">
                  Login to The Wooden Touch
                </h2>
                <h2 className="text-2xl font-semibold text-white text-center">
                  Register
                </h2>

                {/* Sign Up Button */}
                <div className="mt-5 ">
                  <Button className="bg-white text-deep-aqua!">
                    <Link to={'/register'}>Register</Link>
                  </Button>
                </div>
                <div className="mt-5 ">
                  <Button className="bg-white text-deep-aqua!">
                    <Link to={'/login'}>LogIn</Link>
                  </Button>
                </div>
              </div>
            </div>

            {/* Right */}
            <div className="w-full md:w-1/2 p-10 flex flex-col gap-5 ">
              {/* */}
              <h2 className="text-2xl font-semibold text-teal-700 text-center">
                Sign in to The Wooden Touch
              </h2>
              <h2 className="text-2xl font-semibold text-teal-700 text-center">
                Register
              </h2>
              <RegisterForm />
              <LoginForm />
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default SignINUP;
