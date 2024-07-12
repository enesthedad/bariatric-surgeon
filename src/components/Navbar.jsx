import React from "react";
import { GiHealthPotion } from "react-icons/gi";

const Navbar = () => {
  return (
    <div className="  p-4 flex  xl:max-w-[1080px] lg:max-w-[786px] max-w-[1000px] min-w-[768px] mx-auto justify-between items-center">
      <a href="/" className="text-stone-800 font-bold text-[48px] ">
        <GiHealthPotion className=" font-bold rounded-lg " />
      </a>
      <div className="flex gap-4 items-center text-stone-400">
        <a
          href="/about"
          className=" hover:text-stone-700 hover:underline uppercase font-semibold  hover:font-semibold hover:transition-all hover:duration-300"
        >
          About Me
        </a>
        <a
          className=" hover:text-stone-700 hover:underline uppercase font-semibold  hover:font-semibold hover:transition-all hover:duration-300"
          href="/operations"
        >
          Operations
        </a>
        <a
          className=" hover:text-stone-700 hover:underline uppercase font-semibold  hover:font-semibold hover:transition-all hover:duration-300"
          href="/patients"
        >
          Our Patients
        </a>
        <a
          className=" hover:text-stone-700 hover:underline uppercase font-semibold  hover:font-semibold hover:transition-all hover:duration-300"
          href="/contacts"
        >
          Contacts
        </a>
      </div>
    </div>
  );
};

export default Navbar;
