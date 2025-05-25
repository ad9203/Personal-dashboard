
import React, { useState } from 'react';
import { ProfileSection } from '@/components/ProfileSection';
import { AcademicsSection } from '@/components/AcademicsSection';
import { SkillsSection } from '@/components/SkillsSection';
import { CertificationsSection } from '@/components/CertificationsSection';
import { GoalsSection } from '@/components/GoalsSection';
import { HobbiesSection } from '@/components/HobbiesSection';
import { NavigationBar } from '@/components/NavigationBar';

const Index = () => {
  const [activeSection, setActiveSection] = useState('profile');

  const renderSection = () => {
    switch (activeSection) {
      case 'profile':
        return <ProfileSection />;
      case 'academics':
        return <AcademicsSection />;
      case 'skills':
        return <SkillsSection />;
      case 'certifications':
        return <CertificationsSection />;
      case 'goals':
        return <GoalsSection />;
      case 'hobbies':
        return <HobbiesSection />;
      default:
        return <ProfileSection />;
    }
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-indigo-50 via-white to-purple-50">
      <div className="container mx-auto px-4 py-6 max-w-6xl">
        <NavigationBar activeSection={activeSection} setActiveSection={setActiveSection} />
        
        <div className="mt-8">
          <div className="animate-fade-in">
            {renderSection()}
          </div>
        </div>
      </div>
      
      {/* Background decoration */}
      <div className="fixed inset-0 -z-10 overflow-hidden">
        <div className="absolute top-1/4 left-1/4 w-64 h-64 bg-purple-200 rounded-full opacity-20 animate-pulse"></div>
        <div className="absolute bottom-1/4 right-1/4 w-48 h-48 bg-indigo-200 rounded-full opacity-20 animate-pulse animation-delay-2000"></div>
      </div>
    </div>
  );
};

export default Index;
