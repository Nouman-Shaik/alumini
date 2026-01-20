import { useState } from 'react';
import DashboardLayout from '../components/DashboardLayout';
import { Card } from '../components/ui/card';
import { Button } from '../components/ui/button';
import { Input } from '../components/ui/input';
import { Label } from '../components/ui/label';
import { Switch } from '../components/ui/switch';
import { Tabs, TabsContent, TabsList, TabsTrigger } from '../components/ui/tabs';
import { toast } from 'sonner';

export default function SettingsPage() {
  const user = JSON.parse(localStorage.getItem('user'));
  const [accountData, setAccountData] = useState({
    firstName: user?.fullname?.split(' ')[0] || '',
    lastName: user?.fullname?.split(' ')[1] || '',
    email: user?.email || '',
    phone: user?.phonenumber || ''
  });

  const [passwordData, setPasswordData] = useState({
    currentPassword: '',
    newPassword: '',
    confirmPassword: ''
  });

  const [notifications, setNotifications] = useState({
    mentorshipRequests: true,
    eventUpdates: true,
    resumeAnalysis: false,
    weeklyDigest: true
  });

  const [privacy, setPrivacy] = useState({
    profileVisibility: true,
    showContact: false,
    activityStatus: true
  });

  const handleAccountChange = (e) => {
    const { id, value } = e.target;
    setAccountData(prev => ({
      ...prev,
      [id]: value
    }));
  };

  const handlePasswordChange = (e) => {
    const { id, value } = e.target;
    setPasswordData(prev => ({
      ...prev,
      [id]: value
    }));
  };

  const handleSaveAccount = () => {
    if (!accountData.firstName || !accountData.email) {
      toast.error('Please fill in all required fields');
      return;
    }
    toast.success('Account information updated successfully');
  };

  const handleUpdatePassword = () => {
    if (!passwordData.currentPassword || !passwordData.newPassword || !passwordData.confirmPassword) {
      toast.error('Please fill in all password fields');
      return;
    }
    if (passwordData.newPassword !== passwordData.confirmPassword) {
      toast.error('New passwords do not match');
      return;
    }
    if (passwordData.newPassword.length < 6) {
      toast.error('Password must be at least 6 characters');
      return;
    }
    toast.success('Password updated successfully');
    setPasswordData({
      currentPassword: '',
      newPassword: '',
      confirmPassword: ''
    });
  };

  const handleNotificationChange = (key) => {
    setNotifications(prev => ({
      ...prev,
      [key]: !prev[key]
    }));
    toast.success('Notification preferences updated');
  };

  const handlePrivacyChange = (key) => {
    setPrivacy(prev => ({
      ...prev,
      [key]: !prev[key]
    }));
    toast.success('Privacy settings updated');
  };

  return (
    <DashboardLayout role={user?.role} userName={user?.fullname}>
      <div className="space-y-6">
        <div>
          <h1 className="text-3xl mb-2 text-slate-900 font-bold">Settings</h1>
          <p className="text-slate-600">Manage your account preferences and privacy</p>
        </div>

        <Tabs defaultValue="account" className="w-full">
          <TabsList className="grid w-full grid-cols-3">
            <TabsTrigger value="account">Account</TabsTrigger>
            <TabsTrigger value="notifications">Notifications</TabsTrigger>
            <TabsTrigger value="privacy">Privacy</TabsTrigger>
          </TabsList>

          <TabsContent value="account" className="space-y-6 mt-6">
            <Card className="p-6">
              <h3 className="text-lg mb-4 text-slate-900 font-semibold">Account Information</h3>
              <div className="space-y-4">
                <div className="grid md:grid-cols-2 gap-4">
                  <div className="space-y-2">
                    <Label htmlFor="firstName">First Name</Label>
                    <Input 
                      id="firstName" 
                      value={accountData.firstName}
                      onChange={handleAccountChange}
                    />
                  </div>
                  <div className="space-y-2">
                    <Label htmlFor="lastName">Last Name</Label>
                    <Input 
                      id="lastName" 
                      value={accountData.lastName}
                      onChange={handleAccountChange}
                    />
                  </div>
                </div>
                <div className="space-y-2">
                  <Label htmlFor="email">Email</Label>
                  <Input 
                    id="email" 
                    type="email" 
                    value={accountData.email}
                    onChange={handleAccountChange}
                  />
                </div>
                <div className="space-y-2">
                  <Label htmlFor="phone">Phone</Label>
                  <Input 
                    id="phone" 
                    value={accountData.phone}
                    onChange={handleAccountChange}
                  />
                </div>
                <Button 
                  onClick={handleSaveAccount}
                  className="bg-red-500 hover:bg-red-600 text-white"
                >
                  Save Changes
                </Button>
              </div>
            </Card>

            <Card className="p-6">
              <h3 className="text-lg mb-4 text-slate-900 font-semibold">Change Password</h3>
              <div className="space-y-4">
                <div className="space-y-2">
                  <Label htmlFor="currentPassword">Current Password</Label>
                  <Input 
                    id="currentPassword" 
                    type="password"
                    value={passwordData.currentPassword}
                    onChange={handlePasswordChange}
                  />
                </div>
                <div className="space-y-2">
                  <Label htmlFor="newPassword">New Password</Label>
                  <Input 
                    id="newPassword" 
                    type="password"
                    value={passwordData.newPassword}
                    onChange={handlePasswordChange}
                  />
                </div>
                <div className="space-y-2">
                  <Label htmlFor="confirmPassword">Confirm New Password</Label>
                  <Input 
                    id="confirmPassword" 
                    type="password"
                    value={passwordData.confirmPassword}
                    onChange={handlePasswordChange}
                  />
                </div>
                <Button 
                  onClick={handleUpdatePassword}
                  className="bg-red-500 hover:bg-red-600 text-white"
                >
                  Update Password
                </Button>
              </div>
            </Card>
          </TabsContent>

          <TabsContent value="notifications" className="space-y-6 mt-6">
            <Card className="p-6">
              <h3 className="text-lg mb-4 text-slate-900 font-semibold">Email Notifications</h3>
              <div className="space-y-4">
                <div className="flex items-center justify-between">
                  <div>
                    <p className="font-medium text-slate-900">Mentorship Requests</p>
                    <p className="text-sm text-slate-600">Receive emails when mentors respond</p>
                  </div>
                  <Switch 
                    checked={notifications.mentorshipRequests}
                    onCheckedChange={() => handleNotificationChange('mentorshipRequests')}
                  />
                </div>
                <div className="flex items-center justify-between">
                  <div>
                    <p className="font-medium text-slate-900">Event Updates</p>
                    <p className="text-sm text-slate-600">Get notified about upcoming events</p>
                  </div>
                  <Switch 
                    checked={notifications.eventUpdates}
                    onCheckedChange={() => handleNotificationChange('eventUpdates')}
                  />
                </div>
                <div className="flex items-center justify-between">
                  <div>
                    <p className="font-medium text-slate-900">Resume Analysis</p>
                    <p className="text-sm text-slate-600">Updates on resume score improvements</p>
                  </div>
                  <Switch 
                    checked={notifications.resumeAnalysis}
                    onCheckedChange={() => handleNotificationChange('resumeAnalysis')}
                  />
                </div>
                <div className="flex items-center justify-between">
                  <div>
                    <p className="font-medium text-slate-900">Weekly Digest</p>
                    <p className="text-sm text-slate-600">Weekly summary of platform activity</p>
                  </div>
                  <Switch 
                    checked={notifications.weeklyDigest}
                    onCheckedChange={() => handleNotificationChange('weeklyDigest')}
                  />
                </div>
              </div>
            </Card>
          </TabsContent>

          <TabsContent value="privacy" className="space-y-6 mt-6">
            <Card className="p-6">
              <h3 className="text-lg mb-4 text-slate-900 font-semibold">Privacy Settings</h3>
              <div className="space-y-4">
                <div className="flex items-center justify-between">
                  <div>
                    <p className="font-medium text-slate-900">Profile Visibility</p>
                    <p className="text-sm text-slate-600">Make your profile visible to alumni</p>
                  </div>
                  <Switch 
                    checked={privacy.profileVisibility}
                    onCheckedChange={() => handlePrivacyChange('profileVisibility')}
                  />
                </div>
                <div className="flex items-center justify-between">
                  <div>
                    <p className="font-medium text-slate-900">Show Contact Information</p>
                    <p className="text-sm text-slate-600">Display email and phone to verified alumni</p>
                  </div>
                  <Switch 
                    checked={privacy.showContact}
                    onCheckedChange={() => handlePrivacyChange('showContact')}
                  />
                </div>
                <div className="flex items-center justify-between">
                  <div>
                    <p className="font-medium text-slate-900">Activity Status</p>
                    <p className="text-sm text-slate-600">Show when you're active on the platform</p>
                  </div>
                  <Switch 
                    checked={privacy.activityStatus}
                    onCheckedChange={() => handlePrivacyChange('activityStatus')}
                  />
                </div>
              </div>
            </Card>
          </TabsContent>
        </Tabs>
      </div>
    </DashboardLayout>
  );
}
