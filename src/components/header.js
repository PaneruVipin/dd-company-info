import { IoLogoGooglePlaystore, IoLogoAppleAppstore } from "react-icons/io5";
import { BsChevronDoubleDown } from "react-icons/bs";
const Header = () => {
  const links = [
    { id: 1, name: "CLIMSTRIPE SHIFT", path: "https://google.com" },
    { id: 2, name: "KABADPE", path: "https://google.com" },
    { id: 3, name: "GREENSAMAN", path: "https://google.com" },
    { id: 4, name: "CLIMCONNECT", path: "https://google.com" },
  ];
  return (
    <>
      <div className="flex  px-[4%] justify-between items-center">
        <div className="flex mb-3  w-[50%]">
          {links.map(({ id, name, path }) => (
            <a
              className={` bg-opacity-85 hover:h-16 -ml-2 text-center block font-light  text-white text-[12px] w-full   rounded-b-[3rem]  pt-7 ${
                id == 1
                  ? "bg-[#fa0644] h-16  -mt-6"
                  : id == 2
                  ? "bg-[#4dbfc0] h-14  -mt-6"
                  : id == 3
                  ? "bg-[#076636] h-14  -mt-6"
                  : id == 4
                  ? "bg-[#03aeef] h-14  -mt-6"
                  : ""
              } `}
              key={id}
              href={path}
              target="_blank"
            >
              <>
                <span className="block ">
                  {" "}
                  {name}
                  <br />
                  {id == 1 ? <BsChevronDoubleDown className="mx-auto" /> : null}
                </span>
              </>
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
