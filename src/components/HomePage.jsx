import { ChevronRight, Star, Truck } from "lucide-react";
import img1 from "../images/happy.webp";

const HomePage = () => {
  return (
    <div className="min-h-screen bg-gray-500">
      {/* Hero Section */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12 lg:py-20">
        <div className="bg-white rounded-2xl shadow-xl overflow-hidden">
          <div className="flex flex-col md:flex-row items-center">
            {/* Left Content */}
            <div className="w-full md:w-1/2 p-8 lg:p-12">
              <div className="space-y-6">
                <div className="inline-block px-4 py-1 bg-blue-50 rounded-full">
                  <p className="text-blue-600 font-medium text-sm">
                    Free Shipping on Orders Over $50
                  </p>
                </div>

                <h1 className="text-4xl lg:text-5xl font-bold text-gray-900 leading-tight">
                  Let us Make Your Shopping
                  <span className="text-blue-600"> Effortless</span>
                </h1>

                <p className="text-lg text-gray-600 leading-relaxed">
                  We have been making shopping easier for customers just like
                  you for over a decade. Experience the convenience of modern
                  shopping.
                </p>

                <div className="flex flex-col sm:flex-row gap-4">
                  <button className="px-8 py-3 bg-blue-600 text-white font-medium rounded-lg hover:bg-blue-700 transition duration-300 flex items-center justify-center gap-2">
                    Start Shopping
                    <ChevronRight size={20} />
                  </button>
                  <button className="px-8 py-3 bg-gray-100 text-gray-700 font-medium rounded-lg hover:bg-gray-200 transition duration-300">
                    Learn More
                  </button>
                </div>

                {/* Trust Indicators */}
                <div className="pt-8 grid grid-cols-2 gap-4">
                  <div className="flex items-center gap-2">
                    <div className="p-2 bg-green-50 rounded-lg">
                      <Truck className="w-5 h-5 text-green-600" />
                    </div>
                    <p className="text-sm text-gray-600">Fast Delivery</p>
                  </div>
                  <div className="flex items-center gap-2">
                    <div className="p-2 bg-yellow-50 rounded-lg">
                      <Star className="w-5 h-5 text-yellow-600" />
                    </div>
                    <p className="text-sm text-gray-600">Top Rated Service</p>
                  </div>
                </div>
              </div>
            </div>

            {/* Right Image */}
            <div className="w-full md:w-1/2 p-8 lg:p-12">
              <div className="relative">
                <div className="absolute inset-0 bg-gradient-to-br from-blue-100/50 to-purple-100/50 rounded-2xl" />
                <img
                  src={img1}
                  alt="Happy shoppers"
                  className="rounded-2xl w-full h-full object-cover shadow-lg transform hover:scale-105 transition duration-500"
                  style={{ minHeight: "400px" }}
                  loading="lazy"
                  sizes="(max-width: 768px) 100vw, 50vw"
                />
              </div>
            </div>
          </div>
        </div>

        {/* Stats Section */}
        <div className="mt-12 grid grid-cols-2 md:grid-cols-4 gap-6">
          {[
            { number: "10K+", label: "Active Users" },
            { number: "50+", label: "Store Partners" },
            { number: "24/7", label: "Support" },
            { number: "99%", label: "Satisfaction" },
          ].map((stat, index) => (
            <div
              key={index}
              className="bg-white p-6 rounded-xl shadow-sm text-center"
            >
              <p className="text-2xl font-bold text-blue-600">{stat.number}</p>
              <p className="text-gray-600 text-sm">{stat.label}</p>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default HomePage;
