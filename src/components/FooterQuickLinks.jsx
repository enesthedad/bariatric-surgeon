import React from "react";

const FooterQuickLinks = () => {
  return (
    <div className=" flex flex-col gap-3 p-3 ">
      <h4 className="text-white font-semibold text-lg">Quick Links</h4>
      <a
        href="/"
        className="group flex items-center gap-1 px-2 py-1 rounded-md hover:bg-stone-200 hover:text-stone-800  text-stone-400"
      >
        Home
      </a>
      <a
        href="/about"
        className="group flex items-center gap-1 px-2 py-1 rounded-md hover:bg-stone-200 hover:text-stone-800  text-stone-400"
      >
        About
      </a>
      <a
        href="/operations"
        className="group flex items-center gap-1 px-2 py-1 rounded-md hover:bg-stone-200 hover:text-stone-800  text-stone-400"
      >
        Services
      </a>
      <a
        href="/patients"
        className="group flex items-center gap-1 px-2 py-1 rounded-md hover:bg-stone-200 hover:text-stone-800  text-stone-400"
      >
        Patients
      </a>
      <a
        href="/patients"
        className="group flex items-center gap-1 px-2 py-1 rounded-md hover:bg-stone-200 hover:text-stone-800  text-stone-400"
      >
        Testimonials
      </a>
      <a
        href="/blog"
        className="group flex items-center gap-1 px-2 py-1 rounded-md hover:bg-stone-200 hover:text-stone-800  text-stone-400"
      >
        Blog
      </a>
      <a
        href="/contacts"
        className="group flex items-center gap-1 px-2 py-1 rounded-md hover:bg-stone-200 hover:text-stone-800  text-stone-400"
      >
        Contacts
      </a>
    </div>
  );
};

export default FooterQuickLinks;
