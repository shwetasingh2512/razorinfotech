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
      
      {/* Slider */}
      <div
        ref={sliderRef}
        className="flex gap-4 sm:gap-6 overflow-x-scroll no-scrollbar scroll-smooth snap-x snap-mandatory p-4"
      >
        {images.map((img, i) => (
          <div
            key={i}
            className="flex-shrink-0 snap-start w-[200px] sm:w-[240px] md:w-[260px] h-[260px] sm:h-[300px] md:h-[340px] rounded-xl overflow-hidden"
          >
            <img
              src={img}
              alt={`slide-${i}`}
              className="w-full h-full object-cover"
            />
          </div>
        ))}
      </div>

      {/* Left Button */}
      <button
        onClick={scrollLeft}
        className="absolute top-1/2 -translate-y-1/2 left-2 sm:left-4 bg-black/30 hover:bg-black/50 text-white p-2 sm:p-3 rounded-full"
      >
        <FaChevronLeft />
      </button>

      {/* Right Button */}
      <button
        onClick={scrollRight}
        className="absolute top-1/2 -translate-y-1/2 right-2 sm:right-4 bg-black/30 hover:bg-black/50 text-white p-2 sm:p-3 rounded-full"
      >
        <FaChevronRight />
      </button>
    </div>
  );
}
