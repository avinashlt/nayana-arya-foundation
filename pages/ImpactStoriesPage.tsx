import '../types';
import React, { useState } from 'react';

interface Story {
  id: number;
  title: string;
  excerpt: string;
  fullStory: string;
  category: 'education' | 'technology' | 'health' | 'community';
  image: string;
  author: string;
  date: string;
  impact: string;
}

const IMPACT_STORIES: Story[] = [
  {
    id: 1,
    title: 'From Darkness to Dreamland: Ravi\'s Journey to Tech',
    excerpt: 'How a visually impaired teenager discovered his passion for coding and now mentors others.',
    fullStory: 'Ravi was born with severe visual impairment, but that never stopped his curiosity. Thanks to our Technology & Accessibility Training program, he learned screen readers and programming languages. Today, at just 19, he\'s working as a junior developer and mentoring younger students.',
    category: 'technology',
    image: 'https://images.unsplash.com/photo-1517694712202-14dd9538aa97?q=80&w=600&auto=format&fit=crop',
    author: 'Nayana Arya',
    date: 'December 2024',
    impact: 'Ravi is now self-employed and has helped 10+ children learn technology skills.'
  },
  {
    id: 2,
    title: 'Maya\'s Transformation: From Isolation to Independence',
    excerpt: 'A young girl learns to navigate her world with confidence through our holistic education program.',
    fullStory: 'Maya came to us at age 8, isolated and withdrawn. Through our Early Intervention & Education program, she learned Braille, life skills, and gained the confidence to interact with her peers. Now she\'s a bright student in a mainstream school.',
    category: 'education',
    image: 'https://images.unsplash.com/photo-1427504494785-cdaf8fcd84e1?q=80&w=600&auto=format&fit=crop',
    author: 'Rohan Verma',
    date: 'November 2024',
    impact: 'Maya is now thriving in mainstream education and helping other visually impaired children.'
  },
  {
    id: 3,
    title: 'Rural Outreach Success: 50 Children Enrolled',
    excerpt: 'How our rural outreach centers are bringing education to underserved communities.',
    fullStory: 'In remote villages where there was no access to education for blind children, our outreach camps changed everything. We trained local teachers and established community centers. The first batch of 50 children is now receiving consistent education.',
    category: 'community',
    image: 'https://images.unsplash.com/photo-1511314314988-a01aaad47c48?q=80&w=600&auto=format&fit=crop',
    author: 'Priya Singh',
    date: 'October 2024',
    impact: '50 rural children now have access to quality education programs.'
  },
  {
    id: 4,
    title: 'Health Initiative: Comprehensive Eye Care for 200 Children',
    excerpt: 'Our partnership with hospitals ensures every child receives regular health check-ups.',
    fullStory: 'We conducted comprehensive health camps in partnership with leading hospitals. 200 children received eye examinations, health consultations, and referrals for advanced treatments. Early detection helped prevent further vision loss in 15 cases.',
    category: 'health',
    image: 'https://images.unsplash.com/photo-1631217314830-f6f582b4ce21?q=80&w=600&auto=format&fit=crop',
    author: 'Anil Kumar',
    date: 'September 2024',
    impact: '200 children received comprehensive health check-ups and necessary treatments.'
  },
];

const STATISTICS = [
  { label: 'Children Impacted', value: '500+', icon: 'people-outline' },
  { label: 'Active Volunteers', value: '150+', icon: 'heart-outline' },
  { label: 'Communities Served', value: '25+', icon: 'map-outline' },
  { label: 'Success Stories', value: '100+', icon: 'star-outline' },
];

interface ImpactStoryCardProps {
  story: Story;
  onClick: (story: Story) => void;
}

const ImpactStoryCard: React.FC<ImpactStoryCardProps> = ({ story, onClick }) => {
  const categoryColors: Record<string, string> = {
    education: 'bg-blue-100 text-blue-800',
    technology: 'bg-purple-100 text-purple-800',
    health: 'bg-red-100 text-red-800',
    community: 'bg-green-100 text-green-800',
  };

  return (
    <article 
      className="bg-white rounded-lg shadow-lg overflow-hidden hover:shadow-xl transition-shadow cursor-pointer group"
      onClick={() => onClick(story)}
      role="button"
      tabIndex={0}
      onKeyDown={(e) => {
        if (e.key === 'Enter' || e.key === ' ') {
          onClick(story);
        }
      }}
      aria-label={`Story: ${story.title}`}
    >
      <div className="relative overflow-hidden h-48">
        <img 
          src={story.image} 
          alt={story.title} 
          className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
        />
        <span className={`absolute top-4 left-4 px-3 py-1 rounded-full text-sm font-semibold ${categoryColors[story.category]} capitalize`}>
          {story.category}
        </span>
      </div>
      <div className="p-6">
        <h3 className="text-xl font-bold text-ocean-blue-800 mb-2 group-hover:text-ocean-blue-600">{story.title}</h3>
        <p className="text-gray-600 mb-4">{story.excerpt}</p>
        <div className="flex items-center justify-between text-sm text-gray-500">
          <span>{story.author}</span>
          <span>{story.date}</span>
        </div>
        <p className="mt-4 text-sm font-semibold text-warm-amber-600 flex items-center">
          <ion-icon name="leaf-outline" className="mr-2"></ion-icon>
          Impact: {story.impact}
        </p>
      </div>
    </article>
  );
};

