import {createBrowserRouter, RouterProvider, Navigate} from 'react-router-dom'
import Home from './pages/Home'
import Login from './components/auth/login'
import SignUp from './components/auth/signup'
import EventsPage from './pages/event'
import AlumniDashboard from './pages/AlumniDashboard'
import AlumniListing from './pages/AlumniListing'
import ForgotPassword from './pages/ForgotPassword'
import StudentDashboard from './pages/StudentDashboard'
import SettingsPage from './pages/SettingsPage'
import ManagementDashboard from './pages/ManagementDashboard'
import MentorshipPage from './pages/MentorshipPage'
import ResumeAnalysisPage from './pages/ResumeAnalysisPage'
import AboutPage from './pages/AboutPage'
import NetworkPage from './pages/NetworkPage'
import ContactPage from './pages/ContactPage'
import ReportsPage from './pages/ReportsPage'

// Protected Route Component
const ProtectedRoute = ({ element }) => {
  const user = JSON.parse(localStorage.getItem('user'));
  return user ? element : <Navigate to="/login" />;
};

// Role-based Protected Route Component
const RoleProtectedRoute = ({ element, allowedRoles }) => {
  const user = JSON.parse(localStorage.getItem('user'));
  if (!user) {
    return <Navigate to="/login" />;
  }
  if (allowedRoles.includes(user.role)) {
    return element;
  }
  return <Navigate to="/" />;
};

const approuter= createBrowserRouter([
  {
    path:'/',
    element:<Home/>
  },
  {
    path:'/login',
    element:<Login/>
  },
  {
    path:'/forgot-password',
    element:<ForgotPassword/>
  },
  {
    path:'/signup',
    element:<SignUp/>

  },
  {
    path:'/events',
    element:<ProtectedRoute element={<EventsPage/>}/>
  },
  {
    path:'/alumni-dashboard',
    element:<RoleProtectedRoute element={<AlumniDashboard/>} allowedRoles={['alumni', 'admin']}/>
  },
  {
    path:'/alumni',
    element:<ProtectedRoute element={<AlumniListing/>}/>
  },
  {
    path:'/student-dashboard',
    element:<RoleProtectedRoute element={<StudentDashboard/>} allowedRoles={['student']}/>
  },
  {
    path:'/settings',
    element:<ProtectedRoute element={<SettingsPage/>}/>
  },
  {
    path:'/management-dashboard',
    element:<RoleProtectedRoute element={<ManagementDashboard/>} allowedRoles={['admin', 'management']}/>
  },
  {
    path:'/mentorship',
    element:<ProtectedRoute element={<MentorshipPage/>}/>
  },
  {
    path:'/resume-analysis',
    element:<ProtectedRoute element={<ResumeAnalysisPage/>}/>
  },
  {
    path:'/reports',
    element:<RoleProtectedRoute element={<ReportsPage/>} allowedRoles={['admin', 'management']}/>
  },
  {
    path:'/about',
    element:<AboutPage/>
  },
  {
    path:'/network',
    element:<NetworkPage/>
  },
  {
    path:'/contact',
    element:<ContactPage/>
  }

]);

const App = () => {
  return (
     <>
    <RouterProvider router={approuter}/>
    </>
  )
}

export default App