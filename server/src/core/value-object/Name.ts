// os nomes pela regra tem que ter as primeiras letras de cada palavra maiúsculas e o resto minúsculas

export class Name {
    private readonly _value: string;

    constructor(name: string) {
        this._value = this.formatName(name);
    }

    get value(): string {
        return this._value;
    }

    private formatName(name: string): string {
        return name
            .split(' ')
            .map(word => word.charAt(0).toUpperCase() + word.slice(1).toLowerCase())
            .join(' ');
    }
}