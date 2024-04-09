import { Pass } from "./Pass.js";

export class Monthlypass extends Pass{
    constructor(vehicle)
    {
        
        let price = 0;
        let currentDateTime = new Date()
        currentDateTime.setMonth(currentDateTime.getMonth() + 1)
        switch(vehicle.type)
        {
            case "Cycle" :
                price = 50;
                break;
             case "Motor Cycle" :
                price = 100;
                break; 
             case "Car" :
                price = 500;
                break;
        }
        super(vehicle,currentDateTime,price)
        this.type = "monthly pass"

       
    }

}