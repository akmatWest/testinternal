import { useState } from 'react';
import SectionHeading from '../components/SectionHeading';
import Button from '../components/Button';
import { Send, CheckCircle } from 'lucide-react';
import { useLanguage } from '../contexts/LanguageContext';
import { supabase } from '../lib/supabase';

const ContactSection = () => {
  const { t } = useLanguage();
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    company: '',
    message: '',
  });

  const [submitted, setSubmitted] = useState(false);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState<string | null>(null);

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setLoading(true);
    setError(null);
    
    try {
      const { error } = await supabase
        .from('contacts')
        .insert([formData]);

      if (error) throw error;

      setSubmitted(true);
      setFormData({ name: '', email: '', company: '', message: '' });
    } catch (err) {
      setError('An error occurred while submitting the form. Please try again.');
      console.error('Error submitting form:', err);
    } finally {
      setLoading(false);
    }
  };

  return (
    <section id="contact" className="py-20 bg-gray-50 dark:bg-gray-900">
      <div className="container mx-auto px-4 md:px-6">
        <SectionHeading
          title={t('contact.title')}
          subtitle={t('contact.subtitle')}
        />

        <div className="max-w-4xl mx-auto bg-white dark:bg-gray-800 rounded-xl overflow-hidden shadow-xl">
          <div className="grid md:grid-cols-5">
            <div className="md:col-span-2 bg-primary-600 dark:bg-primary-700 text-white p-8">
              <h3 className="text-2xl font-bold mb-6">{t('contact.info')}</h3>
              <p className="mb-8">
                {t('contact.subtitle')}
              </p>
              
              <ul className="space-y-6">
                <li>
                  <p className="font-semibold">Email</p>
                  <p>contact@solarexpres.com</p>
                </li>
                <li>
                  <p className="font-semibold">Phone</p>
                  <p>07 50 57 73 58</p>
                </li>
                <li>
                  <p className="font-semibold">Address</p>
                  <p>11 quai François Mauriac, Paris 75013</p>
                </li>
              </ul>
            </div>
            
            <div className="md:col-span-3 p-8">
              {submitted ? (
                <div className="h-full flex flex-col items-center justify-center text-center p-6">
                  <div className="text-primary-600 dark:text-primary-400 mb-4">
                    <CheckCircle className="h-16 w-16 mx-auto" />
                  </div>
                  <h3 className="text-2xl font-bold mb-2 text-gray-900 dark:text-white">
                    {t('contact.success')}
                  </h3>
                  <p className="text-gray-600 dark:text-gray-300 mb-6">
                    {t('contact.success.message')}
                  </p>
                  <Button onClick={() => setSubmitted(false)}>{t('contact.form.submit')}</Button>
                </div>
              ) : (
                <form onSubmit={handleSubmit}>
                  {error && (
                    <div className="mb-4 p-4 bg-red-50 dark:bg-red-900/20 text-red-600 dark:text-red-400 rounded-lg">
                      {error}
                    </div>
                  )}
                  <div className="grid gap-6 mb-6 md:grid-cols-2">
                    <div>
                      <label
                        htmlFor="name"
                        className="block mb-2 text-sm font-medium text-gray-900 dark:text-white"
                      >
                        {t('contact.form.name')}
                      </label>
                      <input
                        type="text"
                        id="name"
                        name="name"
                        value={formData.name}
                        onChange={handleChange}
                        className="bg-gray-50 dark:bg-gray-700 border border-gray-300 dark:border-gray-600 text-gray-900 dark:text-white text-sm rounded-lg focus:ring-primary-500 focus:border-primary-500 block w-full p-2.5"
                        placeholder="John Smith"
                        required
                      />
                    </div>
                    <div>
                      <label
                        htmlFor="email"
                        className="block mb-2 text-sm font-medium text-gray-900 dark:text-white"
                      >
                        {t('contact.form.email')}
                      </label>
                      <input
                        type="email"
                        id="email"
                        name="email"
                        value={formData.email}
                        onChange={handleChange}
                        className="bg-gray-50 dark:bg-gray-700 border border-gray-300 dark:border-gray-600 text-gray-900 dark:text-white text-sm rounded-lg focus:ring-primary-500 focus:border-primary-500 block w-full p-2.5"
                        placeholder="name@company.com"
                        required
                      />
                    </div>
                  </div>
                  <div className="mb-6">
                    <label
                      htmlFor="company"
                      className="block mb-2 text-sm font-medium text-gray-900 dark:text-white"
                    >
                      {t('contact.form.company')}
                    </label>
                    <input
                      type="text"
                      id="company"
                      name="company"
                      value={formData.company}
                      onChange={handleChange}
                      className="bg-gray-50 dark:bg-gray-700 border border-gray-300 dark:border-gray-600 text-gray-900 dark:text-white text-sm rounded-lg focus:ring-primary-500 focus:border-primary-500 block w-full p-2.5"
                      placeholder="Your Company"
                      required
                    />
                  </div>
                  <div className="mb-6">
                    <label
                      htmlFor="message"
                      className="block mb-2 text-sm font-medium text-gray-900 dark:text-white"
                    >
                      {t('contact.form.message')}
                    </label>
                    <textarea
                      id="message"
                      name="message"
                      value={formData.message}
                      onChange={handleChange}
                      rows={4}
                      className="bg-gray-50 dark:bg-gray-700 border border-gray-300 dark:border-gray-600 text-gray-900 dark:text-white text-sm rounded-lg focus:ring-primary-500 focus:border-primary-500 block w-full p-2.5"
                      placeholder="Tell us about your solar projects and how we can help..."
                      required
                    ></textarea>
                  </div>
                  <Button type="submit" size="lg" disabled={loading}>
                    {loading ? (
                      <span className="flex items-center">
                        <svg className="animate-spin -ml-1 mr-3 h-5 w-5 text-white" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24">
                          <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4"></circle>
                          <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"></path>
                        </svg>
                        {t('contact.form.submit')}...
                      </span>
                    ) : (
                      <span className="flex items-center">
                        {t('contact.form.submit')} <Send className="ml-2 h-5 w-5" />
                      </span>
                    )}
                  </Button>
                </form>
              )}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ContactSection;