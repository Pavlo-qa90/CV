import React, { useState } from 'react';
import { Mail, MessageSquare, Phone, Send, ExternalLink } from 'lucide-react';

export function Contact() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    message: '',
  });
  
  // Состояние для сообщений по каждому полю
  const [fieldMessage, setFieldMessage] = useState<{ [key: string]: string | null }>({
    name: null,
    email: null,
    message: null,
  });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // Handle form submission
    console.log('Form submitted:', formData);
  };

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  const handleFieldFocus = (field: string) => {
    setFieldMessage((prev) => ({
      ...prev,
      [field]: 'This functionality is under development', // Устанавливаем сообщение для соответствующего поля
    }));
    setTimeout(() => {
      setFieldMessage((prev) => ({
        ...prev,
        [field]: null, // Скрываем сообщение через 3 секунды
      }));
    }, 3000);
  };

  const contactInfo = [
    {
      icon: Phone,
      label: 'Phone',
      value: '+38(095)-0-555-314',
      link: 'tel:+380950555314'
    },
    {
      icon: Mail,
      label: 'Email',
      value: 'Medvedskiypa@gmail.com',
      link: 'mailto:Medvedskiypa@gmail.com'
    },
    {
      icon: ExternalLink,
      label: 'LinkedIn',
      value: 'Pavlo Medvedskyi',
      link: 'https://www.linkedin.com/in/pavlo-medvedskyi-74231913b'
    },
    {
      icon: MessageSquare,
      label: 'Telegram',
      value: '@Wisll',
      link: 'https://t.me/Wisll'
    }
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
            {contactInfo.map(({ icon: Icon, label, value, link }) => (
              <a
                key={label}
                href={link}
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center text-gray-300 hover:text-blue-500 transition-colors"
              >
                <Icon className="w-6 h-6 mr-3 text-blue-500" />
                <div>
                  <div className="font-medium">{label}</div>
                  <div>{value}</div>
                </div>
              </a>
            ))}
          </div>
        </div>
        <form onSubmit={handleSubmit} className="space-y-6">
          <div>
            <label htmlFor="name" className="block text-sm font-medium text-gray-300 mb-2">
              Name
            </label>
            <input
              type="text"
              id="name"
              name="name"
              value={formData.name}
              onChange={handleChange}
              onFocus={() => handleFieldFocus('name')}
              required
              className="w-full px-4 py-2 rounded-lg bg-gray-800 border border-gray-700 text-white focus:outline-none focus:ring-2 focus:ring-blue-500"
            />
            {fieldMessage.name && (
              <div className="mt-2 text-yellow-500 text-sm">{fieldMessage.name}</div>
            )}
          </div>
          <div>
            <label htmlFor="email" className="block text-sm font-medium text-gray-300 mb-2">
              Email
            </label>
            <input
              type="email"
              id="email"
              name="email"
              value={formData.email}
              onChange={handleChange}
              onFocus={() => handleFieldFocus('email')} 
              required
              className="w-full px-4 py-2 rounded-lg bg-gray-800 border border-gray-700 text-white focus:outline-none focus:ring-2 focus:ring-blue-500"
            />
            {fieldMessage.email && (
              <div className="mt-2 text-yellow-500 text-sm">{fieldMessage.email}</div>
            )}
          </div>
          <div>
            <label htmlFor="message" className="block text-sm font-medium text-gray-300 mb-2">
              Message
            </label>
            <textarea
              id="message"
              name="message"
              value={formData.message}
              onChange={handleChange}
              onFocus={() => handleFieldFocus('message')} 
              required
              rows={4}
              className="w-full px-4 py-2 rounded-lg bg-gray-800 border border-gray-700 text-white focus:outline-none focus:ring-2 focus:ring-blue-500"
            />
            {fieldMessage.message && (
              <div className="mt-2 text-yellow-500 text-sm">{fieldMessage.message}</div>
            )}
          </div>
          <button
            type="submit"
            className="w-full flex items-center justify-center px-6 py-3 rounded-lg text-white bg-blue-600 hover:bg-blue-700 transition-colors"
          >
            <Send className="w-5 h-5 mr-2" />
            Send Message
          </button>
        </form>
      </div>
    </section>
  );
}
