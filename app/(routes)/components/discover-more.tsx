const DiscoverMore = () => {
  return (
    <div>
      <div
        className="bg-cover bg-center h-full flex px-12"
        style={{ backgroundImage: `url('/img/gray-background.jpg')` }}>
        <div className="flex flex-col gap-4 items-start justify-center p-12">
          <div className="flex text-start items-center font-black gap-2">
            <div className="h-6 border border-l-4 border-blue-700"></div>
            <h2 className="capitalize text-sm font-black text-gray-900 sm:text-SM">
              DISCOVER MORE
            </h2>
          </div>
          <p className="md:text-7xl text-wrap font-extrabold">Need More</p>
          <p className="md:text-7xl text-wrap font-extrabold">Information?</p>
        </div>
      </div>
    </div>
  );
};

export default DiscoverMore;
