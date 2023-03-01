const number = Math.round(Math.random() * 100);

function regularFunction(n) {
  if (n % 2 === 0) return `El numero ${n} es par`;
  return `El numero ${n} es impar`;
}

const arrowFunction = (n) => {
  if (n % 2 === 0) return `El numero ${n} es par`;
  return `El numero ${n} es impar`;
};

var nombre = 'prueba'
this.adios = 'adios'

const prueba = () => {
  console.log(this.nombre)
  console.log(this.adios)
}

prueba()

console.log(regularFunction(number));
console.log(arrowFunction(number));
