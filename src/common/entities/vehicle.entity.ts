import { Entity, ManyToOne, PrimaryKey, Property } from '@mikro-orm/core'
import { Customer } from './customer.entity'
import { VehicleType } from './vehicletype.entity'

@Entity({schema: "test"})
export class Vehicle {
  @PrimaryKey({ type: 'uuid', defaultRaw: 'gen_random_uuid()' })
  id: string
  @Property({ default: '' })
  locNum: string
  @Property({ default: '' })
  owner: string
  @Property({ default: '' })
  unitNum: string
  @Property({ default: '' })
  year: string
  @Property({ default: '' })
  make: string
  @Property({ default: '' })
  model: string
  @Property({ default: '' })
  vinNumber: string
  @Property({ default: false })
  active: boolean
  @Property({ default: '' })
  status: string
  @Property({ default: '' })
  use: string
  @Property({ default: '' })
  state: string
  @Property({ default: '' })
  radius: string
  @Property({ default: 0 })
  value: number
  @Property({ default: 0 })
  newValue: number
  @Property({ type: 'date', default: null, nullable: true })
  statusDate: Date
  @Property({ type: 'time', default: null, nullable: true })
  statusTime: Date
  @Property({ default: false })
  autoLiability: boolean
  @Property({ default: false })
  comprehensive: boolean
  @Property({ default: false })
  collision: boolean
  @Property({ default: false })
  uninsuredMoterist: boolean
  @Property({ default: false })
  personalInjuryProtection: boolean
  @Property({ default: false })
  medical: boolean

  @ManyToOne(() => Customer)
  customer: Customer

  @ManyToOne(() => VehicleType, {cascade: []})
  vehicleType?: VehicleType
}
