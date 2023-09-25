import { IoAddCircleOutline, IoArrowForwardOutline } from "react-icons/io5";
const EcosystemCard = ({
  theme,
  goToThisPage,
  text,
  plusIcon,
  websiteLogo,
}) => {
  return (
    <div
      className={`p-4   border  flex flex-col  bg-red-500 justify-between rounded-xl ${
        websiteLogo ? "mt-12 relative z-0" : "h-full"
      }`}
    >
      {websiteLogo ? (
        <div className="flex absolute inset-x-0 -top-12 ">
          <img
            src="css-logo.png"
            className="rounded-full w-20 bg-black h-20 object-contain mx-auto"
          />
        </div>
      ) : null}
      <div className="flex justify-end">
        <a className=" cursor-pointer ">
          <IoAddCircleOutline className="w-8 h-8" />
        </a>
      </div>
      <div className="space-y-3">
        <div>{text}</div>
        {goToThisPage ? (
          <div className="flex">
            <a href={goToThisPage} target="_blank" className=" cursor-pointer">
              <IoArrowForwardOutline className="w-8 h-8" />
            </a>
          </div>
        ) : null}
      </div>
    </div>
  );
};
export default EcosystemCard;
