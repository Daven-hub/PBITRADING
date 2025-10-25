import { motion } from "framer-motion";
import { useTranslation } from "react-i18next";

const Contact = () => {
    const { t } = useTranslation();

    return (
        <section id="contact" className="py-12 ">
            <div className="mx-auto px-[10%]">


                <div className="text-center mb-12">
                    <motion.h2
                        initial={{ opacity: 0, y: 15 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.4 }}
                        className="text-[1.8rem] md:text-[3.1rem] font-heading font-bold leading-[1.2] text-black/70 mb-4"
                    >
                        {t("contact.title")}
                    </motion.h2>
                    <p className="leading-relaxed text-[.95rem] md:text-[1.07rem] max-w-3xl text-black/70 mx-auto">
                        {t("contact.subtitle")}
                    </p>
                </div>


                <div className="grid grid-cols-1 md:grid-cols-2 gap-8 md:gap-10 items-stretch">


                    <motion.form
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.5 }}
                        className="space-y-6 flex flex-col justify-center"
                    >
                        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                            <div>
                                <label className="block text-[.9rem] md:text-[1.4rem] font-heading font-bold text-black/70 mb-2">
                                    {t("contact.labels.name")} <span className="text-red-500">*</span>
                                </label>
                                <input
                                    type="text"
                                    placeholder={t("contact.placeholders.name")}
                                    required
                                    className="w-full border border-gray-300 rounded-xl p-3 focus:ring-2 focus:ring-yellow-500 outline-none"
                                />
                            </div>
                            <div>
                                <label className="block text-[.9rem] md:text-[1.4rem] font-heading font-bold text-black/70  mb-2">
                                    {t("contact.labels.email")} <span className="text-red-500">*</span>
                                </label>
                                <input
                                    type="email"
                                    placeholder={t("contact.placeholders.email")}
                                    required
                                    className="w-full border border-gray-300 rounded-xl p-3 focus:ring-2 focus:ring-yellow-500 outline-none"
                                />
                            </div>
                        </div>

                        <div>
                            <label className="block text-[.9rem] md:text-[1.4rem] font-heading font-bold text-black/70  mb-2">
                                {t("contact.labels.company")}
                            </label>
                            <input
                                type="text"
                                placeholder={t("contact.placeholders.company")}
                                className="w-full border border-gray-300 rounded-xl p-3 focus:ring-2 focus:ring-yellow-500 outline-none"
                            />
                        </div>

                        <div>
                            <label className="block text-[.9rem] md:text-[1.4rem] font-heading font-bold text-black/70  mb-2">
                                {t("contact.labels.message")} <span className="text-red-500">*</span>
                            </label>
                            <textarea
                                placeholder={t("contact.placeholders.message")}
                                rows="5"
                                required
                                className="w-full border border-gray-300 rounded-xl p-3 focus:ring-2 focus:ring-yellow-500 outline-none"
                            />
                        </div>

                        <div>
                            <button
                                type="submit"
                                className="bg-primary text-white font-semibold px-8 py-3 rounded-lg transition-all duration-300 shadow-md"
                            >
                                {t("contact.button")}
                            </button>
                        </div>
                    </motion.form>

                    <motion.div
                        initial={{ opacity: 0, x: 20 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        transition={{ duration: 0.5 }}
                        className="w-full h-full"
                    >
                        <img
                            src="/images/trade.png"
                            alt={t("contact.title")}
                            className="w-full h-full object-cover rounded-2xl shadow-lg"
                        />
                    </motion.div>

                </div>
            </div>
        </section>
    );
};

export default Contact;
