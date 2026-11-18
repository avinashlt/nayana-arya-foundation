// Fix: Added a side-effect import to ensure custom element types are loaded.
import '../types';
import React, { useState, useEffect } from 'react';
import Button from '../components/Button';
import { CSR_INFO } from '../constants';

interface ContactPageProps {
    /** Optional subject to pre-fill (e.g. "CSR partnership enquiry"). */
    initialSubject?: string;
    onSubjectConsumed?: () => void;
}

const ContactInfoItem: React.FC<{ icon: string; title: string; children: React.ReactNode }> = ({ icon, title, children }) => (
    <div className="flex items-start space-x-4">
        <div className="flex-shrink-0 w-12 h-12 bg-ocean-blue-100 rounded-full flex items-center justify-center">
            <ion-icon name={icon} class="text-2xl text-ocean-blue-600" aria-hidden="true"></ion-icon>
        </div>
        <div>
            <h3 className="text-lg font-semibold text-ocean-blue-800">{title}</h3>
            <p className="text-neutral-600">{children}</p>
        </div>
    </div>
);

const SUBJECT_OPTIONS = [
    'General question',
    'I am a parent looking for support',
    'Volunteer enquiry',
    'CSR partnership enquiry',
    'Donation or receipt query',
    'Media or event enquiry',
    'I have an idea to help',
];

