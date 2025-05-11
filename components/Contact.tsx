import { Mail, Phone, MapPin } from "lucide-react"

const Contact = () => {
    return (
        <section id="contact" className="py-16 md:py-24 bg-gray-50">
            <div className="container mx-auto px-4">
                <h2 className="text-3xl md:text-4xl font-bold text-center mb-4 text-gray-800">Contact Us</h2>
                <p className="text-center text-gray-600 mb-12 max-w-3xl mx-auto">
                    Get in touch with us for any inquiries or to place an order.
                </p>

                <div className="grid md:grid-cols-2 gap-8 max-w-5xl mx-auto">
                    <div className="bg-white p-8 rounded-lg shadow-md">
                        <h3 className="text-2xl font-bold mb-6 text-gray-800">Contact Information</h3>

                        <div className="space-y-4">
                            <div className="flex items-start">
                                <div className="bg-red-100 p-3 rounded-full mr-4">
                                    <Phone className="h-6 w-6 text-red-600" />
                                </div>
                                <div>
                                    <h4 className="font-medium text-gray-700">Phone</h4>
                                    <a href="tel:7572037476" className="text-gray-600 hover:text-red-600 transition-colors">
                                        8601381096
                                    </a>
                                </div>
                            </div>

                            <div className="flex items-start">
                                <div className="bg-red-100 p-3 rounded-full mr-4">
                                    <Mail className="h-6 w-6 text-red-600" />
                                </div>
                                <div>
                                    <h4 className="font-medium text-gray-700">Email</h4>
                                    <a
                                        href="mailto:citypurifiedwaters@gmail.com"
                                        className="text-gray-600 hover:text-red-600 transition-colors"
                                    >
                                        citypurifiedwaters@gmail.com
                                    </a>
                                </div>
                            </div>

                            <div className="flex items-start">
                                <div className="bg-red-100 p-3 rounded-full mr-4">
                                    <MapPin className="h-6 w-6 text-red-600" />
                                </div>
                                <div>
                                    <h4 className="font-medium text-gray-700">Address</h4>
                                    <a
                                        href="https://maps.app.goo.gl/QxydRWx1ZmjqG9YM8"
                                        target="_blank"
                                        rel="noopener noreferrer"
                                        className="text-gray-600 hover:text-red-600 transition-colors"
                                    >
                                        Plot no. - 118, Awadh Residency,
                                        <br />
                                        Omaxe city, Lucknow,
                                        <br />
                                        Uttar Pradesh, 226008
                                    </a>
                                </div>
                            </div>
                        </div>

                        <div className="mt-8">
                            <h4 className="font-medium text-gray-700 mb-2">Business Hours</h4>
                            <p className="text-gray-600">Monday - Saturday: 9:00 AM - 6:00 PM</p>
                            <p className="text-gray-600">Sunday: Closed</p>
                        </div>
                    </div>

                    <div className="bg-white p-8 rounded-lg shadow-md">
                        <h3 className="text-2xl font-bold mb-6 text-gray-800">Send a Message</h3>

                        <form className="space-y-4">
                            <div>
                                <label htmlFor="name" className="block text-sm font-medium text-gray-700 mb-1">
                                    Your Name
                                </label>
                                <input
                                    type="text"
                                    id="name"
                                    className="w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-red-500 focus:border-transparent"
                                    placeholder="Enter your name"
                                />
                            </div>

                            <div>
                                <label htmlFor="email" className="block text-sm font-medium text-gray-700 mb-1">
                                    Email Address
                                </label>
                                <input
                                    type="email"
                                    id="email"
                                    className="w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-red-500 focus:border-transparent"
                                    placeholder="Enter your email"
                                />
                            </div>

                            <div>
                                <label htmlFor="phone" className="block text-sm font-medium text-gray-700 mb-1">
                                    Phone Number
                                </label>
                                <input
                                    type="tel"
                                    id="phone"
                                    className="w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-red-500 focus:border-transparent"
                                    placeholder="Enter your phone number"
                                />
                            </div>

                            <div>
                                <label htmlFor="message" className="block text-sm font-medium text-gray-700 mb-1">
                                    Message
                                </label>
                                <textarea
                                    id="message"
                                    rows={4}
                                    className="w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-red-500 focus:border-transparent"
                                    placeholder="Enter your message"
                                ></textarea>
                            </div>

                            <button
                                type="submit"
                                className="w-full bg-red-600 hover:bg-red-700 text-white py-2 px-4 rounded-md font-medium transition duration-300"
                            >
                                Send Message
                            </button>
                        </form>
                    </div>
                </div>
            </div>
        </section>
    )
}

export default Contact
