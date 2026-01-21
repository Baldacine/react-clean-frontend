export type PortfolioSection =
    | "TechStack"
    | "Journey"
    | "Certifications"
    | "Projects"
    | "Awards"

export type Project = {
    name: string;
    link: string;
    descKey: string;
    iosLink?: string;
    androidLink?: string;
    stacks?: string[];
};

export type ProfessionalExperience = {
    name: string;
    descKey: string;
    androidLink?: string;
    role: string;
    stacks?: string[];
};