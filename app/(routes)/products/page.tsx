import FadeDown from "@/components/motionEffect/FadeDown";
import Image from "next/image";
import Sidebar from "./components/sidebar";

const AboutUs = () => {
  return (
    <>
      <div className="p-2 md:flex gap-4 md:p-12 justify-center items-center ">
        <FadeDown>
          <div className="p-2 md:flex gap-4 md:p-12 justify-start flex-1">
            <Image
              src="/img/products/industry.jpg"
              width={600}
              height={600}
              alt="tanker"
            />
            <div className="flex flex-col gap-8">
              <p className="text-wrap w-auto md:text-5xl text-blue-700 font-black">
                With a dynamic team that possesses years of expertise in
                commodity trading, Daliworx prides itself on its market
                knowledge and ability to adapt effortlessly to market needs.
              </p>
            </div>
          </div>
        </FadeDown>
      </div>
      <div className="flex bg-gray-50 justify-between w-full p-2 md:p-24 lg:p-28">
        <Sidebar />
      </div>
    </>
  );
};

export default AboutUs;
