import { Vehicle } from "./Vehicle.js"
export class Motorcycle extends Vehicle{
    constructor(name,owner)
    {
        super(name,owner)
        this.type = "Motor Cycle"
    }
}