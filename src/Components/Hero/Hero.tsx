import { Check, ChevronDown } from "lucide-react";

import Hero1 from "../../assets/hero1.png";
import Hero2 from "../../assets/hero2.png";
import AnimationScrollLeftToRight from "../../Shared/AnimationScrollLeftToRight";
import AnimationScrollRightToLeft from "../../Shared/AnimationScrollRightToLeft";
import AnimationScrollY from "../../Shared/AnimationScrollY";
import Container from "../../Shared/Container";

const Hero = () => {
  return (
    <div className=" w-full mt-60 ">
      <div className="hidden xl:block absolute top-0 left-0 overflow-hidden">
        <AnimationScrollLeftToRight>
          <img src={Hero1} alt="hero background image" />
        </AnimationScrollLeftToRight>
      </div>

      <div className="hidden xl:block absolute top-0 right-0 overflow-hidden">
        <AnimationScrollRightToLeft>
          <img src={Hero2} alt="hero background image" />
        </AnimationScrollRightToLeft>
      </div>

      <Container>
        <AnimationScrollY duration={1}>
          <div className=" max-w-4xl text-center mx-auto space-y-10">
            <h1 className="font-extrabold text-5xl/snug md:text-[72px]/sung lg:text-[90px]/snug">
              Everything for your <br />{" "}
              <span className="text-primary">Home</span> & Future.
            </h1>

            <p className="text-xl ">
              Instant everything. Incredible prices. Big heart.
            </p>

            <div className="flex flex-col  sm:flex-row gap-4 sm:gap-0 items-center w-full justify-center">
              <div className="relative inline-block w-full sm:w-auto min-w-62.5 ">
                <select
                  name=""
                  id=""
                  className="border w-full  min-w-[285px] h-[60px]  border-gray-300 rounded-l-md rounded-r-md sm:rounded-r-none bg-gray-50 p-3 px-5  appearance-none outline-none"
                >
                  <option value="">Select insurance type..</option>
                  <option value="">Life insurance</option>
                  <option value="">Health insurance</option>
                  <option value="">Property insurance</option>
                  <option value="">Motor insurance</option>
                </select>

                <div className="absolute right-3 top-4.5 z-10">
                  <ChevronDown></ChevronDown>
                </div>
              </div>

              <div className="flex flex-col gap-4 sm:gap-0 sm:flex-row w-full sm:w-auto">
                <input
                  type="text"
                  name=""
                  id=""
                  placeholder="Your Zip Code"
                  className="w-full h-[60px] sm:w-50 border border-gray-300 border-r-none px-6 py-3 bg-gray-50 outline-none rounded-r-md sm:rounded-r-none"
                />
                <button className="bg-primary text-white hover:bg-black p-3 px-7 rounded-r-md hover:cursor-pointer rounded-l-md sm:rounded-l-none">
                  Search
                </button>
              </div>
            </div>

            <p className="text-primary mt-30 flex items-center justify-center">
              {" "}
              <Check className="w-4 h-4"></Check>
              An UK insurer approved by the UICO.
            </p>
          </div>
        </AnimationScrollY>
      </Container>
    </div>
  );
};

export default Hero;
