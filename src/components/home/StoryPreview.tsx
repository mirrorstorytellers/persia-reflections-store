
import { Link } from "react-router-dom";
import { ArrowRight } from "lucide-react";
import { Button } from "@/components/ui/button";
import StoryCard from "../ui/StoryCard";

// Sample story data
const FEATURED_STORIES = [
  {
    id: "1",
    title: "The Art of Iranian Mirror Work",
    excerpt: "Discover the intricate history and techniques behind traditional Iranian mirror mosaics.",
    image: "https://images.unsplash.com/photo-1465146344425-f00d5f5c8f07",
    category: "Craftsmanship"
  },
  {
    id: "2",
    title: "Sustainability in Our Creative Process",
    excerpt: "How we incorporate circular economy principles into our production methods.",
    image: "https://images.unsplash.com/photo-1506744038136-46273834b3fb",
    category: "Circular Economy"
  },
  {
    id: "storytelling",
    title: "Community Storytelling Events",
    excerpt: "Experience the stories behind our work through our community engagement and storytelling sessions.",
    image: "/lovable-uploads/dd5cf16d-83a4-4b02-aa2a-5d88bdab30a5.png",
    category: "Stories"
  }
];

const StoryPreview = () => {
  return (
    <section className="py-16 relative">
      {/* Geometric background elements */}
      <div className="absolute inset-0 -z-10">
        <div className="w-32 h-32 absolute top-10 right-10 border-2 border-mirror-gold/20 rotate-45 hidden md:block"></div>
        <div className="w-24 h-24 absolute bottom-20 left-20 border-2 border-mirror-pink/20 rotate-[15deg] hidden md:block"></div>
      </div>
      
      <div className="container mx-auto px-4">
        <div className="flex flex-col md:flex-row justify-between items-start md:items-end mb-10">
          <div>
            <h2 className="font-playfair text-3xl md:text-4xl font-bold">Our Stories</h2>
            <p className="mt-2 text-gray-600">Explore the heritage and values behind our creations</p>
          </div>
          <Link to="/stories" className="mt-4 md:mt-0 group inline-flex items-center text-mirror-gold hover:text-mirror-pink">
            Read all stories
            <ArrowRight className="ml-1 h-4 w-4 transition-transform group-hover:translate-x-1" />
          </Link>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {FEATURED_STORIES.map((story) => (
            <StoryCard key={story.id} story={story} />
          ))}
        </div>
        
        <div className="mt-12 text-center">
          <Button asChild className="bg-mirror-gold hover:bg-mirror-gold/90">
            <Link to="/stories">
              Explore Our Journey
              <ArrowRight className="ml-2 h-4 w-4" />
            </Link>
          </Button>
        </div>
      </div>
    </section>
  );
};

export default StoryPreview;
