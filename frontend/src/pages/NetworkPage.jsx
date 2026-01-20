import { useNavigate } from 'react-router-dom';
import { Card } from '../components/ui/card';
import { Button } from '../components/ui/button';
import { Input } from '../components/ui/input';
import { Users, MessageCircle, Share2, Briefcase, Search } from 'lucide-react';
import Navbar from '../components/Navbar';
import { Footer } from '../components/Footer';
import { useState } from 'react';

export default function NetworkPage() {
  const navigate = useNavigate();
  const [searchQuery, setSearchQuery] = useState('');

  const networkStats = [
    { label: 'Active Members', value: '17,734', icon: <Users className="w-6 h-6" /> },
    { label: 'Connections Made', value: '45,820', icon: <Share2 className="w-6 h-6" /> },
    { label: 'Job Placements', value: '3,456', icon: <Briefcase className="w-6 h-6" /> },
    { label: 'Conversations', value: '89,234', icon: <MessageCircle className="w-6 h-6" /> },
  ];

  const topMembers = [
    { name: 'Dr. Seema Nair', role: 'Senior ML Engineer', company: 'TechSolutions', connections: 245 },
    { name: 'Manish Mehta', role: 'Product Manager', company: 'Innovatech', connections: 198 },
    { name: 'Priya Patel', role: 'Full Stack Developer', company: 'Amazon', connections: 187 },
    { name: 'Rajesh Singh', role: 'DevOps Engineer', company: 'CloudTech', connections: 156 },
    { name: 'Neha Gupta', role: 'Data Scientist', company: 'DataInsight', connections: 142 },
    { name: 'Amit Sharma', role: 'Backend Engineer', company: 'Google', connections: 135 },
  ];

  const networkBenefits = [
    {
      title: 'Meet Industry Leaders',
      description: 'Connect with experienced professionals and industry experts who can guide your career.'
    },
    {
      title: 'Share Knowledge',
      description: 'Participate in discussions and share your expertise with fellow members.'
    },
    {
      title: 'Find Opportunities',
      description: 'Discover job openings and business opportunities through your network.'
    },
    {
      title: 'Build Relationships',
      description: 'Create lasting professional relationships that can span across your entire career.'
    },
    {
      title: 'Learn & Grow',
      description: 'Access insights, tips, and best practices from successful professionals.'
    },
    {
      title: 'Get Support',
      description: 'Receive mentorship and guidance during critical career transitions.'
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
                Professional Network
              </h1>
              <p className="text-xl text-slate-600 max-w-2xl mx-auto">
                Connect with thousands of professionals, build meaningful relationships, and advance your career
              </p>
            </div>
          </div>
        </div>

        {/* Search Section */}
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
          <div className="relative">
            <Search className="absolute left-3 top-3.5 h-5 w-5 text-gray-400" />
            <Input
              placeholder="Search members by name, role, or company..."
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              className="pl-10 py-6 text-lg"
            />
          </div>
        </div>

        {/* Stats Section */}
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {networkStats.map((stat, index) => (
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

        {/* Top Members */}
        <div className="bg-slate-50 py-16">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <h2 className="text-3xl font-bold text-slate-900 mb-8">Top Connected Members</h2>
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
              {topMembers.map((member, index) => (
                <Card key={index} className="p-6 hover:shadow-lg transition-shadow">
                  <div className="flex items-start gap-4 mb-4">
                    <div className="w-12 h-12 rounded-full bg-gradient-to-br from-red-600 to-red-400 flex items-center justify-center text-white font-semibold">
                      {member.name.split(' ').map(n => n[0]).join('')}
                    </div>
                    <div className="flex-1">
                      <h3 className="font-semibold text-slate-900">{member.name}</h3>
                      <p className="text-sm text-slate-600">{member.role}</p>
                      <p className="text-sm text-slate-500">{member.company}</p>
                    </div>
                  </div>
                  <div className="flex items-center justify-between mb-4">
                    <span className="text-sm text-slate-600">{member.connections} connections</span>
                  </div>
                  <Button 
                    onClick={() => navigate('/login')}
                    className="w-full bg-red-500 hover:bg-red-600 text-white"
                  >
                    Connect
                  </Button>
                </Card>
              ))}
            </div>
          </div>
        </div>

        {/* Benefits Section */}
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
          <h2 className="text-3xl font-bold text-slate-900 mb-12 text-center">Benefits of Networking</h2>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {networkBenefits.map((benefit, index) => (
              <Card key={index} className="p-6 hover:shadow-lg transition-shadow">
                <h3 className="text-xl font-semibold text-slate-900 mb-3">{benefit.title}</h3>
                <p className="text-slate-600">{benefit.description}</p>
              </Card>
            ))}
          </div>
        </div>

        {/* CTA Section */}
        <div className="bg-gradient-to-r from-red-600 to-red-500 py-16 text-white">
          <div className="max-w-4xl mx-auto text-center px-4">
            <h2 className="text-4xl font-bold mb-4">Expand Your Professional Network</h2>
            <p className="text-lg mb-8 text-red-100">Join our thriving community of professionals and unlock endless opportunities</p>
            <div className="flex gap-4 justify-center flex-wrap">
              <Button onClick={() => navigate('/signup')} className="bg-white text-red-600 hover:bg-gray-100">
                Create Account
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
