import { motion } from "framer-motion";
import { useTranslation } from "react-i18next";

const WhyUs = () => {
    const { t } = useTranslation();

    const reasons = t("whyus.reasons", { returnObjects: true });

    return (
        <section
            id="whyus"
            className="relative py-20 px-[10%] bg-white text-gray-800 overflow-hidden"
        >

            <img
                src="/images/sous.jpg"
                alt={t("whyus.imageAlt")}
                className="absolute left-0 top-0 h-full w-1/2 object-cover opacity-10 pointer-events-none hidden md:block"
            />

            <div className="relative z-10 max-w-6xl mx-auto">

                <div className="text-center mb-12">
                    <motion.h2
                        initial={{ opacity: 0, y: 30 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.6 }}
                        className="text-[1.8rem] md:text-[3rem] font-heading font-bold leading-[1.2] text-black/70 mb-4"
                    >
                        {t("whyus.title.part1")}{" "}
                        <span className="text-primary">{t("whyus.title.part2")}</span>
                    </motion.h2>

                    <motion.p
                        initial={{ opacity: 0 }}
                        whileInView={{ opacity: 1 }}
                        transition={{ duration: 0.8 }}
                        className="leading-relaxed text-[.95rem] md:text-[1.07rem] max-w-3xl text-black/70 mx-auto"
                    >
                        {t("whyus.subtitle")}
                    </motion.p>
                </div>


                <div className="grid md:grid-cols-2 gap-8">
                    {reasons.map((reason, i) => (
                        <motion.div
                            key={i}
                            initial={{ opacity: 0, y: 20 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            transition={{ duration: 0.5, delay: i * 0.1 }}
                            className="flex items-start space-x-4 bg-gray-50 rounded-2xl p-6 shadow-sm hover:shadow-md transition-all"
                        >
                            <span className="text-secondary text-2xl mt-1">✔</span>
                            <div>
                                <h3 className="text-[1.2rem] md:text-[1.4rem] font-heading font-bold text-secondary mb-1">
                                    {reason.title}
                                </h3>
                                <p className="leading-relaxed text-[.95rem] md:text-[1.07rem] max-w-3xl text-black/70 mx-auto">{reason.text}</p>
                            </div>
                        </motion.div>
                    ))}
                </div>


                <div className="mt-12 text-center">
                    <motion.a
                        href="#contact"
                        initial={{ opacity: 0 }}
                        whileInView={{ opacity: 1 }}
                        transition={{ duration: 0.6 }}
                        className="inline-block bg-primary text-white px-8 py-3 rounded-lg font-semibold  transition-all shadow-md hover:shadow-lg"
                    >
                        {t("whyus.cta")}
                    </motion.a>
                </div>
            </div>
        </section>
    );
};

export default WhyUs;
