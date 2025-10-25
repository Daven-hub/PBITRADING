import { motion } from "framer-motion";
import { useTranslation } from "react-i18next";

const Regions = () => {
    const { t } = useTranslation();

    return (
        <section
            id="regions"
            className="relative bg-gray-50 py-20 px-4 md:px-[10%] overflow-hidden"
        >
            <div className="absolute top-0 right-0 w-full md:w-1/2 h-full opacity-10 pointer-events-none">
                <img
                    src="/images/container.jpg"
                    alt="Carte du commerce international"
                    className="w-full h-full object-cover"
                />
            </div>

            <div className="relative z-10 grid md:grid-cols-2 gap-12 items-center">
                <motion.div
                    initial={{ opacity: 0, x: -50 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    transition={{ duration: 0.8 }}
                    className="space-y-6"
                >
                    <h2
                        className="text-[1.8rem] md:text-[3.1rem] font-heading font-bold leading-[1.2] text-black/70"
                        dangerouslySetInnerHTML={{ __html: t("regions.title") }}
                    />

                    <p className="leading-relaxed text-[.95rem] md:text-[1.07rem] max-w-3xl text-black/70 mx-auto">
                        {t("regions.p1")}
                    </p>

                    <p className="leading-relaxed text-[.95rem] md:text-[1.07rem] max-w-3xl text-black/70 mx-auto">
                        {t("regions.p2")}
                    </p>

                    <div className="grid sm:grid-cols-2 gap-6 mt-8">
                        <div className="bg-white shadow-md rounded-2xl p-6 border-l-4 border-primary hover:shadow-lg transition">
                            <h3 className="text-[1.2rem] md:text-[1.4rem] font-heading font-bold text-secondary mb-2">
                                {t("regions.demande_title")}
                            </h3>
                            <p className="leading-relaxed text-[.95rem] md:text-[1.07rem] max-w-3xl text-black/70 mx-auto">
                                {t("regions.demande_text")}
                            </p>
                        </div>

                        <div className="bg-white shadow-md rounded-2xl p-6 border-l-4 border-primary hover:shadow-lg transition">
                            <h3 className="text-[1.2rem] md:text-[1.4rem] font-heading font-bold text-secondary mb-2">
                                {t("regions.offre_title")}
                            </h3>
                            <p className="leading-relaxed text-[.95rem] md:text-[1.07rem] max-w-3xl text-black/70 mx-auto">
                                {t("regions.offre_text")}
                            </p>
                        </div>
                    </div>
                </motion.div>

                <motion.div
                    initial={{ opacity: 0, x: 50 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    transition={{ duration: 0.8 }}
                    className="relative"
                >
                    <img
                        src="/images/c-removebg-preview.png"
                        alt="Corridors commerciaux internationaux"
                        className="w-full max-w-md mx-auto object-cover"
                    />
                </motion.div>
            </div>
        </section>
    );
};

export default Regions;
