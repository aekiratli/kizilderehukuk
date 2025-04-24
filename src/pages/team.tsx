"use client";
import React, { useState } from 'react';
import lawyer1 from '../assets/lawyer1.png';
import lawyer2 from '../assets/lawyer3.png';
import lawyer3 from '../assets/lawyer2.png';
import arrowUpward from '../assets/arrowUpward.png';
import { useTranslation } from 'react-i18next';

const TeamPage: React.FC = () => {
    const {t}= useTranslation();
    const [expanded, setExpanded] = useState<boolean[]>([false, false, false]);

    const toggleExpand = (index: number) => {
        setExpanded(prevState => {
            const newState = [...prevState];
            newState[index] = !newState[index];
            return newState;
        });
    };

    return (
        <div style={{backgroundColor:"#28282b"}} className='h-screen bg-teamBackground'>
        <section id="team" style={{backgroundColor:"#28282b"}}  className="h-auto w-screen bg-teamBackground py-8">
            <div className="container mx-auto px-2 md:px-8 lg:px-16">
                <h1 className="text-white text-3xl md:text-5xl lg:text-6xl font-bold my-16 text-center md:text-left">{t('team.header')}</h1>
                <div className="text-white grid grid-cols-1 md:grid-cols-3 gap-8">
                    <div className="p-4 flex flex-col">
                        <div className="flex justify-center mb-4">
                            <img src={lawyer1} alt={t('team.lawyer1.name')} width={300} height={300} />
                        </div>
                        <h2 className="text-2xl font-bold">{t('team.lawyer1.name')}</h2>
                        <p className="my-4 text-xl flex items-center h-12">
                            {t('team.lawyer1.header')}
                            <span className="ml-2 cursor-pointer" onClick={() => toggleExpand(0)}>
                                <img
                                    src={arrowUpward}
                                    alt="Toggle Description"
                                    width={24}
                                    height={24}
                                    className={`transform transition-transform duration-100 ${expanded[0] ? 'rotate-0' : 'rotate-180'}`}
                                />
                            </span>
                        </p>
                        <div className={`flex-grow transition-max-height duration-100 ease-in-out overflow-hidden ${expanded[0] ? 'max-h-screen' : 'max-h-0'}`}>
                            <p className="mt-2 text-pretty">{t('team.lawyer1.description')}</p>
                        </div>
                        <div className="w-full h-0.5 bg-gradient-to-r from-[#a6a6a6] to-[#ffffff] mb-2"></div>
                        <p className="mt-2 text-sm">
                            <strong>{t('team.lawyer1.emailHeader')}</strong>
                            <a href={`mailto:${t('team.lawyer1.email')}`} className="no-underline text-white ml-1">
                                {t('team.lawyer1.email')}
                            </a>
                        </p>
                    </div>

                    <div className="p-4 flex flex-col">
                        <div className="flex justify-center mb-4">
                            <img src={lawyer2} alt={t('team.lawyer2.name')} width={300} height={300} />
                        </div>
                        <h2 className="text-2xl font-bold">{t('team.lawyer2.name')}</h2>
                        <p className="my-8 text-xl flex items-end h-12">
                            {t('team.lawyer2.header')}
                            <span className="ml-2 cursor-pointer" onClick={() => toggleExpand(1)}>
                                <img
                                    src={arrowUpward}
                                    alt="Toggle Description"
                                    width={24}
                                    height={24}
                                    className={`transform transition-transform duration-200 ${expanded[1] ? 'rotate-0' : 'rotate-180'}`}
                                />
                            </span>
                        </p>
                        <div className={`flex-grow transition-max-height duration-100 ease-in-out overflow-hidden ${expanded[1] ? 'max-h-screen' : 'max-h-0'}`}>
                            <p className="mt-2">{t('team.lawyer2.description')}</p>
                        </div>
                        <div className="w-full h-0.5 bg-gradient-to-r from-[#a6a6a6] to-[#ffffff] mb-2"></div>
                        <p className="mt-2 text-sm">
                            <strong>{t('team.lawyer2.emailHeader')}</strong>
                            <a href={`mailto:${t('team.lawyer2.email')}`} className="no-underline text-white ml-1">
                                {t('team.lawyer2.email')}
                            </a>
                        </p>
                    </div>
                </div>
            </div>
        </section>
        </div>
    );
};

export default TeamPage;