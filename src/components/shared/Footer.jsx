import { logo } from '../../assets/images';
import icon from '../../assets/icons/icon';
import { Link } from 'react-router';

const collection = [
  { title: 'Living Room Furniture', link: '#' },
  { title: 'Dining Room Furniture', link: '#' },
  { title: 'Office Furniture', link: '#' },
  { title: 'Outdoor Furniture', link: '#' },
];
const insight = [
  { title: 'About us', link: '/about' },
  { title: 'Terms of use', link: '#' },
  { title: ' Privacy notice', link: '#' },
  { title: 'Cookies policy', link: '#' },
];

const Footer = () => {
  return (
    <>
      <div className=" px-5 py-10 bg-almost-black ">
        <div className="app-container">
          <div className="grid grid-cols-2 sm:grid-cols-2 md:grid-cols-4 gap-5">
            <div>
              <img src={logo} alt="logo" className="w-12 mb-3" />
              <p className="text-white/60 text-[14px] mb-2.5">
                Bring rustic charm into your home with our cozy furniture....
              </p>
              <div className="text-xl text-deep-aqua   flex gap-3  ">
                <div className="cursor-pointer hover:-translate-y-2.75 transition-all duration-500">
                  {icon.instagram}
                </div>
                <div className="cursor-pointer hover:-translate-y-2.75 transition-all duration-500">
                  {icon.faceboock}
                </div>
                <div className="cursor-pointer hover:-translate-y-2.75 transition-all duration-500">
                  {icon.Linkedin}
                </div>
              </div>
            </div>
            <div>
              <h5 className="text-deep-aqua mb-2">collection</h5>
              <div>
                {collection.map((c, i) => (
                  <Link key={i} to={c.link}>
                    <p className="text-white/60 text-[14px] hover:text-white mb-1 cursor-pointer">
                      {c.title}
                    </p>
                  </Link>
                ))}
              </div>
            </div>
            <div>
              <h5 className="text-deep-aqua mb-2">Insight</h5>
              <div>
                {insight.map((c, i) => (
                  <Link key={i} to={c.link}>
                    <p className="text-white/60 text-[14px] hover:text-white mb-1 cursor-pointer">
                      {c.title}
                    </p>
                  </Link>
                ))}
              </div>
            </div>
            <div>
              <h5 className="text-deep-aqua mb-2">Contact info</h5>
              <div>
                <p className="text-white/60 text-[14px] hover:text-white mb-1 cursor-pointer flex items-center gap-2">
                  {' '}
                  {icon.location} Lorem, ipsum.
                </p>
                <p className="text-white/60 text-[14px] hover:text-white mb-1 cursor-pointer flex items-center gap-2">
                  {' '}
                  {icon.email} example@gmail.com
                </p>
              </div>
            </div>
          </div>

          <div className="mt-10">
            <div className="flex items-center justify-center my-6">
              <div className="grow border-t border-gray-500"></div>
              <span className="mx-4 text-gray-300 text-sm">
                © 2026 Copyright by The Wooden
              </span>
              <div className="grow border-t border-gray-500"></div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Footer;
