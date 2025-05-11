import Image from "next/image";

const productDetails = [
    {
        title: "1L Packaged Drinking Water Bottles",
        description:
            "Ideal for home, offices, and events. These bottles come sealed and certified to meet BIS and FSSAI standards. Lightweight and convenient for everyday hydration needs.",
        tags: ["#BISApproved", "#LeakProof", "#RecyclablePET"],
        image: "/1l-bottle.jpeg",
    },
    {
        title: "500ml & 250ml Small Bottles",
        description:
            "Perfect for travel, conferences, and guests. Easy to carry and hygienically packaged. Available in packs of 12, 24, and 48 bottles.",
        tags: ["#TravelFriendly", "#EventReady"],
        image: "/500ml-bottle.jpeg",
    },
    {
        title: "20L Water Jars",
        description:
            "Bulk purified water jars for homes and businesses. Comes with tamper-proof caps and reusable containers. Home delivery available with pickup/refill cycles.",
        tags: ["#Reusable", "#DoorstepDelivery", "#CostEffective"],
        image: "/20l-jar.jpeg",
    },
    {
        title: "Water Dispenser Rental",
        description:
            "Need dispensers for your office or event? We offer monthly rental services for both hot & cold water dispensers with full maintenance support.",
        tags: ["#HotAndCold", "#FreeMaintenance", "#MonthlyPlans"],
        image: "/dispenser.jpeg",
    },
    {
        title: "Customized Bottle Branding",
        description:
            "Boost your brand by customizing water bottle labels for corporate events, weddings, hotels, and hospitality. Minimum order quantities apply.",
        tags: ["#CustomLabel", "#BrandPromotion", "#BulkOrders"],
        image: "/custom-labels.webp",
    },
    {
        title: "Glass Bottled Mineral Water",
        description:
            "Premium mineral water packaged in elegant glass bottles — ideal for restaurants, hotels, and events. Stylish, sustainable, and safe.",
        tags: ["#PremiumService", "#EcoFriendly"],
        image: "/glass-bottle.jpeg",
    },
];

const ProductDetails = () => {
    return (
        <section id="details" className="py-16 md:py-24 bg-gray-50">
            <div className="container mx-auto px-4">
                <h2 className="text-3xl md:text-4xl font-bold text-center mb-4 text-gray-800">Product Details</h2>
                <p className="text-center text-gray-600 mb-12 max-w-3xl mx-auto">
                    Discover our wide range of safe, reliable, and eco-friendly water solutions tailored for Indian homes and businesses.
                </p>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                    {productDetails.map((product, index) => (
                        <div
                            key={index}
                            className="bg-white rounded-lg overflow-hidden shadow-md hover:shadow-lg transition duration-300 flex flex-col md:flex-row"
                        >
                            <div className="md:w-2/5 relative h-64 md:h-auto">
                                <Image
                                    src={product.image || "/placeholder.svg"}
                                    alt={product.title}
                                    fill
                                    className="object-cover"
                                />
                            </div>
                            <div className="md:w-3/5 p-6">
                                <h3 className="text-xl font-bold mb-2 text-gray-800">{product.title}</h3>
                                <p className="text-gray-600 mb-4">{product.description}</p>
                                {product.tags.length > 0 && (
                                    <div className="flex flex-wrap gap-2">
                                        {product.tags.map((tag, idx) => (
                                            <span key={idx} className="bg-blue-100 text-blue-600 text-xs px-2 py-1 rounded">
                                                {tag}
                                            </span>
                                        ))}
                                    </div>
                                )}
                            </div>
                        </div>
                    ))}
                </div>

                <div className="mt-12 text-center">
                    <button className="bg-blue-600 hover:bg-blue-700 text-white px-8 py-3 rounded-md font-medium transition duration-300">
                        Request Product Catalog
                    </button>
                </div>
            </div>
        </section>
    );
};

export default ProductDetails;
