export interface User {
    name: string;
    token: string;
}

export type UserAction =
    | { type: 'setUser'; payload: Partial<User> }
    | { type: 'logout' };