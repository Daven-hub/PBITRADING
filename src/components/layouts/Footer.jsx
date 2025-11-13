import React from "react";
import { useTranslation } from "react-i18next";
import { Phone, Mail } from "lucide-react";
import LanguageSwitcher from "../ux/LanguageSwitcher";

const Footer = () => {
    const { t } = useTranslation();
    const contacts = t("contact.contacts", { returnObjects: true });

    return (
        <footer className="bg-primary text-white relative overflow-hidden pt-16 pb-8 px-6 md:px-[10%]">
            <div className="absolute -top-32 -left-32 w-[300px] h-[300px] bg-yellow-500 rounded-full opacity-20 mix-blend-multiply blur-3xl pointer-events-none"></div>
            <div className="absolute -bottom-32 -right-32 w-[400px] h-[400px] bg-secondary rounded-full opacity-20 mix-blend-multiply blur-3xl pointer-events-none"></div>

            <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-4 gap-10 relative z-10">

                <div className="flex flex-col gap-4">
                    <img
                        src="/logo/pbi.png"
                        alt="PrimeBridge Logo"
                        className="w-32 h-auto object-contain bg-white p-1 rounded"
                    />
                    <p className="leading-relaxed text-[.95rem] md:text-[.95rem] max-w-3xl text-black/70 text-white">
                        {t(
                            "footer.description",
                            "Prime Bridge International Trading garantit des solutions fiables et transparentes dans le commerce international et la logistique."
                        )}
                    </p>
                </div>

                <div>
                    <h3 className="text-[.9rem] md:text-[1.4rem] font-heading font-bold text-secondary mb-4">{t("footer.contactTitle", "Contactez-nous")}</h3>
                    <div className="flex flex-col gap-3 text-gray-200 text-sm">
                        <div className="flex items-center gap-2">
                            <Phone size={16} />
                            <span>Cameroon: {contacts.cameroon}</span>
                        </div>
                        <div className="flex items-center gap-2">
                            <Phone size={16} />
                            <span>Belgium: {contacts.belgium}</span>
                        </div>
                        <div className="flex items-center gap-2">
                            <Phone size={16} />
                            <span>Russia: {contacts.russia}</span>
                        </div>
                        <div className="flex items-center gap-2">
                            <Mail size={16} />
                            <a href={`mailto:${contacts.email}`} className="hover:underline break-all">
                                {contacts.email}
                            </a>
                        </div>
                    </div>
                </div>

                <div>
                    <h3 className="text-[.9rem] md:text-[1.4rem] font-heading font-bold text-secondary mb-4">{t("footer.quickLinks", "Liens rapides")}</h3>
                    <ul className="flex flex-col gap-2 text-gray-200 text-sm">
                        <li><a href="#" className="hover:text-secondary transition">{t("navbar.home")}</a></li>
                        <li><a href="#about" className="hover:text-secondary transition">{t("navbar.about")}</a></li>
                        <li><a href="#acticitie" className="hover:text-secondary transition">{t("navbar.activities")}</a></li>
                        <li><a href="#products" className="hover:text-secondary transition">{t("navbar.products")}</a></li>
                        <li><a href="#regions" className="hover:text-secondary transition">{t("navbar.markets")}</a></li>
                        <li><a href="#contact" className="hover:text-secondary transition">{t("navbar.contact")}</a></li>
                    </ul>
                </div>

                <div className="flex flex-col items-start md:items-end gap-4">
                    <h3 className="text-[.9rem] md:text-[1.4rem] font-heading font-bold text-secondary mb-2">{t("footer.followUs", "Suivez-nous")}</h3>
                    <div className="flex gap-4 text-white text-lg">
                        <a href="#" className="hover:text-secondary transition">
                            <i className="fab fa-linkedin-in"></i>
                        </a>
                        <a href="#" className="hover:text-secondary transition">
                            <i className="fab fa-twitter"></i>
                        </a>
                        <a href="#" className="hover:text-secondary transition">
                            <i className="fab fa-facebook-f"></i>
                        </a>
                    </div>
                    <LanguageSwitcher />
                </div>
            </div>


            <div className="mt-10 border-t border-white/20 pt-4 text-gray-300 text-sm flex flex-col sm:flex-row justify-between items-center">
                <div>
                    &copy; {new Date().getFullYear()} Prime Bridge International Trading. {t("footer.rights", "Tous droits réservés.")}
                </div>
                <div className="mt-2 sm:mt-0">
                    Design & Développement par{" "}
                    <a
                        href="https://duchessedafricart.com/services/MindzStudio"
                        target="_blank"
                        rel="noopener noreferrer"
                        className="text-white underline hover:text-secondary transition"
                    >
                        MindzStudio
                    </a>
                </div>
            </div>
        </footer>
    );
};

export default Footer;
