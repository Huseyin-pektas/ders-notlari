const users = ["emre", "mehmet", "hüseyin", "esra"];


//  push arrayın sonuna eleman ekler
users.push("ayşe");

console.log('arrayın sonuna eleman ekler.ayşeyi ekledi', users)


// //  map fonksiyonu array içinde tek tek dönüyor.
users.map((item) =>
    console.log('map fonksiyonu array içinde tek tek dönüyor.', item))

const kullanıcılar = [
{
    name: "mehmet",
    age:17
},
{
    name: "mehmet",
    age:27
},
{
    name: "mehmet",
    age:24
},
{
    name: "hüseyin"
},
{
    name: "esra"
}

];

kullanıcılar.map((item) =>
    console.log('map fonksiyonu array içinde objeri de döner', item))

const bul = users.find((item)=> item.toLocaleLowerCase() === "mehmet")
console.log('mehmeti buldum', bul)

const kars = kullanıcılar.find((item)=> item.name === "mehmet" && item.age >= 25)
console.log(`mehmetleri  buldum`, kars)


// includes içinde varmı yokmu onu buluyor
var adsoyad = "benim adım hüseyin pektas ya senin adın nedir"

console.log('adsoyad:', adsoyad)