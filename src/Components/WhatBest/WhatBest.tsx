import { ChevronDown } from "lucide-react";
import { useState, type ElementType } from "react";
import { ThreeLine, WhyBest1, WhyBest2, WhyBest3 } from "../../Icons";
import Container from "../../Shared/Container";

import RectangleDot from "../../Icons/rectangleDot.svg";
import SmallDot from "../../Icons/smallSqureDot.svg";

export default function WhatBest() {
  const [selected, setSelected] = useState<number | null>(null);
  type BestArrType = {
    icon: ElementType;
    title: string;
    description: string;
  };

  const bestArr: BestArrType[] = [
    {
      icon: WhyBest1,
      title: " Lowest Price",
      description:
        "Practice what you learned on realistic lorem quis test questions testing.",
    },
    {
      icon: WhyBest2,
      title: " Fast Process & Loan",
      description:
        "Practice what you learned on realistic lorem quis test questions testing.",
    },
    {
      icon: WhyBest3,
      title: " Guaranteed Return & Claim",
      description:
        "Practice what you learned on realistic lorem quis test questions testing.",
    },
  ];

  return (
    <Container className="mt-35">
      <div className="flex gap-40">
        {/* left */}
        <div className="w-full lg:w-1/2 space-y-12 ">
          <div className="flex justify-between items-end gap-12">
            <div>
              <img src={SmallDot} alt="image" />
            </div>

            <div className="border border-[#ffae10] space-y-4 p-8.5 max-w-[302px] bg-[#fff3c9] rounded-tl-[40px] rounded-br-[40px]">
              <h3 className="text-4xl font-semibold text-[#ffae10]">
                10million+
              </h3>
              <p className="text-lg text-black/70">
                Customers trust us & have bought insurance.
              </p>
            </div>
          </div>

          <div className="flex justify-between gap-12">
            <div className="border border-[#9650ef] bg-[#a25bfb33] max-w-[292px] space-y-4 p-8.5 rounded-tl-[40px] rounded-br-[40px] flex flex-col justify-center relative">
              <h3 className="text-[#9650ef] text-4xl font-semibold">
                50+ Insurance
              </h3>
              <p className="text-lg text-black/70">
                Partnered with us so that you can compare easily & transparently
              </p>

              <div className="absolute -bottom-12 -left-12">
                <ThreeLine />
              </div>
            </div>
            <div>
              <div className="border border-[#00bde6] space-y-4 p-8.5 bg-[#00d1ff33] rounded-tl-[40px] rounded-br-[40px]">
                <h3 className="text-[27px] text-[#00bde6] font-semibold">
                  Claims
                </h3>
                <p className="text-lg text-black/70">
                  Get Support by expert easily.
                </p>
              </div>

              <div className="mt-7.5">
                <img src={RectangleDot} alt="image" />
              </div>
            </div>
          </div>
        </div>

        {/* right */}
        <div className="w-full lg:w-1/2">
          <p className="text-black/30 uppercase">Why Choose Us</p>
          <h3 className="text-[58px] font-semibold">What makes us the best.</h3>

          <div className="space-y-5 my-10 h-112.5">
            {bestArr.map((best, index) => (
              <div
                key={index}
                className="shadow-sm shadow-gray-200 relative  rounded-xl  "
              >
                <div
                  onClick={() =>
                    setSelected((prev) => (prev === index ? null : index))
                  }
                  className={`flex justify-between cursor-pointer  ${
                    index === selected ? "pt-6 px-6" : "p-6"
                  }`}
                >
                  <div className="flex gap-5  ">
                    <best.icon />

                    <div>
                      <h3 className="text-2xl font-semibold">{best?.title}</h3>
                    </div>
                  </div>
                  <div
                    className={`${
                      index === selected && "rotate-180"
                    } text-gray-500`}
                  >
                    <ChevronDown />
                  </div>
                </div>

                <div
                  className={`flex transition-all duration-1000 ease-in-out ${
                    index === selected
                      ? "max-h-50 opacity-100 pt-3 pb-6 visible"
                      : "max-h-0 opacity-0 invisible "
                  }`}
                >
                  <div className="w-19 shrink-0"></div>
                  <p className="text-lg text-[#212529] max-w-113">
                    {best?.description}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </Container>
  );
}
