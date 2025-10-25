import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay, Pagination } from "swiper/modules";
import { motion } from "framer-motion";
import { useTranslation } from "react-i18next";
import "swiper/css";
import "swiper/css/pagination";

const Principles = () => {
    const { t } = useTranslation();

    const principles = t("principles.principlesList", { returnObjects: true });

    return (
        <section className="relative py-12 px-[10%] bg-gradient-to-b from-gray-50 to-white text-gray-800 overflow-hidden">
            <motion.h2
                initial={{ opacity: 0, y: 40 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8 }}
                className="text-2xl sm:text-3xl md:text-[3rem] font-heading font-bold leading-tight text-black/85 mb-12 sm:mb-16 text-center"
            >
                {t("principles.title")}
            </motion.h2>

            <Swiper
                modules={[Autoplay, Pagination]}
                autoplay={{ delay: 4000, disableOnInteraction: false }}
                pagination={{ clickable: true }}
                spaceBetween={24}
                slidesPerView={1}
                breakpoints={{
                    640: { slidesPerView: 1.2 },
                    768: { slidesPerView: 1.5 },
                    1024: { slidesPerView: 2 },
                }}
                className="pb-8"
            >
                {principles.map((item, index) => (
                    <SwiperSlide key={index}>
                        <motion.div
                            initial={{ opacity: 0, y: 20 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            transition={{ duration: 0.6, delay: index * 0.1 }}
                            className="bg-white rounded-3xl shadow-card border border-gray-100 p-8 hover:shadow-bold transition transform hover:scale-[1.03]"
                        >
                            <h3 className="text-[.9rem] md:text-[1.4rem] font-heading font-bold text-secondary mb-4">
                                {item.title}
                            </h3>
                            <p className="text-gray-700 leading-relaxed text-base md:text-lg">{item.text}</p>
                        </motion.div>
                    </SwiperSlide>
                ))}
            </Swiper>

            <div className="relative mt-12 sm:mt-16 bg-secondary/10 border border-secondary rounded-3xl p-6 sm:p-8 flex flex-col md:flex-row items-center justify-center md:justify-between text-center md:text-left shadow-soft hover:shadow-lg transition overflow-hidden gap-6">
                <div className="relative z-10 md:w-3/5">
                    <h3 className="text-2xl sm:text-3xl md:text-4xl font-heading font-bold text-secondary mb-3 sm:mb-4">
                        {t("principles.companyTitle")}
                    </h3>
                    <p
                        className="text-primary text-base sm:text-lg md:text-xl leading-relaxed"
                        dangerouslySetInnerHTML={{ __html: t("principles.companyText") }}
                    />
                </div>

                <motion.div whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.95 }} className="relative z-10">
                    <a href="#contact" className="bg-secondary text-white font-semibold px-6 sm:px-8 py-3 sm:py-4 rounded-3xl shadow-md hover:bg-secondary/90 transition">
                        {t("principles.button")}
                    </a>
                </motion.div>
            </div>
        </section>
    );
};

export default Principles;
