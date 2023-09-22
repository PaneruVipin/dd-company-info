const Introduction = () => {
  // const [bgCount, setBgCount] = useState(2);
  // const [bg, setBg] = useState("");
  // useEffect(() => {
  //   if (bgCount < 3) {
  //     setTimeout(() => {
  //       setBg("bg-intro_image_" + bgCount);
  //       setBgCount(bgCount + 1);
  //     }, 5000);
  //   } else {
  //     setBgCount(1);
  //   }
  // }, [bgCount]);
  return (
    <>
      <div
        className={`min-h-[80vh] max-w-screen bg-cover bg-center font-family-1 text-[white] text-[2rem] bg-intro_image_2  `}
      >
        <p
          style={{ lineHeight: 1.1 }}
          className={`w-[55%] break-words pt-10 ml-[12%] text-center`}
        >
          Global Temperature change
          <br /> (1850-2022)
        </p>
        <div className=" ml-[8%] mt-10 text-[3.67rem] font-thin ">
          <p>#Bring back blue</p>
          <p
            style={{ lineHeight: 1.1 }}
            className=" p-4 bg-[#23d5d7] w-fit bg-opacity-80 rounded-3xl"
          >
            Lets bring climate
            <br /> stripes from red to blue <br />
            by decrease CO2
          </p>
        </div>
      </div>
      <div
        className={`flex font-family-1 items-center text-[black] px-[5%] py-[3%]`}
      >
        <img
          className="h-[80vh] rounded-md w-[33%] object-cover"
          src="https://www.thekabadiwala.com/images/individual/plant.webp"
        />
        <div>
          <h3 style={{ lineHeight: 1.1 }} className="text-[3.67rem] font-thin">
            Know your Contribution to the environment
          </h3>
          <p style={{ lineHeight: 1.1 }}>
            The Kabadiwala app allows you to check your environmental impact for
            the amount of scrap you sold to us. The impact is shown in terms of
            the natural resources you saved from over-exploitation or the units
            of energy you preserved for a sustainable future.
          </p>
        </div>
      </div>
    </>
  );
};
export default Introduction;
