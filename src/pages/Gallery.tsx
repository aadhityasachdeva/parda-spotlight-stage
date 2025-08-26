import { useState } from "react";
import blackBoxOkhla from "@/assets/black-box-okhla.jpg";

const Gallery = () => {
  const [selectedCategory, setSelectedCategory] = useState("All");
  
  const categories = ["All", "Events", "Meetings", "Collaborations", "Practice Sessions"];
  
  // Real gallery items from Parda's activities
  const galleryItems = [
    {
      id: 1,
      title: "Cybersecurity Awareness Meet with Theatre Societies",
      category: "Events",
      description: "Organised by the Indian Cyber Crime Coordination Centre (I4C), Ministry of Home Affairs 🇮🇳. Parda Artist Association was proud to be part of a vital meeting with Delhi University theatre societies and institutions from Delhi-NCR. The session, led by Shri Nishant Kumar (Director, I4C), focused on launching a powerful cybersecurity awareness campaign through theatre and creative expression. Delhi Police officials pledged full support for on-ground implementation. Our members actively participated and shared ideas to make the campaign more impactful. Presented by Rahul Khanna's Education Through Theatre 🎭",
      images: [
        "/lovable-uploads/b968d324-0b40-4f3d-8795-53483ec94ad1.png",
        "/lovable-uploads/606e5c45-07a3-4838-a437-e22eb0c70d8e.png",
        "/lovable-uploads/a1e09c35-b245-4430-a8b8-e4d9bf132a31.png"
      ],
      mainImage: "/lovable-uploads/b968d324-0b40-4f3d-8795-53483ec94ad1.png"
    },
    {
      id: 2,
      title: "Practice Session at Lodhi Garden Delhi",
      category: "Practice Sessions",
      description: "A beautiful day of script reading and theatre exercises at Lodhi Garden, Delhi. Our members gathered for an outdoor practice session, working on character development, voice modulation, and collaborative storytelling. The serene environment of Lodhi Garden provided the perfect backdrop for creative exploration and team bonding.",
      images: [
        "/lovable-uploads/fbf525e9-865c-467f-b58c-eeeb01ed2358.png",
        "/lovable-uploads/27543010-259d-4304-ad27-97bb29814014.png",
        "/lovable-uploads/ec648f12-6347-4521-87a7-9e9d9b384ad7.png",
        "/lovable-uploads/62f40c0f-eba8-403a-a3a1-9da7bcb44509.png",
        "/lovable-uploads/8d8d0b70-0a5f-4d83-9220-4999c1a5d18e.png",
        "/lovable-uploads/ceaece2e-15ea-4613-8e7e-67c6cb4e83c3.png"
      ],
      mainImage: "/lovable-uploads/aeaef4ac-8ed9-4ab1-9aee-1dc17a545ae7.png"
    },
    {
      id: 3,
      title: "Practice Session at Black Canvas",
      category: "Practice Sessions",
      description: "Intensive workshop and practice session at Black Canvas, focusing on dramatic techniques, character analysis, and scene work. Our members engaged in method acting exercises and collaborative scene development in this professional theatre space.",
      images: [
        "/lovable-uploads/e765514e-85b2-4bc0-b00a-69a613c27b0d.png",
        "/lovable-uploads/e6fad11b-913f-4fbe-b408-d44d6116dbfe.png",
        "/lovable-uploads/81f40205-801e-442a-80b1-9589b5f31b3e.png",
        "/lovable-uploads/cbf14e9b-6a70-48fe-8e71-cbcd982b8743.png"
      ],
      mainImage: "/lovable-uploads/195988b7-4f4b-4317-9f92-51121ac22ba7.png"
    }
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
        <div className="grid gap-8">
          {filteredItems.map((item) => (
            <div
              key={item.id}
              className="group bg-card rounded-xl overflow-hidden border border-border hover:border-primary/50 transition-all duration-300 hover:shadow-xl"
            >
              {/* Main Image */}
              <div className="aspect-video relative overflow-hidden">
                <img 
                  src={item.mainImage} 
                  alt={item.title}
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
                />
                <div className="absolute inset-0 bg-black/20 opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
              </div>
              
              {/* Additional Images */}
              {item.images && item.images.length > 1 && (
                <div className="grid grid-cols-3 gap-2 p-4 bg-muted/30">
                  {item.images.slice(0, 3).map((image, index) => (
                    <div key={index} className="aspect-video rounded-lg overflow-hidden">
                      <img 
                        src={image} 
                        alt={`${item.title} - Image ${index + 1}`}
                        className="w-full h-full object-cover hover:scale-105 transition-transform duration-300"
                      />
                    </div>
                  ))}
                </div>
              )}
              
              {/* Content */}
              <div className="p-8">
                <div className="flex items-center justify-between mb-4">
                  <span className="text-sm text-primary font-semibold bg-primary/10 px-3 py-1 rounded-full">
                    {item.category}
                  </span>
                </div>
                <h3 className="text-2xl font-bold mb-4 text-card-foreground">{item.title}</h3>
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