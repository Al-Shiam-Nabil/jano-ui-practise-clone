import { Icon1, Icon2, Icon3 } from "../../Icons";
import Container from "../../Shared/Container";

const supportArr = [
  {
    title: " Regulated by WICO.",
    description: "100% Reliable",
    icon: Icon1,
    color: "bg-[#FFFEE7]",
  },
  {
    title: "Get Instant supportall day.",
    description: "Claim Support",
    icon: Icon2,
    color: "bg-[#FBF1FF]",
    // color: "#FBF1FF",
  },
  {
    title: "Unbiased advicefrom expert.",
    description: "Consultation",
    icon: Icon3,
    // color: "#EEFBFA",
    color: "bg-[#EEFBFA]",
  },
];

const Support = () => {
  return (
    <>
      <Container className="my-24 mt-30">
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-12">
          {supportArr.map((supportCard, index) => (
            <div
              key={index}
              className={`p-9.25 rounded-xl relative space-y-6 min-h-100 xl:min-h-90 ${supportCard.color} hover:bg-white border border-transparent hover:border-primary transition-all duration-400 `}
            >
              <h3 className="text-[30px] font-bold max-w-83">
                {supportCard?.title}
              </h3>
              <p className="text-lg text-gray-500">
                {supportCard?.description}
              </p>

              <div className="absolute bottom-9 right-9 text-[150px] ">
                <supportCard.icon />
              </div>
            </div>
          ))}
        </div>
      </Container>
    </>
  );
};

export default Support;
