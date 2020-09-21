export class ParkingFloor{
    constructor(name){
        this.__name = name
        this.__handicapped_spots = {}
        this.__compact_spots = {}
        this.__large_spots = {}
        this.__motorbike_spots = {}
        this.__electric_spots = {}
        this.__info_portals = {}
        this.__display_board = new ParkingDisplayBoard()

    }

   set addParkingSpot(spot){
       this.__spot = spot
   }
}

const parking = new ParkingFloor()
parking.addParkingSpot = 'hand'

console.log(parking.spot)