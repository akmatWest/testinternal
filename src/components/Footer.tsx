import Logo from './Logo';
import { Mail, Phone, MapPin } from 'lucide-react';
import { useLanguage } from '../contexts/LanguageContext';

const Footer = () => {
  const currentYear = new Date().getFullYear();
  const { t } = useLanguage();

  return (
    <footer className="bg-gray-100 dark:bg-gray-800 pt-16 pb-8">
      <div className="container mx-auto px-4 md:px-6">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 mb-12">
          <div>
            <Logo />
            <p className="mt-4 text-gray-600 dark:text-gray-300">
              {t('footer.tagline')}
            </p>
          </div>

          <div>
            <h3 className="font-semibold text-lg mb-4 text-gray-900 dark:text-white">{t('footer.quickLinks')}</h3>
            <ul className="space-y-3">
              <li>
                <a
                  href="#services"
                  className="text-gray-600 hover:text-primary-600 dark:text-gray-300 dark:hover:text-primary-400 transition-colors"
                >
                  {t('nav.services')}
                </a>
              </li>
              <li>
                <a
                  href="#how-it-works"
                  className="text-gray-600 hover:text-primary-600 dark:text-gray-300 dark:hover:text-primary-400 transition-colors"
                >
                  {t('nav.howItWorks')}
                </a>
              </li>
              <li>
                <a
                  href="#benefits"
                  className="text-gray-600 hover:text-primary-600 dark:text-gray-300 dark:hover:text-primary-400 transition-colors"
                >
                  {t('nav.benefits')}
                </a>
              </li>
            </ul>
          </div>

          <div>
            <h3 className="font-semibold text-lg mb-4 text-gray-900 dark:text-white">{t('footer.company')}</h3>
            <ul className="space-y-3">
              <li>
                <a
                  href="#"
                  className="text-gray-600 hover:text-primary-600 dark:text-gray-300 dark:hover:text-primary-400 transition-colors"
                >
                  {t('footer.about')}
                </a>
              </li>
              <li>
                <a
                  href="#"
                  className="text-gray-600 hover:text-primary-600 dark:text-gray-300 dark:hover:text-primary-400 transition-colors"
                >
                  {t('footer.careers')}
                </a>
              </li>
              <li>
                <a
                  href="#"
                  className="text-gray-600 hover:text-primary-600 dark:text-gray-300 dark:hover:text-primary-400 transition-colors"
                >
                  {t('footer.privacy')}
                </a>
              </li>
              <li>
                <a
                  href="#"
                  className="text-gray-600 hover:text-primary-600 dark:text-gray-300 dark:hover:text-primary-400 transition-colors"
                >
                  {t('footer.terms')}
                </a>
              </li>
            </ul>
          </div>

          <div>
            <h3 className="font-semibold text-lg mb-4 text-gray-900 dark:text-white">{t('footer.contact')}</h3>
            <ul className="space-y-3">
              <li className="flex items-start space-x-3">
                <MapPin className="h-5 w-5 text-primary-600 dark:text-primary-400 mt-0.5" />
                <span className="text-gray-600 dark:text-gray-300">
                  11 quai François Mauriac, Paris 75013
                </span>
              </li>
              <li className="flex items-center space-x-3">
                <Phone className="h-5 w-5 text-primary-600 dark:text-primary-400" />
                <span className="text-gray-600 dark:text-gray-300">07 50 57 73 58</span>
              </li>
              <li className="flex items-center space-x-3">
                <Mail className="h-5 w-5 text-primary-600 dark:text-primary-400" />
                <span className="text-gray-600 dark:text-gray-300">contact@solarexpres.com</span>
              </li>
            </ul>
          </div>
        </div>

        <hr className="border-gray-200 dark:border-gray-700 mb-8" />

        <div className="text-center text-gray-600 dark:text-gray-400 text-sm">
          <p>&copy; {currentYear} SolarExpress. {t('footer.rights')}</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;