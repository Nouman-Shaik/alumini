


import { Button } from './ui/button';
import { motion } from 'framer-motion';
import { Menu, X, User2, LogOut, Settings } from 'lucide-react';
import { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import {
  Popover,
  PopoverContent,
  PopoverTrigger,
} from './ui/popover';
import { Avatar, AvatarImage, AvatarFallback } from './ui/avatar';

const Navbar = () => {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const navigate = useNavigate();

  // ✅ get logged-in user
  const user = JSON.parse(localStorage.getItem('user'));

  // Role-based navigation items
  const getNavItems = () => {
    if (!user) {
      return [
        { name: 'Home', path: '/', delay: 0.2 },
        { name: 'About', path: '/about', delay: 0.3 },
        { name: 'Events', path: '/events', delay: 0.4 },
        { name: 'Network', path: '/network', delay: 0.5 },
        { name: 'Contact', path: '/contact', delay: 0.6 }
      ];
    }

    if (user.role === 'admin' || user.role === 'management') {
      return [
        { name: 'Home', path: '/', delay: 0.2 },
        { name: 'Management', path: '/management-dashboard', delay: 0.3 },
        { name: 'Events', path: '/events', delay: 0.4 },
        { name: 'Alumni', path: '/alumni', delay: 0.45 },
        { name: 'Reports', path: '/reports', delay: 0.5 },
      ];
    }

    if (user.role === 'student') {
      return [
        { name: 'Home', path: '/', delay: 0.2 },
        { name: 'Dashboard', path: '/student-dashboard', delay: 0.3 },
        { name: 'Events', path: '/events', delay: 0.4 },
        { name: 'Alumni', path: '/alumni', delay: 0.45 },
        { name: 'Mentorship', path: '/mentorship', delay: 0.5 },
        { name: 'Resume', path: '/resume-analysis', delay: 0.55 },
      ];
    }

    if (user.role === 'alumni') {
      return [
        { name: 'Home', path: '/', delay: 0.2 },
        { name: 'Dashboard', path: '/alumni-dashboard', delay: 0.3 },
        { name: 'Events', path: '/events', delay: 0.4 },
        { name: 'Alumni', path: '/alumni', delay: 0.45 },
        { name: 'Network', path: '/network', delay: 0.5 },
      ];
    }

    return [];
  };

  const navItems = getNavItems();

  const handleLogout = () => {
    localStorage.removeItem('user');
    navigate('/');
    window.location.reload();
  };

  return (
    <nav className="sticky top-0 z-50 bg-white/80 backdrop-blur-md border-b border-gray-200">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16">

          {/* Logo */}
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.5 }}
          >
            <h1 className="text-2xl font-bold tracking-tight">
              Alumn<span className="text-red-500 text-3xl">ee</span>
            </h1>
          </motion.div>

          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center space-x-8">
            <ul className="flex items-center space-x-1">
              {navItems.map((item) => (
                <motion.li
                  key={item.name}
                  initial={{ opacity: 0, y: -10 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.5, delay: item.delay }}
                >
                  <Link
                    to={item.path}
                    className="px-4 py-2 text-sm font-medium text-gray-700 hover:text-red-500 relative group"
                  >
                    {item.name}
                    <span className="absolute bottom-0 left-0 w-0 h-0.5 bg-red-500 group-hover:w-full transition-all"></span>
                  </Link>
                </motion.li>
              ))}
            </ul>
          </div>

          {/* Desktop Auth Section */}
          <motion.div
            initial={{ opacity: 0, x: 20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.5, delay: 0.7 }}
            className="hidden md:flex items-center space-x-3"
          >
            {!user ? (
              <>
                <Link to="/login">
                  <Button variant="ghost">Login</Button>
                </Link>
                <Link to="/signup">
                  <Button className="bg-red-500 text-white hover:bg-red-600">
                    Sign Up
                  </Button>
                </Link>
              </>
            ) : (
              <Popover>
                <PopoverTrigger asChild>
                  <Avatar className="cursor-pointer h-10 w-10">
                    <AvatarImage src={user?.profile?.profilePicture} alt={user?.fullname} />
                    <AvatarFallback className="bg-red-500 text-white font-semibold">
                      {user?.fullname?.charAt(0).toUpperCase()}
                    </AvatarFallback>
                  </Avatar>
                </PopoverTrigger>

                <PopoverContent className="w-80">
                  <div className="flex gap-4 items-center">
                    <Avatar className="h-12 w-12">
                      <AvatarImage src={user?.profile?.profilePicture} alt={user?.fullname} />
                      <AvatarFallback className="bg-red-500 text-white font-semibold text-lg">
                        {user?.fullname?.charAt(0).toUpperCase()}
                      </AvatarFallback>
                    </Avatar>
                    <div>
                      <h4 className="font-medium">{user?.fullname}</h4>
                      <p className="text-sm text-muted-foreground">
                        {user?.email}
                      </p>
                    </div>
                  </div>

                  <div className="flex flex-col mt-3 text-gray-600">
                    <div className="flex items-center gap-2 cursor-pointer">
                      <User2 />
                      <Button variant="link">View Profile</Button>
                    </div>

                    <Link to="/settings">
                      <Button variant="link" className="flex items-center gap-2">
                        <Settings className="w-4 h-4" />
                        Settings
                      </Button>
                    </Link>

                    {user?.role === 'student' && (
                      <Link to="/student-dashboard">
                        <Button variant="link" className="flex items-center gap-2">
                          My Dashboard
                        </Button>
                      </Link>
                    )}

                    {(user?.role === 'alumni' || user?.role === 'admin') && (
                      <Link to="/alumni-dashboard">
                        <Button variant="link" className="flex items-center gap-2">
                          Dashboard
                        </Button>
                      </Link>
                    )}

                    {(user?.role === 'admin' || user?.role === 'management') && (
                      <Link to="/management-dashboard">
                        <Button variant="link" className="flex items-center gap-2">
                          Management
                        </Button>
                      </Link>
                    )}

                    <div
                      className="flex items-center gap-2 cursor-pointer"
                      onClick={handleLogout}
                    >
                      <LogOut />
                      <Button variant="link">Logout</Button>
                    </div>
                  </div>
                </PopoverContent>
              </Popover>
            )}
          </motion.div>

          {/* Mobile Menu Button */}
          <div className="md:hidden">
            <Button
              variant="ghost"
              size="icon"
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            >
              {mobileMenuOpen ? <X /> : <Menu />}
            </Button>
          </div>
        </div>
      </div>

      {/* Mobile Menu */}
      {mobileMenuOpen && (
        <motion.div
          initial={{ opacity: 0, height: 0 }}
          animate={{ opacity: 1, height: 'auto' }}
          className="md:hidden bg-white border-t"
        >
          <div className="px-4 pt-2 pb-4 space-y-2">
            {navItems.map((item) => (
              <Link
                key={item.name}
                to={item.path}
                className="block px-4 py-3 text-gray-700 hover:bg-red-50 rounded-lg"
                onClick={() => setMobileMenuOpen(false)}
              >
                {item.name}
              </Link>
            ))}

            {!user ? (
              <>
                <Link to="/login">
                  <Button variant="outline" className="w-full">
                    Login
                  </Button>
                </Link>
                <Link to="/signup">
                  <Button className="w-full bg-red-500 text-white hover:bg-red-600">
                    Sign Up
                  </Button>
                </Link>
              </>
            ) : (
              <div className="pt-4 space-y-2 border-t">
                <div className="flex gap-3 items-center px-4 py-3 mb-2">
                  <Avatar className="h-10 w-10">
                    <AvatarImage src={user?.profile?.profilePicture} alt={user?.fullname} />
                    <AvatarFallback className="bg-red-500 text-white text-sm font-semibold">
                      {user?.fullname?.charAt(0).toUpperCase()}
                    </AvatarFallback>
                  </Avatar>
                  <div>
                    <p className="font-medium text-sm">{user?.fullname}</p>
                    <p className="text-xs text-gray-500">{user?.email}</p>
                  </div>
                </div>
                <Button
                  className="w-full bg-red-500 text-white hover:bg-red-600"
                  onClick={handleLogout}
                >
                  Logout
                </Button>
              </div>
            )}
          </div>
        </motion.div>
      )}
    </nav>
  );
};

export default Navbar;
