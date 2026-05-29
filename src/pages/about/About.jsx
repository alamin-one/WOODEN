import Benner from '../../components/shared/Benner';
import { banner4, banner3, shopbenner } from '../../assets/images';
import Condition from '../../pages/home/Condition'

const About = () => {
  return (
    <>
      <Benner bg={shopbenner} title={'About Us'} />
      <section className="bg-white">
        <div className="app-container  pt-25 pb-20">
          <div className="flex flex-col md:flex-row justify-center items-center gap-5">
            <div className="w-full flex justify-center md:justify-end lg:w-1/3">
              <img src={banner4} alt="" />
            </div>
            <div className="w-full lg:w-1/3">
              <h2>Lorem ipsum dolor, sit amet consectetur</h2>
              <p className="text-gray-600">
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Vel
                dignissimos, facere iure, sint illo iusto, voluptate nemo nulla
                dolorem alias provident aspernatur ullam. Facere alias ex in.
                Praesentium explicabo commodi, aliquam at ex nesciunt quibusdam
                totam magni doloribus earum ab?
              </p>
            </div>
          </div>
        </div>
      </section>
      <section className="bg-pale-grey">
        <div className="app-container  pb-25 pt-20">
          <div className="flex flex-col md:flex-row justify-center md:justify-end items-center gap-5">
            <div className="w-full lg:w-1/3">
              <h2>Lorem ipsum dolor, sit amet consectetur</h2>
              <p className="text-gray-600">
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Vel
                dignissimos, facere iure, sint illo iusto, voluptate nemo nulla
                dolorem alias provident aspernatur ullam. Facere alias ex in.
                Praesentium explicabo commodi, aliquam at ex nesciunt quibusdam
                totam magni doloribus earum ab?
              </p>
            </div>
            <div className="w-full lg:w-1/2">
              <img src={banner3} alt={banner3} />
            </div>
          </div>
        </div>
      </section>
      <Condition/>
    </>
  );
};

export default About;
