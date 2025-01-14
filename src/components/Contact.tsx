import { useState } from 'react';
import { Mail, MessageSquare, Phone, ExternalLink } from 'lucide-react';

export function Contact() {
  const [visibleContacts, setVisibleContacts] = useState<{ [key: string]: boolean }>({});

  const toggleVisibility = (key: string) => {
    setVisibleContacts((prev) => ({ ...prev, [key]: true }));
  };

  const contactInfo = [
    {
      icon: Phone,
      label: 'Phone',
      value: '+38(095)-0-555-314',
      maskedValue: '***-***-****',
      link: 'tel:+380950555314',
    },
    {
      icon: Mail,
      label: 'Email',
      value: 'Medvedskiypa@gmail.com',
      maskedValue: '****@*****.***',
      link: 'mailto:Medvedskiypa@gmail.com',
    },
    {
      icon: ExternalLink,
      label: 'LinkedIn',
      value: 'Pavlo Medvedskyi',
      maskedValue: 'Pavlo *********',
      link: 'https://www.linkedin.com/in/pavlo-medvedskyi-74231913b',
    },
    {
      icon: MessageSquare,
      label: 'Telegram',
      value: '@Wisll',
      maskedValue: '@****',
      link: 'https://t.me/Wisll',
    },
  ];

  return (
    <section id="contact" className="py-20">
      <h2 className="text-3xl font-bold mb-8">Get in Touch</h2>
      <div className="grid md:grid-cols-2 gap-12">
        <div>
          <p className="text-gray-300 mb-8">
            I'm always interested in hearing about new opportunities and challenges.
            Whether you have a question or just want to say hi, feel free to reach out!
          </p>
          <div className="space-y-6">
            {contactInfo.map(({ icon: Icon, label, value, maskedValue, link } ) => (
              <div
                key={label}
                onClick={() => toggleVisibility(label)}
                className="cursor-pointer flex items-center text-gray-300 hover:text-blue-500 transition-colors"
              >
                <Icon className="w-6 h-6 mr-3 text-blue-500" />
                <div>
                  <div className="font-medium">{label}</div>
                  <div
                    className={`${
                      visibleContacts[label] ? 'text-gray-100' : 'text-gray-400'
                    } hover:translate-y-[-2px] hover:text-blue-400 transition-all duration-300`}
                  >
                    {visibleContacts[label] ? (
                      <a href={link} target="_blank" rel="noopener noreferrer">
                        {value}
                      </a>
                    ) : (
                      maskedValue
                    )}
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
        <form onSubmit={(e) => e.preventDefault()} className="space-y-6">
          {/* Form Implementation */}
        </form>
      </div>
    </section>
  );
}
