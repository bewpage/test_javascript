// zadanie ze znalezieniem sumy liczb parzystych dla liczby n
// // var n = 10;
//
// var function getEvenArray(n) {
//   var arr = [];
//
//   for (var i = 0; i <= n; i++) {
//     if (i%2 === 0) {
//       arr.push(i);
//     }
//   }
//   return arr;
// };
// console.log(getEvenArray(10));
//
//
//   var sum = 0;
//   for (var y = 0; y <= arr.length; sum += arr[y++]){
//     // console.log(sum);
//   }
//   return sum;
//
// console.log(getEvenSum(10));


//
// var n = 10;
// var arr = [];
// var sum = 0;
//
//
// function newArrayEven (n) {
//   var arr = [];
//
//   for (var i = 0; i <= n; i++) {
//     if (i%2 === 0) {
//       arr.push(i);
//     }
//     return arr;
//   }
// }
//
// function sumEven ()
//   for (var y = 0; y <= arr.length; sum += arr[y++]){
//     console.log(sum);
//   }

// var n = 8;
// var sum = 0;


function sumEven (n) {
  var sum = 0;
  for (var i = 0; i <= n; i++) {
    if (i%2 === 0) {
      sum += i;
    }
  }
  return sum;
};


console.log(sumEven(10));
