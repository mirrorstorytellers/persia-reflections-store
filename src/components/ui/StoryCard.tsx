
import { Link } from "react-router-dom";
import { Calendar } from "lucide-react";
import { Badge } from "@/components/ui/badge";

interface Story {
  id: string;
  title: string;
  excerpt: string;
  image: string;
  category: string;
}

interface StoryCardProps {
  story: Story;
}

const StoryCard: React.FC<StoryCardProps> = ({ story }) => {
  return (
    <Link to={`/stories/${story.id}`} className="group">
      <article className="h-full bg-white rounded-lg overflow-hidden shadow-md hover:shadow-lg transition-shadow duration-300 flex flex-col border border-gray-100">
        <div className="relative aspect-video overflow-hidden">
          {/* Mirror-like shimmering effect */}
          <div className="absolute inset-0 bg-gradient-to-br from-white/30 via-mirror-gold/10 to-transparent opacity-0 group-hover:opacity-30 transition-opacity duration-500 z-10"></div>
          
          <img 
            src={story.image} 
            alt={story.title} 
            className="w-full h-full object-cover transform transition-transform duration-700 group-hover:scale-105"
          />
          
          {/* Decorative geometric corner elements inspired by Iranian patterns */}
          <div className="absolute top-0 left-0 w-8 h-8 border-t-2 border-l-2 border-mirror-gold/50"></div>
          <div className="absolute bottom-0 right-0 w-8 h-8 border-b-2 border-r-2 border-mirror-gold/50"></div>
          
          <div className="absolute top-4 left-4">
            <Badge className="bg-mirror-gold hover:bg-mirror-gold/90">{story.category}</Badge>
          </div>
        </div>
        
        <div className="p-5 flex flex-col flex-grow border-t border-gray-100">
          <div className="flex items-center text-sm text-gray-500 mb-3">
            <Calendar className="h-4 w-4 mr-1 text-mirror-gold" />
            <span>April 14, 2025</span>
          </div>
          
          <h3 className="font-playfair text-xl font-bold mb-2 group-hover:text-mirror-gold transition-colors">
            {story.title}
          </h3>
          
          <p className="text-gray-600 mb-4 flex-grow">{story.excerpt}</p>
          
          <div className="pt-4 border-t border-gray-100">
            <span className="inline-block font-medium text-mirror-gold group-hover:text-mirror-pink transition-colors">
              Read more
            </span>
          </div>
        </div>
      </article>
    </Link>
  );
};

export default StoryCard;
