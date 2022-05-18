import { Collection, Entity, OneToMany, PrimaryKey, Property } from '@mikro-orm/core'
import { Vehicle } from './vehicle.entity'

@Entity({schema: "test"})
export class VehicleType {
  @PrimaryKey({ type: 'uuid', defaultRaw: 'gen_random_uuid()' })
  id: string
  @Property({ default: '' })
  description: string
  @Property({ default: '' })
  unitType: string

  @OneToMany(() => Vehicle, (vehicles) => vehicles.vehicleType)
  vehicles = new Collection<Vehicle>(this)
}
