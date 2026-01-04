import { MoveRight } from "lucide-react";
import { Discover1, Discover2, Discover3, Discover4 } from "../../Icons";

import Button from "../../Shared/Button";
import Container from "../../Shared/Container";

export default function DiscoverServices() {
  const discoverCards = [
    {
      icon: Discover1,
      subTitle: "I Want",
      title: "Home Loan",
    },
    {
      icon: Discover2,
      subTitle: "I Want",
      title: "Travel Insurance",
    },
    {
      icon: Discover3,
      subTitle: "I Want",
      title: "Insure the Car",
    },
    {
      icon: Discover4,
      subTitle: "I Want",
      title: "Health Insurance",
    },
  ];

  return (
    <Container className="mt-45 mb-30">
      <div className="flex justify-center lg:justify-between items-center">
        <h2 className="text-4xl lg:text-[52px] font-bold ">
          Discover all our <br className="hidden lg:inline-block" />
          Services.
        </h2>

        <Button className="hidden lg:block rounded-lg font-semibold">
          View all Services
        </Button>
      </div>

      <div className="grid grid-cols-1 sm:grid-cols-2 xl:grid-cols-4 gap-6 my-16">
        {discoverCards.map((discoverCard, index) => (
          <div
            key={index}
            className="flex flex-col justify-center items-center gap-2 border border-gray-200 h-[320px] rounded-xl relative overflow-hidden group hover:border-primary transition-all duration-300
            ease-in-out"
          >
            <discoverCard.icon className="w-[60px] h-[60px] mb-4" />
            <p className="text-[#adadad] text-xl">{discoverCard?.subTitle}</p>
            <h3 className="text-2xl font-semibold">{discoverCard?.title}</h3>

            <div
              className="absolute -bottom-7 -right-7 bg-[#f7f7f7] rounded-full w-[80px] h-[80px] group-hover:bg-primary transition-all duration-300
            ease-in-out"
            >
              <MoveRight className="absolute top-4.5 left-4 group-hover:text-white" />
            </div>
          </div>
        ))}
      </div>

      <div className="flex lg:hidden justify-center ">
        <Button className=" rounded-lg font-semibold">View all Services</Button>
      </div>
    </Container>
  );
}
