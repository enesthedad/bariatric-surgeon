import React, { useState } from "react";
import { IoClose } from "react-icons/io5";
import ReactPlayer from "react-player";
import Seperator from "./Seperator";

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
      className=" bg-stone-50 mt-4   shadow-md hover:shadow-lg hover:bg-main-gradient group  hover:cursor-pointer p-3 rounded-md"
    >
      <h5 className=" uppercase text-2xl tracking-widest  py-4 text-stone-900  group-hover:text-stone-50  text-center">
        {title}
      </h5>

      {open && (
        <div className="h-screen w-screen bg-[#fafafa] fixed inset-0 flex items-center justify-center z-50  left-0">
          <p
            onClick={() => handleClick}
            className="text-stone-900 top-10 absolute left-10"
          >
            <IoClose />
          </p>
          <div className="flex flex-col items-center text-xl text-stone-600 gap-5 max-w-[800px]">
            <ReactPlayer className="h-[300px]" url={url} controls={true} />
            <Seperator />

            <p className=" text-start  mb-4">
              {" "}
              <span className="font-semibold  tracking-wide text-stone-800">
                Overview:
              </span>{" "}
              {overview}
            </p>
            <Seperator />
            <p className=" text-start mb-4">
              <span className="font-semibold  tracking-wide text-stone-800">
                Procedure:
              </span>{" "}
              {procedure}
            </p>
            <Seperator />

            <p className=" text-start mb-4">
              <span className="font-semibold  tracking-wide text-stone-800">
                Recovery:
              </span>{" "}
              {recovery}
            </p>
            <Seperator />
          </div>
        </div>
      )}
    </div>
  );
};

export default OperationCard;
