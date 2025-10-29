import { Calendar, Clock, MapPin, Star, Phone } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";

const UpcomingEvents = () => {
  const events: any[] = [
    {
      id: 1,
      title: "Theatre Workshop",
      subtitle: "For Adults (18+) and Kids (7-14 yrs)",
      type: "Workshop",
      description: "Transform yourself through the power of theatre. Our comprehensive workshop offers separate sessions for adults and children, focusing on building confidence, exploring emotions, and developing stage presence.",
      date: "Start of the Month",
      timings: {
        adults: "11 AM to 3 PM",
        kids: "5 PM to 7 PM"
      },
      duration: "8 weeks",
      venue: "Art Adventures Studio, Pitampura",
      contact: "+91 9899028271",
      registrationLink: "tel:+919899028271",
      featured: true
    },
    {
      id: 2,
      title: "Prem Kabootar",
      subtitle: "By Manav Kaul",
      type: "Theatre Play",
      description: "A captivating theatrical experience exploring themes of love, loss, and human connection through powerful storytelling and compelling performances.",
      status: "Coming Soon",
      venue: "TBA",
      featured: true,
      galleryLink: "/gallery"
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
                  
                  {/* Show poster for theatre workshop */}
                  {event.id === 1 && (
                    <div className="mb-4">
                      <img 
                        src="/lovable-uploads/theatre-workshop-poster.png"
                        alt="Theatre Workshop Poster"
                        className="w-full h-auto rounded-lg shadow-md"
                      />
                    </div>
                  )}
                  
                  {/* Show description only for non-theatre workshop events */}
                  {event.id !== 1 && (
                    <p className="text-muted-foreground leading-relaxed">
                      {event.description}
                    </p>
                  )}
                </div>

                {/* Event Details */}
                <div className="space-y-3 mb-6">
                  <div className="flex items-center text-sm text-muted-foreground">
                    <Calendar className="w-4 h-4 mr-2" />
                    <span>{event.date || event.status}</span>
                  </div>
                  {event.timings && (
                    <div className="space-y-2">
                      <div className="flex items-center text-sm text-muted-foreground">
                        <Clock className="w-4 h-4 mr-2" />
                        <span>Adults: {event.timings.adults}</span>
                      </div>
                      <div className="flex items-center text-sm text-muted-foreground">
                        <Clock className="w-4 h-4 mr-2" />
                        <span>Kids: {event.timings.kids}</span>
                      </div>
                    </div>
                  )}
                  {event.time && (
                    <div className="flex items-center text-sm text-muted-foreground">
                      <Clock className="w-4 h-4 mr-2" />
                      <span>{event.time}</span>
                    </div>
                  )}
                  {event.duration && (
                    <div className="flex items-center text-sm text-muted-foreground">
                      <Calendar className="w-4 h-4 mr-2" />
                      <span>Duration: {event.duration}</span>
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

                {/* Call to Action */}
                <div className="mt-auto">
                  {event.registrationLink ? (
                    <a href={event.registrationLink}>
                      <Button className="w-full bg-primary hover:bg-primary/90 text-primary-foreground">
                        Contact to Register
                      </Button>
                    </a>
                  ) : event.galleryLink ? (
                    <a href={event.galleryLink}>
                      <Button 
                        variant="outline" 
                        className="w-full group-hover:bg-primary group-hover:text-primary-foreground transition-all duration-300"
                      >
                        More Details
                      </Button>
                    </a>
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
