import { Options } from "@mikro-orm/core";
import { Owner } from "./owner.entity";

export default {
  type: "postgresql",
  clientUrl: "postgresql://mikro:mikro@127.0.0.1:5462/mikro",
  entities: [Owner],
  allowGlobalContext: true,
} as Options;
