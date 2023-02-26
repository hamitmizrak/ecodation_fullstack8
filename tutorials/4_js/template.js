// alert("Ben js");
// window.alert("Ben js2")

// interpreter nedir ?
// compiler nedir ?
// OOP nedir ?
// Betik dil nedir ?
// Cross origin nedir ?
// npm ile yarn arasındaki farklar ?
// libraries ile framework ?

/*

*/ 
// window.document.write("Ekranda göster");
// window.console.log("Log");
// window.console.warn("warning");
// window.console.error("error");
//camelCase 
//PascalCase

//var 
//let   (ES6)
//const (ES6)

//var degiskenAdi="Hamit Mızrak";
// console.log(degiskenAdi);
// console.log(typeof degiskenAdi);

// degiskenAdi=true;
// console.log(degiskenAdi);
// console.log(typeof degiskenAdi);

// degiskenAdi=44;
// console.log(degiskenAdi);
// console.log(typeof degiskenAdi);

// degiskenAdi=44.55;
// console.log(degiskenAdi);
// console.log(typeof degiskenAdi);

// //Variable Common Rules
// var $_degiskenAdi44="deneme";
// console.log($_degiskenAdi44);

// //u have to dont make
// //%@44$_degiskenAdi

// //whoisting
// degisken=3>1;
// var degisken;
// console.log(degisken);

// //variable initialization
// var initial='"0"';

//operatorler
//+ - * / %
// var number1=10;
// var number2=2;
// console.log(number1+number2);
// console.log(number1-number2);
// console.log(number1*number2);
// console.log(number1/number2);
// console.log(number1%number2);

// = == ===
// &&=VE ||=VEYA
// ! =değil

// var number=100.000;
// console.log(number);

// var number=10.000;
// console.log(number)

// let number2=10;
// let number2=10;

//Kullanıcıdan veri almak istersek
// let userData=prompt("Lütfen adınızı girinizi");
// console.log(userData);

//cast
//sayıya Number();
//kelime String();
// let number1=14,number2="16";
// let number3=Number(number2);

// console.log(number1+number2);
// console.log(number1+number3);

//undefined 
// let data1=0;
// console.log(data1);

// //NaN
// console.log(4/4)
// console.log(4/"4")
// console.log(4/"asd")

// //infinity 
// console.log(4/0);

// //new : bir çocuğun dünyaya gelmesidir.
// //null: bir vefat etmesi 
// //zero != null
// //this ==> bu 

// //escape character
// console.log("1.satır")
// console.log("2.satır")
// console.log("3.satır\n\t4.satır");

//break: döngüyü kırmak.
//return: metotu kırmak.
//continue: 1 kereye mahsus es geç sonra devam et.

/////////////////////////////////////////////////////////////////////
//MATH:
// console.log(Math.min(1,55,66,100,-99));
// console.log(Math.max(1,55,66,100,-99));
// console.log(Math.sqrt(25));
// console.log(Math.pow(2,5));
// console.log(Math.abs(-44));

// console.log(Math.floor(5.9));
// console.log(Math.ceil(5.1));
// console.log(Math.round(7.5));
// console.log(Math.round(7.4));

// console.log(Math.round(Math.random()*10+1));
// console.log(Math.sin(45));

/////////////////////////////////////////////////////////////////////
//SAYISAL:
let sayi1=55;
console.log(sayi1)

let sayi2=44.55555;
console.log(sayi2);
console.log(typeof sayi2);

//metinsel ==> sayıya çevirmek istiyorsak
let metin="66";
let sayi3=Number(metin);
let sayi4=parseInt(metin);

//ES
// const sayi4=Number(prompt("Lütfen sayı giriniz"));
// console.log(Math.pow(sayi4,2));
// console.log(sayi4**2);

//toFixed ==> virgülden sonra yuvarlamak
const sayi5=89.12345678;
console.log(sayi5.toFixed(4));

// Bilimsel gösterim 
let bilimsel=13E+4;
console.log(bilimsel)

// Ters Bilimsel gösterim 
let deneme=560000;
console.log(deneme.toExponential(1));

//sayı sistemleri
//binary(2)       ==> 0,1
let binary=0b01101;
console.log(binary);

//octal(8)        ==> 0.1.2.3.4.5.6.7
let octal=0o01101;
console.log(octal);

//decimal(10)     ==> 0.1.2.3.4.5.6.7.8.9
let decimal=123456;
console.log(decimal);

//hexadecimal(16) ==>0.1.2.3.4.5.6.7.8.9.a,b,c,d,e,f
let hexadecimal=0xabc123;
console.log(hexadecimal);


/////////////////////////////////////////////////////////////////////
//METINSEL: