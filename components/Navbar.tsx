"use client"
import { useState } from "react"
import Link from "next/link"
import { Menu, X } from "lucide-react"

const Navbar = () => {
    const [isOpen, setIsOpen] = useState(false)

    const toggleMenu = () => {
        setIsOpen(!isOpen)
    }

    return (
        <nav className="bg-white shadow-md fixed w-full z-50">
            <div className="container mx-auto px-4 py-3">
                <div className="flex justify-between items-center">
                    {/* Logo and Tagline */}
                    <div className="flex items-center">
                        <Link href="/" className="text-xl md:text-2xl font-bold text-blue-700">
                            CITY PURIFIED WATERS
                        </Link>
                        <span className="hidden md:block text-xs text-gray-500 ml-2">
                            A BRAND OF SHUDH WATER PURIFIERS
                        </span>
                    </div>

                    {/* Desktop Navigation */}
                    <div className="hidden md:flex space-x-8">
                        <Link href="#about" className="text-gray-700 hover:text-blue-600 transition duration-300">
                            About
                        </Link>
                        <Link href="#products" className="text-gray-700 hover:text-blue-600 transition duration-300">
                            Products
                        </Link>
                        <Link href="#delivery" className="text-gray-700 hover:text-blue-600 transition duration-300">
                            Delivery
                        </Link>
                        <Link href="#brands" className="text-gray-700 hover:text-blue-600 transition duration-300">
                            Brands
                        </Link>
                        <Link href="#contact" className="text-gray-700 hover:text-blue-600 transition duration-300">
                            Contact
                        </Link>
                    </div>

                    {/* Mobile Menu Button */}
                    <div className="md:hidden">
                        <button onClick={toggleMenu} className="text-gray-700 hover:text-blue-600 focus:outline-none">
                            {isOpen ? <X size={24} /> : <Menu size={24} />}
                        </button>
                    </div>
                </div>

                {/* Mobile Navigation Menu */}
                {isOpen && (
                    <div className="md:hidden mt-2 py-2 bg-white">
                        <div className="flex flex-col space-y-3">
                            <Link href="#about" className="text-gray-700 hover:text-blue-600 px-4 py-2" onClick={toggleMenu}>
                                About
                            </Link>
                            <Link href="#products" className="text-gray-700 hover:text-blue-600 px-4 py-2" onClick={toggleMenu}>
                                Products
                            </Link>
                            <Link href="#delivery" className="text-gray-700 hover:text-blue-600 px-4 py-2" onClick={toggleMenu}>
                                Delivery
                            </Link>
                            <Link href="#brands" className="text-gray-700 hover:text-blue-600 px-4 py-2" onClick={toggleMenu}>
                                Brands
                            </Link>
                            <Link href="#contact" className="text-gray-700 hover:text-blue-600 px-4 py-2" onClick={toggleMenu}>
                                Contact
                            </Link>
                        </div>
                    </div>
                )}
            </div>
        </nav>
    )
}

export default Navbar
