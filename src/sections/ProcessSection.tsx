import { useState, useEffect } from 'react';
import SectionHeading from '../components/SectionHeading';
import { Upload, Zap, CheckCircle, Download } from 'lucide-react';
import { useLanguage } from '../contexts/LanguageContext';

const ProcessSection = () => {
  const [activeStep, setActiveStep] = useState(1);
  const { t } = useLanguage();

  const steps = [
    {
      id: 1,
      title: t('process.upload.title'),
      description: t('process.upload.description'),
      icon: <Upload className="h-10 w-10" />,
    },
    {
      id: 2,
      title: t('process.processing.title'),
      description: t('process.processing.description'),
      icon: <Zap className="h-10 w-10" />,
    },
    {
      id: 3,
      title: t('process.verification.title'),
      description: t('process.verification.description'),
      icon: <CheckCircle className="h-10 w-10" />,
    },
    {
      id: 4,
      title: t('process.approvals.title'),
      description: t('process.approvals.description'),
      icon: <Download className="h-10 w-10" />,
    },
  ];

  useEffect(() => {
    const interval = setInterval(() => {
      setActiveStep((prev) => (prev === steps.length ? 1 : prev + 1));
    }, 4000);

    return () => clearInterval(interval);
  }, [steps.length]);

  return (
    <section id="how-it-works" className="py-20 bg-white dark:bg-gray-800">
      <div className="container mx-auto px-4 md:px-6">
        <SectionHeading
          title={t('process.title')}
          subtitle={t('process.subtitle')}
        />

        <div className="relative">
          <div className="hidden md:block absolute top-16 left-0 right-0 h-1 bg-gray-200 dark:bg-gray-700">
            <div
              className="h-full bg-primary-600 dark:bg-primary-500 transition-all duration-500"
              style={{ width: `${(activeStep / steps.length) * 100}%` }}
            ></div>
          </div>

          <div className="grid md:grid-cols-4 gap-8 relative z-10">
            {steps.map((step) => (
              <div
                key={step.id}
                className={`bg-white dark:bg-gray-800 rounded-lg p-6 
                  transition-all duration-500 transform 
                  ${activeStep === step.id ? 'scale-105 shadow-xl border-primary-500 border' : 'scale-100 shadow-md'}`}
              >
                <div
                  className={`w-16 h-16 rounded-full flex items-center justify-center mb-4 mx-auto transition-colors duration-300
                    ${
                      activeStep === step.id
                        ? 'bg-primary-100 text-primary-600 dark:bg-primary-900 dark:text-primary-400'
                        : 'bg-gray-100 text-gray-700 dark:bg-gray-700 dark:text-gray-300'
                    }`}
                >
                  {step.icon}
                </div>
                <h3 className="text-xl font-semibold text-center mb-3 text-gray-900 dark:text-white">
                  {step.title}
                </h3>
                <p className="text-gray-600 dark:text-gray-300 text-center">
                  {step.description}
                </p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default ProcessSection;