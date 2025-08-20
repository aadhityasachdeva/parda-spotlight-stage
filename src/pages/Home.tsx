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
              Ab uthegaaaa, PARDA! 🎬
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
              <Button 
                asChild 
                size="lg" 
                className="bg-accent hover:bg-accent/90 text-accent-foreground px-8 py-3 text-lg"
              >
                <Link to="/join">Join Parda</Link>
              </Button>
            </div>
          </div>
        </div>

        {/* Decorative Elements */}
        <div className="absolute bottom-0 left-0 right-0 h-32 bg-gradient-to-t from-background to-transparent z-5" />
      </section>

      {/* What is Parda Section */}
      <section className="py-20 bg-card">
        <div className="container mx-auto px-6">
          <div className="max-w-4xl mx-auto text-center">
            <h2 className="text-4xl md:text-5xl font-bold mb-8 text-foreground">
              What is Parda?
            </h2>
            <div className="bg-background/50 backdrop-blur-sm border border-border rounded-2xl p-8 md:p-12">
              <p className="text-lg md:text-xl text-muted-foreground leading-relaxed">
                Parda Artist Association is a community of passionate artists dedicated to theatre and dramatic arts. Originally known as Kissa Dramatics Club, Parda brings together people from diverse backgrounds—actors, dancers, musicians, and visual artists—all united by a love for creative expression, with a special focus on drama and acting.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* What do we do Section */}
      <section className="py-20 bg-background">
        <div className="container mx-auto px-6">
          <div className="max-w-4xl mx-auto text-center">
            <h2 className="text-4xl md:text-5xl font-bold mb-8 text-foreground">
              What do we do?
            </h2>
            <div className="bg-card/50 backdrop-blur-sm border border-border rounded-2xl p-8 md:p-12">
              <p className="text-lg md:text-xl text-muted-foreground leading-relaxed">
                At Parda, we bring stories to life through theatre. We stage plays, perform street shows, and create digital productions—all focused on powerful storytelling and dramatic arts. We also organize workshops and collaborative sessions, giving members a space to learn, grow, and use drama to spark conversation and inspire change.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Why do we do it Section */}
      <section className="py-20 bg-card">
        <div className="container mx-auto px-6">
          <div className="max-w-4xl mx-auto text-center">
            <h2 className="text-4xl md:text-5xl font-bold mb-8 text-foreground">
              Why do we do it?
            </h2>
            <div className="bg-background/50 backdrop-blur-sm border border-border rounded-2xl p-8 md:p-12">
              <p className="text-lg md:text-xl text-muted-foreground leading-relaxed">
                We believe in the power of theatre to move hearts, challenge ideas, and bring people together. Our aim is to use drama not just for entertainment, but as a way to spark conversation, inspire creativity, and drive meaningful change in society. Through every performance and workshop, we hope to create a positive impact—both within our community and beyond.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* What makes us different Section */}
      <section className="py-20 bg-background">
        <div className="container mx-auto px-6">
          <div className="max-w-4xl mx-auto text-center">
            <h2 className="text-4xl md:text-5xl font-bold mb-8 text-foreground">
              What makes us different?
            </h2>
            <div className="bg-card/50 backdrop-blur-sm border border-border rounded-2xl p-8 md:p-12 mb-12">
              <p className="text-lg md:text-xl text-muted-foreground leading-relaxed">
                Parda Artist Association focuses on drama and acting, using powerful storytelling to inspire conversation and social change. We welcome artists from all backgrounds and specialties—acting, writing, directing, and more—offering diverse experiences for everyone to learn, perform, and grow in an inclusive creative community.
              </p>
            </div>
            
            {/* Join CTA */}
            <div className="animate-in fade-in duration-1000">
              <Button 
                asChild 
                size="lg" 
                className="bg-primary hover:bg-primary/90 text-primary-foreground px-12 py-4 text-xl rounded-full shadow-lg hover:shadow-xl transition-all duration-300"
              >
                <Link to="/join">Join Our Theatre Family</Link>
              </Button>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Home;