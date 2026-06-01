import { NavLink, Outlet } from 'react-router';
import icon from '../../../assets/icons/icon';
import { useAuth } from '../../../contexts/auth/AuthContextprovider';

const UserDeshboard = () => {
  const { user, signOutFN } = useAuth();

  const userDash = [
    { title: 'Dashboard', icon: icon.dashboard, path: '/my-account/dashboard' },
    // { title: 'My Orders', icon: icon.user, path: '/my-account/orders' },
    { title: 'Wishlist', icon: icon.heartSodil, path: '/my-account/wishlist' },
    { title: 'Addresses', icon: icon.location, path: '/my-account/addresses' },
    { title: 'Settings', icon: icon.seting, path: '/my-account/settings' },
  ];
  const capitalize = str => str?.charAt(0).toUpperCase();
  const firstLetter = capitalize(user?.displayName ? user?.displayName : '!');

  const photoURL = user?.photoURL
    ? user.photoURL
    : `https://placehold.co/100x100/0094AD/FFFFFF?text=${firstLetter}`;

  return (
    <>
      <section className="bg-white">
        <div className="app-container  py-19 flex flex-col lg:flex-row gap-5">
          {/* menu */}
          <div className="w-full lg:w-1/5  ">
            <div className="w-full m-h-80 rounded-md bg-white border border-pale-grey">
              <div className="flex gap-2 p-4 border-b border-deep-aqua/20 bg-pale-grey">
                {' '}
                <img
                  src={photoURL}
                  referrerPolicy="no-referrer"
                  alt={photoURL}
                  className="rounded-full w-10 h-10"
                />
                <span>
                  <p className="text-md font-bold text-deep-aqua">
                    {user?.displayName}
                  </p>
                  <p className="text-xs text-gray-400 leading-3 mt-1 break-all">
                    {user?.email}
                  </p>
                </span>
              </div>
              <div className=" pt-2 space-y-1">
                {userDash.map((l, i) => (
                  <NavLink
                    key={i}
                    to={l.path}
                    className={({ isActive }) =>
                      `flex justify-start items-center gap-1 px-3 py-2 border-b text-gray-500 text-[14px] border-gray-100 rounded-md bg-white hover:bg-[#E7F5F3] cursor-pointer  ${isActive ? 'bg-[#E7F5F3]!' : 'bg-white'}`
                    }
                  >
                    {l.icon} {l.title}
                  </NavLink>
                ))}

                <div
                  onClick={signOutFN}
                  className="flex justify-start items-center gap-1 px-3 py-2 border-b text-gray-500 text-[14px] border-gray-100 rounded-md bg-white hover:bg-[#E7F5F3] cursor-pointer "
                >
                  {icon.logOup} Logout
                </div>
              </div>
            </div>
          </div>
          {/* content */}
          <div className="w-full min-h-screen bg-white">
            <Outlet />
          </div>
        </div>
      </section>
    </>
  );
};

export default UserDeshboard;
