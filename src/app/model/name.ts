export class Name{
    username: string | undefined;
    firstName: string | undefined;
    lastName: string | undefined;
}

export interface NameResolved{
    name?: Name;
    error?: any;
}