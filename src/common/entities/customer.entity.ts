
import {  Collection, Entity,  OneToMany,  PrimaryKey, Property } from '@mikro-orm/core'
import { Vehicle } from './vehicle.entity'

@Entity({schema: "test"})
export class Customer {
  @PrimaryKey({ type: 'uuid', defaultRaw: 'gen_random_uuid()' })
  id: string
  @Property({ nullable: false, default: '' })
  name: string
  @Property({ nullable: false, default: 'Prospect' })
  type: string

  @OneToMany(() => Vehicle, (vehicles) => vehicles.customer)
  vehicles = new Collection<Vehicle>(this)
}
