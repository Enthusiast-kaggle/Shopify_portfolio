import React, { useState } from 'react';
import emailjs from '@emailjs/browser';
import { Mail, MessageCircle, Linkedin, Send, MapPin, Clock } from 'lucide-react';

const Contact: React.FC = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    project: '',
    message: ''
  });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitStatus, setSubmitStatus] = useState<'idle' | 'success' | 'error'>('idle');

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>
  ) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);
    setSubmitStatus('idle');

    // EmailJS configuration
    const serviceId = import.meta.env.VITE_EMAILJS_SERVICE_ID;
    const templateId = import.meta.env.VITE_EMAILJS_TEMPLATE_ID;
    const publicKey = import.meta.env.VITE_EMAILJS_PUBLIC_KEY;

    const templateParams = {
      from_name: formData.name,
      from_email: formData.email,
      project_type: formData.project,
      message: formData.message,
      to_email: 'aboutstore00@gmail.com', // your email
    };

    emailjs
      .send(serviceId, templateId, templateParams, publicKey)
      .then(() => {
        setSubmitStatus('success');
        setFormData({ name: '', email: '', project: '', message: '' });
      })
      .catch((error) => {
        console.error('EmailJS error:', error);
        setSubmitStatus('error');
      })
      .finally(() => {
        setIsSubmitting(false);
      });
  };

  const contactMethods = [
    {
      icon: Mail,
      title: 'Email',
      value: 'aboutstore00@gmail.com',
      link: 'mailto:aboutstore00@gmail.com',
      description: 'Send me an email anytime'
    },
    {
      icon: MessageCircle,
      title: 'WhatsApp',
      value: '+917462957337',
      link: 'https://wa.me/917462957337',
      description: 'Quick chat on WhatsApp'
    },
    {
      icon: Linkedin,
      title: 'LinkedIn',
      value: '/in/ayush-kumar-7248031ab',
      link: 'https://www.linkedin.com/in/ayush-kumar-7248031ab',
      description: 'Connect professionally'
    }
  ];

  return (
    <section id="contact" className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Heading */}
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">
            Let's Work Together
          </h2>
          <div className="w-24 h-1 bg-[#691ead] mx-auto mb-8"></div>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto leading-relaxed">
            Ready to take your e-commerce business to the next level? Get in touch and let's discuss your project.
          </p>
        </div>

        <div className="grid lg:grid-cols-2 gap-12">
          {/* Contact Info */}
          <div>
            <div className="mb-8">
              <h3 className="text-2xl font-bold text-gray-900 mb-6">Get in Touch</h3>
              <p className="text-gray-600 leading-relaxed mb-8">
                I'm always excited to work on new projects and help businesses succeed with their Shopify stores.
                Whether you need a completely new store or want to improve an existing one, I'm here to help.
              </p>
            </div>

            <div className="space-y-6 mb-8">
              {contactMethods.map((method, index) => (
                <a
                  key={index}
                  href={method.link}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center p-4 bg-gray-50 rounded-2xl hover:bg-[#691ead]/5 transition-colors duration-200 group"
                >
                  <div className="flex items-center justify-center w-12 h-12 bg-[#691ead]/10 rounded-xl mr-4 group-hover:bg-[#691ead]/20 transition-colors duration-200">
                    <method.icon className="w-6 h-6 text-[#691ead]" />
                  </div>
                  <div>
                    <h4 className="font-semibold text-gray-900">{method.title}</h4>
                    <p className="text-[#691ead] font-medium">{method.value}</p>
                    <p className="text-sm text-gray-600">{method.description}</p>
                  </div>
                </a>
              ))}
            </div>

            <div className="bg-gray-50 rounded-2xl p-6">
              <div className="flex items-center gap-4 mb-4">
                <div className="flex items-center gap-2 text-gray-600">
                  <MapPin className="w-5 h-5" />
                  <span>Remote Worldwide</span>
                </div>
                <div className="flex items-center gap-2 text-gray-600">
                  <Clock className="w-5 h-5" />
                  <span>EST Timezone</span>
                </div>
              </div>
              <p className="text-gray-600 text-sm">
                I work with clients globally and typically respond within 24 hours during business days.
              </p>
            </div>
          </div>

          {/* Contact Form */}
          <div>
            <form onSubmit={handleSubmit} className="bg-gray-50 rounded-2xl p-8">
              <h3 className="text-2xl font-bold text-gray-900 mb-6">Send a Message</h3>

              <div className="grid md:grid-cols-2 gap-6 mb-6">
                <div>
                  <label htmlFor="name" className="block text-sm font-medium text-gray-700 mb-2">
                    Your Name
                  </label>
                  <input
                    type="text"
                    id="name"
                    name="name"
                    value={formData.name}
                    onChange={handleChange}
                    required
                    className="w-full px-4 py-3 border border-gray-300 rounded-xl focus:ring-2 focus:ring-[#691ead] focus:border-transparent transition-colors duration-200"
                    placeholder="John Doe"
                  />
                </div>
                <div>
                  <label htmlFor="email" className="block text-sm font-medium text-gray-700 mb-2">
                    Email Address
                  </label>
                  <input
                    type="email"
                    id="email"
                    name="email"
                    value={formData.email}
                    onChange={handleChange}
                    required
                    className="w-full px-4 py-3 border border-gray-300 rounded-xl focus:ring-2 focus:ring-[#691ead] focus:border-transparent transition-colors duration-200"
                    placeholder="john@example.com"
                  />
                </div>
              </div>

              <div className="mb-6">
                <label htmlFor="project" className="block text-sm font-medium text-gray-700 mb-2">
                  Project Type
                </label>
                <select
                  id="project"
                  name="project"
                  value={formData.project}
                  onChange={handleChange}
                  required
                  className="w-full px-4 py-3 border border-gray-300 rounded-xl focus:ring-2 focus:ring-[#691ead] focus:border-transparent transition-colors duration-200"
                >
                  <option value="">Select a service</option>
                  <option value="New Shopify Store">New Shopify Store</option>
                  <option value="Store Redesign">Store Redesign</option>
                  <option value="Custom Development">Custom Development</option>
                  <option value="Performance Optimization">Performance Optimization</option>
                  <option value="Ongoing Support">Ongoing Support</option>
                  <option value="Other">Other</option>
                </select>
              </div>

              <div className="mb-8">
                <label htmlFor="message" className="block text-sm font-medium text-gray-700 mb-2">
                  Project Details
                </label>
                <textarea
                  id="message"
                  name="message"
                  value={formData.message}
                  onChange={handleChange}
                  rows={4}
                  required
                  className="w-full px-4 py-3 border border-gray-300 rounded-xl focus:ring-2 focus:ring-[#691ead] focus:border-transparent transition-colors duration-200 resize-none"
                  placeholder="Tell me about your project, goals, timeline, and any specific requirements..."
                />
              </div>

              <button
                type="submit"
                disabled={isSubmitting}
                className="w-full bg-[#691ead] text-white py-4 px-6 rounded-xl hover:bg-[#5a1693] transition-all duration-200 shadow-lg hover:shadow-xl font-semibold flex items-center justify-center gap-3 group disabled:opacity-50 disabled:cursor-not-allowed"
              >
                {isSubmitting ? 'Sending...' : 'Send Message'}
                <Send size={20} className="group-hover:translate-x-1 transition-transform duration-200" />
              </button>

              {submitStatus === 'success' && (
                <div className="mt-4 p-4 bg-green-50 border border-green-200 rounded-xl">
                  <p className="text-green-800 text-center font-medium">
                    ✅ Message sent successfully! I'll get back to you within 24 hours.
                  </p>
                </div>
              )}
              {submitStatus === 'error' && (
                <div className="mt-4 p-4 bg-red-50 border border-red-200 rounded-xl">
                  <p className="text-red-800 text-center font-medium">
                    ❌ Failed to send message. Please try again or contact me directly via email.
                  </p>
                </div>
              )}
            </form>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;
