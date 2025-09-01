// 8 caracteres, pelo menos 1 letra maiúscula, 1 letra minúscula e 1 número

export class Senha {
    private readonly _value: string;

    constructor(senha: string) {
        this._value = this.validateSenha(senha);
    }

    get value(): string {
        return this._value;
    }

    private validateSenha(senha: string): string {
        if (!senha) throw new Error("Senha é obrigatória");
        if (senha.length < 8) throw new Error("Senha deve ter pelo menos 8 caracteres");
        if (!/[A-Z]/.test(senha)) throw new Error("Senha deve ter pelo menos 1 letra maiúscula");
        if (!/[a-z]/.test(senha)) throw new Error("Senha deve ter pelo menos 1 letra minúscula");
        if (!/[0-9]/.test(senha)) throw new Error("Senha deve ter pelo menos 1 número");
        return senha;
    }


}