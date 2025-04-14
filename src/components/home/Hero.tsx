
import { ArrowRight } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Link } from "react-router-dom";

const Hero = () => {
  return (
    <section className="relative pt-24 md:pt-32 pb-20 md:pb-28 overflow-hidden">
      {/* Decorative elements inspired by Iranian patterns */}
      <div className="absolute inset-0 -z-10 geometric-pattern opacity-20"></div>
      <div className="absolute top-20 right-10 w-40 h-40 bg-mirror-gold/10 rounded-full blur-3xl"></div>
      <div className="absolute bottom-20 left-10 w-60 h-60 bg-mirror-pink/10 rounded-full blur-3xl"></div>
      
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
          <div className="order-2 md:order-1">
            <h1 className="font-playfair text-4xl md:text-5xl lg:text-6xl font-bold leading-tight">
              Reflections of <span className="text-mirror-pink">Iranian</span> Artistry
            </h1>
            <p className="mt-6 text-lg text-gray-700 leading-relaxed max-w-xl">
              Discover our handcrafted mirror work pieces that celebrate the rich heritage 
              of Iranian craftsmanship while embracing a sustainable, circular economy approach.
            </p>
            <div className="mt-8 flex flex-wrap gap-4">
              <Button asChild className="bg-mirror-pink hover:bg-mirror-pink/90 text-white">
                <Link to="/products">
                  Explore Collection
                  <ArrowRight className="ml-2 h-4 w-4" />
                </Link>
              </Button>
              <Button asChild variant="outline" className="border-mirror-blue text-mirror-blue hover:bg-mirror-blue/5">
                <Link to="/stories">
                  Our Stories
                </Link>
              </Button>
            </div>
          </div>
          
          <div className="order-1 md:order-2">
            <div className="relative">
              <div className="absolute -top-6 -right-6 w-full h-full bg-mirror-gold/20 rounded-lg"></div>
              <div className="absolute -bottom-6 -left-6 w-full h-full border-2 border-mirror-blue/30 rounded-lg"></div>
              <div className="relative overflow-hidden rounded-lg mirror-effect bg-white shadow-lg">
                <img 
                  src="/lovable-uploads/111cf6bf-dcd9-471c-868a-f1d5f79fcfac.png" 
                  alt="Mirror work coffee table" 
                  className="w-full h-auto object-cover transform transition-transform hover:scale-105 duration-700"
                />
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
