import { useState, useEffect } from 'react';
import Header from './components/Header';
import Footer from './components/Footer';
import HeroSection from './sections/HeroSection';
import ServicesSection from './sections/ServicesSection';
import ProcessSection from './sections/ProcessSection';
import BenefitsSection from './sections/BenefitsSection';
import ContactSection from './sections/ContactSection';
import ScrollToTop from './components/ScrollToTop';
import { LanguageProvider } from './contexts/LanguageContext';

function App() {
  const [darkMode, setDarkMode] = useState(false);

  useEffect(() => {
    const isDark = window.matchMedia('(prefers-color-scheme: dark)').matches;
    setDarkMode(isDark);
  }, []);

  const toggleDarkMode = () => {
    setDarkMode(!darkMode);
  };

  return (
    <LanguageProvider>
      <div className={`${darkMode ? 'dark' : ''}`}>
        <div className="min-h-screen bg-white text-gray-800 dark:bg-gray-900 dark:text-gray-100 transition-colors duration-300">
          <Header darkMode={darkMode} toggleDarkMode={toggleDarkMode} />
          <main>
            <HeroSection />
            <ServicesSection />
            <ProcessSection />
            <BenefitsSection />
            <ContactSection />
          </main>
          <Footer />
          <ScrollToTop />
        </div>
      </div>
    </LanguageProvider>
  );
}

export default App;