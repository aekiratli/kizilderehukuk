import React, { useState } from 'react';
import { useTranslation } from 'react-i18next';
import op1 from '../assets/op1.png';
import op2 from '../assets/op2.png';
import op3 from '../assets/op3.png';
import op4 from '../assets/op4.png';
import op5 from '../assets/op5.png';
import op6 from '../assets/op6.png';
import op7 from '../assets/op7.png';
import opArrow from '../assets/opArrow.png';
import { Trans } from "react-i18next";

const OperationsPage: React.FC = () => {
    const {t} = useTranslation();
    const [expanded, setExpanded] = useState<number[]>([]);

    const operations = [
        { img: op5, header: t('operations.op1.header'), description: t('operations.op1.description'), list: t('operations.op1.items'), fullDescription: <Trans i18nKey="op1.fullDescription" components={{ strong: <strong /> }} /> },
        { img: op7, header: t('operations.op2.header'), description: t('operations.op2.description'), list: t('operations.op2.items'), fullDescription: <Trans i18nKey="op2.fullDescription" components={{ strong: <strong /> }} /> },
        { img: op6, header: t('operations.op3.header'), description: t('operations.op3.description'), list: t('operations.op3.items'), fullDescription: <Trans i18nKey="op3.fullDescription" components={{ strong: <strong /> }} /> },
        { img: op4, header: t('operations.op4.header'), description: t('operations.op4.description'), list: t('operations.op4.items'), fullDescription: <Trans i18nKey="op4.fullDescription" components={{ strong: <strong /> }} /> },
        { img: op2, header: t('operations.op5.header'), description: t('operations.op5.description'), list: t('operations.op5.items'), fullDescription: <Trans i18nKey="op5.fullDescription" components={{ strong: <strong /> }} /> },
        { img: op1, header: t('operations.op6.header'), description: t('operations.op6.description'), list: t('operations.op6.items'), fullDescription: <Trans i18nKey="op6.fullDescription" components={{ strong: <strong /> }} /> },
        { img: op3, header: t('operations.op7.header'), description: t('operations.op7.description'), list: t('operations.op7.items'), fullDescription: <Trans i18nKey="op7.fullDescription" components={{ strong: <strong /> }} /> },
    ];

    const toggleExpand = (index: number) => {
        setExpanded(expanded.includes(index) ? expanded.filter(i => i !== index) : [...expanded, index]);
    };

    return (
        <section style={{backgroundColor:'#eaeaea'}} id="services" className="min-h-screen bg-aboutBackground pt-16 lg:p-16 md:p-16 lg:px-6 md:px-6">
            <div className="container mx-auto px-4 md:px-8 lg:px-16">
                <div className="md:w-1/3">
                    <h1 className="text-aboutHeaderColor text-3xl md:text-5xl lg:text-6xl font-bold mt-2 text-center md:text-left mb-4">
                        {t('operations.header').split('operations. ')[0]}<br />{t('operations.header').split('operations. ').slice(1).join(' ')}
                    </h1>
                    <div className="h-0.5 bg-gradient-to-r from-[#a6a6a6] to-[#ffffff] mb-8"></div>
                </div>
                {/* <img src={lawyers} alt="Lawyers" width={1366} height={768} className="py-8 w-full h-auto" /> */}
                <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                    {operations.map((op, index) => (
                        <div key={index} className="grid grid-cols-8 gap-4 p-4">
                            <div className="md:col-span-2 lg:col-span-2 col-span-1 flex justify-start items-center">
                                <img src={op.img} alt={op.header} width={1366} height={164} />
                            </div>
                            <div className="md:col-span-6 lg:col-span-6 col-span-7 flex flex-col justify-center">
                                <div className="flex justify-between items-center">
                                    <h2 className="lg:text-2xl text-xl  md:text-2xl font-bold">{op.header}</h2>
                                    <button onClick={() => toggleExpand(index)} className="ml-auto">
                                        <img src={opArrow} alt="Expand" width={32} height={32} className={`transform transition-transform ${expanded.includes(index) ? 'rotate-180' : ''}`} />
                                    </button>
                                </div>
                                <p className="mt-2 text-balance">{op.description}</p>
                                <div className={`transition-max-height duration-100 ease-in-out overflow-hidden ${expanded.includes(index) ? 'max-h-screen' : 'max-h-0'}`}>
                                    <div>
                                        {op.list.split('operations.\n').map((item, i) => (
                                            <p key={i} className="ml-4 mt-2">{item}</p>
                                        ))}
                                    </div>
                                    <p className="mt-2">{op.fullDescription}</p>

                                </div>
                                <div className={`transition-max-height duration-100 ease-in-out overflow-hidden ${expanded.includes(index) ? 'max-h-screen' : 'max-h-0'}`}>
                                    <div className="flex justify-start py-4">
                                        <a href="/iletisim" className="mt-2 px-2 py-2 bg-gradient-to-b from-[#a6a6a6] to-[#ffffff] text-black font-bold hover:from-[#ffffff] hover:to-[#a6a6a6] transition-transform duration-300 transform hover:scale-105">
                                            {t('operations.button')}
                                        </a>
                                    </div>
                                </div>
                            </div>

                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
};

export default OperationsPage;