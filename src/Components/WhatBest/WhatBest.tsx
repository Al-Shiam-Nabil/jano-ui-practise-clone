import { ChevronDown } from "lucide-react";
import { useRef, useState } from "react";
import { WhyBest1, WhyBest2, WhyBest3 } from "../../Icons";
import Container from "../../Shared/Container";

export default function WhatBest() {
  const [openCollapse, setOpenCollapse] = useState<boolean>(false);
  const collapseRef = useRef<HTMLDivElement | null>(null);
  const handleClick = () => {
    setOpenCollapse((prev) => !prev);

    if (!openCollapse) {
      return null;
    }
  };

  console.log(openCollapse);

  type BestArrType = {
    // icon: ReactNode;
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

  const [selected, setSelected] = useState<number | null>(null);

  return (
    <Container>
      <div className="flex">
        {/* left */}
        <div className="w-1/2"></div>

        {/* right */}
        <div className="w-1/2">
          <p className="text-black/30 uppercase">Why Choose Us</p>
          <h3 className="text-[58px] font-semibold">What makes us the best.</h3>

          <div className="space-y-5 my-10">
            {bestArr.map((best, index) => (
              <div
                key={index}
                onClick={() => setSelected(index)}
                className="border relative  rounded-xl space-y-4"
              >
                <div
                  onClick={handleClick}
                  className="flex justify-between cursor-pointer px-6 pt-6"
                >
                  <div className="flex gap-5  ">
                    <best.icon />
                    {index === selected ? 1 : 0}
                    <div>
                      <h3 className="text-2xl font-semibold">{best?.title}</h3>
                    </div>
                  </div>
                  <div>
                    <ChevronDown />
                  </div>
                </div>

                <div ref={collapseRef} className="flex ">
                  <div className="w-19  shrink-0"></div>
                  <p className="text-lg text-[#212529]  pb-6 max-w-[452px] ">
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
