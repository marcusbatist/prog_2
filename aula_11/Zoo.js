import  Bird from "./Bird.js";
import  Reptile from "./Reptile.js";
import  Mammal from "./Mammal.js";
export default class Zoo {


    #animals;
    constructor(){


this.#animals = [];

    }


    addAnimal(animal) {
       
        result.forEach(item => {
       

            switch(item.type) {
                case "bird":
                  this.#animals.push(new Bird(animal));  
                break;
                case "mammal":
                    this.#animals.push(new Mammmal(animal));  
                break;
                case "reptile":
                    this.#animals.push(new Reptile(animal));  
                break;
                default:
                    break;
            
                }
            }
            );
            
    }

    showAnimals() {
        this.#animals.forEach(animal => {
            console.log(animal.introduce());
        })
    }

    getanimal(name) {

        let foundAnimal = null;
       return this,animals.find(animal => animal.name === name);
        
    }


    
}