/*
console.log("hello");

let a = 1;
let b = 0 ;

const fibonnaci = () =>{
    for (let i = 0; i <= 10; i++) {
        const temp = a;
        a = a +  b;
        b = temp;
     
        console.log(a)
        
    }
} 

fibonnaci();
*/
/*
let user = {
    id: 0,
    name: "Marcus",
    age: 20,
    gender:'male',
    dob: "11/09/2003",
    hobbies: ['jogar basketball','ver filmes','programar','gym']
}

console.log(user);

for (const key in user) {
    console.log(user[key]);
}

*/


let user = {
    id: 0,
    name: "Marcus",
    age: 20,
    gender:'male',
    dob: "11/09/2003",
    hobbies: ['jogar basketball','ver filmes','programar','gym']
}

// class muito importante!!!
/*
class User{

    #name;
    age;

    constructor(user){
        this.name = user.name;
        this.age = user.age;

        console.log(this,this.#getName());
    }

    #getName(){
       
        return this.#name;
    }

    getAge(){
      
        return this.age;
    }

    set name(value){
        this.#name = value;
    }

    get name() {
        return this.#name;
    }

}


const user2 = new User(user);
console.log(user2.getName());
console.log(user2.getAge());
*/





import carro from "./Carro.js";
import motocycle from "./Motocycle.js";
const carro = new Carro();

const motocycle = new Motocycle();











