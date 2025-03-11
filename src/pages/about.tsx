import React, { useEffect } from 'react';
import About from '../assets/about.png';
import { useTranslation } from 'react-i18next';
import { Trans } from "react-i18next";

const AboutPage: React.FC = () => {
  const {t} = useTranslation();
  const [isMobile, setIsMobile] = React.useState(false);

  useEffect(() => {
    if (window.innerWidth < 1024) {
      setIsMobile(true);
    }
  }, []);

  return (
    <section id="about" style={{backgroundColor:'#eaeaea'}} className="h-screen bg-aboutBackground pt-12 md:pt-0 lg:pt-0">
      <div style={{backgroundColor:'#eaeaea'}}  className='bg-aboutBackground w-full min-h-fit h-auto'>
        <div className="container mx-auto h-full grid grid-cols-1 md:grid-cols-2 gap-8 py-8 md:py-32 px-4 md:px-8 lg:px-16">
          {isMobile ? (
            <>
              <div className="col-span-1 flex flex-col justify-center items-center md:items-start">
                <h1 className="text-aboutHeaderColor text-3xl md:text-5xl lg:text-6xl font-bold mb-4 text-center md:text-left">{t('about.header')}</h1>
                <div className="w-full h-0.5 bg-gradient-to-r from-[#a6a6a6] to-[#ffffff] mb-8"></div>
                <p className="mb-4 text-justify">
                <Trans i18nKey="about.description1" components={{ strong: <strong /> }} />

                </p>
                <a href="#contact" className="mt-4 px-4 py-4 bg-gradient-to-b from-[#a6a6a6] to-[#ffffff] text-black font-bold hover:from-[#ffffff] hover:to-[#a6a6a6] transition-transform duration-300 transform hover:scale-105 self-center md:self-start">
                  {t('about.button')}
                </a>
              </div>
              <div className="col-span-1 flex justify-center items-center">
                <img src={About} alt="About" width={1080} height={1920} />
              </div>
            </>
          ) : (
            <>
              <div className="col-span-1 flex justify-center items-center">
                <img src={About} alt="About" width={1080} height={1920} />
              </div>
              <div className="col-span-1 flex flex-col justify-center items-center md:items-start">
                <h1 className="text-aboutHeaderColor text-3xl md:text-5xl lg:text-6xl font-bold mb-4 text-center md:text-left">{t('about.header')}</h1>
                <div className="w-full h-0.5 bg-gradient-to-r from-[#a6a6a6] to-[#ffffff] mb-8"></div>
                <p className="mb-4 ">
                <Trans i18nKey="about.description1" components={{ strong: <strong /> }} />

                </p>
                <a href="#contact" className="mt-4 px-4 py-4 bg-gradient-to-b from-[#a6a6a6] to-[#ffffff] text-black font-bold hover:from-[#ffffff] hover:to-[#a6a6a6] transition-transform duration-300 transform hover:scale-105 self-center md:self-start">
                  {t('about.button')}
                </a>
              </div>
            </>
          )}
        </div>
      </div>
    </section>
  );
};

export default AboutPage;