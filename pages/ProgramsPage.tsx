// Fix: Added a side-effect import to ensure custom element types are loaded.
import '../types';
import React from 'react';
import { PROGRAMS } from '../constants';

const ProgramCard: React.FC<{ program: typeof PROGRAMS[0], index: number }> = ({ program, index }) => {
  const isReversed = index % 2 !== 0;
  return (
    <div className="bg-white rounded-xl shadow-lg overflow-hidden transition-shadow hover:shadow-2xl">
      <div className={`grid grid-cols-1 lg:grid-cols-2 items-center gap-8`}>
        <div className={`order-2 lg:order-${isReversed ? '2' : '1'}`}>
          <img src={program.image} alt={program.title} className="w-full h-80 object-cover"/>
        </div>
        <div className={`p-8 lg:p-12 order-1 lg:order-${isReversed ? '1' : '2'}`}>
          <div className="flex items-center space-x-4 mb-4">
            <div className="flex-shrink-0 bg-ocean-blue-100 p-3 rounded-full">
              <ion-icon name={program.icon} class="text-3xl text-ocean-blue-600"></ion-icon>
            </div>
            <h2 className="text-3xl font-bold text-ocean-blue-800">{program.title}</h2>
          </div>
          <p className="text-gray-600 text-lg mb-6">{program.description}</p>
          <div className="bg-warm-amber-50 p-4 rounded-lg border-l-4 border-warm-amber-400">
            <h4 className="font-semibold text-warm-amber-800">Program Impact</h4>
            <p className="text-warm-amber-700 mt-1">{program.impact}</p>
          </div>
        </div>
      </div>
    </div>
  );
};

const ProgramsPage: React.FC = () => {
  return (
    <div className="bg-gray-50 py-20">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h1 className="text-4xl font-extrabold text-ocean-blue-800 tracking-tight">Our Programs</h1>
          <p className="mt-4 text-xl text-gray-600 max-w-3xl mx-auto">
            We offer a range of specialized programs designed to educate, empower, and inspire.
          </p>
        </div>

        <div className="space-y-16">
          {PROGRAMS.map((program, index) => (
            <ProgramCard key={program.title} program={program} index={index} />
          ))}
        </div>

        <section className="mt-24 text-center">
            <h2 className="text-3xl font-bold text-ocean-blue-800">See Our Work in Action</h2>
            <p className="mt-2 text-lg text-gray-600">Photos of our dedicated volunteers and happy children.</p>
            <div className="mt-8 grid grid-cols-2 md:grid-cols-4 gap-4">
                <img src="https://images.unsplash.com/photo-1594608661623-aa0bd3a69d98?q=80&w=500&auto=format&fit=crop" alt="Indian volunteers working with children" className="rounded-lg shadow-md aspect-square object-cover"/>
                <img src="https://images.unsplash.com/photo-1497375638960-ca368c7231e4?q=80&w=500&auto=format&fit=crop" alt="Indian child in classroom" className="rounded-lg shadow-md aspect-square object-cover"/>
                <img src="https://images.unsplash.com/photo-1542810634-71277d95dcbb?q=80&w=500&auto=format&fit=crop" alt="Indian children group activity" className="rounded-lg shadow-md aspect-square object-cover"/>
                <img src="https://images.unsplash.com/photo-1488521787991-ed67d2f0cbae?q=80&w=500&auto=format&fit=crop" alt="Indian child smiling" className="rounded-lg shadow-md aspect-square object-cover"/>
            </div>
        </section>
      </div>
    </div>
  );
};

export default ProgramsPage;