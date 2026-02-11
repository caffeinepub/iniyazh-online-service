import { Link } from '@tanstack/react-router';
import { businessInfo } from '@/content/business';
import { Phone, MapPin, Mail, FileText } from 'lucide-react';
import { SiWhatsapp } from 'react-icons/si';

export default function SiteFooter() {
  const currentYear = new Date().getFullYear();
  const appIdentifier = encodeURIComponent(
    typeof window !== 'undefined' ? window.location.hostname : 'iniyazh-online-service'
  );

  return (
    <footer className="bg-gradient-to-br from-blue-900 via-blue-800 to-blue-900 text-white">
      <div className="container mx-auto px-4 py-12">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 mb-8">
          {/* About Section */}
          <div>
            <img 
              src="/assets/generated/logo.dim_512x512.png" 
              alt="Iniyazh Online Service" 
              className="h-16 w-auto mb-4"
            />
            <h3 className="text-xl font-bold mb-3">{businessInfo.name}</h3>
            <p className="text-blue-100 text-sm leading-relaxed">
              Your trusted Common Service Centre for all government and digital services.
            </p>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="text-lg font-semibold mb-4">Quick Links</h4>
            <ul className="space-y-2">
              <li>
                <Link to="/" className="text-blue-100 hover:text-orange-400 transition-colors">
                  Home
                </Link>
              </li>
              <li>
                <Link to="/about" className="text-blue-100 hover:text-orange-400 transition-colors">
                  About Us
                </Link>
              </li>
              <li>
                <Link to="/services" className="text-blue-100 hover:text-orange-400 transition-colors">
                  Services
                </Link>
              </li>
              <li>
                <Link to="/contact" className="text-blue-100 hover:text-orange-400 transition-colors">
                  Contact
                </Link>
              </li>
            </ul>
          </div>

          {/* Contact Info */}
          <div>
            <h4 className="text-lg font-semibold mb-4">Contact Info</h4>
            <ul className="space-y-3 text-sm">
              <li className="flex items-start gap-2">
                <Phone className="w-4 h-4 mt-0.5 flex-shrink-0 text-orange-400" />
                <a href={`tel:${businessInfo.phone}`} className="text-blue-100 hover:text-orange-400 transition-colors">
                  {businessInfo.phone}
                </a>
              </li>
              <li className="flex items-start gap-2">
                <MapPin className="w-4 h-4 mt-0.5 flex-shrink-0 text-orange-400" />
                <span className="text-blue-100">{businessInfo.address}</span>
              </li>
              <li className="flex items-start gap-2">
                <Mail className="w-4 h-4 mt-0.5 flex-shrink-0 text-orange-400" />
                <span className="text-blue-100">VLE: {businessInfo.owner}</span>
              </li>
              <li className="flex items-start gap-2">
                <FileText className="w-4 h-4 mt-0.5 flex-shrink-0 text-orange-400" />
                <span className="text-blue-100">CSC ID: {businessInfo.cscId}</span>
              </li>
            </ul>
          </div>

          {/* Connect */}
          <div>
            <h4 className="text-lg font-semibold mb-4">Connect With Us</h4>
            <p className="text-blue-100 text-sm mb-4">
              Reach out to us on WhatsApp for quick assistance
            </p>
            <a
              href={`https://wa.me/${businessInfo.whatsappNumber}`}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 bg-green-600 hover:bg-green-700 text-white px-4 py-2 rounded-lg transition-colors"
            >
              <SiWhatsapp className="w-5 h-5" />
              <span className="font-medium">WhatsApp Us</span>
            </a>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="border-t border-blue-700 pt-6 mt-6">
          <div className="flex flex-col md:flex-row justify-between items-center gap-4 text-sm text-blue-100">
            <p>© {currentYear} {businessInfo.name}. All rights reserved.</p>
            <p>
              Built with love using{' '}
              <a
                href={`https://caffeine.ai/?utm_source=Caffeine-footer&utm_medium=referral&utm_content=${appIdentifier}`}
                target="_blank"
                rel="noopener noreferrer"
                className="text-orange-400 hover:text-orange-300 transition-colors font-medium"
              >
                caffeine.ai
              </a>
            </p>
          </div>
        </div>
      </div>
    </footer>
  );
}
