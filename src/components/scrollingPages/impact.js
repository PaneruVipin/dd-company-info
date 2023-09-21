import ImpactCard from "../cards/impactCard";

const Impact = () => {
  const impacts = [
    {
      id: 1,
      title: "KGS. OF PLASTIC WE SAVED",
      iconLink: "plastic-ban.gif",
      quantity: 200,
    },
    {
      id: 2,
      title: "NO. OF TREE PLANTED",
      iconLink: "icons8-plant.gif",
      quantity: 432,
    },
    {
      id: 3,
      title: "KGS. OF CO2 OFFSET",
      iconLink: "co2-icon.gif",
      quantity: 2090,
    },
    {
      id: 4,
      title: "KGS. OF PLASTIC RECYCLED",
      iconLink: "icons8-refresh-1.gif",
      quantity: 456,
    },
    {
      id: 5,
      title: "PEOPLE MADE AWARE ON CLIMATE CHANGE",
      iconLink: "icons8-refresh-1.gif",
      quantity: 325,
    },
  ];
  return (
    <div className="text-center space-y-6">
      <span className="text-[#2ac4c8]">Sale Your Waste</span>
      <h1 className="font-bold text-[28px] text-black">Our Impact</h1>
      <div className="flex w-1/2 items-center">
        <span className="w-full h-0.5 bg-[#2ac4c8]"></span>
        <span className=" w-full text-[#2ac4c8]">THE GREEN SAMAN SHOP</span>
        <span className="w-full h-0.5 bg-[#2ac4c8]"></span>
      </div>
      <div className=" flex flex-wrap justify-between">
        {impacts.map(({ id, title, iconLink, quantity }) => (
          <ImpactCard key={id} title={title} quantity={quantity}>
            <img src={iconLink} className="w-10 h-10 bg-contain" />
          </ImpactCard>
        ))}
      </div>
      <div className="flex justify-end   text-[#2ac4c8]">
        <div className="flex w-2/3 justify-between items-center gap-x-3 ">
          <div className="flex w-full items-center">
            <span className="w-full h-0.5 bg-[#2ac4c8]"></span>
            <span className=" w-full ">THE KABAD SHOP</span>
            <span className="w-full h-0.5 bg-[#2ac4c8]"></span>
          </div>
          <div className="flex  w-full  items-center ">
            <span className="w-full h-0.5 bg-[#2ac4c8]"></span>
            <span className="  w-full">PEP TALKS</span>
            <span className="w-full h-0.5 bg-[#2ac4c8]"></span>
          </div>
        </div>
      </div>
    </div>
  );
};
export default Impact;
