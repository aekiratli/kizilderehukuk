"use client";
import { useState, ChangeEvent, FormEvent, useRef } from 'react';
import { useTranslation } from 'react-i18next';
import emailjs from '@emailjs/browser';

interface FormData {
  name: string;
  email: string;
  message: string;
}

const SERVICE_ID =  '';
const TEMPLATE_ID =  '';
const PUBLIC_KEY =  '';

const ContactForm = () => {
  const {t} = useTranslation();
  const form = useRef<HTMLFormElement>(null);

  const [formData, setFormData] = useState<FormData>({
    name: '',
    email: '',
    message: ''
  });

  const [loading, setLoading] = useState(false);
  const [messageType, setMessageType] = useState<'success' | 'error' | null>(null);

  const handleChange = (e: ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value
    });
  };

  const handleSubmit = async (e: FormEvent) => {
    e.preventDefault();
    setLoading(true);

    if (form.current) {
      emailjs
        .sendForm(SERVICE_ID, TEMPLATE_ID, form.current, PUBLIC_KEY)
        .then(
          () => {
            setLoading(false);
            setMessageType('success');
            setFormData({ name: '', email: '', message: '' }); // Reset form data
          },
          (error) => {
            setLoading(false);
            console.log(`Form submission failed: ${error.text}`);
            setMessageType('error');
          },
        );
    } else {
      setLoading(false);
      console.log('Form reference is null.');
    }
  };

  const isFormEmpty = !formData.name || !formData.email || !formData.message;

  return (
    <form ref={form} className='md:w-4/5' onSubmit={handleSubmit}>
      <div>
        <input
          type="text"
          name="name"
          value={formData.name}
          onChange={handleChange}
          placeholder={t("contact.name")}
          required
          className="w-full p-2 border rounded text-black bg-white"
        />
      </div>
      <div className="mt-4">
        <input
          type="email"
          name="email"
          value={formData.email}
          onChange={handleChange}
          placeholder={t("contact.email")}
          required
          className="w-full p-2 border rounded text-black bg-white"
        />
      </div>
      <div className="mt-4">
        <textarea
          name="message"
          value={formData.message}
          onChange={handleChange}
          placeholder={t("contact.message")}
          required
          className="w-full p-2 border rounded text-black bg-white"
        />
      </div>
      <button
        type="submit"
        disabled={isFormEmpty || loading}
        className={`mt-4 px-4 py-2 bg-gradient-to-b from-[#a6a6a6] to-[#ffffff] text-black font-bold rounded transition-transform duration-300 transform hover:scale-105 ${isFormEmpty || loading ? 'opacity-50 cursor-not-allowed' : ''}`}
      >
        {loading ? t("contact.loadingMessage") : t("contact.submitButton")}
      </button>
      {messageType && (
        <p className={`mt-4 ${messageType === 'success' ? 'text-green-500' : 'text-red-500'}`}>
          {messageType === 'success' ? t("contact.successMessage") : t("contact.errorMessage")}
        </p>
      )}
    </form>
  );
};

export default ContactForm;