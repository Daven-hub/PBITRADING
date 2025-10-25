import React from "react";
import { motion } from "framer-motion";
import { useTranslation } from "react-i18next";

const GovernanceSection = () => {
    const { t } = useTranslation();
    const items = t("governance.items", { returnObjects: true });

    return (
        <section className="relative px-6 sm:px-8 md:px-[10%] py-24 bg-blue-950 text-white flex flex-col items-center overflow-hidden">
            <img
                src="/images/p4.png"
                alt="Governance background"
                className="absolute inset-0 w-full h-full object-cover opacity-10 pointer-events-none"
            />

            <div className="relative z-10 w-full max-w-7xl mx-auto text-center">
                <motion.h2
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.6 }}
                    className="text-[1.8rem] md:text-[3.1rem] font-heading font-bold leading-[1.2] mb-12 sm:mb-16"
                >
                    {t("governance.title").split("&")[0]} &{" "}
                    <span className="">{t("governance.highlight")}</span>
                </motion.h2>

                <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-2 gap-6 sm:gap-8 lg:gap-10">
                    {items.map((item, i) => (
                        <motion.div
                            key={i}
                            initial={{ opacity: 0, y: 30 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            transition={{ duration: 0.5, delay: i * 0.1 }}
                            className="bg-white/10 backdrop-blur-lg border border-white/20 shadow-xl rounded-3xl p-6 sm:p-8 lg:p-10 text-left hover:bg-white/20 hover:-translate-y-2 transition-all duration-300"
                        >
                            <div className="flex items-start space-x-4">
                                <span className="text-secondary text-2xl sm:text-3xl mt-1">✔</span>
                                <p className="text-[.9rem] md:text-[1.4rem] font-heading font-bold text-white">
                                    {item}
                                </p>
                            </div>
                        </motion.div>
                    ))}
                </div>
            </div>
        </section>
    );
};

export default GovernanceSection;
