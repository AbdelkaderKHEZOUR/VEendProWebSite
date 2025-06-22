import Image from "next/image"
import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"
import { Input } from "@/components/ui/input"
import { Textarea } from "@/components/ui/textarea"
import { Shield, Clock, DollarSign, Settings, Wrench, Cog } from "lucide-react"

export default function VendProWebsite() {
  return (
    <div className="min-h-screen bg-white">
      {/* Header */}
      <header className="bg-white shadow-sm">
        <div className="container mx-auto px-4 py-4 flex items-center justify-between">
          <div className="flex items-center space-x-2">
            <div className="w-6 h-6 bg-blue-600 rounded"></div>
            <span className="text-xl font-bold text-gray-900">VendPro Services</span>
          </div>
          <nav className="hidden md:flex items-center space-x-8">
            <a href="#" className="text-gray-700 hover:text-blue-600">
              Home
            </a>
            <a href="#" className="text-gray-700 hover:text-blue-600">
              Services
            </a>
            <a href="#" className="text-gray-700 hover:text-blue-600">
              Products
            </a>
            <a href="#" className="text-gray-700 hover:text-blue-600">
              Industries
            </a>
            <a href="#" className="text-gray-700 hover:text-blue-600">
              About Us
            </a>
            <a href="#" className="text-gray-700 hover:text-blue-600">
              Contact
            </a>
          </nav>
          <Button className="bg-blue-600 hover:bg-blue-700">Get a Quote</Button>
        </div>
      </header>

      {/* Hero Section */}
      <section
        className="relative h-96 bg-cover bg-center"
        style={{ backgroundImage: "url(/placeholder.svg?height=400&width=800)" }}
      >
        <div className="absolute inset-0 bg-black bg-opacity-50"></div>
        <div className="relative container mx-auto px-4 h-full flex items-center">
          <div className="text-white max-w-2xl">
            <h1 className="text-4xl md:text-5xl font-bold mb-4">Elevate Your Workplace with VendPro Services</h1>
            <p className="text-lg mb-6">
              Streamline your refreshment needs with convenient access to snacks and beverages right at your
              worksite—the art of quality and convenience.
            </p>
            <Button className="bg-blue-600 hover:bg-blue-700 text-white px-8 py-3">Get a Free Quote</Button>
          </div>
        </div>
      </section>

      {/* Why VendPro Services */}
      <section className="py-16 bg-gray-50">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-gray-900 mb-4">Why VendPro Services?</h2>
            <p className="text-gray-600 max-w-2xl mx-auto">
              VendPro Services offers a comprehensive vending solution tailored to your business needs, ensuring
              satisfaction and convenience with a modern approach.
            </p>
          </div>
          <div className="grid md:grid-cols-3 gap-8">
            <div className="text-center">
              <div className="w-16 h-16 bg-blue-100 rounded-full flex items-center justify-center mx-auto mb-4">
                <Shield className="w-8 h-8 text-blue-600" />
              </div>
              <h3 className="text-xl font-semibold mb-2">Reliable Service</h3>
              <p className="text-gray-600">
                Our team ensures your vending solutions are always stocked and fully operational, ensuring hassle-free
                operation.
              </p>
            </div>
            <div className="text-center">
              <div className="w-16 h-16 bg-blue-100 rounded-full flex items-center justify-center mx-auto mb-4">
                <Clock className="w-8 h-8 text-blue-600" />
              </div>
              <h3 className="text-xl font-semibold mb-2">24/7 Support</h3>
              <p className="text-gray-600">
                We provide round-the-clock support services and instant problem resolution to keep everything running
                smoothly.
              </p>
            </div>
            <div className="text-center">
              <div className="w-16 h-16 bg-blue-100 rounded-full flex items-center justify-center mx-auto mb-4">
                <DollarSign className="w-8 h-8 text-blue-600" />
              </div>
              <h3 className="text-xl font-semibold mb-2">Cost-Effective Solutions</h3>
              <p className="text-gray-600">
                Our flexible plans fit your budget while maximizing value, offering exceptional return on investment
                within your organization.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Our Products */}
      <section className="py-16">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl font-bold text-center text-gray-900 mb-12">Our Products</h2>
          <div className="grid md:grid-cols-3 gap-8">
            <Card>
              <CardContent className="p-0">
                <Image
                  src="/placeholder.svg?height=200&width=300"
                  alt="Snack Vending Machine"
                  width={300}
                  height={200}
                  className="w-full h-48 object-cover rounded-t-lg"
                />
                <div className="p-6">
                  <h3 className="text-xl font-semibold mb-2">Snack Vending Machines</h3>
                  <p className="text-gray-600">
                    A wide variety of chips, cookies, candy and other snacks from leading brands.
                  </p>
                </div>
              </CardContent>
            </Card>
            <Card>
              <CardContent className="p-0">
                <Image
                  src="/placeholder.svg?height=200&width=300"
                  alt="Beverage Vending Machine"
                  width={300}
                  height={200}
                  className="w-full h-48 object-cover rounded-t-lg"
                />
                <div className="p-6">
                  <h3 className="text-xl font-semibold mb-2">Beverage Vending Machines</h3>
                  <p className="text-gray-600">
                    Refreshing cold beverages, including coffee, juice, soda, and energy drinks.
                  </p>
                </div>
              </CardContent>
            </Card>
            <Card>
              <CardContent className="p-0">
                <Image
                  src="/placeholder.svg?height=200&width=300"
                  alt="Healthy Vending Machine"
                  width={300}
                  height={200}
                  className="w-full h-48 object-cover rounded-t-lg"
                />
                <div className="p-6">
                  <h3 className="text-xl font-semibold mb-2">Healthy Vending Options</h3>
                  <p className="text-gray-600">
                    Nutritious snacks and beverages alternatives for the health-conscious workplace.
                  </p>
                </div>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Our Services */}
      <section className="py-16 bg-gray-50">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-gray-900 mb-4">Our Services</h2>
            <p className="text-gray-600 max-w-2xl mx-auto">
              From installation to maintenance, VendPro Services handles every aspect of your vending needs with
              professionalism and care.
            </p>
          </div>
          <div className="grid md:grid-cols-3 gap-8">
            <div className="text-center">
              <div className="w-16 h-16 bg-blue-100 rounded-full flex items-center justify-center mx-auto mb-4">
                <Settings className="w-8 h-8 text-blue-600" />
              </div>
              <h3 className="text-xl font-semibold mb-2">Installation & Setup</h3>
              <p className="text-gray-600">
                Professional installation and setup services to properly install vending machines.
              </p>
            </div>
            <div className="text-center">
              <div className="w-16 h-16 bg-blue-100 rounded-full flex items-center justify-center mx-auto mb-4">
                <Wrench className="w-8 h-8 text-blue-600" />
              </div>
              <h3 className="text-xl font-semibold mb-2">Maintenance & Restocking</h3>
              <p className="text-gray-600">
                Regular maintenance and restocking services to ensure optimal performance and availability.
              </p>
            </div>
            <div className="text-center">
              <div className="w-16 h-16 bg-blue-100 rounded-full flex items-center justify-center mx-auto mb-4">
                <Cog className="w-8 h-8 text-blue-600" />
              </div>
              <h3 className="text-xl font-semibold mb-2">Customized Solutions</h3>
              <p className="text-gray-600">
                Tailored vending solutions designed to meet your specific business requirements.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Industries We Serve */}
      <section className="py-16">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl font-bold text-center text-gray-900 mb-12">Industries We Serve</h2>
          <div className="grid md:grid-cols-4 gap-8">
            <div className="text-center">
              <Image
                src="/placeholder.svg?height=150&width=200"
                alt="Offices"
                width={200}
                height={150}
                className="w-full h-32 object-cover rounded-lg mb-4"
              />
              <h3 className="text-lg font-semibold mb-2">Offices</h3>
              <p className="text-gray-600 text-sm">
                Corporate offices and workplaces seeking convenient refreshment solutions.
              </p>
            </div>
            <div className="text-center">
              <Image
                src="/placeholder.svg?height=150&width=200"
                alt="Gyms"
                width={200}
                height={150}
                className="w-full h-32 object-cover rounded-lg mb-4"
              />
              <h3 className="text-lg font-semibold mb-2">Gyms</h3>
              <p className="text-gray-600 text-sm">
                Fitness centers and recreational facilities providing post-workout refreshments.
              </p>
            </div>
            <div className="text-center">
              <Image
                src="/placeholder.svg?height=150&width=200"
                alt="Hospitals"
                width={200}
                height={150}
                className="w-full h-32 object-cover rounded-lg mb-4"
              />
              <h3 className="text-lg font-semibold mb-2">Hospitals</h3>
              <p className="text-gray-600 text-sm">
                Healthcare facilities and medical staff requiring 24/7 access to refreshments.
              </p>
            </div>
            <div className="text-center">
              <Image
                src="/placeholder.svg?height=150&width=200"
                alt="Schools"
                width={200}
                height={150}
                className="w-full h-32 object-cover rounded-lg mb-4"
              />
              <h3 className="text-lg font-semibold mb-2">Schools</h3>
              <p className="text-gray-600 text-sm">
                Educational institutions and staff with healthy snack options available.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* About Us */}
      <section className="py-16 bg-gray-50">
        <div className="container mx-auto px-4">
          <div className="max-w-3xl mx-auto text-center">
            <h2 className="text-3xl font-bold text-gray-900 mb-6">About Us</h2>
            <p className="text-gray-600 leading-relaxed">
              VendPro Services is a leading vending machine company committed to delivering exceptional service and
              high-quality products. With years of industry experience, we understand the unique needs of diverse
              businesses and strive to exceed expectations by offering reliable, convenient, and customized vending
              experiences.
            </p>
          </div>
        </div>
      </section>

      {/* Contact Us */}
      <section className="py-16">
        <div className="container mx-auto px-4">
          <div className="max-w-2xl mx-auto">
            <h2 className="text-3xl font-bold text-center text-gray-900 mb-8">Contact Us</h2>
            <form className="space-y-6">
              <Input placeholder="Your Name" />
              <Input placeholder="Your Email" type="email" />
              <Input placeholder="Your Company (Optional)" />
              <Textarea placeholder="Your Message" rows={6} />
              <Button className="w-full bg-blue-600 hover:bg-blue-700">Send Message</Button>
            </form>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-gray-900 text-white py-8">
        <div className="container mx-auto px-4">
          <div className="flex flex-col md:flex-row justify-between items-center">
            <div className="flex items-center space-x-2 mb-4 md:mb-0">
              <div className="w-6 h-6 bg-blue-600 rounded"></div>
              <span className="text-xl font-bold">VendPro Services</span>
            </div>
            <div className="flex space-x-6 text-sm">
              <a href="#" className="hover:text-blue-400">
                Privacy Policy
              </a>
              <a href="#" className="hover:text-blue-400">
                Terms of Service
              </a>
            </div>
          </div>
          <div className="mt-4 pt-4 border-t border-gray-800 text-center text-sm text-gray-400">
            © 2024 VendPro Services. All rights reserved.
          </div>
        </div>
      </footer>
    </div>
  )
}
