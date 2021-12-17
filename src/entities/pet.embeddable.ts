import { Embeddable, Enum, Property } from "@mikro-orm/core";

export enum AnimalType {
  Cat,
  Dog,
}

@Embeddable({ abstract: true, discriminatorValue: "type" })
export class Animal {
  @Enum(() => AnimalType)
  type: AnimalType;
}

@Embeddable({ discriminatorValue: AnimalType.Cat })
export class Cat extends Animal {
  @Property()
  canMeow: boolean = true;
}

@Embeddable({ discriminatorValue: AnimalType.Dog })
export class Dog extends Animal {
  @Property()
  canBark: boolean = true;
}
