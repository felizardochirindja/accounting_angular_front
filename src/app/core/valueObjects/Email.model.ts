export class Email {
    constructor(private email: string) {
        // validate email
    }

    get value(): string {
        return this.email;
    }
}
