
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
      <article className="h-full bg-white rounded-lg overflow-hidden shadow-md hover:shadow-lg transition-shadow duration-300 flex flex-col">
        <div className="relative aspect-video overflow-hidden">
          <img 
            src={story.image} 
            alt={story.title} 
            className="w-full h-full object-cover transform transition-transform duration-700 group-hover:scale-105"
          />
          <div className="absolute top-4 left-4">
            <Badge className="bg-mirror-pink hover:bg-mirror-pink/90">{story.category}</Badge>
          </div>
        </div>
        
        <div className="p-5 flex flex-col flex-grow">
          <div className="flex items-center text-sm text-gray-500 mb-3">
            <Calendar className="h-4 w-4 mr-1" />
            <span>April 14, 2025</span>
          </div>
          
          <h3 className="font-playfair text-xl font-bold mb-2 group-hover:text-mirror-blue transition-colors">
            {story.title}
          </h3>
          
          <p className="text-gray-600 mb-4 flex-grow">{story.excerpt}</p>
          
          <div className="pt-4 border-t border-gray-100">
            <span className="inline-block font-medium text-mirror-pink group-hover:text-mirror-gold transition-colors">
              Read more
            </span>
          </div>
        </div>
      </article>
    </Link>
  );
};

export default StoryCard;
