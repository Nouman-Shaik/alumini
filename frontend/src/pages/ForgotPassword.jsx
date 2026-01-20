import { useState } from 'react';
import { Link } from 'react-router-dom';
import { Mail, ArrowLeft, CheckCircle2 } from 'lucide-react';
import { Button } from '../components/ui/button';
import { Input } from '../components/ui/input';
import { Label } from '../components/ui/label';
import { Card } from '../components/ui/card';
import Navbar from '../components/Navbar';
import { Footer } from '../components/Footer';

export default function ForgotPasswordPage() {
  const [emailSent, setEmailSent] = useState(false);
  const [email, setEmail] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();
    // TODO: Connect with backend to send reset email
    if (email) {
      setEmailSent(true);
    }
  };

  return (
    <>
      <Navbar />
      <div className="min-h-screen bg-gradient-to-br from-red-50 to-slate-100 flex items-center justify-center p-4">
        <Card className="w-full max-w-md p-8 shadow-lg">
          <div className="text-center mb-8">
            <div className="flex items-center justify-center gap-2 mb-4">
              <h1 className="text-2xl font-bold tracking-tight">
                Alumn<span className="text-red-500 text-3xl">ee</span>
              </h1>
            </div>
            <h2 className="text-3xl mb-2 text-slate-900 font-bold">Forgot Password?</h2>
            <p className="text-slate-600">
              {emailSent 
                ? "Check your email for reset instructions" 
                : "Enter your email to receive reset instructions"}
            </p>
          </div>

          {emailSent ? (
            <div className="text-center space-y-6">
              <div className="w-16 h-16 bg-green-100 rounded-full flex items-center justify-center mx-auto">
                <CheckCircle2 className="w-8 h-8 text-green-600" />
              </div>
              <div className="space-y-2">
                <p className="text-slate-700 font-medium">
                  Password reset instructions have been sent!
                </p>
                <p className="text-sm text-slate-500">
                  Please check your inbox and follow the link to reset your password.
                </p>
              </div>
              <Link to="/login">
                <Button className="w-full bg-red-500 hover:bg-red-600 text-white">
                  <ArrowLeft className="w-4 h-4 mr-2" />
                  Back to Login
                </Button>
              </Link>
            </div>
          ) : (
            <form onSubmit={handleSubmit} className="space-y-5">
              <div className="space-y-2">
                <Label htmlFor="email" className="text-slate-700 font-medium">Email Address</Label>
                <div className="relative">
                  <Mail className="absolute left-3 top-3 w-4 h-4 text-slate-400" />
                  <Input 
                    id="email" 
                    type="email" 
                    placeholder="your.email@example.com" 
                    className="pl-10 h-11"
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                    required
                  />
                </div>
                <p className="text-xs text-slate-500">
                  Enter the email address associated with your account
                </p>
              </div>

              <Button type="submit" className="w-full bg-red-500 hover:bg-red-600 text-white font-medium h-11">
                Send Reset Instructions
              </Button>

              <Link to="/login">
                <Button type="button" variant="outline" className="w-full h-11">
                  <ArrowLeft className="w-4 h-4 mr-2" />
                  Back to Login
                </Button>
              </Link>
            </form>
          )}

          <div className="mt-6 text-center">
            <p className="text-sm text-slate-600">
              Remember your password?{' '}
              <Link to="/login" className="text-red-500 hover:text-red-600 font-medium">
                Login here
              </Link>
            </p>
          </div>
        </Card>
      </div>
      <Footer />
    </>
  );
}
