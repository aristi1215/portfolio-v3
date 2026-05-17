export interface Metric {
  label: string;
  value: string;
  sublabel?: string;
}

export const profile = {
  name: "Juan Aristizabal",
  tagline: "Full-stack engineer — React/TypeScript + Python (FastAPI) APIs + SQL",
  location: "Vancouver, BC",
  relocation: "Open to relocation",
  email: "juanaristizabal1215@gmail.com",
  github: "https://github.com/aristi1215",
  linkedin: "https://linkedin.com/in/juan-aristizabal-fullstack",
  resumeUrl: "/resume.pdf",
  metrics: [
    { label: "Years Experience", value: "2.5" },
    { label: "Shipped Items", value: "100+", sublabel: "Cumulative across roles" },
    { label: "AWS CCP", value: "Certified", sublabel: "Dec 2025" },
    { label: "DELF B2", value: "French", sublabel: "Certified" },
  ] as Metric[],
  chips: ["React/TypeScript", "FastAPI/Python", "SQL", "React Native", "AWS"],
};
