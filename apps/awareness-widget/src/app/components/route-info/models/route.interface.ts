export interface Route {
    id: number;
    name: string;
    from: string;
    to: string;
    distance: string;
    direction: 'up' | 'down';
}

export interface Delay {
    delayed: boolean;
    delayTime: number;
    delayTimeUnit: string;
    severity: 'low' | 'medium' | 'high';
}

export type RouteWithDelay = Route & Delay;

export type RoutesWithDelay = RouteWithDelay[];