//booleano
let success: boolean = false; //implicita

//number
let num1: number = 10;
let num2: number = 10.50;
let num3: number = 0xFA;

//string
let text: string = 'Elton' + ' Kolling';

let firstName = 'Elton';
let lastName = 'Kolling';

text = `${firstName} Luis ${lastName}`;
console.log(text);

//Array
let arrayStrings1: string[] = ['a', 'b', 'c'];
let arrayStrings2: Array<string> = ['a', 'b', 'c'];

let arrayNumbers1: number[] = [1, 2, 3];
let arrayNumbers2: Array<number> = [1, 2, 3];

let arrayWithoutType: Array<any> = ['a', 1, true];

//enum
enum estadoCivil {Solteiro, Casado, Divorciado};

let meuEstadoCivil: estadoCivil = estadoCivil.Solteiro;

if (meuEstadoCivil === estadoCivil.Solteiro) {
  console.log('sou solteiro');
}

enum estadoCivil2 {
  Solteiro = 'solteiro',
  Casado = 'casado',
  Divorciado = 'divorciado'
};

let meuEstadoCivil2: estadoCivil2 = estadoCivil2.Solteiro;

console.log(`sou ${meuEstadoCivil2}`);
