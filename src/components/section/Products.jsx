import { motion } from "framer-motion";
import { useTranslation } from "react-i18next";

const Products = () => {
    const { t } = useTranslation();

    const products = [
        {
            img: "/images/cereal.png",
            titleKey: "products.product1.title",
            subtitleKey: "products.product1.subtitle",
            descKey: "products.product1.desc",
        },
        {
            img: "/images/premiere.png",
            titleKey: "products.product2.title",
            subtitleKey: "products.product2.subtitle",
            descKey: "products.product2.desc",
        },
        {
            img: "/images/flop.png",
            titleKey: "products.product3.title",
            subtitleKey: "products.product3.subtitle",
            descKey: "products.product3.desc",
        },
    ];

    return (
        <section id="products" className="px-4 sm:px-6 md:px-[10%] py-12 bg-gray-50 text-gray-800">
            <div className="text-center mb-12">
                <h2 className="text-[1.8rem] md:text-[3rem] font-heading font-bold leading-[1.2] text-black/80 mb-4">
                    {t("products.titlePart1")} <span className="text-primary">{t("products.titlePart2")}</span>
                </h2>
                <p className="leading-relaxed text-[.95rem] md:text-[1.07rem] max-w-3xl text-black/70 mx-auto mb-4">{t("products.subtitle1")}</p>
                <p className="leading-relaxed text-[.95rem] md:text-[1.07rem] max-w-3xl text-black/70 mx-auto">{t("products.subtitle2")}</p>
            </div>

            <div className="grid sm:grid-cols-2 md:grid-cols-3 gap-6 sm:gap-8">
                {products.map((product, index) => (
                    <motion.div
                        key={index}
                        initial={{ opacity: 0, y: 50 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.6, delay: index * 0.2 }}
                        viewport={{ once: true }}
                        className="border rounded-lg overflow-hidden shadow hover:shadow-lg transition duration-300 bg-white flex flex-col"
                    >
                        <img
                            src={product.img}
                            alt={t(product.titleKey)}
                            className="w-full h-56 sm:h-64 object-cover"
                        />
                        <div className="p-6 flex flex-col flex-grow">
                            <h3 className="text-[1.2rem] md:text-[1.4rem] font-heading font-bold text-secondary mb-1">{t(product.titleKey)}</h3>
                            <h4 className="text-[1.2rem] md:text-[1.4rem] font-heading font-bold text-primary mb-2">{t(product.subtitleKey)}</h4>
                            <p className="leading-relaxed text-[.95rem] md:text-[1.07rem] max-w-3xl text-black/70 mx-auto mb-4 flex-grow">{t(product.descKey)}</p>
                            {/* <button className="bg-yellow-500 text-white px-4 py-2 rounded flex items-center gap-2 justify-center hover:bg-yellow-600 transition mt-auto">
                                {t("products.button")} <span>→</span>
                            </button> */}
                        </div>
                    </motion.div>
                ))}
            </div>

            <div className="text-center mt-12 leading-relaxed text-[.95rem] md:text-[1.07rem] max-w-3xl text-black/70 mx-auto">
                {t("products.conclusion")}
            </div>
        </section>
    );
};

export default Products;
