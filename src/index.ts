import { MikroORM } from "@mikro-orm/core";
import { Owner } from "./entities/owner.entity";
import { AnimalType } from "./entities/pet.embeddable";
import OrmConfig from "./orm.config";

async function main() {
  const orm = await MikroORM.init(OrmConfig);
  const repo = orm.em.getRepository(Owner);
  const owner = repo.create({
    pets: [
      {
        type: AnimalType.Cat,
        canMeow: true,
      },
    ],
  });

  console.log({ item: owner });
}

main();
