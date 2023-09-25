import { IoAddCircleOutline, IoArrowForwardOutline } from "react-icons/io5";
const EcosystemCard = ({}) => {
  return (
    <div className="p-4 mt-20 relative z-0 flex flex-col h-40 w-40 bg-red-500 justify-between rounded-xl">
      <div className="flex absolute inset-x-0 -top-20 bg-white">
        <div className="bg-black w-10 h-10 mx-auto"></div>
      </div>
      <div className="flex justify-end">
        <a className=" cursor-pointer ">
          <IoAddCircleOutline className="w-8 h-8" />
        </a>
      </div>
      <div className="flex">
        <a className=" cursor-pointer">
          <IoArrowForwardOutline className="w-8 h-8" />
        </a>
      </div>
    </div>
  );
};
export default EcosystemCard;
