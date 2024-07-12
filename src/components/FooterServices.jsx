import React from "react";

const FooterServices = () => {
  return (
    <div>
      <div className=" flex flex-col gap-3 p-3">
        <h4 className="text-white font-semibold text-lg">Services</h4>
        <a
          href=""
          className="px-2 py-1 rounded-md hover:bg-stone-200 hover:text-stone-800  text-stone-400"
        >
          Bariatric Surgery
        </a>
        <a
          href=""
          className="px-2 py-1 rounded-md hover:bg-stone-200 hover:text-stone-800  text-stone-400"
        >
          Laparotomy
        </a>
        <a
          href=""
          className="px-2 py-1 rounded-md hover:bg-stone-200 hover:text-stone-800  text-stone-400"
        >
          Gallbladder Surgery
        </a>
        <a
          href=""
          className="px-2 py-1 rounded-md hover:bg-stone-200 hover:text-stone-800  text-stone-400"
        >
          Appendectomy
        </a>
        <a
          href=""
          className="px-2 py-1 rounded-md hover:bg-stone-200 hover:text-stone-800  text-stone-400"
        >
          Colectomy
        </a>
      </div>
    </div>
  );
};

export default FooterServices;
