export type PortfolioSection =
    | "TechStack"
    | "Journey"
    | "Certifications"
    | "Projects"
    | "Awards"

export type Project = {
    name: string;
    link: string;
    categoryKey: string;
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

export interface TimelineItem {
    date: string;
    title: string;
    description: string;
}

export interface Certification {
    title: string;
    issuer: string;
    date: string;
    image: string;
    link: string;
}

export interface Award {
    title: string;
    description: string;
    image: string;
    link: string;
}
