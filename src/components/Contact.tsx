import { useState } from 'react';
import { Mail, MessageSquare, Phone, Send, ExternalLink, Loader2 } from 'lucide-react';
import { useLanguage } from '../context/LanguageContext';

export function Contact() {
  const { t } = useLanguage();

  const [formData, setFormData] = useState({
    name: '',
    email: '',
    message: '',
  });
  const [loading, setLoading] = useState(false);

  const [showPhone, setShowPhone] = useState(false);
  const [showEmail, setShowEmail] = useState(false);

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setLoading(true);

    try {
      const response = await fetch('https://formspree.io/f/xrbrzykq', {
        method: 'POST',
        headers: {
          Accept: 'application/json',
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(formData),
      });

      if (response.ok) {
        alert('Message sent successfully!');
        setFormData({ name: '', email: '', message: '' });
      } else {
        alert('Something went wrong. Please try again later.');
      }
    } catch {
      alert('Network error. Please check your connection.');
    } finally {
      setLoading(false);
    }
  };

  return (
    <section id="contact" className="relative py-24">
      <div className="absolute inset-0 bg-gradient-to-br from-[#6DDCFF]/10 via-transparent to-[#A67DFF]/10 blur-3xl pointer-events-none"></div>

      <div className="relative z-10">
        <h2 className="text-4xl font-bold mb-12 gradient-text text-center md:text-left">
          {t('contact.title')}
        </h2>

        <div className="grid md:grid-cols-2 gap-16">
          <div className="glass-panel p-8 rounded-3xl shadow-xl hover-bloom">
            <p className="text-[#E8ECF5]/90 mb-10 leading-relaxed text-lg tracking-wide">
              {t('contact.description')}
            </p>

            <div className="space-y-6">
              <div
                onClick={() => setShowPhone(true)}
                className="flex items-center cursor-pointer text-[#E8ECF5]/90 hover:text-[#6DDCFF] transition-all duration-200"
              >
                <div className="glass-halo w-12 h-12 flex items-center justify-center mr-4">
                  <Phone className="w-6 h-6 text-[#6DDCFF]" />
                </div>
                <div>
                  <div className="font-semibold">{t('contact.phone')}</div>
                  <div className="text-[#E8ECF5]/70 select-none">
                    {showPhone ? '+38 (095) 0-555-314' : '+38 (095) ***-***'}
                  </div>
                </div>
              </div>

              <div
                onClick={() => setShowEmail(true)}
                className="flex items-center cursor-pointer text-[#E8ECF5]/90 hover:text-[#6DDCFF] transition-all duration-200"
              >
                <div className="glass-halo w-12 h-12 flex items-center justify-center mr-4">
                  <Mail className="w-6 h-6 text-[#6DDCFF]" />
                </div>
                <div>
                  <div className="font-semibold">{t('contact.email')}</div>
                  <div className="text-[#E8ECF5]/70 select-none">
                    {showEmail ? 'Medvedskiypa@gmail.com' : 'M*********@gmail.com'}
                  </div>
                </div>
              </div>

              <a
                href="https://www.linkedin.com/in/pavlo-medvedskyi-74231913b"
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center text-[#E8ECF5]/90 hover:text-[#6DDCFF] transition-all duration-200"
              >
                <div className="glass-halo w-12 h-12 flex items-center justify-center mr-4">
                  <ExternalLink className="w-6 h-6 text-[#6DDCFF]" />
                </div>
                <div>
                  <div className="font-semibold">{t('contact.linkedin')}</div>
                  <div className="text-[#E8ECF5]/70">Pavlo Medvedskyi</div>
                </div>
              </a>

              <a
                href="https://t.me/Wisll"
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center text-[#E8ECF5]/90 hover:text-[#6DDCFF] transition-all duration-200"
              >
                <div className="glass-halo w-12 h-12 flex items-center justify-center mr-4">
                  <MessageSquare className="w-6 h-6 text-[#6DDCFF]" />
                </div>
                <div>
                  <div className="font-semibold">{t('contact.telegram')}</div>
                  <div className="text-[#E8ECF5]/70">@Wisll</div>
                </div>
              </a>
            </div>
          </div>

          <form
            onSubmit={handleSubmit}
            className="glass-panel p-8 rounded-3xl shadow-xl space-y-6 hover-bloom"
          >
            <div>
              <label
                htmlFor="name"
                className="block text-sm font-medium text-[#E8ECF5]/90 mb-2"
              >
                {t('contact.form.name')}
              </label>
              <input
                type="text"
                id="name"
                name="name"
                value={formData.name}
                onChange={handleChange}
                required
                placeholder={t('contact.form.placeholder.name') || 'Your full name'}
                className="w-full px-4 py-3 rounded-2xl bg-transparent border border-white/10 text-white placeholder-[#E8ECF5]/40 focus:outline-none focus:border-[#6DDCFF] backdrop-blur-md transition-all duration-200"
              />
            </div>

            <div>
              <label
                htmlFor="email"
                className="block text-sm font-medium text-[#E8ECF5]/90 mb-2"
              >
                {t('contact.form.email')}
              </label>
              <input
                type="email"
                id="email"
                name="email"
                value={formData.email}
                onChange={handleChange}
                required
                placeholder={t('contact.form.placeholder.email') || 'your@email.com'}
                className="w-full px-4 py-3 rounded-2xl bg-transparent border border-white/10 text-white placeholder-[#E8ECF5]/40 focus:outline-none focus:border-[#6DDCFF] backdrop-blur-md transition-all duration-200"
              />
            </div>

            <div>
              <label
                htmlFor="message"
                className="block text-sm font-medium text-[#E8ECF5]/90 mb-2"
              >
                {t('contact.form.message')}
              </label>
              <textarea
                id="message"
                name="message"
                value={formData.message}
                onChange={handleChange}
                required
                rows={4}
                placeholder={t('contact.form.placeholder.message') || 'Write your message here...'}
                className="w-full px-4 py-3 rounded-2xl bg-transparent border border-white/10 text-white placeholder-[#E8ECF5]/40 focus:outline-none focus:border-[#6DDCFF] backdrop-blur-md transition-all duration-200"
              />
            </div>

            <button
              type="submit"
              disabled={loading}
              className={`w-full flex items-center justify-center px-6 py-3 rounded-full text-white liquid-glass-btn transition-all duration-200 ${
                loading ? 'opacity-50 cursor-not-allowed' : ''
              }`}
            >
              {loading ? (
                <>
                  <Loader2 className="w-5 h-5 mr-2 animate-spin" />
                  Sending...
                </>
              ) : (
                <>
                  <Send className="w-5 h-5 mr-2" />
                  {t('contact.form.send')}
                </>
              )}
            </button>
          </form>
        </div>
      </div>
    </section>
  );
}
