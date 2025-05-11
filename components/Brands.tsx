import Image from "next/image";

const brandLogos = [
    { name: "Bisleri", logo: "/bisleri-logo.png" },
    { name: "Aquafina", logo: "/aquafina-logo.png" },
    { name: "Kinley", logo: "/kinley-logo.png" },
    { name: "Bailley", logo: "/bailley-logo.jpg" },
    { name: "Himalayan", logo: "/himalayan-logo.png" },
    { name: "Rail Neer", logo: "/railneer-logo.png" },
    { name: "Kingfisher", logo: "/kingfisher-logo.png" },
    { name: "Tata Water Plus", logo: "/tata-waterplus.jpeg" },
    { name: "Oxyrich", logo: "/oxyrich-logo.png" },
    { name: "Qua", logo: "/qua-logo.jpg" },
];

const Brands = () => {
    return (
        <section id="brands" className="py-16 md:py-24 bg-gray-50">
            <div className="container mx-auto px-4">
                <h2 className="text-3xl md:text-4xl font-bold text-center mb-4 text-gray-800">Brands We Deal With</h2>
                <p className="text-center text-gray-600 mb-12 max-w-3xl mx-auto">
                    We offer top-quality packaged drinking water from the most trusted brands in India to ensure safety and reliability.
                </p>

                <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-8">
                    {brandLogos.map((brand, index) => (
                        <div key={index} className="bg-white rounded-lg p-4 shadow-md flex items-center justify-center h-32">
                            <div className="relative w-full h-full">
                                <Image
                                    src={brand.logo || "/placeholder.svg"}
                                    alt={`${brand.name} Logo`}
                                    fill
                                    className="object-contain p-2"
                                />
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
};

export default Brands;
