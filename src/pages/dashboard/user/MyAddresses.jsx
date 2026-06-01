import icon from '../../../assets/icons/icon';
import Button from '../../../components/ui/Button';
const MyAddresses = () => {
  return (
    <>
      <div className="bg-white md:bg-pale-grey rounded-xl p-0 md:p-8 relative">
        {/* new address */}
        {/* Header */}
        <div className="mb-8 flex  flex-col md:flex-row  justify-between md:items-center">
          <div>
            <h1 className="text-3xl font-bold text-deep-aqua">My Addresses</h1>
            <p className="mt-1 text-sm">Manage your saved delivery addresses</p>
          </div>
          <Button className="flex items-center gap-1 w-fit mt-2 md:mt-0 ">
            {icon.pluse} Add new Address
          </Button>
        </div>
        {/*  */}
        <div className="flex flex-col md:flex-row justify-between gap-5">
          {/* default address */}
          <div className="p-4 w-full border border-deep-aqua/20 rounded-xl relative">
            <span className="text-[9px] text-white px-2 py-0.5 bg-deep-aqua rounded-full absolute top-2 right-2">
              Default
            </span>
            <div className="text-xs  text-deep-aqua flex gap-2 justify-start items-center">
              <div className="p-2 text-xl text-deep-aqua bg-deep-aqua/10 rounded-md w-fit">
                {icon.home}
              </div>
              <span>Home</span>
            </div>
            <p className="text-xs mt-3 flex flex-col gap-1">
              <span>John Doe</span>
              <span>123 Main Street, Apt 4B</span>
              <span>Chicago, IL 60601</span>
              <span>United States</span>
              <span className="text-deep-aqua flex items-center gap-1">
                {icon.phone} +1 (555) 123-4567
              </span>
            </p>
            <div className="mt-3 flex gap-2">
              <Button className="bg-deep-aqua/10 text-deep-aqua! border-deep-aqua ">
                Edit
              </Button>
              <Button className="bg-deep-aqua/10 text-deep-aqua! border-deep-aqua">
                Delete
              </Button>
              <Button className="bg-deep-aqua/10 text-deep-aqua! border-deep-aqua">
                Save
              </Button>
            </div>
          </div>
          {/* default address */}
          <div className="p-4 w-full border border-deep-aqua/20 rounded-xl">
            <div className="text-xs  text-deep-aqua flex gap-2 justify-start items-center">
              <div className="p-2 text-xl text-deep-aqua bg-deep-aqua/10 rounded-md w-fit">
                {icon.work}
              </div>
              <span>Work</span>
            </div>
            <p className="text-xs mt-3 flex flex-col gap-1">
              <span>John Doe</span>
              <span>123 Main Street, Apt 4B</span>
              <span>Chicago, IL 60601</span>
              <span>United States</span>
              <span className="text-deep-aqua flex items-center gap-1">
                {icon.phone} +1 (555) 123-4567
              </span>
            </p>
            <div className="mt-3 flex gap-2">
              <Button className="bg-deep-aqua/10 text-deep-aqua! border-deep-aqua ">
                Edit
              </Button>
              <Button className="bg-deep-aqua/10 text-deep-aqua! border-deep-aqua">
                Delete
              </Button>
              <Button className="bg-deep-aqua/10 text-deep-aqua! border-deep-aqua">
                Save
              </Button>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default MyAddresses;
