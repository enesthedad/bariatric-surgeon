import React, { useState } from "react";

const ServiceCard = () => {
  const operations = [
    {
      title: "Facial Rejuvenation",
      operations: [
        {
          title: "Facelift",
          definition: "Restore youthful contours and reduce signs of aging.",
        },
        {
          title: "Eyelid Surgery (Blepharoplasty)",
          definition: "Brighten and refresh your eye area",
        },
        {
          title: "Rhinoplasty",
          definition: "Enhance the shape and function of your nose",
        },
      ],
    },
    {
      title: "Body Contouring",
      operations: [
        {
          title: "Liposuction",
          definition: "Remove stubborn fat deposits and sculpt your body",
        },
        {
          title: "Tummy Tuck (Abdominoplasty)",
          definition: "Achieve a flatter, firmer abdomen",
        },
        {
          title: "Mommy Makeover",
          definition: "Comprehensive post-pregnancy body restoration",
        },
      ],
    },
    {
      title: "Breast Surgery",
      operations: [
        {
          title: "Breast Augmentation",
          definition: "Enhance breast size and shape with implants",
        },
        {
          title: "Breast Lift (Mastopexy)",
          definition: "Elevate and firm sagging breasts",
        },
        {
          title: "Breast Reduction",
          definition: "Alleviate discomfort and achieve a balanced figure",
        },
      ],
    },
    {
      title: "Non-Surgical Treatments",
      operations: [
        {
          title: "Botox and Fillers",
          definition: "Smooth wrinkles and restore volume",
        },
        {
          title: "Laser Skin Resurfacing",
          definition: "Improve skin texture and tone",
        },
        {
          title: "Chemical Peels",
          definition: "Revitalize your skin with professional exfoliation",
        },
      ],
    },
  ];

  return (
    <div className="grid grid-cols-1 my-4 md:grid-cols-2 lg:grid-cols-2 items-center justify-items-center gap-4">
      {operations.map((operation) => (
        <div className="group flex mx-auto items-center justify-center  text-stone w-[250px] h-[250px]   md:w-[300px] md:h-[300px] xl:w-[350px] xl:h-[350px] border-2 border-stone-800 rounded-lg">
          <>
            <h2 className="group-hover:hidden ">{operation.title}</h2>
            <div className="hidden group-hover:inline ">
              {operation.operations.map((operation, index) => (
                <div className="flex flex-col   gap-2 p-2">
                  <div className="font-semibold group2 hover:bg-stone-900 hover:text-white text-center group w-full p-2 rounded-md border-2 border-stone-900">
                    <p className="group2-hover:hidden inline">
                      {operation.title}
                    </p>
                  </div>
                </div>
              ))}
            </div>
          </>
        </div>
      ))}
    </div>
  );
};

export default ServiceCard;
