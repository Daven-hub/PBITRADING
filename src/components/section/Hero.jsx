import { useState, useEffect } from "react";
import { useTranslation } from "react-i18next";

const slides = [
    {
        image: "/images/main.jpg",
        subtitleKey: "hero.slide1.subtitle",
        titleKey: "hero.slide1.title",
        textKey: "hero.slide1.text",
        primaryCtaKey: "hero.slide1.primaryCta",
        secondaryCtaKey: "hero.slide1.secondaryCta",
    },
    {
        image: "/images/bato.webp",
        subtitleKey: "hero.slide2.subtitle",
        titleKey: "hero.slide2.title",
        textKey: "hero.slide2.text",
        primaryCtaKey: "hero.slide2.primaryCta",
        secondaryCtaKey: "hero.slide2.secondaryCta",
    },
    {
        image: "/images/cereal.png",
        subtitleKey: "hero.slide3.subtitle",
        titleKey: "hero.slide3.title",
        textKey: "hero.slide3.text",
        primaryCtaKey: "hero.slide3.primaryCta",
        secondaryCtaKey: "hero.slide3.secondaryCta",
    },
];

const Hero = () => {
    const { t } = useTranslation();
    const [current, setCurrent] = useState(0);

    useEffect(() => {
        const interval = setInterval(() => {
            setCurrent((prev) => (prev + 1) % slides.length);
        }, 7000);
        return () => clearInterval(interval);
    }, []);

    return (
        <section className="relative w-full h-[90vh] overflow-hidden text-white font-sans">
            {slides.map((slide, index) => (
                <div
                    key={index}
                    className={`absolute inset-0 transition-opacity duration-1000 ease-in-out ${index === current ? "opacity-100 z-20" : "opacity-0 z-10"
                        }`}
                >
                    <img
                        src={slide.image}
                        alt={t(slide.titleKey)}
                        className="w-full h-full object-cover"
                    />
                    <div className="absolute inset-0 bg-black/70"></div>

                    <div className="absolute inset-0 flex flex-col justify-center text-left px-4 sm:px-6 md:px-[10%] max-w-full md:max-w-5xl">
                        {/* <div className="flex justify-end mb-4 md:mb-8">
                            <LanguageSwitcher />
                        </div> */}
                        <p className="text-sm sm:text-lg md:text-xl mb-2 sm:mb-3 text-secondary animate-fadeIn">
                            {t(slide.subtitleKey)}
                        </p>
                        <h1 className="text-2xl sm:text-4xl md:text-6xl font-heading font-bold mb-3 sm:mb-4 animate-slideUp leading-tight md:leading-[1.2]">
                            {t(slide.titleKey)}
                        </h1>
                        <p className="text-sm sm:text-lg md:text-xl text-gray-200 mb-4 sm:mb-8 max-w-full sm:max-w-3xl animate-fadeIn">
                            {t(slide.textKey)}
                        </p>
                        <div className="flex flex-col sm:flex-row flex-wrap gap-3 sm:gap-4">
                            <a href="#contact" className="bg-primary text-white font-semibold px-4 sm:px-6 py-2 sm:py-3 rounded hover:bg-primary transition w-full sm:w-auto text-center">
                                {t(slide.primaryCtaKey)}
                            </a>
                            <a href="#contact" className="border border-secondary text-secondary font-semibold px-4 sm:px-6 py-2 sm:py-3 rounded hover:bg-primary hover:text-white transition w-full sm:w-auto text-center">
                                {t(slide.secondaryCtaKey)}
                            </a>
                        </div>
                    </div>
                </div>
            ))}

            {/* Pagination dots */}
            <div className="absolute bottom-4 sm:bottom-6 left-1/2 transform -translate-x-1/2 flex space-x-2 sm:space-x-3">
                {slides.map((_, i) => (
                    <div
                        key={i}
                        onClick={() => setCurrent(i)}
                        className={`w-3 h-3 rounded-full cursor-pointer transition-all duration-300 ${i === current ? "bg-yellow-500 scale-125" : "bg-gray-400/50"
                            }`}
                    ></div>
                ))}
            </div>
        </section>
    );
};

export default Hero;
