/**
 * Centralized contact information configuration
 * Update these values in one place to keep them consistent across the entire site
 */

export const contactInfo = {
  phone: {
    display: "(612) 913-6594",
    href: "tel:612-913-6594",
  },
  email: {
    display: "shop@secondchance-collision.com",
    href: "mailto:shop@secondchance-collision.com",
  },
  address: {
    street: "416 Lilac St",
    city: "Circle Pines",
    state: "MN",
    zip: "55014",
    fullAddress: "416 Lilac St, Circle Pines, MN 55014",
    mapsUrl: "https://maps.google.com/?q=416+Lilac+St+Circle+Pines+MN+55014",
  },
  hours: {
    weekday: "Mon-Fri: 8AM-5PM",
    saturday: "Sat: 9AM-2PM",
    fullDisplay: "Mon-Fri: 8AM-5PM, Sat: 9AM-2PM",
  },
  location: {
    city: "Circle Pines, MN",
    service_area: "Serving North Metro",
  },
} as const;
