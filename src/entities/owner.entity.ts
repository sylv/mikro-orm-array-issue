import { Embedded, Entity, PrimaryKey } from "@mikro-orm/core";
import { Cat, Dog } from "./pet.embeddable";

@Entity()
export class Owner {
  @PrimaryKey()
  id: number;

  @Embedded(() => [Cat, Dog], { array: true })
  pets: Array<Cat | Dog>;
}
