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
      <div
        onMouseEnter={() => setShowMeadiaIcons(true)}
        onMouseLeave={() => setShowMeadiaIcons(false)}
        className={`flex relative z-0 text-black flex-col p-[5px] w-60 h-80 justify-between pb-2  items-center gap-y-3 bg-white rounded-md ${
          showMeadiaIcons ? "" : ""
        }  hover:shadow-2xl  shadow-black`}
      >
        <div
          style={{ backgroundImage: `url(${image})` }}
          className="h-full w-full z-0 relative bg-cover bg-center "
        >
          {showMeadiaIcons ? (
            <div className="absolute border inset-0 bg-fill-anim-1 bg-red-500 bg-opacity-60"></div>
          ) : null}
        </div>
        <div
          className={`w-full space-y-6  ${
            showMeadiaIcons ? "" : ""
          }`}
        >
          <h3 className="font-bold text-lg ">{name}</h3>
          <span>{title}</span>
          {/* {showMeadiaIcons ? ( */}
            <div className="flex justify-center gap-x-2 items-center text-black">
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
          {/* ) : null} */}
        </div>
        {/* <p>{description}</p> */}
      </div>
    </>
  );
};
export default MemberCard;
