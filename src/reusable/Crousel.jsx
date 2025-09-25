import { useRef } from "react";
import { FaChevronLeft, FaChevronRight } from "react-icons/fa";

export default function Crousel({ images }) {
  const sliderRef = useRef(null);

  const scrollLeft = () => {
    sliderRef.current.scrollBy({ left: -300, behavior: "smooth" });
  };

  const scrollRight = () => {
    sliderRef.current.scrollBy({ left: 300, behavior: "smooth" });
  };

  return (
    <div className="relative w-full">
      <div
        ref={sliderRef}
        className="flex gap-6 overflow-x-scroll no-scrollbar scroll-smooth p-4"
      >
        {images.map((img, i) => (
          <div
            key={i}
            className="flex-shrink-0 w-[260px] h-[334px] rounded-xl overflow-hidden"
          >
            <img
              src={img}
              alt={`slide-${i}`}
              className="w-full h-full object-cover"
            />
          </div>
        ))}
      </div>
      <button
        onClick={scrollLeft}
        className="absolute left-[45%] top-100 -translate-y-1/2 bg-white/20 hover:bg-white/40 text-white p-2 rounded-full"
      >
        <FaChevronLeft />
      </button>
      <button
        onClick={scrollRight}
        className="absolute right-[45%] top-100 -translate-y-1/2 bg-white/20 hover:bg-white/40 text-white p-2 rounded-full"
      >
        <FaChevronRight />
      </button>
    </div>
  );
}
