import { ACCOUNT_STATUS } from "./constants";

export class Account {
    constructor(user_name, password, person, status=ACCOUNT_STATUS.ACTIVE){
        this.__user_name = user_name,
        this.__password= password,
        this.__person = person,
        this.__status = status
    }

    resetPassword = () => {
        
    };
}

export class Admin extends Account {
    constructor(user_name, password, person, status=ACCOUNT_STATUS.ACTIVE){
        super(user_name, password, person, status)
    }

    addParkingFloor = (floor) => {

    }

    addParkingSpot = (floor_name, spot) => {

    }

    addParkingDisplayBoard = (floor_name, display_board) => {

    }

    addCustomerInfoPanel = (floor_name, info_panel) => {

    }

    addEnterancePanel = (entrance_panel) => {

    }

    addExitPanel = (exit_panel) => {

    }
}

export class ParkingAttendant extends Account {
    constructor(user_name, password, person, status=ACCOUNT_STATUS.ACTIVE){
        super(user_name, password, person, status)
    }

    processTicket = (ticket_number) => {

    }
}