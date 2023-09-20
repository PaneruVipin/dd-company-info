const { default: Link } = require("next/link");

const Navbar = () => {
  const navs = [
    { id: 1, name: "Introduction", path: "/" },
    { id: 2, name: "About us", path: "#about" },
    { id: 3, name: "Mission", path: "#mission" },
    { id: 4, name: "Ecosystem", path: "#ecosystem" },
    { id: 5, name: "Impact", path: "#impact" },
    { id: 6, name: "Team", path: "#team" },
  ];
  return (
    <>
      <div className="flex justify-between items-center pr-[2%] py-[0.4%]  ">
        <div className="flex gap-x-6 ml-[2%]">
          <img
            className="w-40 h-8 object-contain mr-10"
            src="css-logo.png"
          ></img>
          {navs.map(({ id, name, path }) => (
            <Link
              className=" text-white font-bold hover:text-[#ffde59]"
              key={id}
              href={path}
            >
              {name}
            </Link>
          ))}
        </div>
        <Link
          className=" text-white font-bold hover:text-[#ffde59]"
          href="#investor_info"
        >
          Investors Info
        </Link>
      </div>
    </>
  );
};

export default Navbar;
