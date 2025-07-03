import { Brain, Rocket, Heart, Star } from "lucide-react";

const AboutSection = () => {
  const stats = [
    { number: "50+", label: "Projects Completed", icon: Star },
    { number: "3+", label: "Years Experience", icon: Brain },
    { number: "100%", label: "Client Satisfaction", icon: Heart },
    { number: "24/7", label: "Support Available", icon: Rocket },
  ];

  return (
    <section className="py-20 px-6 relative">
      <div className="max-w-7xl mx-auto">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
          {/* Left side - Content */}
          <div className="space-y-8">
            <div>
              <h2 className="font-orbitron text-4xl md:text-6xl font-bold mb-6 neon-text">
                ABOUT ME
              </h2>
              <div className="h-1 w-24 bg-gradient-to-r from-neon-blue to-neon-pink rounded-full mb-8"></div>
            </div>

            <div className="space-y-6 text-lg text-white/80 leading-relaxed">
              <p>
                I'm a passionate web developer who believes in the power of
                creative design and cutting-edge technology. With expertise in
                modern frameworks and a keen eye for aesthetics, I create
                digital experiences that not only look stunning but also deliver
                exceptional performance.
              </p>

              <p>
                My journey in web development has led me to master technologies
                like React, Next.js, TypeScript, and modern CSS frameworks. I
                specialize in creating responsive, accessible, and
                lightning-fast websites that help businesses grow and succeed
                online.
              </p>

              <p>
                When I'm not coding, you'll find me exploring the latest web
                technologies, contributing to open-source projects, or
                experimenting with new design trends and 3D animations.
              </p>
            </div>

            <button className="cyber-button">Download Resume</button>
          </div>

          {/* Right side - Stats and Visual */}
          <div className="space-y-8">
            {/* Animated visual element */}
            <div className="relative">
              <div className="glass-card p-8 text-center">
                <div className="relative w-48 h-48 mx-auto mb-8">
                  <div className="absolute inset-0 border-4 border-neon-blue/30 rounded-full animate-spin-slow"></div>
                  <div className="absolute inset-4 border-4 border-neon-pink/30 rounded-full animate-reverse-spin"></div>
                  <div className="absolute inset-8 border-4 border-neon-green/30 rounded-full animate-spin-slow"></div>
                  <div className="absolute inset-0 flex items-center justify-center">
                    <div className="w-24 h-24 bg-gradient-to-br from-neon-blue to-neon-pink rounded-2xl flex items-center justify-center animate-float">
                      <Brain className="w-12 h-12 text-white" />
                    </div>
                  </div>
                </div>
                <p className="text-neon-cyan font-orbitron font-bold">
                  Always Learning
                </p>
              </div>
            </div>

            {/* Stats grid */}
            <div className="grid grid-cols-2 gap-4">
              {stats.map((stat, index) => (
                <div
                  key={stat.label}
                  className="glass-card p-6 text-center hover:scale-105 transition-all duration-300 group"
                  style={{ animationDelay: `${index * 0.1}s` }}
                >
                  <div className="w-12 h-12 mx-auto mb-4 text-neon-cyan group-hover:scale-110 transition-transform duration-300">
                    <stat.icon className="w-full h-full" />
                  </div>
                  <div className="font-orbitron text-2xl font-bold text-white mb-2 group-hover:text-neon-cyan transition-colors duration-300">
                    {stat.number}
                  </div>
                  <div className="text-sm text-white/70 group-hover:text-white/90 transition-colors duration-300">
                    {stat.label}
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default AboutSection;
