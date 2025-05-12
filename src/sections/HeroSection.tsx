import { useState, useEffect } from 'react';
import Button from '../components/Button';
import { ArrowRight } from 'lucide-react';
import { useLanguage } from '../contexts/LanguageContext';

const HeroSection = () => {
  const [isVisible, setIsVisible] = useState(false);
  const { t } = useLanguage();

  useEffect(() => {
    setIsVisible(true);
  }, []);

  return (
    <section className="pt-24 pb-16 md:pt-32 md:pb-24 overflow-hidden">
      <div className="container mx-auto px-4 md:px-6">
        <div className="flex flex-col lg:flex-row items-center">
          <div 
            className={`w-full lg:w-1/2 mb-12 lg:mb-0 transform transition-all duration-1000 ${
              isVisible ? 'translate-y-0 opacity-100' : 'translate-y-12 opacity-0'
            }`}
          >
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold leading-tight mb-6 text-gray-900 dark:text-white">
              {t('hero.title')} <span className="text-primary-600 dark:text-primary-400">SolarExpress</span>
            </h1>
            <p className="text-xl mb-8 text-gray-700 dark:text-gray-300 max-w-lg">
              {t('hero.subtitle')}
            </p>
            <div className="flex flex-col sm:flex-row space-y-4 sm:space-y-0 sm:space-x-4">
              <Button href="#contact" size="lg">
                {t('hero.cta')} <ArrowRight className="ml-2 h-5 w-5" />
              </Button>
              <Button href="#how-it-works" variant="outline" size="lg">
                {t('hero.secondary')}
              </Button>
            </div>
          </div>

          <div 
            className={`w-full lg:w-1/2 transform transition-all duration-1000 delay-300 ${
              isVisible ? 'translate-y-0 opacity-100' : 'translate-y-12 opacity-0'
            }`}
          >
            <div className="relative">
              <div className="absolute -top-10 -left-10 w-40 h-40 bg-primary-200 dark:bg-primary-900/30 rounded-full filter blur-3xl opacity-50"></div>
              <div className="absolute -bottom-10 -right-10 w-40 h-40 bg-accent-200 dark:bg-accent-900/30 rounded-full filter blur-3xl opacity-50"></div>
              <img 
                src="https://images.pexels.com/photos/9875441/pexels-photo-9875441.jpeg?auto=compress&cs=tinysrgb&w=1200"
                alt="Solar Panel Installation" 
                className="rounded-xl shadow-xl relative z-10 w-full object-cover"
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;