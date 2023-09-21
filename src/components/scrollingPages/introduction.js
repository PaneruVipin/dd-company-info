import BackgroundImageLoader from "@/lib/backgroundImage";
import { useEffect, useState } from "react";

const Introduction = () => {
  const [bgCount, setBgCount] = useState(2);
  const [bg, setBg] = useState("bg-intro_image_1");
  useEffect(() => {
    if (bgCount < 3) {
      setTimeout(() => {
        setBg("bg-intro_image_" + bgCount);
        setBgCount(bgCount + 1);
      }, 5000);
    } else {
      setBgCount(1);
    }
  }, [bgCount]);
  return (
    <div
      className={`min-h-screen max-w-screen bg-cover bg-center font-bold text-[#2ac4c8] text-[3.67rem] ${bg} p-10 `}
    >
      <BackgroundImageLoader
        possibleClasses={["bg-intro_image_1", "bg-intro_image_2"]}
      />
      <p
        style={{ lineHeight: 1.1 }}
        className={`w-[55%] break-words mt-10 ml-10 ${
          bgCount == 2 ? "text-black" : ""
        }`}
      >
        Global Temperature change (1850-2022)
      </p>
    </div>
  );
};
export default Introduction;
