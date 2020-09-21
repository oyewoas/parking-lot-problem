import { PARKING_SPOT_TYPE } from "./constants";

export class ParkingSpot {
    constructor(number, parking_spot_type){
        this.__number = number,
        this.__free = true;
        this.__vehicle = null;
        this.__parking_spot_type = parking_spot_type
    }

    isFree = () => {
        return this.__free
    }

    assignVehicle = (vehicle) => {
        this.__vehicle = vehicle
        this.__free = false
    }

    removeVehicle = () => {
        this.__vehicle = null
        this.__free = true
    }
}

export class HandicappedSpot extends ParkingSpot {
    constructor(number){
        super(number, PARKING_SPOT_TYPE.HANDICAPPED)
    }
}

export class CompactSpot extends ParkingSpot {
    constructor(number){
        super(number, PARKING_SPOT_TYPE.COMPACT)
    }
}

export class LargeSpot extends ParkingSpot {
    constructor(number){
        super(number, PARKING_SPOT_TYPE.LARGE)
    }
}

export class ElectricSpot extends ParkingSpot {
    constructor(number){
        super(number, PARKING_SPOT_TYPE.ELECTRIC)
    }
}