import { Options } from "@mikro-orm/core";
import { Owner } from "./entities/owner.entity";
import { Animal, Cat, Dog } from "./entities/pet.embeddable";

export default {
  type: "sqlite",
  clientUrl: "sqlite://./db.sqlite",
  entities: [Animal, Cat, Dog, Owner],
  allowGlobalContext: true,
} as Options;
