import { useState } from "react";
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
      <div className="text-center h-[80vh] relative flex justify-between bg-cyan-500">
        <div className="w-full p-10 text-[1.125rem] font-[400] leading-[150%]">
          <Component />
        </div>
        <div className="w-[30%] bg-emerald-500 ">
          {tabs.map(({ name, title }) => (
            <button
              className={`block  w-full py-10 transition ease-in-out delay-150  hover:-translate-y-1 hover:rounded-2xl hover:scale-105 origin-top-right hover:bg-indigo-500 duration-300 ${
                currentTab.name == name
                  ? " rounded-3xl -translate-y-1 bg-indigo-500 scale-105  origin-top-right"
                  : ""
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
