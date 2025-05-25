
import React, { useState } from 'react';
import { Card } from '@/components/ui/card';

export const HobbiesSection: React.FC = () => {
  const [activeHobby, setActiveHobby] = useState<number | null>(null);

  const hobbies = [
    {
      title: "Football",
      description: "Passionate about the beautiful game! I love playing football and following international tournaments. It keeps me active and teaches valuable lessons about teamwork and strategy.",
      icon: "⚽",
      color: "from-green-500 to-emerald-600",
      details: [
        "Playing since childhood",
        "Favorite position: Midfielder",
        "Follow Premier League & World Cup",
        "Weekend matches with friends"
      ],
      image: "https://images.unsplash.com/photo-1517022812141-23620dba5c23?w=400&h=300&fit=crop"
    },
    {
      title: "Photography",
      description: "Capturing moments and telling stories through the lens. I specialize in landscape and portrait photography, always seeking the perfect light and composition.",
      icon: "📸",
      color: "from-blue-500 to-purple-600",
      details: [
        "Nature & portrait photography",
        "Digital editing enthusiast",
        "Weekend photo walks",
        "Building a photo portfolio"
      ],
      image: "https://images.unsplash.com/photo-1581091226825-a6a2a5aee158?w=400&h=300&fit=crop"
    },
    {
      title: "Cooking",
      description: "Exploring culinary arts and experimenting with different cuisines. Cooking is my creative outlet where I can innovate and share joy with others through food.",
      icon: "👨‍🍳",
      color: "from-orange-500 to-red-600",
      details: [
        "Italian & Indian cuisine lover",
        "Experimental recipe creator",
        "Weekend family cooking",
        "Food presentation enthusiast"
      ],
      image: "https://images.unsplash.com/photo-1618160702438-9b02ab6515c9?w=400&h=300&fit=crop"
    }
  ];

  return (
    <div className="animate-fade-in space-y-8">
      <div className="text-center mb-12">
        <h2 className="text-4xl font-bold bg-gradient-to-r from-pink-600 to-orange-600 bg-clip-text text-transparent mb-4">
          Hobbies & Interests
        </h2>
        <p className="text-xl text-gray-600">Life beyond code - passions that fuel creativity</p>
      </div>

      <div className="grid lg:grid-cols-3 gap-6">
        {hobbies.map((hobby, index) => (
          <Card
            key={index}
            className={`group cursor-pointer bg-white/70 backdrop-blur-sm border-0 shadow-lg hover:shadow-2xl transition-all duration-500 overflow-hidden ${
              activeHobby === index ? 'scale-105 lg:col-span-3' : 'hover:-translate-y-2'
            }`}
            onClick={() => setActiveHobby(activeHobby === index ? null : index)}
            style={{ animationDelay: `${index * 200}ms` }}
          >
            <div className={`${activeHobby === index ? 'lg:flex' : ''}`}>
              {/* Main Content */}
              <div className="p-6 flex-1">
                <div className="flex items-start gap-4 mb-6">
                  <div className={`w-16 h-16 rounded-2xl bg-gradient-to-br ${hobby.color} flex items-center justify-center text-2xl text-white shadow-lg group-hover:scale-110 group-hover:rotate-12 transition-all duration-300`}>
                    {hobby.icon}
                  </div>
                  
                  <div className="flex-1">
                    <h3 className="text-2xl font-bold text-gray-800 group-hover:text-gray-900 transition-colors mb-2">
                      {hobby.title}
                    </h3>
                    <p className="text-gray-600 leading-relaxed group-hover:text-gray-700 transition-colors">
                      {hobby.description}
                    </p>
                  </div>
                </div>

                {/* Expanded content */}
                {activeHobby === index && (
                  <div className="animate-fade-in space-y-4">
                    <h4 className="font-semibold text-gray-800">What I Love About It:</h4>
                    <div className="grid sm:grid-cols-2 gap-3">
                      {hobby.details.map((detail, detailIndex) => (
                        <div
                          key={detailIndex}
                          className="flex items-center gap-2 p-3 bg-gray-50 rounded-lg"
                          style={{ animationDelay: `${detailIndex * 100}ms` }}
                        >
                          <span className="w-2 h-2 bg-gradient-to-r from-gray-400 to-gray-600 rounded-full"></span>
                          <span className="text-gray-700">{detail}</span>
                        </div>
                      ))}
                    </div>
                  </div>
                )}

                {/* Click hint */}
                <div className="mt-4 text-center">
                  <span className="text-sm text-gray-500 hover:text-gray-700 transition-colors">
                    {activeHobby === index ? 'Click to collapse' : 'Click to learn more'}
                  </span>
                </div>
              </div>

              {/* Image section (shown when expanded) */}
              {activeHobby === index && (
                <div className="lg:w-80 h-64 lg:h-auto">
                  <img
                    src={hobby.image}
                    alt={hobby.title}
                    className="w-full h-full object-cover lg:rounded-r-lg animate-fade-in"
                  />
                </div>
              )}
            </div>
          </Card>
        ))}
      </div>

      {/* Fun Facts */}
      <Card className="p-8 bg-gradient-to-br from-pink-50 to-orange-50 border-0 shadow-lg">
        <h3 className="text-2xl font-bold text-center text-gray-800 mb-8">Fun Facts About Me</h3>
        <div className="grid md:grid-cols-3 gap-6 text-center">
          <div className="space-y-3">
            <div className="w-16 h-16 mx-auto bg-gradient-to-br from-green-400 to-emerald-500 rounded-2xl flex items-center justify-center text-2xl text-white shadow-lg animate-bounce">
              ⚽
            </div>
            <h4 className="font-bold text-gray-800">500+</h4>
            <p className="text-gray-600">Goals Scored</p>
          </div>
          <div className="space-y-3">
            <div className="w-16 h-16 mx-auto bg-gradient-to-br from-blue-400 to-purple-500 rounded-2xl flex items-center justify-center text-2xl text-white shadow-lg animate-bounce animation-delay-300">
              📸
            </div>
            <h4 className="font-bold text-gray-800">1000+</h4>
            <p className="text-gray-600">Photos Captured</p>
          </div>
          <div className="space-y-3">
            <div className="w-16 h-16 mx-auto bg-gradient-to-br from-orange-400 to-red-500 rounded-2xl flex items-center justify-center text-2xl text-white shadow-lg animate-bounce animation-delay-600">
              👨‍🍳
            </div>
            <h4 className="font-bold text-gray-800">50+</h4>
            <p className="text-gray-600">Recipes Mastered</p>
          </div>
        </div>
      </Card>
    </div>
  );
};
