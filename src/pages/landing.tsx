import React from 'react';
import logo from '../assets/logo.png';
import { useTranslation } from "react-i18next";

const LandingPage: React.FC = () => {
  const {t} = useTranslation();

  return (
    <section id="home" className="h-screen overflow-x-hidden">
      <div
        className="bg-cover bg-center md:bg-fixed h-screen md:h-screen flex flex-col justify-center items-center md:items-start"
        style={{ backgroundImage: `url('/background2.png')` }}
      >
        <div
          className=" p-4 md:p-2 xl:p-4 w-[90 %] sm:w-3/4 md:w-2/3 lg:w-2/3 xl:w-2/5 min-h-[400px] md:min-h-[80vh] bg-opacity-90 flex flex-col lg:flex-row items-center md:items-start justify-start mx-4 md:ml-16 mt-8 md:mt-0"
        >
          <div className="flex flex-col items-center lg:items-start flex-10 text-center lg:text-start pr-2">
            <img
              src={logo}
              className="w-[100px] sm:w-[160px] md:w-[180px] lg:w-[200px]"
            />
            <h2 className="text-xl md:text-4xl font-bold text-white text-center md:text-left break-words">
              {t('landing.header').split(' ')[0]}<br />{t('landing.header').split(' ').slice(1).join(' ')}
            </h2>
            <a href="/iletisim" className="mt-4 mb-8 md:px-12 px-4 py-4 bg-gradient-to-b from-[#a6a6a6] to-[#ffffff] text-black font-bold text-center transform transition-transform duration-300 hover:scale-105">
              {t('landing.button')}
            </a>
          </div>
        </div>
      </div>
    </section>
  );
};

export default LandingPage;