const ImpactStoriesPage: React.FC = () => {
  const [selectedStory, setSelectedStory] = useState<Story | null>(null);
  const [selectedCategory, setSelectedCategory] = useState<string | null>(null);

  const filteredStories = selectedCategory
    ? IMPACT_STORIES.filter(story => story.category === selectedCategory)
    : IMPACT_STORIES;

  const categories = ['education', 'technology', 'health', 'community'];

  return (
    <div className="bg-white py-20">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <section className="text-center mb-16">
          <h1 className="text-4xl font-extrabold text-ocean-blue-800 tracking-tight">Impact & Stories</h1>
          <p className="mt-4 text-xl text-gray-600 max-w-3xl mx-auto">
            Hear from the children, families, and volunteers whose lives have been transformed through our programs.
          </p>
        </section>

        {/* Statistics Section */}
        <section className="bg-ocean-blue-50 rounded-xl p-12 mb-20">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
            {STATISTICS.map((stat, index) => (
              <div key={index} className="text-center">
                <div className="flex items-center justify-center mb-3">
                  <ion-icon name={stat.icon} className="text-4xl text-ocean-blue-600"></ion-icon>
                </div>
                <div className="text-3xl font-bold text-ocean-blue-800">{stat.value}</div>
                <p className="text-gray-600 mt-2">{stat.label}</p>
              </div>
            ))}
          </div>
        </section>

        {/* Filter Section */}
        <section className="mb-12">
          <h2 className="text-2xl font-bold text-ocean-blue-800 mb-6">Filter Stories</h2>
          <div className="flex flex-wrap gap-3">
            <button
              onClick={() => setSelectedCategory(null)}
              className={`px-6 py-2 rounded-full font-medium transition ${
                selectedCategory === null
                  ? 'bg-ocean-blue-600 text-white'
                  : 'bg-gray-200 text-gray-700 hover:bg-gray-300'
              }`}
              aria-pressed={selectedCategory === null}
            >
              All Stories
            </button>
            {categories.map(category => (
              <button
                key={category}
                onClick={() => setSelectedCategory(category === selectedCategory ? null : category)}
                className={`px-6 py-2 rounded-full font-medium transition capitalize ${
                  selectedCategory === category
                    ? 'bg-ocean-blue-600 text-white'
                    : 'bg-gray-200 text-gray-700 hover:bg-gray-300'
                }`}
                aria-pressed={selectedCategory === category}
              >
                {category}
              </button>
            ))}
          </div>
        </section>

        {/* Stories Grid */}
        <section className="mb-20">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {filteredStories.map(story => (
              <ImpactStoryCard key={story.id} story={story} onClick={setSelectedStory} />
            ))}
          </div>
        </section>

        {/* Modal for Story Details */}
        {selectedStory && (
          <div 
            className="fixed inset-0 bg-black/50 flex items-center justify-center p-4 z-50"
            onClick={() => setSelectedStory(null)}
            role="dialog"
            aria-modal="true"
            aria-labelledby="story-modal-title"
          >
            <div 
              className="bg-white rounded-lg max-w-2xl w-full max-h-[90vh] overflow-y-auto"
              onClick={(e) => e.stopPropagation()}
            >
              <div className="sticky top-0 bg-white border-b border-gray-200 p-6 flex justify-between items-center">
                <h2 id="story-modal-title" className="text-2xl font-bold text-ocean-blue-800">{selectedStory.title}</h2>
                <button
                  onClick={() => setSelectedStory(null)}
                  className="text-gray-500 hover:text-gray-700 text-2xl"
                  aria-label="Close"
                >
                  ×
                </button>
              </div>
              <div className="p-6">
                <img src={selectedStory.image} alt={selectedStory.title} className="w-full h-64 object-cover rounded-lg mb-6" />
                <div className="space-y-4">
                  <p className="text-gray-600">{selectedStory.fullStory}</p>
                  <div className="bg-warm-amber-50 p-4 rounded-lg border-l-4 border-warm-amber-400">
                    <p className="text-sm text-warm-amber-800">
                      <strong>Impact:</strong> {selectedStory.impact}
                    </p>
                  </div>
                  <div className="text-sm text-gray-500 space-y-1">
                    <p><strong>Written by:</strong> {selectedStory.author}</p>
                    <p><strong>Date:</strong> {selectedStory.date}</p>
                  </div>
                </div>
                <div className="mt-6 flex gap-3">
                  <button
                    onClick={() => navigator.clipboard.writeText(selectedStory.title)}
                    className="flex-1 flex items-center justify-center gap-2 bg-ocean-blue-100 text-ocean-blue-700 px-4 py-2 rounded-lg hover:bg-ocean-blue-200"
                    aria-label={`Share: ${selectedStory.title}`}
                  >
                    <ion-icon name="share-social-outline"></ion-icon>
                    Share
                  </button>
                  <button
                    onClick={() => setSelectedStory(null)}
                    className="flex-1 bg-ocean-blue-600 text-white px-4 py-2 rounded-lg hover:bg-ocean-blue-700"
                  >
                    Close
                  </button>
                </div>
              </div>
            </div>
          </div>
        )}
      </div>
    </div>
  );
};

export default ImpactStoriesPage;
