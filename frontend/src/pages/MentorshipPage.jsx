import { useState } from 'react';
import DashboardLayout from '../components/DashboardLayout';
import { Card } from '../components/ui/card';
import { Button } from '../components/ui/button';
import { Tabs, TabsContent, TabsList, TabsTrigger } from '../components/ui/tabs';
import { Badge } from '../components/ui/badge';
import { UserCircle, Star, Clock } from 'lucide-react';
import { toast } from 'sonner';

export default function MentorshipPage() {
  const user = JSON.parse(localStorage.getItem('user'));
  const [requestedMentors, setRequestedMentors] = useState([]);

  const recommendedMentors = [
    { id: 1, name: 'Dr. Seema Nair', role: 'Senior ML Engineer', company: 'TechSolutions Pvt Ltd', match: 95, availability: 'Available' },
    { id: 2, name: 'Manish Mehta', role: 'Product Manager', company: 'Innovatech', match: 88, availability: 'Limited' },
    { id: 3, name: 'Priya Patel', role: 'Full Stack Developer', company: 'Amazon India', match: 82, availability: 'Available' },
    { id: 4, name: 'Rajesh Singh', role: 'DevOps Engineer', company: 'CloudTech Solutions', match: 79, availability: 'Available' },
    { id: 5, name: 'Neha Gupta', role: 'Data Scientist', company: 'DataInsight Inc', match: 85, availability: 'Limited' },
  ];

  const activeMentorships = [
    { mentor: 'Dr. Seema Nair', started: 'Dec 1, 2024', sessions: 3, nextSession: 'Jan 5, 2025', status: 'active' },
    { mentor: 'Amit Sharma', started: 'Nov 15, 2024', sessions: 5, nextSession: 'Jan 3, 2025', status: 'active' },
  ];

  const pendingRequests = [
    { mentor: 'Kavya Iyer', requestedOn: 'Dec 20, 2024', status: 'pending' },
    { mentor: 'Rakesh Kumar', requestedOn: 'Dec 22, 2024', status: 'pending' },
  ];

  const handleRequestMentorship = (mentorName, mentorId) => {
    if (requestedMentors.includes(mentorId)) {
      toast.error('Request already sent to this mentor');
      return;
    }
    setRequestedMentors([...requestedMentors, mentorId]);
    toast.success(`Mentorship request sent to ${mentorName}`);
  };

  const getInitials = (name) => {
    return name.split(' ').map(n => n[0]).join('');
  };

  return (
    <DashboardLayout role={user?.role} userName={user?.fullname}>
      <div className="space-y-6">
        <div>
          <h1 className="text-3xl mb-2 text-slate-900 font-bold">Mentorship Hub</h1>
          <p className="text-slate-600">Connect with experienced alumni for career guidance</p>
        </div>

        <Tabs defaultValue="recommended" className="w-full">
          <TabsList className="grid w-full grid-cols-3">
            <TabsTrigger value="recommended">Recommended</TabsTrigger>
            <TabsTrigger value="active">Active ({activeMentorships.length})</TabsTrigger>
            <TabsTrigger value="requests">Requests ({pendingRequests.length})</TabsTrigger>
          </TabsList>

          <TabsContent value="recommended" className="space-y-4 mt-6">
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-4">
              {recommendedMentors.map((mentor, index) => (
                <Card key={index} className="p-6 hover:shadow-lg transition-shadow">
                  <div className="flex items-center justify-between mb-4">
                    <div className="w-14 h-14 bg-gradient-to-br from-red-600 to-red-400 rounded-full flex items-center justify-center text-white text-lg font-semibold">
                      {getInitials(mentor.name)}
                    </div>
                    <div className="flex items-center gap-1">
                      <Star className="w-5 h-5 text-yellow-500 fill-yellow-500" />
                      <span className="font-semibold text-slate-900">{mentor.match}%</span>
                    </div>
                  </div>
                  <h3 className="font-semibold text-slate-900 mb-1">{mentor.name}</h3>
                  <p className="text-sm text-slate-600 mb-1">{mentor.role}</p>
                  <p className="text-sm text-slate-500 mb-4">{mentor.company}</p>
                  <Badge className={mentor.availability === 'Available' ? 'bg-green-100 text-green-700 border-0 mb-4' : 'bg-yellow-100 text-yellow-700 border-0 mb-4'}>
                    {mentor.availability}
                  </Badge>
                  <Button 
                    className={`w-full mt-4 ${requestedMentors.includes(mentor.id) ? 'bg-gray-400 hover:bg-gray-400' : 'bg-red-500 hover:bg-red-600 text-white'}`}
                    onClick={() => handleRequestMentorship(mentor.name, mentor.id)}
                    disabled={requestedMentors.includes(mentor.id)}
                  >
                    {requestedMentors.includes(mentor.id) ? 'Request Sent' : 'Request Mentorship'}
                  </Button>
                </Card>
              ))}
            </div>
          </TabsContent>

          <TabsContent value="active" className="space-y-4 mt-6">
            {activeMentorships.length > 0 ? (
              activeMentorships.map((mentorship, index) => (
                <Card key={index} className="p-6 hover:shadow-md transition-shadow">
                  <div className="flex items-start justify-between">
                    <div className="flex items-start gap-4 flex-1">
                      <div className="w-12 h-12 bg-gradient-to-br from-red-600 to-red-400 rounded-full flex items-center justify-center text-white font-semibold">
                        {getInitials(mentorship.mentor)}
                      </div>
                      <div className="flex-1">
                        <h3 className="font-semibold text-slate-900">{mentorship.mentor}</h3>
                        <div className="grid sm:grid-cols-3 gap-4 mt-3 text-sm">
                          <div>
                            <p className="text-slate-500">Started</p>
                            <p className="font-medium text-slate-900">{mentorship.started}</p>
                          </div>
                          <div>
                            <p className="text-slate-500">Sessions</p>
                            <p className="font-medium text-slate-900">{mentorship.sessions}</p>
                          </div>
                          <div>
                            <p className="text-slate-500">Next Session</p>
                            <p className="font-medium text-slate-900">{mentorship.nextSession}</p>
                          </div>
                        </div>
                      </div>
                    </div>
                    <Button variant="outline" size="sm">View Details</Button>
                  </div>
                </Card>
              ))
            ) : (
              <Card className="p-8 text-center">
                <p className="text-slate-600">No active mentorships yet. Request mentorship from recommended mentors!</p>
              </Card>
            )}
          </TabsContent>

          <TabsContent value="requests" className="space-y-4 mt-6">
            {pendingRequests.length > 0 ? (
              pendingRequests.map((request, index) => (
                <Card key={index} className="p-6 hover:shadow-md transition-shadow">
                  <div className="flex items-center justify-between">
                    <div className="flex items-center gap-4">
                      <Clock className="w-10 h-10 text-yellow-600" />
                      <div>
                        <h3 className="font-semibold text-slate-900">{request.mentor}</h3>
                        <p className="text-sm text-slate-600">Requested on {request.requestedOn}</p>
                      </div>
                    </div>
                    <Badge className="bg-yellow-100 text-yellow-700 border-0">Pending</Badge>
                  </div>
                </Card>
              ))
            ) : (
              <Card className="p-8 text-center">
                <p className="text-slate-600">No pending requests.</p>
              </Card>
            )}
          </TabsContent>
        </Tabs>
      </div>
    </DashboardLayout>
  );
}
