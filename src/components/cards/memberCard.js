const MemberCard = ({ name, title, image, description }) => {
  return (
    <>
      <div className="flex flex-col w-[28%] items-center gap-y-3 ">
        <h3 className="font-bold text-lg">{name}</h3>
        <span>{title}</span>
        <img className="w-56 h-80 object-cover object-top" src={image} />
        <p>{description}</p>
      </div>
    </>
  );
};
export default MemberCard;
