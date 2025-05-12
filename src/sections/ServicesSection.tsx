import { useEffect, useRef } from 'react';
import SectionHeading from '../components/SectionHeading';
import Card from '../components/Card';
import { FileText, ClipboardCheck, BarChart3, Clock } from 'lucide-react';
import { useLanguage } from '../contexts/LanguageContext';

const ServicesSection = () => {
  const sectionRef = useRef<HTMLDivElement>(null);
  const { t } = useLanguage();

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

    const cards = document.querySelectorAll('.service-card');
    cards.forEach((card) => {
      observer.observe(card);
    });

    return () => {
      cards.forEach((card) => {
        observer.unobserve(card);
      });
    };
  }, []);

  return (
    <section id="services" className="py-20 bg-gray-50 dark:bg-gray-900" ref={sectionRef}>
      <div className="container mx-auto px-4 md:px-6">
        <SectionHeading
          title={t('services.title')}
          subtitle={t('services.subtitle')}
        />

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          <Card
            className="service-card opacity-0"
            title={t('services.automation.title')}
            description={t('services.automation.description')}
            icon={<FileText className="h-8 w-8" />}
          />
          
          <Card
            className="service-card opacity-0"
            title={t('services.compliance.title')}
            description={t('services.compliance.description')}
            icon={<ClipboardCheck className="h-8 w-8" />}
          />
          
          <Card
            className="service-card opacity-0"
            title={t('services.analytics.title')}
            description={t('services.analytics.description')}
            icon={<BarChart3 className="h-8 w-8" />}
          />
          
          <Card
            className="service-card opacity-0"
            title={t('services.approvals.title')}
            description={t('services.approvals.description')}
            icon={<Clock className="h-8 w-8" />}
          />
        </div>
      </div>
    </section>
  );
};

export default ServicesSection;