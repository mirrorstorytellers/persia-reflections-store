
import React from "react";
import { Quote } from "lucide-react";

const AboutMotto = () => {
  return (
    <section className="py-16 relative overflow-hidden bg-white">
      {/* Geometric background patterns inspired by Iranian mirror work */}
      <div className="absolute inset-0 -z-10">
        <div className="absolute top-0 left-0 w-full h-full opacity-5">
          <div className="w-24 h-24 absolute top-10 left-10 border-2 border-mirror-gold rotate-45"></div>
          <div className="w-16 h-16 absolute top-20 left-40 border-2 border-mirror-pink rotate-12"></div>
          <div className="w-20 h-20 absolute top-40 right-20 border-2 border-mirror-blue rotate-30"></div>
          <div className="w-36 h-36 absolute bottom-10 left-1/4 border-2 border-mirror-gold rotate-[25deg]"></div>
          <div className="w-28 h-28 absolute bottom-30 right-1/3 border-2 border-mirror-pink rotate-[15deg]"></div>
        </div>
      </div>
      
      <div className="container mx-auto px-4">
        <div className="flex flex-col md:flex-row items-center gap-12">
          <div className="md:w-1/2 order-2 md:order-1">
            <div className="relative">
              <div className="absolute -top-3 -left-3 w-full h-full border-2 border-mirror-gold/50 rounded-lg"></div>
              <div className="p-8 bg-white border border-mirror-pink/20 rounded-lg shadow-md relative z-10">
                <Quote className="h-10 w-10 text-mirror-gold mb-4" />
                <h2 className="font-playfair text-3xl md:text-4xl font-bold mb-6 text-gray-800">Our Motto</h2>
                <p className="text-xl md:text-2xl italic text-gray-700 mb-4">
                  "Don't throw away the mirrors, their reflection has a story."
                </p>
                <p className="text-gray-600">
                  We believe in the power of renewal and the stories embedded in every piece of mirror work. 
                  Each fragment reflects not just light, but history, culture, and craftsmanship that deserves to be preserved.
                </p>
              </div>
            </div>
          </div>
          
          <div className="md:w-1/2 order-1 md:order-2">
            <div className="max-w-lg mx-auto">
              <div className="relative">
                <div className="absolute -top-4 -right-4 w-full h-full bg-mirror-gold/20 rounded-lg"></div>
                <div className="relative overflow-hidden rounded-lg mirror-effect shadow-xl">
                  <img 
                    src="/lovable-uploads/111cf6bf-dcd9-471c-868a-f1d5f79fcfac.png" 
                    alt="Mirror work art" 
                    className="w-full h-auto object-cover transform transition-transform hover:scale-105 duration-700"
                  />
                  <div className="absolute inset-0 bg-gradient-to-br from-mirror-gold/30 to-transparent opacity-60"></div>
                </div>
              </div>
              <div className="grid grid-cols-3 gap-3 mt-3">
                <div className="aspect-square bg-mirror-gold/20 rounded-md"></div>
                <div className="aspect-square bg-mirror-pink/20 rounded-md"></div>
                <div className="aspect-square bg-mirror-blue/20 rounded-md"></div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default AboutMotto;
