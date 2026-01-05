import { ChevronDown } from "lucide-react";
import { useState, type ElementType } from "react";
import { WhyBest1, WhyBest2, WhyBest3 } from "../../Icons";
import Container from "../../Shared/Container";

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
    <Container>
      <div className="flex">
        {/* left */}
        <div className="w-1/2"></div>

        {/* right */}
        <div className="w-1/2">
          <p className="text-black/30 uppercase">Why Choose Us</p>
          <h3 className="text-[58px] font-semibold">What makes us the best.</h3>

          <div className="space-y-5 my-10 h-[450px]">
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
