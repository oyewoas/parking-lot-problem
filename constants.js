export const PARKING_SPOT_TYPE = {
    HANDICAPPED : 1,
    COMPACT: 2,
    LARGE: 3,
    MOTORBIKE: 4,
    ELECTRIC: 5
}

export const VEHICLE_TYPE = {
    CAR: 1,
    TRUCK: 2,
    ELECTRIC: 3,
    VAN: 4,
    MOTORBIKE: 5
}

export const ACCOUNT_STATUS = {
    ACTIVE: 1,
    BLOCKED: 2,
    BANNED: 3,
    COMPROMISED: 4,
    ARCHIVED: 5,
    UNKNOWN: 6
}

export const PARKING_TICKET_STATUS = {
    ACTIVE: 1,
    PAID: 2,
    LOST: 3
}

export class Address {
    constructor(street, city, state, zip_code, country){
        this.__street = street
        this.__city = city
        this.__state = state
        this.__zip_code = zip_code
        this.__country = country
    }
}

export class Person {
    constructor(name, address, email, phone){
        this.__name = name,
        this.__address = address,
        this.__email = email,
        this.__phone = phone
    }
}

