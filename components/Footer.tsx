// Fix: Added a side-effect import to ensure custom element types are loaded.
import '../types';
import React from 'react';
import { Page } from '../types';
import Logo from './Logo';

interface FooterProps {
  onNavigate: (page: Page) => void;
}

const Footer: React.FC<FooterProps> = ({ onNavigate }) => {
  const navLinks = [
    { label: 'Home', page: Page.Home },
    { label: 'About Us', page: Page.About },
    { label: 'Programs', page: Page.Programs },
    { label: 'Get Involved', page: Page.GetInvolved },
    { label: 'Contact', page: Page.Contact },
  ];

  const socialLinks = [
    { name: 'logo-facebook', href: '#' },
    { name: 'logo-twitter', href: '#' },
    { name: 'logo-instagram', href: '#' },
    { name: 'logo-linkedin', href: '#' },
  ];

  return (
    <footer className="bg-ocean-blue-900 text-white">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          <div className="md:col-span-1">
            <div className="flex items-center mb-2">
              <Logo className="h-9 w-auto" />
              <h2 className="ml-3 text-xl font-bold">Nayana Arya Foundation</h2>
            </div>
            <p className="mt-2 text-ocean-blue-200">Creating vision for the children.</p>
            <div className="flex space-x-4 mt-4">
              {socialLinks.map((link) => (
                <a key={link.name} href={link.href} className="text-ocean-blue-200 hover:text-white transition duration-300">
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
                  <a href="#" onClick={(e) => { e.preventDefault(); onNavigate(link.page); }} className="text-ocean-blue-200 hover:text-white transition duration-300">
                    {link.label}
                  </a>
                </li>
              ))}
            </ul>
          </div>
          <div>
            <h3 className="text-lg font-semibold tracking-wider uppercase">Contact Us</h3>
            <ul className="mt-4 space-y-2 text-ocean-blue-200">
              <li>21 2nd Main KR Garden Murugeshpalaya, Bengaluru 560017</li>
              <li>admin@nayanaaryafoundation.org</li>
              <li>+91 8310551091</li>
            </ul>
          </div>
          <div>
            <h3 className="text-lg font-semibold tracking-wider uppercase">Our Promise</h3>
            <p className="mt-4 text-ocean-blue-200">
              Your donations are securely processed. We are committed to financial transparency and making a real impact.
            </p>
             <div className="mt-4 flex items-center space-x-2">
                <ion-icon name="lock-closed-outline" class="text-xl text-green-400"></ion-icon>
                <span className="text-sm">Secure SSL Connection</span>
            </div>
          </div>
        </div>
        <div className="mt-12 border-t border-ocean-blue-800 pt-8 text-center text-ocean-blue-300">
          <p>&copy; {new Date().getFullYear()} Nayana Arya Foundation. All rights reserved.</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;