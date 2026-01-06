import OutlineButton from "../../Shared/OutlineButton";

type BlogCardType = {
  id: number;
  title: string;
  date: string;
  avatar: string;
};

type BlogCardProps = {
  card: BlogCardType;
};

export default function BlogCard({ card }: BlogCardProps) {
  return (
    <div className="w-full space-y-10">
      <div className="w-full">
        <img src={card?.avatar} alt="Blog Image" className="h-full" />
      </div>

      <div className="space-y-2">
        <p className="text-[#48494e] text-sm">{card?.date}</p>

        <h3 className="text-[26px]">{card?.title}</h3>
      </div>

      <OutlineButton>Read More</OutlineButton>
    </div>
  );
}
