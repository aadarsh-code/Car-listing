"use client";

import { useState, useEffect, useCallback } from "react";
import Image from "next/image";
import { ChevronLeft, ChevronRight } from "lucide-react";
import { Button } from "@/components/ui/button";

interface CarImageCarouselProps {
  images: string[];
}

export function CarImageCarousel({ images }: CarImageCarouselProps) {
  const [currentImageIndex, setCurrentImageIndex] = useState(0);

  const nextImage = useCallback(() => {
    setCurrentImageIndex((prevIndex) => (prevIndex + 1) % images.length);
  }, [images.length]);

  const prevImage = useCallback(() => {
    setCurrentImageIndex(
      (prevIndex) => (prevIndex - 1 + images.length) % images.length
    );
  }, [images.length]);

  useEffect(() => {
    const intervalId = setInterval(() => {
      nextImage();
    }, 5000); // Change image every 5 seconds

    return () => clearInterval(intervalId);
  }, [nextImage]);

  return (
    <div className="relative">
      <div className="relative w-full h-[400px] overflow-hidden rounded-lg">
        {images.map((src, index) => (
          <Image
            key={src}
            src={src || "/placeholder.svg"}
            alt={`Car image ${index + 1}`}
            fill
            style={{
              objectFit: "cover",
              opacity: index === currentImageIndex ? 1 : 0,
              transition: "opacity 0.5s ease-in-out",
            }}
          />
        ))}
      </div>
      <div className="absolute inset-x-0 top-1/2 transform -translate-y-1/2 flex justify-between">
        <Button
          variant="outline"
          size="icon"
          onClick={prevImage}
          className="ml-2 bg-white/80 hover:bg-white"
        >
          <ChevronLeft className="h-4 w-4" />
        </Button>
        <Button
          variant="outline"
          size="icon"
          onClick={nextImage}
          className="mr-2 bg-white/80 hover:bg-white"
        >
          <ChevronRight className="h-4 w-4" />
        </Button>
      </div>
      <div className="absolute bottom-4 left-1/2 transform -translate-x-1/2 flex space-x-2">
        {images.map((_, index) => (
          <button
            key={index}
            className={`h-2 w-2 rounded-full transition-all ${
              index === currentImageIndex
                ? "bg-blue-500 w-4"
                : "bg-white/60 hover:bg-white"
            }`}
            onClick={() => setCurrentImageIndex(index)}
          />
        ))}
      </div>
    </div>
  );
}
