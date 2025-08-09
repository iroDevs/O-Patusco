import DomainException from "../DomainException";

export class NotFoundUser extends DomainException {
  constructor() {
    super('User not found', 404);
  }
}