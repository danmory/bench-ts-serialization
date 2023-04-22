import {
  jsonProperty,
  Serializable,
} from "ts-serializable";
import "reflect-metadata";

export class Address extends Serializable {
  @jsonProperty(String)
  public firstLine: string = "";

  @jsonProperty(String)
  public secondLine: string = "";

  @jsonProperty(String)
  public city: string = "";
}

export class User extends Serializable {
  @jsonProperty(String)
  public firstName: string = "";

  @jsonProperty(String)
  public lastName: string = "";

  @jsonProperty([Address])
  public addresses: Address[] = [];
}

export function ts_serializable_deserialize(data: any) {
  return new User().fromJSON(data);
}

export function ts_serializable_serialize() {
  return new User().toJSON();
}
