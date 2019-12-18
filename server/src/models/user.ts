export class User   {
    id!: number;
    pseudo!: string;
    lastname!: string;
    firstname!: string;
    email!: string;
    password!: string;
    score!: number;

    constructor(input: User) {
        Object.assign(this, input);
    }
}