export interface Certificate {
  id: string;
  title: string;
  issuer: string;
  date: string;
  credentialId?: string;
  link?: string;
}

export const certificates: Certificate[] = [
  {
    id: "cert-01",
    title: "Prompt Engineering CodeSprint",
    issuer: "Vedam School of Technology",
    date: "2026",
    link: "https://i.ibb.co/JFHCzRVN/Certificate-Nihal-jaiswal-Prompt-Engineering.png"
  },
  {
    id: "cert-02",
    title: "GenAI Powered Data Analytics Job Simulation",
    issuer: "Tata",
    date: "2025",
    link: "https://i.ibb.co/F4jZFwNW/tata.png"
  }
];
