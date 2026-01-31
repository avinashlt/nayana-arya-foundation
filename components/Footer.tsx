// Fix: Added a side-effect import to ensure custom element types are loaded.
import '../types';
import React from 'react';
import { Page } from '../types';
import Logo from './Logo';
import NewsletterSubscription from './NewsletterSubscription';

interface FooterProps {
  onNavigate: (page: Page) => void;
}

const Footer: React.FC<FooterProps> = ({ onNavigate }) => {
  const navLinks = [
    { label: 'Home', page: Page.Home },
    { label: 'About Us', page: Page.About },
    { label: 'Programs', page: Page.Programs },
    { label: 'Impact', page: Page.ImpactStories },
    { label: 'Blog', page: Page.Blog },
    { label: 'Get Involved', page: Page.GetInvolved },
    { label: 'Contact', page: Page.Contact },
  ];

  const socialLinks = [
    { name: 'logo-facebook', href: 'https://facebook.com', label: 'Facebook' },
    { name: 'logo-twitter', href: 'https://twitter.com', label: 'Twitter' },
    { name: 'logo-instagram', href: 'https://instagram.com', label: 'Instagram' },
    { name: 'logo-linkedin', href: 'https://linkedin.com', label: 'LinkedIn' },
  ];

  return (
    <footer className="bg-neutral-900 text-white" role="contentinfo">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 py-12">
        {/* Newsletter Section */}
        <div className="mb-12 pb-12 border-b border-neutral-800">
          <NewsletterSubscription variant="footer" />
        </div>

        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          <div className="md:col-span-1">
            <div className="flex items-center mb-2">
              <Logo className="h-9 w-auto" aria-hidden="true" />
              <h2 className="ml-3 text-xl font-bold">Nayana Arya Foundation</h2>
            </div>
            <p className="mt-2 text-neutral-400">Creating vision for the children through education, empowerment, and compassion.</p>
            <div className="flex space-x-4 mt-4">
              {socialLinks.map((link) => (
                <a 
                  key={link.name} 
                  href={link.href} 
                  className="text-neutral-400 hover:text-primary-red-500 transition duration-300 focus:ring-2 focus:ring-primary-red-500 rounded p-2"
                  aria-label={link.label}
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <ion-icon name={link.name} class="text-2xl"></ion-icon>
                </a>
              ))}
            </div>
          </div>
          <div>
            <h3 className="text-lg font-semibold tracking-wider uppercase">Quick Links</h3>
            <ul className="mt-4 space-y-2">
              {navLinks.map((link) => (
                <li key={link.label}>
                  <button 
                    onClick={() => onNavigate(link.page)}
                    className="text-neutral-400 hover:text-primary-red-500 transition duration-300 focus:outline-none focus:underline"
                  >
                    {link.label}
                  </button>
                </li>
              ))}
            </ul>
          </div>
          <div>
            <h3 className="text-lg font-semibold tracking-wider uppercase">Contact Us</h3>
            <ul className="mt-4 space-y-2 text-neutral-400">
              <li>📍 21 2nd Main KR Garden Murugeshpalaya, Bengaluru 560017</li>
              <li><a href="mailto:admin@nayanaaryafoundation.org" className="hover:text-primary-red-500 transition">📧 admin@nayanaaryafoundation.org</a></li>
              <li><a href="tel:+918310551091" className="hover:text-primary-red-500 transition">📞 +91 8310551091</a></li>
            </ul>
          </div>
          <div>
            <h3 className="text-lg font-semibold tracking-wider uppercase">Our Promise</h3>
            <p className="mt-4 text-neutral-400">
              Your donations are securely processed. We are committed to financial transparency and making a real impact.
            </p>
             <div className="mt-4 flex items-center space-x-2">
                <ion-icon name="lock-closed-outline" class="text-xl text-green-400"></ion-icon>
                <span className="text-sm">Secure SSL Connection</span>
            </div>
          </div>
        </div>
        <div className="mt-12 border-t border-neutral-800 pt-8 text-center text-neutral-500">
          <p>&copy; {new Date().getFullYear()} Nayana Arya Foundation. All rights reserved. | NGO dedicated to creating vision for children.</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;