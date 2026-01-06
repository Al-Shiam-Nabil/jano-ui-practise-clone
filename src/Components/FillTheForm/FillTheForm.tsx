import { CurveArrow, HeadPhoneIcon, ThreeLine } from "../../Icons";
import Button from "../../Shared/Button";
import Container from "../../Shared/Container";

export default function FillTheForm() {
  return (
    <div className="bg-[#f6f9fb] py-[170px]">
      <Container className=" flex justify-center items-center">
        <div className=" flex flex-col-reverse  xl:flex-row justify-between gap:0 xl:gap-20 max-w-[700px] xl:max-w-full  bg-white rounded-lg ">
          {/* left */}
          <div className="w-full xl:w-1/2  xl:max-w-[560px] space-y-5 px-3 pb-12.5 xl:py-16 xl:pl-16 relative">
            <input
              type="text"
              placeholder="Your name*"
              className="w-full h-[60px] px-5 border-2 border-[#dededecc] rounded-md outline-none"
            />

            <input
              type="text"
              placeholder="Your email*"
              className="w-full h-[60px] px-5 border-2 border-[#dededecc] rounded-md outline-none"
            />

            <textarea
              className="w-full h-[110px] px-5 py-3 border-2 border-[#dededecc] rounded-md outline-none"
              placeholder="Your message*"
            />

            <Button className="uppercase font-semibold text-white text-center rounded-lg py-4">
              Send Message
            </Button>

            <p className="text-[#48494e] text-center">
              Been here before?
              <span className="font-semibold text-black cursor-pointer">
                &nbsp; Check your query
              </span>
            </p>

            <div className="absolute -bottom-22 -left-16">
              <ThreeLine className="w-[87px] h-[87px]" />
            </div>

            <div className="hidden xl:block absolute -top-2 -left-7">
              <p className="text-xl font-semibold text-center w-[100px] -rotate-30 absolute -top-14 -left-17 ">
                Fill the <br /> form
              </p>
              <CurveArrow />
            </div>
          </div>

          {/* right */}
          <div className="w-full xl:w-1/2 border-l border-gray-200 px-3 py-12.5 xl:py-16 xl:pl-20 xl:pr-16 space-y-5 xl:space-y-6">
            <HeadPhoneIcon />

            <h2 className="text-[35px] xl:text-[58px] font-semibold xl:leading-20">
              Let’s talk with expereince advisors.
            </h2>
            <p className="text-xl/9 font-medium">
              eiusmod tempor incididunt. Ut enim mim veniam, quis nostrud elit
              lorem dolor.
            </p>
          </div>
        </div>
      </Container>
    </div>
  );
}
