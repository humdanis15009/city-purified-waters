import Link from "next/link";
import Image from "next/image";
import Navbar from "./Navbar";
import FloatingButton from "./FloatingButton";

const Hero = () => {
    return (
        <div className="relative text-white min-h-screen">
            <div className="absolute inset-0 z-0">
                <Image
                    src="/hero-water.avif"
                    alt="Packaged Drinking Water"
                    fill
                    className="object-cover brightness-50"
                    priority
                />
            </div>
            <Navbar />

            <div className="container mx-auto px-4 pt-16 pb-12 sm:pt-20 sm:pb-16 md:pt-32 md:pb-24 relative z-10">
                <div className="flex flex-col md:flex-row items-center">
                    {/* Text Section */}
                    <div className="w-full md:w-1/2 mb-10 md:mb-0 text-center md:text-left">
                        <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold mb-4 sm:mb-6">
                            CITY PURIFIED WATERS
                        </h1>
                        <p className="text-base sm:text-lg md:text-xl mb-4 sm:mb-6 opacity-90">
                            A BRAND OF SHUDH WATER PURIFIERS
                        </p>
                        <p className="text-lg sm:text-xl md:text-2xl mb-6">
                            Delivering pure, refreshing, and safe mineral water — straight to your doorstep.
                        </p>
                        <div className="flex flex-col sm:flex-row gap-4 justify-center md:justify-start">
                            <Link
                                href="#products"
                                className="bg-white text-blue-600 hover:bg-gray-100 px-6 py-3 rounded-md font-medium text-center transition duration-300"
                            >
                                Explore Products
                            </Link>
                            <Link
                                href="#contact"
                                className="bg-transparent border-2 border-white hover:bg-white hover:text-blue-600 px-6 py-3 rounded-md font-medium text-center transition duration-300"
                            >
                                Contact Us
                            </Link>
                            <a
                                href="tel:918601381096"
                                className="bg-blue-600 text-white hover:bg-blue-700 px-6 py-3 rounded-md font-medium text-center transition duration-300"
                            >
                                Call: 8601381096
                            </a>
                        </div>
                        <FloatingButton />
                    </div>

                    {/* Image/Card Section */}
                    <div className="w-full md:w-1/2 flex justify-center">
                        <div className="relative w-full max-w-sm sm:max-w-md h-72 sm:h-80 md:h-96 bg-white/10 rounded-lg backdrop-blur-sm shadow-xl">
                            <div className="absolute inset-0 flex items-center justify-center">
                                <div className="text-center p-4 sm:p-6">
                                    <h3 className="text-xl sm:text-2xl font-bold mb-3 sm:mb-4">Why Choose Us?</h3>
                                    <p className="text-sm sm:text-base mb-3">Trusted by thousands for clean, crisp hydration</p>
                                    <div className="grid grid-cols-2 gap-2 sm:gap-4 text-xs sm:text-sm">
                                        <div className="bg-white/20 p-2 rounded">1L & 500ml Bottles</div>
                                        <div className="bg-white/20 p-2 rounded">20L Water Jars</div>
                                        <div className="bg-white/20 p-2 rounded">Home & Office Delivery</div>
                                        <div className="bg-white/20 p-2 rounded">ISI & FSSAI Certified</div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Hero;
