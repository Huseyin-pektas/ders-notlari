
//  set time out belirtilen dzaman diliminde çalışrız

setTimeout(()=>{
// console.log("merhaba ben 2 snye sonra çalışacağım.")
}, 2000)
setTimeout(() => {
    
}, 1000);

//  set interval durdurrana kadar sürekli çalışır.
setInterval(() => {
    // console.log("ben her 2 saniyede bir çalışacağım")
}, 10000); 

clearInterval()


var timer = setInterval(myFunction, 1000);

// // Her saniye çalışacak olan işlev
function myFunction() {
  console.log("Merhaba dünya!");
}    

// // Zamanlayıcıyı durdurma
clearInterval(timer);
// // fetch işlemi ile veiler çekilir.

fetch("https://jsonplaceholder.typicode.com/users/1")
.then((post2) => post2.json(),
  console.log(post2.json(), "<<<<< post2")
)
.then((users) => {
  //  bu işlemde önce userler sonra postlar yüklenecek
  fetch("https://jsonplaceholder.typicode.com/posts/1").then((post2)=>post2.json())
  .then((post)=>
    console.log('post', post))
  //  bu işlemi dışarıda da yapabıiliriz
  console.log((users), "<<<<< kullanıcılar")
}
  )



.catch((err) => {
  
});
//  async await asenkron fonksiyonu kullanımı her işlemi sıraya koyar
async function getData() {
  const users1 = await (await fetch("https://jsonplaceholder.typicode.com/users/1")).json();
 console.log('users1', users1)

  const post1 = await (await fetch("https://jsonplaceholder.typicode.com/posts/1")).json();
   console.log('post1', post1)

  const users2 = await (await fetch("https://jsonplaceholder.typicode.com/users/2")).json();
   console.log('users2', users2)

  const posts2 = await (await fetch("https://jsonplaceholder.typicode.com/posts/2")).json();
   console.log('posts2', posts2)
}


//  anonim fonksiyon olusturma

(async () => {
   
  const post5 = await (await fetch("https://jsonplaceholder.typicode.com/posts/2")).json();
  console.log('bu post 5 ', post5)
  
  
})();

