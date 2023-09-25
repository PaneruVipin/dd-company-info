import { useEffect, useState } from "react";
import Mission from "../tabs/about/mission";
import Vission from "../tabs/about/vission";
import WhoWeAre from "../tabs/about/whoWeAre";

const About = () => {
  const [currentTab, setCurrentTab] = useState({
    component: WhoWeAre,
    name: "who",
    title: "Who We Are",
  });
  const tabs = [
    { component: WhoWeAre, name: "who", title: "Who We Are" },
    { component: Vission, name: "vission", title: "Vission" },
    { component: Mission, name: "mission", title: "Mission" },
  ];
  const handleTabClick = (e) => {
    const name = e.target.name;
    const newTab = tabs.find((t) => t.name == name);
    setCurrentTab(newTab);
  };
  const Component = currentTab.component;
  return (
    <>
      <div className="pt-20 px-[4%] gap-x-10 text-center h-[80vh] relative flex justify-between ">
        <div className="w-full text-[1.125rem] font-[400] leading-[150%] text-black">
          <Component />
        </div>
        <div className="w-[40%] space-y-6">
          {tabs.map(({ name, title }) => (
            // transition ease-in-out delay-150  hover:-translate-y-1 hover:rounded-2xl hover:scale-105 origin-top-right hover:bg-indigo-500 duration-300
            <button
              className={`block  w-full py-10 hover:bg-[#1c898d]  rounded-xl  hover:text-white ${
                currentTab.name == name
                  ? "bg-[#1c898d] text-white"
                  : "bg-white text-black"
              }`}
              onClick={handleTabClick}
              key={name}
              name={name}
            >
              {title}
            </button>
          ))}
        </div>
      </div>
    </>
  );
};

export default About;
