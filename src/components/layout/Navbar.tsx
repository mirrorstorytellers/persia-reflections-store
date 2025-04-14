
import { useState, useEffect } from "react";
import { Link, useLocation } from "react-router-dom";
import { Menu, X, ShoppingBag } from "lucide-react";
import { Button } from "@/components/ui/button";

const Navbar = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);
  const location = useLocation();
  
  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 50) {
        setIsScrolled(true);
      } else {
        setIsScrolled(false);
      }
    };
    
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);
  
  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  const isActive = (path: string) => {
    return location.pathname === path;
  };
  
  return (
    <header 
      className={`fixed top-0 left-0 w-full z-50 transition-all duration-300 
        ${isScrolled ? 'bg-white/90 backdrop-blur-md shadow-sm' : 'bg-transparent'}
      `}
    >
      <div className="container mx-auto px-4 py-3 md:py-4 flex items-center justify-between">
        <Link to="/" className="flex items-center">
          <img 
            src="/lovable-uploads/0242860d-4a93-4787-979b-210b2b1db1d3.png" 
            alt="Mirror Storytellers Logo" 
            className="h-12 md:h-14 w-auto"
          />
          <span className="ml-2 text-xl md:text-2xl font-playfair font-semibold">
            <span className="text-mirror-pink">Mirror</span>
            <span className="text-mirror-blue">Storytellers</span>
          </span>
        </Link>
        
        {/* Desktop Navigation */}
        <nav className="hidden md:flex items-center space-x-8">
          <Link 
            to="/" 
            className={`font-medium hover:text-mirror-pink transition-colors
              ${isActive('/') ? 'text-mirror-pink' : 'text-gray-800'}
            `}
          >
            Home
          </Link>
          <Link 
            to="/products" 
            className={`font-medium hover:text-mirror-pink transition-colors
              ${isActive('/products') ? 'text-mirror-pink' : 'text-gray-800'}
            `}
          >
            Products
          </Link>
          <Link 
            to="/stories" 
            className={`font-medium hover:text-mirror-pink transition-colors
              ${isActive('/stories') ? 'text-mirror-pink' : 'text-gray-800'}
            `}
          >
            Stories
          </Link>
          <Button variant="outline" size="icon" className="ml-2">
            <ShoppingBag className="h-5 w-5" />
          </Button>
        </nav>
        
        {/* Mobile Menu Button */}
        <div className="flex md:hidden items-center">
          <Button variant="ghost" size="icon" onClick={toggleMenu} className="text-gray-800">
            {isMenuOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
          </Button>
        </div>
      </div>
      
      {/* Mobile Navigation */}
      {isMenuOpen && (
        <div className="md:hidden bg-white shadow-lg animate-in slide-in-from-top">
          <nav className="container mx-auto px-4 py-5 flex flex-col space-y-4">
            <Link 
              to="/" 
              className={`font-medium py-2 px-4 rounded-md hover:bg-gray-100
                ${isActive('/') ? 'text-mirror-pink' : 'text-gray-800'}
              `}
              onClick={() => setIsMenuOpen(false)}
            >
              Home
            </Link>
            <Link 
              to="/products" 
              className={`font-medium py-2 px-4 rounded-md hover:bg-gray-100
                ${isActive('/products') ? 'text-mirror-pink' : 'text-gray-800'}
              `}
              onClick={() => setIsMenuOpen(false)}
            >
              Products
            </Link>
            <Link 
              to="/stories" 
              className={`font-medium py-2 px-4 rounded-md hover:bg-gray-100
                ${isActive('/stories') ? 'text-mirror-pink' : 'text-gray-800'}
              `}
              onClick={() => setIsMenuOpen(false)}
            >
              Stories
            </Link>
            <div className="pt-2 border-t border-gray-200">
              <Button variant="outline" className="w-full justify-start" onClick={() => setIsMenuOpen(false)}>
                <ShoppingBag className="h-5 w-5 mr-2" />
                View Cart
              </Button>
            </div>
          </nav>
        </div>
      )}
    </header>
  );
};

export default Navbar;
