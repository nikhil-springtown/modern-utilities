import React, { useEffect } from 'react';
import useEmblaCarousel from 'embla-carousel-react';
import { ChevronLeft, ChevronRight, Star } from 'lucide-react';

const reviews = [
  {
    id: 1,
    name: "Alice Johnson",
    review: "Modern Utilities made my move so much easier. Their affordable electricity plan and quick setup were exactly what I needed!",
    rating: 5,
  },
  {
    id: 2,
    name: "Bob Smith",
    review: "I'm impressed with their water service. The quality is great, and the price is even better. Highly recommended!",
    rating: 4,
  },
  {
    id: 3,
    name: "Carol Davis",
    review: "The internet package I got from Modern Utilities is fast and reliable. Customer service has been excellent too!",
    rating: 5,
  },
  {
    id: 4,
    name: "David Wilson",
    review: "Their waste management service is efficient and eco-friendly. It's great to see a company that cares about the environment.",
    rating: 4,
  },
];

export default function ReviewCarousel() {
  const [emblaRef, emblaApi] = useEmblaCarousel({ loop: true });

  // Automatically scroll the carousel every 3 seconds
  useEffect(() => {
    const interval = setInterval(() => {
      if (emblaApi) emblaApi.scrollNext();
    }, 3000); // 3000ms = 3 seconds

    // Cleanup the interval when the component unmounts
    return () => clearInterval(interval);
  }, [emblaApi]);

  const scrollPrev = React.useCallback(() => {
    if (emblaApi) emblaApi.scrollPrev();
  }, [emblaApi]);

  const scrollNext = React.useCallback(() => {
    if (emblaApi) emblaApi.scrollNext();
  }, [emblaApi]);

  return (
    <div className="relative w-full px-4 py-16 bg-white">
      <h2 className="text-3xl font-bold text-center text-blue-600 mb-12">What Our Clients Say</h2>
      <div className="overflow-hidden" ref={emblaRef}>
        <div className="flex gap-6">
          {reviews.map((review) => (
            <div key={review.id} className="flex-shrink-0 w-full sm:w-1/2 md:w-1/3 px-4">
              <div className="bg-blue-50 p-6 rounded-lg shadow-md hover:shadow-xl transition-shadow duration-300">
                <div className="flex items-center mb-4">
                  {[...Array(5)].map((_, i) => (
                    <Star
                      key={i}
                      className={`w-5 h-5 ${i < review.rating ? 'text-yellow-400' : 'text-gray-300'}`}
                    />
                  ))}
                </div>
                <p className="text-gray-700 mb-4">{review.review}</p>
                <p className="font-semibold text-blue-600">{review.name}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
      <button
        className="absolute left-4 top-1/2 transform -translate-y-1/2 bg-blue-600 text-white p-2 rounded-full shadow-md hover:bg-blue-700 focus:outline-none"
        onClick={scrollPrev}
      >
        <ChevronLeft className="h-5 w-5" />
      </button>
      <button
        className="absolute right-4 top-1/2 transform -translate-y-1/2 bg-blue-600 text-white p-2 rounded-full shadow-md hover:bg-blue-700 focus:outline-none"
        onClick={scrollNext}
      >
        <ChevronRight className="h-5 w-5" />
      </button>
    </div>
  );
}
