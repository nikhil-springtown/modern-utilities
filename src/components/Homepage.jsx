import React from 'react';
import img1 from "../assets/img1.jpg";  // Ensure the path is correct

export default function Homepage() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-50 to-indigo-100 pt-10">
      <div className="mx-auto px-4 sm:px-6 lg:px-8 py-12 sm:py-24">
        <div className="flex flex-col-reverse lg:flex-row items-center lg:justify-between gap-8 lg:gap-16">

          {/* Text Section (on left side on large screens) */}
          <div className="w-full lg:w-1/2 text-center lg:text-left">
            <h1 className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-extrabold text-gray-900 tracking-tight">
              <span className="block">Modern Utilities</span>
              <span className="block text-indigo-600">Best Service, Affordable Prices</span>
            </h1>
            <p className="mt-4 sm:mt-6 text-lg sm:text-xl text-gray-600 sm:max-w-xl sm:mx-auto md:text-xl lg:mx-0">
              Experience top-notch utility services without breaking the bank. From electricity to water, we've got you covered with our efficient and cost-effective solutions.
            </p>

            {/* Buttons Section */}
            <div className="mt-6 sm:mt-8 flex flex-col sm:flex-row sm:justify-center lg:justify-start gap-6">
              {/* Get Started Button */}
              <button className="w-full sm:w-auto py-4 px-8 text-white bg-indigo-600 hover:bg-indigo-700 rounded-lg text-lg font-semibold transition transform duration-300 ease-in-out shadow-lg hover:scale-105">
                Get Started
              </button>
              
              {/* Learn More Button */}
              <button className="w-full sm:w-auto py-4 px-8 text-indigo-600 bg-white border-2 border-indigo-600 hover:bg-indigo-50 rounded-lg text-lg font-semibold transition transform duration-300 ease-in-out shadow-lg hover:scale-105">
                Learn More
              </button>
            </div>
          </div>

          {/* Image Section (on right side on large screens) */}
          <div className="w-full lg:w-1/2 relative mt-8 lg:mt-0">
            <div className="aspect-w-16 aspect-h-9 sm:aspect-w-4 sm:aspect-h-3 md:aspect-w-3 md:aspect-h-2 lg:aspect-w-16 lg:aspect-h-9 rounded-lg shadow-xl overflow-hidden transform transition duration-500 hover:scale-105">
              <img
                src={img1}
                alt="Modern city utilities"
                className="w-full h-full object-cover"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black opacity-40 rounded-lg"></div>
            </div>
          </div>

        </div>
      </div>
    </div>
  );
}
