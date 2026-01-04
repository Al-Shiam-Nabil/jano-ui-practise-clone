import { TiStar } from "react-icons/ti";
import Container from "../../Shared/Container";

function TopRated() {
  return (
    <Container className="my-24">
      <div className="text-center space-y-7.5">
        <h2 className="text-[35px] lg:text-[62px] font-bold">
          Top Rated Insurance Agency
        </h2>
        <p className="text-lg lg:text-2xl ">
          “I couldn’t have asked for a better experience with Jano!”
        </p>
        <div className="flex items-center justify-center gap-y-2 gap-x-8 flex-wrap">
          <div className="flex items-center">
            {Array.from({ length: 5 }).map((_, index) => (
              <TiStar key={index} className="text-3xl text-primary" />
            ))}
          </div>
          <div>
            <p className="text-xl font-bold">
              4.8
              <span className="text-gray-400 font-normal"> (30k Reviews)</span>
            </p>
          </div>
        </div>
      </div>
    </Container>
  );
}

export default TopRated;
