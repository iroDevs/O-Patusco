import { Name } from "../value-object/Name";

export default class Usuario {
    private _id: number;
    private _name: Name;
    private _email: string;
    private _phone: string;
    private _role: string;
    private _createdAt: Date;
    private _updatedAt: Date;

    constructor(id: number, name: string, email: string, phone: string, role: string, createdAt: Date, updatedAt: Date) {
        this._id = id;
        this._name = new Name(name);
        this._email = email;
        this._phone = phone;
        this._role = role;
        this._createdAt = createdAt;
        this._updatedAt = updatedAt;
    }

    public get id(): number {
        return this._id;
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

    public get createdAt(): Date {
        return this._createdAt;
    }

    public get updatedAt(): Date {
        return this._updatedAt;
    }
}
