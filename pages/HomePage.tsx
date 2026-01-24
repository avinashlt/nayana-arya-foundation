// Fix: Added a side-effect import to ensure custom element types are loaded.
import '../types';
import React from 'react';
import { Page } from '../types';
import Button from '../components/Button';
import { BLOG_POSTS } from '../constants';

interface HomePageProps {
  onNavigate: (page: Page) => void;
}

const ImpactCard: React.FC<{ icon: string; value: string; label: string }> = ({ icon, value, label }) => (
    <div className="text-center p-6 bg-white rounded-lg shadow-lg">
        <div className="flex items-center justify-center h-16 w-16 rounded-full bg-ocean-blue-100 mx-auto mb-4">
            <ion-icon name={icon} class="text-3xl text-ocean-blue-600"></ion-icon>
        </div>
        <h3 className="text-4xl font-bold text-ocean-blue-800">{value}</h3>
        <p className="mt-2 text-gray-600">{label}</p>
    </div>
);


const HomePage: React.FC<HomePageProps> = ({ onNavigate }) => {
  return (
    <div>
      {/* Hero Section */}
      <section className="bg-ocean-blue-50 py-24 sm:py-32">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h1 className="text-4xl md:text-6xl font-extrabold tracking-tight leading-tight text-ocean-blue-900">Creating Vision for the Children</h1>
          <p className="mt-4 text-lg md:text-xl max-w-3xl mx-auto text-ocean-blue-700">Empowering visually impaired children through education, technology, and compassionate care.</p>
          <div className="mt-8">
            <Button onClick={() => onNavigate(Page.Donate)} size="lg">Donate Now</Button>
          </div>
        </div>
      </section>

      {/* Mission Statement */}
      <section className="py-20 bg-white">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl font-bold text-ocean-blue-800">Our Mission</h2>
          <div className="w-24 h-1 bg-warm-amber-500 mx-auto mt-4 mb-6"></div>
          <p className="mt-4 text-lg text-gray-600 max-w-3xl mx-auto">
            Our core purpose is to unlock the potential of every visually impaired child. We provide comprehensive education, foster independence, and create an inclusive world where they can thrive and achieve their dreams. We stand apart by focusing on personalized care and long-term empowerment.
          </p>
        </div>
      </section>
      
      {/* Impact Section */}
      <section className="py-20 bg-gray-50">
          <div className="container mx-auto px-4 sm:px-6 lg:px-8">
              <div className="text-center mb-12">
                  <h2 className="text-3xl font-bold text-ocean-blue-800">Our Impact</h2>
                   <p className="mt-2 text-lg text-gray-600">Your support changes lives. Here's a glimpse of what we've achieved together.</p>
              </div>
              <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                  <ImpactCard icon="school-outline" value="100's" label="Of blind children educated" />
                  <ImpactCard icon="people-outline" value="50+" label="Dedicated volunteers" />
                  <ImpactCard icon="home-outline" value="15" label="Community centers established" />
              </div>
          </div>
      </section>


      {/* Get Involved Section */}
      <section className="py-20 bg-ocean-blue-700 text-white">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl font-bold">You Can Make a Difference</h2>
          <p className="mt-4 text-lg max-w-2xl mx-auto text-ocean-blue-100">Join our cause and help us create a brighter future for these children. Your contribution, big or small, has a lasting impact.</p>
          <div className="mt-8 flex flex-col sm:flex-row justify-center items-center gap-4">
            <Button onClick={() => onNavigate(Page.Donate)} variant="primary" size="lg">Donate</Button>
            <Button onClick={() => onNavigate(Page.GetInvolved)} variant="outline" size="lg" className="border-white text-white hover:bg-white hover:text-ocean-blue-700 focus:ring-white">Volunteer</Button>
            <a href="#" onClick={(e) => { e.preventDefault(); onNavigate(Page.About); }} className="text-warm-amber-400 hover:text-warm-amber-300 font-semibold text-lg">Learn More &rarr;</a>
          </div>
        </div>
      </section>

      {/* Latest News Section */}
      <section className="py-20 bg-white">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-ocean-blue-800">Latest News & Stories</h2>
            <p className="mt-2 text-lg text-gray-600">Stay updated with our recent activities and milestones.</p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {BLOG_POSTS.map((post, index) => (
              <div key={index} className="bg-white rounded-lg shadow-lg overflow-hidden group">
                <img src={post.image} alt={post.title} className="w-full h-48 object-cover group-hover:scale-105 transition-transform duration-300"/>
                <div className="p-6">
                  <p className="text-sm text-gray-500 mb-2">{post.date}</p>
                  <h3 className="text-xl font-semibold text-ocean-blue-800 mb-2">{post.title}</h3>
                  <p className="text-gray-600 mb-4">{post.excerpt}</p>
                  <a href="#" className="font-semibold text-ocean-blue-600 hover:text-ocean-blue-800 transition duration-300">Read More &rarr;</a>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
};

export default HomePage;