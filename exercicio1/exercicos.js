
    /**
     * -- Declaração e Manipulação de Variáveis --
     * Declara duas variáveis, (a , b) e atribui-lhes um valor.
     * Troca os valores de a e b sem usar uma variável temporária.
     * Faz console.log dessas 2 variáveis.
     */

    let a = 5;
    let b = 10;

    console.log("a", a);
    console.log("b", b);




/**
 * -- Instruções Condicionais --
 * Escreve uma função (isEven, por ex.) que recebe um parâmetro numérico.
 * O resultado dessa função verifica se o número é par ou ímpar.
 * Faz console.log desse resultado.
 */

const isEven = (value) => {
    return value % 2 === 0 ? "isEven" : "isOdd";
}

console.log(isEven(2));



/**
 * -- Arrays --
 * Escreve uma função que recebe um array de 5 números (por ex: [2, 123, 34, 65, 48]).
 * Itera sobre esse array e faz console.log apenas dos números pares.
 */

const arr = [2,123,34,65,48];
for (let i = 0; i < arr.leng; i++) {
console.log(arr(i));
}
console.log("...");
arr.forEach(num => {
    console.log(num)
})



/**
 * -- Funções --
 * Escreve uma função que recebe dois parâmetros, num1, num2, e retorna a soma deles.
 * Faz console.log desse resultado.
 */

const add = (a,b) => a + b;

console.log(add(3,145));




/**
 * -- Objetos --
 * Cria um objeto que represente uma pessoa com as  propriedades nome, idade e genero.
 * Faz console.log dessas propriedades.
 */

const obj = {
    name:"bruno",
    age:45,
    gender:"male"
}


console.log(obj.name);
console.log(obj.age);
console.log(obj.gender);

console.log("...");


console.log(obj["name"]);
console.log(obj["age"]);
console.log(obj["gender"]);
/**
 * -- Loops --
 * Escreve um for loop que imprime a sequência de Fibonacci até um número específico de items (10, por ex.).
 * Faz console.log a cada iteração.
 */

const fobonnaci = () => {
    const sequence = [1, 0];

    for (let i = 2; i < terms; i++) {
        const next = sequence[i - 1] + sequence [i - 2];
        sequence.push(next);
    }

    return sequence;
}

const numTerms = 10;
/**
 * -- Manipulação do DOM --
 * No ficheiro index.html, cria dois elementos do tipo <button> e <p> dentro do  <body>.
 * Cria um evento onclick no botão que quando “clicado”, insere o texto “button clicked” no elemento <p>.
 */

const button = document.querySelector("button");
const p = document.querySelector("p");

button.onclick = () => {
    p.innerText = "button clicked";
}

/**
 * -- Async/Await e Fetch --
 * Cria uma função (loadData, por ex) que faça fetch do ficheiro “data.json”
 * e transforme o resultado desse fetch em formato json.
 * Faz console.log desse json.
 */

const func = async () => {
    const request = await fecth ("data.json");
    const result = await request.json();

    console.log(result);

} 

func();
