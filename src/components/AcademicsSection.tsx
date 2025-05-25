
import React from 'react';
import { Card } from '@/components/ui/card';

export const AcademicsSection: React.FC = () => {
  const academics = [
    {
      degree: "B.Tech Computer Science & Engineering",
      institution: "Government Engineering College Bilaspur",
      period: "2021 - 2025",
      status: "8th Semester (Current)",
      grade: "CGPA: 8.5/10",
      icon: "🎓",
      color: "from-blue-500 via-cyan-500 to-teal-500"
    },
    {
      degree: "12th Grade (NIOS)",
      institution: "National Institute of Open Schooling",
      period: "2020 - 2021",
      status: "Completed",
      grade: "75%",
      icon: "📚",
      color: "from-green-500 via-emerald-500 to-teal-500"
    },
    {
      degree: "10th Grade (CBSE)",
      institution: "CBSE Board",
      period: "2018 - 2019",
      status: "Completed",
      grade: "84%",
      icon: "📖",
      color: "from-purple-500 via-pink-500 to-rose-500"
    }
  ];

  return (
    <div className="animate-fade-in space-y-10">
      <div className="text-center mb-16">
        <h2 className="text-5xl font-bold bg-gradient-to-r from-blue-600 via-cyan-600 to-teal-600 bg-clip-text text-transparent mb-6">
          Academic Journey
        </h2>
        <p className="text-2xl text-gray-600 font-medium">Building knowledge, one milestone at a time</p>
      </div>

      <div className="space-y-8">
        {academics.map((item, index) => (
          <Card
            key={index}
            className={`p-8 bg-gradient-to-br from-white/90 via-white/80 to-white/70 backdrop-blur-lg border-0 shadow-xl hover:shadow-2xl transition-all duration-700 hover:-translate-y-2 animate-fade-in relative overflow-hidden group`}
            style={{ animationDelay: `${index * 300}ms` }}
          >
            {/* Animated background gradient */}
            <div className="absolute inset-0 bg-gradient-to-r from-transparent via-indigo-50/50 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
            
            <div className="flex items-start gap-8 relative z-10">
              <div className={`w-20 h-20 rounded-3xl bg-gradient-to-br ${item.color} flex items-center justify-center text-3xl text-white shadow-xl group-hover:scale-125 transition-transform duration-500 relative`}>
                {item.icon}
                <div className="absolute inset-0 rounded-3xl bg-white/20 opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
              </div>
              
              <div className="flex-1">
                <div className="flex flex-col lg:flex-row lg:items-center lg:justify-between mb-4">
                  <h3 className="text-3xl font-bold text-gray-800 group-hover:text-indigo-700 transition-colors duration-300">{item.degree}</h3>
                  <span className={`inline-block px-4 py-2 rounded-full text-sm font-bold shadow-md ${
                    item.status.includes('Current') ? 'bg-gradient-to-r from-blue-500 to-cyan-500 text-white' : 'bg-gradient-to-r from-green-500 to-emerald-500 text-white'
                  }`}>
                    {item.status}
                  </span>
                </div>
                
                <p className="text-xl text-gray-600 mb-4 font-medium">{item.institution}</p>
                <div className="flex flex-wrap gap-6 text-lg text-gray-500">
                  <span className="flex items-center gap-2 font-semibold">
                    <span className="text-xl">📅</span> {item.period}
                  </span>
                  <span className="flex items-center gap-2 font-semibold">
                    <span className="text-xl">📊</span> {item.grade}
                  </span>
                </div>
              </div>
            </div>
          </Card>
        ))}
      </div>

      {/* Enhanced timeline visualization */}
      <div className="relative mt-16 text-center">
        <div className="absolute left-1/2 top-0 bottom-0 w-1 bg-gradient-to-b from-purple-500 via-blue-500 to-cyan-500 opacity-40 transform -translate-x-1/2"></div>
        <div className="relative z-10">
          <div className="inline-block px-8 py-4 bg-gradient-to-r from-purple-500 via-blue-500 to-cyan-500 text-white rounded-full font-bold shadow-2xl text-lg hover:scale-110 transition-transform duration-300">
            🚀 Continuing the Journey...
          </div>
        </div>
      </div>
    </div>
  );
};
