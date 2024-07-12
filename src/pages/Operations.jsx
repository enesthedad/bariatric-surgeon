import React from "react";
import OperationList from "../components/OperationList";
import { FaChevronDown } from "react-icons/fa";
const Operations = () => {
  return (
    <div className=" flex flex-col  items-center w-full">
      <div className="xl:max-w-[1080px] h-[720px] lg:max-w-[786px] max-w-[1000px] min-w-[768px]  flex items-center flex-col">
        <div className=" mt-[100px] py-[32px] flex items-center justify-between flex-col">
          <h4 className="text-[56px]  top-5 bg-stone-900 px-5 rounded-lg text-stone-100 text-center">
            Our Surgical Procedures
          </h4>
          <p className="text-xl tracking-wider  text-center  bottom-[36px]  py-10">
            At Dr. Emily Johnson's practice, we offer a comprehensive range of
            plastic surgery procedures designed to help you achieve your
            aesthetic goals. Below is an overview of our key surgical
            procedures, providing you with essential information about each
            surgery.
          </p>

          <button className="flex items-center gap-1 bg-main-gradient text-stone-800  self-center px-4 rounded-md  font-bold text-xl uppercase py-2">
            See our operations
            <FaChevronDown />
          </button>
        </div>
      </div>
      <div className=" xl:max-w-[1080px] flex flex-col gap-5 lg:max-w-[786px] max-w-[1000px] min-w-[768px]">
        <OperationList />
      </div>
    </div>
  );
};

export default Operations;
