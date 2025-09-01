import Usuario from "../../../core/entities/Usuario"
import type { InputUserDto, OutputUserDto } from "../dtos/users-dto"

export function inputDtoToUsuario(data: InputUserDto): Usuario {
    const { nome, email, senha, phone, role } = data
    //id: number, name: string, email: string, phone: string, role: string, createdAt: Date, updatedAt: Date
    const usuario = new Usuario(nome, email, phone, role)

    return usuario
}

export function usuarioToOutputDto(usuario: Usuario): OutputUserDto {
    return {
        id: usuario.id || undefined,
        nome: usuario.name,
        email: usuario.email,
        phone: usuario.phone,
        role: `${usuario.role.toString()}`,
        createdAt: usuario.createdAt ? usuario.createdAt.toISOString() : undefined,
        updatedAt: usuario.updatedAt ? usuario.updatedAt.toISOString() : undefined
    }
}

/*
  private _id?: number | null;
    private _name: Name;
    private _senha: Senha | null;
    private _email: string;
    private _phone: string;
    private _role: string;
    private _createdAt?: Date | null;
    private _updatedAt?: Date | null;

usuariodto
 id?: number
  email: string
  senha: string
  name: string
  phone: string
  role: Role
  createdAt?: string
  updatedAt?: string
*/