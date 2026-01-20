import React, { useState } from 'react';
import { Label } from '../ui/label';
import { Input } from '../ui/input';
import { Button } from '../ui/button';
import { RadioGroup, RadioGroupItem } from '../ui/radio-group';
import { motion } from 'framer-motion';
import { Mail, Lock, GraduationCap, Users, Shield } from 'lucide-react';
import Navbar from '../Navbar';
import { Footer } from '../Footer';
import { toast } from 'sonner';
import axios from 'axios';
import {USER_API_END_POINT} from '../../utils/constant.js'
import { useNavigate, Link } from 'react-router-dom';

const Login = () => {
  const navigate = useNavigate();
  const [input, setInput] = useState({
    email: '',
    password: '',
    role: ''
  });

  const changeEventHandler = (e) => {
    setInput({ ...input, [e.target.name]: e.target.value });
  };

  const submitHandler = async (e) => {
    e.preventDefault();
    try {
      const res = await axios.post(`${USER_API_END_POINT}/login`, input, {
        headers:{
          "Content-Type": "application/json",
        },
        withCredentials: true,
      });
      if (res.data.success) {
        // Save user to localStorage
        localStorage.setItem('user', JSON.stringify(res.data.user));
        navigate("/");
        toast.success(res.data.message);
      }
    } catch (error) {
      console.log(error);
      const message = error.response?.data?.message || error.message || 'Login failed. Please try again.';
      toast.error(message);
    }
  };

  return (
    <>
    <Navbar />

    <div className="min-h-screen bg-gradient-to-br from-gray-50 via-white to-red-50 flex items-center justify-center px-4 py-12">
      <div className="absolute top-0 right-0 w-96 h-96 bg-red-200 rounded-full mix-blend-multiply filter blur-3xl opacity-20 animate-pulse" />
      <div className="absolute bottom-0 left-0 w-96 h-96 bg-red-300 rounded-full mix-blend-multiply filter blur-3xl opacity-20 animate-pulse" />
      
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
        className="w-full max-w-md relative z-10"
      >
        <div className="bg-white rounded-2xl shadow-2xl border border-gray-100 p-8">
          <div className="text-center mb-8">
            <motion.div
              initial={{ scale: 0.5, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              transition={{ duration: 0.5, delay: 0.2 }}
            >
              <h1 className="text-3xl font-bold mb-2">
                Welcome to <span className="text-red-500">Alumnee</span>
              </h1>
              <p className="text-gray-600">Login to continue your journey</p>
            </motion.div>
          </div>

          <div className="space-y-6">
            <motion.div
              initial={{ opacity: 0, x: -20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.5, delay: 0.3 }}
            >
              <Label htmlFor="email" className="text-sm font-semibold text-gray-700">
                Email Address
              </Label>
              <div className="relative mt-2">
                <Mail className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400 w-5 h-5" />
                <Input
                  id="email"
                  type="email"
                  name="email"
                  value={input.email}
                  onChange={changeEventHandler}
                  placeholder="nouman@example.com"
                  className="pl-10 h-12 border-gray-300 focus:border-red-500 focus:ring-red-500"
                />
              </div>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, x: -20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.5, delay: 0.4 }}
            >
              <Label htmlFor="password" className="text-sm font-semibold text-gray-700">
                Password
              </Label>
              <div className="relative mt-2">
                <Lock className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400 w-5 h-5" />
                <Input
                  id="password"
                  type="password"
                  name="password"
                  value={input.password}
                  onChange={changeEventHandler}
                  placeholder="••••••••"
                  className="pl-10 h-12 border-gray-300 focus:border-red-500 focus:ring-red-500"
                />
              </div>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, x: -20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.5, delay: 0.5 }}
            >
              <Label className="text-sm font-semibold text-gray-700 mb-3 block">
                Login As
              </Label>
              <RadioGroup
                value={input.role}
                onValueChange={(value) => setInput({ ...input, role: value })}
                className="grid grid-cols-3 gap-3"
              >
                <div>
                  <RadioGroupItem
                    value="student"
                    id="student"
                    className="peer sr-only"
                  />
                  <Label
                    htmlFor="student"
                    className="flex flex-col items-center justify-center rounded-lg border-2 border-gray-200 bg-white p-4 hover:bg-red-50 peer-data-[state=checked]:border-red-500 peer-data-[state=checked]:bg-red-50 cursor-pointer transition-all h-full"
                  >
                    <GraduationCap className="w-8 h-8 mb-2 text-red-500" />
                    <span className="text-sm font-semibold">Student</span>
                  </Label>
                </div>

                <div>
                  <RadioGroupItem
                    value="alumni"
                    id="alumni"
                    className="peer sr-only"
                  />
                  <Label
                    htmlFor="alumni"
                    className="flex flex-col items-center justify-center rounded-lg border-2 border-gray-200 bg-white p-4 hover:bg-red-50 peer-data-[state=checked]:border-red-500 peer-data-[state=checked]:bg-red-50 cursor-pointer transition-all h-full"
                  >
                    <Users className="w-8 h-8 mb-2 text-red-500" />
                    <span className="text-sm font-semibold">Alumni</span>
                  </Label>
                </div>

                <div>
                  <RadioGroupItem
                    value="admin"
                    id="admin"
                    className="peer sr-only"
                  />
                  <Label
                    htmlFor="admin"
                    className="flex flex-col items-center justify-center rounded-lg border-2 border-gray-200 bg-white p-4 hover:bg-red-50 peer-data-[state=checked]:border-red-500 peer-data-[state=checked]:bg-red-50 cursor-pointer transition-all h-full"
                  >
                    <Shield className="w-8 h-8 mb-2 text-red-500" />
                    <span className="text-sm font-semibold">Admin</span>
                  </Label>
                </div>
              </RadioGroup>
            </motion.div>

            <div className="flex justify-end">
              <Link
                to="/forgot-password"
                className="text-sm text-red-500 hover:text-red-600 font-medium transition-colors"
              >
                Forgot Password?
              </Link>
            </div>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.6 }}
            >
              <Button
                onClick={submitHandler}
                className="w-full h-12 bg-red-500 hover:bg-red-600 text-white font-semibold text-lg shadow-lg hover:shadow-xl transition-all duration-300"
              >
                Login
              </Button>
            </motion.div>

            <div className="text-center pt-4 border-t border-gray-200">
              <span className="text-sm text-gray-600">
                Don't have an account?{' '}
                <a
                  href="/signup"
                  className="text-red-500 hover:text-red-600 font-semibold transition-colors"
                >
                  Sign Up
                </a>
              </span>
            </div>
          </div>
        </div>

        <motion.p
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.5, delay: 0.8 }}
          className="text-center text-sm text-gray-600 mt-6"
        >
          By continuing, you agree to Alumnee's{' '}
          <a href="/terms" className="text-red-500 hover:underline">
            Terms of Service
          </a>{' '}
          and{' '}
          <a href="/privacy" className="text-red-500 hover:underline">
            Privacy Policy
          </a>
        </motion.p>
      </motion.div>
    </div>
    <Footer/>
    </>
  );
};

export default Login;