import { useRef, useEffect } from 'react';
import SectionHeading from '../components/SectionHeading';
import { Clock, TrendingUp, Percent, Award } from 'lucide-react';
import { useLanguage } from '../contexts/LanguageContext';

const BenefitsSection = () => {
  const sectionRef = useRef<HTMLDivElement>(null);
  const { t } = useLanguage();

  const benefits = [
    {
      id: 1,
      icon: <Clock className="h-10 w-10" />,
      title: t('benefits.time.title'),
      description: t('benefits.time.description'),
      color: 'from-blue-500 to-primary-500',
    },
    {
      id: 2,
      icon: <Percent className="h-10 w-10" />,
      title: t('benefits.errors.title'),
      description: t('benefits.errors.description'),
      color: 'from-accent-500 to-yellow-500',
    },
    {
      id: 3,
      icon: <TrendingUp className="h-10 w-10" />,
      title: t('benefits.capacity.title'),
      description: t('benefits.capacity.description'),
      color: 'from-pink-500 to-red-500',
    },
    {
      id: 4,
      icon: <Award className="h-10 w-10" />,
      title: t('benefits.compliance.title'),
      description: t('benefits.compliance.description'),
      color: 'from-green-500 to-teal-500',
    },
  ];

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add('animate-fade-in');
          }
        });
      },
      { threshold: 0.1 }
    );

    const elements = document.querySelectorAll('.benefit-item');
    elements.forEach((el) => {
      observer.observe(el);
    });

    return () => {
      elements.forEach((el) => {
        observer.unobserve(el);
      });
    };
  }, []);

  return (
    <section id="benefits" className="py-20 bg-gray-50 dark:bg-gray-900" ref={sectionRef}>
      <div className="container mx-auto px-4 md:px-6">
        <SectionHeading
          title={t('benefits.title')}
          subtitle={t('benefits.subtitle')}
        />

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {benefits.map((benefit, index) => (
            <div
              key={benefit.id}
              className="benefit-item opacity-0 bg-white dark:bg-gray-800 rounded-lg overflow-hidden shadow-md hover:shadow-lg transition-all duration-300"
              style={{ animationDelay: `${index * 200}ms` }}
            >
              <div className={`h-2 bg-gradient-to-r ${benefit.color}`}></div>
              <div className="p-6">
                <div className="mb-4 text-primary-600 dark:text-primary-400">
                  {benefit.icon}
                </div>
                <h3 className="text-xl font-semibold mb-3 text-gray-900 dark:text-white">
                  {benefit.title}
                </h3>
                <p className="text-gray-600 dark:text-gray-300">
                  {benefit.description}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default BenefitsSection;