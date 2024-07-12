import React from "react";
import { CiLink } from "react-icons/ci";
import { FaEnvelopeOpen, FaPhone } from "react-icons/fa";
import { FaLocationPin } from "react-icons/fa6";
import FooterQuickLinks from "./FooterQuickLinks";
import FooterLinks from "./FooterLinks";
import FooterServices from "./FooterServices";
import Seperator from "./Seperator";
const Footer = () => {
  return (
    <div className="w-full flex flex-col items-center justify-center bg-stone-800 ">
      <div className="p-4 max-w-[1440px] md:min-w-[720px] min-w-[640px] xl:min-w-[1080px] justify-between items-start">
        <FooterLinks />
        <Seperator />
      </div>

      <div className="p-4  max-w-[1440px] md:min-w-[720px] min-w-[640px] xl:min-w-[1080px] justify-between items-start text-stone-50   bg-stone-800 flex">
        <div className=" flex flex-col gap-3 max-w-[300px] p-3">
          <h4 className="text-white font-semibold text-lg">
            Contact Information
          </h4>
          <a
            href=""
            className="group p-2 rounded-md hover:bg-stone-200 hover:text-stone-800  text-stone-400 flex gap-1 items-start"
          >
            <span className=" font-semibold flex items-center gap-1 group-hover:text-stone-800 text-stone-200">
              <FaLocationPin />
              Address:
            </span>{" "}
            123 Health Street, Medical City, ST 12345
          </a>
          <a
            href=""
            className="group p-2 rounded-md hover:bg-stone-200 hover:text-stone-800  text-stone-400 flex gap-1 items-center"
          >
            <span className="font-semibold flex items-center gap-1 group-hover:text-stone-800 text-stone-200">
              <FaPhone /> Phone:
            </span>{" "}
            +1 (234) 567-8901
          </a>
          <a
            href=""
            className="group p-2 rounded-md hover:bg-stone-200 hover:text-stone-800  text-stone-400 flex gap-1 items-center"
          >
            <span className="font-semibold flex items-center gap-1 group-hover:text-stone-800 text-stone-200">
              <FaEnvelopeOpen />
              Email:
            </span>{" "}
            contact@drjohnsmith.com
          </a>
        </div>
        <FooterQuickLinks />
        <FooterServices />
      </div>
    </div>
  );
};

export default Footer;
