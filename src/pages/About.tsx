const About = () => {
  return (
    <div className="min-h-screen pt-24 pb-12">
      <div className="container mx-auto px-6">
        {/* Header */}
        <div className="text-center mb-16">
          <h1 className="text-4xl md:text-6xl font-bold mb-6">
            <span className="bg-gradient-to-r from-foreground to-primary bg-clip-text text-transparent">
              About Us
            </span>
          </h1>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
            Discover the story behind Parda Artists Association and our journey in the world of theatre.
          </p>
        </div>

        {/* Main Content */}
        <div className="max-w-4xl mx-auto space-y-12">
          {/* Our Story */}
          <section className="bg-card rounded-lg p-8 border border-border">
            <h2 className="text-3xl font-bold mb-6 text-primary">Our Story</h2>
            <div className="prose prose-lg max-w-none text-foreground">
              <p className="text-lg leading-relaxed mb-6">
                Founded with a passion for storytelling and a love for the performing arts, Parda Artists Association 
                has been a cornerstone of our community's cultural landscape. We believe that theatre has the unique 
                power to bring people together, challenge perspectives, and create lasting memories.
              </p>
              <p className="text-lg leading-relaxed mb-6">
                Our name "Parda" represents the curtain that separates the audience from the stage, symbolizing the 
                magical transformation that occurs when that curtain rises and stories come to life. We are dedicated 
                to creating authentic, meaningful theatrical experiences that resonate with audiences of all ages.
              </p>
            </div>
          </section>

          {/* Our Mission */}
          <section className="bg-card rounded-lg p-8 border border-border">
            <h2 className="text-3xl font-bold mb-6 text-primary">Our Mission</h2>
            <div className="grid md:grid-cols-2 gap-8">
              <div>
                <h3 className="text-xl font-semibold mb-4">Artistic Excellence</h3>
                <p className="text-muted-foreground leading-relaxed">
                  We strive to produce high-quality theatrical performances that showcase the talents of our 
                  artists while delivering powerful, engaging stories to our audiences.
                </p>
              </div>
              <div>
                <h3 className="text-xl font-semibold mb-4">Community Engagement</h3>
                <p className="text-muted-foreground leading-relaxed">
                  We are committed to fostering a sense of community through the arts, providing opportunities 
                  for local talent to grow and shine on stage.
                </p>
              </div>
              <div>
                <h3 className="text-xl font-semibold mb-4">Cultural Enrichment</h3>
                <p className="text-muted-foreground leading-relaxed">
                  Through our diverse range of productions, we aim to enrich the cultural fabric of our 
                  community and promote appreciation for the performing arts.
                </p>
              </div>
              <div>
                <h3 className="text-xl font-semibold mb-4">Inclusive Platform</h3>
                <p className="text-muted-foreground leading-relaxed">
                  We welcome artists from all backgrounds and experience levels, creating an inclusive 
                  environment where creativity can flourish without boundaries.
                </p>
              </div>
            </div>
          </section>

          {/* Our Values */}
          <section className="bg-card rounded-lg p-8 border border-border">
            <h2 className="text-3xl font-bold mb-6 text-primary">Our Values</h2>
            <div className="space-y-6">
              <div className="flex items-start space-x-4">
                <div className="w-8 h-8 bg-primary/20 rounded-full flex items-center justify-center flex-shrink-0 mt-1">
                  <svg className="w-4 h-4 text-primary" fill="currentColor" viewBox="0 0 20 20">
                    <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                  </svg>
                </div>
                <div>
                  <h3 className="text-xl font-semibold mb-2">Creativity</h3>
                  <p className="text-muted-foreground">We encourage innovative thinking and artistic expression in all our endeavors.</p>
                </div>
              </div>
              
              <div className="flex items-start space-x-4">
                <div className="w-8 h-8 bg-primary/20 rounded-full flex items-center justify-center flex-shrink-0 mt-1">
                  <svg className="w-4 h-4 text-primary" fill="currentColor" viewBox="0 0 20 20">
                    <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                  </svg>
                </div>
                <div>
                  <h3 className="text-xl font-semibold mb-2">Collaboration</h3>
                  <p className="text-muted-foreground">We believe in the power of teamwork and collective creativity to achieve our goals.</p>
                </div>
              </div>
              
              <div className="flex items-start space-x-4">
                <div className="w-8 h-8 bg-primary/20 rounded-full flex items-center justify-center flex-shrink-0 mt-1">
                  <svg className="w-4 h-4 text-primary" fill="currentColor" viewBox="0 0 20 20">
                    <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                  </svg>
                </div>
                <div>
                  <h3 className="text-xl font-semibold mb-2">Integrity</h3>
                  <p className="text-muted-foreground">We maintain the highest standards of honesty and ethical conduct in all our activities.</p>
                </div>
              </div>
            </div>
          </section>
        </div>
      </div>
    </div>
  );
};

export default About;