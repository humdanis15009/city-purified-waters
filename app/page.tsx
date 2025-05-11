import Hero from "@/components/Hero"
import About from "@/components/About"
import Products from "@/components/Products"
import ProductDetails from "@/components/ProductDetails"
import Brands from "@/components/Brands"
import Contact from "@/components/Contact"
import Footer from "@/components/Footer"

export default function Home() {
  return (
    <main className="min-h-screen">
      <Hero />
      <About />
      <Products />
      <ProductDetails />
      <Brands />
      <Contact />
      <Footer />
    </main>
  )
}
