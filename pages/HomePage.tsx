// Fix: Added a side-effect import to ensure custom element types are loaded.
import '../types';
import React from 'react';
import { Page } from '../types';
import Button from '../components/Button';
import NewsletterSubscription from '../components/NewsletterSubscription';
import ImageSlider from '../components/ImageSlider';
import { BLOG_POSTS, CSR_INFO } from '../constants';

interface HomePageProps {
  onNavigate: (page: Page) => void;
}

const ImpactCard: React.FC<{ icon: string; value: string; label: string }> = ({ icon, value, label }) => (
    <div className="text-center p-8 bg-white rounded-2xl shadow-soft border border-cream-200 hover:shadow-soft-lg hover:-translate-y-1 transition-all duration-300">
        <div className="flex items-center justify-center h-16 w-16 rounded-full bg-warm-amber-100 mx-auto mb-4">
            <ion-icon name={icon} class="text-3xl text-warm-amber-700" aria-hidden="true"></ion-icon>
        </div>
        <h3 className="text-4xl font-extrabold text-ocean-blue-800">{value}</h3>
        <p className="mt-2 text-neutral-600">{label}</p>
    </div>
);

const PromiseCard: React.FC<{ icon: string; title: string; text: string }> = ({ icon, title, text }) => (
  <div className="flex gap-4 p-6 bg-white rounded-2xl border border-cream-200 shadow-soft">
    <div className="flex-shrink-0 w-12 h-12 rounded-full bg-ocean-blue-100 flex items-center justify-center">
      <ion-icon name={icon} class="text-2xl text-ocean-blue-700" aria-hidden="true"></ion-icon>
    </div>
    <div>
      <h3 className="text-lg font-bold text-ocean-blue-800">{title}</h3>
      <p className="mt-1 text-neutral-600">{text}</p>
    </div>
  </div>
);

