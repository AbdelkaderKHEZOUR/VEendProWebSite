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
            <span className="text-xl font-bold text-gray-900">Vendpro</span>
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
      <section className="relative h-96 bg-gradient-to-r from-gray-800 to-gray-600">
        <div className="absolute inset-0 bg-black bg-opacity-40"></div>
        <div className="relative container mx-auto px-4 h-full flex items-center">
          <div className="text-white max-w-2xl">
            <h1 className="text-4xl md:text-5xl font-bold mb-4">Elevate Your Workplace with Vendpro</h1>
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
            <h2 className="text-3xl font-bold text-gray-900 mb-4">Why Vendpro?</h2>
            <p className="text-gray-600 max-w-2xl mx-auto">
              Vendpro offers a comprehensive vending solution tailored to your business needs, ensuring satisfaction and
              convenience with a modern approach.
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
            <Card className="overflow-hidden">
              <CardContent className="p-0">
                <div className="h-48 bg-gradient-to-br from-green-100 to-green-200 flex items-center justify-center">
                  <div className="w-24 h-32 bg-gray-800 rounded-lg flex flex-col items-center justify-center">
                    <div className="grid grid-cols-3 gap-1 mb-2">
                      {[...Array(9)].map((_, i) => (
                        <div key={i} className="w-2 h-2 bg-red-400 rounded-sm"></div>
                      ))}
                    </div>
                    <div className="w-16 h-4 bg-gray-600 rounded"></div>
                  </div>
                </div>
                <div className="p-6">
                  <h3 className="text-xl font-semibold mb-2">Snack Vending Machines</h3>
                  <p className="text-gray-600">
                    A wide variety of chips, cookies, candy and other snacks from leading brands.
                  </p>
                </div>
              </CardContent>
            </Card>

            <Card className="overflow-hidden">
              <CardContent className="p-0">
                <div className="h-48 bg-gradient-to-br from-blue-100 to-blue-200 flex items-center justify-center">
                  <div className="w-24 h-32 bg-gray-800 rounded-lg flex flex-col items-center justify-center">
                    <div className="grid grid-cols-2 gap-1 mb-2">
                      {[...Array(8)].map((_, i) => (
                        <div key={i} className="w-3 h-4 bg-blue-400 rounded-sm"></div>
                      ))}
                    </div>
                    <div className="w-16 h-4 bg-gray-600 rounded"></div>
                  </div>
                </div>
                <div className="p-6">
                  <h3 className="text-xl font-semibold mb-2">Beverage Vending Machines</h3>
                  <p className="text-gray-600">
                    Refreshing cold beverages, including coffee, juice, soda, and energy drinks.
                  </p>
                </div>
              </CardContent>
            </Card>

            <Card className="overflow-hidden">
              <CardContent className="p-0">
                <div className="h-48 bg-gradient-to-br from-emerald-100 to-emerald-200 flex items-center justify-center">
                  <div className="w-24 h-32 bg-gray-800 rounded-lg flex flex-col items-center justify-center">
                    <div className="grid grid-cols-3 gap-1 mb-2">
                      {[...Array(9)].map((_, i) => (
                        <div key={i} className="w-2 h-2 bg-green-400 rounded-sm"></div>
                      ))}
                    </div>
                    <div className="w-16 h-4 bg-gray-600 rounded"></div>
                  </div>
                </div>
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
              From installation to maintenance, Vendpro handles every aspect of your vending needs with professionalism
              and care.
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
              <div className="w-full h-32 bg-gradient-to-br from-blue-100 to-blue-200 rounded-lg mb-4 flex items-center justify-center">
                <div className="w-16 h-20 bg-gray-300 rounded flex flex-col">
                  <div className="flex-1 bg-blue-400 rounded-t"></div>
                  <div className="h-4 bg-gray-600 rounded-b flex items-center justify-center">
                    <div className="w-8 h-1 bg-gray-400 rounded"></div>
                  </div>
                </div>
              </div>
              <h3 className="text-lg font-semibold mb-2">Offices</h3>
              <p className="text-gray-600 text-sm">
                Corporate offices and workplaces seeking convenient refreshment solutions.
              </p>
            </div>
            <div className="text-center">
              <div className="w-full h-32 bg-gradient-to-br from-red-100 to-red-200 rounded-lg mb-4 flex items-center justify-center">
                <div className="w-20 h-16 bg-gray-700 rounded-lg flex items-center justify-center">
                  <div className="w-12 h-8 bg-red-400 rounded"></div>
                </div>
              </div>
              <h3 className="text-lg font-semibold mb-2">Gyms</h3>
              <p className="text-gray-600 text-sm">
                Fitness centers and recreational facilities providing post-workout refreshments.
              </p>
            </div>
            <div className="text-center">
              <div className="w-full h-32 bg-gradient-to-br from-green-100 to-green-200 rounded-lg mb-4 flex items-center justify-center">
                <div className="w-16 h-20 bg-white rounded border-2 border-gray-300 flex flex-col">
                  <div className="flex-1 bg-green-100"></div>
                  <div className="h-6 bg-gray-100 border-t border-gray-300"></div>
                </div>
              </div>
              <h3 className="text-lg font-semibold mb-2">Hospitals</h3>
              <p className="text-gray-600 text-sm">
                Healthcare facilities and medical staff requiring 24/7 access to refreshments.
              </p>
            </div>
            <div className="text-center">
              <div className="w-full h-32 bg-gradient-to-br from-yellow-100 to-yellow-200 rounded-lg mb-4 flex items-center justify-center">
                <div className="w-20 h-16 bg-yellow-600 rounded-lg flex items-center justify-center">
                  <div className="w-12 h-8 bg-yellow-300 rounded"></div>
                </div>
              </div>
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
              Vendpro is a leading vending machine company committed to delivering exceptional service and high-quality
              products. With years of industry experience, we understand the unique needs of diverse businesses and
              strive to exceed expectations by offering reliable, convenient, and customized vending experiences.
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
              <Input placeholder="Your Name" className="w-full" />
              <Input placeholder="Your Email" type="email" className="w-full" />
              <Input placeholder="Your Company (Optional)" className="w-full" />
              <Textarea placeholder="Your Message" rows={6} className="w-full" />
              <Button className="w-full bg-blue-600 hover:bg-blue-700 text-white py-3">Send Message</Button>
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
              <span className="text-xl font-bold">Vendpro</span>
            </div>
            <div className="flex space-x-6 text-sm">
              <a href="#" className="hover:text-blue-400 transition-colors">
                Privacy Policy
              </a>
              <a href="#" className="hover:text-blue-400 transition-colors">
                Terms of Service
              </a>
            </div>
          </div>
          <div className="mt-4 pt-4 border-t border-gray-800 text-center text-sm text-gray-400">
            © 2024 Vendpro. All rights reserved.
          </div>
        </div>
      </footer>
    </div>
  )
}
