import type { Role } from "@prisma/client"

export type InputUserDto = {
  email: string
  senha: string
  name: string
  phone: string
  role: Role
}

export type OutputUserDto = {
  id?: number
  email: string
  senha: string
  name: string
  phone: string
  role: Role
  createdAt?: string
  updatedAt?: string
}
