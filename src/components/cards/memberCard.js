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
  const socialLinks = [
    { name: "linkedin", link: linkedin },
    { name: "instagram", link: instagram },
    { name: "facebook", link: facebook },
    { name: "twitter", link: twitter },
  ];

  return (
    <>
      <div className="flex flex-col w-60 items-center gap-y-3 bg-white rounded-md p-2 hover:shadow-2xl  shadow-black">
        <h3 className="font-bold text-lg">{name}</h3>
        <span>{title}</span>
        <img className="w-52 h-80 object-cover object-top" src={image} />
        <div className="flex gap-x-2 items-center text-black">
          {socialLinks.map(({ name, link }) =>
            link ? (
              <a
                href={link}
                target="_blank"
                className="bg-[#2ac4c8] block hover:bg-[#1c898d] cursor-pointer p-3 rounded-full"
              >
                {name == "linkedin" ? (
                  <AiFillLinkedin  />
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
        <p>{description}</p>
      </div>
    </>
  );
};
export default MemberCard;
