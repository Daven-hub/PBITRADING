
import { motion } from "framer-motion";
import { useTranslation } from "react-i18next";

const CTASection = () => {
    const { t } = useTranslation();

    return (
        <section className="relative w-full h-[500px] md:h-[600px] flex items-center overflow-hidden">

            <img
                src="/images/logistique.png"
                alt={t("cta.bgAlt")}
                className="absolute w-full h-full object-cover z-0"
            />


            <div className="absolute w-full h-full bg-black/50 z-10"></div>


            <motion.div
                initial={{ opacity: 0, x: -50 }}
                whileInView={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.8 }}
                className="relative z-20 px-4 sm:px-6 md:px-[10%] text-left text-white "
            >
                <h2 className="text-2xl sm:text-3xl md:text-5xl font-bold mb-4">
                    {t("cta.title")}
                </h2>
                <p className="text-base sm:text-lg md:text-xl mb-6">
                    {t("cta.subtitle")}
                </p>
                <a href="#contact" className="bg-primary  text-white font-semibold px-6 py-3 rounded shadow-lg transition duration-300">
                    {t("cta.button")}
                </a>
            </motion.div>
        </section>
    );
};

export default CTASection;
