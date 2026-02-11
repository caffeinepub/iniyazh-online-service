import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import ServiceIcon from './ServiceIcon';
import type { Service } from '@/content/services';

interface ServiceCardProps {
  service: Service;
}

export default function ServiceCard({ service }: ServiceCardProps) {
  return (
    <Card className="border-2 border-blue-100 hover:border-orange-300 hover:shadow-lg transition-all duration-300">
      <CardHeader>
        <div className="w-14 h-14 bg-gradient-to-br from-blue-100 to-blue-50 rounded-xl flex items-center justify-center mb-4">
          <ServiceIcon icon={service.icon} className="w-7 h-7 text-blue-700" />
        </div>
        <CardTitle className="text-blue-900">{service.title}</CardTitle>
      </CardHeader>
      <CardContent>
        <CardDescription className="text-gray-600">{service.description}</CardDescription>
      </CardContent>
    </Card>
  );
}
