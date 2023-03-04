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

// let usernameAndSurnameMasking = () => {
//     const usernameAndSurname = prompt("Adınız ve Soyadınız");

//     let username = usernameAndSurname.substring(0, usernameAndSurname.indexOf(" "));
//     for (let i = 1; i < username.length; i++) {
//         username = username.replace(username.charAt(i), "*");
//     }
//     console.log(username.toUpperCase());

//     let surname = usernameAndSurname.substring(usernameAndSurname.indexOf(" ") + 1, usernameAndSurname.length).toLocaleUpperCase();
//     for (let i = 3; i < surname.length; i++) {
//         surname = surname.toLocaleUpperCase().replace(surname.charAt(i), "*");
//     }
//     console.log(surname.toUpperCase());
// }
//usernameAndSurnameMasking();
//++++++++++++++++++++++++++++++++++++++++++++++++++++++
// Function
//1- returnsuzParametresiz
// function returnsuzParametresiz(){
//     console.log("1- returnsuz Parametresiz")
// }
// returnsuzParametresiz()

// //2- returnsuzParametreli
// function returnsuzParametreli(name,surname){
//     console.log("2- returnsuz Parametreli: "+name.concat(" "+surname));
// }
// returnsuzParametreli("adım","soyadım")

// //3- returnluParametresiz
// function returnluParametresiz(){
//     return "3- returnluParametresiz";
// }
// let data3=returnluParametresiz();
// console.log(data3);


// //4- returnluParametreli
// function returnluParametreli(name){
//     return "4- returnluParametreli "+name;
// }
// let data4=returnluParametreli("Adım55");
// console.log(data4);

//++++++++++++++++++++++++++++++++++++++++++++++++++++++
// conditional(if else )

// function conditional() {
//     let number = 4;
//     if (number > 0) {
//         console.log("pozitif sayı")
//     } else {
//         console.log("negatif sayı")
//     }
// }
//conditional()

// Ternary
// function conditional2() {
//     let number = 4;

//     let result = (number > 0) ? "pozitif sayı" : "negatif sayı";
//     console.log(result)
// }
//conditional2()

// conditional(if else )
// function conditional3() {
//     let number = 4;
//     if (number === 1) {
//         console.log("1")
//     } else if (number === 2) {
//         console.log("2")
//     } else if (number === 3) {
//         console.log("3")
//     } else if (number === 4) {
//         console.log("4")
//     } else if (number === 5) {
//         console.log("5")
//     } else {
//         console.log("1<=X<=5 dışındadır")
//     }
// }
//conditional3()


// Switch case
// function conditional4() {
//     let number = 4;

//     switch (number) {
//         case 1:
//             console.log("1")
//             break;

//         case 2:
//             console.log("2")
//             break;

//         case 3:
//             console.log("3")
//             break;

//         case 4:
//             console.log("4")
//             break;

//         case 5:
//             console.log("5")
//             break;

//         default:
//             console.log("1<=X<=5 dışındadır")
//             break;
//     }

// }
//conditional4()

/////////////////////////////////////////////////////////conditional


//++++++++++++++++++++++++++++++++++++++++++++++++++++++
// Loop for-while-doWhile
//function loopData(){}
//Anonymous function
// let loopData = function () {
//     let sum = 0;
//     for (let i = 1; i <= 10; i++) {
//         sum = sum + i;
//     }
//     console.log(sum)
// }
//loopData();

//while
// let loopData2 = () => {
//     let sum = 0;
//     let i = 1;
//     while (i <= 10) {
//         sum = sum + i;
//         i++;
//     }
//     console.log(sum)
// }
//loopData2()


//do while
// let loopData3 = () => {
//     let sum = 0;
//     let i = 1;
//     do {
//         sum = sum + i;
//         i++;
//     } while (i <= 10);
//     console.log(sum)
// }
//loopData2()

// break continue return

//ÖDEV
//ÖDEV (if-else for break continue)
//Fonksiyonlarla
//Örnek: 1 ile kullanıcının vereceği (prompt) bitiş sayısına göre
//kullancı: 5 verdi diyelim 1<=X<=5
//1.adım: kaç tane sayı var ?
//2.adım: sayı toplamları var ?
//3.adım: kaç tane tek  sayı var ?
//4.adım: tek sayılar toplamı ?
//5.adım: tek sayılar gösterelim ?
//6.adım: kaç tane çift  sayı var ?
//7.adım: çift sayılar toplamı ?
//8.adım: çift sayılar gösterelim ?
//Eğer verilen sayılarda 7 sayısı varsa bunu eklemesin (continue)
//Eğer bitiş sayısı 100 fazla ise 100'e kadar olanlar toplansın  (break)
//Eğer kullanıcı başlangıç sayıdan küçük girerse uyaralım başlangıçtan büyük girmesini isteyelim
//Eğer kullanıcı secret-key girerse yani 44 sayısını girerse program çalışmayı direk durdursun



