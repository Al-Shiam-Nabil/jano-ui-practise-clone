import { Check, Play, X } from "lucide-react";
import { useRef, useState } from "react";
import { AiOutlineMinus } from "react-icons/ai";

import manImage from "../../assets/man_image.png";
import DotBg from "../../Icons/dot_bg.svg";
import AnimationScrollY from "../../Shared/AnimationScrollY";
import Container from "../../Shared/Container";

/* =========================
   MAIN COMPONENT
========================= */

const HappierCustomer = () => {
  const [openModal, setOpenModal] = useState(false);

  return (
    <>
      <div className="bg-[#F6F9FB]">
        <AnimationScrollY>
          <Container className="mb-24 mt-40">
            <div className="relative flex w-full flex-col-reverse items-center gap-20 xl:flex-row">
              {/* LEFT */}
              <div
                className="relative h-[1000px] w-full shrink-0 bg-bottom bg-no-repeat pt-25 xl:h-[630px] xl:w-1/2"
                style={{ backgroundImage: `url(${DotBg})` }}
              >
                <img
                  src={manImage}
                  alt="man"
                  className="absolute bottom-0 left-11"
                />

                {/* Happier */}
                <InfoCard
                  className="2xl:-left-16 lg:top-60 xl:-left-12"
                  title="Happier"
                  subtitle="Customers"
                />

                {/* Insurance */}
                <InfoCard
                  className="right-[-3rem] top-25"
                  title="30+"
                  subtitle="Insurance Item"
                />

                {/* Seller Leads */}
                <InfoCard
                  className="-bottom-10 -right-7"
                  title="Seller Leads"
                  subtitle="Who are listing soon"
                />
              </div>

              {/* RIGHT */}
              <div className="w-full space-y-7.5 xl:w-1/2">
                <button
                  onClick={() => setOpenModal(true)}
                  className="grid h-16.5 w-16.5 place-items-center rounded-full bg-black text-white"
                >
                  <Play />
                </button>

                <p className="text-[42px]">
                  The team signed{" "}
                  <span className="font-medium text-primary underline">
                    ~$7,000,000
                  </span>{" "}
                  in new business in July. <br />
                  Accelerator has been a large part of that.
                </p>

                <p className="flex items-center gap-1 text-xl font-semibold italic">
                  <AiOutlineMinus />
                  Jessica Woodbeck
                </p>
              </div>
            </div>
          </Container>
        </AnimationScrollY>
      </div>

      <VideoModal open={openModal} onClose={() => setOpenModal(false)} />
    </>
  );
};

/* =========================
   INFO CARD
========================= */

type InfoCardProps = {
  title: string;
  subtitle: string;
  className?: string;
};

const InfoCard = ({ title, subtitle, className = "" }: InfoCardProps) => {
  return (
    <div
      className={`absolute z-20 inline-flex items-start gap-6 rounded-xl bg-white p-4 px-7 shadow-sm shadow-gray-100 ${className}`}
    >
      <div className="grid h-10 w-10 place-items-center rounded-full border-2 border-primary text-primary">
        <Check />
      </div>
      <div>
        <h3 className="text-[28px] font-semibold text-primary">{title}</h3>
        <p className="text-xl font-medium">{subtitle}</p>
      </div>
    </div>
  );
};

/* =========================
   MODAL
========================= */

type ModalProps = {
  open: boolean;
  onClose: () => void;
};

const VideoModal = ({ open, onClose }: ModalProps) => {
  const modalRef = useRef<HTMLDivElement | null>(null);

  const handleBackdropClick = (e: React.MouseEvent<HTMLDivElement>) => {
    if (modalRef.current && !modalRef.current.contains(e.target as Node)) {
      onClose();
    }
  };

  if (!open) return null;

  return (
    <div
      onClick={handleBackdropClick}
      className="fixed inset-0 z-80 grid place-items-center bg-black/40"
    >
      <div ref={modalRef} className="relative h-[461px] w-[820px] bg-black">
        <iframe
          width="100%"
          height="100%"
          src="https://www.youtube.com/embed/PWXkYBmlbB4"
          title="YouTube video player"
          allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
          allowFullScreen
        />

        <button
          onClick={onClose}
          className="absolute -right-12 top-0 text-white"
        >
          <X className="h-10 w-10 cursor-pointer" />
        </button>
      </div>
    </div>
  );
};

export default HappierCustomer;
