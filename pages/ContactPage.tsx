// Fix: Added a side-effect import to ensure custom element types are loaded.
import '../types';
import React, { useState } from 'react';
import Button from '../components/Button';

const ContactInfoItem: React.FC<{ icon: string; title: string; children: React.ReactNode }> = ({ icon, title, children }) => (
    <div className="flex items-start space-x-4">
        <div className="flex-shrink-0 w-12 h-12 bg-ocean-blue-100 rounded-full flex items-center justify-center">
            <ion-icon name={icon} class="text-2xl text-ocean-blue-600" aria-hidden="true"></ion-icon>
        </div>
        <div>
            <h3 className="text-lg font-semibold text-ocean-blue-800">{title}</h3>
            <p className="text-gray-600">{children}</p>
        </div>
    </div>
);

const ContactPage: React.FC = () => {
    const [formState, setFormState] = useState({ name: '', email: '', subject: '', message: '' });
    const [isSubmitted, setIsSubmitted] = useState(false);
    const [formErrors, setFormErrors] = useState<Record<string, string>>({});

    const validateForm = (): boolean => {
        const errors: Record<string, string> = {};
        
        if (!formState.name.trim()) errors.name = 'Name is required';
        if (!formState.email.trim()) errors.email = 'Email is required';
        else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(formState.email)) errors.email = 'Invalid email format';
        if (!formState.subject.trim()) errors.subject = 'Subject is required';
        if (!formState.message.trim()) errors.message = 'Message is required';
        
        setFormErrors(errors);
        return Object.keys(errors).length === 0;
    };

    const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
        const { name, value } = e.target;
        setFormState(prevState => ({ ...prevState, [name]: value }));
        // Clear error for this field
        if (formErrors[name]) {
            setFormErrors(prev => ({ ...prev, [name]: '' }));
        }
    };

    const handleSubmit = (e: React.FormEvent) => {
        e.preventDefault();
        
        if (!validateForm()) return;

        console.log("Form submitted:", formState);
        setIsSubmitted(true);
        setFormState({ name: '', email: '', subject: '', message: '' });

        // Reset after 5 seconds
        setTimeout(() => setIsSubmitted(false), 5000);
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
                            <a href="mailto:admin@nayanaaryafoundation.org" className="text-ocean-blue-600 hover:text-ocean-blue-800">admin@nayanaaryafoundation.org</a>
                        </ContactInfoItem>
                        <ContactInfoItem icon="call-outline" title="Call Us">
                            <a href="tel:+918310551091" className="text-ocean-blue-600 hover:text-ocean-blue-800">+91 8310551091</a>
                        </ContactInfoItem>
                        <div className="pt-4">
                            <h3 className="text-lg font-semibold text-ocean-blue-800 mb-3">Follow Us</h3>
                             <div className="flex space-x-4">
                                <a href="https://facebook.com" target="_blank" rel="noopener noreferrer" className="text-gray-500 hover:text-ocean-blue-600 transition duration-300 focus:ring-2 focus:ring-ocean-blue-500 rounded p-2" aria-label="Facebook"><ion-icon name="logo-facebook" class="text-3xl"></ion-icon></a>
                                <a href="https://twitter.com" target="_blank" rel="noopener noreferrer" className="text-gray-500 hover:text-ocean-blue-600 transition duration-300 focus:ring-2 focus:ring-ocean-blue-500 rounded p-2" aria-label="Twitter"><ion-icon name="logo-twitter" class="text-3xl"></ion-icon></a>
                                <a href="https://instagram.com" target="_blank" rel="noopener noreferrer" className="text-gray-500 hover:text-ocean-blue-600 transition duration-300 focus:ring-2 focus:ring-ocean-blue-500 rounded p-2" aria-label="Instagram"><ion-icon name="logo-instagram" class="text-3xl"></ion-icon></a>
                                <a href="https://linkedin.com" target="_blank" rel="noopener noreferrer" className="text-gray-500 hover:text-ocean-blue-600 transition duration-300 focus:ring-2 focus:ring-ocean-blue-500 rounded p-2" aria-label="LinkedIn"><ion-icon name="logo-linkedin" class="text-3xl"></ion-icon></a>
                            </div>
                        </div>
                    </div>

                    {/* Right Column: Contact Form */}
                    <div className="bg-gray-50 p-8 rounded-xl shadow-lg">
                        <h2 className="text-2xl font-bold text-center text-ocean-blue-800 mb-6">Send Us a Message</h2>
                        {isSubmitted ? (
                            <div className="text-center p-6 bg-green-100 rounded-lg" role="alert">
                                <ion-icon name="checkmark-circle-outline" class="text-5xl text-green-600 mb-2"></ion-icon>
                                <p className="font-semibold text-green-800 mt-2">Thank you! Your message has been sent successfully.</p>
                                <p className="text-sm text-green-700 mt-1">We'll get back to you as soon as possible.</p>
                            </div>
                        ) : (
                            <form onSubmit={handleSubmit} className="space-y-6" noValidate>
                                <div>
                                    <label htmlFor="name" className="block text-sm font-medium text-gray-700 mb-1">Full Name <span className="text-red-500" aria-label="required">*</span></label>
                                    <input 
                                        type="text" 
                                        name="name" 
                                        id="name" 
                                        required 
                                        value={formState.name} 
                                        onChange={handleInputChange} 
                                        className={`w-full p-3 border-2 rounded-lg focus:ring-ocean-blue-500 focus:border-ocean-blue-500 transition ${
                                            formErrors.name ? 'border-red-500' : 'border-gray-200'
                                        }`}
                                        aria-invalid={!!formErrors.name}
                                        aria-describedby={formErrors.name ? 'name-error' : undefined}
                                    />
                                    {formErrors.name && <p id="name-error" className="text-red-500 text-sm mt-1">{formErrors.name}</p>}
                                </div>
                                <div>
                                    <label htmlFor="email" className="block text-sm font-medium text-gray-700 mb-1">Email Address <span className="text-red-500" aria-label="required">*</span></label>
                                    <input 
                                        type="email" 
                                        name="email" 
                                        id="email" 
                                        required 
                                        value={formState.email} 
                                        onChange={handleInputChange} 
                                        className={`w-full p-3 border-2 rounded-lg focus:ring-ocean-blue-500 focus:border-ocean-blue-500 transition ${
                                            formErrors.email ? 'border-red-500' : 'border-gray-200'
                                        }`}
                                        aria-invalid={!!formErrors.email}
                                        aria-describedby={formErrors.email ? 'email-error' : undefined}
                                    />
                                    {formErrors.email && <p id="email-error" className="text-red-500 text-sm mt-1">{formErrors.email}</p>}
                                </div>
                                <div>
                                    <label htmlFor="subject" className="block text-sm font-medium text-gray-700 mb-1">Subject <span className="text-red-500" aria-label="required">*</span></label>
                                    <input 
                                        type="text" 
                                        name="subject" 
                                        id="subject" 
                                        required 
                                        value={formState.subject} 
                                        onChange={handleInputChange} 
                                        className={`w-full p-3 border-2 rounded-lg focus:ring-ocean-blue-500 focus:border-ocean-blue-500 transition ${
                                            formErrors.subject ? 'border-red-500' : 'border-gray-200'
                                        }`}
                                        aria-invalid={!!formErrors.subject}
                                        aria-describedby={formErrors.subject ? 'subject-error' : undefined}
                                    />
                                    {formErrors.subject && <p id="subject-error" className="text-red-500 text-sm mt-1">{formErrors.subject}</p>}
                                </div>
                                <div>
                                     <label htmlFor="message" className="block text-sm font-medium text-gray-700 mb-1">Message <span className="text-red-500" aria-label="required">*</span></label>
                                    <textarea 
                                        name="message" 
                                        id="message" 
                                        rows={5} 
                                        required 
                                        value={formState.message} 
                                        onChange={handleInputChange} 
                                        className={`w-full p-3 border-2 rounded-lg focus:ring-ocean-blue-500 focus:border-ocean-blue-500 transition ${
                                            formErrors.message ? 'border-red-500' : 'border-gray-200'
                                        }`}
                                        aria-invalid={!!formErrors.message}
                                        aria-describedby={formErrors.message ? 'message-error' : undefined}
                                    ></textarea>
                                    {formErrors.message && <p id="message-error" className="text-red-500 text-sm mt-1">{formErrors.message}</p>}
                                </div>
                                <Button className="w-full" size="lg" type="submit">
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