import 'bootstrap';
console.log("test")

function HelloWorld(){
  console.log("hola mundo")
}

const HelloWorld2  = ()=>{
    console.log("Hola mundo cruel")
}

function Proceso(Data, callback) {
    console.log("esta es la data que mandamaos", Data)
    console.log("Se ejecutará algo");
    callback();
}

// Define a callback function
function myCallback() {
    console.log("Hola, soy Goku");
}
function myCallback2() {
    console.log("Hola, soy Vegeta");
}

// Call the Proceso function with test data and the callback function
Proceso("Some test data", myCallback2);
HelloWorld();
HelloWorld2();