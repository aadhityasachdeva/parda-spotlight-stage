const Team = () => {
  const teamMembers = [
    // President
    {
      id: 1,
      name: "Luv Arora",
      role: "President",
      bio: "\"I tell stories on stage, through souls, and in silence.\"",
      image: "/lovable-uploads/d83fa03d-2771-40e1-949c-b76a23e8840a.png",
      category: "president"
    },
    // Positions
    {
      id: 2,
      name: "Gauri Dhingra",
      role: "General Secretary",
      bio: "\"Acting? Therapy. Drama? Default setting. Stage? My comfort zone.\"",
      image: "/lovable-uploads/343c86ac-77ee-473e-b9de-02f24c069025.png",
      category: "position"
    },
    {
      id: 3,
      name: "Pearl Chadha",
      role: "Treasurer",
      bio: "\"My life is a movie with full on filmi songs and dramatic plot twists!\"",
      image: "/lovable-uploads/c7940e2f-9f28-4019-8ba3-d07cff02878d.png",
      category: "position"
    },
    // Executive Members
    {
      id: 4,
      name: "Aditya Malik",
      role: "Executive Member",
      bio: "\"Where does the stage end, where does my life begin?\"",
      image: "/lovable-uploads/6d8952c3-f5a2-407a-9d4d-e083aaece9dc.png",
      category: "executive"
    },
    {
      id: 5,
      name: "Shaurya Mathur",
      role: "Executive Member",
      bio: "\"Interested people see obsessed people change the world\"",
      image: "/lovable-uploads/50654167-a11b-4425-a819-502c11165a99.png",
      category: "executive"
    },
    {
      id: 6,
      name: "Aadhitya Sachdeva",
      role: "Executive Member",
      bio: "\"If one person pauses and feels, truly feels, then I've made art. That's what I chase.\"",
      image: "/lovable-uploads/02bffc51-ecd8-4413-a719-4c11c29bc815.png",
      category: "executive"
    },
    {
      id: 7,
      name: "Naunidh Rekhi",
      role: "Executive Member",
      bio: "\"Discipline isn't in yelling 'action'. It's in the hours no one sees, where vision becomes story.\"",
      image: "/lovable-uploads/28b6adf7-adf8-4f08-ac82-90bf6d8c2a69.png",
      category: "executive"
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

        {/* Team Sections */}
        <div className="space-y-20">
          {/* President Section */}
          <div className="text-center">
            <h2 className="text-3xl font-bold mb-12 text-card-foreground">President</h2>
            <div className="flex justify-center">
              {teamMembers.filter(member => member.category === 'president').map((member) => (
                <div
                  key={member.id}
                  className="bg-card rounded-xl border border-border hover:border-primary/50 transition-all duration-300 hover:shadow-xl group max-w-lg overflow-hidden"
                >
                  {/* Member Photo */}
                  <div className="w-full h-96 group-hover:scale-105 transition-transform duration-300 bg-gray-100">
                    <img 
                      src={member.image} 
                      alt={member.name}
                      className="w-full h-full object-contain"
                    />
                  </div>

                  {/* Member Info */}
                  <div className="p-8 text-center">
                    <h3 className="text-3xl font-bold text-card-foreground mb-2">{member.name}</h3>
                    <p className="text-primary font-semibold text-xl mb-4">{member.role}</p>
                    <p className="text-muted-foreground leading-relaxed text-lg italic">{member.bio}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Positions Section */}
          <div>
            <h2 className="text-3xl font-bold mb-12 text-center text-card-foreground">Core Positions</h2>
            <div className="grid md:grid-cols-2 gap-10 max-w-5xl mx-auto">
              {teamMembers.filter(member => member.category === 'position').map((member) => (
                <div
                  key={member.id}
                  className="bg-card rounded-xl border border-border hover:border-primary/50 transition-all duration-300 hover:shadow-xl group overflow-hidden"
                >
                  {/* Member Photo */}
                  <div className="w-full h-80 group-hover:scale-105 transition-transform duration-300 bg-gray-100">
                    <img 
                      src={member.image} 
                      alt={member.name}
                      className="w-full h-full object-contain"
                    />
                  </div>

                  {/* Member Info */}
                  <div className="p-6 text-center">
                    <h3 className="text-2xl font-bold text-card-foreground mb-2">{member.name}</h3>
                    <p className="text-primary font-semibold text-lg mb-4">{member.role}</p>
                    <p className="text-muted-foreground leading-relaxed italic">{member.bio}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Executive Members Section */}
          <div>
            <h2 className="text-3xl font-bold mb-12 text-center text-card-foreground">Executive Members</h2>
            <div className="grid grid-cols-2 lg:grid-cols-4 gap-8 max-w-6xl mx-auto">
              {teamMembers.filter(member => member.category === 'executive').map((member) => (
                <div
                  key={member.id}
                  className="bg-card rounded-xl border border-border hover:border-primary/50 transition-all duration-300 hover:shadow-xl group overflow-hidden"
                >
                  {/* Member Photo */}
                  <div className="w-full h-64 group-hover:scale-105 transition-transform duration-300 bg-gray-100">
                    <img 
                      src={member.image} 
                      alt={member.name}
                      className="w-full h-full object-contain"
                    />
                  </div>

                  {/* Member Info */}
                  <div className="p-4 text-center">
                    <h3 className="text-lg font-bold text-card-foreground mb-2">{member.name}</h3>
                    <p className="text-primary font-semibold text-sm mb-3">{member.role}</p>
                    <p className="text-muted-foreground leading-relaxed text-xs italic">{member.bio}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
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