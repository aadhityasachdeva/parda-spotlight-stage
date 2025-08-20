import { Button } from "@/components/ui/button";
import { Link } from "react-router-dom";

const Home = () => {
  return (
    <div className="min-h-screen">
      {/* Hero Section */}
      <section className="relative min-h-screen flex items-center justify-center overflow-hidden">
        <div 
          className="absolute inset-0 z-0"
          style={{
            background: "var(--theatrical-gradient)",
          }}
        />
        
        <div className="relative z-10 container mx-auto px-6 text-center">
          <div className="max-w-4xl mx-auto">
            {/* Logo */}
            <div className="mb-8 animate-in fade-in duration-1000">
              <img 
                src="/lovable-uploads/f9ca09fd-ecbd-4385-8f08-f223d90f0134.png" 
                alt="Parda Artists Association Logo" 
                className="mx-auto h-32 w-auto mb-6"
                style={{ filter: "drop-shadow(var(--accent-glow))" }}
              />
            </div>

            {/* Hero Text */}
            <h1 className="text-5xl md:text-7xl font-bold mb-6 animate-in slide-in-from-bottom-4 duration-1000 delay-300">
              <span className="bg-gradient-to-r from-foreground to-primary bg-clip-text text-transparent">
                Parda Artists Association
              </span>
            </h1>
            
            <p className="text-xl md:text-2xl text-muted-foreground mb-8 animate-in slide-in-from-bottom-4 duration-1000 delay-500">
              Where passion meets performance. Bringing stories to life through the magic of theatre.
            </p>

            {/* CTA Buttons */}
            <div className="flex flex-col sm:flex-row gap-4 justify-center animate-in slide-in-from-bottom-4 duration-1000 delay-700">
              <Button 
                asChild 
                size="lg" 
                className="bg-primary hover:bg-primary/90 text-primary-foreground px-8 py-3 text-lg"
              >
                <Link to="/about">Discover Our Story</Link>
              </Button>
              <Button 
                asChild 
                variant="outline" 
                size="lg"
                className="border-primary text-primary hover:bg-primary hover:text-primary-foreground px-8 py-3 text-lg"
              >
                <Link to="/gallery">View Our Work</Link>
              </Button>
            </div>
          </div>
        </div>

        {/* Decorative Elements */}
        <div className="absolute bottom-0 left-0 right-0 h-32 bg-gradient-to-t from-background to-transparent z-5" />
      </section>

      {/* Featured Sections */}
      <section className="py-20 bg-card">
        <div className="container mx-auto px-6">
          <div className="grid md:grid-cols-3 gap-8">
            <div className="text-center p-6 rounded-lg bg-background border border-border hover:border-primary/50 transition-colors duration-300">
              <div className="w-16 h-16 bg-primary/20 rounded-full flex items-center justify-center mx-auto mb-4">
                <svg className="w-8 h-8 text-primary" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M7 4V2a1 1 0 011-1h8a1 1 0 011 1v2h4a1 1 0 110 2h-1v16a2 2 0 01-2 2H6a2 2 0 01-2-2V6H3a1 1 0 110-2h4z" />
                </svg>
              </div>
              <h3 className="text-xl font-semibold mb-2">Our Performances</h3>
              <p className="text-muted-foreground">Experience captivating theatrical productions that touch hearts and inspire minds.</p>
            </div>

            <div className="text-center p-6 rounded-lg bg-background border border-border hover:border-primary/50 transition-colors duration-300">
              <div className="w-16 h-16 bg-primary/20 rounded-full flex items-center justify-center mx-auto mb-4">
                <svg className="w-8 h-8 text-primary" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 4.354a4.004 4.004 0 00-7.897 0A4.004 4.004 0 0012 4.354zM15 21v-7a2 2 0 00-2-2H9a2 2 0 00-2 2v7h8z" />
                </svg>
              </div>
              <h3 className="text-xl font-semibold mb-2">Our Community</h3>
              <p className="text-muted-foreground">A diverse group of passionate artists dedicated to the craft of storytelling.</p>
            </div>

            <div className="text-center p-6 rounded-lg bg-background border border-border hover:border-primary/50 transition-colors duration-300">
              <div className="w-16 h-16 bg-primary/20 rounded-full flex items-center justify-center mx-auto mb-4">
                <svg className="w-8 h-8 text-primary" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9.663 17h4.673M12 3v1m6.364 1.636l-.707.707M21 12h-1M4 12H3m3.343-5.657l-.707-.707m2.828 9.9a5 5 0 117.072 0l-.548.547A3.374 3.374 0 0014 18.469V19a2 2 0 11-4 0v-.531c0-.895-.356-1.754-.988-2.386l-.548-.547z" />
                </svg>
              </div>
              <h3 className="text-xl font-semibold mb-2">Our Vision</h3>
              <p className="text-muted-foreground">To create transformative theatrical experiences that enrich our community and beyond.</p>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Home;