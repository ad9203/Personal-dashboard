import React from 'react';
import { Card } from '@/components/ui/card';

export const ProfileSection: React.FC = () => {
  return (
    <div className="animate-fade-in space-y-8">
      <div className="text-center mb-12">
        <h1 className="text-6xl font-bold bg-gradient-to-r from-indigo-600 via-purple-600 to-pink-600 bg-clip-text text-transparent mb-6 animate-pulse">
          Welcome to My Portfolio
        </h1>
        <p className="text-2xl text-gray-600 font-medium">Building the future, one line of code at a time</p>
      </div>

      <Card className="p-10 bg-gradient-to-br from-white/80 via-white/70 to-white/60 backdrop-blur-lg border-0 shadow-2xl hover:shadow-3xl transition-all duration-700 hover:-translate-y-4 relative overflow-hidden">
        {/* Animated background elements */}
        <div className="absolute top-0 right-0 w-32 h-32 bg-gradient-to-br from-indigo-400/20 to-purple-600/20 rounded-full blur-xl animate-bounce-slow"></div>
        <div className="absolute bottom-0 left-0 w-24 h-24 bg-gradient-to-br from-pink-400/20 to-yellow-400/20 rounded-full blur-lg animate-pulse"></div>
        
        <div className="flex flex-col lg:flex-row items-center gap-10 relative z-10">
          <div className="relative group">
            <div className="w-56 h-56 rounded-full bg-gradient-to-br from-indigo-400 via-purple-500 to-pink-500 p-2 animate-pulse shadow-2xl">
              <img
                src="/uploads/profile.png"
                alt="Profile"
                className="w-full h-full rounded-full object-cover border-4 border-white group-hover:scale-110 transition-transform duration-500 shadow-xl"
              />
            </div>
            <div className="absolute -bottom-3 -right-3 w-10 h-10 bg-gradient-to-r from-green-400 to-emerald-500 rounded-full border-4 border-white animate-bounce shadow-lg"></div>
            <div className="absolute -top-2 -left-2 w-6 h-6 bg-gradient-to-r from-yellow-400 to-orange-500 rounded-full animate-ping"></div>
          </div>

          <div className="flex-1 text-center lg:text-left space-y-8">
            <div>
              <h2 className="text-5xl font-bold bg-gradient-to-r from-gray-800 via-gray-700 to-gray-900 bg-clip-text text-transparent mb-3">
                Aditya Prakash
              </h2>
              <p className="text-2xl text-indigo-600 font-bold bg-gradient-to-r from-indigo-600 to-purple-600 bg-clip-text text-transparent">
                Full Stack Developer & UI/UX Enthusiast
              </p>
            </div>

            <p className="text-lg text-gray-600 leading-relaxed max-w-2xl font-medium">
              Passionate computer science student with a keen eye for creating beautiful, functional web applications. 
              I love turning complex problems into simple, elegant solutions and bringing ideas to life through code.
            </p>

            <div className="flex flex-wrap gap-6 justify-center lg:justify-start">
              <ContactButton 
                icon="📧" 
                label="Email" 
                value="adityaprakash9203@gmail.com"
                href="mailto:adityaprakash9203@gmail.com"
              />
              <ContactButton 
                icon="📱" 
                label="Phone" 
                value="+91 7828678975"
                href="tel:+917828678975"
              />
              <ContactButton 
                icon="💻" 
                label="GitHub" 
                value="github.com/ad9203"
                href="https://github.com/ad9203"
              />
            </div>
          </div>
        </div>
      </Card>
    </div>
  );
};

interface ContactButtonProps {
  icon: string;
  label: string;
  value: string;
  href: string;
}

const ContactButton: React.FC<ContactButtonProps> = ({ icon, label, value, href }) => {
  return (
    <a
      href={href}
      className="group flex items-center gap-3 px-6 py-4 bg-gradient-to-r from-gray-50 via-white to-gray-50 rounded-xl border border-gray-200 hover:from-indigo-50 hover:to-purple-50 hover:border-indigo-300 transition-all duration-500 hover:scale-110 hover:shadow-xl transform hover:-translate-y-1"
    >
      <span className="text-2xl group-hover:animate-bounce filter drop-shadow-lg">{icon}</span>
      <div className="text-left">
        <div className="text-xs text-gray-500 font-bold uppercase tracking-wider">{label}</div>
        <div className="text-sm text-gray-700 group-hover:text-indigo-600 transition-colors font-semibold">{value}</div>
      </div>
    </a>
  );
};
