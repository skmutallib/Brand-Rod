import LogoCloud from "./LogoCloud";
import { Button } from "@/components/ui/button";
import Navbar from "./Navbar";

const HeroSection = ({ headLine, subHeadLine, ctaText }) => {
    return (
        <section className="h-screen">
            <Navbar />
            <div className="h-full flex flex-col items-center justify-center font-display">
                <div className="mx-auto max-w-screen-xl flex flex-col items-center justify-center text-center py-8 px-4 lg:py-16 lg:px-12">
                    <div className="bg-zinc-700 rounded-full pl-1.5 pr-4 py-1.5 mb-2">
                        <p className="text-white font-light text-sm ">
                            <span className="bg-zinc-200 text-black px-2 py-0.5 mr-1 rounded-full">
                               <i class="fa fa-circle -translate-y-0.5" style={{fontSize : "7px"}} aria-hidden="true"></i> New
                            </span>
                            Client onboarding this Month
                        </p>
                    </div>
                    <h1 className="mx-auto max-w-3xl text-4xl font-extrabold text-white leading-tight md:text-5xl lg:text-6xl">
                        We help remarkable Business growth online
                    </h1>
                    <p className="text-lg mt-6 font-normal text-gray-500 lg:text-lg sm:px-16 xl:px-48">
                        At Brandrod, we harness creativity, data, and technology to help
                        businesses grow their digital presence, unlock new opportunities,
                        and achieve lasting impact online.
                    </p>
                    <div className="mt-10 flex flex-wrap justify-center gap-4">
                        <Button
                            asChild
                            size="lg"
                            className="bg-white text-black hover:bg-gray-200"
                        >
                            <a href="/">
                                <span>Get Started</span>
                            </a>
                        </Button>
                        <Button
                            asChild
                            size="lg"
                            className="bg-black text-white hover:bg-gray-800 rounded-full border"
                        >
                            <a href="/">
                                <span>Book a call</span>
                            </a>
                        </Button>
                    </div>
                </div>
                <LogoCloud />
            </div>
        </section>
    );
};

export default HeroSection;
