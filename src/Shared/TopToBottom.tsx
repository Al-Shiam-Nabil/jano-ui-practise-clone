import { ArrowUp } from "lucide-react";
import { useEffect, useState } from "react";

export default function TopToBottom() {
  const [scrollY, setScrollY] = useState<boolean>(false);

  useEffect(() => {
    const onScroll = () => {
      setScrollY(window.scrollY > 500);
    };

    window.document.addEventListener("scroll", onScroll);

    return () => window.document.removeEventListener("scroll", onScroll);
  }, []);

  return scrollY ? (
    <button
      onClick={() => {
        window.scrollTo(0, 0);
      }}
      className="size-9 bg-primary text-white rounded-full flex items-center justify-center   fixed right-5 bottom-10 z-50 cursor-pointer hover:bg-[#d4106f] transition-all duration-200 ease-in-out top-to-bottom"
    >
      <ArrowUp />
    </button>
  ) : null;
}
