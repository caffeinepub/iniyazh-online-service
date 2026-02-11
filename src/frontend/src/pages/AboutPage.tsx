import { Card, CardContent } from '@/components/ui/card';
import { Award, Target, Heart } from 'lucide-react';

export default function AboutPage() {
  return (
    <div className="flex flex-col">
      {/* Page Hero */}
      <section className="bg-gradient-to-r from-blue-700 to-blue-600 text-white py-16 md:py-20">
        <div className="container mx-auto px-4">
          <div className="max-w-3xl mx-auto text-center">
            <h1 className="text-4xl md:text-5xl font-bold mb-4">About Us</h1>
            <p className="text-lg md:text-xl text-blue-50">
              Your trusted partner for government and digital services
            </p>
          </div>
        </div>
      </section>

      {/* About Content */}
      <section className="py-16 md:py-20 bg-white">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            <div className="mb-12">
              <h2 className="text-3xl md:text-4xl font-bold text-blue-900 mb-6">Welcome to Iniyazh Online Service</h2>
              <div className="prose prose-lg max-w-none text-gray-700 space-y-4">
                <p>
                  Iniyazh Online Service is a trusted Common Service Centre (CSC) located in Narasingamangalam, 
                  Valangaiman Taluk, Thiruvarur District. We are dedicated to providing accessible, reliable, 
                  and efficient digital and government services to our community.
                </p>
                <p>
                  As an authorized CSC, we bridge the gap between citizens and government services, making it 
                  easier for people to access essential services without the hassle of traveling long distances 
                  or navigating complex procedures.
                </p>
                <p>
                  Under the leadership of our Village Level Entrepreneur (VLE), <strong>Dinesh Dhashinamoorthy</strong>, 
                  we are committed to delivering professional service with a personal touch. Our goal is to empower 
                  our community through digital literacy and easy access to government schemes and services.
                </p>
              </div>
            </div>

            {/* Values Cards */}
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-12">
              <Card className="border-2 border-blue-100">
                <CardContent className="pt-6">
                  <div className="w-12 h-12 bg-orange-100 rounded-lg flex items-center justify-center mb-4">
                    <Award className="w-6 h-6 text-orange-600" />
                  </div>
                  <h3 className="text-xl font-bold text-blue-900 mb-2">Excellence</h3>
                  <p className="text-gray-600">
                    We strive for excellence in every service we provide, ensuring quality and accuracy
                  </p>
                </CardContent>
              </Card>

              <Card className="border-2 border-blue-100">
                <CardContent className="pt-6">
                  <div className="w-12 h-12 bg-orange-100 rounded-lg flex items-center justify-center mb-4">
                    <Target className="w-6 h-6 text-orange-600" />
                  </div>
                  <h3 className="text-xl font-bold text-blue-900 mb-2">Reliability</h3>
                  <p className="text-gray-600">
                    Count on us for consistent, dependable service delivery every single time
                  </p>
                </CardContent>
              </Card>

              <Card className="border-2 border-blue-100">
                <CardContent className="pt-6">
                  <div className="w-12 h-12 bg-orange-100 rounded-lg flex items-center justify-center mb-4">
                    <Heart className="w-6 h-6 text-orange-600" />
                  </div>
                  <h3 className="text-xl font-bold text-blue-900 mb-2">Community First</h3>
                  <p className="text-gray-600">
                    We put our community's needs first, serving with dedication and care
                  </p>
                </CardContent>
              </Card>
            </div>

            {/* VLE Info */}
            <div className="bg-blue-50 rounded-lg p-8 border-2 border-blue-100">
              <h3 className="text-2xl font-bold text-blue-900 mb-4">Meet Our VLE</h3>
              <div className="space-y-2 text-gray-700">
                <p><strong className="text-blue-900">Name:</strong> Dinesh Dhashinamoorthy</p>
                <p><strong className="text-blue-900">Role:</strong> Village Level Entrepreneur (VLE)</p>
                <p>
                  With extensive training and certification, our VLE is equipped to handle a wide range of 
                  government and digital services, ensuring that you receive expert assistance for all your needs.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
