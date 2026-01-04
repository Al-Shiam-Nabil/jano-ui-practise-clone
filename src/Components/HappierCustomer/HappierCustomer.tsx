import { Check, Play, X } from "lucide-react";
import { useRef, useState } from "react";
import { AiOutlineMinus } from "react-icons/ai";
import DotBg from "../../Icons/Dot_Bg.svg";
import Container from "../../Shared/Container";
import manImage from "../../assets/man_image.png";

const HappierCustomer = () => {
  const [openModal, setOpenModal] = useState(false);

  const handleModal = () => {
    setOpenModal((prev) => !prev);
  };

  return (
    <>
      <div className="">
        <div className="bg-[#F6F9FB]">
          <Container className="mb-24 mt-40">
            <div className="flex flex-col-reverse xl:flex-row w-full gap-20 items-center relative ">
              {/* left */}
              <div
                className="w-full xl:w-1/2 shrink-0 bg-no-repeat bg-bottom h-[1000px]  xl:h-[630px] pt-25 relative"
                style={{ backgroundImage: `url(${DotBg})` }}
              >
                <img
                  src={manImage}
                  alt="man image"
                  className="absolute bottom-0 left-11 mx-auto"
                />

                {/* happier */}
                <div className="bg-white rounded-xl p-4 px-7 inline-flex items-start   gap-6 absolute 2xl:-left-16 lg:top-60 xl:-left-12 lg:-left-10  z-20 shadow-sm shadow-gray-100">
                  <div className="relative top-1.5 border-2 border-primary rounded-full w-10 h-10 grid place-items-center text-primary">
                    <Check />
                  </div>
                  <div className=" flex flex-col">
                    <h3 className="text-[28px] font-semibold text-primary">
                      Happier
                    </h3>
                    <p className="text-xl font-medium">Customers</p>
                  </div>
                </div>

                {/* insurance items */}
                <div className="bg-white rounded-xl p-4 px-7 inline-flex items-start   gap-6 absolute 2xl:-right-7 -right-12  top-25 z-20 shadow-sm shadow-gray-100">
                  <div className="relative top-1.5 border-2 border-primary rounded-full w-10 h-10 grid place-items-center text-primary">
                    <Check />
                  </div>
                  <div className=" flex flex-col">
                    <h3 className="text-[28px] font-semibold text-primary">
                      30+
                    </h3>
                    <p className="text-xl font-medium">Insurance Item</p>
                  </div>
                </div>

                {/* seller leads */}
                <div className="bg-white rounded-xl p-4 px-7 inline-flex items-start   gap-6 absolute -right-7 -bottom-10 shadow-sm shadow-gray-100 z-20">
                  <div className="relative top-1.5 border-2 border-primary rounded-full w-10 h-10 grid place-items-center text-primary">
                    <Check />
                  </div>
                  <div className=" flex flex-col">
                    <h3 className="text-[28px] font-semibold text-primary">
                      Saller Leads
                    </h3>
                    <p className="text-xl font-medium">Who are listing soon</p>
                  </div>
                </div>
              </div>

              {/* right */}
              <div className="w-full xl:w1/2  space-y-7.5">
                <div
                  onClick={handleModal}
                  className="w-16.5 h-16.5 cursor-pointer rounded-full grid place-items-center bg-black text-white"
                >
                  <Play />
                </div>

                <p className="text-[42px]">
                  The team signed{" "}
                  <span className="font-medium underline text-primary">
                    ~$7,000,000
                  </span>{" "}
                  in new business in July. <br /> Accelerator has been a large
                  part of that.
                </p>

                <p className="flex items-center gap-1 italic text-xl font-semibold">
                  <AiOutlineMinus />
                  Jessica Woodbeck
                </p>
              </div>
            </div>
          </Container>
        </div>
      </div>

      <Modal
        open={openModal}
        onClose={() => setOpenModal((prev) => !prev)}
      ></Modal>
    </>
  );
};

// modal

type ModalType = {
  open: boolean;
  onClose: () => void;
};

const Modal = ({ open, onClose }: ModalType) => {
  const modalRef = useRef<HTMLInputElement>(null);

  const handleClose = (e: React.MouseEvent) => {
    console.log(modalRef.current);

    if (modalRef.current && !modalRef.current.contains(e.target as Node)) {
      onClose();
    }
  };

  if (!open) {
    return null;
  }

  return (
    <>
      <div
        onClick={handleClose}
        className="fixed top-0 left-0 grid place-items-center bg-black/40 w-full h-screen z-80"
      >
        <div ref={modalRef} className="bg-black  w-[820px] h-[461px]  relative">
          <iframe
            width="100%"
            height="100%"
            src={`https://www.youtube.com/embed/PWXkYBmlbB4?si=m3sjHWmqHe_AlOd-`}
            title="YouTube video player"
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
            referrerPolicy="strict-origin-when-cross-origin"
            allowFullScreen
          />

          {/* close icon */}
          <div className="absolute top-0 -right-12 ">
            <X
              onClick={onClose}
              className="w-10 h-10 text-white cursor-pointer"
            />
          </div>
        </div>
      </div>
    </>
  );
};

export default HappierCustomer;
