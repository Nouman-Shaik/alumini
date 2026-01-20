import { useNavigate } from 'react-router-dom';
import { Card } from '../components/ui/card';
import { Button } from '../components/ui/button';
import { Users, Award, Globe, Zap, ArrowRight } from 'lucide-react';
import Navbar from '../components/Navbar';
import { Footer } from '../components/Footer';

export default function AboutPage() {
  const navigate = useNavigate();

  const stats = [
    { label: 'Active Alumni', value: '5,234', icon: <Users className="w-6 h-6" /> },
    { label: 'Students Connected', value: '12,500', icon: <Globe className="w-6 h-6" /> },
    { label: 'Success Rate', value: '94%', icon: <Award className="w-6 h-6" /> },
    { label: 'Companies', value: '500+', icon: <Zap className="w-6 h-6" /> },
  ];

  const features = [
    {
      title: 'Mentorship Programs',
      description: 'Connect with experienced alumni mentors for personalized career guidance and professional development.'
    },
    {
      title: 'Resume Analysis',
      description: 'Get AI-powered insights on your resume with ATS score analysis and actionable recommendations.'
    },
    {
      title: 'Job Opportunities',
      description: 'Access exclusive job listings and career opportunities from top companies in your field.'
    },
    {
      title: 'Networking Events',
      description: 'Attend virtual and in-person events to network with alumni and industry professionals.'
    },
    {
      title: 'Skill Development',
      description: 'Participate in workshops and training sessions to enhance your professional skills.'
    },
    {
      title: 'Career Guidance',
      description: 'Get expert advice on career paths, salary negotiations, and professional growth strategies.'
    },
  ];

  const values = [
    {
      title: 'Connection',
      description: 'Building meaningful relationships between students, alumni, and industry professionals.'
    },
    {
      title: 'Growth',
      description: 'Empowering individuals to achieve their career and personal development goals.'
    },
    {
      title: 'Excellence',
      description: 'Maintaining the highest standards in mentorship and professional services.'
    },
  ];

  return (
    <>
      <Navbar />
      <div className="min-h-screen bg-white">
        {/* Hero Section */}
        <div className="bg-gradient-to-r from-red-50 to-red-100 py-20">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center">
              <h1 className="text-5xl font-bold text-slate-900 mb-4">
                About Alumnee
              </h1>
              <p className="text-xl text-slate-600 max-w-2xl mx-auto">
                Bridging the gap between students and alumni to foster professional growth and career success
              </p>
            </div>
          </div>
        </div>

        {/* Stats Section */}
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {stats.map((stat, index) => (
              <Card key={index} className="p-6 text-center hover:shadow-lg transition-shadow">
                <div className="flex justify-center mb-4 text-red-500">
                  {stat.icon}
                </div>
                <div className="text-3xl font-bold text-slate-900 mb-2">{stat.value}</div>
                <div className="text-slate-600">{stat.label}</div>
              </Card>
            ))}
          </div>
        </div>

        {/* Mission Section */}
        <div className="bg-slate-50 py-16">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="grid lg:grid-cols-2 gap-12 items-center">
              <div>
                <h2 className="text-4xl font-bold text-slate-900 mb-4">Our Mission</h2>
                <p className="text-lg text-slate-600 mb-4">
                  Alumnee is dedicated to creating a vibrant community that connects students with experienced alumni mentors. We believe in the power of mentorship and professional networking to transform careers and lives.
                </p>
                <p className="text-lg text-slate-600 mb-6">
                  Our platform enables seamless knowledge sharing, skill development, and career advancement opportunities for everyone in our network.
                </p>
                <Button onClick={() => navigate('/signup')} className="bg-red-500 hover:bg-red-600 text-white">
                  Join Our Community <ArrowRight className="w-4 h-4 ml-2" />
                </Button>
              </div>
              <Card className="p-8 bg-gradient-to-br from-red-50 to-red-100">
                <div className="space-y-6">
                  <div>
                    <h3 className="text-xl font-semibold text-slate-900 mb-2">Student Focused</h3>
                    <p className="text-slate-600">We provide tools and connections to help students succeed in their careers.</p>
                  </div>
                  <div>
                    <h3 className="text-xl font-semibold text-slate-900 mb-2">Alumni Empowered</h3>
                    <p className="text-slate-600">Alumni can mentor, guide, and support the next generation of professionals.</p>
                  </div>
                  <div>
                    <h3 className="text-xl font-semibold text-slate-900 mb-2">Community Driven</h3>
                    <p className="text-slate-600">Building a strong network that benefits everyone in our ecosystem.</p>
                  </div>
                </div>
              </Card>
            </div>
          </div>
        </div>

        {/* Features Section */}
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
          <div className="text-center mb-12">
            <h2 className="text-4xl font-bold text-slate-900 mb-4">Our Features</h2>
            <p className="text-xl text-slate-600">Comprehensive tools to support your professional journey</p>
          </div>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {features.map((feature, index) => (
              <Card key={index} className="p-6 hover:shadow-lg transition-shadow">
                <h3 className="text-xl font-semibold text-slate-900 mb-3">{feature.title}</h3>
                <p className="text-slate-600">{feature.description}</p>
              </Card>
            ))}
          </div>
        </div>

        {/* Values Section */}
        <div className="bg-slate-50 py-16">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center mb-12">
              <h2 className="text-4xl font-bold text-slate-900 mb-4">Our Values</h2>
              <p className="text-xl text-slate-600">Principles that guide everything we do</p>
            </div>
            <div className="grid md:grid-cols-3 gap-8">
              {values.map((value, index) => (
                <div key={index} className="text-center">
                  <div className="w-16 h-16 rounded-full bg-red-500 flex items-center justify-center text-white text-2xl font-bold mx-auto mb-4">
                    {index + 1}
                  </div>
                  <h3 className="text-2xl font-semibold text-slate-900 mb-2">{value.title}</h3>
                  <p className="text-slate-600">{value.description}</p>
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* CTA Section */}
        <div className="bg-gradient-to-r from-red-600 to-red-500 py-16 text-white">
          <div className="max-w-4xl mx-auto text-center px-4">
            <h2 className="text-4xl font-bold mb-4">Ready to Transform Your Career?</h2>
            <p className="text-lg mb-8 text-red-100">Join thousands of students and alumni on Alumnee today</p>
            <div className="flex gap-4 justify-center flex-wrap">
              <Button onClick={() => navigate('/signup')} className="bg-white text-red-600 hover:bg-gray-100">
                Sign Up Now
              </Button>
              <Button onClick={() => navigate('/login')} variant="outline" className="text-white border-white hover:bg-white hover:text-red-600">
                Login
              </Button>
            </div>
          </div>
        </div>
      </div>
      <Footer />
    </>
  );
}
