import { Globe } from 'lucide-react';
import { useLanguage } from '../contexts/LanguageContext';

const LanguageSelector = () => {
  const { language, setLanguage } = useLanguage();

  return (
    <button
      onClick={() => setLanguage(language === 'fr' ? 'en' : 'fr')}
      className="p-2 rounded-full hover:bg-gray-100 dark:hover:bg-gray-800 transition-colors flex items-center space-x-2"
      aria-label="Toggle language"
    >
      <Globe className="h-5 w-5 text-gray-700 dark:text-gray-300" />
      <span className="text-sm font-medium text-gray-700 dark:text-gray-300">
        {language.toUpperCase()}
      </span>
    </button>
  );
};

export default LanguageSelector;