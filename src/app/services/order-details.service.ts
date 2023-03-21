import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class OrderDetailsService {

  constructor() { }

  // fooddetails 
  
  foodDetails = [
    {
      id:1,
      foodName:"David Sebastian Caballero Hernandez",
      foodDetails:"Ingeniero Mecatrónico",
      foodPrice:200,
      foodImg:"assets/img/Profile.png"
    },
    {
      id:2,
      foodName:"Jhon Fredy Caballero Hernandez",
      foodDetails:"Ingeniero Mecatrónico",
      foodPrice:200,
      foodImg:"assets/img/Profile.png"
    },
    {
      id:3,
      foodName:"Heiner Alejandro Cuaran Sánchez",
      foodDetails:"Ingeniero Mecatrónico",
      foodPrice:200,
      foodImg:"assets/img/Profile.png"
    },
    {
      id:4,
      foodName:"Jhon Fredy Caballero Hernandez",
      foodDetails:"Ingeniero Mecatrónico",
      foodPrice:200,
      foodImg:"assets/img/Profile.png"
    },
    {
      id:5,
      foodName:"Indulgence Brownie",
      foodDetails:"(Eggless) Indulge in richly decadent chocolate brownie crafted with love & topped with bitter-sweet chocolate that provides ultra-rich chocolate experience.",
      foodPrice:105,
      foodImg:"assets/img/Profile.png"
    },
    {
      id:6,
      foodName:"Oreo Cheesecake Ice Cream",
      foodDetails:"Oreo ice cream",
      foodPrice:219,
      foodImg:"assets/img/Profile.png"
    }
  ]


  

}
