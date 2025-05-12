import React, { createContext, useContext, useState } from 'react';

type Language = 'fr' | 'en';

interface LanguageContextType {
  language: Language;
  setLanguage: (lang: Language) => void;
  t: (key: string) => string;
}

const translations = {
  fr: {
    // Navigation
    'nav.services': 'Services',
    'nav.howItWorks': 'Comment ça marche',
    'nav.benefits': 'Avantages',
    'nav.testimonials': 'Témoignages',
    'nav.getStarted': 'Commencer',

    // Hero Section
    'hero.title': 'Accélérez vos Projets Solaires avec',
    'hero.subtitle': 'Automatisez la documentation et les approbations de vos projets solaires. Gagnez du temps, réduisez les erreurs et déployez plus rapidement.',
    'hero.cta': 'Commencer',
    'hero.secondary': 'En savoir plus',
    'hero.trust': 'entreprises solaires nous font confiance',

    // Services Section
    'services.title': 'Nos Services d\'Automatisation Solaire',
    'services.subtitle': 'Optimisez chaque aspect du cycle de vie de vos projets solaires avec nos solutions complètes',
    'services.automation.title': 'Automatisation des Documents',
    'services.automation.description': 'Notre IA extrait et traite automatiquement les données de vos formulaires et documents, réduisant la saisie manuelle de 80%.',
    'services.compliance.title': 'Vérification de Conformité',
    'services.compliance.description': 'Vérifiez automatiquement les projets par rapport aux réglementations locales et aux exigences des services publics pour éviter les rejets coûteux.',
    'services.analytics.title': 'Analyse de Performance',
    'services.analytics.description': 'Surveillez les délais des projets et identifiez les goulots d\'étranglement avec des tableaux de bord de reporting complets.',
    'services.approvals.title': 'Approbations Accélérées',
    'services.approvals.description': 'Réduisez les temps d\'approbation jusqu\'à 70% avec notre processus de soumission optimisé aux autorités et aux services publics.',

    // Process Section
    'process.title': 'Comment Fonctionne SolarExpress',
    'process.subtitle': 'Notre processus optimisé fait passer vos projets solaires de la documentation à l\'approbation en un temps record',
    'process.upload.title': 'Téléchargement des Documents',
    'process.upload.description': 'Téléchargez simplement vos documents et formulaires de projet. Nous prenons en charge tous les formats standard, y compris les PDF, les fichiers CAO et les feuilles de calcul.',
    'process.processing.title': 'Traitement Automatisé',
    'process.processing.description': 'Notre système extrait automatiquement les informations clés, vérifie la conformité aux réglementations locales et prépare les soumissions requises.',
    'process.verification.title': 'Vérification Qualité',
    'process.verification.description': 'Tous les documents subissent des contrôles de qualité automatisés avec une révision humaine optionnelle pour garantir une précision à 100% avant la soumission.',
    'process.approvals.title': 'Approbations Accélérées',
    'process.approvals.description': 'Recevez des dossiers de documentation complets prêts à être soumis, ou laissez-nous gérer l\'ensemble du processus d\'approbation pour vous.',

    // Benefits Section
    'benefits.title': 'Des Avantages Qui Font La Différence',
    'benefits.subtitle': 'Nos clients constatent des améliorations spectaculaires dans leurs processus de projets solaires',
    'benefits.time.title': '75% de temps gagné',
    'benefits.time.description': 'Réduisez le temps de traitement des documents de plusieurs jours à quelques minutes grâce à nos workflows automatisés.',
    'benefits.errors.title': '90% d\'erreurs en moins',
    'benefits.errors.description': 'Éliminez les erreurs humaines dans la saisie des données et le remplissage des formulaires, réduisant considérablement les taux de rejet.',
    'benefits.capacity.title': 'Capacité x2',
    'benefits.capacity.description': 'Doublez la capacité de votre équipe à gérer des projets solaires sans augmenter vos effectifs.',
    'benefits.compliance.title': '100% conforme',
    'benefits.compliance.description': 'Assurez une conformité totale avec les exigences des services publics et des municipalités sur chaque projet.',

    // Stats
    'stats.documents': 'Millions de Documents Traités',
    'stats.projects': 'Projets Solaires Accélérés',
    'stats.satisfaction': 'Satisfaction Client',
    'stats.experience': 'Années d\'Expérience',

    // Testimonials Section
    'testimonials.title': 'Ce Que Disent Nos Clients',
    'testimonials.subtitle': 'Découvrez les retours des professionnels du solaire qui ont transformé leurs opérations avec SolarExpress',
    'testimonials.recommend': 'de nos clients recommandent SolarExpress à leurs collègues',
    'testimonials.quote1': 'SolarExpress a transformé notre processus de gestion de projet. Nous avons réduit notre temps de documentation de 70% et doublé notre capacité de projet.',
    'testimonials.quote2': 'Les fonctionnalités de vérification de conformité nous ont évité de nombreux rejets de projets. Leur plateforme est intuitive et l\'équipe de support est exceptionnelle.',
    'testimonials.quote3': 'En tant que gestionnaire de dizaines d\'installations solaires simultanées, SolarExpress a été un véritable changement pour la productivité et la précision de notre équipe.',
    'testimonials.quote4': 'Nous avons éliminé presque toutes nos erreurs de documentation depuis l\'implémentation de SolarExpress. Le retour sur investissement était évident dès le premier mois.',

    // Contact Section
    'contact.title': 'Démarrez avec SolarExpress',
    'contact.subtitle': 'Contactez-nous pour découvrir comment nous pouvons accélérer vos projets solaires',
    'contact.info': 'Informations de Contact',
    'contact.form.name': 'Nom complet',
    'contact.form.email': 'Adresse email',
    'contact.form.company': 'Entreprise',
    'contact.form.message': 'Message',
    'contact.form.submit': 'Envoyer',
    'contact.success': 'Merci !',
    'contact.success.message': 'Votre message a été reçu. Nous vous contacterons rapidement pour discuter de vos projets solaires.',

    // Footer
    'footer.quickLinks': 'Liens Rapides',
    'footer.company': 'Entreprise',
    'footer.contact': 'Contact',
    'footer.about': 'À propos',
    'footer.careers': 'Carrières',
    'footer.privacy': 'Politique de confidentialité',
    'footer.terms': 'Conditions d\'utilisation',
    'footer.tagline': 'Accélérer la révolution solaire avec des solutions d\'automatisation de pointe.',
    'footer.rights': 'Tous droits réservés.',
  },
  en: {
    // Navigation
    'nav.services': 'Services',
    'nav.howItWorks': 'How It Works',
    'nav.benefits': 'Benefits',
    'nav.testimonials': 'Testimonials',
    'nav.getStarted': 'Get Started',

    // Hero Section
    'hero.title': 'Accelerate Your Solar Projects with',
    'hero.subtitle': 'Automate solar project documentation and approvals. Save time, reduce errors, and deploy renewable energy faster.',
    'hero.cta': 'Get Started',
    'hero.secondary': 'Learn How It Works',
    'hero.trust': 'solar companies trust us',

    // Services Section
    'services.title': 'Our Solar Automation Services',
    'services.subtitle': 'Streamline every aspect of your solar project lifecycle with our comprehensive solutions',
    'services.automation.title': 'Document Automation',
    'services.automation.description': 'Our AI automatically extracts and processes data from your forms and documents, reducing manual entry by 80%.',
    'services.compliance.title': 'Compliance Verification',
    'services.compliance.description': 'Automatically check projects against local regulations and utility requirements to avoid costly rejections.',
    'services.analytics.title': 'Performance Analytics',
    'services.analytics.description': 'Monitor project timelines and identify bottlenecks with comprehensive reporting dashboards.',
    'services.approvals.title': 'Accelerated Approvals',
    'services.approvals.description': 'Reduce approval times by up to 70% with our streamlined submission process to authorities and utilities.',

    // Process Section
    'process.title': 'How SolarExpress Works',
    'process.subtitle': 'Our streamlined process takes your solar projects from documentation to approval in record time',
    'process.upload.title': 'Upload Project Documents',
    'process.upload.description': 'Simply upload your project documents and forms. We support all standard formats including PDFs, CAD files, and spreadsheets.',
    'process.processing.title': 'Automated Processing',
    'process.processing.description': 'Our system automatically extracts key information, verifies compliance with local regulations, and prepares required submissions.',
    'process.verification.title': 'Quality Verification',
    'process.verification.description': 'All documents undergo automated quality checks with optional human review to ensure 100% accuracy before submission.',
    'process.approvals.title': 'Expedited Approvals',
    'process.approvals.description': 'Receive completed documentation packages ready for submission, or let us handle the entire approval process for you.',

    // Benefits Section
    'benefits.title': 'Benefits That Drive Results',
    'benefits.subtitle': 'Our customers see dramatic improvements in their solar project workflows',
    'benefits.time.title': '75% Time Saved',
    'benefits.time.description': 'Reduce documentation processing time from days to minutes with our automated workflows.',
    'benefits.errors.title': '90% Fewer Errors',
    'benefits.errors.description': 'Eliminate human error in data entry and form completion, drastically reducing rejection rates.',
    'benefits.capacity.title': '2x Project Capacity',
    'benefits.capacity.description': 'Double your team\'s capacity to handle solar projects without adding headcount.',
    'benefits.compliance.title': '100% Compliance',
    'benefits.compliance.description': 'Ensure complete compliance with utility and municipality requirements on every project.',

    // Stats
    'stats.documents': 'Million Documents Processed',
    'stats.projects': 'Solar Projects Accelerated',
    'stats.satisfaction': 'Customer Satisfaction',
    'stats.experience': 'Years Industry Experience',

    // Testimonials Section
    'testimonials.title': 'What Our Customers Say',
    'testimonials.subtitle': 'Hear from the solar professionals who have transformed their operations with SolarExpress',
    'testimonials.recommend': 'of our customers recommend SolarExpress to colleagues',
    'testimonials.quote1': 'SolarExpress has transformed our project management process. We\'ve reduced our documentation time by 70% and doubled our project capacity.',
    'testimonials.quote2': 'The compliance verification features alone saved us from multiple project rejections. Their platform is intuitive and the support team is exceptional.',
    'testimonials.quote3': 'As someone managing dozens of solar installations simultaneously, SolarExpress has been a game-changer for our team\'s productivity and accuracy.',
    'testimonials.quote4': 'We\'ve eliminated nearly all our documentation errors since implementing SolarExpress. The ROI was apparent within the first month.',

    // Contact Section
    'contact.title': 'Get Started with SolarExpress',
    'contact.subtitle': 'Reach out to learn how we can accelerate your solar projects',
    'contact.info': 'Contact Information',
    'contact.form.name': 'Full Name',
    'contact.form.email': 'Email Address',
    'contact.form.company': 'Company',
    'contact.form.message': 'Message',
    'contact.form.submit': 'Send Message',
    'contact.success': 'Thank You!',
    'contact.success.message': 'Your message has been received. We\'ll be in touch shortly to discuss how SolarExpress can help with your solar projects.',

    // Footer
    'footer.quickLinks': 'Quick Links',
    'footer.company': 'Company',
    'footer.contact': 'Contact',
    'footer.about': 'About Us',
    'footer.careers': 'Careers',
    'footer.privacy': 'Privacy Policy',
    'footer.terms': 'Terms of Service',
    'footer.tagline': 'Accelerating the solar revolution with cutting-edge automation solutions.',
    'footer.rights': 'All rights reserved.',
  }
};

const LanguageContext = createContext<LanguageContextType | undefined>(undefined);

export const LanguageProvider: React.FC<{ children: React.ReactNode }> = ({ children }) => {
  const [language, setLanguage] = useState<Language>('fr');

  const t = (key: string): string => {
    return translations[language][key] || key;
  };

  return (
    <LanguageContext.Provider value={{ language, setLanguage, t }}>
      {children}
    </LanguageContext.Provider>
  );
};

export const useLanguage = () => {
  const context = useContext(LanguageContext);
  if (context === undefined) {
    throw new Error('useLanguage must be used within a LanguageProvider');
  }
  return context;
};