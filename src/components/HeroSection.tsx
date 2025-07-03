import { useEffect, useRef } from "react";
import { ChevronDown } from "lucide-react";

const HeroSection = () => {
  const canvasRef = useRef<HTMLCanvasElement>(null);

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;

    const ctx = canvas.getContext("2d");
    if (!ctx) return;

    canvas.width = window.innerWidth;
    canvas.height = window.innerHeight;

    const particles: Array<{
      x: number;
      y: number;
      dx: number;
      dy: number;
      size: number;
      color: string;
    }> = [];

    // Create particles
    for (let i = 0; i < 50; i++) {
      particles.push({
        x: Math.random() * canvas.width,
        y: Math.random() * canvas.height,
        dx: (Math.random() - 0.5) * 0.5,
        dy: (Math.random() - 0.5) * 0.5,
        size: Math.random() * 2 + 1,
        color: ["#00D2FF", "#FF006E", "#00FF88", "#8B5CF6"][
          Math.floor(Math.random() * 4)
        ],
      });
    }

    const animate = () => {
      ctx.clearRect(0, 0, canvas.width, canvas.height);

      particles.forEach((particle, index) => {
        particle.x += particle.dx;
        particle.y += particle.dy;

        if (particle.x < 0 || particle.x > canvas.width) particle.dx *= -1;
        if (particle.y < 0 || particle.y > canvas.height) particle.dy *= -1;

        ctx.beginPath();
        ctx.arc(particle.x, particle.y, particle.size, 0, Math.PI * 2);
        ctx.fillStyle = particle.color;
        ctx.fill();

        // Connect nearby particles
        particles.forEach((otherParticle, otherIndex) => {
          if (index !== otherIndex) {
            const distance = Math.sqrt(
              Math.pow(particle.x - otherParticle.x, 2) +
                Math.pow(particle.y - otherParticle.y, 2)
            );

            if (distance < 100) {
              ctx.beginPath();
              ctx.moveTo(particle.x, particle.y);
              ctx.lineTo(otherParticle.x, otherParticle.y);
              ctx.strokeStyle = `rgba(0, 210, 255, ${0.2 - distance / 500})`;
              ctx.stroke();
            }
          }
        });
      });

      requestAnimationFrame(animate);
    };

    animate();

    const handleResize = () => {
      canvas.width = window.innerWidth;
      canvas.height = window.innerHeight;
    };

    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden">
      <canvas
        ref={canvasRef}
        className="absolute inset-0 w-full h-full"
        style={{ background: "transparent" }}
      />

      {/* Cyber grid background */}
      <div className="absolute inset-0 bg-cyber-grid bg-grid opacity-20"></div>

      {/* Floating 3D elements */}
      <div className="absolute top-20 left-10 w-20 h-20 border-2 border-neon-blue/50 rotate-45 animate-float"></div>
      <div className="absolute top-40 right-20 w-16 h-16 border-2 border-neon-pink/50 rounded-full animate-float-delayed"></div>
      <div className="absolute bottom-40 left-20 w-12 h-12 border-2 border-neon-green/50 animate-float-delayed-2"></div>

      {/* Main content */}
      <div className="relative z-10 text-center px-6">
        <div className="mb-8">
          <h1 className="font-orbitron text-6xl md:text-8xl font-black mb-4 neon-text animate-glow">
            ANASTASIIA
          </h1>
          <div className="h-1 w-32 mx-auto bg-gradient-to-r from-neon-blue to-neon-pink rounded-full mb-6"></div>
          <p className="text-2xl md:text-3xl font-light text-white/80 mb-2">
            Creative Web Developer
          </p>
          <p className="text-lg text-neon-blue font-space">
            Building the Future of Digital Experiences
          </p>
        </div>

        <div className="space-y-6">
          <p className="text-xl text-white/70 max-w-2xl mx-auto leading-relaxed">
            Transforming ideas into stunning, interactive web experiences using
            cutting-edge technologies
          </p>

          <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
            <button className="cyber-button">Explore My Work</button>
            <button className="glass-card px-8 py-3 text-white hover:bg-white/10 transition-all duration-300 rounded-lg border border-white/20">
              Get In Touch
            </button>
          </div>
        </div>
      </div>

      {/* Scroll indicator */}
      <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 animate-bounce">
        <ChevronDown className="w-8 h-8 text-neon-blue animate-pulse" />
      </div>
    </section>
  );
};

export default HeroSection;
