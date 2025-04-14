
import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { RefreshCcw, Leaf, Recycle } from "lucide-react";

const CircularEconomy = () => {
  return (
    <section className="py-16 bg-geometric-gradient relative overflow-hidden">
      {/* Enhanced geometric patterns for the background */}
      <div className="absolute top-0 left-0 w-full h-full">
        <div className="w-24 h-24 absolute top-10 left-10 border border-mirror-gold/20 rotate-45"></div>
        <div className="w-16 h-16 absolute top-20 left-40 border border-mirror-pink/20 rotate-12"></div>
        <div className="w-20 h-20 absolute top-40 right-20 border border-mirror-blue/20 rotate-30"></div>
        <div className="w-36 h-36 absolute bottom-10 left-1/4 border border-mirror-gold/20 rotate-[25deg]"></div>
        <div className="w-28 h-28 absolute bottom-30 right-1/3 border border-mirror-pink/20 rotate-[15deg]"></div>
      </div>
      
      <div className="container mx-auto px-4 relative z-10">
        <div className="text-center max-w-3xl mx-auto mb-12">
          <h2 className="font-playfair text-3xl md:text-4xl font-bold">Circular Economy Approach</h2>
          <p className="mt-4 text-lg text-gray-700 italic">
            "Don't throw away the mirrors, their reflection has a story."
          </p>
          <p className="mt-2 text-gray-600">
            We're committed to sustainable practices that honor Iranian craftsmanship while preserving our planet.
          </p>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          <div className="bg-white rounded-lg shadow-md p-8 text-center transform hover:-translate-y-2 transition-transform duration-300 border-t-4 border-mirror-gold">
            <div className="w-16 h-16 bg-mirror-gold/10 rounded-full flex items-center justify-center mx-auto mb-6">
              <RefreshCcw className="h-8 w-8 text-mirror-gold" />
            </div>
            <h3 className="font-playfair text-xl font-bold mb-3">Sustainable Materials</h3>
            <p className="text-gray-600">
              We source recycled mirrors and materials to reduce waste and give new life to discarded resources.
            </p>
          </div>
          
          <div className="bg-white rounded-lg shadow-md p-8 text-center transform hover:-translate-y-2 transition-transform duration-300 border-t-4 border-mirror-pink">
            <div className="w-16 h-16 bg-mirror-pink/10 rounded-full flex items-center justify-center mx-auto mb-6">
              <Leaf className="h-8 w-8 text-mirror-pink" />
            </div>
            <h3 className="font-playfair text-xl font-bold mb-3">Traditional Techniques</h3>
            <p className="text-gray-600">
              Our artisans use generations-old Iranian techniques that minimize environmental impact.
            </p>
          </div>
          
          <div className="bg-white rounded-lg shadow-md p-8 text-center transform hover:-translate-y-2 transition-transform duration-300 border-t-4 border-mirror-blue">
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
          <Button asChild variant="outline" className="border-mirror-gold text-mirror-gold hover:bg-mirror-gold/5">
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

