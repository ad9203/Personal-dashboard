
import React, { useState } from 'react';
import { Card } from '@/components/ui/card';

export const SkillsSection: React.FC = () => {
  const [hoveredSkill, setHoveredSkill] = useState<string | null>(null);

  const skillCategories = [
    {
      title: "Frontend Development",
      icon: "🎨",
      skills: [
        { name: "React", level: 90, color: "bg-blue-500" },
        { name: "Next.js", level: 85, color: "bg-gray-800" },
        { name: "Tailwind CSS", level: 88, color: "bg-cyan-500" },
        { name: "JavaScript", level: 82, color: "bg-yellow-500" }
      ]
    },
    {
      title: "Backend & Database",
      icon: "⚙️",
      skills: [
        { name: "Node.js", level: 75, color: "bg-green-600" },
        { name: "SQL", level: 78, color: "bg-blue-600" }
      ]
    },
    {
      title: "Programming & Tools",
      icon: "💻",
      skills: [
        { name: "C++", level: 80, color: "bg-purple-600" },
        { name: "Git", level: 85, color: "bg-orange-500" }
      ]
    }
  ];

  return (
    <div className="animate-fade-in space-y-8">
      <div className="text-center mb-12">
        <h2 className="text-4xl font-bold bg-gradient-to-r from-purple-600 to-pink-600 bg-clip-text text-transparent mb-4">
          Technical Skills
        </h2>
        <p className="text-xl text-gray-600">Crafting digital experiences with modern technologies</p>
      </div>

      <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
        {skillCategories.map((category, categoryIndex) => (
          <Card
            key={categoryIndex}
            className="p-6 bg-white/70 backdrop-blur-sm border-0 shadow-lg hover:shadow-xl transition-all duration-500 hover:-translate-y-2"
            style={{ animationDelay: `${categoryIndex * 200}ms` }}
          >
            <div className="text-center mb-6">
              <div className="w-16 h-16 mx-auto mb-4 bg-gradient-to-br from-purple-500 to-pink-500 rounded-2xl flex items-center justify-center text-2xl shadow-lg">
                {category.icon}
              </div>
              <h3 className="text-xl font-bold text-gray-800">{category.title}</h3>
            </div>

            <div className="space-y-4">
              {category.skills.map((skill, skillIndex) => (
                <div
                  key={skillIndex}
                  className="group cursor-pointer"
                  onMouseEnter={() => setHoveredSkill(`${categoryIndex}-${skillIndex}`)}
                  onMouseLeave={() => setHoveredSkill(null)}
                >
                  <div className="flex justify-between items-center mb-2">
                    <span className="font-medium text-gray-700 group-hover:text-gray-900 transition-colors">
                      {skill.name}
                    </span>
                    <span className="text-sm text-gray-500 group-hover:text-gray-700 transition-colors">
                      {skill.level}%
                    </span>
                  </div>
                  
                  <div className="w-full bg-gray-200 rounded-full h-2.5 overflow-hidden">
                    <div
                      className={`h-2.5 ${skill.color} rounded-full transition-all duration-1000 ease-out transform`}
                      style={{
                        width: hoveredSkill === `${categoryIndex}-${skillIndex}` ? `${skill.level}%` : '0%',
                        animationDelay: `${skillIndex * 100}ms`
                      }}
                    ></div>
                  </div>
                </div>
              ))}
            </div>
          </Card>
        ))}
      </div>

      {/* Interactive skill badges */}
      <Card className="p-8 bg-gradient-to-br from-purple-50 to-pink-50 border-0 shadow-lg">
        <h3 className="text-2xl font-bold text-center text-gray-800 mb-6">All Technologies</h3>
        <div className="flex flex-wrap justify-center gap-3">
          {skillCategories.flatMap(category => category.skills).map((skill, index) => (
            <span
              key={index}
              className="px-4 py-2 bg-white rounded-full border border-gray-200 text-gray-700 font-medium hover:scale-110 hover:shadow-md hover:bg-gradient-to-r hover:from-purple-500 hover:to-pink-500 hover:text-white transition-all duration-300 cursor-pointer"
              style={{ animationDelay: `${index * 100}ms` }}
            >
              {skill.name}
            </span>
          ))}
        </div>
      </Card>
    </div>
  );
};
