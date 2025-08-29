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

      {/* Workshop Section */}
      <section className="py-20 bg-gradient-to-br from-primary/5 to-secondary/5">
        <div className="container mx-auto px-6">
          <div className="max-w-4xl mx-auto text-center">
            <h2 className="text-3xl md:text-5xl font-bold mb-6">
              <span className="text-foreground drop-shadow-lg">
                ✨ Storytelling Workshop with Vijay Kakwani ✨
              </span>
            </h2>
            <p className="text-xl text-foreground/90 font-medium mb-8 leading-relaxed drop-shadow-sm">
              Join us for an immersive workshop with an award-winning Author, Storyteller, and Coach. 
              Discover the art of impactful storytelling and unlock your creative voice.
            </p>
            <div className="grid md:grid-cols-3 gap-6 mb-8">
              <div className="bg-card/50 backdrop-blur-sm border border-border rounded-xl p-6">
                <svg className="w-8 h-8 text-primary mx-auto mb-3" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8 7V3m8 4V3m-9 8h10M5 21h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z" />
                </svg>
                <h3 className="font-semibold mb-2">Date & Time</h3>
                <p className="text-sm text-muted-foreground">27th Sept 2025<br/>4:30 PM onwards</p>
              </div>
              <div className="bg-card/50 backdrop-blur-sm border border-border rounded-xl p-6">
                <svg className="w-8 h-8 text-primary mx-auto mb-3" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
                </svg>
                <h3 className="font-semibold mb-2">Venue</h3>
                <p className="text-sm text-muted-foreground">Art Adventures Studio<br/>Pitampura, Delhi</p>
              </div>
              <div className="bg-card/50 backdrop-blur-sm border border-border rounded-xl p-6">
                <svg className="w-8 h-8 text-primary mx-auto mb-3" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" />
                </svg>
                <h3 className="font-semibold mb-2">Duration</h3>
                <p className="text-sm text-muted-foreground">2 Hours<br/>Interactive Session</p>
              </div>
            </div>
            <Button 
              size="lg" 
              className="bg-primary hover:bg-primary/90 text-primary-foreground px-8"
              onClick={() => window.location.href = "/storytelling-workshop"}
            >
              Learn More About Workshop
            </Button>
          </div>
        </div>
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

      {/* Contact Us Section */}
      <section className="py-20 bg-background">
        <div className="container mx-auto px-6">
          <div className="max-w-4xl mx-auto text-center">
            <h2 className="text-4xl md:text-5xl font-bold mb-8 text-foreground">
              Contact Us
            </h2>
            <div className="bg-card/50 backdrop-blur-sm border border-border rounded-2xl p-8 md:p-12">
              <p className="text-lg md:text-xl text-muted-foreground leading-relaxed mb-8">
                Ready to join our theatre family? Follow us on Instagram to stay updated with our latest shows, workshops, and events.
              </p>
              
              {/* Instagram Link */}
              <div className="flex justify-center">
                <Button 
                  asChild 
                  size="lg" 
                  className="bg-primary hover:bg-primary/90 text-primary-foreground px-12 py-4 text-xl rounded-full shadow-lg hover:shadow-xl transition-all duration-300"
                >
                  <a 
                    href="https://www.instagram.com/parda_theatregroup/" 
                    target="_blank" 
                    rel="noopener noreferrer"
                    className="flex items-center gap-3"
                  >
                    <svg 
                      className="w-6 h-6" 
                      fill="currentColor" 
                      viewBox="0 0 24 24" 
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zm0-2.163c-3.259 0-3.667.014-4.947.072-4.358.2-6.78 2.618-6.98 6.98-.059 1.281-.073 1.689-.073 4.948 0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98 1.281.058 1.689.072 4.948.072 3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98-1.281-.059-1.69-.073-4.949-.073zm0 5.838c-3.403 0-6.162 2.759-6.162 6.162s2.759 6.163 6.162 6.163 6.162-2.759 6.162-6.163c0-3.403-2.759-6.162-6.162-6.162zm0 10.162c-2.209 0-4-1.79-4-4 0-2.209 1.791-4 4-4s4 1.791 4 4c0 2.21-1.791 4-4 4zm6.406-11.845c-.796 0-1.441.645-1.441 1.44s.645 1.44 1.441 1.44c.795 0 1.439-.645 1.439-1.44s-.644-1.44-1.439-1.44z"/>
                    </svg>
                    Follow @parda_theatregroup
                  </a>
                </Button>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Workshop Registration Section */}
      <section className="py-16 bg-muted/30">
        <div className="container mx-auto px-6">
          <div className="text-center max-w-4xl mx-auto">
            <div className="bg-card/80 backdrop-blur-sm border border-border rounded-3xl p-8 md:p-12 shadow-lg">
              <div className="mb-8">
                <div className="inline-flex items-center justify-center w-16 h-16 bg-primary/10 rounded-full mb-4">
                  <svg className="w-8 h-8 text-primary" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 6.253v13m0-13C10.832 5.477 9.246 5 7.5 5S4.168 5.477 3 6.253v13C4.168 18.477 5.754 18 7.5 18s3.332.477 4.5 1.253m0-13C13.168 5.477 14.754 5 16.5 5c1.746 0 3.332.477 4.5 1.253v13C19.832 18.477 18.246 18 16.5 18c-1.746 0-3.332.477-4.5 1.253" />
                  </svg>
                </div>
                <h2 className="text-3xl md:text-4xl font-bold mb-4 text-foreground">
                  Storytelling Workshop
                </h2>
                <p className="text-xl text-primary font-semibold mb-2">
                  By Vijay Kakwani
                </p>
                <p className="text-lg text-muted-foreground mb-6">
                  27th September 2025 • 4 pm onwards
                </p>
                <p className="text-muted-foreground leading-relaxed max-w-2xl mx-auto">
                  Join award-winning storyteller Vijay Kakwani for an immersive workshop that will unlock the magic of storytelling. Learn the art of crafting powerful narratives and discover your unique creative voice.
                </p>
              </div>
              
              <div className="space-y-6">
                <Link to="/storytelling-workshop">
                  <Button 
                    size="lg" 
                    className="bg-primary hover:bg-primary/90 text-primary-foreground px-8 py-4 text-lg"
                  >
                    View Details & Register
                  </Button>
                </Link>
                
                <div className="grid grid-cols-1 md:grid-cols-3 gap-4 text-sm text-muted-foreground">
                  <div className="flex items-center justify-center space-x-2">
                    <svg className="w-4 h-4 text-primary" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
                    </svg>
                    <span>Pitampura, Delhi</span>
                  </div>
                  <div className="flex items-center justify-center space-x-2">
                    <svg className="w-4 h-4 text-primary" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
                    </svg>
                    <span>9560285384</span>
                  </div>
                  <div className="flex items-center justify-center space-x-2">
                    <svg className="w-4 h-4 text-primary" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                    </svg>
                    <span>Expert Guidance</span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Home;