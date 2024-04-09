
import {Faculty} from "./Faculty.js"
import {Student} from "./Student.js"
import {Cycle} from "./Cycle.js"
import {Motorcycle} from "./Motorcycle.js"
import {Car} from "./Car.js"
import { Dailypass } from "./Dailypass.js"
import {Monthlypass} from "./Monthlypass.js"
import {Yearlypass} from "./Yearlypass.js"


document.addEventListener("DOMContentLoaded",()=>{
    let userSubmitButton = document.getElementById("userSubmitButton")
    userSubmitButton.addEventListener("click",registerUser)
    let vehicleSubmitButton = document.getElementById("vehicleSubmitButton")
    vehicleSubmitButton.addEventListener('click',registerVehicle)
    })

    const users = []
const registerUser = (e) => {
    // e is an eventwhichdo not refresh the page
    e.preventDefault()
        let userName = document.getElementById("userName").value
        let userContact = document.getElementById("userContact").value
        let userRole = document.getElementById("userRole").value

        let user = null;
        switch(userRole)
        {
            case "student" :
                user = new Student(userName,userContact)
                break;
                case "faculty" :
                    user = new Faculty(userName,userContact)
                    break;

        }
        users.push(user)
      
        console.log(users)

}

const vehicles =[]
const registerVehicle = (e) => {
    e.preventDefault()
    let vehicleName = document.getElementById("vehicleName").value
    let ownerName = users[users.length -1]
    let vehicleType = document.getElementById("vehicleType").value
    let vehicle = null
    switch (vehicleType)
    {
        case "Cycle" :
            vehicle = new Cycle(vehicleName,ownerName)
             break;
         case "Motor Cycle" :
            vehicle = new Motorcycle(vehicleName,ownerName)
             break;
         case "Car" :
            vehicle = new Car(vehicleName,ownerName)
             break;
    }
    vehicles.push(vehicle)
    console.log(vehicles)
    showPassChoice(vehicle)
}

const passes=[]
const showPassChoice = (vehicle)=>{
    let passChoice = document.getElementById("passChoice")
    let dailyPass = new Dailypass(vehicle)
    let monthlyPass = new Monthlypass(vehicle)
    let yearlyPass = new Yearlypass(vehicle)

   //for daily pass..... 
    let button = document.createElement("Input")
    button.setAttribute("type","button")
    button.value = "daily : " +dailyPass.price
    passChoice.appendChild(button)
    button.addEventListener('click',()=>{
        passes.push(dailyPass)
        dailyPass.print()

    })


    // for monthy pass....
    button = document.createElement("Input")
    button.setAttribute("type","button")
    button.value = "monthly : " +monthlyPass.price
    passChoice.appendChild(button)
    button.addEventListener('click',()=>{
        passes.push(monthlyPass)
        monthlyPass.print()

    })



    // for yearly pass....
    button = document.createElement("Input")
    button.setAttribute("type","button")
    button.value = "yearly : " +yearlyPass.price
    passChoice.appendChild(button)
    button.addEventListener('click',()=>{
        passes.push(yearlyPass)
        yearlyPass.print()

    })





}