const HomePage: React.FC<HomePageProps> = ({ onNavigate }) => {
  const [currentHeroSlide, setCurrentHeroSlide] = React.useState(0);

  const heroSlides = [
    {
      src: 'https://images.unsplash.com/photo-1594608661623-aa0bd3a69d98?w=1400&h=600&fit=crop',
      alt: 'Indian children celebrating and learning together',
      title: 'Every child deserves to be seen.',
      subtitle: 'We walk alongside visually impaired children and their families in Bengaluru, with education, technology and a community that believes in them.'
    },
    {
      src: 'https://images.unsplash.com/photo-1497375638960-ca368c7231e4?w=1400&h=600&fit=crop',
      alt: 'Indian children in educational program',
      title: 'Learning that meets each child where they are.',
      subtitle: 'Braille, audio, touch and patience. We teach the way a child learns best, not the way a textbook expects.'
    },
    {
      src: 'https://images.unsplash.com/photo-1542810634-71277d95dcbb?w=1400&h=600&fit=crop',
      alt: 'Indian children celebrating achievements together',
      title: 'No family should face this alone.',
      subtitle: 'From the day of diagnosis onwards, parents find other parents, guidance, and a place where their child belongs.'
    },
    {
      src: 'https://images.unsplash.com/photo-1516627145497-ae6968895b74?w=1400&h=600&fit=crop',
      alt: 'Indian children engaged in activities',
      title: 'Confidence is built one small win at a time.',
      subtitle: 'A first solo Metro ride. A first cricket match. A first line of code. We celebrate every one of them.'
    },
  ];

  React.useEffect(() => {
    const timer = setInterval(() => {
      setCurrentHeroSlide((prev) => (prev + 1) % heroSlides.length);
    }, 6000);
    return () => clearInterval(timer);
  }, [heroSlides.length]);

  return (
    <div className="bg-cream-50">
      {/* Hero Slider Section */}
      <section className="relative h-[520px] md:h-[600px] w-full overflow-hidden" role="banner" aria-label="Hero section with image carousel">
        {heroSlides.map((slide, index) => (
          <div
            key={index}
            className={`absolute inset-0 transition-opacity duration-1000 ${
              index === currentHeroSlide ? 'opacity-100' : 'opacity-0'
            }`}
            aria-hidden={index !== currentHeroSlide}
          >
            <img
              src={slide.src}
              alt={slide.alt}
              className="w-full h-full object-cover"
            />
            {/* Warm overlay */}
            <div className="absolute inset-0 bg-gradient-to-b from-ocean-blue-950/50 via-ocean-blue-950/40 to-ocean-blue-950/75" aria-hidden="true"></div>

            {/* Text Content */}
            <div className="absolute inset-0 flex items-center justify-center">
              <div className="container mx-auto px-4 sm:px-6 lg:px-8 text-center">
                <h1 className="text-4xl md:text-6xl font-extrabold tracking-tight leading-tight text-white drop-shadow-lg max-w-4xl mx-auto">{slide.title}</h1>
                <p className="mt-5 text-lg md:text-xl max-w-3xl mx-auto text-white/90 drop-shadow-md leading-relaxed">{slide.subtitle}</p>
                <div className="mt-8 flex flex-col sm:flex-row gap-4 justify-center">
                  <Button onClick={() => onNavigate(Page.Donate)} size="lg" aria-label="Go to donate page">Give a child a brighter week</Button>
                  <Button onClick={() => onNavigate(Page.GetInvolved)} variant="outline" size="lg" className="border-white text-white hover:bg-white hover:text-ocean-blue-800 focus:ring-white" aria-label="Go to get involved page">Volunteer with us</Button>
                </div>
              </div>
            </div>
          </div>
        ))}

        {/* Previous Button */}
        <button
          onClick={() => setCurrentHeroSlide((prev) => (prev - 1 + heroSlides.length) % heroSlides.length)}
          className="absolute left-4 top-1/2 -translate-y-1/2 bg-white/20 hover:bg-white/40 text-white rounded-full p-3 transition-all duration-200 z-10 focus:outline-none focus:ring-2 focus:ring-warm-amber-300"
          aria-label="Previous slide"
        >
          <ion-icon name="chevron-back" class="text-2xl" aria-hidden="true"></ion-icon>
        </button>

        {/* Next Button */}
        <button
          onClick={() => setCurrentHeroSlide((prev) => (prev + 1) % heroSlides.length)}
          className="absolute right-4 top-1/2 -translate-y-1/2 bg-white/20 hover:bg-white/40 text-white rounded-full p-3 transition-all duration-200 z-10 focus:outline-none focus:ring-2 focus:ring-warm-amber-300"
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
              className={`h-3 rounded-full transition-all duration-300 ${
                index === currentHeroSlide
                  ? 'bg-warm-amber-300 w-8'
                  : 'bg-white/50 hover:bg-white/75 w-3'
              }`}
              role="tab"
              aria-selected={index === currentHeroSlide}
              aria-label={`Go to slide ${index + 1}`}
            ></button>
          ))}
        </div>
      </section>

      {/* Founder's note */}
      <section className="py-20 bg-white" aria-label="A note from our founder">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 items-center">
            <div className="lg:col-span-4">
              <img
                src="https://images.unsplash.com/photo-1518152006812-edab29b069ac?q=80&w=800&auto=format&fit=crop"
                alt="Founder Nayana Arya with children"
                className="rounded-3xl shadow-soft-lg w-full object-cover aspect-[4/5]"
                loading="lazy"
              />
            </div>
            <div className="lg:col-span-8">
              <p className="text-sm font-semibold uppercase tracking-widest text-primary-red-600">Why we do this</p>
              <h2 className="mt-3 text-3xl md:text-4xl font-extrabold text-ocean-blue-800 leading-tight">
                "I didn't start this foundation to fix children. I started it because they were already whole, and the world around them wasn't ready."
              </h2>
              <p className="mt-6 text-lg text-neutral-600 leading-relaxed">
                Most of the children we meet have been told, gently or otherwise, what they can't do. Our work is simple: give them Braille and screen readers, a sighted guide for the Metro, a teacher who waits, a cricket ball they can hear, and friends who get it. Then step back and watch.
              </p>
              <p className="mt-4 text-lg text-neutral-600 leading-relaxed">
                We are a small team in Murugeshpalaya, Bengaluru. We know every child by name. If you are a parent reading this on a hard day, please call us. We have time for you.
              </p>
              <p className="mt-6 font-bold text-ocean-blue-800">Nayana Arya, Founder</p>
              <div className="mt-8 flex flex-col sm:flex-row gap-4">
                <Button onClick={() => onNavigate(Page.About)} variant="secondary">Our story</Button>
                <Button onClick={() => onNavigate(Page.ImpactStories)} variant="outline">Meet the children</Button>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Our promises */}
      <section className="py-20" aria-label="What we promise every child">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12 max-w-2xl mx-auto">
            <h2 className="text-3xl font-bold text-ocean-blue-800">What we promise every child</h2>
            <p className="mt-3 text-lg text-neutral-600">These are not programme names. They are the things a child should be able to take for granted.</p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <PromiseCard icon="hand-left-outline" title="You will be taught, not managed" text="Braille, tactile maths, audio books and assistive technology, at the pace that works for you, by teachers trained in special education." />
            <PromiseCard icon="walk-outline" title="You will learn to move through your city" text="Orientation and mobility training on real Bengaluru streets, buses and Metro lines, with a guide until you don't need one." />
            <PromiseCard icon="people-outline" title="You will have friends who understand" text="Sports days, festivals, art workshops and outings where no one is the only blind child in the room." />
            <PromiseCard icon="heart-outline" title="Your family will have support too" text="Parent circles, counselling, help with school admissions and government schemes, and someone to call when it's hard." />
          </div>
        </div>
      </section>

      {/* Stories & Impact Slider */}
      <section className="py-20 bg-white" aria-label="Stories and impact showcase">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-ocean-blue-800">Moments from our days together</h2>
            <p className="mt-2 text-lg text-neutral-600">Small things that turn out to be big things</p>
          </div>
          <ImageSlider
            images={[
              {
                src: 'https://images.unsplash.com/photo-1594608661623-aa0bd3a69d98?w=1200&h=500&fit=crop',
                alt: 'Indian child learning in classroom',
                caption: 'A first Braille sentence, read aloud to the whole class',
              },
              {
                src: 'https://images.unsplash.com/photo-1532629345422-7515f3d16bb6?w=1200&h=500&fit=crop',
                alt: 'Indian child with technology',
                caption: 'Sending an email on her own for the first time',
              },
              {
                src: 'https://images.unsplash.com/photo-1497375638960-ca368c7231e4?w=1200&h=500&fit=crop',
                alt: 'Indian community support and inclusion',
                caption: 'Parents meeting other parents at our Saturday circle',
              },
              {
                src: 'https://images.unsplash.com/photo-1542810634-71277d95dcbb?w=1200&h=500&fit=crop',
                alt: 'Indian child participating in activities',
                caption: 'Blind cricket at Kanteerava: the final was decided on the last ball',
              },
              {
                src: 'https://images.unsplash.com/photo-1516627145497-ae6968895b74?w=1200&h=500&fit=crop',
                alt: 'Celebration of achievements',
                caption: 'Deepavali at our centre: clay diyas, music and a lot of sweets',
              },
            ]}
            autoPlay={true}
            interval={5000}
          />
        </div>
      </section>

      {/* Impact Section */}
      <section className="py-20" aria-label="Our impact section">
          <div className="container mx-auto px-4 sm:px-6 lg:px-8">
              <div className="text-center mb-12">
                  <h2 className="text-3xl font-bold text-ocean-blue-800">Together, so far</h2>
                   <p className="mt-2 text-lg text-neutral-600">Numbers never tell the whole story, but each one of these is a child or a person who showed up.</p>
              </div>
              <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                  <ImpactCard icon="school-outline" value="500+" label="Children learning with us" />
                  <ImpactCard icon="people-outline" value="150+" label="Volunteers giving their time" />
                  <ImpactCard icon="home-outline" value="15" label="Community centres in and around Bengaluru" />
              </div>
          </div>
      </section>

      {/* For parents */}
      <section className="py-20 bg-ocean-blue-800 text-white" aria-label="Support for parents and families">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div>
              <p className="text-sm font-semibold uppercase tracking-widest text-warm-amber-300">For parents and families</p>
              <h2 className="mt-3 text-3xl md:text-4xl font-extrabold leading-tight">If your child has just been diagnosed, start here.</h2>
              <p className="mt-5 text-lg text-ocean-blue-100 leading-relaxed">
                You probably have a hundred questions and not much sleep. You don't need to have it figured out before you call. Come and visit our centre, meet other parents, and let us help you with the next step, whatever it is: school admissions, assistive devices, government schemes, or simply someone who listens.
              </p>
              <ul className="mt-6 space-y-3 text-ocean-blue-50">
                <li className="flex items-start gap-3"><ion-icon name="checkmark-circle" class="text-xl text-warm-amber-300 mt-0.5" aria-hidden="true"></ion-icon><span>Free first consultation, in Kannada, English, Hindi, Tamil or Telugu</span></li>
                <li className="flex items-start gap-3"><ion-icon name="checkmark-circle" class="text-xl text-warm-amber-300 mt-0.5" aria-hidden="true"></ion-icon><span>Parent support circle every Saturday morning at our centre</span></li>
                <li className="flex items-start gap-3"><ion-icon name="checkmark-circle" class="text-xl text-warm-amber-300 mt-0.5" aria-hidden="true"></ion-icon><span>Help navigating UDID cards, scholarships and school enrolment</span></li>
              </ul>
            </div>
            <div className="bg-white/10 backdrop-blur rounded-3xl p-8 border border-white/15">
              <h3 className="text-xl font-bold">Talk to us</h3>
              <p className="mt-2 text-ocean-blue-100">Mon to Sat, 9:30 am to 6:00 pm. If we miss your call, we'll call you back.</p>
              <div className="mt-6 space-y-4">
                <a href={CSR_INFO.contactPhoneHref} className="flex items-center gap-4 bg-white text-ocean-blue-800 rounded-2xl p-4 hover:bg-cream-100 transition shadow-soft">
                  <ion-icon name="call" class="text-2xl text-primary-red-600" aria-hidden="true"></ion-icon>
                  <div>
                    <p className="text-xs uppercase tracking-wide text-neutral-500">Call</p>
                    <p className="font-bold text-lg">{CSR_INFO.contactPhone}</p>
                  </div>
                </a>
                <a href={`mailto:${CSR_INFO.contactEmail}`} className="flex items-center gap-4 bg-white text-ocean-blue-800 rounded-2xl p-4 hover:bg-cream-100 transition shadow-soft">
                  <ion-icon name="mail" class="text-2xl text-primary-red-600" aria-hidden="true"></ion-icon>
                  <div>
                    <p className="text-xs uppercase tracking-wide text-neutral-500">Email</p>
                    <p className="font-bold break-all">{CSR_INFO.contactEmail}</p>
                  </div>
                </a>
                <button onClick={() => onNavigate(Page.Contact)} className="w-full text-center text-sm text-ocean-blue-100 hover:text-white underline underline-offset-4 focus:outline-none focus:ring-2 focus:ring-white rounded py-2">
                  Or send us a message and we'll reply within two working days
                </button>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Latest News Section */}
      <section className="py-20" aria-label="Latest news section">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-ocean-blue-800">Out and about in Bengaluru</h2>
            <p className="mt-2 text-lg text-neutral-600">Recent outings, events and milestones from our children and volunteers.</p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {BLOG_POSTS.map((post) => (
              <article key={post.id} className="bg-white rounded-2xl shadow-soft overflow-hidden group border border-cream-200 hover:shadow-soft-lg hover:-translate-y-1 transition-all duration-300 flex flex-col" role="article">
                <div className="overflow-hidden h-48">
                  <img src={post.image} alt={post.title} className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500" loading="lazy" />
                </div>
                <div className="p-6 flex flex-col flex-grow">
                  <div className="flex items-center justify-between text-xs text-neutral-500 mb-2">
                    <time>{post.date}</time>
                    {post.location && (
                      <span className="inline-flex items-center gap-1 text-ocean-blue-700 font-medium">
                        <ion-icon name="location-outline" aria-hidden="true"></ion-icon>{post.location.split(',')[0]}
                      </span>
                    )}
                  </div>
                  <h3 className="text-xl font-bold text-ocean-blue-800 mb-2 leading-snug">{post.title}</h3>
                  <p className="text-neutral-600 mb-4 flex-grow">{post.excerpt}</p>
                  <button onClick={() => onNavigate(Page.Blog)} className="text-left font-semibold text-primary-red-600 hover:text-primary-red-700 transition duration-300 focus:outline-none focus:ring-2 focus:ring-primary-red-400 rounded">Read the story &rarr;</button>
                </div>
              </article>
            ))}
          </div>
          <div className="text-center mt-12">
            <Button onClick={() => onNavigate(Page.Blog)} variant="secondary" size="lg">See all stories and events</Button>
          </div>
        </div>
      </section>

      {/* Get Involved + CSR Section */}
      <section className="py-20 bg-white" aria-label="Call to action section">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="bg-gradient-to-br from-warm-amber-50 to-cream-100 rounded-3xl p-10 md:p-14 border border-warm-amber-100 text-center">
            <h2 className="text-3xl md:text-4xl font-extrabold text-ocean-blue-800">You can be part of a child's good day.</h2>
            <p className="mt-4 text-lg max-w-2xl mx-auto text-neutral-600">A donation buys Braille books and bus fares. A Saturday buys a child a guide on a nature walk. A CSR partnership builds the technology lab that changes the arc of a hundred lives.</p>
            <div className="mt-8 flex flex-col sm:flex-row justify-center items-center gap-4">
              <Button onClick={() => onNavigate(Page.Donate)} variant="primary" size="lg">Donate</Button>
              <Button onClick={() => onNavigate(Page.GetInvolved)} variant="secondary" size="lg">Volunteer</Button>
              <Button onClick={() => onNavigate(Page.GetInvolved)} variant="outline" size="lg">CSR partnerships</Button>
            </div>
            <p className="mt-6 text-sm text-neutral-500">
              Companies: contact our admin team at <a href={`mailto:${CSR_INFO.contactEmail}`} className="underline underline-offset-4 text-ocean-blue-700">{CSR_INFO.contactEmail}</a> or <a href={CSR_INFO.contactPhoneHref} className="underline underline-offset-4 text-ocean-blue-700">{CSR_INFO.contactPhone}</a> for CSR details.
            </p>
          </div>
        </div>
      </section>

      {/* Newsletter Section */}
      <section className="py-20">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <NewsletterSubscription />
        </div>
      </section>
    </div>
  );
};

export default HomePage;
