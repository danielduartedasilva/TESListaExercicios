//Utilizando o sort do javaScript
let num = [];
for(let i=0; i < 5;i++){
num.push(Math.floor(Math.random() * 10));
}
console.log(num);

function ordenaNum(a,b) {
     return a - b;
}
num.sort(ordenaNum);
console.log(num);

//No jeito tradicional
// let num = [];
// for(let i=0; i < 5;i++){
// num.push(Math.floor(Math.random() * 10));
// }
// console.log(num);
// let aux;
// for (let i = 0; i < 5; i++) {
//      for (let j = i; j < 5; j++) {
//            if (num[i] > num[j]) {
//                  aux = num[i];
//                  num[i] = num[j];
//                  num[j] = aux;
//           }
//      }
// }
// console.log(num);