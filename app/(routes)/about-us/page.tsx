import FadeDown from "@/components/motionEffect/FadeDown";
import Image from "next/image";

const AboutUs = () => {
  return (
    <>
      <div className="p-2 md:flex gap-4 md:p-12 justify-center items-center ">
        <FadeDown>
          <div className="p-2 md:flex gap-4 md:p-12 justify-start flex-1">
            <Image
              src="/img/about/tanker.jpg"
              width={600}
              height={600}
              alt="tanker"
            />
            <div className="flex flex-col gap-8">
              <h1 className="md:text-7xl font-black">Who We Are?</h1>
              <p className="text-wrap w-auto md:text-5xl text-orange-500 font-black">
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Eum,
                earum quibusdam expedita
              </p>
              <p className="text-wrap w-auto md:text-2xl font-bold">
                We deliver high quality sapiente deserunt ullam est eaque vitae
                suscipit, totam eligendi asperiores sequi. Sapiente expedita
                cupiditate autem adipisci iure
              </p>
            </div>
          </div>
        </FadeDown>
      </div>
      <div className="p-2 md:flex gap-4 md:p-12 justify-center items-center ">
        <FadeDown>
          <div className="p-2 md:flex gap-4 md:p-12 justify-start flex-1">
            <div className="flex flex-col gap-8">
              <h1 className="md:text-7xl font-black">Who We Represent?</h1>
              <p className="text-wrap w-auto md:text-5xl text-orange-500 font-black">
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Eum,
                earum quibusdam expedita
              </p>
              <p className="text-wrap w-auto md:text-2xl font-bold">
                We deliver high quality sapiente deserunt ullam est eaque vitae
                suscipit, totam eligendi asperiores sequi. Sapiente expedita
                cupiditate autem adipisci iure
              </p>
            </div>
            <Image
              src="/img/about/plant.jpg"
              width={600}
              height={600}
              alt="tanker"
            />
          </div>
        </FadeDown>
      </div>
    </>
  );
};

export default AboutUs;
