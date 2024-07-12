import React from "react";

const FooterServices = () => {
  return (
    <div>
      <div className=" flex flex-col gap-3 p-3">
        <h4 className="text-white font-semibold text-lg">Services</h4>
        <a
          href="/operations"
          className="px-2 py-1 rounded-md hover:bg-stone-200 hover:text-stone-800  text-stone-400"
        >
          Facial Rejuvenation
        </a>
        <a
          href="/operations"
          className="px-2 py-1 rounded-md hover:bg-stone-200 hover:text-stone-800  text-stone-400"
        >
          Body Contouring
        </a>
        <a
          href="/operations"
          className="px-2 py-1 rounded-md hover:bg-stone-200 hover:text-stone-800  text-stone-400"
        >
          Breast Surgery
        </a>
        <a
          href="/operations"
          className="px-2 py-1 rounded-md hover:bg-stone-200 hover:text-stone-800  text-stone-400"
        >
          Non-Surgical Treatments
        </a>
      </div>
    </div>
  );
};

export default FooterServices;
