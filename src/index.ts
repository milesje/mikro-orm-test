import { LoadStrategy, MikroORM } from "@mikro-orm/core";
import { EntityManager, PostgreSqlDriver } from "@mikro-orm/postgresql";
import { Customer } from "./common/entities/customer.entity";
import { Vehicle } from "./common/entities/vehicle.entity";
import { VehicleType } from "./common/entities/vehicletype.entity";

const myFunc = async () => {
  console.log("init MikroOrm");
  const orm = await MikroORM.init<PostgreSqlDriver>({
    entities: ["./dist/src/common/entities"],
    entitiesTs: ["./src/common/entities"],
    type: "postgresql",
    dbName: "<DB-NAME>",
    schema: "<SCHEMA>",
    user: "<USER>",
    password: "<PASSWORD>",
    host: "<HOST>",
    port: 5432,
    loadStrategy: LoadStrategy.JOINED,
    forceUndefined: true,
    forceUtcTimezone: true,
    debug: true,
  });
  console.log("create EntityManager");
  const em = orm.em.fork() as EntityManager;

  const vehicle = {
    locNum: "0",
    owner: "O",
    unitNum: "1",
    year: "2022",
    make: "Ford",
    model: "F-150",
    vinNumber: "TX1233563566",
    vehicleType: {
      id: 'f3c455c7-d600-4694-bfe9-1d592a31bc92',
      description: 'Light Truck',
      type: 'PU'
    }
  };
  const entity = await em.create(Vehicle, vehicle);
  entity.vehicleType = await em.getReference(
    VehicleType,
    "02441207-f292-46b8-8c77-beb415ddd46a"
  );
  entity.customer = await em.getReference(
    Customer,
    "b62d886b-5fc4-4579-b158-50b766be00c0"
  );
  console.log(entity);
  await em.persistAndFlush(entity);
  console.log(entity);
};

myFunc();
