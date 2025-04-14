
import { useState, useEffect } from "react";
import { useSearchParams } from "react-router-dom";
import Navbar from "@/components/layout/Navbar";
import Footer from "@/components/layout/Footer";
import ProductCard from "@/components/ui/ProductCard";
import { Button } from "@/components/ui/button";
import { Slider } from "@/components/ui/slider";
import { Input } from "@/components/ui/input";
import { Search, SlidersHorizontal, X } from "lucide-react";

// Sample product data - in a real app this would come from an API
const ALL_PRODUCTS = [
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
  },
  {
    id: "5",
    name: "Ornate Wall Mirror",
    price: 379,
    description: "Large wall mirror with detailed mirror mosaic frame",
    image: "/lovable-uploads/111cf6bf-dcd9-471c-868a-f1d5f79fcfac.png",
    category: "home"
  },
  {
    id: "6",
    name: "Geometric Coasters Set",
    price: 89,
    description: "Set of 4 coasters with mirror work geometric designs",
    image: "/lovable-uploads/111cf6bf-dcd9-471c-868a-f1d5f79fcfac.png",
    category: "home"
  },
  {
    id: "7",
    name: "Persian-Inspired Pendant Light",
    price: 429,
    description: "Hanging light fixture with mirror mosaic patterns",
    image: "/lovable-uploads/111cf6bf-dcd9-471c-868a-f1d5f79fcfac.png",
    category: "lighting"
  },
  {
    id: "8",
    name: "Mirror Accent Side Table",
    price: 349,
    description: "Small side table with mirror mosaic top",
    image: "/lovable-uploads/111cf6bf-dcd9-471c-868a-f1d5f79fcfac.png",
    category: "furniture"
  }
];

const Products = () => {
  const [searchParams, setSearchParams] = useSearchParams();
  const [products, setProducts] = useState(ALL_PRODUCTS);
  const [activeCategory, setActiveCategory] = useState<string | null>(null);
  const [priceRange, setPriceRange] = useState([0, 600]);
  const [searchQuery, setSearchQuery] = useState("");
  const [showFilters, setShowFilters] = useState(false);
  
  const categories = [
    { id: "all", label: "All Products" },
    { id: "home", label: "Home Decor" },
    { id: "furniture", label: "Furniture" },
    { id: "art", label: "Wall Art" },
    { id: "decor", label: "Decorative" },
    { id: "lighting", label: "Lighting" }
  ];
  
  useEffect(() => {
    const categoryParam = searchParams.get("category");
    if (categoryParam) {
      setActiveCategory(categoryParam);
    }
  }, [searchParams]);
  
  useEffect(() => {
    // Filter products based on category, price range, and search query
    let filtered = ALL_PRODUCTS;
    
    if (activeCategory && activeCategory !== "all") {
      filtered = filtered.filter(product => product.category === activeCategory);
    }
    
    filtered = filtered.filter(
      product => product.price >= priceRange[0] && product.price <= priceRange[1]
    );
    
    if (searchQuery) {
      const query = searchQuery.toLowerCase();
      filtered = filtered.filter(
        product => 
          product.name.toLowerCase().includes(query) || 
          product.description.toLowerCase().includes(query)
      );
    }
    
    setProducts(filtered);
  }, [activeCategory, priceRange, searchQuery]);
  
  const handleCategoryChange = (category: string) => {
    setActiveCategory(category);
    if (category === "all") {
      searchParams.delete("category");
    } else {
      searchParams.set("category", category);
    }
    setSearchParams(searchParams);
  };
  
  const handlePriceChange = (value: number[]) => {
    setPriceRange(value);
  };
  
  const clearFilters = () => {
    setActiveCategory("all");
    setPriceRange([0, 600]);
    setSearchQuery("");
    setSearchParams({});
  };
  
  return (
    <div className="min-h-screen flex flex-col">
      <Navbar />
      
      <main className="flex-grow pt-24">
        {/* Hero Banner */}
        <div className="bg-geometric-gradient py-12 px-4">
          <div className="container mx-auto">
            <h1 className="font-playfair text-3xl md:text-4xl font-bold text-center">Our Collection</h1>
            <p className="text-center mt-4 max-w-2xl mx-auto text-gray-700">
              Discover our handcrafted mirror work pieces that blend traditional Iranian 
              artistry with contemporary design.
            </p>
          </div>
        </div>
        
        <div className="container mx-auto px-4 py-8">
          {/* Search and filter controls */}
          <div className="mb-8">
            <div className="flex flex-col md:flex-row gap-4">
              <div className="relative flex-grow">
                <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400 h-5 w-5" />
                <Input
                  type="text"
                  placeholder="Search products..."
                  className="pl-10"
                  value={searchQuery}
                  onChange={(e) => setSearchQuery(e.target.value)}
                />
              </div>
              <Button 
                variant="outline" 
                className="md:hidden flex items-center gap-2"
                onClick={() => setShowFilters(!showFilters)}
              >
                <SlidersHorizontal className="h-4 w-4" />
                {showFilters ? "Hide Filters" : "Show Filters"}
              </Button>
            </div>
          </div>
          
          <div className="flex flex-col md:flex-row gap-8">
            {/* Filter sidebar - hidden on mobile unless toggled */}
            <aside className={`md:w-64 ${showFilters ? 'block' : 'hidden md:block'}`}>
              <div className="bg-white p-5 rounded-lg shadow-sm border border-gray-100">
                <div className="flex justify-between items-center mb-4">
                  <h3 className="font-playfair font-semibold text-lg">Filters</h3>
                  <Button 
                    variant="ghost" 
                    size="sm" 
                    onClick={clearFilters}
                    className="h-8 text-sm text-gray-500 hover:text-mirror-pink"
                  >
                    <X className="h-4 w-4 mr-1" />
                    Clear
                  </Button>
                </div>
                
                <div className="mb-6">
                  <h4 className="font-medium mb-3">Categories</h4>
                  <div className="space-y-2">
                    {categories.map(category => (
                      <Button 
                        key={category.id}
                        variant="ghost"
                        className={`justify-start w-full ${
                          activeCategory === category.id ? 'text-mirror-pink font-medium' : 'text-gray-600'
                        }`}
                        onClick={() => handleCategoryChange(category.id)}
                      >
                        {category.label}
                      </Button>
                    ))}
                  </div>
                </div>
                
                <div>
                  <h4 className="font-medium mb-3">Price Range</h4>
                  <Slider
                    defaultValue={[0, 600]}
                    max={600}
                    step={10}
                    value={priceRange}
                    onValueChange={handlePriceChange}
                    className="mb-6"
                  />
                  <div className="flex justify-between text-sm text-gray-600">
                    <span>${priceRange[0]}</span>
                    <span>${priceRange[1]}</span>
                  </div>
                </div>
              </div>
            </aside>
            
            {/* Product grid */}
            <div className="flex-grow">
              {products.length === 0 ? (
                <div className="text-center py-12">
                  <h3 className="text-xl font-medium mb-2">No products found</h3>
                  <p className="text-gray-500">Try adjusting your filters or search query.</p>
                </div>
              ) : (
                <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
                  {products.map(product => (
                    <ProductCard key={product.id} product={product} />
                  ))}
                </div>
              )}
            </div>
          </div>
        </div>
      </main>
      
      <Footer />
    </div>
  );
};

export default Products;
