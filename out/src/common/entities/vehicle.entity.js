"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.Vehicle = void 0;
var core_1 = require("@mikro-orm/core");
var vehicletype_entity_1 = require("./vehicletype.entity");
var Vehicle = /** @class */ (function () {
    function Vehicle() {
    }
    __decorate([
        (0, core_1.PrimaryKey)({ type: 'uuid', defaultRaw: 'gen_random_uuid()' })
    ], Vehicle.prototype, "id", void 0);
    __decorate([
        (0, core_1.Property)({ default: '' })
    ], Vehicle.prototype, "locNum", void 0);
    __decorate([
        (0, core_1.Property)({ default: '' })
    ], Vehicle.prototype, "owner", void 0);
    __decorate([
        (0, core_1.Property)({ default: '' })
    ], Vehicle.prototype, "unitNum", void 0);
    __decorate([
        (0, core_1.Property)({ default: '' })
    ], Vehicle.prototype, "year", void 0);
    __decorate([
        (0, core_1.Property)({ default: '' })
    ], Vehicle.prototype, "make", void 0);
    __decorate([
        (0, core_1.Property)({ default: '' })
    ], Vehicle.prototype, "model", void 0);
    __decorate([
        (0, core_1.Property)({ default: '' })
    ], Vehicle.prototype, "vinNumber", void 0);
    __decorate([
        (0, core_1.Property)({ default: false })
    ], Vehicle.prototype, "active", void 0);
    __decorate([
        (0, core_1.Property)({ default: '' })
    ], Vehicle.prototype, "status", void 0);
    __decorate([
        (0, core_1.Property)({ default: '' })
    ], Vehicle.prototype, "use", void 0);
    __decorate([
        (0, core_1.Property)({ default: '' })
    ], Vehicle.prototype, "state", void 0);
    __decorate([
        (0, core_1.Property)({ default: '' })
    ], Vehicle.prototype, "radius", void 0);
    __decorate([
        (0, core_1.Property)({ default: 0 })
    ], Vehicle.prototype, "value", void 0);
    __decorate([
        (0, core_1.Property)({ default: 0 })
    ], Vehicle.prototype, "newValue", void 0);
    __decorate([
        (0, core_1.Property)({ type: 'date', default: null, nullable: true })
    ], Vehicle.prototype, "statusDate", void 0);
    __decorate([
        (0, core_1.Property)({ type: 'time', default: null, nullable: true })
    ], Vehicle.prototype, "statusTime", void 0);
    __decorate([
        (0, core_1.Property)({ default: false })
    ], Vehicle.prototype, "autoLiability", void 0);
    __decorate([
        (0, core_1.Property)({ default: false })
    ], Vehicle.prototype, "comprehensive", void 0);
    __decorate([
        (0, core_1.Property)({ default: false })
    ], Vehicle.prototype, "collision", void 0);
    __decorate([
        (0, core_1.Property)({ default: false })
    ], Vehicle.prototype, "uninsuredMoterist", void 0);
    __decorate([
        (0, core_1.Property)({ default: false })
    ], Vehicle.prototype, "personalInjuryProtection", void 0);
    __decorate([
        (0, core_1.Property)({ default: false })
    ], Vehicle.prototype, "medical", void 0);
    __decorate([
        (0, core_1.ManyToOne)(function () { return vehicletype_entity_1.VehicleType; }, { cascade: [] })
    ], Vehicle.prototype, "vehicleType", void 0);
    Vehicle = __decorate([
        (0, core_1.Entity)({ schema: "*" })
    ], Vehicle);
    return Vehicle;
}());
exports.Vehicle = Vehicle;
//# sourceMappingURL=vehicle.entity.js.map