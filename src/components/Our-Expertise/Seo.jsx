import { Link } from "react-router-dom";
import { ArrowRight } from "lucide-react";

export default function Seo() {
    return (
        <div>
            <section className="px-6 py-12">
                <div className="mx-auto grid max-w-6xl grid-cols-1 items-center gap-8 lg:grid-cols-2">
                    <div className="flex flex-col justify-center gap-4">
                        <h1 className="text-3xl font-semibold text-heading md:text-4xl max-w-[90%]">
                           Get Found By Your Targeted Customers
                        </h1>
                        <p className="text-paragraph/80 text-md max-w-[80%]">
                            SEO strategies help your website to rank higher on search engine results such as Google, which contributes to attracting qualified traffic and generating more leads. If your business isn’t showing up there, you require our expert help.
                        </p>
                        <Link
                            to="#"
                            className="inline-flex w-fit items-center gap-3 rounded-full bg-secondary px-4 py-2 text-white"
                        >
                            <span>Talk To An Expert</span>
                            <span className="rounded-full bg-white/20 p-2">
                                <ArrowRight />
                            </span>
                        </Link>
                    </div>

                    <div>
                        <img
                            src="/images/It-help-desk/It-help-desk-hero.png"
                            alt="Content creation hero"
                            className="h-auto w-full rounded-2xl object-cover"
                        />
                    </div>
                </div>
            </section>
        </div>
    )
}
