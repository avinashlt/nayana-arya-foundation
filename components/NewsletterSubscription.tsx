import React, { useState } from 'react';

interface NewsletterSubscriptionProps {
  variant?: 'default' | 'inline' | 'footer';
  className?: string;
}

const NewsletterSubscription: React.FC<NewsletterSubscriptionProps> = ({ variant = 'default', className = '' }) => {
  const [email, setEmail] = useState('');
  const [isSubscribed, setIsSubscribed] = useState(false);
  const [error, setError] = useState('');

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    
    // Simple email validation
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    
    if (!emailRegex.test(email)) {
      setError('Please enter a valid email address');
      return;
    }

    // Simulate subscription (in production, this would be an API call)
    console.log('Newsletter subscription:', email);
    setIsSubscribed(true);
    setEmail('');
    setError('');

    // Reset after 3 seconds
    setTimeout(() => setIsSubscribed(false), 3000);
  };

  if (variant === 'inline') {
    return (
      <form onSubmit={handleSubmit} className={`flex gap-2 ${className}`} aria-label="Newsletter subscription">
        <input
          type="email"
          placeholder="Your email"
          value={email}
          onChange={(e) => { setEmail(e.target.value); setError(''); }}
          className="flex-1 px-4 py-2 rounded-lg border border-gray-300 focus:ring-2 focus:ring-ocean-blue-500 focus:border-transparent"
          aria-label="Email address"
          required
        />
        <button
          type="submit"
          className="bg-ocean-blue-600 text-white px-6 py-2 rounded-lg hover:bg-ocean-blue-700 transition font-medium"
          aria-label="Subscribe"
        >
          Subscribe
        </button>
      </form>
    );
  }

  if (variant === 'footer') {
    return (
      <form onSubmit={handleSubmit} className={`w-full ${className}`} aria-label="Newsletter subscription">
        <div className="flex gap-2 mb-2">
          <input
            type="email"
            placeholder="Your email"
            value={email}
            onChange={(e) => { setEmail(e.target.value); setError(''); }}
            className="flex-1 px-3 py-2 rounded-lg text-sm border border-gray-300 focus:ring-2 focus:ring-ocean-blue-400 focus:border-transparent"
            aria-label="Email address"
            required
          />
          <button
            type="submit"
            className="bg-warm-amber-500 text-white px-4 py-2 rounded-lg hover:bg-warm-amber-600 transition font-medium text-sm"
            aria-label="Subscribe"
          >
            Subscribe
          </button>
        </div>
        {error && <p className="text-sm text-red-400">{error}</p>}
        {isSubscribed && <p className="text-sm text-green-400">Thank you for subscribing!</p>}
      </form>
    );
  }

  // Default variant
  return (
    <section className={`bg-gradient-to-r from-ocean-blue-600 to-ocean-blue-700 text-white rounded-lg p-8 md:p-12 ${className}`} aria-labelledby="newsletter-title">
      <div className="max-w-md">
        <h2 id="newsletter-title" className="text-3xl font-bold mb-3">Stay Updated</h2>
        <p className="text-ocean-blue-100 mb-6">
          Subscribe to our newsletter to receive updates about our programs, impact stories, and opportunities to get involved.
        </p>
        
        <form onSubmit={handleSubmit} className="space-y-3">
          <div>
            <input
              type="email"
              placeholder="Enter your email"
              value={email}
              onChange={(e) => { setEmail(e.target.value); setError(''); }}
              className="w-full px-4 py-3 rounded-lg text-gray-900 focus:ring-2 focus:ring-warm-amber-400 focus:outline-none"
              aria-label="Email address for newsletter"
              required
            />
            {error && <p className="text-sm text-warm-amber-200 mt-2">{error}</p>}
          </div>
          
          <button
            type="submit"
            disabled={isSubscribed}
            className="w-full bg-warm-amber-500 text-white py-3 rounded-lg font-semibold hover:bg-warm-amber-600 transition disabled:bg-green-500 disabled:cursor-default"
            aria-label={isSubscribed ? 'Subscribed' : 'Subscribe'}
          >
            {isSubscribed ? '✓ Thank you for subscribing!' : 'Subscribe Now'}
          </button>
        </form>

        <p className="text-xs text-ocean-blue-200 mt-4">
          We respect your privacy. Unsubscribe at any time.
        </p>
      </div>
    </section>
  );
};

export default NewsletterSubscription;
