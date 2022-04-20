import { ArrayType, Entity, PrimaryKey, Property } from "@mikro-orm/core";

@Entity()
export class Owner {
  @PrimaryKey()
  id: number;

  @Property({ type: ArrayType })
  tags: string[];
}
