import Image from "next/image";

const productCategories = [
    {
        title: "1L Packaged Drinking Water",
        description:
            "Safe, hygienic, and convenient – our 1-liter bottles are perfect for offices, homes, and travel. Sealed and certified to meet BIS quality standards.",
        image: "/1l-bottle.jpeg"
    },
    {
        title: "500ml & 250ml Bottled Water",
        description:
            "Compact and easy to carry, these small-size bottles are ideal for travel, events, catering, and guest offerings at hotels and homes.",
        image: "/500ml-bottle.jpeg"
    },
    {
        title: "20L Drinking Water Jars",
        description:
            "Bulk purified water solution for homes, offices, and commercial spaces. Delivered with tamper-proof caps and available on daily or subscription basis.",
        image: "/20l-jar.jpeg"
    },
    {
        title: "Hot & Cold Water Dispensers",
        description:
            "Dispenser machines available for rental or purchase. Compatible with 20L jars, offering hot and cold water options. Maintenance included with rental plans.",
        image: "/dispenser.jpeg"
    },
    {
        title: "Custom-Labeled Bottles",
        description:
            "We offer custom branding on water bottles for weddings, events, hotels, and corporates. Boost your brand visibility with every sip.",
        image: "/custom-labels.webp"
    },
    {
        title: "Glass Bottled Mineral Water",
        description:
            "Premium drinking water in elegant glass bottles. Perfect for restaurants, luxury hotels, events, and high-end retail with eco-conscious packaging.",
        image: "/glass-bottle.jpeg"
    },
    {
        title: "Bulk Water Supply for Events",
        description:
            "We cater to large-scale events, exhibitions, and public gatherings with packaged water bottles and jars delivered in bulk — on-time, every time.",
        image: "/event-water.jpeg"
    },
    {
        title: "Water Quality Testing & Certification",
        description:
            "Every batch of water is tested for purity and safety. Certified under BIS and FSSAI guidelines, ensuring reliable and safe hydration for all.",
        image: "/water-testing.jpeg"
    },
    {
        title: "Retail & Wholesale Distribution",
        description:
            "Partner with us for consistent water supply to retail shops, hotels, restaurants, hospitals, and commercial chains across the region.",
        image: "/distribution.jpeg"
    }
];

const Products = () => {
    return (
        <section id="products" className="py-16 md:py-24 bg-gray-50">
            <div className="container mx-auto px-4">
                <h2 className="text-3xl md:text-4xl font-extrabold text-center mb-6 text-gray-800">Our Products</h2>
                <p className="text-center text-lg text-gray-600 mb-12 max-w-3xl mx-auto">
                    From individual bottles to bulk supplies, we provide pure and refreshing mineral water tailored to your daily needs and business demands.
                </p>

                <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
                    {productCategories.map((category, index) => (
                        <div
                            key={index}
                            className="bg-white rounded-lg overflow-hidden shadow-lg hover:shadow-2xl transition-all duration-300 transform hover:scale-105"
                        >
                            <div className="w-full h-64 sm:h-48">
                                <Image
                                    src={category.image || "/placeholder.svg"}
                                    alt={category.title}
                                    width={500}
                                    height={300}
                                    className="w-full h-full object-cover"
                                />
                            </div>

                            <div className="p-6">
                                <h3 className="text-2xl font-semibold text-gray-800 mb-2">{category.title}</h3>
                                <p className="text-gray-600 text-sm md:text-base">{category.description}</p>
                            </div>
                        </div>
                    ))}
                </div>

                <div className="mt-12 text-center">
                    <button className="bg-blue-600 hover:bg-blue-700 text-white px-8 py-3 rounded-md font-semibold transition duration-300 transform hover:scale-105">
                        View Full Catalog
                    </button>
                </div>
            </div>
        </section>
    );
};

export default Products;
