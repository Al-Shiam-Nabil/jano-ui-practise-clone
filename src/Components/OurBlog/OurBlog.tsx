import BlogCard1 from "../../assets/blogCard1.jpg";
import BlogCard2 from "../../assets/blogCard2.jpg";
import BlogCard3 from "../../assets/blogCard3.jpg";
import Button from "../../Shared/Button";
import Container from "../../Shared/Container";
import BlogCard from "./BlogCard";

type BlogCardType = {
  id: number;
  title: string;
  date: string;
  avatar: string;
};

export default function OurBlog() {
  const blogCardsArr: BlogCardType[] = [
    {
      id: 1,
      title: "A Discount Cartridge dsu is Better Ever.",
      date: "23 Apr, 2022",
      avatar: BlogCard1,
    },
    {
      id: 2,
      title: "Truck Side Advertising Isn It Time for action.",
      date: "14 March, 2022",
      avatar: BlogCard2,
    },
    {
      id: 3,
      title: "A Discount Cartridge dsu is Better Ever.",
      date: "27 Feb, 2022",
      avatar: BlogCard3,
    },
  ];

  return (
    <Container className="my-30">
      <div className="flex justify-center lg:justify-between items-center mb-20">
        <h2 className="text-4xl lg:text-[52px] font-bold ">Our Blog</h2>

        <Button className="hidden lg:block rounded-lg font-semibold">
          View all Services
        </Button>
      </div>

      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-x-6 gap-y-8 xl:gap-12 w-full ">
        {blogCardsArr.map((card) => (
          <BlogCard key={card.id} card={card} />
        ))}
      </div>
    </Container>
  );
}
