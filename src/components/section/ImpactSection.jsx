import { motion } from "framer-motion";
import { useTranslation } from "react-i18next";

const ImpactSection = () => {
    const { t } = useTranslation();
    const paragraphs = t("impact.paragraphs", { returnObjects: true });

    return (
        <section className="py-16 sm:py-20 px-6 sm:px-8 md:px-[10%] bg-gradient-to-r from-yellow-50 to-white text-gray-800">
            <div className="max-w-6xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-8 md:gap-10 items-center">

                <motion.div
                    initial={{ opacity: 0, x: -20 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    transition={{ duration: 0.6 }}
                >
                    <h2 className="text-2xl sm:text-[2.5rem] md:text-[3.1rem] font-heading font-bold leading-[1.2] text-black/70 mb-6">
                        {t("impact.title").split(" ")[0]}{" "}
                        <span className="text-primary">{t("impact.highlight")}</span>
                    </h2>

                    {paragraphs.map((para, index) => (
                        <p key={index} className="text-gray-700 leading-relaxed mb-4 sm:mb-5">
                            {para}
                        </p>
                    ))}

                    <motion.a
                        href="#contact"
                        initial={{ opacity: 0 }}
                        whileInView={{ opacity: 1 }}
                        transition={{ duration: 0.7 }}
                        className="inline-block mt-6 sm:mt-8 bg-secondary text-white px-6 sm:px-8 py-3 sm:py-4 rounded-2xl font-semibold hover:bg-yellow-600 transition-all shadow-md hover:shadow-lg"
                    >
                        {t("impact.button")}
                    </motion.a>
                </motion.div>

                <motion.div
                    initial={{ opacity: 0, x: 20 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    transition={{ duration: 0.6 }}
                    className="w-full"
                >
                    <img
                        src="/images/chaine.jpg"
                        alt={t("impact.title")}
                        className="rounded-2xl shadow-lg object-cover w-full h-[300px] sm:h-[350px] md:h-[400px] lg:h-[450px]"
                    />
                </motion.div>

            </div>
        </section>
    );
};

export default ImpactSection;
