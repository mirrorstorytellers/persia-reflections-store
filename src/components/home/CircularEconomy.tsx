
import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { RefreshCcw, Leaf, Recycle } from "lucide-react";

const CircularEconomy = () => {
  return (
    <section className="py-16 bg-geometric-gradient">
      <div className="container mx-auto px-4">
        <div className="text-center max-w-3xl mx-auto mb-12">
          <h2 className="font-playfair text-3xl md:text-4xl font-bold">Circular Economy Approach</h2>
          <p className="mt-4 text-lg text-gray-700">
            We're committed to sustainable practices that honor Iranian craftsmanship while preserving our planet.
          </p>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          <div className="bg-white rounded-lg shadow-md p-8 text-center transform hover:-translate-y-2 transition-transform duration-300">
            <div className="w-16 h-16 bg-mirror-pink/10 rounded-full flex items-center justify-center mx-auto mb-6">
              <RefreshCcw className="h-8 w-8 text-mirror-pink" />
            </div>
            <h3 className="font-playfair text-xl font-bold mb-3">Sustainable Materials</h3>
            <p className="text-gray-600">
              We source recycled mirrors and materials to reduce waste and give new life to discarded resources.
            </p>
          </div>
          
          <div className="bg-white rounded-lg shadow-md p-8 text-center transform hover:-translate-y-2 transition-transform duration-300">
            <div className="w-16 h-16 bg-mirror-gold/10 rounded-full flex items-center justify-center mx-auto mb-6">
              <Leaf className="h-8 w-8 text-mirror-gold" />
            </div>
            <h3 className="font-playfair text-xl font-bold mb-3">Traditional Techniques</h3>
            <p className="text-gray-600">
              Our artisans use generations-old Iranian techniques that minimize environmental impact.
            </p>
          </div>
          
          <div className="bg-white rounded-lg shadow-md p-8 text-center transform hover:-translate-y-2 transition-transform duration-300">
            <div className="w-16 h-16 bg-mirror-blue/10 rounded-full flex items-center justify-center mx-auto mb-6">
              <Recycle className="h-8 w-8 text-mirror-blue" />
            </div>
            <h3 className="font-playfair text-xl font-bold mb-3">Zero Waste Goal</h3>
            <p className="text-gray-600">
              We strive to reuse all material scraps in new creations, working toward zero waste production.
            </p>
          </div>
        </div>
        
        <div className="mt-12 text-center">
          <Button asChild variant="outline" className="border-mirror-pink text-mirror-pink hover:bg-mirror-pink/5">
            <Link to="/stories/circular-economy">
              Learn About Our Process
            </Link>
          </Button>
        </div>
      </div>
    </section>
  );
};

export default CircularEconomy;
