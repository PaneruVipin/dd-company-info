import { IoAddCircleOutline, IoArrowForwardOutline } from "react-icons/io5";
const EcosystemCard = ({ theme, goToThisPage, text, plusIcon,websiteLogo }) => {
  return (
    <div className="p-4 mt-20 relative z-0 flex flex-col h-40 w-40 bg-red-500 justify-between rounded-xl">
      <div className="flex absolute inset-x-0 -top-12 ">
        <img
          src="css-logo.png"
          className="rounded-full w-20 bg-black h-20 object-contain mx-auto"
        />
      </div>
      <div className="flex justify-end">
        <a className=" cursor-pointer ">
          <IoAddCircleOutline className="w-8 h-8" />
        </a>
      </div>
      <div>Hello world</div>
      <div className="flex">
        <a className=" cursor-pointer">
          <IoArrowForwardOutline className="w-8 h-8" />
        </a>
      </div>
    </div>
  );
};
export default EcosystemCard;
