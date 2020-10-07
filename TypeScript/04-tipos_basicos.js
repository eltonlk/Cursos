//booleano
var success = false; //implicita
//number
var num1 = 10;
var num2 = 10.50;
var num3 = 0xFA;
//string
var text = 'Elton' + ' Kolling';
var firstName = 'Elton';
var lastName = 'Kolling';
text = firstName + " Luis " + lastName;
console.log(text);
//Array
var arrayStrings1 = ['a', 'b', 'c'];
var arrayStrings2 = ['a', 'b', 'c'];
var arrayNumbers1 = [1, 2, 3];
var arrayNumbers2 = [1, 2, 3];
var arrayWithoutType = ['a', 1, true];
//enum
var estadoCivil;
(function (estadoCivil) {
    estadoCivil[estadoCivil["Solteiro"] = 0] = "Solteiro";
    estadoCivil[estadoCivil["Casado"] = 1] = "Casado";
    estadoCivil[estadoCivil["Divorciado"] = 2] = "Divorciado";
})(estadoCivil || (estadoCivil = {}));
;
var meuEstadoCivil = estadoCivil.Solteiro;
if (meuEstadoCivil === estadoCivil.Solteiro) {
    console.log('sou solteiro');
}
var estadoCivil2;
(function (estadoCivil2) {
    estadoCivil2["Solteiro"] = "solteiro";
    estadoCivil2["Casado"] = "casado";
    estadoCivil2["Divorciado"] = "divorciado";
})(estadoCivil2 || (estadoCivil2 = {}));
;
var meuEstadoCivil2 = estadoCivil2.Solteiro;
console.log("sou " + meuEstadoCivil2);
