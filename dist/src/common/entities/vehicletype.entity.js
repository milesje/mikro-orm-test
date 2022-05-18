"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.VehicleType = void 0;
var core_1 = require("@mikro-orm/core");
var vehicle_entity_1 = require("./vehicle.entity");
var VehicleType = (function () {
    function VehicleType() {
        this.vehicles = new core_1.Collection(this);
    }
    __decorate([
        (0, core_1.PrimaryKey)({ type: 'uuid', defaultRaw: 'gen_random_uuid()' }),
        __metadata("design:type", String)
    ], VehicleType.prototype, "id", void 0);
    __decorate([
        (0, core_1.Property)({ default: '' }),
        __metadata("design:type", String)
    ], VehicleType.prototype, "description", void 0);
    __decorate([
        (0, core_1.Property)({ default: '' }),
        __metadata("design:type", String)
    ], VehicleType.prototype, "unitType", void 0);
    __decorate([
        (0, core_1.OneToMany)(function () { return vehicle_entity_1.Vehicle; }, function (vehicles) { return vehicles.vehicleType; }),
        __metadata("design:type", Object)
    ], VehicleType.prototype, "vehicles", void 0);
    VehicleType = __decorate([
        (0, core_1.Entity)({ schema: "*" })
    ], VehicleType);
    return VehicleType;
}());
exports.VehicleType = VehicleType;
//# sourceMappingURL=vehicletype.entity.js.map