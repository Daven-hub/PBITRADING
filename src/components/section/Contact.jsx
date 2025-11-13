import React, { useState } from "react";
import { motion, useReducedMotion } from "framer-motion";
import { useTranslation } from "react-i18next";
import axios from "axios";
import { showErrorToast, showSuccessToast } from "../ux/Toast";

const Contact = () => {
    const { t } = useTranslation();
    const prefersReducedMotion = useReducedMotion();

    const [formData, setFormData] = useState({
        name: "",
        email: "",
        company: "",
        message: "",
    });

    const [loading, setLoading] = useState(false);

    const handleChange = (e) => {
        setFormData({
            ...formData,
            [e.target.name]: e.target.value,
        });
    };

    const handleSubmit = async (e) => {
        e.preventDefault();

        if (!formData.name || !formData.email || !formData.message) {
            showErrorToast(t("contact.validation.required"));
            return;
        }

        setLoading(true);

        try {
            const response = await axios.post("https://ton-api.com/contact", formData);

            if (response.status === 200) {
                showSuccessToast(t("contact.success"));
                setFormData({ name: "", email: "", company: "", message: "" });
            } else {
                showErrorToast(t("contact.error"));
            }
        } catch (error) {
            showErrorToast(t("contact.error"));
        } finally {
            setLoading(false);
        }
    };

    const baseTransition = prefersReducedMotion
        ? { duration: 0 }
        : { duration: 0.3, ease: "easeOut" };

    const appearVariant = {
        hidden: { opacity: 0, y: 10 },
        visible: { opacity: 1, y: 0 },
    };

    const sideVariant = {
        hidden: { opacity: 0, x: 10 },
        visible: { opacity: 1, x: 0 },
    };

    return (
        <section id="contact" className="py-12">
            <div className="mx-auto px-[10%]">
                <div className="text-center mb-12">
                    <motion.h2
                        variants={appearVariant}
                        initial="hidden"
                        whileInView="visible"
                        transition={baseTransition}
                        viewport={{ once: true, amount: 0.3 }}
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
                        onSubmit={handleSubmit}
                        variants={appearVariant}
                        initial="hidden"
                        whileInView="visible"
                        transition={baseTransition}
                        viewport={{ once: true, amount: 0.3 }}
                        className="space-y-6 flex flex-col justify-center"
                    >
                        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                            <div>
                                <label className="block text-[.9rem] md:text-[1.1rem] font-heading font-bold text-black/70 mb-2">
                                    {t("contact.labels.name")} <span className="text-red-500">*</span>
                                </label>
                                <input
                                    type="text"
                                    name="name"
                                    value={formData.name}
                                    onChange={handleChange}
                                    placeholder={t("contact.placeholders.name")}
                                    className="w-full border border-gray-300 rounded-xl p-3 focus:ring-2 focus:ring-yellow-500 outline-none"
                                />
                            </div>

                            <div>
                                <label className="block text-[.9rem] md:text-[1.1rem] font-heading font-bold text-black/70 mb-2">
                                    {t("contact.labels.email")} <span className="text-red-500">*</span>
                                </label>
                                <input
                                    type="email"
                                    name="email"
                                    value={formData.email}
                                    onChange={handleChange}
                                    placeholder={t("contact.placeholders.email")}
                                    className="w-full border border-gray-300 rounded-xl p-3 focus:ring-2 focus:ring-yellow-500 outline-none"
                                />
                            </div>
                        </div>

                        <div>
                            <label className="block text-[.9rem] md:text-[1.1rem] font-heading font-bold text-black/70 mb-2">
                                {t("contact.labels.company")}
                            </label>
                            <input
                                type="text"
                                name="company"
                                value={formData.company}
                                onChange={handleChange}
                                placeholder={t("contact.placeholders.company")}
                                className="w-full border border-gray-300 rounded-xl p-3 focus:ring-2 focus:ring-yellow-500 outline-none"
                            />
                        </div>

                        <div>
                            <label className="block text-[.9rem] md:text-[1.1rem] font-heading font-bold text-black/70 mb-2">
                                {t("contact.labels.message")} <span className="text-red-500">*</span>
                            </label>
                            <textarea
                                name="message"
                                value={formData.message}
                                onChange={handleChange}
                                placeholder={t("contact.placeholders.message")}
                                rows="5"
                                className="w-full border border-gray-300 rounded-xl p-3 focus:ring-2 focus:ring-yellow-500 outline-none"
                            />
                        </div>

                        <div>
                            <button
                                type="submit"
                                disabled={loading}
                                className={`${loading
                                    ? "bg-gray-400 cursor-not-allowed"
                                    : "bg-primary hover:bg-primary/90"
                                    } text-white font-semibold px-8 py-3 rounded-lg transition-all duration-300 shadow-md`}
                            >
                                {loading ? t("contact.loading") : t("contact.button")}
                            </button>
                        </div>
                    </motion.form>

                    <motion.div
                        variants={sideVariant}
                        initial="hidden"
                        whileInView="visible"
                        transition={baseTransition}
                        viewport={{ once: true, amount: 0.3 }}
                        className="w-full h-full"
                    >
                        <img
                            src="/images/contac.png"
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
