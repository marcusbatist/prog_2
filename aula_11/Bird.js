import Animal from "./Animal.js";

export default class Bird extends Animal{

    #canFly;

    constructor({name, canFly}){
        super(name);

        this.#canFly = canFly;

    }

    fly() {

        return this.#canFly ?
        this.introduce() + " and i can fly" :
        this.introduce() + " and i can't fly";

    }



}