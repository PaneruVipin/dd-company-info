import { IoWater } from "react-icons/io5";
import { BsFillTreeFill } from "react-icons/bs";
import { FcElectricity } from "react-icons/fc";
import { MdOilBarrel } from "react-icons/md";
const Introduction = () => {
  const icons = [
    { id: 1, name: "Water", icon: IoWater },
    { id: 2, name: "Trees", icon: BsFillTreeFill },
    { id: 3, name: "Electricity", icon: FcElectricity },
    { id: 4, name: "Oil", icon: MdOilBarrel },
  ];
  return (
    <>
      <div
        className={`min-h-[90vh] max-w-screen bg-cover bg-center font-family-1 text-[white] text-[2rem] bg-intro_image_2 `}
      >
        <p
          style={{ lineHeight: 1.1 }}
          className={`w-[55%] break-words pt-10 ml-[12%] text-center`}
        >
          Global Temperature change
          <br /> (1850-2022)
        </p>
        <div className=" ml-[8%] mt-5 text-[2rem] font-thin ">
          <p>#BRINGBACKBLUE</p>
          <p
            style={{ lineHeight: 1.1 }}
            className=" p-4 bg-[#4e8a94] w-fit bg-opacity-75 rounded-3xl text-[2.5rem]"
          >
            Lets bring climate
            <br /> stripes from red to blue <br />
            by decrease CO2
          </p>
        </div>
      </div>
      <div
        className={`flex gap-x-10 justify-between font-family-1 items-center text-[black]  px-[7%] py-[3%]  bg-white`}
      >
        <img
          className="h-[80vh] w-[50%] object-contain rounded-2xl"
          src="plant.jpg"
        />
        <div className="space-y-8">
          <h3
            style={{
              fontSize: "calc(1.525rem + 2.0625vw)",
            }}
            className=" font-[700] leading-[105%]"
          >
            What are <br />
            <span className="text-[#44b31f]"> climate stripes</span>
          </h3>
          <p className="text-[1.125rem] font-[400] leading-[150%]">
            Climate stripes, also known as climate barcodes or climate
            timelines, are a visual representation of global or regional
            temperature data over a period of time, typically decades or
            centuries. They were popularized by climate scientist Ed Hawkins and
            are used to communicate the long-term trends and variations in
            temperature. <br />
            <br />
            The concept behind climate stripes is simple yet powerful. Each
            stripe in the bar represents a single year's temperature, with
            colors indicating whether that year was warmer or cooler than the
            long-term average. Typically, shades of blue are used for cooler
            years, while shades of red are used for warmer years. The result is
            a visually striking and intuitive representation of temperature
            changes over time
          </p>
          {/* <div className="flex items-center gap-x-6 font-normal">
            {icons.map(({ id, name, icon: Icon }) => (
              <div key={id} className="text-center space-y-4">
                <Icon className="w-20 h-20 text-green-400 block" />
                <span className="block">{name}</span>
              </div>
            ))}
          </div> */}
        </div>
      </div>
    </>
  );
};
export default Introduction;
