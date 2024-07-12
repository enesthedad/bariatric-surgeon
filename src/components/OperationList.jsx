import React from "react";
import Seperator from "./Seperator";
import OperationCard from "./OperationCard";
const operationDetailList = [
  {
    mainTitle: "Facial Rejuvenation",
    subOperations: [
      {
        title: "Facelift",
        overview:
          "A facelift, or rhytidectomy, is designed to reduce the visible signs of aging in the face and neck. This procedure helps to eliminate sagging skin, deep creases, and jowls, resulting in a more youthful and refreshed appearance.",
        procedure:
          "The surgery involves lifting and tightening the underlying muscles and tissues of the face and removing excess skin. Incisions are typically made around the hairline and ears to minimize visible scarring.",
        recovery:
          "Most patients can return to normal activities within 2-3 weeks. Swelling and bruising are common but should subside within a few weeks.",
        url: "https://youtu.be/J0POPJJBmvA",
      },
      {
        title: "Eyelid Surgery (Blepharoplasty)",
        overview:
          "Eyelid surgery is performed to improve the appearance of the eyelids. It can address issues such as droopy upper eyelids, excess skin, and puffiness or bags under the eyes.",
        procedure:
          "Incisions are made in the natural creases of the eyelids or inside the lower eyelid. Excess skin, fat, and muscle are then removed or repositioned to create a more youthful and rested look.",
        recovery:
          "Patients typically experience mild swelling and bruising for 1-2 weeks. Full recovery can take several months.",
        url: "https://youtu.be/1_iN6KnrX5U",
      },
      {
        title: "Rhinoplasty",
        overview:
          "Eyelid surgery is performed to improve the appearance of the eyelids. It can address issues such as droopy upper eyelids, excess skin, and puffiness or bags under the eyes.",
        procedure:
          "Incisions are made in the natural creases of the eyelids or inside the lower eyelid. Excess skin, fat, and muscle are then removed or repositioned to create a more youthful and rested look.",
        recovery:
          "Patients typically experience mild swelling and bruising for 1-2 weeks. Full recovery can take several months.",
        url: "https://youtu.be/dyNpojnbNT4",
      },
    ],
  },
  {
    mainTitle: "Body Contouring",
    subOperations: [
      {
        title: "Liposuction",
        overview:
          " Liposuction removes excess fat deposits from specific areas of the body, such as the abdomen, thighs, hips, and arms, to improve body contours and proportion.",
        procedure:
          "Small, discreet incisions are made, and a thin tube (cannula) is inserted to suction out the fat. Various techniques, including tumescent, ultrasound-assisted, and laser-assisted liposuction, may be used.",
        recovery:
          "Patients can expect swelling and bruising for several weeks. Compression garments are typically worn to help shape the treated areas.",
        url: "https://youtu.be/J0POPJJBmvA",
      },
      {
        title: "Tummy Tuck (Abdominoplasty)",
        overview:
          "A tummy tuck removes excess skin and fat from the abdomen and tightens the underlying muscles to create a firmer and more toned midsection.",
        procedure:
          "The surgery involves a horizontal incision between the pubic hairline and the navel. Excess skin is removed, and weakened muscles are repaired.",
        recovery:
          "Initial recovery time is about 2-4 weeks, with full recovery taking several months. Patients are advised to avoid strenuous activities during the initial recovery period.",
        url: "https://youtu.be/J0POPJJBmvA",
      },
      {
        title: "Mommy Makeover",
        overview:
          "A mommy makeover is a combination of procedures designed to restore a woman's pre-pregnancy body. It typically includes breast surgery, tummy tuck, and liposuction.",
        procedure:
          "The specific procedures included in a mommy makeover are tailored to each patient's needs and goals. Surgery is often performed in stages.",
        recovery:
          "Recovery times vary depending on the procedures performed. Most patients can return to normal activities within 4-6 weeks.",
        url: "https://youtu.be/J0POPJJBmvA",
      },
    ],
  },
  {
    mainTitle: "Breast Surgery",
    subOperations: [
      {
        title: "Breast Augmentation",
        overview:
          "Breast augmentation enhances the size and shape of the breasts using implants or fat transfer. This procedure is ideal for women looking to increase breast volume or achieve better symmetry.",
        procedure:
          "Implants are inserted through incisions made in inconspicuous areas to minimize visible scarring. The implants can be placed under the chest muscle or over it.",
        recovery:
          "Most patients return to work within a week, but strenuous activities should be avoided for 4-6 weeks. Swelling and discomfort are common in the initial recovery period.",
        url: "https://youtu.be/J0POPJJBmvA",
      },
      {
        title: "Breast Lift (Mastopexy)",
        overview:
          "A breast lift raises and firms the breasts by removing excess skin and tightening the surrounding tissue to reshape and support the new breast contour.",
        procedure:
          " Incisions are made around the areola, vertically down to the breast crease, and along the breast crease. Excess skin is removed, and the nipple and areola are repositioned.",
        recovery:
          "Initial recovery time is 1-2 weeks, with full recovery taking several months. Patients are advised to wear a supportive bra during the recovery period.",
        url: "https://youtu.be/J0POPJJBmvA",
      },
      {
        title: "Breast Reduction",
        overview:
          "Breast reduction surgery removes excess breast fat, glandular tissue, and skin to achieve a breast size that is more proportional to your body and to alleviate discomfort associated with overly large breasts.",
        procedure:
          "Incisions are typically made around the areola, vertically down to the breast crease, and along the breast crease. Excess tissue is removed, and the remaining breast tissue is reshaped and lifted.",
        recovery:
          "Most patients can return to work within 1-2 weeks, with full recovery taking several months. Swelling and bruising are common, and patients should avoid strenuous activities for at least 4-6 weeks.",
        url: "https://youtu.be/J0POPJJBmvA",
      },
    ],
  },
  {
    mainTitle: "Non-Surgical Treatments",
    subOperations: [
      {
        title: "Botox and Fillers",
        overview:
          "Botox and dermal fillers are non-surgical treatments that can smooth wrinkles, restore facial volume, and enhance facial features with minimal downtime.",
        procedure:
          "Botox is injected into specific muscles to reduce the appearance of wrinkles by temporarily paralyzing the muscles. Dermal fillers are injected beneath the skin to restore volume and smooth lines.",
        recovery:
          "There is minimal downtime, and most patients can return to their normal activities immediately. Mild swelling or bruising may occur but typically resolves within a few days.",
        url: "https://youtu.be/J0POPJJBmvA",
      },
      {
        title: "Laser Skin Resurfacing",
        overview:
          "Laser skin resurfacing improves skin texture and tone by removing the outer layers of damaged skin, promoting the growth of new, healthy skin.",
        procedure:
          " A laser device is used to target and remove damaged skin cells. The type of laser and intensity of the treatment can be customized based on the patient's needs.",
        recovery:
          "Recovery time varies depending on the depth of the treatment. Mild treatments may require only a few days of downtime, while deeper treatments may require 1-2 weeks for full recovery.",
        url: "https://youtu.be/J0POPJJBmvA",
      },
      {
        title: "Chemical Peels",
        overview:
          "Chemical peels use a chemical solution to exfoliate the skin, removing the damaged outer layers and revealing smoother, more youthful skin beneath.",
        procedure:
          "The chemical solution is applied to the skin and left on for a specified period before being neutralized and removed. The depth of the peel can be adjusted based on the patient's needs.",
        recovery:
          "Recovery time varies depending on the depth of the peel. Superficial peels may require no downtime, while medium and deep peels may require several days to a week for full recovery.",
        url: "https://youtu.be/J0POPJJBmvA",
      },
    ],
  },
];
const OperationList = () => {
  return (
    <div className="mb-8">
      {operationDetailList.map((operationDetail) => (
        <div className="mb-2 mt-20 ">
          <h4 className="text-[36px]  text-center mb-2">
            {operationDetail.mainTitle}
          </h4>
          <Seperator />
          {operationDetail.subOperations.map((subOperations) => (
            <OperationCard
              title={subOperations.title}
              procedure={subOperations.procedure}
              overview={subOperations.overview}
              recovery={subOperations.recovery}
              url={subOperations.url}
            />
          ))}
        </div>
      ))}
    </div>
  );
};

export default OperationList;
