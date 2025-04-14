
import { Link } from "react-router-dom";
import { Instagram, Facebook, Twitter, Mail } from "lucide-react";
import { Button } from "@/components/ui/button";

const Footer = () => {
  return (
    <footer className="bg-gray-50 border-t border-gray-200">
      <div className="container mx-auto px-4 py-12">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          <div className="col-span-1 md:col-span-1">
            <Link to="/" className="flex flex-col items-start">
              <img 
                src="/lovable-uploads/0242860d-4a93-4787-979b-210b2b1db1d3.png" 
                alt="Mirror Storytellers Logo" 
                className="h-16 w-auto mb-4"
              />
              <h3 className="text-lg font-playfair font-medium">
                <span className="text-mirror-pink">Mirror</span>
                <span className="text-mirror-blue">Storytellers</span>
              </h3>
            </Link>
            <p className="mt-4 text-sm text-gray-600">
              Crafting reflections of Iranian artistry through sustainable mirror work.
            </p>
          </div>
          
          <div>
            <h4 className="font-playfair text-lg font-medium mb-4">Shop</h4>
            <ul className="space-y-2">
              <li>
                <Link to="/products" className="text-gray-600 hover:text-mirror-pink transition-colors">
                  All Products
                </Link>
              </li>
              <li>
                <Link to="/products?category=home" className="text-gray-600 hover:text-mirror-pink transition-colors">
                  Home Decor
                </Link>
              </li>
              <li>
                <Link to="/products?category=jewelry" className="text-gray-600 hover:text-mirror-pink transition-colors">
                  Jewelry
                </Link>
              </li>
              <li>
                <Link to="/products?category=art" className="text-gray-600 hover:text-mirror-pink transition-colors">
                  Wall Art
                </Link>
              </li>
            </ul>
          </div>
          
          <div>
            <h4 className="font-playfair text-lg font-medium mb-4">About</h4>
            <ul className="space-y-2">
              <li>
                <Link to="/stories" className="text-gray-600 hover:text-mirror-pink transition-colors">
                  Our Stories
                </Link>
              </li>
              <li>
                <Link to="/stories/circular-economy" className="text-gray-600 hover:text-mirror-pink transition-colors">
                  Circular Economy
                </Link>
              </li>
              <li>
                <Link to="/stories/craftsmanship" className="text-gray-600 hover:text-mirror-pink transition-colors">
                  Craftsmanship
                </Link>
              </li>
              <li>
                <Link to="/contact" className="text-gray-600 hover:text-mirror-pink transition-colors">
                  Contact Us
                </Link>
              </li>
            </ul>
          </div>
          
          <div>
            <h4 className="font-playfair text-lg font-medium mb-4">Stay Connected</h4>
            <p className="text-sm text-gray-600 mb-4">
              Subscribe to our newsletter for updates on new products and stories.
            </p>
            <div className="flex space-x-2 mt-4">
              <Button size="icon" variant="outline" className="rounded-full">
                <Instagram className="h-4 w-4" />
              </Button>
              <Button size="icon" variant="outline" className="rounded-full">
                <Facebook className="h-4 w-4" />
              </Button>
              <Button size="icon" variant="outline" className="rounded-full">
                <Twitter className="h-4 w-4" />
              </Button>
              <Button size="icon" variant="outline" className="rounded-full">
                <Mail className="h-4 w-4" />
              </Button>
            </div>
          </div>
        </div>
        
        <div className="mt-12 pt-6 border-t border-gray-200">
          <div className="flex flex-col md:flex-row justify-between items-center">
            <p className="text-sm text-gray-500">
              &copy; {new Date().getFullYear()} MirrorStorytellers.store. All rights reserved.
            </p>
            <div className="flex space-x-6 mt-4 md:mt-0">
              <Link to="/privacy" className="text-sm text-gray-500 hover:text-mirror-pink">
                Privacy Policy
              </Link>
              <Link to="/terms" className="text-sm text-gray-500 hover:text-mirror-pink">
                Terms of Service
              </Link>
              <Link to="/shipping" className="text-sm text-gray-500 hover:text-mirror-pink">
                Shipping
              </Link>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
