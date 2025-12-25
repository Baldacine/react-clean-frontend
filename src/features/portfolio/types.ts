export type PortfolioSection =
    | "Skills"
    | "Journey"
    | "Certifications"
    | "Use Cases"
    | "Awards"
    | "Hobbies";

export interface Project {
    name: string;
    link: string;
    descKey: string;
    iosLink: string;
    androidLink: string;
}
