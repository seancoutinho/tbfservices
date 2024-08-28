import FadeDown from "@/components/motionEffect/FadeDown";
import Image from "next/image";

const AboutUs = () => {
  return (
    <>
      <div className="p-2 md:flex gap-4 md:p-12 justify-center items-center ">
        <FadeDown>
          <div className="p-2 md:flex gap-4 md:p-12 justify-start flex-1">
            <Image
              src="/img/about/plant.jpg"
              width={600}
              height={600}
              alt="tanker"
            />
            <div className="flex flex-col gap-8">
              <h1 className="md:text-7xl font-black">Who We Represent?</h1>
              <p className="text-wrap w-auto md:text-5xl text-orange-500 font-black">
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Eum,
                earum quibusdam expedita
              </p>
              <p className="text-wrap w-auto md:text-2xl font-medium">
                With a dynamic team that possesses years of expertise in
                commodity trading, Daliworx prides itself on its market
                knowledge and ability to adapt effortlessly to market needs. We
                leverage our vast network of suppliers and buyers to connect
                common interests thereby helping to optimise our clients’
                operations and bringing increased efficiency to global value
                chains. Every client we work with, on both the buy and sell
                side, is vetted thoroughly to ensure that they meet our
                requirements for ethical, responsible and sustainable practices,
                allowing us to build long-term relationships that are
                underpinned by trust and reliability.
              </p>
            </div>
          </div>
        </FadeDown>
      </div>
    </>
  );
};

export default AboutUs;
