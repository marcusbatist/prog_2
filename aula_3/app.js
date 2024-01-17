/* 
let a = 10;
let b = "100";

if(a === "10" && b == "100") {
    console.log(true);
} else {
    console.log(false);
}

if(a === "10" || b == "100") {
    console.log(true);
} else {
    console.log(false);
}

else if(a === "30"){
    console.log(false);
}else {
    console.log("erro");
}


switch(a){
    case 10:
        console.log(true);
    break;
    case "10":
        console.log(false);
    break;
    case "20":
        console.log(false);
    break;
    case "40":
        console.log(false);
    break;
    default:
        console.log(true);
}
*/
/*
let a = 0;


while (a < 10 ) {
    
    console.log("a", a);
   a++;
}
*/




const PI = 3.14;
let arr = [20,30,40,10,100];
/*
console.log(arr);

for (let i= arr.length-1;i >= 0;  i--) {
    console.log(arr[i]);
    
}
*/

//mapear objetos
arr.forEach((element,i) => {
   //console.log(element);
    console.log(i);
});

let obj ={
    name:"Marcus",
    apelido:"Batista",
    idade:20,
    homem:  true,
 


}

for (const key in obj) {

    console.log(obj[key]);
}
