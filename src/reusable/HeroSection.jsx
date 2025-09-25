import { Link } from "react-router-dom";
import { FaArrowRightLong } from "react-icons/fa6";
import { RiTwitterXLine } from "react-icons/ri";
import { FaFacebook  } from "react-icons/fa";
import { TbBrandLinkedinFilled } from "react-icons/tb";
import { RiInstagramFill } from "react-icons/ri";
import { IoArrowForward } from "react-icons/io5";



export default function HeroSection({
    abovetitle,
    title,
    description,
    buttonText,
    buttonLink,
    heroImage,
    reverse,
    bgcolor,
    connectwithus
}) {
    const iconsforconnect = [
        { icon: <RiTwitterXLine />, link: "https://twitter.com/RazorInfotech" },
        { icon: <FaFacebook  />, link: "https://www.facebook.com/RazorInfotech" },
        {
            icon: <TbBrandLinkedinFilled  />,
            link: "https://www.linkedin.com/company/razor-infotech/",
        },
        {
            icon: <RiInstagramFill />,
            link: "https://www.instagram.com/razorinfotech/",
        },
    ];

    return (
        <div className={`relative px-20 pb-16 overflow-hidden ${bgcolor}`}>

            <div
                className={`relative flex mt-20 z-10 ${reverse ? "flex-row-reverse" : "flex-row"
                    }`}
            >
                <div className="pl-20 flex flex-col  gap-5 w-1/2">
                    {abovetitle && (
                        <p className="text-2xl tracking-widest font-medium text-secondary uppercase">
                            {abovetitle}
                        </p>
                    )}
                    <h1 className="text-5xl leading-tight max-w-4/5 font-semibold text-heading">
                        {title}
                    </h1>
                    <p className="text-lg text-paragraph max-w-4/5">{description}</p>
                    {buttonText && buttonLink && (
                        <Link
                            to={buttonLink}
                            className="font-semibold rounded-4xl w-fit pl-5 flex items-center bg-secondary text-white  gap-4 py-3"
                        >
                            {buttonText} <span className="bg-accent/30 p-3 rounded-full ml-auto mr-2"><IoArrowForward /></span>
                        </Link>
                    )}
                    {
                        connectwithus && (
                            <div className="mt-3">
                                <p className="mb-5 text-xl font-bold text-paragraph">
                                    Connect With Us
                                </p>
                                {iconsforconnect.map((iconItem, index) => (
                                    <Link
                                        to={iconItem.link}
                                        key={index}
                                        target="_blank"
                                        rel="noopener noreferrer"
                                        className="inline-block mr-4 border border-slate-400 rounded-full p-3 text-lg hover:text-primary"
                                    >
                                        {iconItem.icon}
                                    </Link>
                                ))}
                            </div>
                        )
                    }

                </div>
                <div className="z-20 flex items-center w-1/2 ">
                    {heroImage && <img src={heroImage} alt="hero" className="w-4/5"/>}
                </div>
            </div>
        </div>
    );
}
