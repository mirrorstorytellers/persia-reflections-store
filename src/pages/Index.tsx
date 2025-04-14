
import React from "react";
import Navbar from "@/components/layout/Navbar";
import Footer from "@/components/layout/Footer";
import Hero from "@/components/home/Hero";
import FeaturedProducts from "@/components/home/FeaturedProducts";
import StoryPreview from "@/components/home/StoryPreview";
import CircularEconomy from "@/components/home/CircularEconomy";

const Index = () => {
  return (
    <div className="min-h-screen flex flex-col">
      <Navbar />
      <main className="flex-grow">
        <Hero />
        <FeaturedProducts />
        <StoryPreview />
        <CircularEconomy />
      </main>
      <Footer />
    </div>
  );
};

export default Index;
