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
// let sayi1=55;
// console.log(sayi1)

// let sayi2=44.55555;
// console.log(sayi2);
// console.log(typeof sayi2);

// //metinsel ==> sayıya çevirmek istiyorsak
// let metin="66";
// let sayi3=Number(metin);
// let sayi4=parseInt(metin);

// //ES
// // const sayi4=Number(prompt("Lütfen sayı giriniz"));
// // console.log(Math.pow(sayi4,2));
// // console.log(sayi4**2);

// //toFixed ==> virgülden sonra yuvarlamak
// const sayi5=89.12345678;
// console.log(sayi5.toFixed(4));

// // Bilimsel gösterim 
// let bilimsel=13E+4;
// console.log(bilimsel)

// // Ters Bilimsel gösterim 
// let deneme=560000;
// console.log(deneme.toExponential(1));

// //sayı sistemleri
// //binary(2)       ==> 0,1
// let binary=0b01101;
// console.log(binary);

// //octal(8)        ==> 0.1.2.3.4.5.6.7
// let octal=0o01101;
// console.log(octal);

// //decimal(10)     ==> 0.1.2.3.4.5.6.7.8.9
// let decimal=123456;
// console.log(decimal);

// //hexadecimal(16) ==>0.1.2.3.4.5.6.7.8.9.a,b,c,d,e,f
// let hexadecimal=0xabc123;
// console.log(hexadecimal);


/////////////////////////////////////////////////////////////////////
//METINSEL:
// const kelime="Merhabalar güzel insanlar güzel";
// console.log(kelime.toLowerCase());
// console.log(kelime.toUpperCase());
// console.log(kelime.length);
// console.log(kelime.trim().length);

// console.log(kelime.charAt(0));
// console.log(kelime.startsWith("M"));
// console.log(kelime.endsWith(" "));

// console.log(kelime.concat(".INC").concat("XYZ"));

// console.log(kelime.replace(kelime," yenisi"));

// console.log(kelime.substring(3));
// console.log(kelime.substring(0,5));

// console.log(kelime.indexOf("güzel"));
// console.log(kelime.lastIndexOf("güzel"));


//ÖDEV
// kullanıcı tarafından girilen bir kelimenin (prompt)
//S-1) Kaç karakterlidir ?
//S-2) boşluklar alınarak Kaç karakterlidir ?
//S-3) bütün kelimeyi küçük harfle göstermek ?
//S-4) bütün kelimeyi büyük harfle göstermek ?
//S-5) ilk harf nedir  ?
//S-6) girdiğiniz kelime java ile başlıyor mu  ?
//S-7) girdiğiniz kelimenin sonuna "-ben js öğreniyorum"   ?
//S-8) girdiğiniz 0 ile 4 arasındaki indexi ekranda gösterin   ?
//S-9) Kullanıcıdan alınan başka bir kelimeyle birinci olan kelimeyle yer değiştirmek ?

//cast
//sayıyı sting'e çevirir
// String(14);
// let data=44;
// data.toString();

// ÖDEVLER
//Örnek-1
//y=3x+4k ==>1.dereceden2bilinmeyenlidenklem algoritması
//Kullanıcı tarafından alınan x ve kdeğerlerini hesaplayan algoritma yazınız ?
//örnek-2
//Kullanıcı tarafından alınan dereceyi  Fahrenhayta çeviren algoritma yapalım.
//Formül: (derece*9/5)+32
//örnek-3 operatör işlemleri: aşağıdaki örneği javascript ile yapalım
//4+3*2(3:3-1*6+9:1+(3:3))

//Örnek-4: Aşağıdaki örnekleri math ile çözelim ?
// -5.9 sayıyının aşağıdaki işlemleri yaptıralım ?
// 1-mutlak değeri alsın 5.9
// 2-yuvarlama yapsın  6.0
// 3-karesini alsın 36.00
// 4-karekök alsın 6.0
// 5-yuvarlama yapsın 6.0
// 6-)çıkan sonucu 5 bölsün 6/5=1
// 7-) iki sayı arasından karşılaştırma yapsın en küçüğünü alsın ve 1 ve 5
// 8-) küçük sayı eğer tekse 3 eklesin çiftse 5 eklesin 
// Örnek-5 : kullanıcı tarafından girilen bir sayıyı negatif mi pozitif mi olduğu ekran yazdıran algoritma ?
//NOT: cast kullalım ?
// Örnek-6 : kullanıcı tarafından password ve repassword alalım sonrasında bu iki değeri karşılaştırma yapalım
//eğer aynı girilirse aynı veri yoksa birbirine uymadı yazan algoritma yapalım



////////////////////////////////////////////
// kullanıcıdan aldığımız isim soyisim (boşluk var)
// ilk karakter göstersin sonraki kelimeleri masking (maskeleme yapsın)
// eğer kullanıcı isim ve soyisimi ilk karakteri küçük girmişse büyük olsun mutlaka
// Hamit Mızrak
// H**** MIZ***
// ipucu: charAt, substring, indexOf, döngü, karar mekanizma


// Function
// conditional(if else )
// Ternary
// Switch case
// Loop for-while-doWhile
// forin forof
// break continue return 
// exception handling try-catch
// debug atmak 
// software prensible DRY,KISS, YAGNI, Dummy Code,Clean Code
// SOLID
// setTimeOut 
// callbackfunction
// promise
// asyn-await

// Dizi
