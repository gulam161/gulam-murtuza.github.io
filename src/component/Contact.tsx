import React, { useEffect, useState, ChangeEvent, MouseEvent } from "react";
import PageNavigation from "./PageNavigation";
import NearMeIcon from "@mui/icons-material/NearMe";
import PhoneIcon from "@mui/icons-material/Phone";
import EmailIcon from "@mui/icons-material/Email";
import { NavLink } from "react-router-dom";
import SocialMedia from "./Constants/SocialMedia";
import axios from "axios";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import { motion } from "framer-motion";

const API_KEY = import.meta.env.VITE_API_KEY;

const initialFormData = {
  name: "",
  email: "",
  message: "",
};

const Contact: React.FC = () => {
  const [formData, setFormData] =
    useState<typeof initialFormData>(initialFormData);
  const [disable, setDisable] = useState(false);

  const { email, name, message } = formData;

  const handleChange = (
    e: ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    const { name, value } = e.target;
    setFormData((prevData) => ({ ...prevData, [name]: value }));
  };

  const handleSubmit = async (e: MouseEvent<HTMLButtonElement>) => {
    e.preventDefault();

    const isEmailValid = /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(formData.email);
    if (!isEmailValid) {
      toast.warning(`Please enter a valid email`, {
        position: "top-right",
        autoClose: 5000,
        closeOnClick: true,
      });
      setFormData({ ...formData, email: "" });
      return;
    }

    await axios
      .post("https://api.web3forms.com/submit", {
        ...formData,
        access_key: API_KEY,
      })
      .then((res) => {
        if (res) {
          toast.success(`Message sent successfully`, {
            position: "top-right",
            autoClose: 5000,
            closeOnClick: true,
          });
          setFormData(initialFormData);
        }
      })
      .catch((err) => console.error(err));
  };

  useEffect(() => {
    setDisable(!(email && name && message));
  }, [email, name, message]);

  const contactInfo = [
    {
      icon: <NearMeIcon />,
      label: "Location",
      value: "Mumbai, Maharastra, India",
    },
    {
      icon: <PhoneIcon />,
      label: "Phone Number",
      value: "(+91) 9336-938754",
    },
    {
      icon: <EmailIcon />,
      label: "Email Address",
      value: "gulam.mur159@gmail.com",
    },
  ];

  const myData = {
    name: "Contact",
    label: "Get In Touch With Me",
    content:
      "Transforming ideas into functional code. Let's embark on a journey of innovation. Your vision, my expertise – let's build something extraordinary together",
  };
  return (
    <>
      <section
        id="contact"
        className=" w-full max-w-[90%] text-center mx-auto py-16"
      >
        <PageNavigation data={myData} />
        <div className="dark:bg-dark-nav-bg dark:border-gray-700 dark:shadow-gray-600 w-[95%] lg:w-full md:w-11/12 sm:w-full flex md:flex-col md:items-center md:pb-5 sm:pb-5 sm:flex-col justify-between z-50 mt-16 mb-4 mx-auto px-5 border rounded-md shadow-md shadow-gray-300">
          <div className="form w-full border-r border-gray-300 md:border-r-0 md:pr-0 md:border-b sm:border-r-0 sm:pr-0 sm:border-b py-8 pr-7">
            <h6 className="content-1 text-start anim_Bottom">Available 24/7</h6>
            <h1 className="content-2 text-start">Get In Touch</h1>
            <form>
              <motion.input
                initial={{ opacity: 1, x: "-100vh" }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{
                  duration: 1,
                  delay: 0,
                  type: "spring",
                  bounce: 0.3,
                }}
                type="text"
                required
                name="name"
                value={name}
                onChange={handleChange}
                autoComplete="off"
                placeholder="Enter name"
                style={{ "--i": 1 } as React.CSSProperties}
              />
              <motion.input
                initial={{ opacity: 1, x: "-100vh" }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{
                  duration: 1,
                  delay: 0.2,
                  type: "spring",
                  bounce: 0.3,
                }}
                type="email"
                required
                name="email"
                value={email}
                onChange={handleChange}
                autoComplete="off"
                placeholder="Enter email"
                style={{ "--i": 2 } as React.CSSProperties}
              />
              <motion.textarea
                initial={{ opacity: 1, x: "-100vh" }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{
                  duration: 1,
                  delay: 0.4,
                  type: "spring",
                  bounce: 0.2,
                }}
                cols={30}
                rows={5}
                placeholder="Message"
                name="message"
                value={message}
                onChange={handleChange}
                autoComplete="off"
                style={{ "--i": 3 } as React.CSSProperties}
                // className="dark:focus:bg-slate-200"
              ></motion.textarea>
              <motion.button
                initial={{ opacity: 1, x: "-100vh" }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{
                  duration: 1,
                  delay: 0.5,
                  type: "spring",
                  bounce: 0.3,
                }}
                type="submit"
                style={{ "--i": 4 } as React.CSSProperties}
                disabled={!name || !email || !message}
                className={`sub-btn ${
                  disable ? "cursor-not-allowed bg-gray-500" : "bg-orange-500"
                }`}
                onClick={handleSubmit}
              >
                Send Message
              </motion.button>
              <ToastContainer />
            </form>
          </div>

          <div className="self-center ml-8 w-3/5 md:mt-9 md:w-5/6 md:ml-0 sm:mt-9 sm:w-full sm:ml-0">
            {contactInfo.map(({ icon, label, value }, index) => (
              <div key={index} className="flex gap-x-5 items-center">
                <p className="social_link dark_Highlight cursor-pointer mb-4 anim_Bottom">
                  {icon}
                </p>
                <div className="info-item">
                  <h5>{label} </h5>

                  {value.includes("@") ? (
                    <NavLink
                      to={`mailto:${value}`}
                      className="opacity-80 font-normal"
                    >
                      {value}
                    </NavLink>
                  ) : value.match(/\d+/) ? (
                    <NavLink
                      to={`tel:${value}`}
                      target="_blank"
                      className="opacity-80 font-normal"
                    >
                      {value}
                    </NavLink>
                  ) : (
                    <span className="opacity-80 font-normal">{value}</span>
                  )}
                </div>
              </div>
            ))}
          </div>
        </div>
        {/* SocialMedia icons */}
        <div className="flex justify-center items-center gap-x-7 md:gap-x-5 sm:gap-x-0 anim_Left_Social">
          <NavLink
            to=""
            className="w-16 h-0.5 bg-orange-500 mt-7 aniL md:w-8 sm:w-0"
            style={{ "--i": 6 } as React.CSSProperties}
          />
          <SocialMedia />
          <NavLink
            to=""
            className="w-16 h-0.5 bg-orange-500 mt-7 aniL md:w-8 sm:w-0"
            style={{ "--i": 12 } as React.CSSProperties}
          />
        </div>
      </section>
    </>
  );
};

export default Contact;
