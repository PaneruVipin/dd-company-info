import { useState } from "react";
import {
  AiFillTwitterCircle,
  AiFillFacebook,
  AiFillInstagram,
  AiFillLinkedin,
} from "react-icons/ai";

const MemberCard = ({
  name,
  title,
  image,
  description,
  linkedin,
  instagram,
  facebook,
  twitter,
}) => {
  const [showMeadiaIcons, setShowMeadiaIcons] = useState(false);
  const socialLinks = [
    { name: "linkedin", link: linkedin },
    { name: "instagram", link: instagram },
    { name: "facebook", link: facebook },
    { name: "twitter", link: twitter },
  ];

  return (
    <>
      <div className="flex relative z-0 text-black flex-col w-60 h-80 justify-between  items-center gap-y-3 bg-white rounded-md p-2 hover:shadow-2xl  shadow-black">
        <div
          style={{ backgroundImage: `url(${image})` }}
          className="h-full w-full z-0 relative bg-cover bg-center"
        >
          <div className=" absolute border inset-0"></div>
        </div>
        <div className="space-y-6 h-40">
          <h3 className="font-bold text-lg ">{name}</h3>
          <span>{title}</span>
          <div className="flex gap-x-2 items-center text-black">
            {socialLinks.map(({ name, link }) =>
              link ? (
                <a
                  href={link}
                  target="_blank"
                  className="bg-[#2ac4c8] block hover:bg-[#1c898d] cursor-pointer p-3 rounded-full"
                >
                  {name == "linkedin" ? (
                    <AiFillLinkedin />
                  ) : name == "instagram" ? (
                    <AiFillInstagram />
                  ) : name == "facebook" ? (
                    <AiFillFacebook />
                  ) : name == "twitter" ? (
                    <AiFillTwitterCircle />
                  ) : null}
                </a>
              ) : null
            )}
          </div>
        </div>
        {/* <p>{description}</p> */}
      </div>
    </>
  );
};
export default MemberCard;
