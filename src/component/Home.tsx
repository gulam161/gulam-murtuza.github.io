import React from "react";
import image2 from "../assets/image-2.png";
import AnimatedText from "./AnimatedText";
import SocialMedia from "./Constants/SocialMedia";

type HomeProps = {};

const Home: React.FC<HomeProps> = () => {
  return (
    <section
      id="home"
      className="w-full max-w-[90%]  mx-auto py-16 flex sm:flex-col justify-between items-center md:flex-col md:gap-y-8 sm:gap-y-8"
    >
      <div className="  w-[55%] sm:w-full md:w-full lg:w-8/12 h-full  flex flex-col justify-center items-start p-8 sm:px-1 text-3xl font-bold ">
        <div className="text-4xl font-semibold sm:text-[2rem]">
          <p className="text-2xl font-medium mb-3 anim_Bottom">Hi, It's Me</p>
          <h1 className="anim_Right">
            I'm
            <span className="text-orange-600 inline-block ml-2">
              <AnimatedText text="Gulam Murtuza" />
            </span>
          </h1>
        </div>

        <div className="text-lg tracking-wide font-normal mt-4 w-full anim_Left">
          <AnimatedText text="I'm a professional Frontend Developer. Crafting visually &amp; stunning websites, Elevating online presence innovatively solutions" />
        </div>
        {/* social media icons ... */}
        <SocialMedia />
      </div>
      <div className="w-[40%] sm:w-full md:w-full h-full flex justify-center items-center">
        <div className="h-[65%] xl:h-[50%] lg:h-[50%] md:h-[80%] w-[75%] lg:w-[90%] md:w-[50%] sm:w-[63%] sm:h-[65%]  mt-6 sm:mt-0 img_Bg anim_top">
          <img src={image2} alt="G_Murtuza" className="object-cover w-full" />
        </div>
      </div>
    </section>
  );
};
export default Home;