const ContactPage: React.FC<ContactPageProps> = ({ initialSubject = '', onSubjectConsumed }) => {
    const [formState, setFormState] = useState({ name: '', email: '', organisation: '', subject: initialSubject, message: '' });
    const [isSubmitted, setIsSubmitted] = useState(false);
    const [formErrors, setFormErrors] = useState<Record<string, string>>({});

    useEffect(() => {
        if (initialSubject) {
            setFormState(prev => ({ ...prev, subject: initialSubject }));
            onSubjectConsumed?.();
        }
        // eslint-disable-next-line react-hooks/exhaustive-deps
    }, [initialSubject]);

    const isCsrEnquiry = formState.subject === 'CSR partnership enquiry';

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

    const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
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
        setFormState({ name: '', email: '', organisation: '', subject: '', message: '' });

        // Reset after 5 seconds
        setTimeout(() => setIsSubmitted(false), 5000);
    };

    return (
        <div className="bg-cream-50 py-20">
            <div className="container mx-auto px-4 sm:px-6 lg:px-8">
                <div className="text-center mb-16 animate-fade-up">
                    <p className="text-sm font-semibold uppercase tracking-widest text-primary-red-600">We're listening</p>
                    <h1 className="mt-3 text-4xl md:text-5xl font-extrabold text-ocean-blue-800 tracking-tight">Get In Touch</h1>
                    <p className="mt-4 text-xl text-neutral-600 max-w-3xl mx-auto">
                        A question, a worry about your child, an idea, or a partnership: whatever brings you here, a real person on our team will read your message and reply.
                    </p>
                </div>

                <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-start">
                    {/* Left Column: Contact Info */}
                    <div className="space-y-8">
                        <ContactInfoItem icon="location-outline" title="Visit Us">
                            {CSR_INFO.address}
                            <span className="block text-sm text-neutral-500 mt-1">Mon to Sat, 9:30 am to 6:00 pm. Families are welcome to drop in; a call ahead helps us give you our full attention.</span>
                        </ContactInfoItem>
                        <ContactInfoItem icon="mail-outline" title="Email Us">
                            <a href={`mailto:${CSR_INFO.contactEmail}`} className="text-ocean-blue-600 hover:text-ocean-blue-800 underline underline-offset-4">{CSR_INFO.contactEmail}</a>
                        </ContactInfoItem>
                        <ContactInfoItem icon="call-outline" title="Call Us">
                            <a href={CSR_INFO.contactPhoneHref} className="text-ocean-blue-600 hover:text-ocean-blue-800 underline underline-offset-4">{CSR_INFO.contactPhone}</a>
                        </ContactInfoItem>

                        {/* CSR / Partnerships admin card */}
                        <div className="bg-white rounded-2xl p-6 border-l-4 border-warm-amber-400 shadow-soft">
                            <div className="flex items-center gap-3 mb-3">
                                <ion-icon name="business-outline" class="text-2xl text-warm-amber-700" aria-hidden="true"></ion-icon>
                                <h3 className="text-lg font-bold text-ocean-blue-800">CSR &amp; Corporate Partnerships</h3>
                            </div>
                            <p className="text-neutral-600">
                                Companies planning CSR spends under Section 135 of the Companies Act can contact our admin team directly. We'll share our CSR deck, 12A/80G and CSR-1 details, programme proposals, budgets and past partner reports, and arrange a visit to our centre.
                            </p>
                            <ul className="mt-4 space-y-2 text-sm text-neutral-700">
                                <li className="flex items-center gap-2">
                                    <ion-icon name="mail-outline" class="text-ocean-blue-600" aria-hidden="true"></ion-icon>
                                    <a href={`mailto:${CSR_INFO.contactEmail}?subject=${encodeURIComponent('CSR partnership enquiry')}`} className="text-ocean-blue-700 underline underline-offset-4">{CSR_INFO.contactEmail}</a>
                                    <span className="text-neutral-400">(subject: CSR partnership enquiry)</span>
                                </li>
                                <li className="flex items-center gap-2">
                                    <ion-icon name="call-outline" class="text-ocean-blue-600" aria-hidden="true"></ion-icon>
                                    <a href={CSR_INFO.contactPhoneHref} className="text-ocean-blue-700 underline underline-offset-4">{CSR_INFO.contactPhone}</a>
                                    <span className="text-neutral-400">(ask for the admin team)</span>
                                </li>
                            </ul>
                            <button
                                type="button"
                                onClick={() => setFormState(prev => ({ ...prev, subject: 'CSR partnership enquiry' }))}
                                className="mt-4 text-sm font-semibold text-primary-red-600 hover:text-primary-red-700 focus:outline-none focus:ring-2 focus:ring-primary-red-400 rounded"
                            >
                                Use the form for a CSR enquiry &rarr;
                            </button>
                        </div>

                        <div className="pt-2">
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
                    <div className="bg-white p-8 rounded-3xl shadow-soft-lg border border-cream-200">
                        <h2 className="text-2xl font-bold text-center text-ocean-blue-800 mb-2">Send Us a Message</h2>
                        <p className="text-center text-sm text-neutral-500 mb-6">We usually reply within two working days.</p>
                        {isSubmitted ? (
                            <div className="text-center p-6 bg-green-50 rounded-2xl border border-green-100" role="alert">
                                <ion-icon name="heart-circle-outline" class="text-5xl text-green-600 mb-2" aria-hidden="true"></ion-icon>
                                <p className="font-semibold text-green-800 mt-2">Thank you for reaching out.</p>
                                <p className="text-sm text-green-700 mt-1">Your message is with our admin team. We'll be in touch soon.</p>
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
                                    <label htmlFor="subject" className="block text-sm font-medium text-gray-700 mb-1">What is this about? <span className="text-red-500" aria-label="required">*</span></label>
                                    <select
                                        name="subject"
                                        id="subject"
                                        required
                                        value={formState.subject}
                                        onChange={handleInputChange}
                                        className={`w-full p-3 border-2 rounded-lg bg-white focus:ring-ocean-blue-500 focus:border-ocean-blue-500 transition ${
                                            formErrors.subject ? 'border-red-500' : 'border-gray-200'
                                        }`}
                                        aria-invalid={!!formErrors.subject}
                                        aria-describedby={formErrors.subject ? 'subject-error' : undefined}
                                    >
                                        <option value="">Please choose…</option>
                                        {SUBJECT_OPTIONS.map(option => (
                                            <option key={option} value={option}>{option}</option>
                                        ))}
                                    </select>
                                    {formErrors.subject && <p id="subject-error" className="text-red-500 text-sm mt-1">{formErrors.subject}</p>}
                                </div>
                                {isCsrEnquiry && (
                                    <div className="animate-fade-up">
                                        <label htmlFor="organisation" className="block text-sm font-medium text-gray-700 mb-1">Company / Organisation</label>
                                        <input
                                            type="text"
                                            name="organisation"
                                            id="organisation"
                                            value={formState.organisation}
                                            onChange={handleInputChange}
                                            placeholder="e.g. Acme Technologies Pvt. Ltd."
                                            className="w-full p-3 border-2 border-gray-200 rounded-lg focus:ring-ocean-blue-500 focus:border-ocean-blue-500 transition"
                                        />
                                        <p className="text-xs text-neutral-500 mt-2">
                                            Helpful to include in your message: your CSR focus areas, approximate budget window, preferred timeline, and whether you'd like employee volunteering.
                                        </p>
                                    </div>
                                )}
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