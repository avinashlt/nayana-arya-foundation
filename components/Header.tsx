import React, { useState } from 'react';
import { Page } from '../types';
import Button from './Button';
import Logo from './Logo';

interface HeaderProps {
  currentPage: Page;
  onNavigate: (page: Page) => void;
}

const NavLink: React.FC<{
  page: Page;
  currentPage: Page;
  onNavigate: (page: Page) => void;
  children: React.ReactNode;
  className?: string;
}> = ({ page, currentPage, onNavigate, children, className }) => {
  const isActive = currentPage === page;
  return (
    <a
      href="#"
      onClick={(e) => {
        e.preventDefault();
        onNavigate(page);
      }}
      className={`text-lg font-medium transition duration-300 ${
        isActive ? 'text-ocean-blue-600' : 'text-gray-600 hover:text-ocean-blue-600'
      } ${className}`}
    >
      {children}
    </a>
  );
};

const Header: React.FC<HeaderProps> = ({ currentPage, onNavigate }) => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const navLinks = [
    { page: Page.Home, label: 'Home' },
    { page: Page.About, label: 'About Us' },
    { page: Page.Programs, label: 'Programs' },
    { page: Page.ImpactStories, label: 'Impact' },
    { page: Page.Blog, label: 'Blog' },
    { page: Page.GetInvolved, label: 'Get Involved' },
    { page: Page.Contact, label: 'Contact' },
  ];

  return (
    <header className="bg-white/80 backdrop-blur-md sticky top-0 z-50 shadow-sm">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-20">
          <div
            className="flex-shrink-0 cursor-pointer flex items-center"
            onClick={() => onNavigate(Page.Home)}
            role="button"
            tabIndex={0}
            onKeyDown={(e) => {
              if (e.key === 'Enter' || e.key === ' ') {
                onNavigate(Page.Home);
              }
            }}
            aria-label="Nayana Arya Foundation Home"
          >
            <Logo className="h-10 w-auto" aria-hidden="true" />
            <span className="ml-3 text-xl font-bold text-ocean-blue-800 hidden sm:block">
              Nayana Arya Foundation
            </span>
          </div>
          <nav className="hidden lg:flex lg:items-center lg:space-x-8" aria-label="Main navigation">
            {navLinks.map((link) => (
              <NavLink key={link.page} page={link.page} currentPage={currentPage} onNavigate={() => { onNavigate(link.page); setIsMenuOpen(false); }} aria-current={currentPage === link.page ? 'page' : undefined}>
                {link.label}
              </NavLink>
            ))}
          </nav>
          <div className="hidden lg:block">
            <Button onClick={() => onNavigate(Page.Donate)} aria-label="Go to Donate page">Donate Now</Button>
          </div>
          <div className="lg:hidden">
            <button
              onClick={() => setIsMenuOpen(!isMenuOpen)}
              className="text-gray-600 hover:text-ocean-blue-600 focus:outline-none focus:ring-2 focus:ring-ocean-blue-500 rounded p-2"
              aria-label={isMenuOpen ? 'Close menu' : 'Open menu'}
              aria-expanded={isMenuOpen}
            >
              <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg" aria-hidden="true">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d={isMenuOpen ? "M6 18L18 6M6 6l12 12" : "M4 6h16M4 12h16M4 18h16"}></path>
              </svg>
            </button>
          </div>
        </div>
      </div>
      {isMenuOpen && (
        <nav className="lg:hidden bg-white border-t border-gray-200" aria-label="Mobile navigation">
          <div className="px-2 pt-2 pb-3 space-y-1 sm:px-3">
            {navLinks.map((link) => (
              <NavLink key={link.page} page={link.page} currentPage={currentPage} onNavigate={() => { onNavigate(link.page); setIsMenuOpen(false); }} className="block px-3 py-2" aria-current={currentPage === link.page ? 'page' : undefined}>
                {link.label}
              </NavLink>
            ))}
            <div className="px-2 pt-4">
              <Button onClick={() => { onNavigate(Page.Donate); setIsMenuOpen(false); }} className="w-full" aria-label="Go to Donate page">
                Donate Now
              </Button>
            </div>
          </div>
        </nav>
      )}
    </header>
  );
};

export default Header;