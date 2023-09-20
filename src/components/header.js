import { IoLogoGooglePlaystore, IoLogoAppleAppstore } from "react-icons/io5";
const Header = () => {
  const links = [
    { id: 1, name: "CSS", path: "https://google.com" },
    { id: 2, name: "KabadPe", path: "https://google.com" },
    { id: 3, name: "Green Saman Shop", path: "https://google.com" },
    { id: 4, name: "Climconnect", path: "https://google.com" },
  ];
  return (
    <>
      <div className="flex  px-[4%] justify-between items-center">
        <div className="flex mb-5 gap-x-[0.5] w-[50%]">
          {links.map(({ id, name, path }) => (
            <a
              className="hover:bg-[#1c898d] text-center block font-light  text-white text-[12px] w-full  h-14  -mt-6 rounded-b-[3rem]  pt-7 bg-[#2ac4c8]"
              key={id}
              href={path}
              target="_blank"
            >
              <span className="block m-auto"> {name}</span>
            </a>
          ))}
        </div>
        <div className="flex  text-white gap-x-1 justify-end items-center">
          <a href="https://play.google.com" target="_blank">
            <IoLogoGooglePlaystore className="h-8 w-8" />
          </a>
          <a href="https://apple.com" target="_blank">
            <IoLogoAppleAppstore className="h-8 w-8" />
          </a>
          <span>Download App</span>
        </div>
      </div>
    </>
  );
};
export default Header;
