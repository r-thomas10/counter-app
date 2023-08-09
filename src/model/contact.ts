export interface Contact {
    map(arg0: (contact: any, index: any) => import("react/jsx-runtime").JSX.Element): unknown;
    firstName: string;
    lastName: string;
    phoneNumber: number;
    isFavorite: boolean;
}