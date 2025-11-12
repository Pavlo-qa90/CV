import { Helmet } from 'react-helmet-async';
import { useLanguage } from './context/LanguageContext';

export function SEO() {
  const { language } = useLanguage();

  // ======= ENGLISH VERSION =======
  const en = {
    title: 'Pavlo Medvedskyi — Senior QA Engineer | Manual & Automation Testing',
    description:
      'Senior Quality Assurance Engineer with 6+ years of experience ensuring software quality through manual and automation testing, API validation, and test strategy design.',
    keywords:
      'QA Engineer, Quality Assurance, Manual Testing, Automation, Java, TestNG, Selenide, Rest Assured, API Testing, Software QA, Ivano-Frankivsk, Ukraine',
    url: 'https://pavlo-qa90.github.io/CV/',
    image: 'https://pavlo-qa90.github.io/CV/preview.jpg',
  };

  // ======= UKRAINIAN VERSION =======
  const ua = {
    title: 'Павло Медведський — Senior QA Engineer | Ручне та Автоматизоване Тестування',
    description:
      'Старший інженер із забезпечення якості з понад 6-річним досвідом у ручному та автоматизованому тестуванні, API перевірці та розробці тестових стратегій.',
    keywords:
      'QA Engineer, тестувальник, забезпечення якості, ручне тестування, автоматизація, Java, TestNG, Selenide, Rest Assured, тестування API, Івано-Франківськ, Україна',
    url: 'https://pavlo-qa90.github.io/CV/',
    image: 'https://pavlo-qa90.github.io/CV/preview.jpg',
  };

  const seo = language === 'ua' ? ua : en;

  return (
    <Helmet>
      {/* ====== BASIC META ====== */}
      <html lang={language === 'ua' ? 'uk' : 'en'} />
      <title>{seo.title}</title>
      <meta name="description" content={seo.description} />
      <meta name="keywords" content={seo.keywords} />
      <meta name="author" content="Pavlo Medvedskyi" />
      <meta name="robots" content="index, follow" />

      {/* ====== OPEN GRAPH ====== */}
      <meta property="og:type" content="website" />
      <meta property="og:title" content={seo.title} />
      <meta property="og:description" content={seo.description} />
      <meta property="og:url" content={seo.url} />
      <meta property="og:image" content={seo.image} />

      {/* ====== TWITTER ====== */}
      <meta name="twitter:card" content="summary_large_image" />
      <meta name="twitter:title" content={seo.title} />
      <meta name="twitter:description" content={seo.description} />
      <meta name="twitter:image" content={seo.image} />

      {/* ====== STRUCTURED DATA ====== */}
      <script type="application/ld+json">{`
        {
          "@context": "https://schema.org",
          "@type": "Person",
          "name": "Pavlo Medvedskyi",
          "url": "${seo.url}",
          "jobTitle": "Senior QA Engineer",
          "image": "${seo.image}",
          "sameAs": [
            "https://www.linkedin.com/in/pavlo-medvedskyi-74231913b",
            "https://t.me/Wisll"
          ],
          "worksFor": {
            "@type": "Organization",
            "name": "Freelance / Remote QA Projects"
          }
        }
      `}</script>

      {/* ====== FAVICON & THEME ====== */}
      <link rel="icon" type="image/png" href="/favicon.png" />
      <meta name="theme-color" content="#0D1117" />
    </Helmet>
  );
}
