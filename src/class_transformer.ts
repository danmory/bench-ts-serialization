import { instanceToPlain, plainToClass } from 'class-transformer';

export class Address {
  public firstLine: string = "";
  public secondLine: string = "";
  public city: string = "";
}

export class User {
  public firstName: string = "";
  public lastName: string = "";
  public addresses: Address[] = [];
}

export function class_transformer_deserialize(data: any) {
  return plainToClass(User, data);
}

export function class_transformer_serialize() {
  return instanceToPlain(new User());
}