export interface Service {
  title: string;
  description: string;
  icon: string;
}

export const services: Service[] = [
  {
    title: 'Aadhaar Services',
    description: 'New Aadhaar enrollment, updates, corrections, and mobile number linking',
    icon: 'credit-card',
  },
  {
    title: 'PAN Card Services',
    description: 'New PAN card application, corrections, and PAN-Aadhaar linking',
    icon: 'file-text',
  },
  {
    title: 'Certificates',
    description: 'Birth, death, income, community, and other government certificates',
    icon: 'file-text',
  },
  {
    title: 'Bill Payments',
    description: 'Electricity, water, mobile recharge, and other utility bill payments',
    icon: 'receipt',
  },
  {
    title: 'Banking Services',
    description: 'Account opening assistance, passbook printing, and banking support',
    icon: 'landmark',
  },
  {
    title: 'Insurance Services',
    description: 'Life insurance, health insurance, and crop insurance applications',
    icon: 'shield',
  },
  {
    title: 'Pension Services',
    description: 'Old age pension, widow pension, and disability pension applications',
    icon: 'users',
  },
  {
    title: 'Educational Services',
    description: 'Scholarship applications, exam registrations, and result downloads',
    icon: 'graduation-cap',
  },
  {
    title: 'Employment Services',
    description: 'Job portal registrations, employment exchange, and skill development',
    icon: 'briefcase',
  },
  {
    title: 'Property Services',
    description: 'Land records, property tax payments, and encumbrance certificates',
    icon: 'home',
  },
  {
    title: 'Digital Services',
    description: 'Email creation, form filling, document typing, and printing services',
    icon: 'printer',
  },
  {
    title: 'Government Schemes',
    description: 'Application assistance for various central and state government schemes',
    icon: 'zap',
  },
];
