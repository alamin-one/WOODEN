import { Link } from 'react-router';
import { banner1 } from '../../assets/images';
import Button from '../../components/ui/Button';

/*  */
const HeroSection = () => {
  return (
    <section className="bg-pale-grey">
      <div className="app-container  py-25 flex flex-col md:flex-row justify-start items-center gap-5">
        <div className=" w-full md:w-[60%] ">
          <img src={banner1} alt={banner1} />
        </div>

        <div className=" w-full md:w-[40%] space-y-1.25 ">
          <p>Sustainable Furniture👌</p>
          <h1 className="h1">Quality Furniture for Every Room</h1>
          <p>
            From living rooms to bedrooms, our high-quality furniture
            collections offer something for every space.
          </p>
          <div className="flex  justify-startitems-center  mt-5 gap-2.5 ">
            <Button>
              <Link to={'/shop'}>Explore Now</Link>
            </Button>
            <Button>
              <Link to={'/shop'}> WacthH Now</Link>
            </Button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;
