import ContactForm from '@/components/ContactForm';
import MapEmbed from '@/components/MapEmbed';
import { businessInfo } from '@/content/business';
import { Card, CardContent } from '@/components/ui/card';
import { Phone, Mail, MapPin, Clock, FileText } from 'lucide-react';

export default function ContactPage() {
  return (
    <div className="flex flex-col">
      {/* Page Hero */}
      <section className="bg-gradient-to-r from-blue-700 to-blue-600 text-white py-16 md:py-20">
        <div className="container mx-auto px-4">
          <div className="max-w-3xl mx-auto text-center">
            <h1 className="text-4xl md:text-5xl font-bold mb-4">Contact Us</h1>
            <p className="text-lg md:text-xl text-blue-50">
              Get in touch with us for any queries or service requests
            </p>
          </div>
        </div>
      </section>

      {/* Contact Content */}
      <section className="py-16 md:py-20 bg-white">
        <div className="container mx-auto px-4">
          <div className="max-w-6xl mx-auto">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
              {/* Contact Information */}
              <div>
                <h2 className="text-3xl font-bold text-blue-900 mb-6">Get in Touch</h2>
                <p className="text-gray-600 mb-8">
                  We're here to help! Reach out to us through any of the following channels, 
                  or fill out the contact form and we'll get back to you as soon as possible.
                </p>

                <div className="space-y-6">
                  <Card className="border-2 border-blue-100">
                    <CardContent className="pt-6">
                      <div className="flex items-start gap-4">
                        <div className="w-10 h-10 bg-orange-100 rounded-lg flex items-center justify-center flex-shrink-0">
                          <Phone className="w-5 h-5 text-orange-600" />
                        </div>
                        <div>
                          <h3 className="font-semibold text-blue-900 mb-1">Phone</h3>
                          <a href={`tel:${businessInfo.phone}`} className="text-gray-700 hover:text-orange-600">
                            {businessInfo.phone}
                          </a>
                        </div>
                      </div>
                    </CardContent>
                  </Card>

                  <Card className="border-2 border-blue-100">
                    <CardContent className="pt-6">
                      <div className="flex items-start gap-4">
                        <div className="w-10 h-10 bg-orange-100 rounded-lg flex items-center justify-center flex-shrink-0">
                          <MapPin className="w-5 h-5 text-orange-600" />
                        </div>
                        <div>
                          <h3 className="font-semibold text-blue-900 mb-1">Address</h3>
                          <p className="text-gray-700">{businessInfo.address}</p>
                        </div>
                      </div>
                    </CardContent>
                  </Card>

                  <Card className="border-2 border-blue-100">
                    <CardContent className="pt-6">
                      <div className="flex items-start gap-4">
                        <div className="w-10 h-10 bg-orange-100 rounded-lg flex items-center justify-center flex-shrink-0">
                          <Clock className="w-5 h-5 text-orange-600" />
                        </div>
                        <div>
                          <h3 className="font-semibold text-blue-900 mb-1">Business Hours</h3>
                          <p className="text-gray-700">Monday - Saturday: 9:00 AM - 6:00 PM</p>
                          <p className="text-gray-700">Sunday: Closed</p>
                        </div>
                      </div>
                    </CardContent>
                  </Card>

                  <Card className="border-2 border-blue-100 bg-blue-50">
                    <CardContent className="pt-6">
                      <div className="flex items-start gap-4">
                        <div className="w-10 h-10 bg-orange-100 rounded-lg flex items-center justify-center flex-shrink-0">
                          <Mail className="w-5 h-5 text-orange-600" />
                        </div>
                        <div>
                          <h3 className="font-semibold text-blue-900 mb-1">VLE</h3>
                          <p className="text-gray-700">{businessInfo.owner}</p>
                          <p className="text-sm text-gray-600 mt-1">Village Level Entrepreneur</p>
                        </div>
                      </div>
                    </CardContent>
                  </Card>

                  <Card className="border-2 border-blue-100">
                    <CardContent className="pt-6">
                      <div className="flex items-start gap-4">
                        <div className="w-10 h-10 bg-orange-100 rounded-lg flex items-center justify-center flex-shrink-0">
                          <FileText className="w-5 h-5 text-orange-600" />
                        </div>
                        <div>
                          <h3 className="font-semibold text-blue-900 mb-1">CSC ID</h3>
                          <p className="text-gray-700">{businessInfo.cscId}</p>
                        </div>
                      </div>
                    </CardContent>
                  </Card>
                </div>
              </div>

              {/* Contact Form */}
              <div>
                <h2 className="text-3xl font-bold text-blue-900 mb-6">Send Us a Message</h2>
                <ContactForm />
              </div>
            </div>

            {/* Map Section */}
            <div className="mt-16">
              <h2 className="text-3xl font-bold text-blue-900 mb-6 text-center">Find Us Here</h2>
              <MapEmbed />
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
