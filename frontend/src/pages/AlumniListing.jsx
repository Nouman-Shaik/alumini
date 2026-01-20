import { useState } from 'react';
import DashboardLayout from '../components/DashboardLayout';
import { Card } from '../components/ui/card';
import { Button } from '../components/ui/button';
import { Input } from '../components/ui/input';
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from '../components/ui/select';
import { Search, MapPin, Briefcase, GraduationCap, Mail } from 'lucide-react';
import { Badge } from '../components/ui/badge';

export default function AlumniListing() {
  const [searchQuery, setSearchQuery] = useState('');
  const [selectedDepartment, setSelectedDepartment] = useState('all');
  const [selectedCompany, setSelectedCompany] = useState('all');
  
  const alumni = [
    {
      name: 'Ram Gupta',
      role: 'Senior ML Engineer',
      company: 'TechSolutions Pvt Ltd',
      location: 'Hyderabad',
      graduation: '2015',
      department: 'Computer Science',
      expertise: ['Machine Learning', 'AI', 'Python'],
      image: 'RG'
    },
    {
      name: 'Rakesh Sharma',
      role: 'Product Manager',
      company: 'Innovatech',
      location: 'Bangalore',
      graduation: '2016',
      department: 'Computer Science',
      expertise: ['Product Strategy', 'UX Design', 'Agile'],
      image: 'RS'
    },
    {
      name: 'Priya Patel',
      role: 'Full Stack Developer',
      company: 'Amazon India',
      location: 'Bangalore',
      graduation: '2017',
      department: 'Computer Science',
      expertise: ['React', 'Node.js', 'AWS'],
      image: 'PP'
    },
    {
      name: 'Amit Sharma',
      role: 'Data Scientist',
      company: 'DataWorks',
      location: 'Chennai',
      graduation: '2014',
      department: 'Computer Science',
      expertise: ['Data Analysis', 'Statistics', 'R'],
      image: 'AS'
    },
    {
      name: 'Navin Reddy',
      role: 'UX Designer',
      company: 'DesignHub',
      location: 'Hyderabad',
      graduation: '2018',
      department: 'Design',
      expertise: ['UI/UX', 'Figma', 'User Research'],
      image: 'NR'
    },
    {
      name: 'Neha Singh',
      role: 'Cloud Architect',
      company: 'CloudServe',
      location: 'Noida',
      graduation: '2013',
      department: 'Computer Science',
      expertise: ['Cloud', 'DevOps', 'Kubernetes'],
      image: 'NS'
    },
  ];

  // Filter alumni based on search and filters
  const filteredAlumni = alumni.filter(person => {
    const matchesSearch = 
      person.name.toLowerCase().includes(searchQuery.toLowerCase()) ||
      person.company.toLowerCase().includes(searchQuery.toLowerCase()) ||
      person.expertise.some(skill => skill.toLowerCase().includes(searchQuery.toLowerCase()));
    
    const matchesDepartment = selectedDepartment === 'all' || person.department === selectedDepartment;
    const matchesCompany = selectedCompany === 'all' || person.company === selectedCompany;
    
    return matchesSearch && matchesDepartment && matchesCompany;
  });

  const user = JSON.parse(localStorage.getItem('user'));

  return (
    <DashboardLayout role="student" userName={user?.fullname || "Student"}>
      <div className="space-y-6">
        <div>
          <h1 className="text-3xl mb-2 text-slate-900 font-bold">Alumni Directory</h1>
          <p className="text-slate-600">Connect with {alumni.length} alumni from your institution</p>
        </div>

        {/* Search and Filters */}
        <Card className="p-6">
          <div className="grid md:grid-cols-4 gap-4">
            <div className="md:col-span-2">
              <div className="relative">
                <Search className="absolute left-3 top-3 w-4 h-4 text-slate-400" />
                <Input
                  placeholder="Search by name, company, or skills..."
                  className="pl-10"
                  value={searchQuery}
                  onChange={(e) => setSearchQuery(e.target.value)}
                />
              </div>
            </div>
            <Select value={selectedDepartment} onValueChange={setSelectedDepartment}>
              <SelectTrigger>
                <SelectValue placeholder="Department" />
              </SelectTrigger>
              <SelectContent>
                <SelectItem value="all">All Departments</SelectItem>
                <SelectItem value="Computer Science">Computer Science</SelectItem>
                <SelectItem value="Electrical Engineering">Electrical Engineering</SelectItem>
                <SelectItem value="Mechanical Engineering">Mechanical Engineering</SelectItem>
                <SelectItem value="Design">Design</SelectItem>
              </SelectContent>
            </Select>
            <Select value={selectedCompany} onValueChange={setSelectedCompany}>
              <SelectTrigger>
                <SelectValue placeholder="Company" />
              </SelectTrigger>
              <SelectContent>
                <SelectItem value="all">All Companies</SelectItem>
                <SelectItem value="TechSolutions Pvt Ltd">TechSolutions Pvt Ltd</SelectItem>
                <SelectItem value="Innovatech">Innovatech</SelectItem>
                <SelectItem value="Amazon India">Amazon India</SelectItem>
                <SelectItem value="DataWorks">DataWorks</SelectItem>
                <SelectItem value="DesignHub">DesignHub</SelectItem>
                <SelectItem value="CloudServe">CloudServe</SelectItem>
              </SelectContent>
            </Select>
          </div>
        </Card>

        {/* Alumni Grid */}
        {filteredAlumni.length > 0 ? (
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {filteredAlumni.map((person, index) => (
              <Card key={index} className="p-6 hover:shadow-lg transition-shadow">
                <div className="flex items-start gap-4 mb-4">
                  <div className="w-16 h-16 bg-gradient-to-br from-blue-900 to-teal-600 rounded-full flex items-center justify-center text-white text-xl font-semibold">
                    {person.image}
                  </div>
                  <div className="flex-1">
                    <h3 className="font-semibold text-slate-900">{person.name}</h3>
                    <p className="text-sm text-slate-600">{person.role}</p>
                  </div>
                </div>

                <div className="space-y-2 mb-4">
                  <div className="flex items-center gap-2 text-sm text-slate-600">
                    <Briefcase className="w-4 h-4" />
                    <span>{person.company}</span>
                  </div>
                  <div className="flex items-center gap-2 text-sm text-slate-600">
                    <MapPin className="w-4 h-4" />
                    <span>{person.location}</span>
                  </div>
                  <div className="flex items-center gap-2 text-sm text-slate-600">
                    <GraduationCap className="w-4 h-4" />
                    <span>Class of {person.graduation}</span>
                  </div>
                </div>

                <div className="flex flex-wrap gap-2 mb-4">
                  {person.expertise.slice(0, 2).map((skill, i) => (
                    <Badge key={i} variant="secondary" className="text-xs">{skill}</Badge>
                  ))}
                  {person.expertise.length > 2 && (
                    <Badge variant="outline" className="text-xs">+{person.expertise.length - 2}</Badge>
                  )}
                </div>

                <div className="flex gap-2">
                  <Button className="flex-1 bg-red-500 hover:bg-red-600 text-white" size="sm">
                    <Mail className="w-4 h-4 mr-2" />
                    Connect
                  </Button>
                  <Button variant="outline" size="sm">View Profile</Button>
                </div>
              </Card>
            ))}
          </div>
        ) : (
          <Card className="p-12 text-center">
            <p className="text-slate-600 text-lg">No alumni found matching your search criteria.</p>
          </Card>
        )}
      </div>
    </DashboardLayout>
  );
}
