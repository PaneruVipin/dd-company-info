import ImpactCard from "../cards/impactCard";

const Impact = () => {
  const impacts = [
    { id: 1, title: "KGS. OF PLASTIC WE SAVED", icon: "", quantity: 200 },
    { id: 2, title: "NO. OF TREE PLANTED", icon: "", quantity: 432 },
    { id: 3, title: "KGS. OF CO2 OFFSET", icon: "", quantity: 2090 },
    { id: 4, title: "KGS. OF PLASTIC RECYCLED", icon: "", quantity: 456 },
    {
      id: 5,
      title: "PEOPLE MADE AWARE ON CLIMATE CHANGE",
      icon: "",
      quantity: 325,
    },
  ];
  return (
    <div className="text-center ">
      <span className="text-[#2ac4c8]">Sale Your Waste</span>
      <h1 className="font-bold text-[28px] text-black">Our Impact</h1>
      <div className="flex w-1/2 items-center">
        <span className="w-full h-0.5 bg-[#2ac4c8]"></span>
        <span className=" w-full text-[#2ac4c8]">THE GREEN SAMAN SHOP</span>
        <span className="w-full h-0.5 bg-[#2ac4c8]"></span>
      </div>
      <div className=" flex flex-wrap">
        {impacts.map(({ id, title, icon: Icon, quantity }) => (
          <ImpactCard key={id} title={title} quantity={quantity}>
            {Icon}
          </ImpactCard>
        ))}
      </div>
    </div>
  );
};
export default Impact;
