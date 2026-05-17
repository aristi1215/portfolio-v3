export interface Metric {
  label: string;
  value: string;
  sublabel?: string;
}

export const profile = {
  name: "Juan Aristizabal",
  tagline: "Full-stack engineer — React/TypeScript + Node.js (Express) APIs + SQL",
  location: "Vancouver, BC",
  relocation: "Open to relocation",
  email: "juanarieda@gmail.com",
  github: "https://github.com/aristi1215",
  linkedin: "https://www.linkedin.com/in/juan-pablo-aristizabal-pineda/",
  resumeUrl: "/resume.pdf",
  metrics: [
    { label: "Years Experience", value: "2.5" },
    { label: "Shipped Items", value: "100+", sublabel: "Cumulative across roles" },
    { label: "Bugs Resolved", value: "50+", sublabel: "Production fixes, end-to-end" },
    {
      label: "Response Time",
      value: "200% faster",
      sublabel: "Rearch: cut dead reqs, leaner fetches",
    },
    { label: "AWS CCP", value: "Certified", sublabel: "Dec 2025" },
  ] as Metric[],
  chips: ["React/TypeScript", "Node.js/Express", "SQL", "React Native", "AWS"],
};
