import { MikroORM } from "@mikro-orm/core";
import OrmConfig from "./orm.config";
import { Owner } from "./owner.entity";

async function main() {
  const orm = await MikroORM.init(OrmConfig);
  const conn = orm.em.getConnection();

  // not the proper way but im too lazy to setup migrations and this is recreating
  // an issue that also happened when using actual migrations
  await conn.execute("drop table if exists owner");
  await conn.execute(
    `create table if not exists owner (id int primary key, tags text[]);`
  );

  const repo = orm.em.getRepository(Owner);
  const owner = repo.create({
    id: 1,
    tags: ["test {test}"],
  });

  await repo.persistAndFlush(owner);
  console.log(owner);
}

main();
