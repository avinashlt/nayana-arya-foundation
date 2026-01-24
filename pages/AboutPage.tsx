// Fix: Added a side-effect import to ensure custom element types are loaded.
import '../types';
import React from 'react';
import { TEAM_MEMBERS } from '../constants';
import Button from '../components/Button';
import { Page } from '../types';

interface AboutPageProps {
  onNavigate: (page: Page) => void;
}

const ValueCard: React.FC<{ icon: string; title: string; description: string }> = ({ icon, title, description }) => (
  <div className="text-center">
    <div className="flex items-center justify-center h-16 w-16 rounded-full bg-warm-amber-100 mx-auto mb-4">
        <ion-icon name={icon} class="text-3xl text-warm-amber-600"></ion-icon>
    </div>
    <h3 className="text-xl font-semibold text-ocean-blue-800">{title}</h3>
    <p className="mt-2 text-gray-600">{description}</p>
  </div>
);

const AboutPage: React.FC<AboutPageProps> = ({ onNavigate }) => {
  return (
    <div className="bg-white">
      {/* Our Story Section */}
      <section className="py-20">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div>
              <h1 className="text-4xl font-bold text-ocean-blue-800 tracking-tight">Our Story</h1>
              <div className="w-24 h-1 bg-warm-amber-500 mt-4 mb-6"></div>
              <p className="text-lg text-gray-600 mb-4">
                The Nayana Arya Foundation was born from a simple yet powerful idea: that every child, regardless of their physical abilities, deserves a chance to see the world in their own unique way. Our founder, Nayana Arya, witnessed the challenges faced by visually impaired children in her community and was moved to action.
              </p>
              <p className="text-lg text-gray-600">
                Starting with a small group of volunteers in a local community center in Bengaluru, we have grown into a recognized NGO, driven by the same passion that sparked our beginning. Our journey is one of compassion, resilience, and an unwavering belief in the potential of the children we serve.
              </p>
            </div>
            <div>
              <img src="https://images.unsplash.com/photo-1518152006812-edab29b069ac?q=80&w=800&auto=format&fit=crop" alt="Founder with children" className="rounded-lg shadow-2xl"/>
            </div>
          </div>
        </div>
      </section>

      {/* Our Team Section */}
      <section className="py-20 bg-gray-50">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-ocean-blue-800">Meet Our Team</h2>
            <p className="mt-2 text-lg text-gray-600 max-w-2xl mx-auto">The dedicated individuals turning our vision into reality.</p>
          </div>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
            {TEAM_MEMBERS.map((member) => (
              <div key={member.name} className="text-center bg-white p-6 rounded-lg shadow-lg">
                <img src={member.image} alt={member.name} className="w-32 h-32 rounded-full mx-auto mb-4 object-cover" />
                <h3 className="text-xl font-semibold text-ocean-blue-800">{member.name}</h3>
                <p className="text-warm-amber-600 font-medium">{member.role}</p>
                <p className="mt-2 text-gray-500 text-sm">{member.bio}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Our Values Section */}
      <section className="py-20 bg-white">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-ocean-blue-800">Our Core Values</h2>
            <p className="mt-2 text-lg text-gray-600">The principles that guide our work every day.</p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-12">
            <ValueCard icon="heart-outline" title="Compassion" description="We lead with empathy and a deep commitment to the well-being of every child." />
            <ValueCard icon="bulb-outline" title="Empowerment" description="We provide tools and knowledge to foster independence and self-confidence." />
            <ValueCard icon="shield-checkmark-outline" title="Integrity" description="We operate with transparency and accountability in all our endeavors." />
          </div>
        </div>
      </section>

      {/* Transparency Section */}
      <section className="py-20 bg-ocean-blue-50">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <ion-icon name="document-text-outline" class="text-6xl text-ocean-blue-600 mx-auto"></ion-icon>
          <h2 className="text-3xl font-bold text-ocean-blue-800 mt-4">Commitment to Transparency</h2>
          <p className="mt-4 text-lg text-gray-600 max-w-3xl mx-auto">We believe in open and honest communication with our supporters. Your trust is our most valuable asset. View our financial reports to see how your contributions are making a difference.</p>
          <div className="mt-8">
            <Button onClick={() => alert('Navigating to Annual Reports page!')} variant="secondary">
              View Annual Reports
            </Button>
          </div>
        </div>
      </section>
    </div>
  );
};

export default AboutPage;