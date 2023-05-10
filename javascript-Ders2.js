var isimSoyisim = "Benim ad hüseyin ya senin ad nedir ya ad nedir senin"
document.write("adSoyad: " + isimSoyisim + "</br>")
document.write("length: " + isimSoyisim.length + "</br>") //length toplam karakter sayısını getirir.
document.write("indexOf: " + isimSoyisim.indexOf("ad") + "</br>") // indexof sırasını getirir

document.write("lastIndexOf: " + isimSoyisim.lastIndexOf("ad") + "</br>") // Lastindexof ise sondansırasını getirir
document.write("search:" + isimSoyisim.search("ad") + "</br>") // search sırasını getirir
document.write("slice:" + isimSoyisim.slice(0, 8) + "</br>") // slice aralığı getirir

document.write("slice:" + isimSoyisim.slice(8) + "</br>") // slice aralığı getirir

document.write("substring:" + isimSoyisim.substring(4, 15) + "</br>") //  aralığı getirir

document.write("replace:" + isimSoyisim.replace("ad", "isim") + "</br>") //  adını değiştirir
document.write("toLocaleLowerCase:" + isimSoyisim.toLocaleLowerCase() + "</br>") // hepsini küçük yapar
document.write("toLocaleUpperCase:" + isimSoyisim.toLocaleUpperCase() + "</br>") // hepsini büyük yapar

document.write("split:" + isimSoyisim.split(" ") + "</br>") // boşluk bırakır.
document.write("charAt:" + isimSoyisim.charAt(2) + "</br>") // bastan karkterin sırasını getirir.
document.write("concat:" + isimSoyisim.concat("adım", "soyadım") + "</br>") // birleştirir.


var sayı = 20
var sayıString = sayı.toString() // sayıyı strınge çevirir.
var sayıString = String(sayı) // sayıyı strınge çevirir.

document.write("sayıyı stringe çeviririz:" + sayıString + "</br>") // birleştirir.

document.write("sayı ise tersini yapar:" + isNaN(sayı) + "</br>") // isnan demek sayı ise tersini yapar
document.write("false:" + Number(false) + "</br>") // false 0 demek 
document.write("true:" + Number(true) + "</br>") // true 1 demek 
var anlikFiyat = 23.3463464

document.write("PI: " + Math.PI + "</br>")

document.write("round: " + Math.round(anlikFiyat) + "</br>") // en yakina yuvarla
document.write("ceil: " + Math.ceil(anlikFiyat) + "</br>")// tavana yuvalar
document.write("floor: " + Math.floor(anlikFiyat) + "</br>") // alta yuvalar
document.write("sqrt: " + Math.sqrt(4) + "</br>") // karekoku
document.write("pow: " + Math.pow(2, 2) + "</br>") // us alma

document.write("min: en kucugu bulur:" + Math.min(4, 2, 4, 5, -1, 10) + "</br>") //en kucugu bulur
document.write("max:en buyugu bulur: " + Math.max(4, 2, 4, 5, -1, 10) + "</br>") // en buyugu bulur

document.write("random:  rastgele deger uretir 0 ve 1 arasinda" + Math.random() + "</br>") // rastgele deger uretir 0 ve 1 arasinda

var tarih = new Date
document.write("tarih: " + tarih + "</br>") // tarihi verir
document.write("haftanın günü: " + tarih.getDay() + "</br>") // gün verir
document.write("hangi yıl: " + tarih.getFullYear() + "</br>") // yıl verir
document.write("günün saatini: " + tarih.getHours() + "</br>") // saati verir
document.write("şu ana kadar geçen zaman: " + tarih.getTime() + "</br>")
// set diyeerek zamanı değiştirebiliriz.
tarih.setFullYear(2010)

document.write("değişen tarih " + tarih + "</br>") // tarihi verir

var liste = ["elma", "armut", "üzüm", "kivi", ""]

var liste1 = new Array(1, 2, 3, 4, 5, 6, 7, 8, 9)
document.write("liste: " + liste + "</br>")
document.write("liste: " + liste[1] + "</br>")

document.write("liste uzunluğu: " + liste.length + "</br>")
liste[4] = "domates"
liste.push("armuuutttt") // listeye eleman ekleme

document.write("liste: " + liste + "</br>")
liste.pop()// sondan çıkar
document.write("liste: " + liste + "</br>")
liste.shift() //bastan çıkarır
document.write("liste: " + liste + "</br>")
liste.unshift("elma") //başa ekler
document.write("liste: " + liste + "</br>")
liste.splice(1, 0, " yenikivi", "yenimuz") // istenilen yere eklemam yapar
document.write("liste: " + liste + "</br>")
liste.splice(2, 5) // belirtilen araligi siler
document.write("liste: " + liste + "</br>")
document.write("concat: " + liste.concat(liste1) + "</br>")  // ekleme yapar
document.write("slice: " + liste1.slice(2) + "</br>")  // belirtilen eleman ve devamini verir
document.write("slice: " + liste1.slice(2, 5) + "</br>")  // belirtilen araligi getirir

var liste2 = ["elma", "armut", "uzum", "muz", "kivi"];

document.write("sort: " + liste2.sort() + "</br>")  // siralar
document.write("reverse: " + liste2.reverse() + "</br>")  // ters cevirir
document.write("sort: " + liste1.sort(function (a, b) { return a - b }) + "</br>")  // her bir degeri karsilastirir ve siralar ozellikle sayilar icin

// var alacaklarListesi = {
//      adı: "elma", fiyat: 5,
//      adı: "muz", fiyat: 7,
//      adı: "kivi", fiyat: 10, 
//      adı: "kola", fiyat: 5,
//      adı: "elma", fiyat: 5,
//      adı: "elma", fiyat: 5,
//      adı: "elma", fiyat: 5,
//      adı: "elma", fiyat: 5,
// }


// swich case-  bir değeri başka değerlerin eşitliği ile karşılaştırma yapıp bulur

switch (7) {
    case 0:
        document.write("bugun pazar" + "</br>")
        break;
        case 1:
            document.write("bugun pazartesi" + "</br>")
        break;
        case 2:
            document.write("bugun salı" + "</br>")
        break;
        case 3:
            document.write("bugun çarşamba" + "</br>")
        break;
        case 4:
            document.write("bugun perşembe" + "</br>")
        break;
        case 5:
            document.write("bugun cuma" + "</br>")
        break;
        case 6:
            document.write("bugun pazar" + "</br>")
        break;
        
    default:
        document.write("bugun gün değil" + "</br>")
        break;
}
var liste3 = ["elma", "armut", "uzum", "muz", "kivi"];

for (let i = 0; i < liste3.length; i++) {
    const element = liste3[i];
    document.write("i değeri :" +i + "elemanı :" + liste3[i] + "</br>")

}
// yukarıdakinin daha kısa hali
for ( key in liste3) {
    // if (Object.hasOwnProperty.call(object, key)) {
    //     const element = object[key];
        
    // }
    document.write("anahtar değeri :" +key + "elemanı :" + liste3[key] + "</br>")

}


// bu böyle iken çalışşsın
var sayac = 0;
while(sayac<liste3.length){
    document.write("sayac degeri " + sayac + " elemani: " + liste3[sayac] + "</br>")
    sayac++;
}

var sayac1 = 0;
do{
    document.write("sayac1 degeri " + sayac1 + " elemani: " + liste3[sayac1] + "</br>")
    sayac1++;
}while(sayac1<liste3.length)
// do elemanı diğerlerinden farkı şu önce çalışıyor sonra bakıyor. içi olmasa dahi undefinied döner 

