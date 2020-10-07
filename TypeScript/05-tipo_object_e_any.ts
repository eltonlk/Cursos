let obj: object = {
  firstName: 'Elton',
  lastName: 'Kolling'
};

let obj1: Object = {
  category: 'categoria',
  product: 'produto'
}

obj1 = 2; // por estar utilizando o tipo nativo não é verificado, não utilizado

let variavel: any = 4;

variavel = {};
variavel = 'string';
variavel = true;


let myArray: Array<any> = [1, 2, '3', 'outro', true, {}];
