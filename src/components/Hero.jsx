import React from "react";
import { FaAngleDoubleDown } from "react-icons/fa";
import ServiceCard from "./ServiceCard";

const Hero = () => {
  return (
    <div className="flex justify-center items-center  flex-col  gap-3">
      <h2 className="text-[36px] font-semibold tracking-wider">
        Welcome to Dr. Emily Johnson's Practice
      </h2>
      <h3 className="text-[24px]">
        Transforming Beauty, Enhancing Confidence.
      </h3>
      <button className="bg-main-gradient p-2 rounded-md flex items-center gap-1 group hover:bg-stone-800 hover:text-white hover:transition-colors hover:delay-100 transition">
        <FaAngleDoubleDown /> Learn More!
      </button>

      <ServiceCard />
    </div>
  );
};

export default Hero;
