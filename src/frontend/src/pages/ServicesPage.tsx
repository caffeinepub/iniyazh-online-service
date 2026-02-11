import ServiceCard from '@/components/ServiceCard';
import { services } from '@/content/services';

export default function ServicesPage() {
  return (
    <div className="flex flex-col">
      {/* Page Hero */}
      <section className="bg-gradient-to-r from-blue-700 to-blue-600 text-white py-16 md:py-20">
        <div className="container mx-auto px-4">
          <div className="max-w-3xl mx-auto text-center">
            <h1 className="text-4xl md:text-5xl font-bold mb-4">Our Services</h1>
            <p className="text-lg md:text-xl text-blue-50">
              Comprehensive digital and government services under one roof
            </p>
          </div>
        </div>
      </section>

      {/* Services Grid */}
      <section className="py-16 md:py-20 bg-white">
        <div className="container mx-auto px-4">
          <div className="max-w-6xl mx-auto">
            <div className="text-center mb-12">
              <p className="text-lg text-gray-600 max-w-3xl mx-auto">
                We offer a wide range of services to meet all your digital and government service needs. 
                Our trained VLE is here to assist you with professional and efficient service delivery.
              </p>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              {services.map((service, index) => (
                <ServiceCard key={index} service={service} />
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Additional Info */}
      <section className="py-12 bg-blue-50">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto text-center">
            <h2 className="text-2xl md:text-3xl font-bold text-blue-900 mb-4">
              Don't See What You're Looking For?
            </h2>
            <p className="text-lg text-gray-700 mb-6">
              We offer many more services beyond what's listed here. Contact us to learn about additional 
              services we can provide for you.
            </p>
          </div>
        </div>
      </section>
    </div>
  );
}