//NOT: örneklerimizi function,anonymous ve arrow function ile yapalım.
//NOT: değişken olarak var,let,const kullanalım.
//NOT: örneklerimizi function,anonymous ve arrow function ile yapalım.
//NOT: değişken olarak var,let,const kullanalım.
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


//++++++++++++++++++++++++++++++++++++++++++++++++++++++
// exception handling try-catch
//try catch finally
// try {
//     merhabalar
// } catch (error) {
//     console.error(error);
//     console.log(error.name);
//     console.log(error.message);
// }finally{
//     console.log("api.close()");
// }

//bazen kendimize zorunlu olarak istisnalar meydana getirmek isteriz.
//throw  "data44"
//throw new "data44"

//++++++++++++++++++++++++++++++++++++++++++++++++++++++
// debug atmak
// let data=()=>{
//     let number1=10,number2=20,number3;
//     number3=number1+number2;
//     console.log(number3);
// }

// data()



// kullanıcıdan aldığımız isim soyisim (boşluk var)
// ilk karakter göstersin sonraki kelimeleri masking (maskeleme yapsın)
// eğer kullanıcı isim ve soyisimi ilk karakteri küçük girmişse büyük olsun mutlaka
// Hamit Mızrak
// H**** MIZ***
// ipucu: charAt, substring, indexOf, döngü, karar mekanizma

let usernameAndSurnameMasking2 = () => {
    const usernameAndSurname = prompt("Adınız ve Soyadınız");
    let username, surname;

    username = usernameAndSurname.substring(0, usernameAndSurname.indexOf(" "));
    for (let i = 1; i < username.length; i++) {
        username = username.replace(username.charAt(i), "*");
    }
    console.log(username.toUpperCase());

    surname = usernameAndSurname.substring(usernameAndSurname.indexOf(" ") + 1, usernameAndSurname.length);
    for (let i = 3; i < surname.length; i++) {
        surname = surname.toLocaleUpperCase().replace(surname.charAt(i), "*");
    }
    console.log(surname.toUpperCase());
}
//usernameAndSurnameMasking2();

/*
Java ile yapıldı. 

    public static void usernameAndSurnameMasking(){
        String username,surname;
        Scanner klavye=new Scanner(System.in);
        System.out.println("Adınız ve Soyadınız");
        String usernameAndSurname=klavye.nextLine();

        username = usernameAndSurname.substring(0, usernameAndSurname.indexOf(" "));
        for (int i = 1; i < username.length(); i++) {
            username = username.replace(username.charAt(i), '*');
        }
        System.out.println(username.toUpperCase());


        surname = usernameAndSurname.substring(usernameAndSurname.indexOf(" ") + 1, usernameAndSurname.length());
        for (int i = 3; i < surname.length(); i++) {
            surname = surname.replace(surname.charAt(i), '*');
        }
        System.out.println(surname.toUpperCase());
    }

    public static void main(String[] args) {
        usernameAndSurnameMasking();
    }
}
*/
// ++++++++++++++++++++++++++++++++++++++++++++++++++++++++
// normal function 
function normal() {
    console.log("normal");
}
normal()

// anonymous function
let anonymous = function () {
    console.log("anonymous");
}
//anonymous();

// anonymous function
let arrow = () => {
    console.log("arrow");
}
//arrow()



// setTimeOut
// setTimeout(function(){
//     alert("Admin Hoşgeldiniz");
// },3000);

// callbackfunction
function birinci(number) {
    console.log("birinci: " + Math.sqrt(number));
}

function ikinci(callbackfn) {
    console.log("ikinci")
    let data = Number(prompt("Lütfen sayı giriniz"));
    callbackfn(data)
}
//ikinci(birinci);
//Monad: bir function çıktısı başkasının girdisi ise biz buna monad diyoruz.

// ++++++++++++++++++++++++++++++++++++++++++++++++++++++++
// promise
let promiseData = () => {
    // pending : bekleme
    // resolved: başarılı 
    // rejected: başarısız

    //1.
    // const promise1=new Promise((resolve,rejected)=>{
    //     resolve("Merhabalar pozitif");
    // });
    // console.log(promise1);

    //2.
    const promise1 = new Promise((resolve, rejected) => {
        rejected("Merhabalar negatif");

    });
    console.log(promise1);
}
//promiseData()

/// 

let promiseData2 = () => {

    //1.
    const promise1 = new Promise((resolve, rejected) => {
        resolve("Merhabalar pozitif");
        rejected("Merhabalar negatif");
    });
    console.log(promise1);

    promise1.then((temp) => {
        console.log(temp)
    })
        .catch((error) => {
            console.error("is not connected")
        });
}
promiseData2()



// ++++++++++++++++++++++++++++++++++++++++++++++++++++++++
// software prensible DRY, KISS, YAGNI, Dummy Code, Clean Code
// SOLID

// ++++++++++++++++++++++++++++++++++++++++++++++++++++++++
// Dizi
