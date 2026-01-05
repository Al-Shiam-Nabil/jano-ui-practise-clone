import { Star, StarHalf } from "lucide-react";
import ClientImage from "../../assets/clientImage.jpg";
import { Comma } from "../../Icons";

import "swiper/css";
import "swiper/css/pagination";

import { Autoplay, Pagination } from "swiper/modules";
import { Swiper, SwiperSlide } from "swiper/react";

export default function ClientFeedback() {
  const feedbackArr = [
    {
      companyName: "Very Solid!!",
      rating: 3.5,
      description:
        "They not only understand what I say but read between the lines and also give me ideas of my own.",
      name: "Rashed Kabir",
      address: "California",
      avatar: ClientImage,
    },
    {
      companyName: "Very Solid!!",
      rating: 4.5,
      description:
        "They not only understand what I say but read between the lines and also give me ideas of my own.",
      name: "Rashed Kabir",
      address: "California",
      avatar: ClientImage,
    },
    {
      companyName: "Very Solid!!",
      rating: 2.5,
      description:
        "They not only understand what I say but read between the lines and also give me ideas of my own.",
      name: "Rashed Kabir",
      address: "California",
      avatar: ClientImage,
    },
    {
      companyName: "Very Solid!!",
      rating: 3.5,
      description:
        "They not only understand what I say but read between the lines and also give me ideas of my own.",
      name: "Rashed Kabir",
      address: "California",
      avatar: ClientImage,
    },
    {
      companyName: "Very Solid!!",
      rating: 4.5,
      description:
        "They not only understand what I say but read between the lines and also give me ideas of my own.",
      name: "Rashed Kabir",
      address: "California",
      avatar: ClientImage,
    },
  ];

  return (
    <div className="bg-[#f6f9fb] pt-25 pb-10">
      <h2 className="text-[35px] lg:text-[45px] xl:text-[58px] font-semibold text-center">
        Client Feedback
      </h2>

      <div className="my-16">
        <Swiper
          loop={true}
          slidesPerView={3}
          spaceBetween={40}
          pagination={{
            clickable: true,
          }}
          autoplay={{
            delay: 4000,
            disableOnInteraction: false,
          }}
          breakpoints={{
            640: {
              slidesPerView: 1,
              spaceBetween: 20,
            },
            768: {
              slidesPerView: 2,
              spaceBetween: 40,
            },
            1024: {
              slidesPerView: 3,
              spaceBetween: 50,
            },
          }}
          //   pagination={Pagination}
          modules={[Pagination, Autoplay]}
          className="feedbackSwiper"
        >
          {feedbackArr.map((feedback, index) => (
            <SwiperSlide key={index}>
              <div className="shrink-0 max-w-[744px] bg-white px-[70px] py-12 rounded-xl space-y-10">
                <div className="flex justify-between items-center">
                  <div className="space-y-4">
                    <h3 className="text-3xl font-semibold">
                      {feedback?.companyName}
                    </h3>

                    <RatingStar rating={feedback.rating} />
                  </div>
                  <div className="">
                    <Comma className="w-12.5 h-12.5" />
                  </div>
                </div>

                <p className="text-[26px]">{feedback?.description}</p>

                <div className="flex justify-between items-center">
                  <p className="text-xl font-semibold">
                    {feedback?.name},
                    <span className="font-normal text-gray-500">
                      {feedback?.address}
                    </span>
                  </p>
                  <div>
                    <img src={feedback?.avatar} alt="client image" />
                  </div>
                </div>
              </div>
            </SwiperSlide>
          ))}
        </Swiper>
      </div>
    </div>
  );
}

type RatingType = {
  rating: number;
};

function RatingStar({ rating }: RatingType) {
  const fullRating = Math.floor(rating);
  const halfRating = rating % 1 !== 0;

  return (
    <div className="flex items-center gap-2">
      {Array.from({ length: fullRating }).map((_, index) => (
        <Star key={index} fill="#FFD700" stroke="#FFD700" />
      ))}

      {halfRating && <StarHalf fill="#FFD700" stroke="#FFD700" />}
    </div>
  );
}
