import { Calendar, Clock, MapPin, Star, Phone, CheckCircle } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { Link } from "react-router-dom";

const UpcomingEvents = () => {
  const events = [
    {
      id: 1,
      title: "Storytelling Workshop",
      subtitle: "By Vijay Kakwani",
      type: "Workshop",
      description: "An immersive storytelling workshop with award-winning Author, Storyteller, and Storytelling Coach Vijay Kakwani. Discover the art of impactful storytelling, learn secret structures behind unforgettable stories, and unlock your unique creative voice.",
      date: "27th September 2025",
      time: "4 pm onwards",
      venue: "Art Adventures Studio, Pitampura",
      fullVenue: "81 (Ground Floor), Vasudha Enclave (Gate No. 1), Pitampura, New Delhi – 110034",
      contact: "9560285384, 9582041473",
      registrationLink: "https://forms.gle/efJT4mPomVmd62tE7",
      featured: true,
      highlights: [
        "Discover the art of impactful storytelling",
        "Learn secret structures behind unforgettable stories", 
        "Turn ideas into powerful narratives",
        "Craft engaging characters and dialogues",
        "Overcome writer's block",
        "Interactive exercises to nurture your unique voice"
      ]
    },
    {
      id: 2,
      title: "Prem Kabootar",
      subtitle: "By Manav Kaul",
      type: "Theatre Play",
      description: "A captivating theatrical experience exploring themes of love, loss, and human connection through powerful storytelling and compelling performances.",
      status: "Coming Soon",
      venue: "TBA",
      featured: true
    },
    {
      id: 3,
      title: "Acting & Performance Workshop",
      subtitle: "Intensive Training Program",
      type: "Workshop",
      description: "A comprehensive workshop designed to enhance acting skills, stage presence, and character development techniques for aspiring and experienced performers.",
      status: "Coming Soon",
      venue: "TBA",
      featured: false
    },
    {
      id: 4,
      title: "Suicide Prevention Awareness",
      subtitle: "Short Film Project",
      type: "Short Film",
      description: "A powerful short film addressing mental health awareness and suicide prevention, using cinema as a medium to spark important conversations and promote healing.",
      status: "Coming Soon",
      venue: "Digital Release",
      featured: true
    }
  ];

  return (
    <div className="min-h-screen pt-24 pb-12">
      <div className="container mx-auto px-6">
        {/* Header */}
        <div className="text-center mb-16">
          <h1 className="text-4xl md:text-6xl font-bold mb-6">
            <span className="bg-gradient-to-r from-foreground to-primary bg-clip-text text-transparent">
              Upcoming Events
            </span>
          </h1>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
            Exciting theatrical experiences and creative projects coming your way. Stay tuned for dates and details!
          </p>
        </div>

        {/* Events Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {events.map((event) => (
            <div
              key={event.id}
              className={`group relative bg-card rounded-2xl overflow-hidden border transition-all duration-300 hover:shadow-xl ${
                event.featured 
                  ? "border-primary/50 shadow-lg shadow-primary/10" 
                  : "border-border hover:border-primary/50"
              }`}
            >
              {/* Featured Badge */}
              {event.featured && (
                <div className="absolute top-4 right-4 z-10">
                  <Badge className="bg-primary text-primary-foreground">
                    <Star className="w-3 h-3 mr-1" />
                    Featured
                  </Badge>
                </div>
              )}

              {/* Gradient Background */}
              <div 
                className="absolute inset-0 opacity-10"
                style={{
                  background: "var(--theatrical-gradient)",
                }}
              />

              {/* Content */}
              <div className="relative p-8 h-full flex flex-col">
                {/* Event Type */}
                <div className="mb-4">
                  <Badge variant="outline" className="text-xs">
                    {event.type}
                  </Badge>
                </div>

                {/* Title and Subtitle */}
                <div className="mb-6 flex-grow">
                  <h3 className="text-2xl font-bold mb-2 text-card-foreground group-hover:text-primary transition-colors">
                    {event.title}
                  </h3>
                  <p className="text-lg text-muted-foreground font-medium mb-4">
                    {event.subtitle}
                  </p>
                  
                  {/* Show poster for storytelling workshop */}
                  {event.id === 1 && (
                    <div className="mb-4">
                      <img 
                        src="/lovable-uploads/eb6185a3-ed77-44c2-8153-d395c1876abc.png"
                        alt="Storytelling Workshop Poster"
                        className="w-full h-auto rounded-lg shadow-md"
                      />
                    </div>
                  )}
                  
                  <p className="text-muted-foreground leading-relaxed">
                    {event.description}
                  </p>
                </div>

                {/* Event Details */}
                <div className="space-y-3 mb-6">
                  <div className="flex items-center text-sm text-muted-foreground">
                    <Calendar className="w-4 h-4 mr-2" />
                    <span>{event.date || event.status}</span>
                  </div>
                  {event.time && (
                    <div className="flex items-center text-sm text-muted-foreground">
                      <Clock className="w-4 h-4 mr-2" />
                      <span>{event.time}</span>
                    </div>
                  )}
                  <div className="flex items-center text-sm text-muted-foreground">
                    <MapPin className="w-4 h-4 mr-2" />
                    <span>{event.venue}</span>
                  </div>
                  {event.contact && (
                    <div className="flex items-center text-sm text-muted-foreground">
                      <Phone className="w-4 h-4 mr-2" />
                      <span>{event.contact}</span>
                    </div>
                  )}
                </div>

                {/* Workshop Highlights */}
                {event.highlights && (
                  <div className="mb-6">
                    <h4 className="text-sm font-semibold mb-3 text-foreground">What you'll learn:</h4>
                    <div className="space-y-2">
                      {event.highlights.map((highlight, index) => (
                        <div key={index} className="flex items-start text-sm text-muted-foreground">
                          <CheckCircle className="w-3 h-3 mr-2 mt-0.5 text-primary flex-shrink-0" />
                          <span>{highlight}</span>
                        </div>
                      ))}
                    </div>
                  </div>
                )}

                {/* Call to Action */}
                <div className="mt-auto">
                  {event.registrationLink ? (
                    <Link to="/storytelling-workshop">
                      <Button className="w-full bg-primary hover:bg-primary/90 text-primary-foreground">
                        View Details & Register
                      </Button>
                    </Link>
                  ) : (
                    <Button 
                      variant="outline" 
                      className="w-full group-hover:bg-primary group-hover:text-primary-foreground transition-all duration-300"
                      disabled
                    >
                      <Clock className="w-4 h-4 mr-2" />
                      More Details Soon
                    </Button>
                  )}
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Call to Action */}
        <div className="text-center mt-16">
          <div className="bg-card/50 backdrop-blur-sm border border-border rounded-2xl p-8 md:p-12">
            <h2 className="text-3xl font-bold mb-4 text-foreground">
              Don't Miss Out!
            </h2>
            <p className="text-lg text-muted-foreground mb-8 max-w-2xl mx-auto">
              Be the first to know about our upcoming events, workshops, and performances. 
              Join our theatre family and stay connected with the magic of storytelling.
            </p>
            <Button 
              size="lg" 
              className="bg-primary hover:bg-primary/90 text-primary-foreground px-8 py-4"
              onClick={() => window.open("https://forms.gle/pyxLBWVyLKFtt9v9A", "_blank")}
            >
              Join Parda Now
            </Button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default UpcomingEvents;