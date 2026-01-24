// Fix: Added a side-effect import to ensure custom element types are loaded.
import '../types';
import React, { useState } from 'react';
import Button from '../components/Button';

const ContactInfoItem: React.FC<{ icon: string; title: string; children: React.ReactNode }> = ({ icon, title, children }) => (
    <div className="flex items-start space-x-4">
        <div className="flex-shrink-0 w-12 h-12 bg-ocean-blue-100 rounded-full flex items-center justify-center">
            <ion-icon name={icon} class="text-2xl text-ocean-blue-600"></ion-icon>
        </div>
        <div>
            <h3 className="text-lg font-semibold text-ocean-blue-800">{title}</h3>
            <p className="text-gray-600">{children}</p>
        </div>
    </div>
);

const ContactPage: React.FC = () => {
    const [formState, setFormState] = useState({ name: '', email: '', message: '' });
    const [isSubmitted, setIsSubmitted] = useState(false);

    const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
        const { name, value } = e.target;
        setFormState(prevState => ({ ...prevState, [name]: value }));
    };

    const handleSubmit = (e: React.FormEvent) => {
        e.preventDefault();
        console.log("Form submitted:", formState);
        setIsSubmitted(true);
        setFormState({ name: '', email: '', message: '' });
    };

    return (
        <div className="bg-white py-20">
            <div className="container mx-auto px-4 sm:px-6 lg:px-8">
                <div className="text-center mb-16">
                    <h1 className="text-4xl font-extrabold text-ocean-blue-800 tracking-tight">Get In Touch</h1>
                    <p className="mt-4 text-xl text-gray-600 max-w-3xl mx-auto">
                        We'd love to hear from you. Whether you have a question, a suggestion, or want to partner with us, please reach out.
                    </p>
                </div>

                <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-start">
                    {/* Left Column: Contact Info */}
                    <div className="space-y-8">
                        <ContactInfoItem icon="location-outline" title="Our Address">
                            21 2nd Main KR Garden Murugeshpalaya, Bengaluru 560017
                        </ContactInfoItem>
                        <ContactInfoItem icon="mail-outline" title="Email Us">
                            admin@nayanaaryafoundation.org
                        </ContactInfoItem>
                        <ContactInfoItem icon="call-outline" title="Call Us">
                            +91 8310551091
                        </ContactInfoItem>
                        <div className="pt-4">
                            <h3 className="text-lg font-semibold text-ocean-blue-800 mb-2">Follow Us</h3>
                             <div className="flex space-x-4">
                                <a href="#" className="text-gray-500 hover:text-ocean-blue-600 transition duration-300"><ion-icon name="logo-facebook" class="text-3xl"></ion-icon></a>
                                <a href="#" className="text-gray-500 hover:text-ocean-blue-600 transition duration-300"><ion-icon name="logo-twitter" class="text-3xl"></ion-icon></a>
                                <a href="#" className="text-gray-500 hover:text-ocean-blue-600 transition duration-300"><ion-icon name="logo-instagram" class="text-3xl"></ion-icon></a>
                                <a href="#" className="text-gray-500 hover:text-ocean-blue-600 transition duration-300"><ion-icon name="logo-linkedin" class="text-3xl"></ion-icon></a>
                            </div>
                        </div>
                    </div>

                    {/* Right Column: Contact Form */}
                    <div className="bg-gray-50 p-8 rounded-xl shadow-lg">
                        <h2 className="text-2xl font-bold text-center text-ocean-blue-800 mb-6">Send Us a Message</h2>
                        {isSubmitted ? (
                            <div className="text-center p-6 bg-green-100 rounded-lg">
                                <p className="font-semibold text-green-800">Thank you! Your message has been sent successfully.</p>
                            </div>
                        ) : (
                            <form onSubmit={handleSubmit} className="space-y-6">
                                <div>
                                    <label htmlFor="name" className="block text-sm font-medium text-gray-700 mb-1">Full Name</label>
                                    <input type="text" name="name" id="name" required value={formState.name} onChange={handleInputChange} className="w-full p-3 border-2 border-gray-200 rounded-lg focus:ring-ocean-blue-500 focus:border-ocean-blue-500 transition"/>
                                </div>
                                <div>
                                    <label htmlFor="email" className="block text-sm font-medium text-gray-700 mb-1">Email Address</label>
                                    <input type="email" name="email" id="email" required value={formState.email} onChange={handleInputChange} className="w-full p-3 border-2 border-gray-200 rounded-lg focus:ring-ocean-blue-500 focus:border-ocean-blue-500 transition"/>
                                </div>
                                <div>
                                     <label htmlFor="message" className="block text-sm font-medium text-gray-700 mb-1">Message</label>
                                    <textarea name="message" id="message" rows={5} required value={formState.message} onChange={handleInputChange} className="w-full p-3 border-2 border-gray-200 rounded-lg focus:ring-ocean-blue-500 focus:border-ocean-blue-500 transition"></textarea>
                                </div>
                                <Button onClick={() => {}} className="w-full" size="lg" type="submit">
                                    Submit Message
                                </Button>
                            </form>
                        )}
                    </div>
                </div>
            </div>
        </div>
    );
};

export default ContactPage;