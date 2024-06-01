import React from "react";
import image_3 from "@/assets/image-4.png";
import PersonIcon from "@mui/icons-material/Person";
import PhoneIcon from "@mui/icons-material/Phone";
import EmailIcon from "@mui/icons-material/Email";
import LocationOnIcon from "@mui/icons-material/LocationOn";
import { Link } from "react-router-dom";
import AnimatedText from "./AnimatedText";

type AboutProps = {};

const aboutData = [
  {
    icon: <PersonIcon className="text-orange-500" />,
    label: "Name",
    value: "Gulam Murtuza",
  },
  {
    icon: <PhoneIcon className="text-orange-500" />,
    label: "Phone",
    value: "+91 9336938754",
  },
  {
    icon: <EmailIcon className="text-orange-500" />,
    label: "Email",
    value: "gulam.mur159@gmail.com",
  },
  {
    icon: <LocationOnIcon className="text-orange-500" />,
    label: "Location",
    value: "Mumbai, Maharastra",
  },
];

const About: React.FC<AboutProps> = () => {
  return (
    <section
      id="about"
      className="w-full max-w-[90%] text-center mx-auto py-16"
    >
      <h3 className="content-1">My Intro</h3>
      <div className="w-full mt-12 flex justify-around md:flex-col-reverse sm:flex-col-reverse md:items-center sm:items-center md:gap-y-12 sm:gap-y-12">
        <div className="w-[25%] lg:w-1/3 md:w-1/2 sm:w-[70%]">
          <figure className="w-full shadow-xl shadow-gray-600 mt-2 img_Bg anim_Right">
            <img
              src={image_3}
              alt="G_murtuza"
              className="w-full object-cover "
            />
          </figure>
        </div>
        <div className="w-[63%] sm:w-full h-1/2 px-8 sm:px-4 text-start tracking-wide flex flex-col gap-y-10 md:w-full">
          <div>
            <h1 className="text-3xl font-bold  mb-1.5 text-orange-500 anim_Bottom">
              About Me
            </h1>
            <p className="text-base font-normal opacity-50 mb-6 tracking-[3px] anim_Right">
              Let me introduce myself
            </p>

            <div className="font-normal text-[17px] text-justify anim_Left">
              <AnimatedText
                text="A result-oriented Frontend Developer proficient in building
              pixel-perfect and user freindly web applications. Capable of
              integrating APIs and translating designs into a functional app.
              Thrive to deliver useful business solutions and seamlessly
              bridging the gap between real and world of internet."
              />
            </div>
          </div>

          <div className="flex flex-col gap-y-2 text-[17px] font-medium tracking-widel anim_top">
            {aboutData.map(({ icon, label, value }, index) => (
              <div key={index} className="flex items-center gap-x-3">
                {icon}
                <h2>
                  {label} :{" "}
                  {value.includes("@") ? (
                    <Link
                      to={`mailto:${value}`}
                      className="opacity-80 font-normal"
                    >
                      {value}
                    </Link>
                  ) : value.match(/\d+/) ? (
                    <Link
                      to={`tel:${value}`}
                      className="opacity-80 font-normal"
                    >
                      {value}
                    </Link>
                  ) : (
                    <span className="opacity-80 font-normal">{value}</span>
                  )}
                </h2>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};
export default About;
