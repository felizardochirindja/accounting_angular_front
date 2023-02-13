export class Nuit {
    constructor(private nuit: string) {
        // validate nuit
    }

    get value(): string {
        return this.nuit;
    }
}
