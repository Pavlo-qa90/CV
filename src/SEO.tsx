import { Helmet } from 'react-helmet-async';
import { useLanguage } from './context/LanguageContext';

export function SEO() {
  const { language } = useLanguage();
  const siteUrl = 'https://pavlo-qa90.github.io/CV/';
  const previewImage = `${siteUrl}images/Pavlo_medvedskyi.jpg`;
  const fullName = 'Pavlo Medvedskyi';

  // ======= ENGLISH VERSION =======
  const en = {
    title: 'Pavlo Medvedskyi — Senior Manual QA Engineer | QA Engineer Resume',
    description:
      'Senior Manual QA Engineer (Senior QA / QA Engineer) with 6+ years of experience in manual testing, API testing, regression testing, and end-to-end quality assurance.',
    keywords:
      'Senior QA Engineer, Senior Manual QA Engineer, Manual QA, QA Engineer, Quality Assurance Engineer, Software Tester, API Testing, Regression Testing, Test Case Design, Manual Testing, Ivano-Frankivsk, Ukraine',
    url: siteUrl,
    image: previewImage,
    locale: 'en_US',
  };

  // ======= UKRAINIAN VERSION =======
  const ua = {
    title: 'Павло Медведський — Senior Manual QA Engineer | QA Engineer Resume',
    description:
      'Старший інженер із забезпечення якості (Senior QA / Senior Manual QA Engineer) з понад 6-річним досвідом у manual QA, API testing, regression testing та end-to-end quality assurance.',
    keywords:
      'Senior QA Engineer, Senior Manual QA Engineer, Manual QA, QA Engineer, тестувальник, забезпечення якості, ручне тестування, тестування API, regression testing, test case design, Івано-Франківськ, Україна',
    url: siteUrl,
    image: previewImage,
    locale: 'uk_UA',
  };

  const seo = language === 'ua' ? ua : en;
  const siteName = language === 'ua' ? 'Резюме Павла Медведського' : `${fullName} Resume`;
  const inLanguage = language === 'ua' ? 'uk-UA' : 'en-US';

  const personJsonLd = {
    '@context': 'https://schema.org',
    '@type': 'Person',
    '@id': `${siteUrl}#person`,
    name: fullName,
    url: siteUrl,
    image: seo.image,
    jobTitle: 'Senior Quality Assurance Engineer',
    knowsLanguage: ['en', 'uk'],
    knowsAbout: [
      'Senior QA Engineer',
      'Senior Manual QA Engineer',
      'Manual QA',
      'Quality Assurance',
      'API Testing',
      'Regression Testing',
      'Test Case Design',
      'Software Testing',
    ],
    sameAs: [
      'https://www.linkedin.com/in/pavlo-medvedskyi-74231913b',
      'https://github.com/Pavlo-qa90',
      'https://t.me/Wisll',
    ],
    worksFor: {
      '@type': 'Organization',
      name: 'Freelance / Remote QA Projects',
    },
  };

  const websiteJsonLd = {
    '@context': 'https://schema.org',
    '@type': 'WebSite',
    '@id': `${siteUrl}#website`,
    url: siteUrl,
    name: siteName,
    inLanguage,
    publisher: {
      '@id': `${siteUrl}#person`,
    },
  };

  const webpageJsonLd = {
    '@context': 'https://schema.org',
    '@type': 'WebPage',
    '@id': `${siteUrl}#webpage`,
    url: siteUrl,
    name: seo.title,
    description: seo.description,
    inLanguage,
    about: [
      'Senior QA Engineer',
      'Senior Manual QA Engineer',
      'Manual QA',
      'QA Engineer',
      'Quality Assurance',
    ],
    mainEntity: {
      '@id': `${siteUrl}#person`,
    },
  };

  return (
    <Helmet>
      {/* ====== BASIC META ====== */}
      <html lang={language === 'ua' ? 'uk' : 'en'} />
      <title>{seo.title}</title>
      <link rel="canonical" href={seo.url} />
      <link rel="alternate" hrefLang="en" href={siteUrl} />
      <link rel="alternate" hrefLang="uk" href={siteUrl} />
      <link rel="alternate" hrefLang="x-default" href={siteUrl} />
      <meta name="description" content={seo.description} />
      <meta name="keywords" content={seo.keywords} />
      <meta name="author" content={fullName} />
      <meta name="robots" content="index, follow, max-image-preview:large, max-snippet:-1, max-video-preview:-1" />
      <meta name="googlebot" content="index, follow, max-image-preview:large, max-snippet:-1, max-video-preview:-1" />
      <meta name="format-detection" content="telephone=no" />
      <meta name="referrer" content="strict-origin-when-cross-origin" />

      {/* ====== OPEN GRAPH ====== */}
      <meta property="og:type" content="website" />
      <meta property="og:site_name" content={siteName} />
      <meta property="og:locale" content={seo.locale} />
      <meta property="og:locale:alternate" content={language === 'ua' ? 'en_US' : 'uk_UA'} />
      <meta property="og:title" content={seo.title} />
      <meta property="og:description" content={seo.description} />
      <meta property="og:url" content={seo.url} />
      <meta property="og:image" content={seo.image} />
      <meta property="og:image:secure_url" content={seo.image} />
      <meta property="og:image:type" content="image/jpeg" />
      <meta property="og:image:width" content="1600" />
      <meta property="og:image:height" content="760" />
      <meta property="og:image:alt" content={fullName} />

      {/* ====== TWITTER ====== */}
      <meta name="twitter:card" content="summary_large_image" />
      <meta name="twitter:site" content="@Pavlo_qa90" />
      <meta name="twitter:creator" content="@Pavlo_qa90" />
      <meta name="twitter:title" content={seo.title} />
      <meta name="twitter:description" content={seo.description} />
      <meta name="twitter:image" content={seo.image} />
      <meta name="twitter:image:alt" content={fullName} />

      {/* ====== STRUCTURED DATA ====== */}
      <script type="application/ld+json">{JSON.stringify(personJsonLd)}</script>
      <script type="application/ld+json">{JSON.stringify(websiteJsonLd)}</script>
      <script type="application/ld+json">{JSON.stringify(webpageJsonLd)}</script>

      {/* ====== FAVICON & THEME ====== */}
      <link rel="icon" type="image/png" href={`${import.meta.env.BASE_URL}images/favicon2.png`} />
      <link rel="apple-touch-icon" href={`${import.meta.env.BASE_URL}images/favicon2.png`} />
      <meta name="theme-color" content="#0D1117" />
    </Helmet>
  );
}
