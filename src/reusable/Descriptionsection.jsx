import { Link } from "react-router-dom";
import { ArrowRight } from "lucide-react";

function Descriptionsection({ items }) {
  return (
    <section className={`px-4 sm:px-8 py-8 sm:py-12 lg:py-16 ${items.background}`}>
      <div className={`grid grid-cols-1 md:grid-cols-2 gap-8 ${items.width || "max-w-full md:max-w-4xl lg:max-w-6xl"} mx-auto`}>
        <div className="flex justify-center items-center">
          <img
            src={items.image}
            alt={items.title}
            className={`rounded-2xl object-cover w-full max-w-xs sm:max-w-sm md:max-w-md lg:max-w-lg h-auto ${items.imgWidth || ""}`}
          />
        </div>
        <div className="flex flex-col gap-4 justify-center">
          <h2 className="text-2xl sm:text-3xl font-semibold text-heading">{items.title}</h2>
          <p className="text-paragraph text-sm sm:text-base max-w-full md:max-w-xl">{items.description}</p>
          {items.btn && (
            <Link
              to={items.link || "#"}
              className="border border-secondary bg-secondary hover:bg-background w-fit rounded-full text-white pl-5 pr-2 py-2 flex gap-3 items-center group transition"
            >
              <span className="group-hover:text-secondary font-semibold">
                {items.btn}
              </span>
              <span className="group-hover:bg-secondary rounded-full bg-white/20 p-2 text-white group-hover:text-white">
                <ArrowRight />
              </span>
            </Link>
          )}
        </div>
      </div>
    </section>
  );
}

export default Descriptionsection;
