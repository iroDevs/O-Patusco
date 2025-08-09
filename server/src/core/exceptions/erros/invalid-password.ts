import DomainException from "../DomainException";

export class InvalidPassword extends DomainException {
  constructor() {
    super('Invalid password', 400);
  }
}