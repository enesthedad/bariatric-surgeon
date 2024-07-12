import React from "react";
import { FaFacebook, FaInstagramSquare, FaYoutube } from "react-icons/fa";
import { FaSquareXTwitter } from "react-icons/fa6";

const FooterLinks = () => {
  return (
    <div className=" flex flex-row  justify-between  p-4">
      <h4 className="text-white font-semibold text-lg">Follow me</h4>
      <div className="flex">
        <a
          href=""
          className="text-stone-400 flex items-center gap-2 px-2 py-1 rounded-md hover:bg-stone-200 hover:text-stone-800    text-stone-400"
        >
          <FaFacebook />
          Facebook
        </a>
        <a
          href=""
          className="text-stone-400 flex items-center gap-2 px-2 py-1 rounded-md  hover:bg-stone-200 hover:text-stone-800  text-stone-400"
        >
          <FaInstagramSquare />
          Instagram
        </a>
        <a
          href=""
          className="text-stone-400 flex items-center gap-2 px-2 py-1 rounded-md hover:bg-stone-200 hover:text-stone-800  text-stone-400"
        >
          <FaYoutube className="" />
          Youtube
        </a>
        <a
          href=""
          className="text-stone-400 flex items-center gap-2 px-2 py-1 rounded-md hover:bg-stone-200 hover:text-stone-800  text-stone-400"
        >
          <FaSquareXTwitter />
          Twitter
        </a>
      </div>
    </div>
  );
};

export default FooterLinks;
