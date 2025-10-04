import { Link } from "react-router-dom";
import { ArrowRight } from "lucide-react";

function Descriptionsection({ items }) {
  return (
    <section className={`p-10 ${items.background}`}>
      <div className={`grid grid-cols-1 md:grid-cols-2 gap-8 ${items.width} mx-auto`}>
        <div className="flex justify-center items-center">
          <img
            src={items.image}
            alt={items.title}
            className={`rounded-2xl ${items.imgWidth || "w-3/5"}`}
          />
        </div>
        <div className="flex flex-col gap-4 justify-center">
          <h2 className="text-3xl font-semibold text-heading">{items.title}</h2>
          <p className="text-paragraph max-w-xl">{items.description}</p>
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
