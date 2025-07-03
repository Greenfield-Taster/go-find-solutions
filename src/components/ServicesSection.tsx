import { Code, Palette, Zap, Globe, Smartphone, Database } from "lucide-react";

const services = [
  {
    icon: Code,
    title: "Custom Web Development",
    description:
      "Modern, responsive websites built with the latest technologies like React, Next.js, and TypeScript.",
    gradient: "from-neon-blue to-neon-cyan",
  },
  {
    icon: Palette,
    title: "UI/UX Design",
    description:
      "Creating stunning, user-friendly interfaces that captivate and convert your audience.",
    gradient: "from-neon-pink to-neon-purple",
  },
  {
    icon: Zap,
    title: "Performance Optimization",
    description:
      "Lightning-fast websites that load instantly and provide exceptional user experiences.",
    gradient: "from-neon-green to-neon-yellow",
  },
  {
    icon: Globe,
    title: "E-commerce Solutions",
    description:
      "Powerful online stores with seamless checkout experiences and admin dashboards.",
    gradient: "from-neon-purple to-neon-pink",
  },
  {
    icon: Smartphone,
    title: "Mobile-First Design",
    description:
      "Responsive designs that look perfect on every device, from mobile to desktop.",
    gradient: "from-neon-cyan to-neon-blue",
  },
  {
    icon: Database,
    title: "Full-Stack Development",
    description:
      "Complete web solutions including backend APIs, databases, and cloud deployment.",
    gradient: "from-neon-yellow to-neon-green",
  },
];

const ServicesSection = () => {
  return (
    <section className="py-20 px-6 relative">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-16">
          <h2 className="font-orbitron text-4xl md:text-6xl font-bold mb-6 neon-text">
            SERVICES
          </h2>
          <div className="h-1 w-24 mx-auto bg-gradient-to-r from-neon-blue to-neon-pink rounded-full mb-8"></div>
          <p className="text-xl text-white/70 max-w-3xl mx-auto">
            Comprehensive web development services to bring your digital vision
            to life
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {services.map((service, index) => (
            <div
              key={service.title}
              className="glass-card p-8 hover:scale-105 transition-all duration-500 group cursor-pointer"
              style={{ animationDelay: `${index * 0.1}s` }}
            >
              <div
                className={`w-16 h-16 rounded-2xl bg-gradient-to-br ${service.gradient} p-4 mb-6 group-hover:scale-110 transition-transform duration-300`}
              >
                <service.icon className="w-full h-full text-white" />
              </div>

              <h3 className="font-orbitron text-xl font-bold text-white mb-4 group-hover:text-neon-cyan transition-colors duration-300">
                {service.title}
              </h3>

              <p className="text-white/70 leading-relaxed group-hover:text-white/90 transition-colors duration-300">
                {service.description}
              </p>

              <div className="mt-6 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                <div className="h-0.5 w-full bg-gradient-to-r from-transparent via-neon-blue to-transparent"></div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ServicesSection;
