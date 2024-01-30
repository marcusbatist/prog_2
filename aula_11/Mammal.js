
import Animal from "./Animal.js";

export default class Mammal extends Animal{

 
    #numlegs;


    constructor({name, numlegs}){
        super(name);
        this.#numlegs = numlegs;

    }

    walk() {
        return this.introduce() + " walking on " + this.#numlegs + " legs";
    }

}