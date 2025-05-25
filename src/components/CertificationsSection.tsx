
import React from 'react';
import { Card } from '@/components/ui/card';

export const CertificationsSection: React.FC = () => {
  const certifications = [
    {
      title: "Web Development Certification",
      issuer: "NELIT Gorakhpur",
      date: "2023",
      description: "Comprehensive web development program covering modern frameworks and best practices",
      icon: "🌐",
      color: "from-blue-500 to-cyan-500",
      skills: ["HTML5", "CSS3", "JavaScript", "React"]
    },
    {
      title: "Full Stack Development",
      issuer: "Persistence Academy",
      date: "2024",
      description: "Advanced full-stack development course with hands-on projects and industry exposure",
      icon: "⚡",
      color: "from-green-500 to-emerald-500",
      skills: ["Node.js", "MongoDB", "Express", "React"]
    },
    {
      title: "UI/UX Design Certification",
      issuer: "Design Institute",
      date: "2024",
      description: "User-centered design principles, prototyping, and modern design tools mastery",
      icon: "🎨",
      color: "from-purple-500 to-pink-500",
      skills: ["Figma", "Prototyping", "User Research", "Design Systems"]
    }
  ];

  return (
    <div className="animate-fade-in space-y-8">
      <div className="text-center mb-12">
        <h2 className="text-4xl font-bold bg-gradient-to-r from-green-600 to-emerald-600 bg-clip-text text-transparent mb-4">
          Certifications & Training
        </h2>
        <p className="text-xl text-gray-600">Continuous learning and professional development</p>
      </div>

      <div className="grid lg:grid-cols-2 gap-8">
        {certifications.map((cert, index) => (
          <Card
            key={index}
            className="group p-6 bg-white/70 backdrop-blur-sm border-0 shadow-lg hover:shadow-2xl transition-all duration-500 hover:-translate-y-2 overflow-hidden relative"
            style={{ animationDelay: `${index * 200}ms` }}
          >
            {/* Background decoration */}
            <div className={`absolute top-0 right-0 w-32 h-32 bg-gradient-to-br ${cert.color} opacity-10 rounded-bl-full group-hover:scale-150 transition-transform duration-700`}></div>
            
            <div className="relative z-10">
              <div className="flex items-start gap-4 mb-6">
                <div className={`w-16 h-16 rounded-2xl bg-gradient-to-br ${cert.color} flex items-center justify-center text-2xl text-white shadow-lg group-hover:scale-110 group-hover:rotate-12 transition-all duration-300`}>
                  {cert.icon}
                </div>
                
                <div className="flex-1">
                  <h3 className="text-2xl font-bold text-gray-800 group-hover:text-gray-900 transition-colors">
                    {cert.title}
                  </h3>
                  <p className="text-lg text-gray-600 font-medium">{cert.issuer}</p>
                  <span className="inline-block mt-2 px-3 py-1 bg-gray-100 text-gray-600 rounded-full text-sm font-medium">
                    {cert.date}
                  </span>
                </div>
              </div>

              <p className="text-gray-600 leading-relaxed mb-6 group-hover:text-gray-700 transition-colors">
                {cert.description}
              </p>

              <div className="space-y-3">
                <h4 className="font-semibold text-gray-800">Key Skills Gained:</h4>
                <div className="flex flex-wrap gap-2">
                  {cert.skills.map((skill, skillIndex) => (
                    <span
                      key={skillIndex}
                      className="px-3 py-1 bg-gradient-to-r from-gray-100 to-gray-200 text-gray-700 rounded-lg text-sm font-medium hover:from-blue-100 hover:to-purple-100 hover:text-blue-700 transition-all duration-300 cursor-pointer"
                      style={{ animationDelay: `${skillIndex * 100}ms` }}
                    >
                      {skill}
                    </span>
                  ))}
                </div>
              </div>

              {/* Certificate badge */}
              <div className="mt-6 pt-4 border-t border-gray-200">
                <div className="flex items-center justify-between">
                  <span className="text-sm text-gray-500">Certificate Earned</span>
                  <div className="flex items-center gap-2 text-green-600">
                    <span className="w-3 h-3 bg-green-500 rounded-full animate-pulse"></span>
                    <span className="font-medium">Verified</span>
                  </div>
                </div>
              </div>
            </div>
          </Card>
        ))}
      </div>

      {/* Achievement summary */}
      <Card className="p-8 bg-gradient-to-br from-green-50 to-emerald-50 border-0 shadow-lg text-center">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          <div className="space-y-2">
            <div className="text-3xl font-bold text-green-600">{certifications.length}</div>
            <div className="text-gray-600">Certifications</div>
          </div>
          <div className="space-y-2">
            <div className="text-3xl font-bold text-emerald-600">15+</div>
            <div className="text-gray-600">Skills Acquired</div>
          </div>
          <div className="space-y-2">
            <div className="text-3xl font-bold text-teal-600">100+</div>
            <div className="text-gray-600">Hours of Learning</div>
          </div>
        </div>
      </Card>
    </div>
  );
};
