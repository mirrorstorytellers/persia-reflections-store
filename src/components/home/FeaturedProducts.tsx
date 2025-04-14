
import { useState } from "react";
import { Link } from "react-router-dom";
import { ChevronRight } from "lucide-react";
import { Button } from "@/components/ui/button";
import ProductCard from "../ui/ProductCard";

// Sample product data
const FEATURED_PRODUCTS = [
  {
    id: "1",
    name: "Geometric Reflection Mirror",
    price: 249,
    description: "Handcrafted mirror with intricate geometric patterns",
    image: "/lovable-uploads/111cf6bf-dcd9-471c-868a-f1d5f79fcfac.png",
    category: "home"
  },
  {
    id: "2",
    name: "Persian Garden Coffee Table",
    price: 599,
    description: "Mirror mosaic table inspired by traditional Persian gardens",
    image: "/lovable-uploads/111cf6bf-dcd9-471c-868a-f1d5f79fcfac.png",
    category: "furniture"
  },
  {
    id: "3",
    name: "Medallion Wall Art",
    price: 329,
    description: "Circular mirror art piece with traditional Iranian medallion design",
    image: "/lovable-uploads/111cf6bf-dcd9-471c-868a-f1d5f79fcfac.png",
    category: "art"
  },
  {
    id: "4",
    name: "Mirror Mosaic Jewelry Box",
    price: 149,
    description: "Small decorative box adorned with mirror work patterns",
    image: "/lovable-uploads/111cf6bf-dcd9-471c-868a-f1d5f79fcfac.png",
    category: "decor"
  }
];

const FeaturedProducts = () => {
  const [activeCategory, setActiveCategory] = useState("all");
  
  const categories = [
    { id: "all", label: "All" },
    { id: "home", label: "Home Decor" },
    { id: "furniture", label: "Furniture" },
    { id: "art", label: "Wall Art" },
    { id: "decor", label: "Decorative" }
  ];
  
  const filteredProducts = activeCategory === "all" 
    ? FEATURED_PRODUCTS 
    : FEATURED_PRODUCTS.filter(product => product.category === activeCategory);
  
  return (
    <section className="py-16 bg-gray-50 relative overflow-hidden">
      {/* Iranian geometric patterns in the background */}
      <div className="absolute inset-0 opacity-5">
        <div className="w-40 h-40 absolute top-10 left-1/5 border border-mirror-gold rotate-45"></div>
        <div className="w-32 h-32 absolute top-20 right-1/4 border border-mirror-pink rotate-12"></div>
        <div className="w-24 h-24 absolute bottom-40 left-20 border border-mirror-blue rotate-30"></div>
        <div className="w-36 h-36 absolute bottom-20 right-40 border border-mirror-gold rotate-[25deg]"></div>
      </div>
      
      <div className="container mx-auto px-4 relative z-10">
        <div className="flex flex-col md:flex-row justify-between items-start md:items-end mb-10">
          <div>
            <h2 className="font-playfair text-3xl md:text-4xl font-bold">Featured Creations</h2>
            <p className="mt-2 text-gray-600">Discover our most cherished mirror work pieces</p>
          </div>
          <Link to="/products" className="mt-4 md:mt-0 group inline-flex items-center text-mirror-gold hover:text-mirror-pink">
            View all products
            <ChevronRight className="ml-1 h-4 w-4 transition-transform group-hover:translate-x-1" />
          </Link>
        </div>
        
        <div className="mb-8 overflow-x-auto">
          <div className="flex space-x-2 pb-2">
            {categories.map(category => (
              <Button
                key={category.id}
                variant={activeCategory === category.id ? "default" : "outline"}
                className={activeCategory === category.id ? "bg-mirror-gold hover:bg-mirror-gold/90" : "border-mirror-gold/50 text-mirror-gold hover:bg-mirror-gold/5"}
                onClick={() => setActiveCategory(category.id)}
              >
                {category.label}
              </Button>
            ))}
          </div>
        </div>
        
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {filteredProducts.map(product => (
            <ProductCard key={product.id} product={product} />
          ))}
        </div>
      </div>
    </section>
  );
};

export default FeaturedProducts;
