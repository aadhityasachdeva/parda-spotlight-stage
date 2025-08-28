import { Button } from "@/components/ui/button";
import { Calendar, Clock, MapPin, Phone, CheckCircle, Award, Users, Star } from "lucide-react";

const StorytellingWorkshop = () => {
  return (
    <div className="min-h-screen pt-24 pb-12">
      <div className="container mx-auto px-6">
        {/* Header */}
        <div className="text-center mb-16">
          <h1 className="text-4xl md:text-6xl font-bold mb-6">
            <span className="bg-gradient-to-r from-foreground to-primary bg-clip-text text-transparent">
              Storytelling Workshop
            </span>
          </h1>
          <p className="text-xl text-primary font-semibold">
            By Vijay Kakwani
          </p>
        </div>

        <div className="max-w-6xl mx-auto">
          <div className="grid lg:grid-cols-2 gap-12 items-start">
            {/* Workshop Poster */}
            <div className="order-2 lg:order-1">
              <div className="relative rounded-2xl overflow-hidden shadow-2xl">
                <img 
                  src="/lovable-uploads/3a96ae04-926b-4ca7-a8ce-c16925648f6f.png"
                  alt="Storytelling Workshop Poster"
                  className="w-full h-auto"
                />
              </div>
            </div>

            {/* Workshop Details */}
            <div className="order-1 lg:order-2 space-y-8">
              {/* About the Workshop */}
              <div className="bg-card/50 backdrop-blur-sm border border-border rounded-2xl p-8">
                <h2 className="text-3xl font-bold mb-6 text-foreground">About the Workshop</h2>
                <p className="text-muted-foreground leading-relaxed text-lg mb-6">
                  Parda Theatre Group invites you to an immersive Storytelling Workshop with Vijay Kakwani – an award-winning Author, Storyteller, and Storytelling Coach with over 23 years of corporate and creative experience.
                </p>
                
                {/* Instructor Highlights */}
                <div className="space-y-3 mb-8">
                  <div className="flex items-start space-x-3">
                    <Award className="w-5 h-5 text-primary mt-1 flex-shrink-0" />
                    <span className="text-muted-foreground">Only author to win Kindle's Pen to Publish contest twice in a row</span>
                  </div>
                  <div className="flex items-start space-x-3">
                    <Star className="w-5 h-5 text-primary mt-1 flex-shrink-0" />
                    <span className="text-muted-foreground">Winner at the prestigious Tata Litfest</span>
                  </div>
                  <div className="flex items-start space-x-3">
                    <Award className="w-5 h-5 text-primary mt-1 flex-shrink-0" />
                    <span className="text-muted-foreground">Platinum Winner of Storytelling at Asia's Largest Content Fest (I.F.P)</span>
                  </div>
                  <div className="flex items-start space-x-3">
                    <Users className="w-5 h-5 text-primary mt-1 flex-shrink-0" />
                    <span className="text-muted-foreground">Scriptwriter for the world's first video-based Bhagavad Gita</span>
                  </div>
                  <div className="flex items-start space-x-3">
                    <Users className="w-5 h-5 text-primary mt-1 flex-shrink-0" />
                    <span className="text-muted-foreground">Conducted workshops for Sony Pictures Networks, IIT Delhi, and IIT Kanpur</span>
                  </div>
                </div>

                {/* What You'll Learn */}
                <div className="mb-8">
                  <h3 className="text-xl font-semibold mb-4 text-foreground">In this workshop, you will:</h3>
                  <div className="space-y-3">
                    <div className="flex items-start space-x-3">
                      <CheckCircle className="w-5 h-5 text-primary mt-0.5 flex-shrink-0" />
                      <span className="text-muted-foreground">Discover the art of impactful storytelling</span>
                    </div>
                    <div className="flex items-start space-x-3">
                      <CheckCircle className="w-5 h-5 text-primary mt-0.5 flex-shrink-0" />
                      <span className="text-muted-foreground">Learn the secret structures behind unforgettable stories</span>
                    </div>
                    <div className="flex items-start space-x-3">
                      <CheckCircle className="w-5 h-5 text-primary mt-0.5 flex-shrink-0" />
                      <span className="text-muted-foreground">Turn ideas into powerful narratives</span>
                    </div>
                    <div className="flex items-start space-x-3">
                      <CheckCircle className="w-5 h-5 text-primary mt-0.5 flex-shrink-0" />
                      <span className="text-muted-foreground">Craft engaging characters and dialogues</span>
                    </div>
                    <div className="flex items-start space-x-3">
                      <CheckCircle className="w-5 h-5 text-primary mt-0.5 flex-shrink-0" />
                      <span className="text-muted-foreground">Overcome writer's block</span>
                    </div>
                    <div className="flex items-start space-x-3">
                      <CheckCircle className="w-5 h-5 text-primary mt-0.5 flex-shrink-0" />
                      <span className="text-muted-foreground">Participate in interactive exercises to nurture your unique voice</span>
                    </div>
                  </div>
                </div>

                <p className="text-muted-foreground leading-relaxed">
                  Whether you are a performer, writer, professional, or simply someone who loves stories, this workshop will help you unlock the magic of storytelling.
                </p>
              </div>

              {/* Event Details */}
              <div className="bg-card/50 backdrop-blur-sm border border-border rounded-2xl p-8">
                <h3 className="text-2xl font-bold mb-6 text-foreground">Event Details</h3>
                <div className="space-y-6">
                  <div className="flex items-center space-x-4">
                    <div className="w-12 h-12 bg-primary/10 rounded-full flex items-center justify-center">
                      <Calendar className="w-6 h-6 text-primary" />
                    </div>
                    <div>
                      <p className="font-semibold text-foreground">Date</p>
                      <p className="text-muted-foreground">27th September 2025</p>
                    </div>
                  </div>
                  
                  <div className="flex items-center space-x-4">
                    <div className="w-12 h-12 bg-primary/10 rounded-full flex items-center justify-center">
                      <Clock className="w-6 h-6 text-primary" />
                    </div>
                    <div>
                      <p className="font-semibold text-foreground">Time</p>
                      <p className="text-muted-foreground">4 pm onwards</p>
                    </div>
                  </div>
                  
                  <div className="flex items-start space-x-4">
                    <div className="w-12 h-12 bg-primary/10 rounded-full flex items-center justify-center">
                      <MapPin className="w-6 h-6 text-primary" />
                    </div>
                    <div>
                      <p className="font-semibold text-foreground">Venue</p>
                      <p className="text-muted-foreground">Art Adventures Studio, Pitampura</p>
                      <p className="text-sm text-muted-foreground">
                        81 (Ground Floor), Vasudha Enclave (Gate No. 1),<br />
                        Pitampura, New Delhi – 110034
                      </p>
                    </div>
                  </div>
                  
                  <div className="flex items-center space-x-4">
                    <div className="w-12 h-12 bg-primary/10 rounded-full flex items-center justify-center">
                      <Phone className="w-6 h-6 text-primary" />
                    </div>
                    <div>
                      <p className="font-semibold text-foreground">Contact</p>
                      <p className="text-muted-foreground">9560285384, 9582041473</p>
                    </div>
                  </div>
                </div>
              </div>

              {/* Registration */}
              <div className="bg-primary/10 border border-primary/20 rounded-2xl p-8 text-center">
                <h3 className="text-2xl font-bold mb-4 text-foreground">Ready to Begin Your Storytelling Journey?</h3>
                <p className="text-muted-foreground mb-6">
                  Secure your spot in this transformative workshop and discover the storyteller within you.
                </p>
                <Button 
                  size="lg" 
                  className="bg-primary hover:bg-primary/90 text-primary-foreground px-12 py-4 text-lg"
                  onClick={() => window.open("https://forms.gle/efJT4mPomVmd62tE7", "_blank")}
                >
                  Register Now
                </Button>
                <div className="mt-4 text-sm text-muted-foreground">
                  <p>Ages 16+</p>
                  <p>Fees: ₹1500/- | Early bird: ₹1000/-</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default StorytellingWorkshop;