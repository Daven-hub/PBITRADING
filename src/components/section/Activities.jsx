import React from "react";
import { useTranslation } from "react-i18next";

const Activities = () => {
    const { t } = useTranslation();

    const activities = [
        {
            icon: "https://cdn-icons-png.flaticon.com/512/744/744502.png",
            titleKey: "activities.activity1.title",
            subtitleKey: "activities.activity1.subtitle",
            descKey: "activities.activity1.desc",
        },
        {
            icon: "https://cdn-icons-png.flaticon.com/512/3094/3094830.png",
            titleKey: "activities.activity2.title",
            subtitleKey: "activities.activity2.subtitle",
            descKey: "activities.activity2.desc",
        },
        {
            icon: "https://cdn-icons-png.flaticon.com/512/2331/2331948.png",
            titleKey: "activities.activity3.title",
            subtitleKey: "activities.activity3.subtitle",
            descKey: "activities.activity3.desc",
        },
    ];

    const images = [
        { src: "/images/contener.jpeg", alt: "Commerce international" },
        { src: "/images/lo.webp", alt: "Logistique moderne" },
        { src: "/images/ble.webp", alt: "Approvisionnement agricole" },
        { src: "/images/premiere.webp", alt: "Structuration commerciale" },
    ];

    return (
        <section id="acticitie" className="relative px-4 sm:px-6 md:px-[10%] py-12 bg-gray-50 text-gray-800 overflow-hidden">
            <div className="absolute top-0 right-0 h-full w-1/2 pointer-events-none">
                <img
                    src="/images/logistiques.png"
                    alt="background"
                    className="h-full w-full object-cover opacity-10"
                />
            </div>

            <div className="relative z-10 text-center mb-12">
                <h2 className="text-[1.8rem] md:text-[3rem] font-heading font-bold leading-[1.2] text-black/80 mb-4">
                    {t("activities.titlePart1")}{" "}
                    <span className="text-primary">{t("activities.titlePart2")}</span>
                </h2>
                <p className="leading-relaxed text-[.95rem] md:text-[1.07rem] max-w-3xl text-black/70 mx-auto">
                    {t("activities.subtitle")}
                </p>
            </div>

            <div className="relative z-10 grid sm:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8">
                {activities.map((activity, index) => (
                    <div
                        key={index}
                        className="bg-white rounded-xl shadow-sm p-6 sm:p-8 text-center hover:shadow-lg transition"
                    >
                        <div className="flex justify-center mb-6">
                            <img
                                src={activity.icon}
                                alt={t(activity.titleKey)}
                                className="w-14 h-14 sm:w-16 sm:h-16 object-contain"
                            />
                        </div>
                        <h3 className="text-[1.2rem] md:text-[1.4rem] font-heading font-bold text-secondary mb-2">
                            {t(activity.titleKey)}
                        </h3>
                        <p className="text-[.95rem] md:text-[1.05rem] text-black/80 font-semibold mb-2">
                            {t(activity.subtitleKey)}
                        </p>
                        <p className="text-[.9rem] md:text-[1rem] text-black/70 leading-relaxed">
                            {t(activity.descKey)}
                        </p>
                    </div>
                ))}
            </div>

            <div className="mt-12 relative overflow-hidden rounded-2xl shadow-lg px-[10%] mx-auto">
                <div className="flex animate-scroll">
                    {images.map((image, index) => (
                        <div
                            key={index}
                            className="flex-shrink-0 w-[250px] sm:w-[300px] md:w-[350px] h-[180px] sm:h-[200px] md:h-[220px] mx-2"
                        >
                            <img
                                src={image.src}
                                alt={image.alt}
                                className="w-full h-full object-cover rounded-xl"
                            />
                        </div>
                    ))}
                </div>
                <div className="absolute inset-0 bg-gradient-to-r from-gray-50 via-transparent to-gray-50 pointer-events-none"></div>
            </div>

            <style jsx>{`
                @keyframes scroll {
                    0% {
                        transform: translateX(0);
                    }
                    100% {
                        transform: translateX(-50%);
                    }
                }
                .animate-scroll {
                    display: flex;
                    animation: scroll 35s linear infinite;
                    width: max-content;
                }
            `}</style>
        </section>
    );
};

export default Activities;
