import Navbar from './Navbar';
import { Footer } from './Footer';

export default function DashboardLayout({ children, role, userName }) {
  return (
    <div className="min-h-screen flex flex-col bg-gray-50">
      <Navbar />
      <div className="flex-1 max-w-7xl mx-auto w-full px-4 sm:px-6 lg:px-8 py-8">
        <div className="bg-white rounded-lg shadow-sm p-6">
          {children}
        </div>
      </div>
      <Footer />
    </div>
  );
}
