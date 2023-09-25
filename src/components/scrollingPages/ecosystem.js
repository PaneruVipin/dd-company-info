import EcosystemCard from "../cards/ecosystemCard";

const Ecosystem = () => {
  const data = [
    [
      {
        id: 1,
        text: "CSS",
        websiteLogo: "css-logo.png",
        // theme: "primary",
        height: "min",
      },
      {
        id: 2,
        text: "WASTE AI",
        goToThisPage: "https://google.com",
        theme: "primary",
      },
    ],
    [
      {
        id: 3,
        text: "KABADPE",
        goToThisPage: "https://google.com",
        plusIcon: "https://google.com",
        theme: "secondry",
      },
      {
        id: 4,
        text: "Waste to wealth journey starts here",
        plusIcon: "https://google.com",
        // theme: "primary",
      },
    ],
    [
      {
        id: 5,
        text: `Don’t Buy, untill
      necessary
      buy green when
      you need
      `,
        plusIcon: "https://google.com",
        // theme: "primary",
      },
      {
        id: 6,
        text: `THE GREEN
      SAMAN SHOP`,
        goToThisPage: "https://google.com",
        plusIcon: "https://google.com",
        theme: "green",
      },
    ],
    [
      {
        id: 7,
        text: `CLIM
      CONNECT`,
        goToThisPage: "https://google.com",
        plusIcon: "https://google.com",
        theme: "blue",
        height: "min",
      },
      {
        id: 8,
        text: `Let people know
      your green
      initiatives
      `,
        plusIcon: "https://google.com",
        theme: "primary",
      },
    ],
  ];
  return (
    <div className="space-y-10 ">
      <h1 className=" text-center font-bold text-[50px] font-family-1 text-black">
        CSS ecosystem to fight Global warming
      </h1>
      <div className="flex justify-between">
        {data.map((column, i) => (
          <div className="flex flex-col w-[23%] gap-y-2 h-[30rem]" key={i}>
            {column.map(
              ({
                id,
                text,
                plusIcon,
                theme,
                goToThisPage,
                websiteLogo,
                height,
              }) => (
                <div
                  key={id}
                  className={`${height == "min" ? "h-64" : "h-full"}`}
                >
                  <EcosystemCard
                    websiteLogo={websiteLogo}
                    plusIcon={plusIcon}
                    text={text}
                    goToThisPage={goToThisPage}
                    theme={theme}
                  />
                </div>
              )
            )}
          </div>
        ))}
      </div>
    </div>
  );
};
export default Ecosystem;
