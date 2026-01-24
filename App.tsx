
import React, { useState, useCallback, useEffect } from 'react';
import Header from './components/Header';
import Footer from './components/Footer';
import HomePage from './pages/HomePage';
import AboutPage from './pages/AboutPage';
import ProgramsPage from './pages/ProgramsPage';
import DonatePage from './pages/DonatePage';
import GetInvolvedPage from './pages/GetInvolvedPage';
import ContactPage from './pages/ContactPage';
import ImpactStoriesPage from './pages/ImpactStoriesPage';
import BlogPage from './pages/BlogPage';
import { Page } from './types';

const App: React.FC = () => {
  const [currentPage, setCurrentPage] = useState<Page>(Page.Home);

  const handleNavigate = useCallback((page: Page) => {
    setCurrentPage(page);
    window.scrollTo(0, 0);
  }, []);

  // Set document title based on current page
  useEffect(() => {
    const pageTitle: Record<Page, string> = {
      [Page.Home]: 'Nayana Arya Foundation | Creating Vision for Children',
      [Page.About]: 'About Us | Nayana Arya Foundation',
      [Page.Programs]: 'Programs | Nayana Arya Foundation',
      [Page.Donate]: 'Donate | Nayana Arya Foundation',
      [Page.GetInvolved]: 'Get Involved | Nayana Arya Foundation',
      [Page.Contact]: 'Contact Us | Nayana Arya Foundation',
      [Page.ImpactStories]: 'Impact & Stories | Nayana Arya Foundation',
      [Page.Blog]: 'News & Blog | Nayana Arya Foundation',
    };
    document.title = pageTitle[currentPage];
  }, [currentPage]);

  const renderPage = () => {
    switch (currentPage) {
      case Page.About:
        return <AboutPage onNavigate={handleNavigate} />;
      case Page.Programs:
        return <ProgramsPage />;
      case Page.Donate:
        return <DonatePage />;
      case Page.GetInvolved:
        return <GetInvolvedPage />;
      case Page.Contact:
        return <ContactPage />;
      case Page.ImpactStories:
        return <ImpactStoriesPage />;
      case Page.Blog:
        return <BlogPage />;
      case Page.Home:
      default:
        return <HomePage onNavigate={handleNavigate} />;
    }
  };

  return (
    <div className="bg-gray-50 text-gray-800 font-sans min-h-screen flex flex-col" role="application" aria-label="Nayana Arya Foundation Website">
      <Header currentPage={currentPage} onNavigate={handleNavigate} />
      <main className="flex-grow" id="main-content" role="main">
        {renderPage()}
      </main>
      <Footer onNavigate={handleNavigate} />
    </div>
  );
};

export default App;
