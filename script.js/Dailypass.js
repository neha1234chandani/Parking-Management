import { Pass } from "./Pass.js"


export class Dailypass extends Pass{
    constructor(vehicle)
    {
       let price = 0;
        let currentDateTime = new Date()
        currentDateTime.setDate(currentDateTime.getDate()+ 1)
        switch(vehicle.type)
        {
            case "Cycle" :
                price = 5;
                break;
             case "Motor Cycle" :
                price = 10;
                break; 
             case "Car" :
                price = 50;
                break;
        }
        
        super(vehicle,currentDateTime,price)
        this.type = "daily"
    }

}