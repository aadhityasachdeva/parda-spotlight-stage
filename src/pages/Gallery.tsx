import { useState } from "react";

const Gallery = () => {
  const [selectedCategory, setSelectedCategory] = useState("All");
  
  const categories = ["All", "Performances", "Rehearsals", "Behind the Scenes", "Events"];
  
  // Placeholder for gallery items - in a real app, this would come from a database
  const galleryItems = [
    {
      id: 1,
      title: "Romeo and Juliet - Opening Night",
      category: "Performances",
      description: "A passionate performance of Shakespeare's timeless tragedy.",
      image: "/api/placeholder/400/300"
    },
    {
      id: 2,
      title: "Rehearsal Session",
      category: "Rehearsals",
      description: "Behind-the-scenes look at our dedicated cast preparing for showtime.",
      image: "/api/placeholder/400/300"
    },
    {
      id: 3,
      title: "Set Design Workshop",
      category: "Behind the Scenes",
      description: "Our talented crew working on creating magical stage environments.",
      image: "/api/placeholder/400/300"
    },
    {
      id: 4,
      title: "Community Theatre Festival",
      category: "Events",
      description: "Celebrating local theatre with fellow artists and community members.",
      image: "/api/placeholder/400/300"
    },
    {
      id: 5,
      title: "The Tempest - Final Act",
      category: "Performances",
      description: "A magical conclusion to Shakespeare's enchanting play.",
      image: "/api/placeholder/400/300"
    },
    {
      id: 6,
      title: "Costume Design Session",
      category: "Behind the Scenes",
      description: "Creating authentic period costumes for our productions.",
      image: "/api/placeholder/400/300"
    },
  ];

  const filteredItems = selectedCategory === "All" 
    ? galleryItems 
    : galleryItems.filter(item => item.category === selectedCategory);

  return (
    <div className="min-h-screen pt-24 pb-12">
      <div className="container mx-auto px-6">
        {/* Header */}
        <div className="text-center mb-16">
          <h1 className="text-4xl md:text-6xl font-bold mb-6">
            <span className="bg-gradient-to-r from-foreground to-primary bg-clip-text text-transparent">
              Gallery
            </span>
          </h1>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
            Explore moments from our theatrical journey - from backstage preparations to magical performances.
          </p>
        </div>

        {/* Category Filter */}
        <div className="flex flex-wrap justify-center gap-4 mb-12">
          {categories.map((category) => (
            <button
              key={category}
              onClick={() => setSelectedCategory(category)}
              className={`px-6 py-2 rounded-full transition-all duration-300 ${
                selectedCategory === category
                  ? "bg-primary text-primary-foreground shadow-lg"
                  : "bg-card text-card-foreground border border-border hover:border-primary/50"
              }`}
            >
              {category}
            </button>
          ))}
        </div>

        {/* Gallery Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {filteredItems.map((item) => (
            <div
              key={item.id}
              className="group bg-card rounded-lg overflow-hidden border border-border hover:border-primary/50 transition-all duration-300 hover:shadow-lg"
            >
              {/* Image Placeholder */}
              <div className="aspect-video bg-muted flex items-center justify-center relative overflow-hidden">
                <div 
                  className="absolute inset-0 bg-gradient-to-br from-primary/20 to-accent/20 flex items-center justify-center"
                >
                  <svg className="w-16 h-16 text-primary/60" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M4 16l4.586-4.586a2 2 0 012.828 0L16 16m-2-2l1.586-1.586a2 2 0 012.828 0L20 14m-6-6h.01M6 20h12a2 2 0 002-2V6a2 2 0 00-2-2H6a2 2 0 00-2 2v12a2 2 0 002 2z" />
                  </svg>
                </div>
                <div className="absolute inset-0 bg-black/40 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center justify-center">
                  <svg className="w-8 h-8 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 12a3 3 0 11-6 0 3 3 0 016 0z" />
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M2.458 12C3.732 7.943 7.523 5 12 5c4.478 0 8.268 2.943 9.542 7-1.274 4.057-5.064 7-9.542 7-4.477 0-8.268-2.943-9.542-7z" />
                  </svg>
                </div>
              </div>
              
              {/* Content */}
              <div className="p-6">
                <div className="flex items-center justify-between mb-2">
                  <span className="text-sm text-primary font-medium">{item.category}</span>
                </div>
                <h3 className="text-xl font-semibold mb-3 text-card-foreground">{item.title}</h3>
                <p className="text-muted-foreground leading-relaxed">{item.description}</p>
              </div>
            </div>
          ))}
        </div>

        {/* Empty State */}
        {filteredItems.length === 0 && (
          <div className="text-center py-16">
            <svg className="w-16 h-16 text-muted-foreground mx-auto mb-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M4 16l4.586-4.586a2 2 0 012.828 0L16 16m-2-2l1.586-1.586a2 2 0 012.828 0L20 14m-6-6h.01M6 20h12a2 2 0 002-2V6a2 2 0 00-2-2H6a2 2 0 00-2 2v12a2 2 0 002 2z" />
            </svg>
            <h3 className="text-xl font-semibold mb-2">No items found</h3>
            <p className="text-muted-foreground">Try selecting a different category.</p>
          </div>
        )}
      </div>
    </div>
  );
};

export default Gallery;