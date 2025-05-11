const About = () => {
    return (
        <section id="about" className="py-16 md:py-24 bg-gray-50">
            <div className="container mx-auto px-4">
                <div className="max-w-4xl mx-auto">
                    <h2 className="text-3xl md:text-4xl font-bold text-center mb-12 text-gray-800">About Us</h2>

                    <div className="grid md:grid-cols-2 gap-10">
                        <div className="bg-white p-8 rounded-lg shadow-md">
                            <h3 className="text-2xl font-bold mb-4 text-blue-600">Our Mission</h3>
                            <p className="text-gray-700 leading-relaxed">
                                Our mission is to provide safe, clean, and refreshing drinking water to homes, offices, and industries.
                                We aim to promote healthier lifestyles by delivering high-quality mineral water in eco-friendly packaging,
                                backed by reliable service and strict quality standards.
                            </p>
                        </div>

                        <div className="bg-white p-8 rounded-lg shadow-md">
                            <h3 className="text-2xl font-bold mb-4 text-blue-600">Our Vision</h3>
                            <p className="text-gray-700 leading-relaxed">
                                To become a leading name in the packaged drinking water industry by ensuring unmatched purity, customer
                                trust, and sustainability. We envision a future where everyone has easy access to clean drinking water
                                through innovation, environmental responsibility, and continuous improvement.
                            </p>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default About;
