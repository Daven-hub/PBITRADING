import React from "react";
import { useTranslation } from "react-i18next";
import { motion } from "framer-motion";
import { Play } from "lucide-react";

const About = () => {
    const { t } = useTranslation();

    const isMobile = typeof window !== "undefined" && window.innerWidth < 768;

    const leftAnimation = isMobile
        ? { opacity: 1, x: 0 }
        : { opacity: 0, x: -40 };

    const rightAnimation = isMobile
        ? { opacity: 1, x: 0 }
        : { opacity: 0, x: 40 };

    return (
        <section id="about" className="px-4 sm:px-6 md:px-[10%] py-16 bg-white text-gray-800">

            <div className="grid md:grid-cols-2 gap-12 items-center">

                <motion.div
                    initial={leftAnimation}
                    whileInView={!isMobile ? { opacity: 1, x: 0 } : {}}
                    transition={{ duration: isMobile ? 0.3 : 0.8, ease: "easeOut" }}
                    viewport={{ once: true }}
                >
                    <h2 className="text-[1.8rem] md:text-[3.1rem] font-heading font-bold leading-[1.2] text-black/70">
                        {t("about.titlePart1")}{" "}
                        <span className="text-primary font-extrabold">
                            {t("about.titlePart2")}
                        </span>
                    </h2>
                    <p className="mt-6 leading-relaxed text-[.95rem] md:text-[1.07rem] max-w-3xl text-black/70">
                        {t("about.paragraph1")}
                    </p>
                    <p className="mt-4 leading-relaxed text-[.95rem] md:text-[1.07rem] max-w-3xl text-black/70">
                        {t("about.paragraph2")}
                    </p>
                </motion.div>

                <motion.div
                    initial={rightAnimation}
                    whileInView={!isMobile ? { opacity: 1, x: 0 } : {}}
                    transition={{ duration: isMobile ? 0.3 : 0.8, ease: "easeOut" }}
                    viewport={{ once: true }}
                    className="relative"
                >
                    <img
                        src="/images/teams.png"
                        alt={t("about.imageAlt")}
                        className="rounded-2xl shadow-xl w-full object-cover h-[400px]"
                    />
                    <button className="absolute inset-0 flex items-center justify-center">
                        <div className="bg-secondary rounded-full p-6 transition">
                            <Play className="text-black" size={36} fill="black" />
                        </div>
                    </button>
                </motion.div>
            </div>

            <div className="mt-20">
                <h3 className="text-2xl sm:text-4xl font-semibold text-center text-black/70 mb-10">
                    {t("about.expertiseTitle")}
                </h3>

                <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-8">
                    {["card1", "card2", "card3"].map((card, i) => (
                        <div
                            key={i}
                            className="bg-gray-50 rounded-xl shadow-lg p-6 hover:shadow-2xl transition"
                        >
                            <img
                                src={`/images/${["agriculture", "energy", "or"][i]}.png`}
                                alt={t(`about.expertise.${card}.imageAlt`)}
                                className="rounded-lg mb-4 h-40 w-full object-cover"
                            />
                            <h3 className="text-[.9rem] md:text-[1.4rem] font-heading font-bold text-secondary mb-2">
                                {t(`about.expertise.${card}.title`)}
                            </h3>
                            <p className="leading-relaxed text-[.95rem] md:text-[1.07rem] text-black/70">
                                {t(`about.expertise.${card}.text`)}
                            </p>
                        </div>
                    ))}
                </div>
            </div>

            <div className="grid md:grid-cols-2 gap-8 mt-20">
                <div className="flex flex-col md:flex-row items-center bg-black text-white rounded-xl overflow-hidden">
                    <div className="bg-primary flex items-center justify-center p-8 md:p-10 w-full md:w-auto">
                        <img
                            src="https://cdn-icons-png.flaticon.com/512/1170/1170678.png"
                            alt={t("about.visionIconAlt")}
                            className="w-16 h-16"
                        />
                    </div>
                    <div className="p-6 md:p-8 text-center md:text-left">
                        <h4 className="text-[.9rem] md:text-[1.4rem] font-heading font-bold mb-3">
                            {t("about.card1.title")}
                        </h4>
                        <p className="text-gray-300 leading-relaxed text-[.95rem] md:text-[1.07rem]">
                            {t("about.card1.text")}
                        </p>
                    </div>
                </div>

                <div className="flex flex-col md:flex-row items-center bg-primary text-white rounded-xl overflow-hidden">
                    <div className="bg-primary flex items-center justify-center p-8 md:p-10 w-full md:w-auto">
                        <img
                            src="https://cdn-icons-png.flaticon.com/512/1170/1170679.png"
                            alt={t("about.engagementIconAlt")}
                            className="w-16 h-16"
                        />
                    </div>
                    <div className="p-6 md:p-8 text-center md:text-left">
                        <h4 className="text-[.9rem] md:text-[1.4rem] font-heading font-bold mb-3">
                            {t("about.card2.title")}
                        </h4>
                        <p className="leading-relaxed text-[.95rem] md:text-[1.07rem]">
                            {t("about.card2.text")}
                        </p>
                    </div>
                </div>
            </div>

            <div className="text-center mt-16">
                <a href="#contact" className="bg-primary text-white font-semibold px-8 py-3 rounded-lg transition">
                    {t("about.cta")}
                </a>
            </div>
        </section>
    );
};

export default About;
