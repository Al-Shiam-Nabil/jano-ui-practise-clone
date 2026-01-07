import { Check } from "lucide-react";
import backMobile from "../../assets/backMobile.png";
import frontMobile from "../../assets/frontMobile.png";
import {
  AppleStoreIcon,
  LoopArrow,
  PlayStoreIcon,
  TopThreeLine,
} from "../../Icons";
import AnimationScrollLeftToRight from "../../Shared/AnimationScrollLeftToRight";
import AnimationScrollRightToLeft from "../../Shared/AnimationScrollRightToLeft";
import Container from "../../Shared/Container";

export default function DownloadApp() {
  return (
    <Container className="my-30">
      <div className="flex flex-col xl:flex-row gap-20 xl:gap-20 2xl:gap-50 justify-between items-center">
        {/* left */}
        <div className="w-full xl:w-1/2">
          <AnimationScrollLeftToRight>
            <p className="text-black/30">MOBILE APP</p>
            <h2 className="text-[58px] font-semibold">
              Download our Jano Application.
            </h2>
            <p className="text-xl my-7.5 ">
              Get control of all your insurance needs anywhere, anytime
            </p>

            <ul className="space-y-4">
              <li className="text-2xl font-medium flex items-center gap-4">
                <Check className="text-primary shrink-0" />
                Compare different insurance Item
              </li>

              <li className="text-2xl font-medium flex items-center gap-4">
                <Check className="text-primary shrink-0" />
                Buy, store and share all your policies online
              </li>

              <li className="text-2xl font-medium flex items-center gap-4">
                <Check className="text-primary shrink-0" />
                Email & Live chat.
              </li>
            </ul>

            {/* button */}

            <div className="flex gap-6 mt-10">
              {/* playstore */}
              <div className="flex gap-3 items-center bg-black rounded-lg w-[190px] h-[60px] px-5 py-1">
                <PlayStoreIcon />

                <div>
                  <p className="text-[#ffffff99] text-[10px]">Get it on</p>
                  <h3 className="text-lg text-white font-medium">
                    Google Play
                  </h3>
                </div>
              </div>

              {/* apple store */}
              <div className="flex gap-3 items-center bg-[#00000017] rounded-lg w-[190px] h-[60px] px-5 py-1">
                <AppleStoreIcon />

                <div>
                  <p className="text-[#313131b3] text-[10px]">Get it on</p>
                  <h3 className="text-lg text-black font-medium">App Store</h3>
                </div>
              </div>
            </div>
          </AnimationScrollLeftToRight>
        </div>

        {/* right */}
        <div className="w-full xl:w-1/2 relative  ">
          <AnimationScrollRightToLeft>
            <div className="flex justify-center xl:block">
              <div>
                <img
                  src={frontMobile}
                  alt="mobile image"
                  className="relative z-20 object-contain"
                />
              </div>

              <div className="absolute md:top-14 md:right-20  lg:top-14 xl:top-18 2xl:right-23 2xl:top-16 lg:right-40 ">
                <img
                  src={backMobile}
                  alt="mobile image"
                  className="object-cover"
                />

                <div className="absolute -top-10 -right-12">
                  <TopThreeLine />
                </div>
              </div>
            </div>

            <div className="absolute bottom-10 left-0 lg:bottom-15 lg:-left-55">
              <LoopArrow />
            </div>
          </AnimationScrollRightToLeft>
        </div>
      </div>
    </Container>
  );
}
