// document sayfaya erişöeyi sağlıyor.
//  wite içinde tek vey  çift tırnak yazdırırız

document.write("merhaba dünya"+"</br></br>")


//  değişkenler var let const ile tanımlarız. Var (veriable) den gelir
var isim = "Hüseyin "
document.write("Benim adım:"+"  "+ isim +"</br>") // string ifade

var yas = 20
var havaYagmurluMu = false
document.write("benim adım " + isim + "benim yasım: " + yas + " </br>" 
+ "hava yağmuru: " + havaYagmurluMu + " </br>", " </br>" )

 var sayı1 = 4
 var sayı2 = 5 
 var toplam = (sayı1 +sayı2)
 document.write ("toplam sonuç: " + toplam +"</br>" )
 var cıkar =(sayı2-sayı1)
 document.write ("fark sonuç: " + cıkar +"</br>" )


 var carp = (sayı1*sayı2)
 document.write ("carpım sonucu: " + carp +"</br>" )

 var bolme = (sayı1/sayı2);

 document.write ("bölüm sonuç: " + bolme +"</br>" )


 var deger = 4 

 deger++ 
 document.write ("simdiki  deger: " + deger +"</br>" )

 deger--
 document.write ("simdiki  deger: " + deger +"</br>" )

 deger += 2
 document.write ("simdiki  deger: " + deger +"</br>" )
 deger -= 2
 document.write ("simdiki  deger: " + deger +'\n' +"</br>") // ters slas n alt satıra geçirir.

 document.write ("simdiki  deger: " + deger +"</br>" )


var ilksayı = 5
var ikinciSayı = 9

if (ilksayı> ikinciSayı) {
    document.write ("bu ifade doğrudur " ,"</br>" ) 
} else {
    document.write ("bu ifa de yanlıştır","</br>" ) 
}
if (ilksayı>= ikinciSayı) {
    document.write ("bu ifade doğrudur " ,"</br>" ) 
} else {
    document.write ("bu ifa de yanlıştır","</br>" ) 
}

if (ilksayı< ikinciSayı) {
    document.write ("bu ifade doğrudur " ,"</br>" ) 
} else {
    document.write ("bu ifa de yanlıştır","</br>" ) 
}

if (ilksayı = 4) {
    document.write ("ilk sayı 4 tür " ,"</br>" ) 
} 

if (ilksayı != 4) {
    document.write ("sonuç yanlış oldu " ,"</br>" ) 
} else{
    document.write ("sonuç yanlış oldu " ,"</br>" ) 
}

if (ilksayı !== 4) {
    document.write ("sonuç yanlış oldu " ,"</br>" ) 
} else if (ilksayı = 5) {
    document.write ("ilk sayı 5 " ,"</br>" ) 
}else{
    document.write ("sonuç yanlış oldu " ,"</br>" ) 
}

// 3 eşittir hem içerik hem de tipine bakar

 var birsayı = 6;

if (birsayı !== '4') {
    document.write ("ilk sayı 6 tür " + "</br>" ) 
} 

if (birsayı === 6) {
    document.write ("ilk sayı 6 tür " + "</br>" ) 
} 

if (ilksayı == 5 && ikinciSayı == 9) {
    document.write ("ilk sayı 4 tür ve ikinc isayı 9 dur " ,"</br>" ) 
} 

//  burada kısaca if else kullandık .soru işareti - ise  ve iki nokta - değilse anlamında
//  bunun adı tek satırda if else yapma -ternary operatörü
var kisiyas = 18
var sonuc = kisiyas >= 18 ? "ehliyet alabilir": " ehliyet alamaz"


document.write ("sonuç: " + sonuc+"</br>" ) 
//  mümkün olduğunca isimlendirmeler türkçe karakter kullanma

// eğer sayı ile string ifadeyi toplarsak yanyana yazar
var islem = 2 + "2"
document.write ("eğer sayı ile string ifadeyi toplarsak yanyana yazar " + islem +"</br>" ) 



//  fonksiyonlar

function toplama(){
    var x = 15
    var y = 23
    var topla = x+y
    document.write ("toplama " + topla +"</br>" ) 

}

toplama()

//  fonksiyonu kaç defa çağırırsan o kadar gelir

function cikarma (a,b){
    var cikar = a - b
    document.write ("çıkarma sonucu " + cikar +"</br>" ) 
} 

cikarma(30,20)

function carpma(a,b) {

    var carpma = a*b
    return carpma
}
var carpımSonuc = carpma(7,5)
document.write ("carpma sonucu " + carpımSonuc +"</br>" ) 


//  bir nesneyi şu şekilde tanımlama yapacağiğım

var kisiBilgi = {
    ad:"Hüseyin",
    Soyadı :"Pektaş",
    yas :30,
    kos:function(){
        document.write ("Dumadan koşuyorum"+"</br>" ) 
    }
}
document.write ("Benim adım :" + kisiBilgi.ad +"</br>" ) 
document.write ("Benimn soyadım :" + kisiBilgi.Soyadı +"</br>" ) 
document.write ("Benimn yaşım: " + kisiBilgi.yas +"</br>" ) 
kisiBilgi.kos()  // burada kişibilgi içindeki kos fonksiyonunu çağırıyoruz


/*
bazı kısayollar var :
onchange : element değiştiğinde ,
..............

*/
//  promp şu demektir . kullanıcıdan değer almaktır

// Kullanicidan alinan 2 adet sayidan buyuk olani bulup ekrana yazdiran
// bir proje yaziniz

// 1.yol
var alınanSayı1 = prompt("1.sayı giriniz")
var alınanSayı2 = prompt("2.sayı giriniz")

if (alınanSayı1>alınanSayı2){
    document.write ("sayı1  büyüktür "+" sayı2 değeri: " +alınanSayı1+"</br>") 

}else if(alınanSayı1<alınanSayı2){
    document.write (" sayı2  büyültür "+ " sayı2 değeri: " +alınanSayı2+"</br>" ) 
} else {
    document.write ("sayılar birbirine eşittir. "+"</br>" ) 
}


// 2.yol
// var alinanSayi1 = prompt('1. sayiyi gir'); // 10
// var alinanSayi2 = prompt('2. sayiyi gir'); // 20 DOM

// if (alinanSayi1 == alinanSayi2) {
//     ozelp.innerHTML = "sayilar esit"
// } else if(alinanSayi1 > alinanSayi2){
//     ozelp.innerHTML = "1. sayi buyuktur " + alinanSayi1
// } else {
//     ozelp.innerHTML = "2. sayi buyuktur " + alinanSayi2
// }
