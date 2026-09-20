export const professionalServiceSchema = {
  "@context": "https://schema.org",
  "@type": "ProfessionalService",
  name: "Evanoo",
  image: " https://evanoo.in/assets/logo-mTTD8CR2.png ",
  url: "https://evanoo.in/",
  telephone: "+918083506050",
  priceRange: "₹₹",
  address: {
    "@type": "PostalAddress",
    streetAddress: "Salt Lake Sector-V",
    addressLocality: "Kolkata",
    addressRegion: "WB",
    postalCode: "700091",
    addressCountry: "IN",
  },
  geo: {
    "@type": "GeoCoordinates",
    latitude: "22.57816740",
    longitude: "88.43556720",
  },
  openingHoursSpecification: {
    "@type": "OpeningHoursSpecification",
    dayOfWeek: [
      "Monday",
      "Tuesday",
      "Wednesday",
      "Thursday",
      "Friday",
      "Saturday",
    ],
    opens: "10:00",
    closes: "19:00",
  },
  sameAs: [
    "https://www.facebook.com/[your-page]",
    "https://www.instagram.com/[your-page]",
  ],
};
