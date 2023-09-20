import BackgroundImageLoader from "@/lib/backgroundImage";
import { useEffect, useState } from "react";

const Introduction = () => {
  const [bgCount, setBgCount] = useState(1);
  const [bg, setBg] = useState("bg-intro_image_1");
  useEffect(() => {
    if (bgCount < 7) {
      setTimeout(() => {
        setBg("bg-intro_image_" + bgCount);
        setBgCount(bgCount + 1);
      }, 5000);
    } else {
      setBgCount(1);
    }
  }, [bgCount]);
  return (
    <div className={`min-h-screen bg-cover bg-center  ${bg}`}>
      <BackgroundImageLoader
        possibleClasses={[
          "bg-intro_image_1",
          "bg-intro_image_2",
          "bg-intro_image_3",
          "bg-intro_image_4",
          "bg-intro_image_5",
          "bg-intro_image_6",
        ]}
      />
      this is Introduction page{" "}
    </div>
  );
};
export default Introduction;
