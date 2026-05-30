import { Link, NavLink } from 'react-router';
import icon from '../../assets/icons/icon';
import { logo } from '../../assets/images';
import { useState } from 'react';
import { useAuth } from '../../contexts/auth/AuthContextprovider';

const menu = [
  { title: 'Home', link: '/' },
  { title: 'Shop', link: '/shop' },
  { title: 'About', link: '/about' },
  { title: 'Contact', link: '/contact' },
  { title: 'Checkout', link: '/checkout' },
];

const Navbar = () => {
  const [isOpen, setIsopen] = useState(false);
  const { user } = useAuth();

  return (
    <>
      <header className="w-full border-b border-b-[#ddd]/90 bg-pale-grey backdrop-blur-3xl  top-0 left-0 right-0  fixed z-50">
        <div className=" max-w-7xl mx-auto px-5 py-2.5 flex justify-between items-center">
          {/* logo */}
          <Link to={'/'}>
          <div className="">
            <img src={logo} alt="logo" className="w-12" />
          </div>
          </Link>
          {/* desktop menu */}
          <div className=" hidden md:flex  gap-6">
            {menu.map((mItem, mIndex) => (
              <NavLink to={mItem.link} key={mIndex}>
                {({ isActive }) => (
                  <div className="text-[14px] text-gray-500 group cursor-pointer">
                    {mItem.title}
                    <div
                      className={`h-0.5 bg-deep-aqua rounded-full ${isActive ? 'w-full' : 'w-0 group-hover:w-full'} transition-all duration-300`}
                    ></div>
                  </div>
                )}
              </NavLink>
            ))}
          </div>
          {/*  */}
          <div className=" text-xl text-deep-aqua flex gap-4 items-center">
            <div>{icon.search}</div>
            <NavLink to={'/cart'}>{icon.cart}</NavLink>

            {user ? (
              <NavLink className="text-[18px]" to={'/my-account'}>
                {icon.user}
              </NavLink>
            ) : (
              <NavLink className="text-[18px]" to={'/login'}>
                {icon.logIn}
              </NavLink>
            )}

            <div onClick={() => setIsopen(prev => !prev)} className="md:hidden">
              {icon.menu}
            </div>
          </div>
        </div>
      </header>
      {/* mobile menu */}
      <div
        className={`md:hidden pt-4 bg-deep-aqua w-full left-0 rotate-0  transform 
          ${isOpen ? 'translate-y-15' : '-translate-y-full'} top-0 left-0 right-0  fixed transform transition-all ease-in-out duration200 z-10`}
      >
        {menu.map((mItem, mIndex) => (
          <NavLink
            to={mItem.link}
            key={mIndex}
            onClick={() => setIsopen(prev => !prev)}
          >
            <div className="text-white/90 py-2  px-5 border-b border-white/20">
              {mItem.title}
            </div>
          </NavLink>
        ))}
      </div>
      {/* search */}
    </>
  );
};
export default Navbar;
