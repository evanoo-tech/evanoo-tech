export const websiteSchema = {
  "@context": "https://schema.org",
  "@type": "WebSite",
  name: "Evanoo",
  url: "https://evanoo.in/",
  potentialAction: {
    "@type": "SearchAction",
    target: "https://evanoo.in/search?q={search_term_string}",
    "query-input": "required name=search_term_string",
  },
};
