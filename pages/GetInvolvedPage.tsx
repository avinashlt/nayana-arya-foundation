// Fix: Added a side-effect import to ensure custom element types are loaded.
import '../types';
import React from 'react';
import Button from '../components/Button';
import { VOLUNTEER_STORIES, CSR_INFO } from '../constants';
import { Page } from '../types';

interface GetInvolvedPageProps {
    onNavigate: (page: Page) => void;
    onContactAdmin: (subject: string) => void;
}

const OpportunityCard: React.FC<{ icon: string, title: string, description: string }> = ({ icon, title, description }) => (
    <div className="bg-white p-8 rounded-2xl shadow-soft text-center transition-all duration-300 hover:shadow-soft-lg hover:-translate-y-1 border border-cream-200">
        <div className="flex items-center justify-center h-16 w-16 rounded-full bg-ocean-blue-100 mx-auto mb-4">
            <ion-icon name={icon} class="text-3xl text-ocean-blue-600" aria-hidden="true"></ion-icon>
        </div>
        <h3 className="text-xl font-bold text-ocean-blue-800">{title}</h3>
        <p className="mt-2 text-neutral-600">{description}</p>
    </div>
);

const GetInvolvedPage: React.FC<GetInvolvedPageProps> = ({ onNavigate, onContactAdmin }) => {
    const scrollToCsr = () => {
        document.getElementById('csr')?.scrollIntoView({ behavior: 'smooth', block: 'start' });
    };

    return (
        <div className="bg-cream-50">
            {/* Hero Section */}
            <section className="relative bg-ocean-blue-800 text-white py-24 overflow-hidden">
                <div className="absolute -top-24 -right-24 w-96 h-96 rounded-full bg-ocean-blue-600/40 blur-3xl" aria-hidden="true"></div>
                <div className="absolute -bottom-24 -left-24 w-96 h-96 rounded-full bg-warm-amber-400/20 blur-3xl" aria-hidden="true"></div>
                <div className="relative container mx-auto px-4 sm:px-6 lg:px-8 text-center animate-fade-up">
                    <p className="text-sm font-semibold uppercase tracking-widest text-warm-amber-300">Get involved</p>
                    <h1 className="mt-3 text-4xl md:text-5xl font-extrabold leading-tight">There's a place for you here.</h1>
                    <p className="mt-5 text-lg md:text-xl max-w-3xl mx-auto text-ocean-blue-100">
                        Whether you have a Saturday morning, a professional skill, or a company behind you, there is a child in Bengaluru whose week will be brighter because you showed up.
                    </p>
                    <div className="mt-8 flex flex-col sm:flex-row gap-4 justify-center">
                        <Button onClick={() => onContactAdmin('Volunteer enquiry')} size="lg">Volunteer with us</Button>
                        <Button onClick={scrollToCsr} variant="outline" size="lg" className="border-white text-white hover:bg-white hover:text-ocean-blue-800 focus:ring-white">Partner as a company (CSR)</Button>
                    </div>
                </div>
            </section>

            {/* Volunteer Opportunities */}
            <section className="py-20">
                <div className="container mx-auto px-4 sm:px-6 lg:px-8">
                    <div className="text-center mb-12">
                        <h2 className="text-3xl font-bold text-ocean-blue-800">Ways to Volunteer</h2>
                        <p className="mt-2 text-lg text-neutral-600">Find a role that fits your skills and your schedule. No experience needed; we train you.</p>
                    </div>
                    <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                        <OpportunityCard icon="school-outline" title="Teaching & Mentoring" description="Read with a child, help with homework, or mentor a teenager exploring a career. Weekday evenings and weekends at our Murugeshpalaya centre." />
                        <OpportunityCard icon="walk-outline" title="Sighted Guide & Events" description="Be a guide on our nature walks, Metro trips and sports days, or help run festivals and fundraisers across Bengaluru." />
                        <OpportunityCard icon="code-slash-outline" title="Remote & Professional Skills" description="Design, writing, accessibility testing, audio description, social media or accounting; offer a few hours a month from wherever you are." />
                    </div>
                </div>
            </section>

            {/* Application Process */}
            <section className="py-20 bg-white">
                <div className="container mx-auto px-4 sm:px-6 lg:px-8">
                    <div className="text-center mb-12">
                        <h2 className="text-3xl font-bold text-ocean-blue-800">Getting Started is Simple</h2>
                        <p className="mt-2 text-lg text-neutral-600">Three small steps, and we'll be with you at every one of them.</p>
                    </div>
                    <div className="flex flex-col md:flex-row justify-center items-center space-y-8 md:space-y-0 md:space-x-12">
                        <div className="text-center max-w-xs">
                            <div className="text-3xl font-bold text-warm-amber-700 bg-warm-amber-100 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">1</div>
                            <h3 className="text-xl font-semibold text-ocean-blue-800">Say hello</h3>
                            <p className="text-neutral-600 mt-1">Send us a short message about yourself and what you'd enjoy doing.</p>
                        </div>
                        <div className="text-2xl text-cream-200 hidden md:block" aria-hidden="true">&rarr;</div>
                        <div className="text-center max-w-xs">
                            <div className="text-3xl font-bold text-warm-amber-700 bg-warm-amber-100 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">2</div>
                            <h3 className="text-xl font-semibold text-ocean-blue-800">Orientation</h3>
                            <p className="text-neutral-600 mt-1">A friendly two-hour session on how to guide, talk and work with visually impaired children.</p>
                        </div>
                        <div className="text-2xl text-cream-200 hidden md:block" aria-hidden="true">&rarr;</div>
                        <div className="text-center max-w-xs">
                            <div className="text-3xl font-bold text-warm-amber-700 bg-warm-amber-100 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">3</div>
                            <h3 className="text-xl font-semibold text-ocean-blue-800">Start making a difference</h3>
                            <p className="text-neutral-600 mt-1">Join a session, and watch what a few hours of your time can do.</p>
                        </div>
                    </div>
                    <div className="text-center mt-12">
                        <Button onClick={() => onContactAdmin('Volunteer enquiry')} size="lg">Apply to Volunteer</Button>
                    </div>
                </div>
            </section>

            {/* Volunteer Stories */}
            <section className="py-20">
                <div className="container mx-auto px-4 sm:px-6 lg:px-8">
                    <div className="text-center mb-12">
                        <h2 className="text-3xl font-bold text-ocean-blue-800">In Our Volunteers' Words</h2>
                        <p className="mt-2 text-lg text-neutral-600">Hear from the people who make our work possible.</p>
                    </div>
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-4xl mx-auto">
                        {VOLUNTEER_STORIES.map(story => (
                            <figure key={story.name} className="bg-white p-8 rounded-2xl shadow-soft border border-cream-200 flex flex-col sm:flex-row items-center space-y-4 sm:space-y-0 sm:space-x-6">
                                <img src={story.image} alt={story.name} className="w-24 h-24 rounded-full object-cover flex-shrink-0 ring-4 ring-warm-amber-100" />
                                <div>
                                    <blockquote className="text-lg text-neutral-700 italic leading-relaxed">"{story.quote}"</blockquote>
                                    <figcaption className="text-right mt-4 font-bold text-ocean-blue-700">— {story.name}</figcaption>
                                </div>
                            </figure>
                        ))}
                    </div>
                </div>
            </section>

            {/* CSR Section */}
            <section id="csr" className="py-24 bg-white scroll-mt-24" aria-labelledby="csr-heading">
                <div className="container mx-auto px-4 sm:px-6 lg:px-8">
                    <div className="text-center max-w-3xl mx-auto mb-14">
                        <p className="text-sm font-semibold uppercase tracking-widest text-primary-red-600">Corporate Social Responsibility</p>
                        <h2 id="csr-heading" className="mt-3 text-3xl md:text-4xl font-extrabold text-ocean-blue-800">Partner With Us Through CSR</h2>
                        <p className="mt-4 text-lg text-neutral-600">
                            Under Section 135 of the Companies Act, 2013, eligible companies invest at least 2% of average net profits in CSR. We help Bengaluru companies turn that obligation into measurable, visible change in the lives of visually impaired children, right here in the city where your teams live and work.
                        </p>
                    </div>

                    {/* Focus areas */}
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-16">
                        {CSR_INFO.focusAreas.map(area => (
                            <div key={area.title} className="bg-cream-50 rounded-2xl p-7 border border-cream-200 hover:shadow-soft transition-shadow">
                                <div className="flex items-start gap-4">
                                    <div className="flex-shrink-0 w-12 h-12 rounded-full bg-warm-amber-100 flex items-center justify-center">
                                        <ion-icon name={area.icon} class="text-2xl text-warm-amber-700" aria-hidden="true"></ion-icon>
                                    </div>
                                    <div>
                                        <h3 className="text-xl font-bold text-ocean-blue-800">{area.title}</h3>
                                        <p className="mt-2 text-neutral-600">{area.description}</p>
                                        <p className="mt-3 text-xs font-semibold text-ocean-blue-700 bg-ocean-blue-50 inline-block px-3 py-1 rounded-full">{area.scheduleVII}</p>
                                    </div>
                                </div>
                            </div>
                        ))}
                    </div>

                    <div className="grid grid-cols-1 lg:grid-cols-5 gap-10 items-start">
                        {/* How it works */}
                        <div className="lg:col-span-3">
                            <h3 className="text-2xl font-bold text-ocean-blue-800 mb-6">How a CSR partnership works</h3>
                            <ol className="space-y-5">
                                {CSR_INFO.howItWorks.map((item, idx) => (
                                    <li key={item.step} className="flex gap-4">
                                        <div className="flex-shrink-0 w-10 h-10 rounded-full bg-ocean-blue-600 text-white font-bold flex items-center justify-center">{idx + 1}</div>
                                        <div>
                                            <p className="font-semibold text-ocean-blue-800">{item.step}</p>
                                            <p className="text-neutral-600 mt-1">{item.text}</p>
                                        </div>
                                    </li>
                                ))}
                            </ol>

                            <h3 className="text-2xl font-bold text-ocean-blue-800 mt-12 mb-4">What you can count on</h3>
                            <ul className="space-y-3">
                                {CSR_INFO.assurances.map(item => (
                                    <li key={item} className="flex items-start gap-3 text-neutral-700">
                                        <ion-icon name="checkmark-circle" class="text-xl text-green-600 flex-shrink-0 mt-0.5" aria-hidden="true"></ion-icon>
                                        <span>{item}</span>
                                    </li>
                                ))}
                            </ul>
                        </div>

                        {/* Contact admin card */}
                        <aside className="lg:col-span-2 bg-ocean-blue-800 text-white rounded-3xl p-8 shadow-soft-lg lg:sticky lg:top-28">
                            <div className="w-14 h-14 rounded-full bg-warm-amber-400 flex items-center justify-center mb-5">
                                <ion-icon name="chatbubbles-outline" class="text-3xl text-ocean-blue-900" aria-hidden="true"></ion-icon>
                            </div>
                            <h3 className="text-2xl font-bold">Contact our admin team for more details</h3>
                            <p className="mt-3 text-ocean-blue-100">
                                We'll share our CSR deck, registration certificates, sample proposals and past partner reports, and set up a visit to our centre so you can meet the children your support will reach.
                            </p>
                            <ul className="mt-6 space-y-4 text-ocean-blue-50">
                                <li className="flex items-start gap-3">
                                    <ion-icon name="mail-outline" class="text-xl mt-0.5 text-warm-amber-300" aria-hidden="true"></ion-icon>
                                    <a href={`mailto:${CSR_INFO.contactEmail}?subject=${encodeURIComponent('CSR partnership enquiry')}`} className="underline underline-offset-4 decoration-ocean-blue-400 hover:decoration-white break-all">{CSR_INFO.contactEmail}</a>
                                </li>
                                <li className="flex items-start gap-3">
                                    <ion-icon name="call-outline" class="text-xl mt-0.5 text-warm-amber-300" aria-hidden="true"></ion-icon>
                                    <a href={CSR_INFO.contactPhoneHref} className="underline underline-offset-4 decoration-ocean-blue-400 hover:decoration-white">{CSR_INFO.contactPhone}</a>
                                </li>
                                <li className="flex items-start gap-3">
                                    <ion-icon name="location-outline" class="text-xl mt-0.5 text-warm-amber-300" aria-hidden="true"></ion-icon>
                                    <span>{CSR_INFO.address}</span>
                                </li>
                                <li className="flex items-start gap-3">
                                    <ion-icon name="time-outline" class="text-xl mt-0.5 text-warm-amber-300" aria-hidden="true"></ion-icon>
                                    <span>Mon to Sat, 9:30 am to 6:00 pm IST. We reply to CSR enquiries within two working days.</span>
                                </li>
                            </ul>
                            <div className="mt-8 flex flex-col gap-3">
                                <Button onClick={() => onContactAdmin('CSR partnership enquiry')} size="lg" className="w-full">Send a CSR enquiry</Button>
                                <button
                                    onClick={() => onNavigate(Page.Donate)}
                                    className="text-sm text-ocean-blue-100 hover:text-white underline underline-offset-4 focus:outline-none focus:ring-2 focus:ring-white rounded"
                                >
                                    Prefer to make a one-time corporate donation? See bank details &rarr;
                                </button>
                            </div>
                        </aside>
                    </div>
                </div>
            </section>

            {/* Other Ways to Help */}
            <section className="py-20">
                <div className="container mx-auto px-4 sm:px-6 lg:px-8 text-center">
                    <h2 className="text-3xl font-bold text-ocean-blue-800">More Ways to Stand With Us</h2>
                    <p className="mt-4 text-lg text-neutral-600 max-w-3xl mx-auto">
                        Start a birthday fundraiser, sponsor a child's education for a year, donate equipment, or simply share our stories with people who care. Every gesture reaches a child.
                    </p>
                    <div className="mt-8 flex flex-col sm:flex-row gap-4 justify-center">
                        <Button onClick={() => onNavigate(Page.Donate)}>Make a donation</Button>
                        <Button onClick={() => onContactAdmin('I have an idea to help')} variant="secondary">Share an idea with us</Button>
                    </div>
                </div>
            </section>
        </div>
    );
};

export default GetInvolvedPage;
