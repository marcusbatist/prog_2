import Animal from "./Animal.js";

export default class Reptile extends Animal{

    #isAgressive;

    constructor({name, isAgressive}){
        super(name);

        this.#isAgressive = isAgressive;
    }


    bite (){

        return this.#isAgressive ?
        this.introduce() + " i am  agressive" :
        this.introduce() + " i am  peacefull";
    }
}