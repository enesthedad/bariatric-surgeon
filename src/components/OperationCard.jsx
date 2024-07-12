import React, { useState } from "react";
import { IoClose } from "react-icons/io5";
import ReactPlayer from "react-player";

const OperationCard = ({ title, overview, recovery, procedure, url }) => {
  const [open, setOpen] = useState(false);
  const handleClick = () => {
    open === false
      ? document.body.classList.add("overflow-hidden")
      : document.body.classList.remove("overflow-hidden");
    setOpen(!open);
  };
  return (
    <div
      onClick={() => handleClick()}
      className=" bg-stone-50 mt-4  shadow-md hover:shadow-lg hover:bg-stone-900 group  hover:cursor-pointer p-3 rounded-md"
    >
      <h5 className=" font-semibold text-2xl tracking-widest uppercase py-4 text-stone-900  group-hover:text-stone-50  text-center">
        {title}
      </h5>
      <p className="group-hover:text-stone-300 text-center mb-4">
        {" "}
        <span className="font-semibold group-hover:text-stone-100 tracking-wide text-stone-700">
          Overview:
        </span>{" "}
        {overview}
      </p>
      <p className="group-hover:text-stone-300 text-center mb-4">
        <span className="font-semibold group-hover:text-stone-100 tracking-wide text-stone-700">
          Procedure:
        </span>{" "}
        {procedure}
      </p>
      <p className="group-hover:text-stone-300 text-center mb-4">
        <span className="font-semibold group-hover:text-stone-100 tracking-wide text-stone-700">
          Recovery:
        </span>{" "}
        {recovery}
      </p>
      {open && (
        <div className="h-screen w-screen bg-stone-900 fixed inset-0 flex items-center justify-center z-50  left-0">
          <p
            onClick={() => handleClick}
            className="text-white top-10 absolute left-10"
          >
            <IoClose />
          </p>
          <ReactPlayer className="h-[300px]" url={url} controls={true} />
        </div>
      )}
    </div>
  );
};

export default OperationCard;
