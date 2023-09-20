import {
  AiFillTwitterCircle,
  AiFillFacebook,
  AiFillInstagram,
} from "react-icons/ai";
import { BsPinterest } from "react-icons/bs";

const Footer = () => {
  const links = [
    { id: 1, name: "Request Pickup", link: "#" },
    { id: 2, name: "About Us", link: "#about" },
    { id: 3, name: "Management", link: "#" },
    { id: 4, name: "Start Service", link: "#" },
    { id: 5, name: "Contact", link: "#" },
  ];
  const services = [
    { id: 1, name: "Grocery Store", link: "#" },
    { id: 2, name: "Hotel & Restaurant", link: "#" },
    { id: 3, name: "Medical & Hospital", link: "#" },
    { id: 4, name: "Wast Removal", link: "#" },
    { id: 5, name: "Zero Waste", link: "#" },
  ];
  const contacts = [
    { id: 1, name: "+91 98218 61897", link: "tel:+919821861897" },
    {
      id: 2,
      name: "support@thekabadshop.com",
      link: "mailto:support@thekabadshop.com",
    },
    {
      id: 3,
      name: "88, Kundan Nagar, Laxmi Nagar, New Delhi, India",
      link: "#",
    },
  ];
  const socials = [
    { id: 1, icon: AiFillTwitterCircle, link: "" },
    { id: 2, icon: AiFillFacebook, link: "" },
    { id: 3, icon: BsPinterest, link: "" },
    { id: 4, icon: AiFillInstagram, link: "" },
  ];
  return (
    <>
      <div className=" bg-footer_bg break-words ">
        <div className="flex justify-between  px-[2%] py-[4%]">
          <div className="flex flex-col space-y-4 max-w-[25%]">
            <h3 className="text-xl font-bold text-white">About</h3>
            <p>
              Lorem ipsum dolor sit amet, consect etur adi pisicing elit sed do
              eiusmod tempor incididunt ut labore.
            </p>
            <div className="flex gap-x-1">
              {socials.map(({ id, icon: Icon, link }) => (
                <a className="bg-[#2ac4c8] block hover:bg-[#1c898d] cursor-pointer p-3 rounded-full">
                  <Icon className="w-6 h-6" />
                </a>
              ))}
            </div>
          </div>
          <div className="flex flex-col space-y-3 w-48">
            <h3 className="text-xl font-bold text-white">Links</h3>
            {links.map(({ id, name, link }) => (
              <a
                className="   max-w-fit  underline-animation text-gray-700 hover:text-white "
                key={id}
                href={link}
              >
                {name}
              </a>
            ))}
          </div>
          <div className="flex flex-col space-y-3 w-48">
            <h3 className="text-xl font-bold text-white">Services</h3>
            {services.map(({ id, name, link }) => (
              <a
                className="  max-w-fit   underline-animation text-gray-700 hover:text-white "
                key={id}
                href={link}
              >
                {name}
              </a>
            ))}
          </div>
          <div className="flex flex-col space-y-3 w-48  ">
            <h3 className="text-xl font-bold text-white">Contacts</h3>
            {contacts.map(({ id, name, link }) => (
              <a
                className=" max-w-fit  underline-animation text-gray-700 hover:text-white "
                key={id}
                href={link}
              >
                {name}
              </a>
            ))}
          </div>
        </div>
        <div className="py-10 border-t border-t-gray-400">
          <p className="text-center text-md font-normal text-white">
            Copyright © 2023{" "}
            <span className="text-[#2ac4c8]">Climstripe Shift</span> All Rights
            Reserved. | Dev. By:
            <span className="text-[#2ac4c8]"> Digital Dezire</span>
          </p>
        </div>
      </div>
    </>
  );
};
export default Footer;
