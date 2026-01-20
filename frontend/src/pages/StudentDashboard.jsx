import { useNavigate } from 'react-router-dom';
import DashboardLayout from '../components/DashboardLayout';
import { Card } from '../components/ui/card';
import { Button } from '../components/ui/button';
import { 
  Users, 
  FileText, 
  Calendar, 
  TrendingUp, 
  UserCircle, 
  ArrowRight,
  Star,
  Clock
} from 'lucide-react';
import { Badge } from '../components/ui/badge';
import { Progress } from '../components/ui/progress';

export default function StudentDashboard() {
  const navigate = useNavigate();
  const user = JSON.parse(localStorage.getItem('user'));

  const stats = [
    { label: 'Mentors Available', value: '245', icon: <Users className="w-6 h-6" />, color: 'bg-blue-500', path: '/alumni' },
    { label: 'ATS Score', value: '78%', icon: <FileText className="w-6 h-6" />, color: 'bg-green-500', path: '/events' },
    { label: 'Upcoming Events', value: '12', icon: <Calendar className="w-6 h-6" />, color: 'bg-purple-500', path: '/events' },
    { label: 'Career Matches', value: '8', icon: <TrendingUp className="w-6 h-6" />, color: 'bg-orange-500', path: '/events' },
  ];

  const recommendedMentors = [
    { name: 'Ram Gupta', role: 'Senior ML Engineer', company: 'TechSolutions Pvt Ltd', expertise: 'Machine Learning, AI', matchScore: 95 },
    { name: 'Rakesh Sharma', role: 'Product Manager', company: 'Innovatech', expertise: 'Product Strategy, UX', matchScore: 88 },
    { name: 'Priya Patel', role: 'Full Stack Developer', company: 'Amazon India', expertise: 'Web Development, Cloud', matchScore: 82 },
  ];

  const upcomingEvents = [
    { title: 'Tech Career Fair 2025', date: 'Jan 15, 2025', type: 'Career' },
    { title: 'Alumni Networking Night', date: 'Jan 20, 2025', type: 'Networking' },
    { title: 'Resume Workshop', date: 'Jan 25, 2025', type: 'Workshop' },
  ];

  const notifications = [
    { text: 'New mentor match found based on your profile', time: '2 hours ago', type: 'success' },
    { text: 'Event registration opening soon!', time: '5 hours ago', type: 'info' },
    { text: 'Complete your profile to get better matches', time: '1 day ago', type: 'warning' },
  ];

  return (
    <DashboardLayout role="student" userName={user?.fullname || "Student"}>
      <div className="space-y-6">
        {/* Welcome Section */}
        <div>
          <h1 className="text-3xl mb-2 text-slate-900 font-bold">Welcome Back, {user?.fullname || 'Student'}!</h1>
          <p className="text-slate-600">Here's your dashboard overview and recommendations</p>
        </div>

        {/* Stats Grid */}
        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-4">
          {stats.map((stat, index) => (
            <Card 
              key={index} 
              className="p-6 hover:shadow-lg transition-shadow cursor-pointer"
              onClick={() => navigate(stat.path)}
            >
              <div className="flex items-start justify-between mb-4">
                <div className={`p-3 rounded-lg ${stat.color} bg-opacity-10`}>
                  <div className={`${stat.color.replace('bg-', 'text-')}`}>
                    {stat.icon}
                  </div>
                </div>
              </div>
              <div className="text-3xl mb-1 text-slate-900 font-bold">{stat.value}</div>
              <div className="text-sm text-slate-600">{stat.label}</div>
            </Card>
          ))}
        </div>

        <div className="grid lg:grid-cols-3 gap-6">
          {/* Quick Actions */}
          <Card className="p-6 lg:col-span-2">
            <h2 className="text-xl mb-4 text-slate-900 font-semibold">Quick Actions</h2>
            <div className="grid sm:grid-cols-2 gap-3">
              <Button 
                variant="outline" 
                className="justify-start h-auto py-4"
                onClick={() => navigate('/alumni')}
              >
                <UserCircle className="w-5 h-5 mr-3 text-blue-600" />
                <div className="text-left">
                  <div className="font-medium">Find a Mentor</div>
                  <div className="text-xs text-slate-500">Browse 245 alumni</div>
                </div>
              </Button>
              
              <Button 
                variant="outline" 
                className="justify-start h-auto py-4"
                onClick={() => navigate('/events')}
              >
                <FileText className="w-5 h-5 mr-3 text-green-600" />
                <div className="text-left">
                  <div className="font-medium">Upload Resume</div>
                  <div className="text-xs text-slate-500">Get ATS score</div>
                </div>
              </Button>
              
              <Button 
                variant="outline" 
                className="justify-start h-auto py-4"
                onClick={() => navigate('/alumni')}
              >
                <Users className="w-5 h-5 mr-3 text-purple-600" />
                <div className="text-left">
                  <div className="font-medium">View Alumni</div>
                  <div className="text-xs text-slate-500">Connect with alumni</div>
                </div>
              </Button>
              
              <Button 
                variant="outline" 
                className="justify-start h-auto py-4"
                onClick={() => navigate('/events')}
              >
                <Calendar className="w-5 h-5 mr-3 text-orange-600" />
                <div className="text-left">
                  <div className="font-medium">Browse Events</div>
                  <div className="text-xs text-slate-500">12 upcoming</div>
                </div>
              </Button>
            </div>
          </Card>

          {/* Notifications Panel */}
          <Card className="p-6">
            <h2 className="text-xl mb-4 text-slate-900 font-semibold">Recent Updates</h2>
            <div className="space-y-3">
              {notifications.map((notif, index) => (
                <div key={index} className="pb-3 border-b last:border-0 last:pb-0">
                  <p className="text-sm text-slate-700 mb-1">{notif.text}</p>
                  <div className="flex items-center gap-1 text-xs text-slate-500">
                    <Clock className="w-3 h-3" />
                    {notif.time}
                  </div>
                </div>
              ))}
            </div>
          </Card>
        </div>

        <div className="grid lg:grid-cols-2 gap-6">
          {/* Recommended Mentors */}
          <Card className="p-6">
            <div className="flex items-center justify-between mb-4">
              <h2 className="text-xl text-slate-900 font-semibold">Recommended Mentors</h2>
              <Button variant="ghost" size="sm" onClick={() => navigate('/alumni')}>
                View All <ArrowRight className="w-4 h-4 ml-1" />
              </Button>
            </div>
            <div className="space-y-4">
              {recommendedMentors.map((mentor, index) => (
                <div key={index} className="p-4 border rounded-lg hover:border-red-600 hover:shadow-md transition-all cursor-pointer">
                  <div className="flex items-start justify-between mb-2">
                    <div className="flex-1">
                      <h3 className="font-medium text-slate-900">{mentor.name}</h3>
                      <p className="text-sm text-slate-600">{mentor.role}</p>
                      <p className="text-sm text-slate-500">{mentor.company}</p>
                    </div>
                    <div className="flex items-center gap-1 text-sm">
                      <Star className="w-4 h-4 text-yellow-500 fill-yellow-500" />
                      <span className="font-medium text-slate-900">{mentor.matchScore}%</span>
                    </div>
                  </div>
                  <div className="flex items-center justify-between">
                    <Badge variant="secondary" className="text-xs">{mentor.expertise.split(',')[0]}</Badge>
                    <Button size="sm" className="bg-red-500 hover:bg-red-600 text-white" onClick={() => navigate('/alumni')}>Connect</Button>
                  </div>
                </div>
              ))}
            </div>
          </Card>

          {/* Upcoming Events */}
          <Card className="p-6">
            <div className="flex items-center justify-between mb-4">
              <h2 className="text-xl text-slate-900 font-semibold">Upcoming Events</h2>
              <Button variant="ghost" size="sm" onClick={() => navigate('/events')}>
                View All <ArrowRight className="w-4 h-4 ml-1" />
              </Button>
            </div>
            <div className="space-y-3">
              {upcomingEvents.map((event, index) => (
                <div key={index} className="p-4 border rounded-lg hover:border-red-600 hover:shadow-md transition-all cursor-pointer">
                  <div className="flex items-start justify-between mb-2">
                    <div>
                      <h3 className="font-medium text-slate-900">{event.title}</h3>
                      <p className="text-sm text-slate-500">{event.date}</p>
                    </div>
                    <Badge variant="outline">{event.type}</Badge>
                  </div>
                  <Button size="sm" className="w-full bg-red-500 hover:bg-red-600 text-white" onClick={() => navigate('/events')}>
                    Register
                  </Button>
                </div>
              ))}
            </div>
          </Card>
        </div>

        {/* Progress Section */}
        <Card className="p-6">
          <h2 className="text-xl mb-4 text-slate-900 font-semibold">Your Career Progress</h2>
          <div className="space-y-4">
            <div>
              <div className="flex items-center justify-between mb-2">
                <span className="text-sm text-slate-700 font-medium">Profile Completeness</span>
                <span className="text-sm text-slate-600">85%</span>
              </div>
              <Progress value={85} className="h-2" />
            </div>
            <div>
              <div className="flex items-center justify-between mb-2">
                <span className="text-sm text-slate-700 font-medium">Resume ATS Score</span>
                <span className="text-sm text-slate-600">78%</span>
              </div>
              <Progress value={78} className="h-2" />
            </div>
            <div>
              <div className="flex items-center justify-between mb-2">
                <span className="text-sm text-slate-700 font-medium">Mentorship Engagement</span>
                <span className="text-sm text-slate-600">60%</span>
              </div>
              <Progress value={60} className="h-2" />
            </div>
          </div>
        </Card>
      </div>
    </DashboardLayout>
  );
}
