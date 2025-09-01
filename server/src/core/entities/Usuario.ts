import { Name } from "../value-object/Name";
import { Senha } from "../value-object/Senha";

export default class Usuario {
    private _id?: number | null;
    private _name: Name;
    private _senha: Senha | null;
    private _email: string;
    private _phone: string;
    private _role: string;
    private _createdAt?: Date | null;
    private _updatedAt?: Date | null;

    constructor(
        name: string,
        email: string,
        phone: string,
        role: string,
        senha?: string,
        createdAt?: Date,
        updatedAt?: Date,
        id?: number
    ) {
        this._id = id || null;
        this._name = new Name(name);
        this._email = email;
        this._phone = phone;
        this._role = role;
        this._createdAt = createdAt || null;
        this._updatedAt = updatedAt || null;
        this._senha = senha ? new Senha(senha) : null;
    }

    public get id(): number | null {
        return this._id || null;
    }

    public get name(): string {
        return this._name.value;
    }

    public get email(): string {
        return this._email;
    }

    public get phone(): string {
        return this._phone;
    }

    public get role(): string {
        return this._role;
    }

    public get createdAt(): Date | null {
        return this._createdAt || null;
    }

    public get updatedAt(): Date | null {
        return this._updatedAt || null;
    }
}
