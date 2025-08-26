import { Button } from "@/components/ui/button";
import { Link } from "react-router-dom";
import theatreBg from "@/assets/theatre-bg.jpg";

const Home = () => {
  return (
    <div className="min-h-screen">
      {/* Hero Section */}
      <section className="relative min-h-screen flex items-center justify-center overflow-hidden">
        {/* Background Image */}
        <div 
          className="absolute inset-0 z-0"
          style={{
            backgroundImage: `linear-gradient(rgba(0, 0, 0, 0.6), rgba(0, 0, 0, 0.4)), url(${theatreBg})`,
            backgroundSize: 'cover',
            backgroundPosition: 'center',
            backgroundRepeat: 'no-repeat'
          }}
        />
        
        {/* Overlay Gradient */}
        <div 
          className="absolute inset-0 z-1"
          style={{
            background: "var(--theatrical-gradient)",
            opacity: 0.3
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
            

            {/* CTA Buttons */}
            <div className="flex flex-col sm:flex-row gap-6 justify-center animate-in slide-in-from-bottom-4 duration-1000 delay-700 mt-8">
              <Button 
                asChild 
                size="lg" 
                className="bg-primary hover:bg-primary/90 text-primary-foreground px-10 py-6 text-lg"
              >
                <Link to="/about">Discover Our Story</Link>
              </Button>
              <Button 
                asChild 
                variant="outline" 
                size="lg"
                className="border-primary text-primary hover:bg-primary hover:text-primary-foreground px-10 py-6 text-lg"
              >
                <Link to="/gallery">View Our Work</Link>
              </Button>
              <Button 
                asChild 
                size="lg" 
                className="bg-accent hover:bg-accent/90 text-accent-foreground px-10 py-6 text-lg"
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

      {/* Our Space Section */}
      <section className="py-20 bg-card">
        <div className="container mx-auto px-6">
          <div className="max-w-6xl mx-auto">
            <h2 className="text-4xl md:text-5xl font-bold mb-12 text-center text-foreground">
              Our Space
            </h2>
            
            <div className="grid md:grid-cols-2 gap-12">
              {/* LTG Black Canvas */}
              <div className="bg-background/50 backdrop-blur-sm border border-border rounded-2xl p-8 text-center">
                <div className="mb-6 overflow-hidden rounded-xl">
                  <img 
                    src="/lovable-uploads/9aee15ac-bf2d-457d-8731-668ae32af286.png" 
                    alt="LTG Black Canvas Theatre Space" 
                    className="w-full h-64 object-cover hover:scale-105 transition-transform duration-300"
                  />
                </div>
                <h3 className="text-2xl font-bold mb-4 text-foreground">LTG Black Canvas</h3>
                <p className="text-muted-foreground mb-4">
                  One of Delhi's oldest and most prestigious theatre venues, providing a professional space for our performances and workshops.
                </p>
                <p className="text-sm text-muted-foreground font-medium">
                  📍 Copernicus Marg, Mandi House, New Delhi 110001
                </p>
              </div>

              {/* Mitr Rangmanch */}
              <div className="bg-background/50 backdrop-blur-sm border border-border rounded-2xl p-8 text-center">
                <div className="mb-6 overflow-hidden rounded-xl">
                  <img 
                    src="/lovable-uploads/3900c9e4-92c8-4aee-a1c9-81c319ea6d85.png" 
                    alt="Mitr Rangmanch Films and Theatre Studio" 
                    className="w-full h-64 object-cover hover:scale-105 transition-transform duration-300"
                  />
                </div>
                <h3 className="text-2xl font-bold mb-4 text-foreground">Mitr Rangmanch</h3>
                <p className="text-muted-foreground mb-4">
                  A creative hub for films and theatre, where we develop our digital productions and collaborative projects.
                </p>
                <p className="text-sm text-muted-foreground font-medium">
                  📍 Films and Theatre Studio, Delhi
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Home;