import React, { useEffect, useCallback } from 'react';
import useEmblaCarousel from 'embla-carousel-react';
import { ChevronLeft, ChevronRight, Star, Quote } from 'lucide-react';

const reviews = [
  {
    id: 1,
    name: "Alice Johnson",
    review: "Modern Utilities made my move so much easier. Their affordable electricity plan and quick setup were exactly what I needed!",
    rating: 5,
    profession: "Marketing Manager"
  },
  {
    id: 2,
    name: "Bob Smith",
    review: "I'm impressed with their water service. The quality is great, and the price is even better. Highly recommended!",
    rating: 4,
    profession: "Small Business Owner"
  },
  {
    id: 3,
    name: "Carol Davis",
    review: "The internet package I got from Modern Utilities is fast and reliable. Customer service has been excellent too!",
    rating: 5,
    profession: "Freelance Designer"
  },
  {
    id: 4,
    name: "David Wilson",
    review: "Their waste management service is efficient and eco-friendly. It's great to see a company that cares about the environment.",
    rating: 4,
    profession: "Environmental Consultant"
  },
];

export default function ReviewCarousel() {
  const [emblaRef, emblaApi] = useEmblaCarousel({ 
    loop: true,
    align: 'start',
    skipSnaps: false,
  });

  // Automatically scroll the carousel every 5 seconds
  useEffect(() => {
    const interval = setInterval(() => {
      if (emblaApi) emblaApi.scrollNext();
    }, 5000);

    return () => clearInterval(interval);
  }, [emblaApi]);

  const scrollPrev = useCallback(() => {
    if (emblaApi) emblaApi.scrollPrev();
  }, [emblaApi]);

  const scrollNext = useCallback(() => {
    if (emblaApi) emblaApi.scrollNext();
  }, [emblaApi]);

  return (
    <section className="w-full bg-white py-16 md:py-24">
      <div className="container mx-auto px-4 sm:px-6 lg:px-16">
        {/* Section Header */}
        <div className="text-center mb-12">
          <h2 className="text-4xl font-bold text-gray-900 mb-4">
            Testimonials
          </h2>
          <p className="text-gray-600 max-w-2xl mx-auto">
            Hear from our satisfied customers who have experienced the Modern Utilities difference.
          </p>
        </div>

        {/* Carousel Wrapper */}
        <div className="relative">
          {/* Carousel */}
          <div className="overflow-hidden" ref={emblaRef}>
            <div className="flex gap-6">
              {reviews.map((review) => (
                <div 
                  key={review.id} 
                  className="flex-shrink-0 w-full sm:w-[calc(50%-1.5rem)] lg:w-[calc(33.333%-1.5rem)] px-4"
                >
                  <div className="bg-blue-50 p-6 rounded-xl shadow-lg hover:shadow-xl transition-all duration-300 group">
                    <div className="flex items-start mb-4">
                      <Quote className="w-8 h-8 text-blue-400 mr-3 opacity-50" />
                      <div className="flex">
                        {[...Array(5)].map((_, i) => (
                          <Star
                            key={i}
                            className={`w-5 h-5 ${i < review.rating ? 'text-yellow-400' : 'text-gray-300'}`}
                          />
                        ))}
                      </div>
                    </div>
                    <p className="text-gray-700 mb-4 italic group-hover:text-gray-900 transition-colors">
                      "{review.review}"
                    </p>
                    <div className="flex items-center">
                      <div>
                        <p className="font-semibold text-blue-600">{review.name}</p>
                        <p className="text-sm text-gray-500">{review.profession}</p>
                      </div>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Navigation Buttons */}
          {/* Previous Button */}
          <button
            className="hidden md:flex absolute left-[-60px] top-1/2 transform -translate-y-1/2 bg-blue-600 text-white p-4 rounded-full shadow-lg hover:bg-blue-700 focus:outline-none transition-all duration-300"
            onClick={scrollPrev}
            aria-label="Previous Slide"
          >
            <ChevronLeft className="h-6 w-6" />
          </button>
          
          {/* Next Button */}
          <button
            className="hidden md:flex absolute right-[-60px] top-1/2 transform -translate-y-1/2 bg-blue-600 text-white p-4 rounded-full shadow-lg hover:bg-blue-700 focus:outline-none transition-all duration-300"
            onClick={scrollNext}
            aria-label="Next Slide"
          >
            <ChevronRight className="h-6 w-6" />
          </button>
        </div>
      </div>
    </section>
  );
}
