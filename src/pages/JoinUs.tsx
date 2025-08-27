import { Button } from "@/components/ui/button";

const JoinUs = () => {
  const handleJoinClick = () => {
    window.open("https://forms.gle/pyxLBWVyLKFtt9v9A", "_blank");
  };

  return (
    <div className="min-h-screen pt-20">
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

            {/* Title */}
            <h1 className="text-5xl md:text-7xl font-bold mb-6 animate-in slide-in-from-bottom-4 duration-1000 delay-300">
              <span className="bg-gradient-to-r from-foreground to-primary bg-clip-text text-transparent">
                Join Parda
              </span>
            </h1>
            
            <p className="text-xl md:text-2xl text-muted-foreground mb-8 animate-in slide-in-from-bottom-4 duration-1000 delay-500">
              Ab uthegaaaa, PARDA! 🎬
            </p>

            <div className="bg-card/50 backdrop-blur-sm border border-border rounded-2xl p-8 md:p-12 mb-12 animate-in fade-in duration-1000 delay-700">
              <h2 className="text-2xl md:text-3xl font-semibold mb-6 text-foreground">
                Ready to be part of our theatre family?
              </h2>
              <p className="text-lg text-muted-foreground mb-8 leading-relaxed">
                Whether you're an experienced performer or just starting your artistic journey, Parda welcomes you. Join our community of passionate artists dedicated to the craft of storytelling and dramatic arts.
              </p>
              
              <div className="space-y-6">
                <div className="flex flex-col md:flex-row items-center justify-center gap-3 md:gap-6 text-muted-foreground px-4">
                  <div className="flex items-center space-x-2 text-sm md:text-base">
                    <svg className="w-4 h-4 md:w-5 md:h-5 text-primary flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                    </svg>
                    <span className="whitespace-nowrap">Workshops & Training</span>
                  </div>
                  <div className="flex items-center space-x-2 text-sm md:text-base">
                    <svg className="w-4 h-4 md:w-5 md:h-5 text-primary flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                    </svg>
                    <span className="whitespace-nowrap">Performance Opportunities</span>
                  </div>
                  <div className="flex items-center space-x-2 text-sm md:text-base">
                    <svg className="w-4 h-4 md:w-5 md:h-5 text-primary flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                    </svg>
                    <span className="whitespace-nowrap">Creative Community</span>
                  </div>
                </div>
              </div>
            </div>

            {/* Join Button */}
            <div className="animate-in slide-in-from-bottom-4 duration-1000 delay-900">
              <Button 
                onClick={handleJoinClick}
                size="lg" 
                className="bg-primary hover:bg-primary/90 text-primary-foreground px-12 py-4 text-xl rounded-full shadow-2xl hover:shadow-primary/25 transition-all duration-300 transform hover:scale-105"
              >
                Join Parda Now
              </Button>
              <p className="text-sm text-muted-foreground mt-4">
                Click to access our registration links and social media
              </p>
            </div>
          </div>
        </div>

        {/* Decorative Elements */}
        <div className="absolute bottom-0 left-0 right-0 h-32 bg-gradient-to-t from-background to-transparent z-5" />
      </section>
    </div>
  );
};

export default JoinUs;