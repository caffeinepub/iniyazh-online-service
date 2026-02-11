import { businessInfo } from '@/content/business';

export default function MapEmbed() {
  const mapQuery = encodeURIComponent(businessInfo.address);
  const mapSrc = `https://www.google.com/maps?q=${mapQuery}&output=embed`;

  return (
    <div className="w-full rounded-lg overflow-hidden border-2 border-blue-100 shadow-lg">
      <iframe
        src={mapSrc}
        width="100%"
        height="450"
        style={{ border: 0 }}
        allowFullScreen
        loading="lazy"
        referrerPolicy="no-referrer-when-downgrade"
        title="Iniyazh Online Service Location"
        className="w-full"
      />
    </div>
  );
}
