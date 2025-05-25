
import React from 'react';
import { Card } from '@/components/ui/card';

export const GoalsSection: React.FC = () => {
  const goals = [
    {
      title: "Build Impactful Web Applications",
      description: "Create innovative, user-friendly web applications that solve real-world problems and make a positive impact on people's lives.",
      icon: "🚀",
      color: "from-blue-500 to-cyan-500",
      timeline: "Ongoing",
      progress: 65
    },
    {
      title: "Contribute to Open Source",
      description: "Actively contribute to open-source projects, share knowledge with the developer community, and help build better tools for everyone.",
      icon: "🌟",
      color: "from-green-500 to-emerald-500",
      timeline: "2024-2025",
      progress: 40
    },
    {
      title: "Master Full-Stack Development",
      description: "Become proficient in both frontend and backend technologies to build complete, scalable web solutions from concept to deployment.",
      icon: "💻",
      color: "from-purple-500 to-pink-500",
      timeline: "2024-2025",
      progress: 75
    },
    {
      title: "Launch a Tech Startup",
      description: "Create and launch my own technology startup focused on innovative web solutions and digital transformation.",
      icon: "🎯",
      color: "from-orange-500 to-red-500",
      timeline: "2025-2027",
      progress: 25
    }
  ];

  const values = [
    { title: "Innovation", description: "Always seeking new and better ways to solve problems", icon: "💡" },
    { title: "Quality", description: "Committed to delivering high-quality, maintainable code", icon: "⚡" },
    { title: "Learning", description: "Continuous growth and staying updated with latest technologies", icon: "📚" },
    { title: "Collaboration", description: "Building strong relationships and working effectively in teams", icon: "🤝" }
  ];

  return (
    <div className="animate-fade-in space-y-8">
      <div className="text-center mb-12">
        <h2 className="text-4xl font-bold bg-gradient-to-r from-orange-600 to-red-600 bg-clip-text text-transparent mb-4">
          Goals & Aspirations
        </h2>
        <p className="text-xl text-gray-600">Driving towards excellence and meaningful impact</p>
      </div>

      {/* Main Goals */}
      <div className="grid lg:grid-cols-2 gap-6">
        {goals.map((goal, index) => (
          <Card
            key={index}
            className="group p-6 bg-white/70 backdrop-blur-sm border-0 shadow-lg hover:shadow-xl transition-all duration-500 hover:-translate-y-2"
            style={{ animationDelay: `${index * 200}ms` }}
          >
            <div className="flex items-start gap-4 mb-6">
              <div className={`w-16 h-16 rounded-2xl bg-gradient-to-br ${goal.color} flex items-center justify-center text-2xl text-white shadow-lg group-hover:scale-110 group-hover:rotate-12 transition-all duration-300`}>
                {goal.icon}
              </div>
              
              <div className="flex-1">
                <div className="flex items-center justify-between mb-2">
                  <h3 className="text-xl font-bold text-gray-800">{goal.title}</h3>
                  <span className="text-sm text-gray-500 bg-gray-100 px-2 py-1 rounded-full">
                    {goal.timeline}
                  </span>
                </div>
                <p className="text-gray-600 leading-relaxed">{goal.description}</p>
              </div>
            </div>

            {/* Progress bar */}
            <div className="space-y-2">
              <div className="flex justify-between items-center">
                <span className="text-sm font-medium text-gray-700">Progress</span>
                <span className="text-sm font-medium text-gray-700">{goal.progress}%</span>
              </div>
              <div className="w-full bg-gray-200 rounded-full h-2.5 overflow-hidden">
                <div
                  className={`h-2.5 bg-gradient-to-r ${goal.color} rounded-full transition-all duration-1000 ease-out`}
                  style={{ width: `${goal.progress}%` }}
                ></div>
              </div>
            </div>
          </Card>
        ))}
      </div>

      {/* Core Values */}
      <Card className="p-8 bg-gradient-to-br from-orange-50 to-red-50 border-0 shadow-lg">
        <h3 className="text-2xl font-bold text-center text-gray-800 mb-8">Core Values</h3>
        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {values.map((value, index) => (
            <div
              key={index}
              className="text-center group cursor-pointer"
              style={{ animationDelay: `${index * 150}ms` }}
            >
              <div className="w-16 h-16 mx-auto mb-4 bg-gradient-to-br from-orange-400 to-red-500 rounded-2xl flex items-center justify-center text-2xl text-white shadow-lg group-hover:scale-110 group-hover:rotate-6 transition-all duration-300">
                {value.icon}
              </div>
              <h4 className="font-bold text-gray-800 mb-2 group-hover:text-orange-600 transition-colors">
                {value.title}
              </h4>
              <p className="text-sm text-gray-600 group-hover:text-gray-700 transition-colors">
                {value.description}
              </p>
            </div>
          ))}
        </div>
      </Card>

      {/* Vision Statement */}
      <Card className="p-8 bg-gradient-to-r from-blue-600 to-purple-600 text-white border-0 shadow-xl text-center">
        <h3 className="text-3xl font-bold mb-4">My Vision</h3>
        <p className="text-xl leading-relaxed max-w-3xl mx-auto">
          "To leverage technology as a force for positive change, creating innovative solutions that 
          bridge the gap between complex problems and simple, elegant user experiences."
        </p>
        <div className="mt-6">
          <div className="inline-block px-6 py-3 bg-white/20 backdrop-blur-sm rounded-full font-semibold">
            🌟 Making a Difference Through Code
          </div>
        </div>
      </Card>
    </div>
  );
};
