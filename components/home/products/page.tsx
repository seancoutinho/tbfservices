import FadeTop from "@/components/motionEffect/FadeTop";

const ProductsSection = () => {
  interface Product {
    id: number;
    name: string;
    image: string;
    description: string;
  }

  const products: Product[] = [
    {
      id: 1,
      name: "Product 1",
      image: "https://via.placeholder.com/150",
      description:
        "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed pulvinar, purus ac finibus eleifend, eros velit bibendum tellus, et bibendum nunc felis vitae neque.",
    },
    {
      id: 2,
      name: "Product 2",
      image: "https://via.placeholder.com/150",
      description:
        "Vestibulum ante ipsum primis in faucibus orci luctus et ultrices posuere cubilia curae; Donec viverra malesuada purus, vitae bibendum ex consectetur vel.",
    },
    {
      id: 3,
      name: "Product 2",
      image: "https://via.placeholder.com/150",
      description:
        "Vestibulum ante ipsum primis in faucibus orci luctus et ultrices posuere cubilia curae; Donec viverra malesuada purus, vitae bibendum ex consectetur vel.",
    },
    {
      id: 4,
      name: "Product 2",
      image: "https://via.placeholder.com/150",
      description:
        "Vestibulum ante ipsum primis in faucibus orci luctus et ultrices posuere cubilia curae; Donec viverra malesuada purus, vitae bibendum ex consectetur vel.",
    },
    {
      id: 5,
      name: "Product 2",
      image: "https://via.placeholder.com/150",
      description:
        "Vestibulum ante ipsum primis in faucibus orci luctus et ultrices posuere cubilia curae; Donec viverra malesuada purus, vitae bibendum ex consectetur vel.",
    },
    {
      id: 6,
      name: "Product 2",
      image: "https://via.placeholder.com/150",
      description:
        "Vestibulum ante ipsum primis in faucibus orci luctus et ultrices posuere cubilia curae; Donec viverra malesuada purus, vitae bibendum ex consectetur vel.",
    },
  ];

  return (
    <section className="py-12 bg-white sm:py-16 lg:py-20">
      <div className="px-4 mx-auto sm:px-6 lg:px-8 max-w-7xl">
        <div className="flex text-start items-center font-black gap-4">
          <div className=" h-12 border border-l-4 border-orange-500"></div>
          <h2 className="capitalize text-xl font-black text-gray-900 sm:text-2xl">
            OUR PRODUCTS
          </h2>
        </div>

        <div className="grid grid-cols-1 mt-8 sm:mt-12 sm:grid-cols-2 xl:grid-cols-3">
          {products.map((product) => (
            <FadeTop>
              <div className="relative overflow-hidden border border-gray-200 transition-all duration-500 ease-in-out  bg-white hover:bg-orange-500 hover:transition-transform hover:scale-105 hover:z-10">
                <div className="p-6 lg:px-10 lg:py-8">
                  <div className="flex items-center justify-start space-x-8">
                    <div className="flex-shrink-0 w-px h-12 bg-gray-200"></div>
                    <div>
                      <svg
                        className="flex-shrink-0 w-10 h-10 md:w-24 md:h-24"
                        viewBox="0 0 60 60"
                        fill="none"
                        stroke="currentColor"
                        xmlns="http://www.w3.org/2000/svg">
                        <path
                          d="M37.75 10C37.75 14.51 34.06 18.2 29.55 18.2C25.04 18.2 21.35 14.51 21.35 10H15.2L7 14.1V26.4H15.2V51H43.9V26.4H52.1V14.1L43.9 10H37.75Z"
                          stroke-width="2"
                          stroke-miterlimit="10"
                          stroke-linecap="round"
                          stroke-linejoin="round"
                        />
                      </svg>
                      <h3 className="text-sm font-bold text-gray-900 sm:text-base lg:text-lg">
                        <a href="#" title="">
                          {product.name}
                          <span
                            className="absolute inset-0"
                            aria-hidden="true"></span>
                        </a>
                      </h3>
                      <p className="mt-2 text-sm font-medium text-gray-500">
                        {product?.description}
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            </FadeTop>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ProductsSection;
