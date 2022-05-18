import { Collection } from '@mikro-orm/core';
import { Vehicle } from './vehicle.entity';
export declare class VehicleType {
    id: string;
    description: string;
    unitType: string;
    vehicles: Collection<Vehicle, unknown>;
}
