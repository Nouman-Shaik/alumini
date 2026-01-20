import { useState } from 'react';
import { Card } from '../components/ui/card';
import { Button } from '../components/ui/button';
import { Input } from '../components/ui/input';
import { Mail, Phone, MapPin, Send } from 'lucide-react';
import Navbar from '../components/Navbar';
import { Footer } from '../components/Footer';
import { toast } from 'sonner';

export default function ContactPage() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    subject: '',
    message: ''
  });
  const [isSubmitting, setIsSubmitting] = useState(false);

  const contactInfo = [
    {
      icon: <Mail className="w-6 h-6" />,
      title: 'Email',
      details: 'contact@alumnee.com',
      link: 'mailto:contact@alumnee.com'
    },
    {
      icon: <Phone className="w-6 h-6" />,
      title: 'Phone',
      details: '+1 (555) 123-4567',
      link: 'tel:+15551234567'
    },
    {
      icon: <MapPin className="w-6 h-6" />,
      title: 'Address',
      details: '123 Education Street, Tech City, TC 12345',
      link: '#'
    },
  ];

  const faqs = [
    {
      question: 'How do I sign up as a student?',
      answer: 'Click the Sign Up button, select "Student" as your role, and fill in your details. You\'ll get instant access to mentorship programs and alumni network.'
    },
    {
      question: 'How can alumni register as mentors?',
      answer: 'Alumni can sign up with their alumni email, complete their profile, and specify their expertise. Our team reviews and approves mentor applications.'
    },
    {
      question: 'Is there a membership fee?',
      answer: 'No! Alumnee is completely free for both students and alumni. We believe in making mentorship accessible to everyone.'
    },
    {
      question: 'How does the mentorship matching work?',
      answer: 'Our AI-powered system matches students with mentors based on career goals, skills, industry interest, and availability. Both parties can also manually connect.'
    },
    {
      question: 'Can I use Alumnee on mobile?',
      answer: 'Yes! Our platform is fully responsive and works seamlessly on desktop, tablet, and mobile devices.'
    },
    {
      question: 'How do I report inappropriate behavior?',
      answer: 'You can report concerns directly through the platform or email our support team at support@alumnee.com. We take community safety seriously.'
    },
  ];

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: value
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    
    if (!formData.name || !formData.email || !formData.subject || !formData.message) {
      toast.error('Please fill in all fields');
      return;
    }

    setIsSubmitting(true);
    
    setTimeout(() => {
      toast.success('Message sent successfully! We\'ll get back to you soon.');
      setFormData({ name: '', email: '', subject: '', message: '' });
      setIsSubmitting(false);
    }, 1500);
  };

  return (
    <>
      <Navbar />
      <div className="min-h-screen bg-white">
        {/* Hero Section */}
        <div className="bg-gradient-to-r from-red-50 to-red-100 py-20">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center">
              <h1 className="text-5xl font-bold text-slate-900 mb-4">
                Get In Touch
              </h1>
              <p className="text-xl text-slate-600 max-w-2xl mx-auto">
                Have questions? We'd love to hear from you. Send us a message and we'll respond as soon as possible.
              </p>
            </div>
          </div>
        </div>

        {/* Contact Info Cards */}
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
          <div className="grid md:grid-cols-3 gap-8 mb-16">
            {contactInfo.map((info, index) => (
              <a key={index} href={info.link} className="block">
                <Card className="p-8 text-center hover:shadow-lg transition-shadow cursor-pointer h-full">
                  <div className="flex justify-center mb-4 text-red-500">
                    {info.icon}
                  </div>
                  <h3 className="text-xl font-semibold text-slate-900 mb-2">{info.title}</h3>
                  <p className="text-slate-600">{info.details}</p>
                </Card>
              </a>
            ))}
          </div>

          {/* Contact Form */}
          <div className="grid lg:grid-cols-2 gap-12 mb-16">
            <Card className="p-8">
              <h2 className="text-2xl font-bold text-slate-900 mb-6">Send us a Message</h2>
              <form onSubmit={handleSubmit} className="space-y-4">
                <div>
                  <label className="block text-sm font-medium text-slate-700 mb-2">
                    Full Name
                  </label>
                  <Input
                    type="text"
                    name="name"
                    value={formData.name}
                    onChange={handleChange}
                    placeholder="John Doe"
                    className="w-full"
                  />
                </div>
                <div>
                  <label className="block text-sm font-medium text-slate-700 mb-2">
                    Email
                  </label>
                  <Input
                    type="email"
                    name="email"
                    value={formData.email}
                    onChange={handleChange}
                    placeholder="john@example.com"
                    className="w-full"
                  />
                </div>
                <div>
                  <label className="block text-sm font-medium text-slate-700 mb-2">
                    Subject
                  </label>
                  <Input
                    type="text"
                    name="subject"
                    value={formData.subject}
                    onChange={handleChange}
                    placeholder="How can we help?"
                    className="w-full"
                  />
                </div>
                <div>
                  <label className="block text-sm font-medium text-slate-700 mb-2">
                    Message
                  </label>
                  <textarea
                    name="message"
                    value={formData.message}
                    onChange={handleChange}
                    placeholder="Your message here..."
                    rows={5}
                    className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-red-500"
                  />
                </div>
                <Button
                  type="submit"
                  disabled={isSubmitting}
                  className="w-full bg-red-500 hover:bg-red-600 text-white"
                >
                  {isSubmitting ? 'Sending...' : 'Send Message'}
                  <Send className="w-4 h-4 ml-2" />
                </Button>
              </form>
            </Card>

            <Card className="p-8 bg-gradient-to-br from-red-50 to-red-100">
              <h2 className="text-2xl font-bold text-slate-900 mb-6">Quick Info</h2>
              <div className="space-y-6">
                <div>
                  <h3 className="font-semibold text-slate-900 mb-2">Response Time</h3>
                  <p className="text-slate-600">We typically respond to inquiries within 24 hours on business days.</p>
                </div>
                <div>
                  <h3 className="font-semibold text-slate-900 mb-2">Business Hours</h3>
                  <p className="text-slate-600">Monday - Friday: 9:00 AM - 6:00 PM (EST)</p>
                  <p className="text-slate-600">Saturday - Sunday: 10:00 AM - 4:00 PM (EST)</p>
                </div>
                <div>
                  <h3 className="font-semibold text-slate-900 mb-2">Support Topics</h3>
                  <ul className="text-slate-600 space-y-1">
                    <li>• Account & Registration</li>
                    <li>• Technical Support</li>
                    <li>• Mentorship Inquiries</li>
                    <li>• General Feedback</li>
                  </ul>
                </div>
              </div>
            </Card>
          </div>

          {/* FAQ Section */}
          <div className="mb-16">
            <h2 className="text-3xl font-bold text-slate-900 mb-8 text-center">Frequently Asked Questions</h2>
            <div className="grid md:grid-cols-2 gap-6">
              {faqs.map((faq, index) => (
                <Card key={index} className="p-6 hover:shadow-lg transition-shadow">
                  <h3 className="text-lg font-semibold text-slate-900 mb-2">{faq.question}</h3>
                  <p className="text-slate-600">{faq.answer}</p>
                </Card>
              ))}
            </div>
          </div>
        </div>

        {/* CTA Section */}
        <div className="bg-gradient-to-r from-red-600 to-red-500 py-16 text-white">
          <div className="max-w-4xl mx-auto text-center px-4">
            <h2 className="text-4xl font-bold mb-4">Still Have Questions?</h2>
            <p className="text-lg mb-8 text-red-100">Check out our help center or contact our support team directly</p>
            <Button className="bg-white text-red-600 hover:bg-gray-100">
              Visit Help Center
            </Button>
          </div>
        </div>
      </div>
      <Footer />
    </>
  );
}
