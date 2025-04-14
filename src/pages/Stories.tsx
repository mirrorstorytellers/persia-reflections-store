
import { useState } from "react";
import Navbar from "@/components/layout/Navbar";
import Footer from "@/components/layout/Footer";
import StoryCard from "@/components/ui/StoryCard";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";

// Sample stories data
const ALL_STORIES = [
  {
    id: "1",
    title: "The Art of Iranian Mirror Work",
    excerpt: "Discover the intricate history and techniques behind traditional Iranian mirror mosaics.",
    image: "https://images.unsplash.com/photo-1465146344425-f00d5f5c8f07",
    category: "Craftsmanship",
    featured: true
  },
  {
    id: "2",
    title: "Sustainability in Our Creative Process",
    excerpt: "How we incorporate circular economy principles into our production methods.",
    image: "https://images.unsplash.com/photo-1506744038136-46273834b3fb",
    category: "Circular Economy",
    featured: true
  },
  {
    id: "3",
    title: "From Persian Gardens to Modern Design",
    excerpt: "The inspiration behind our patterns and how they connect to traditional Iranian aesthetics.",
    image: "https://images.unsplash.com/photo-1466442929976-97f336a657be",
    category: "Design",
    featured: true
  },
  {
    id: "4",
    title: "Meet Our Master Artisans",
    excerpt: "The skilled craftspeople who keep traditional mirror work techniques alive.",
    image: "https://images.unsplash.com/photo-1482938289607-e9573fc25ebb",
    category: "Craftsmanship",
    featured: false
  },
  {
    id: "5",
    title: "Upcycling and Waste Reduction",
    excerpt: "Our commitment to giving new life to materials that would otherwise be discarded.",
    image: "https://images.unsplash.com/photo-1472396961693-142e6e269027",
    category: "Circular Economy",
    featured: false
  },
  {
    id: "6",
    title: "The Symbolism in Our Designs",
    excerpt: "Understanding the cultural meanings behind traditional Iranian patterns.",
    image: "https://images.unsplash.com/photo-1460574283810-2aab119d8511",
    category: "Design",
    featured: false
  }
];

const Stories = () => {
  const [activeFilter, setActiveFilter] = useState("all");
  
  const filters = [
    { id: "all", label: "All Stories" },
    { id: "Craftsmanship", label: "Craftsmanship" },
    { id: "Circular Economy", label: "Circular Economy" },
    { id: "Design", label: "Design" }
  ];
  
  const filteredStories = activeFilter === "all" 
    ? ALL_STORIES 
    : ALL_STORIES.filter(story => story.category === activeFilter);
  
  const featuredStory = ALL_STORIES.find(story => story.id === "1");
  
  return (
    <div className="min-h-screen flex flex-col">
      <Navbar />
      
      <main className="flex-grow pt-24">
        {/* Featured Story Banner */}
        {featuredStory && (
          <div className="relative h-[70vh] overflow-hidden mb-12">
            <div className="absolute inset-0 bg-gradient-to-t from-black/70 to-black/20 z-10"></div>
            <img 
              src={featuredStory.image} 
              alt={featuredStory.title} 
              className="absolute inset-0 w-full h-full object-cover"
            />
            <div className="absolute inset-0 z-20 flex items-center">
              <div className="container mx-auto px-4">
                <div className="max-w-2xl">
                  <Badge className="mb-4 bg-mirror-pink">{featuredStory.category}</Badge>
                  <h1 className="font-playfair text-3xl md:text-5xl font-bold text-white mb-4">
                    {featuredStory.title}
                  </h1>
                  <p className="text-white/90 text-lg mb-6">
                    {featuredStory.excerpt}
                  </p>
                  <Button className="bg-mirror-pink hover:bg-mirror-pink/90">
                    Read Story
                  </Button>
                </div>
              </div>
            </div>
          </div>
        )}
        
        <div className="container mx-auto px-4 py-8">
          <div className="flex flex-col md:flex-row justify-between items-start md:items-center mb-8">
            <h2 className="font-playfair text-3xl font-bold mb-4 md:mb-0">Our Stories</h2>
            <div className="flex flex-wrap gap-2">
              {filters.map(filter => (
                <Button
                  key={filter.id}
                  variant={activeFilter === filter.id ? "default" : "outline"}
                  className={activeFilter === filter.id ? "bg-mirror-blue hover:bg-mirror-blue/90" : ""}
                  onClick={() => setActiveFilter(filter.id)}
                >
                  {filter.label}
                </Button>
              ))}
            </div>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {filteredStories.map(story => (
              <StoryCard key={story.id} story={story} />
            ))}
          </div>
        </div>
      </main>
      
      <Footer />
    </div>
  );
};

export default Stories;
