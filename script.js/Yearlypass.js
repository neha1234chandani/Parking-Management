import { Pass } from "./Pass.js";

export class Yearlypass extends Pass{
    constructor(vehicle)
    {
        let price = 0;
        let currentDateTime = new Date()
        currentDateTime.setFullYear(currentDateTime.getFullYear() + 1)
        switch(vehicle.type)
        {
            case "Cycle" :
                price = 500;
                break;
             case "Motor Cycle" :
                price = 1000;
                break; 
             case "Car" :
                price = 5000;
                break;
        }
        super(vehicle,currentDateTime,price)
        this.type = "yearly pass"
    }

}