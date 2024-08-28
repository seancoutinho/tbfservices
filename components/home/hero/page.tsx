import Link from "next/link";

const Hero = () => {
    return (
      <div className="relative pt-24 pb-12 bg-black xl:pt-24 sm:pb-16 lg:pb-28 xl:pb-48 2xl:pb-56">
        <div className="absolute inset-0">
          <img
            className="object-cover w-full h-full"
            src="/img/hero.jpg"
            alt=""
          />
        </div>

        <div className="relative">
          <div className="px-6 mx-auto sm:px-8 lg:px-12 max-w-7xl">
            <div className="w-full lg:w-2/3 xl:w-1/2">
              <h1 className="font-sans text-base font-normal tracking-tight text-white text-opacity-70">
               TBF Services
              </h1>
              <p className="mt-6 tracking-tighter text-white">
                <span className="font-extrabold text-6xl text-[#FFD311]">
                  Purpose, Precision
                </span>
                <br />
                <span className="italic font-normal text-8xl">Passion</span>
              </p>
              <p className="mt-12 font-sans text-base font-medium leading-7 text-white">
                We move over 4,000,000 tonnes of goods every year with a drive to go beyond just supply, we aim to be your provider
              </p>
              <div className="flex items-center mt-5 space-x-3 sm:space-x-4">
                <Link
                  href="#"
                  title=""
                  className="
                            inline-flex
                            items-center
                            justify-center
                            px-7
                            py-3
                            border-white
                            font-sans
                            text-base
                            font-semibold
                            transition-all
                            duration-200
                            border-2 border-transparent
                            sm:leading-8
                            bg-transparent
                            sm:text-lg
                            text-white
                            hover:bg-white
                            focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-primary focus:ring-offset-secondary
                        "
                  role="button">
                  Our Services
                </Link>
              </div>
            </div>
          </div>
        </div>
      </div>
    );
}
 
export default Hero;