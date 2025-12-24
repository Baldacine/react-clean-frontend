export interface TimelineItem {
    title: string;
    description: string;
    date: string;
}

export interface TimelineProps {
    items: TimelineItem[];
}
