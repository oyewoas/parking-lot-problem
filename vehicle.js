import { VEHICLE_TYPE } from "./constants"

export class Vehicle {
    constructor(liscence_number, vehicle_type, ticket=null){
        this.__liscence_number = liscence_number,
        this.__vehiclel_type = vehicle_type,
        this.__ticket = ticket
    }

    assignTicket = (ticket) => {
        this.__ticket = ticket
    }
}


export class Car extends Vehicle {
    constructor(liscence_number, ticket=null){
        super(liscence_number, VEHICLE_TYPE.CAR, ticket)
    }
}

export class Van extends Vehicle {
    constructor(liscence_number, ticket=null){
        super(liscence_number, VEHICLE_TYPE.VAN, ticket)
    }
}

export class Truck extends Vehicle {
    constructor(liscence_number, ticket=null){
        super(liscence_number, VEHICLE_TYPE.TRUCK, ticket)
    }
}

export class MotorBike extends Vehicle {
    constructor(liscence_number, ticket=null){
        super(liscence_number, VEHICLE_TYPE.MOTORBIKE, ticket)
    }
}

export class Electric extends Vehicle {
    constructor(liscence_number, ticket=null){
        super(liscence_number, VEHICLE_TYPE.ELECTRIC, ticket)
    }
}