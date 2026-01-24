// Fix: Added a side-effect import to ensure custom element types are loaded.
import '../types';
import React from 'react';
import Button from '../components/Button';
import { VOLUNTEER_STORIES } from '../constants';

const OpportunityCard: React.FC<{ icon: string, title: string, description: string }> = ({ icon, title, description }) => (
    <div className="bg-white p-8 rounded-lg shadow-lg text-center transition hover:shadow-xl hover:-translate-y-1">
        <div className="flex items-center justify-center h-16 w-16 rounded-full bg-ocean-blue-100 mx-auto mb-4">
            <ion-icon name={icon} class="text-3xl text-ocean-blue-600"></ion-icon>
        </div>
        <h3 className="text-xl font-bold text-ocean-blue-800">{title}</h3>
        <p className="mt-2 text-gray-600">{description}</p>
    </div>
);

const GetInvolvedPage: React.FC = () => {
    return (
        <div>
            {/* Hero Section */}
            <section className="bg-ocean-blue-700 text-white py-20">
                <div className="container mx-auto px-4 sm:px-6 lg:px-8 text-center">
                    <h1 className="text-4xl md:text-5xl font-extrabold">Join Our Movement</h1>
                    <p className="mt-4 text-lg md:text-xl max-w-3xl mx-auto text-ocean-blue-100">
                        Your time, skills, and passion can create a world of difference. Discover the many ways you can contribute to our cause.
                    </p>
                </div>
            </section>

            {/* Volunteer Opportunities */}
            <section className="py-20 bg-gray-50">
                <div className="container mx-auto px-4 sm:px-6 lg:px-8">
                    <div className="text-center mb-12">
                        <h2 className="text-3xl font-bold text-ocean-blue-800">Volunteer Opportunities</h2>
                        <p className="mt-2 text-lg text-gray-600">Find a role that fits your skills and schedule.</p>
                    </div>
                    <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                        <OpportunityCard icon="school-outline" title="Teaching & Mentoring" description="Work directly with children, assisting with lessons, reading, and skill development." />
                        <OpportunityCard icon="calendar-outline" title="Event Support" description="Help us organize and run fundraising galas, community workshops, and awareness campaigns." />
                        <OpportunityCard icon="code-slash-outline" title="Remote Skills" description="Offer your professional skills in areas like graphic design, content writing, or social media management." />
                    </div>
                </div>
            </section>

            {/* Application Process */}
            <section className="py-20 bg-white">
                <div className="container mx-auto px-4 sm:px-6 lg:px-8">
                    <div className="text-center mb-12">
                        <h2 className="text-3xl font-bold text-ocean-blue-800">Our Simple Sign-Up Process</h2>
                        <p className="mt-2 text-lg text-gray-600">Becoming a volunteer is easy. Here's how:</p>
                    </div>
                    <div className="flex flex-col md:flex-row justify-center items-center space-y-8 md:space-y-0 md:space-x-12">
                        <div className="text-center max-w-xs">
                            <div className="text-4xl font-bold text-warm-amber-500 bg-warm-amber-100 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">1</div>
                            <h3 className="text-xl font-semibold text-ocean-blue-800">Apply Online</h3>
                            <p className="text-gray-600 mt-1">Fill out our simple online form to tell us about yourself and your interests.</p>
                        </div>
                        <div className="text-2xl text-gray-300 hidden md:block">&rarr;</div>
                        <div className="text-center max-w-xs">
                           <div className="text-4xl font-bold text-warm-amber-500 bg-warm-amber-100 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">2</div>
                            <h3 className="text-xl font-semibold text-ocean-blue-800">Orientation</h3>
                            <p className="text-gray-600 mt-1">Attend a brief orientation session to learn about our mission and your role.</p>
                        </div>
                         <div className="text-2xl text-gray-300 hidden md:block">&rarr;</div>
                        <div className="text-center max-w-xs">
                            <div className="text-4xl font-bold text-warm-amber-500 bg-warm-amber-100 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">3</div>
                            <h3 className="text-xl font-semibold text-ocean-blue-800">Start Making a Difference</h3>
                            <p className="text-gray-600 mt-1">Join our team and begin your rewarding journey with us.</p>
                        </div>
                    </div>
                     <div className="text-center mt-12">
                        <Button onClick={() => alert('Navigating to volunteer application form!')} size="lg">Apply to Volunteer</Button>
                    </div>
                </div>
            </section>

            {/* Volunteer Stories */}
             <section className="py-20 bg-gray-50">
                <div className="container mx-auto px-4 sm:px-6 lg:px-8">
                    <div className="text-center mb-12">
                        <h2 className="text-3xl font-bold text-ocean-blue-800">Stories from Our Volunteers</h2>
                         <p className="mt-2 text-lg text-gray-600">Hear from the people who make our work possible.</p>
                    </div>
                     <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-4xl mx-auto">
                        {VOLUNTEER_STORIES.map(story => (
                            <div key={story.name} className="bg-white p-8 rounded-lg shadow-lg flex flex-col sm:flex-row items-center space-y-4 sm:space-y-0 sm:space-x-6">
                                <img src={story.image} alt={story.name} className="w-24 h-24 rounded-full object-cover flex-shrink-0" />
                                <div>
                                    <p className="text-lg text-gray-700 italic">"{story.quote}"</p>
                                    <p className="text-right mt-4 font-bold text-ocean-blue-700">- {story.name}</p>
                                </div>
                            </div>
                        ))}
                    </div>
                </div>
            </section>

            {/* Other Ways to Help */}
             <section className="py-20 bg-white">
                <div className="container mx-auto px-4 sm:px-6 lg:px-8 text-center">
                    <h2 className="text-3xl font-bold text-ocean-blue-800">More Ways to Support Us</h2>
                    <p className="mt-4 text-lg text-gray-600 max-w-3xl mx-auto">
                        There are numerous ways to contribute beyond volunteering. Consider a corporate partnership, starting a fundraiser, or spreading the word on social media.
                    </p>
                    <div className="mt-8">
                        <Button onClick={() => alert('Navigating to contact page for partnerships!')} variant="secondary">Partner With Us</Button>
                    </div>
                </div>
            </section>
        </div>
    );
};

export default GetInvolvedPage;