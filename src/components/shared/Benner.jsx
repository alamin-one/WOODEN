const Benner = ({ title = '', bg = '' }) => {
  return (
    <section
      className="h-[30vh] md:h-[40vh] pt-7"
      style={{
        background: `url(${bg}) no-repeat center center / cover`,
      }}
    >
      <div className="w-full h-full  bg-black/40 flex flex-col justify-center items-center ">
        <h1 className="h1 text-white">{title}</h1>
        <p className="p text-white">Home/{title}</p>
      </div>
    </section>
  );
};

export default Benner;
