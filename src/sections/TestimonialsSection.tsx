import { useState, useEffect } from 'react';
import SectionHeading from '../components/SectionHeading';
import { ChevronLeft, ChevronRight, Star } from 'lucide-react';
import { useLanguage } from '../contexts/LanguageContext';

const TestimonialsSection = () => {
  const [activeIndex, setActiveIndex] = useState(0);
  const [animating, setAnimating] = useState(false);
  const { t } = useLanguage();

  const testimonials = [
    {
      id: 1,
      name: 'Sarah Johnson',
      role: 'CEO, Sunshine Solar',
      image: 'https://images.pexels.com/photos/1181686/pexels-photo-1181686.jpeg?auto=compress&cs=tinysrgb&w=150',
      quote: t('testimonials.quote1'),
      stars: 5,
    },
    {
      id: 2,
      name: 'Michael Rodriguez',
      role: 'Operations Director, GreenPower Solutions',
      image: 'https://images.pexels.com/photos/614810/pexels-photo-614810.jpeg?auto=compress&cs=tinysrgb&w=150',
      quote: t('testimonials.quote2'),
      stars: 5,
    },
    {
      id: 3,
      name: 'Jennifer Chen',
      role: 'Project Manager, SolarTech',
      image: 'https://images.pexels.com/photos/774909/pexels-photo-774909.jpeg?auto=compress&cs=tinysrgb&w=150',
      quote: t('testimonials.quote3'),
      stars: 4,
    },
    {
      id: 4,
      name: 'David Wilson',
      role: 'Director of Engineering, EcoSolar',
      image: 'https://images.pexels.com/photos/1222271/pexels-photo-1222271.jpeg?auto=compress&cs=tinysrgb&w=150',
      quote: t('testimonials.quote4'),
      stars: 5,
    },
  ];

  useEffect(() => {
    const interval = setInterval(() => {
      nextTestimonial();
    }, 6000);

    return () => clearInterval(interval);
  }, []);

  const nextTestimonial = () => {
    if (animating) return;
    setAnimating(true);
    setActiveIndex((prevIndex) => (prevIndex + 1) % testimonials.length);
    setTimeout(() => setAnimating(false), 500);
  };

  const prevTestimonial = () => {
    if (animating) return;
    setAnimating(true);
    setActiveIndex((prevIndex) => (prevIndex - 1 + testimonials.length) % testimonials.length);
    setTimeout(() => setAnimating(false), 500);
  };

  return (
    <section id="testimonials" className="py-20 bg-white dark:bg-gray-800">
      <div className="container mx-auto px-4 md:px-6">
        <SectionHeading
          title={t('testimonials.title')}
          subtitle={t('testimonials.subtitle')}
        />

        <div className="max-w-4xl mx-auto">
          <div className="relative">
            <div className="relative overflow-hidden rounded-xl bg-gray-50 dark:bg-gray-900">
              {testimonials.map((testimonial, index) => (
                <div
                  key={testimonial.id}
                  className={`transition-all duration-500 absolute inset-0 p-8 md:p-12 ${
                    index === activeIndex
                      ? 'translate-x-0 opacity-100 z-10'
                      : index < activeIndex
                      ? '-translate-x-full opacity-0 z-0'
                      : 'translate-x-full opacity-0 z-0'
                  }`}
                >
                  <div className="flex flex-col md:flex-row items-center md:items-start gap-6">
                    <div className="shrink-0">
                      <img
                        src={testimonial.image}
                        alt={testimonial.name}
                        className="w-20 h-20 rounded-full object-cover border-4 border-white dark:border-gray-800"
                      />
                    </div>
                    <div>
                      <div className="flex mb-3">
                        {[...Array(5)].map((_, i) => (
                          <Star
                            key={i}
                            className={`h-5 w-5 ${
                              i < testimonial.stars
                                ? 'text-accent-500 fill-accent-500'
                                : 'text-gray-300 dark:text-gray-600'
                            }`}
                          />
                        ))}
                      </div>
                      <blockquote className="text-xl md:text-2xl italic mb-6 text-gray-700 dark:text-gray-300">
                        "{testimonial.quote}"
                      </blockquote>
                      <div>
                        <p className="font-semibold text-gray-900 dark:text-white">{testimonial.name}</p>
                        <p className="text-gray-600 dark:text-gray-400">{testimonial.role}</p>
                      </div>
                    </div>
                  </div>
                </div>
              ))}
            </div>

            <button
              onClick={prevTestimonial}
              className="absolute top-1/2 left-2 md:-left-5 transform -translate-y-1/2 bg-white dark:bg-gray-800 rounded-full p-2 shadow-lg hover:bg-gray-100 dark:hover:bg-gray-700 transition-colors z-20"
              aria-label="Previous testimonial"
            >
              <ChevronLeft className="h-6 w-6 text-gray-700 dark:text-gray-300" />
            </button>
            <button
              onClick={nextTestimonial}
              className="absolute top-1/2 right-2 md:-right-5 transform -translate-y-1/2 bg-white dark:bg-gray-800 rounded-full p-2 shadow-lg hover:bg-gray-100 dark:hover:bg-gray-700 transition-colors z-20"
              aria-label="Next testimonial"
            >
              <ChevronRight className="h-6 w-6 text-gray-700 dark:text-gray-300" />
            </button>
          </div>

          <div className="flex justify-center mt-6 space-x-2">
            {testimonials.map((_, index) => (
              <button
                key={index}
                onClick={() => setActiveIndex(index)}
                className={`w-3 h-3 rounded-full transition-colors duration-300 ${
                  index === activeIndex
                    ? 'bg-primary-600 dark:bg-primary-500'
                    : 'bg-gray-300 dark:bg-gray-600 hover:bg-gray-400 dark:hover:bg-gray-500'
                }`}
                aria-label={`Go to testimonial ${index + 1}`}
              ></button>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default TestimonialsSection;