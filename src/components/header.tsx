"use client";
import React, { useState } from 'react';
import { useTranslation } from "react-i18next";
import menu from '../assets/menu.png';
import close from '../assets/close.png';
import logo from '../assets/logo.png'; // Import the logo
import { useNavigate } from "react-router-dom";


const Header: React.FC = () => {
  const { t, i18n } = useTranslation();
  const [locale, setLocale] = useState('tr');
  const navigate = useNavigate(); // Replacing useRouter with useNavigate

  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  const toggleMobileMenu = () => {
    setIsMobileMenuOpen((prev) => !prev);
  };

  const handleLanguageChange = () => {
    console.log("change")
    if (locale === 'en'){
      i18n.changeLanguage("tr")
      setLocale("tr")
    }
    else
    {
      i18n.changeLanguage("en")
      setLocale("en")
    }
  };

  const navigateTo = (path: string) => {
    navigate(path);
    setIsMobileMenuOpen(false); // Close mobile menu on navigation
  };

  return (
    <header style={{backgroundColor:"#fdfaf5", opacity:0.9}} className=" overflow-hidden md:fixed absolute top-0 right-0 bg-opacity-90  shadow-md z-50 md:w-auto w-full">
      <div className="p-2 flex justify-between items-center ">
        {/* Logo or brand name */}
        <img src={logo} alt="Logo" width={24} height={24} className="md:hidden" />
        <h6 className='md:hidden ml-4'>{t('header.kizildere')}</h6>

        {/* Mobile Menu Toggle Button */}
        <button
          className="block md:hidden focus:outline-none ml-auto"
          onClick={toggleMobileMenu}
        >
          <img
            src={isMobileMenuOpen ? close : menu}
            alt="Menu"
            width={24}
            height={24}
          />
        </button>

        {/* Desktop Navigation */}
        <nav className="hidden bg-opacity-90 md:flex space-x-6 ml-auto">
          <button onClick={() => navigateTo('/')} className="cursor-pointer text-gray-800 hover:text-gray-600">{t('header.home')}</button>
          <button onClick={() => navigateTo('/hakkimizda')} className="cursor-pointer text-gray-800 hover:text-gray-600">{t('header.about')}</button>
          <button onClick={() => navigateTo('/faaliyet_alanlarimiz')} className="cursor-pointer text-gray-800 hover:text-gray-600">{t('header.operations')}</button>
          <button onClick={() => navigateTo('/ekibimiz')} className="cursor-pointer text-gray-800 hover:text-gray-600">{t('header.team')}</button>
          <button onClick={() => navigateTo('/iletisim')} className="cursor-pointer text-gray-800 hover:text-gray-600">{t('header.contact')}</button>
          <button onClick={handleLanguageChange} className="cursor-pointer text-gray-800 hover:text-gray-600">EN/TR</button>
        </nav>
      </div>

      {/* Mobile Navigation */}
      {isMobileMenuOpen && (
        <nav className="flex flex-col items-end space-y-4 bg-white bg-opacity-50 shadow-md p-4 md:hidden transition-transform transform duration-300 ease-in-out">
          <button onClick={() => navigateTo('/')} className="cursor-pointer text-gray-800 hover:text-gray-600">{t('header.home')}</button>
          <button onClick={() => navigateTo('/hakkimizda')} className="cursor-pointer text-gray-800 hover:text-gray-600">{t('header.about')}</button>
          <button onClick={() => navigateTo('/faaliyet_alanlarimiz')} className="cursor-pointer text-gray-800 hover:text-gray-600">{t('header.operations')}</button>
          <button onClick={() => navigateTo('/ekibimiz')} className="cursor-pointer text-gray-800 hover:text-gray-600">{t('header.team')}</button>
          <button onClick={() => navigateTo('/iletisim')} className="cursor-pointer text-gray-800 hover:text-gray-600">{t('header.contact')}</button>
          <button onClick={handleLanguageChange} className="cursor-pointer text-gray-800 hover:text-gray-600">EN/TR</button>
        </nav>
      )}
    </header>
  );
};

export default Header;