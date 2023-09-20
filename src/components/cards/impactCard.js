const ImpactCard = ({ children, title, quantity }) => {
  return (
    <>
      <div className="flex flex-col  items-center gap-y-2 w-48 ">
        {children}
        <span className="text-black font-semibold">{quantity}</span>
        <p className="text-[#2ac4c8]">{title}</p>
      </div>
    </>
  );
};
export default ImpactCard;
