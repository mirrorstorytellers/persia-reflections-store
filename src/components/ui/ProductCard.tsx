
import { useState } from "react";
import { Link } from "react-router-dom";
import { Eye, ShoppingCart } from "lucide-react";
import { Button } from "@/components/ui/button";
import { toast } from "@/components/ui/use-toast";

interface Product {
  id: string;
  name: string;
  price: number;
  description: string;
  image: string;
  category: string;
}

interface ProductCardProps {
  product: Product;
}

const ProductCard: React.FC<ProductCardProps> = ({ product }) => {
  const [isHovered, setIsHovered] = useState(false);
  
  const handleAddToCart = (e: React.MouseEvent) => {
    e.preventDefault();
    toast({
      title: "Added to cart",
      description: `${product.name} has been added to your cart.`,
    });
  };
  
  return (
    <Link 
      to={`/products/${product.id}`} 
      className="group"
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
    >
      <div className="bg-white rounded-lg overflow-hidden shadow-md hover:shadow-lg transition-shadow duration-300">
        <div className="relative aspect-square overflow-hidden">
          <img 
            src={product.image} 
            alt={product.name} 
            className="w-full h-full object-cover transform transition-transform duration-700 group-hover:scale-105"
          />
          
          {/* Overlay that appears on hover */}
          <div 
            className={`absolute inset-0 bg-black/30 flex items-center justify-center gap-3 transition-opacity duration-300 ${
              isHovered ? 'opacity-100' : 'opacity-0'
            }`}
          >
            <Button 
              variant="default" 
              size="icon" 
              className="rounded-full bg-white text-mirror-pink hover:bg-mirror-pink hover:text-white"
              onClick={handleAddToCart}
            >
              <ShoppingCart className="h-5 w-5" />
            </Button>
            <Button 
              variant="default" 
              size="icon" 
              className="rounded-full bg-white text-mirror-blue hover:bg-mirror-blue hover:text-white"
            >
              <Eye className="h-5 w-5" />
            </Button>
          </div>
        </div>
        
        <div className="p-4">
          <div className="text-sm text-mirror-gold font-medium mb-1">{product.category}</div>
          <h3 className="font-playfair text-lg font-semibold mb-1 group-hover:text-mirror-pink transition-colors">
            {product.name}
          </h3>
          <p className="text-gray-600 text-sm line-clamp-2 mb-2">{product.description}</p>
          <div className="flex justify-between items-center">
            <span className="font-bold text-gray-900">${product.price}</span>
            <div className="h-2 w-2 rounded-full bg-mirror-pink/50 animate-pulse"></div>
          </div>
        </div>
      </div>
    </Link>
  );
};

export default ProductCard;
