import { Check } from "lucide-react";
import { AppleStoreIcon, PlayStoreIcon } from "../../Icons";
import Container from "../../Shared/Container";

export default function DownloadApp() {
  return (
    <Container className="my-30">
      <div className="flex">
        {/* left */}
        <div className="w-1/2">
          <p className="text-black/30">MOBILE APP</p>
          <h2 className="text-[58px] font-semibold">
            Download our Jano Application.
          </h2>
          <p className="text-xl my-7.5 ">
            Get control of all your insurance needs anywhere, anytime
          </p>

          <ul className="space-y-4">
            <li className="text-2xl font-medium flex items-center gap-4">
              <Check className="text-primary" />
              Compare different insurance Item
            </li>

            <li className="text-2xl font-medium flex items-center gap-4">
              <Check className="text-primary" />
              Buy, store and share all your policies online
            </li>

            <li className="text-2xl font-medium flex items-center gap-4">
              <Check className="text-primary" />
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
                <h3 className="text-lg text-white font-medium">Google Play</h3>
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
        </div>

        {/* right */}
        <div className="w-1/2"></div>
      </div>
    </Container>
  );
}
