// src/components/Services.jsx

import React from 'react';
import { Zap, Droplet, Wind, Wifi, Phone, Trash } from 'lucide-react';

// Service data array
const services = [
  {
    name: "Electricity",
    description: "Reliable power supply for your home.",
    icon: Zap,
    price: "Affordable rates starting at $0.10/kWh",
  },
  {
    name: "Water",
    description: "Clean and safe water delivery.",
    icon: Droplet,
    price: "Low-cost plans from $20/month",
  },
  {
    name: "Gas",
    description: "Efficient natural gas service.",
    icon: Wind,
    price: "Competitive pricing at $0.80/therm",
  },
  {
    name: "Internet",
    description: "High-speed fiber optic internet.",
    icon: Wifi,
    price: "Fast connections from $39.99/month",
  },
  {
    name: "Phone",
    description: "Crystal-clear landline service.",
    icon: Phone,
    price: "Plans starting at just $9.99/month",
  },
  {
    name: "Waste Management",
    description: "Efficient waste collection and recycling.",
    icon: Trash,
    price: "Eco-friendly service from $15/month",
  },
];

// ServiceCard Component
const ServiceCard = ({ name, description, icon: Icon, price }) => {
  return (
    <div className="bg-white rounded-lg shadow-lg overflow-hidden transform transition duration-300 hover:scale-105 hover:shadow-2xl">
      <div className="p-6 flex flex-col items-center text-center">
        {/* Icon */}
        <div className="w-16 h-16 bg-blue-100 rounded-full flex items-center justify-center mb-4">
          <Icon className="w-8 h-8 text-blue-600" />
        </div>
        {/* Service Name */}
        <h3 className="text-xl font-semibold text-gray-900 mb-2">{name}</h3>
        {/* Service Description */}
        <p className="text-gray-600 mb-4">{description}</p>
        {/* Price */}
        <p className="text-lg font-bold text-blue-600 mb-6">{price}</p>
        {/* Call to Action Button */}
        <button className="w-full bg-blue-600 text-white py-2 px-4 rounded-lg hover:bg-blue-700 transition-colors duration-300">
          Learn More
        </button>
      </div>
    </div>
  );
};

// Services Component
export default function Services() {
  return (
    <section className="bg-gray-50 py-12 sm:py-16 lg:py-24">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center mb-12">
          <h2 className="text-3xl font-extrabold text-gray-900 mb-4">Explore Our Most Popular Services</h2>
          <p className="text-lg text-gray-600">
            We offer a wide range of utility services to make your move to a new home seamless and stress-free.
          </p>
        </div>
        
        {/* Services Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
          {services.map((service) => (
            <ServiceCard key={service.name} {...service} />
          ))}
        </div>
      </div>
    </section>
  );
}
