import {
  FileText,
  CreditCard,
  Smartphone,
  Zap,
  Printer,
  GraduationCap,
  Briefcase,
  Home,
  Users,
  Shield,
  Landmark,
  Receipt,
} from 'lucide-react';

interface ServiceIconProps {
  icon: string;
  className?: string;
}

export default function ServiceIcon({ icon, className = 'w-6 h-6' }: ServiceIconProps) {
  const icons: Record<string, React.ComponentType<{ className?: string }>> = {
    'file-text': FileText,
    'credit-card': CreditCard,
    smartphone: Smartphone,
    zap: Zap,
    printer: Printer,
    'graduation-cap': GraduationCap,
    briefcase: Briefcase,
    home: Home,
    users: Users,
    shield: Shield,
    landmark: Landmark,
    receipt: Receipt,
  };

  const IconComponent = icons[icon] || FileText;

  return <IconComponent className={className} />;
}
