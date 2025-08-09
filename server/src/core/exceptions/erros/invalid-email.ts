import DomainException from "../DomainException";

export class InvalidEmail extends DomainException {
  constructor() {
    super('Invalid email address', 400);
  }
}