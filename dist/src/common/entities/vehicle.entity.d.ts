import { VehicleType } from './vehicletype.entity';
export declare class Vehicle {
    id: string;
    locNum: string;
    owner: string;
    unitNum: string;
    year: string;
    make: string;
    model: string;
    vinNumber: string;
    active: boolean;
    status: string;
    use: string;
    state: string;
    radius: string;
    value: number;
    newValue: number;
    statusDate: Date;
    statusTime: Date;
    autoLiability: boolean;
    comprehensive: boolean;
    collision: boolean;
    uninsuredMoterist: boolean;
    personalInjuryProtection: boolean;
    medical: boolean;
    vehicleType?: VehicleType;
}
