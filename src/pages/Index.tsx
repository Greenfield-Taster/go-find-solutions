import Navigation from "@/components/Navigation";
import HeroSection from "@/components/HeroSection";
import ServicesSection from "@/components/ServicesSection";
import AboutSection from "@/components/AboutSection";
import ContactSection from "@/components/ContactSection";

const Index = () => {
  return (
    <div className="min-h-screen">
      <Navigation />

      <main>
        <section id="home">
          <HeroSection />
        </section>

        <section id="services">
          <ServicesSection />
        </section>

        <section id="about">
          <AboutSection />
        </section>

        <section id="contact">
          <ContactSection />
        </section>
      </main>

      {/* Footer */}
      <footer className="py-8 px-6 border-t border-white/10">
        <div className="max-w-7xl mx-auto text-center">
          <p className="text-white/60">
            © 2025 GO FIND SOLUIOINS. Crafted with ❤️ and cutting-edge
            technology.
          </p>
        </div>
      </footer>
    </div>
  );
};

export default Index;
