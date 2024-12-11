import React from 'react';
import img1 from "../assets/img1.jpg";  // Ensure the path is correct

export default function Homepage() {
  return (
    <div className="bg-white pt-32 pb-16 md:pt-40 lg:pt-48">  {/* Increased top padding for navbar separation */}
      <div className="container mx-auto px-4 sm:px-6 lg:px-16">
        <div className="grid lg:grid-cols-2 gap-12 lg:gap-16 items-center">
          
          {/* Content Section (Left Side on Large Screens) */}
          <div className="space-y-8 order-last lg:order-first">  {/* Ensure correct order on mobile and desktop */}
            {/* Header */}
            <div>
              <h2 className="text-4xl sm:text-5xl md:text-6xl font-extrabold text-gray-900 tracking-tight mb-6">
                Modern Utilities <br className="hidden sm:block" />
                <span className="text-blue-600">Best Service, Affordable Prices</span>
              </h2>
              <p className="text-2xl text-gray-600 max-w-xl">
                Experience top-notch utility services without breaking the bank.  Your one-stop shop for internet, moblie/landline service, and TV! For more info about service in your area, DM us or call 702-850-6149...
              </p>
            </div>

            {/* Call to Action Buttons */}
            <div className="flex flex-col sm:flex-row items-start gap-4 sm:gap-6">
              <button className="w-full sm:w-auto py-4 px-8 text-white bg-blue-600 hover:bg-blue-700 rounded-lg text-lg font-semibold 
                transition duration-300 ease-in-out shadow-md hover:scale-105 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-offset-2">
                Get Started
              </button>
              <button className="w-full sm:w-auto py-4 px-8 text-blue-600 bg-white border-2 border-blue-600 
                hover:bg-blue-50 rounded-lg text-lg font-semibold 
                transition duration-300 ease-in-out shadow-md hover:scale-105 
                focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-offset-2">
                Learn More
              </button>
            </div>
          </div>

          {/* Image Section (Right Side on Large Screens) */}
          <div className="relative w-full h-80 sm:h-96 lg:h-[500px] xl:h-[600px] rounded-2xl overflow-hidden group">
            <img
              src={img1}
              alt="Modern city utilities"
              className="w-full h-full object-cover transform transition-transform duration-500 group-hover:scale-105"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-blue-600 via-transparent to-transparent opacity-30 rounded-2xl"></div>
          </div>
        </div>
      </div>
    </div>
  );
}