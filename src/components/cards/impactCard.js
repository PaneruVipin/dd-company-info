const ImpactCard = ({ children, title, quantity }) => {
  return (
    <>
      <div className="flex flex-col gap-y-2 w-44">
        {children}
        <span className="text-black font-semibold">{quantity}</span>
        <p className="text-[#2ac4c8]">{title}</p>
      </div>
    </>
  );
};
export default ImpactCard;
