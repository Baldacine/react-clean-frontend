export type PortfolioSection =
    | "TechStack"
    | "Journey"
    | "Certifications"
    | "Projects"
    | "Awards"
    | "Hobbies";

export interface Project {
    name: string;
    link: string;
    descKey: string;
    iosLink: string;
    androidLink: string;
}
