
import React from 'react';
import { cn } from '@/lib/utils';

interface NavigationBarProps {
  activeSection: string;
  setActiveSection: (section: string) => void;
}

export const NavigationBar: React.FC<NavigationBarProps> = ({ activeSection, setActiveSection }) => {
  const navItems = [
    { id: 'profile', label: 'Profile', icon: '👤' },
    { id: 'academics', label: 'Academics', icon: '🎓' },
    { id: 'skills', label: 'Skills', icon: '⚡' },
    { id: 'certifications', label: 'Certifications', icon: '📜' },
    { id: 'goals', label: 'Goals', icon: '🎯' },
    { id: 'hobbies', label: 'Hobbies', icon: '🎨' },
  ];

  return (
    <nav className="bg-white/80 backdrop-blur-md border border-white/20 rounded-2xl shadow-lg p-2">
      <div className="flex flex-wrap justify-center gap-2">
        {navItems.map((item) => (
          <button
            key={item.id}
            onClick={() => setActiveSection(item.id)}
            className={cn(
              "flex items-center gap-2 px-4 py-2 rounded-xl transition-all duration-300 hover:scale-105",
              "font-medium text-sm relative overflow-hidden group",
              activeSection === item.id
                ? "bg-gradient-to-r from-indigo-500 to-purple-600 text-white shadow-md"
                : "text-gray-600 hover:text-gray-900 hover:bg-gray-50"
            )}
          >
            <span className="text-lg">{item.icon}</span>
            <span className="hidden sm:inline">{item.label}</span>
            
            {/* Hover effect */}
            <div className="absolute inset-0 bg-gradient-to-r from-indigo-500 to-purple-600 opacity-0 group-hover:opacity-10 transition-opacity duration-300 rounded-xl"></div>
          </button>
        ))}
      </div>
    </nav>
  );
};
