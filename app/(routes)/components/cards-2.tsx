const CardsSection = () => {
  return (
    <div className="md:flex md:justify-start md:items-center md:gap-8 p-20">
      <div className="bg-[#111111] flex flex-col p-4 md:p-20 gap-4 justify-between items-start text-5xl font-bold border box-shadow-lg">
        <p className="text-white">Our</p>
        <p className="text-orange-500 text-6xl">Locations</p>
        <button className="relative flex items-center font-bold w-full text-nowrap px-4 text-black justify-center sm:w-auto bg-[#F5811F] overflow-hidden group">
          <span className="relative z-10 transition-colors duration-300 ease-in-out w-fit text-sm py-3 px-2 group-hover:text-white ">
            Find Out More
          </span>
          <svg
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 24 24"
            stroke-width="1.5"
            stroke="currentColor"
            className="size-4 ml-2 text-white">
            <path
              stroke-linecap="round"
              stroke-linejoin="round"
              d="m8.25 4.5 7.5 7.5-7.5 7.5"
            />
          </svg>
          <span className="absolute inset-0 bg-black transition-transform duration-300 ease-in-out transform -translate-x-full group-hover:translate-x-0"></span>
        </button>
      </div>
      <div className="bg-orange-500 flex flex-col p-4 md:p-20 gap-4 justify-between items-start text-5xl font-bold border box-shadow-lg">
        <p className="">Our</p>
        <p className=" md:text-6xl">Products</p>
        <button className="relative flex items-center font-bold w-full text-nowrap px-4 text-black justify-center sm:w-auto overflow-hidden group">
          <span className="relative z-10 transition-colors duration-300 ease-in-out w-fit text-sm py-3 px-2 group-hover:text-white ">
            Find Out More
          </span>
          <svg
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 24 24"
            stroke-width="1.5"
            stroke="currentColor"
            className="size-4 ml-2 text-white">
            <path
              stroke-linecap="round"
              stroke-linejoin="round"
              d="m8.25 4.5 7.5 7.5-7.5 7.5"
            />
          </svg>
          <span className="absolute inset-0 bg-black transition-transform duration-300 ease-in-out transform -translate-x-full group-hover:translate-x-0"></span>
        </button>
      </div>

      <div></div>
    </div>
  );
};

export default CardsSection;
