// Fix: Added a side-effect import to ensure custom element types are loaded.
import '../types';
import React from 'react';
import { Page } from '../types';
import Button from '../components/Button';
import NewsletterSubscription from '../components/NewsletterSubscription';
import ImageSlider from '../components/ImageSlider';
import { BLOG_POSTS } from '../constants';

interface HomePageProps {
  onNavigate: (page: Page) => void;
}

const ImpactCard: React.FC<{ icon: string; value: string; label: string }> = ({ icon, value, label }) => (
    <div className="text-center p-8 bg-neutral-50 rounded-lg shadow-md border border-neutral-100 hover:shadow-lg transition-shadow">
        <div className="flex items-center justify-center h-16 w-16 rounded-full bg-primary-red-100 mx-auto mb-4">
            <ion-icon name={icon} class="text-3xl text-primary-red-600" aria-hidden="true"></ion-icon>
        </div>
        <h3 className="text-4xl font-bold text-primary-red-600">{value}</h3>
        <p className="mt-2 text-neutral-600">{label}</p>
    </div>
);


const HomePage: React.FC<HomePageProps> = ({ onNavigate }) => {
  const [currentHeroSlide, setCurrentHeroSlide] = React.useState(0);

  const heroSlides = [
    {
      src: 'https://images.unsplash.com/photo-1594608661623-aa0bd3a69d98?w=1400&h=600&fit=crop',
      alt: 'Indian children celebrating and learning together',
      title: 'Creating Vision for the Children',
      subtitle: 'Empowering visually impaired children through education, technology, and compassionate care.'
    },
    {
      src: 'https://images.unsplash.com/photo-1497375638960-ca368c7231e4?w=1400&h=600&fit=crop',
      alt: 'Indian children in educational program',
      title: 'Education Changes Lives',
      subtitle: 'Every child deserves access to quality education and equal opportunities.'
    },
    {
      src: 'https://images.unsplash.com/photo-1542810634-71277d95dcbb?w=1400&h=600&fit=crop',
      alt: 'Indian children celebrating achievements together',
      title: 'Celebrating Success Together',
      subtitle: 'Building inclusive communities where every child can thrive and celebrate.'
    },
    {
      src: 'https://images.unsplash.com/photo-1516627145497-ae6968895b74?w=1400&h=600&fit=crop',
      alt: 'Indian children engaged in activities',
      title: 'Unlocking Potential',
      subtitle: 'Providing opportunities for children to discover their talents and dreams.'
    },
  ];

  React.useEffect(() => {
    const timer = setInterval(() => {
      setCurrentHeroSlide((prev) => (prev + 1) % heroSlides.length);
    }, 5000);
    return () => clearInterval(timer);
  }, [heroSlides.length]);

  return (
    <div>
      {/* Hero Slider Section */}
      <section className="relative h-96 md:h-[550px] w-full overflow-hidden" role="banner" aria-label="Hero section with image carousel">
        {heroSlides.map((slide, index) => (
          <div
            key={index}
            className={`absolute inset-0 transition-opacity duration-1000 ${
              index === currentHeroSlide ? 'opacity-100' : 'opacity-0'
            }`}
          >
            <img
              src={slide.src}
              alt={slide.alt}
              className="w-full h-full object-cover"
            />
            {/* Dark Overlay */}
            <div className="absolute inset-0 bg-gradient-to-b from-black/40 via-black/30 to-black/60" aria-hidden="true"></div>
            
            {/* Text Content */}
            <div className="absolute inset-0 flex items-center justify-center">
              <div className="container mx-auto px-4 sm:px-6 lg:px-8 text-center">
                <h1 className="text-4xl md:text-6xl font-bold tracking-tight leading-tight text-white drop-shadow-lg">{slide.title}</h1>
                <p className="mt-4 text-lg md:text-xl max-w-3xl mx-auto text-white/90 drop-shadow-md">{slide.subtitle}</p>
                <div className="mt-8 flex flex-col sm:flex-row gap-4 justify-center">
                  <Button onClick={() => onNavigate(Page.Donate)} size="lg" aria-label="Go to donate page">Donate Now</Button>
                  <Button onClick={() => onNavigate(Page.GetInvolved)} variant="outline" size="lg" className="border-white text-white hover:bg-white hover:text-neutral-900 focus:ring-white" aria-label="Go to get involved page">Volunteer</Button>
                </div>
              </div>
            </div>
          </div>
        ))}

        {/* Previous Button */}
        <button
          onClick={() => setCurrentHeroSlide((prev) => (prev - 1 + heroSlides.length) % heroSlides.length)}
          className="absolute left-4 top-1/2 -translate-y-1/2 bg-white/30 hover:bg-white/50 text-white rounded-full p-3 transition-all duration-200 z-10 focus:outline-none focus:ring-2 focus:ring-primary-red-400"
          aria-label="Previous slide"
        >
          <ion-icon name="chevron-back" class="text-2xl" aria-hidden="true"></ion-icon>
        </button>

        {/* Next Button */}
        <button
          onClick={() => setCurrentHeroSlide((prev) => (prev + 1) % heroSlides.length)}
          className="absolute right-4 top-1/2 -translate-y-1/2 bg-white/30 hover:bg-white/50 text-white rounded-full p-3 transition-all duration-200 z-10 focus:outline-none focus:ring-2 focus:ring-primary-red-400"
          aria-label="Next slide"
        >
          <ion-icon name="chevron-forward" class="text-2xl" aria-hidden="true"></ion-icon>
        </button>

        {/* Dot Indicators */}
        <div className="absolute bottom-6 left-1/2 -translate-x-1/2 flex gap-2 z-20" role="tablist" aria-label="Slide indicators">
          {heroSlides.map((_, index) => (
            <button
              key={index}
              onClick={() => setCurrentHeroSlide(index)}
              className={`w-3 h-3 rounded-full transition-all duration-300 ${
                index === currentHeroSlide
                  ? 'bg-white w-8'
                  : 'bg-white/50 hover:bg-white/75'
              }`}
              role="tab"
              aria-selected={index === currentHeroSlide}
              aria-label={`Go to slide ${index + 1}`}
            ></button>
          ))}
        </div>

        {/* Slide Counter */}
        <div className="absolute top-6 right-6 bg-black/50 text-white px-4 py-2 rounded-full text-sm font-semibold z-20">
          {currentHeroSlide + 1} / {heroSlides.length}
        </div>
      </section>

      {/* Mission Statement */}
      <section className="py-20 bg-white" aria-label="Our mission section">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl font-bold text-neutral-900">Our Mission</h2>
          <div className="w-24 h-1 bg-primary-red-600 mx-auto mt-4 mb-6" aria-hidden="true"></div>
          <p className="mt-4 text-lg text-neutral-600 max-w-3xl mx-auto">
            Our core purpose is to unlock the potential of every visually impaired child. We provide comprehensive education, foster independence, and create an inclusive world where they can thrive and achieve their dreams. We stand apart by focusing on personalized care and long-term empowerment.
          </p>
        </div>
      </section>

      {/* Stories & Impact Slider */}
      <section className="py-20 bg-neutral-50" aria-label="Stories and impact showcase">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-neutral-900">Stories of Hope & Transformation</h2>
            <p className="mt-2 text-lg text-neutral-600">See how our programs are changing lives every day</p>
          </div>
          <ImageSlider
            images={[
              {
                src: 'https://images.unsplash.com/photo-1594608661623-aa0bd3a69d98?w=1200&h=500&fit=crop',
                alt: 'Indian child learning in classroom',
                caption: '📚 Access to Quality Education',
              },
              {
                src: 'https://images.unsplash.com/photo-1532629345422-7515f3d16bb6?w=1200&h=500&fit=crop',
                alt: 'Indian child with technology',
                caption: '💻 Technology Empowers Independence',
              },
              {
                src: 'https://images.unsplash.com/photo-1497375638960-ca368c7231e4?w=1200&h=500&fit=crop',
                alt: 'Indian community support and inclusion',
                caption: '🤝 Building Inclusive Communities',
              },
              {
                src: 'https://images.unsplash.com/photo-1542810634-71277d95dcbb?w=1200&h=500&fit=crop',
                alt: 'Indian child participating in activities',
                caption: '🌟 Every Child Deserves a Chance',
              },
              {
                src: 'https://images.unsplash.com/photo-1516627145497-ae6968895b74?w=1200&h=500&fit=crop',
                alt: 'Celebration of achievements',
                caption: '🎯 Celebrating Every Success',
              },
            ]}
            autoPlay={true}
            interval={5000}
          />
        </div>
      </section>
      
      {/* Impact Section */}
      <section className="py-20 bg-white" aria-label="Our impact section">
          <div className="container mx-auto px-4 sm:px-6 lg:px-8">
              <div className="text-center mb-12">
                  <h2 className="text-3xl font-bold text-neutral-900">Our Impact</h2>
                   <p className="mt-2 text-lg text-neutral-600">Your support changes lives. Here's a glimpse of what we've achieved together.</p>
              </div>
              <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                  <ImpactCard icon="school-outline" value="100's" label="Of blind children educated" />
                  <ImpactCard icon="people-outline" value="50+" label="Dedicated volunteers" />
                  <ImpactCard icon="home-outline" value="15" label="Community centers established" />
              </div>
          </div>
      </section>


      {/* Get Involved Section */}
      <section className="py-20 bg-neutral-900 text-white" aria-label="Call to action section">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl font-bold">You Can Make a Difference</h2>
          <p className="mt-4 text-lg max-w-2xl mx-auto text-neutral-300">Join our cause and help us create a brighter future for these children. Your contribution, big or small, has a lasting impact.</p>
          <div className="mt-8 flex flex-col sm:flex-row justify-center items-center gap-4">
            <Button onClick={() => onNavigate(Page.Donate)} variant="primary" size="lg">Donate</Button>
            <Button onClick={() => onNavigate(Page.GetInvolved)} variant="outline" size="lg" className="border-white text-white hover:bg-white hover:text-neutral-900 focus:ring-white">Volunteer</Button>
            <button onClick={(e) => { e.preventDefault(); onNavigate(Page.ImpactStories); }} className="text-primary-red-400 hover:text-primary-red-300 font-semibold text-lg focus:outline-none focus:ring-2 focus:ring-primary-red-400 rounded px-4 py-2">Learn More &rarr;</button>
          </div>
        </div>
      </section>

      {/* Newsletter Section */}
      <section className="py-20 bg-white">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <NewsletterSubscription />
        </div>
      </section>

      {/* Latest News Section */}
      <section className="py-20 bg-neutral-50" aria-label="Latest news section">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-neutral-900">Latest News & Stories</h2>
            <p className="mt-2 text-lg text-neutral-600">Stay updated with our recent activities and milestones.</p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {BLOG_POSTS.map((post, index) => (
              <article key={index} className="bg-white rounded-lg shadow-md overflow-hidden group border border-neutral-100 hover:shadow-lg transition-shadow" role="article">
                <img src={post.image} alt={post.title} className="w-full h-48 object-cover group-hover:scale-105 transition-transform duration-300"/>
                <div className="p-6">
                  <time className="text-sm text-neutral-500 mb-2">{post.date}</time>
                  <h3 className="text-xl font-bold text-neutral-900 mb-2">{post.title}</h3>
                  <p className="text-neutral-600 mb-4">{post.excerpt}</p>
                  <button onClick={() => {}} className="font-semibold text-primary-red-600 hover:text-primary-red-700 transition duration-300">Read More &rarr;</button>
                </div>
              </article>
            ))}
          </div>
          <div className="text-center mt-12">
            <Button onClick={() => onNavigate(Page.Blog)} variant="secondary" size="lg">View All Articles</Button>
          </div>
        </div>
      </section>
    </div>
  );
};

export default HomePage;