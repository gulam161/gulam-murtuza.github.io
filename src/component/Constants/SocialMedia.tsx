import React from "react";
import { NavLink } from "react-router-dom";
import LinkedInIcon from "@mui/icons-material/LinkedIn";
import GitHubIcon from "@mui/icons-material/GitHub";
import TwitterIcon from "@mui/icons-material/Twitter";
import WhatsAppIcon from "@mui/icons-material/WhatsApp";
type SocialMediaProps = {};

const social = [
  {
    id: 1,
    to: "https://www.linkedin.com/in/murtuza-g/",
    icon: <LinkedInIcon />,
  },
  { id: 2, to: "/", icon: <TwitterIcon /> },
  { id: 3, to: "https://github.com/gulam161", icon: <GitHubIcon /> },
  {
    id: 4,
    to: "https://api.whatsapp.com/send?phone=919336938754",
    icon: <WhatsAppIcon />,
  },
];
const SocialMedia: React.FC<SocialMediaProps> = () => {
  return (
    <>
      <div className="flex flex-wrap gap-6 mt-7 anim_Left_Social">
        {social.map((item, index) => (
          <NavLink
            key={index}
            style={{ "--i": index + 7 } as React.CSSProperties}
            to={item.to}
            className="social_link dark_Highlight"
          >
            {item.icon}
          </NavLink>
        ))}
      </div>
    </>
  );
};
export default SocialMedia;
