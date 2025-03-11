"use client";
import React from 'react';
import { useTranslation } from 'react-i18next';
import ContactUs from '../assets/contactus.png';
import ContactForm from '../components/form';
import twitter from '../assets/twitter.png';
import instagram from '../assets/instagram.png';
import linkedin from '../assets/linkedin.png';

const ContactPage: React.FC = () => {
    const {t} = useTranslation();

    return (
        <section style={{backgroundColor:"#28282b"}} id="contact" className="h-auto w-screen bg-teamBackground flex justify-center items-center">
            <div className='bg-teamBackground w-full min-h-fit h-screen'>
                <div className="pt-16 container m-auto flex justify-center items-center">
                    <div className="text-white grid grid-cols-1 lg:grid-cols-2 gap-8">
                        <div className="flex flex-col gap-8">
                            <h1 className="text-3xl md:ml-4 lg:ml-4 md:text-5xl lg:text-6xl font-bold text-center md:text-left lg:text-left">{t("contact.header")}</h1>                            <div className="p-4 md:p-4">
                                <ContactForm />
                            </div>
                            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                                <div className="px-4">
                                    <div>
                                        <h2 className="text-2xl font-bold mb-2">{t("contact.address")}</h2>
                                        <p>{t("contact.location")}</p>
                                        <h2 className="text-2xl font-bold mt-4 mb-2">{t("contact.phone")}</h2>
                                        <p>{t("contact.phoneNumber")}</p>
                                        <h2 className="text-2xl font-bold mt-4 mb-2">{t("contact.email")}</h2>
                                        <p>{t("contact.emailAddress")}</p>
                                    </div>
                                    <div className="mt-4 flex space-x-4">
                                        <a href="https://x.com/kizilderehukuk1" target="_blank" rel="noopener noreferrer">
                                            <img src={twitter} alt="Twitter" width={32} height={32} />
                                        </a>
                                        <a href="https://www.instagram.com/kizilderehukuk" target="_blank" rel="noopener noreferrer">
                                            <img src={instagram} alt="Instagram" width={32} height={32} />
                                        </a>
                                        <a href="https://www.linkedin.com/in/k%C4%B1z%C4%B1ldere-hukuk-ve-arabuluculuk-b%C3%BCrosu-6859a9339/" target="_blank" rel="noopener noreferrer">
                                            <img src={linkedin} alt="LinkedIn" width={32} height={32} />
                                        </a>
                                    </div>
                                </div>
                                <div className="border-2 mx-4 border-gray-300">
                                    <iframe
                                        src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3631.71947469055!2d32.81014857638192!3d39.8821408880023!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x14d345f0a9aacc8d%3A0xec882979747ef3b8!2sYILDIRIM%20KULE!5e1!3m2!1sen!2str!4v1732120756387!5m2!1sen!2str"
                                        width="100%"
                                        height="100%"
                                        style={{ border: 0 }}
                                        allowFullScreen={false}
                                        loading="lazy"
                                    ></iframe>
                                </div>
                            </div>
                        </div>
                        <div className="p-4 flex justify-center items-center">
                            <img src={ContactUs} alt="Contact Us" className="w-full h-auto" />
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default ContactPage;