const Team = () => {
  // Placeholder team members - in a real app, this would come from a database
  const teamMembers = [
    {
      id: 1,
      name: "Sarah Johnson",
      role: "Director & Founder",
      bio: "With over 15 years of experience in theatre, Sarah founded Parda Artists Association to create a platform for passionate storytellers.",
      specialties: ["Direction", "Script Writing", "Acting Coaching"]
    },
    {
      id: 2,
      name: "Michael Chen",
      role: "Lead Actor",
      bio: "A versatile performer with a background in classical and contemporary theatre. Michael brings depth and authenticity to every role.",
      specialties: ["Classical Theatre", "Method Acting", "Voice Training"]
    },
    {
      id: 3,
      name: "Emily Rodriguez",
      role: "Stage Manager",
      bio: "The backbone of our productions, Emily ensures every performance runs seamlessly with her meticulous attention to detail.",
      specialties: ["Production Management", "Technical Coordination", "Scheduling"]
    },
    {
      id: 4,
      name: "David Thompson",
      role: "Set Designer",
      bio: "David creates the magical worlds that transport our audiences. His innovative designs have become a signature of our productions.",
      specialties: ["Set Design", "Props Creation", "Visual Storytelling"]
    },
    {
      id: 5,
      name: "Priya Patel",
      role: "Costume Designer",
      bio: "Priya's exquisite costume designs bring characters to life, with careful attention to historical accuracy and artistic vision.",
      specialties: ["Period Costumes", "Fabric Arts", "Character Development"]
    },
    {
      id: 6,
      name: "James Wilson",
      role: "Sound & Lighting",
      bio: "James crafts the atmospheric elements that enhance our storytelling through masterful sound design and lighting techniques.",
      specialties: ["Audio Engineering", "Lighting Design", "Technical Innovation"]
    }
  ];

  return (
    <div className="min-h-screen pt-24 pb-12">
      <div className="container mx-auto px-6">
        {/* Header */}
        <div className="text-center mb-16">
          <h1 className="text-4xl md:text-6xl font-bold mb-6">
            <span className="bg-gradient-to-r from-foreground to-primary bg-clip-text text-transparent">
              Meet the Team
            </span>
          </h1>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
            Get to know the talented individuals who bring our theatrical visions to life with passion and dedication.
          </p>
        </div>

        {/* Team Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {teamMembers.map((member) => (
            <div
              key={member.id}
              className="bg-card rounded-lg p-6 border border-border hover:border-primary/50 transition-all duration-300 hover:shadow-lg group"
            >
              {/* Avatar Placeholder */}
              <div className="w-24 h-24 bg-gradient-to-br from-primary/20 to-accent/20 rounded-full flex items-center justify-center mx-auto mb-6 group-hover:scale-105 transition-transform duration-300">
                <svg className="w-12 h-12 text-primary" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M16 7a4 4 0 11-8 0 4 4 0 018 0zM12 14a7 7 0 00-7 7h14a7 7 0 00-7-7z" />
                </svg>
              </div>

              {/* Member Info */}
              <div className="text-center mb-4">
                <h3 className="text-xl font-bold text-card-foreground mb-1">{member.name}</h3>
                <p className="text-primary font-medium mb-3">{member.role}</p>
                <p className="text-muted-foreground leading-relaxed text-sm mb-4">{member.bio}</p>
              </div>

              {/* Specialties */}
              <div className="space-y-2">
                <h4 className="text-sm font-semibold text-card-foreground">Specialties:</h4>
                <div className="flex flex-wrap gap-2">
                  {member.specialties.map((specialty, index) => (
                    <span
                      key={index}
                      className="px-3 py-1 bg-primary/10 text-primary rounded-full text-xs font-medium"
                    >
                      {specialty}
                    </span>
                  ))}
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Join Us Section */}
        <div className="mt-20 text-center bg-card rounded-lg p-12 border border-border">
          <h2 className="text-3xl font-bold mb-6 text-card-foreground">Join Our Team</h2>
          <p className="text-muted-foreground text-lg mb-8 max-w-2xl mx-auto">
            Are you passionate about theatre and storytelling? We're always looking for talented individuals 
            to join our creative family. Whether you're an actor, director, designer, or technician, 
            we'd love to hear from you.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <button className="bg-primary hover:bg-primary/90 text-primary-foreground px-8 py-3 rounded-lg font-medium transition-colors duration-300">
              Get in Touch
            </button>
            <button className="border border-primary text-primary hover:bg-primary hover:text-primary-foreground px-8 py-3 rounded-lg font-medium transition-colors duration-300">
              Learn More
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Team;