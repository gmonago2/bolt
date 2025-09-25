import React from 'react';
import { Link, useLocation } from 'react-router-dom';
import { 
  BookOpen, 
  Heart, 
  Target, 
  BarChart3, 
  Users,
  Home,
  Menu,
  X
} from 'lucide-react';
import { useState } from 'react';

const Navigation: React.FC = () => {
  const location = useLocation();
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  const navItems = [
    { path: '/', label: 'Home', icon: <Home className="h-5 w-5" /> },
    { path: '/jargon', label: 'Jargon Translator', icon: <BookOpen className="h-5 w-5" /> },
    { path: '/anxiety-help', label: 'Anxiety Help', icon: <Heart className="h-5 w-5" /> },
    { path: '/missions', label: 'Missions', icon: <Target className="h-5 w-5" /> },
    { path: '/compatibility', label: 'Compatibility Score', icon: <BarChart3 className="h-5 w-5" /> },
    { path: '/social', label: 'Community', icon: <Users className="h-5 w-5" /> },
  ];

  const isActive = (path: string) => {
    return location.pathname === path;
  };

  return (
    <nav className="bg-gradient-to-r from-white via-[#f4e98c]/5 to-[#457B9D]/5 shadow-sm border-b border-[#457B9D]/20 sticky top-0 z-50 backdrop-blur-sm">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-16">
          {/* Logo */}
          <Link to="/" className="flex items-center space-x-2">
            <img src="/public/Screenshot 2025-09-23 at 11.21.50 AM.png" alt="FirstShares Logo" className="h-8" />
            <span className="text-xl font-bold text-gray-900">FirstShares</span>
          </Link>

          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center space-x-1">
            {navItems.map((item) => (
              <Link
                key={item.path}
                to={item.path}
                className={`flex items-center space-x-2 px-4 py-2 rounded-lg transition-all ${
                  isActive(item.path)
                    ? 'bg-[#457B9D] text-white'
                    : 'text-gray-700 hover:text-[#457B9D] hover:bg-[#457B9D]/10'
                }`}
              >
                {item.icon}
                <span className="font-medium">{item.label}</span>
              </Link>
            ))}
          </div>

          {/* Mobile Menu Button */}
          <button
            onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
            className="md:hidden p-2 rounded-lg text-gray-700 hover:text-[#457B9D] hover:bg-gray-100"
          >
            {isMobileMenuOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
          </button>
        </div>

        {/* Mobile Navigation */}
        {isMobileMenuOpen && (
          <div className="md:hidden py-4 border-t border-[#457B9D]/20">
            <div className="space-y-2">
              {navItems.map((item) => (
                <Link
                  key={item.path}
                  to={item.path}
                  onClick={() => setIsMobileMenuOpen(false)}
                  className={`flex items-center space-x-3 px-4 py-3 rounded-lg transition-all ${
                    isActive(item.path)
                      ? 'bg-[#457B9D] text-white'
                      : 'text-gray-700 hover:text-[#457B9D] hover:bg-[#457B9D]/10'
                  }`}
                >
                  {item.icon}
                  <span className="font-medium">{item.label}</span>
                </Link>
              ))}
            </div>
          </div>
        )}
      </div>
    </nav>
  );
};

export default Navigation;
