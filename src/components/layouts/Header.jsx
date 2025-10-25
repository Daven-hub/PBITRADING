import React, { useState } from "react";
import { useTranslation } from "react-i18next";
import { Mail, Phone } from "lucide-react";
import LanguageSwitcher from "../ux/LanguageSwitcher";

const Header = () => {
    const { t } = useTranslation();
    const [isOpen, setIsOpen] = useState(false);

    return (
        <header className="w-full">
            <div className="bg-primary text-white text-xs sm:text-sm py-2 px-[10%] flex justify-between items-center relative overflow-hidden">
                <div className="overflow-hidden flex-1">
                    <div className="flex whitespace-nowrap animate-marquee-inside">
                        <div className="flex items-center gap-6">
                            <div className="flex items-center space-x-1">
                                <Phone size={14} />
                                <span>Cameroon: +237 6 93 11 12 07</span>
                            </div>

                            <div className="hidden md:flex items-center space-x-1">
                                <Phone size={14} />
                                <span>Belgium: +32 470 18 17 25</span>
                            </div>

                            <div className="hidden lg:flex items-center space-x-1">
                                <Phone size={14} />
                                <span>Russia: +7 (987) 504-65-57</span>
                            </div>

                            <div className="flex items-center space-x-1">
                                <Mail size={14} />
                                <a
                                    href="mailto:office@pbitrading.com"
                                    className="hover:underline break-all"
                                >
                                    office@pbitrading.com
                                </a>
                            </div>
                        </div>

                        <div className="flex items-center gap-6 ml-12">
                            <div className="flex items-center space-x-1">
                                <Phone size={14} />
                                <span>Cameroon: +237 6 93 11 12 07</span>
                            </div>

                            <div className="hidden md:flex items-center space-x-1">
                                <Phone size={14} />
                                <span>Belgium: +32 470 18 17 25</span>
                            </div>

                            <div className="hidden lg:flex items-center space-x-1">
                                <Phone size={14} />
                                <span>Russia: +7 (987) 504-65-57</span>
                            </div>

                            <div className="flex items-center space-x-1">
                                <Mail size={14} />
                                <a
                                    href="mailto:office@pbitrading.com"
                                    className="hover:underline break-all"
                                >
                                    office@pbitrading.com
                                </a>
                            </div>
                        </div>
                    </div>
                </div>

                <div className="flex items-center space-x-4 pl-6 shrink-0">
                    <div className="hidden md:flex space-x-3 text-white">
                        <a href="#" className="hover:text-gray-200 transition">
                            <i className="fab fa-linkedin-in"></i>
                        </a>
                        <a href="#" className="hover:text-gray-200 transition">
                            <i className="fab fa-twitter"></i>
                        </a>
                    </div>
                    <LanguageSwitcher />
                </div>
            </div>

            <nav className="bg-white text-black py-3 px-[10%] flex justify-between items-center font-sans relative shadow-sm">
                <div className="flex items-center space-x-3">
                    <img
                        src="/logo/pbi.png"
                        alt="PrimeBridge Logo"
                        className="w-20 h-auto object-contain"
                    />
                </div>

                <ul className="hidden md:flex space-x-8 font-medium tracking-wide">
                    <li><a href="#" className="hover:text-secondary transition">{t("navbar.home")}</a></li>
                    <li><a href="#about" className="hover:text-secondary transition">{t("navbar.about")}</a></li>
                    <li><a href="#acticitie" className="hover:text-secondary transition">{t("navbar.activities")}</a></li>
                    <li><a href="#products" className="hover:text-secondary transition">{t("navbar.products")}</a></li>
                    <li><a href="#regions" className="hover:text-secondary transition">{t("navbar.markets")}</a></li>
                </ul>

                <div className="flex items-center space-x-3">
                    <a
                        href="#contact"
                        className="hidden md:block bg-primary text-white px-4 py-2 font-semibold rounded-lg hover:bg-secondary transition"
                    >
                        {t("navbar.requestQuote")}
                    </a>

                    <button
                        onClick={() => setIsOpen(!isOpen)}
                        className="md:hidden focus:outline-none text-primary"
                    >
                        {isOpen ? (
                            <svg className="w-6 h-6" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24">
                                <line x1="18" y1="6" x2="6" y2="18" />
                                <line x1="6" y1="6" x2="18" y2="18" />
                            </svg>
                        ) : (
                            <svg className="w-6 h-6" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24">
                                <line x1="3" y1="6" x2="21" y2="6" />
                                <line x1="3" y1="12" x2="21" y2="12" />
                                <line x1="3" y1="18" x2="21" y2="18" />
                            </svg>
                        )}
                    </button>
                </div>

                <div
                    className={`absolute top-full left-0 w-full bg-primary text-white flex flex-col text-center md:hidden z-50 transition-all duration-300 ease-in-out ${isOpen ? "max-h-[500px] opacity-100" : "max-h-0 opacity-0 overflow-hidden"
                        }`}
                >
                    <a href="#" className="py-3 border-b border-gray-700 hover:bg-primary/80">{t("navbar.home")}</a>
                    <a href="#about" className="py-3 border-b border-gray-700 hover:bg-primary/80">{t("navbar.about")}</a>
                    <a href="#acticitie" className="py-3 border-b border-gray-700 hover:bg-primary/80">{t("navbar.activities")}</a>
                    <a href="#products" className="py-3 border-b border-gray-700 hover:bg-primary/80">{t("navbar.products")}</a>
                    <a href="#regions" className="py-3 border-b border-gray-700 hover:bg-primary/80">{t("navbar.markets")}</a>

                    <a
                        href="#contact"
                        className="bg-secondary text-white px-4 py-2 rounded-lg hover:bg-yellow-300 transition w-3/4 mx-auto my-3"
                    >
                        {t("navbar.requestQuote")}
                    </a>
                </div>
            </nav>
        </header>
    );
};

export default Header;
