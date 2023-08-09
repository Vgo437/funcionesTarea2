let arregloUno = ["hola", 2, "giraldo", 3, 4, "indice 5"];

//funcion 1 que manipula el arreglo
const manipular = (arreglo) => {
  arreglo.pop();
  return arreglo;
};

//funcion 2 sin return
const sinReturn = (n1, n2) => n1 + n2;

//funcion callback
const callback = (arreglo, proyecto1, p1, p2, proyecto2) => {
  console.log(proyecto1(arreglo));
  console.log(proyecto2(p1, p2));
};

callback(arregloUno, manipular, "hola ", "chao ", sinReturn);
