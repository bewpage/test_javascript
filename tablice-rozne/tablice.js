//extra
//funkcja sprawdza czy dana liczba jest w tablicy i tworzy nowa z ta liczba
//w zaleznosci ile jest takich samych liczb taka dluga jest tablica
function addTheSameNumber(num, array){
  var sumArray = [];
  for (var i = 0; i < array.length; i++) {
    if(array[i] === num) {
      sumArray.push(array[i]);
    }
  }
return sumArray;
}

console.log(addTheSameNumber(7,[4,7,24,7,0,10]));
console.log(addTheSameNumber(9,[33,54,2,1,9,100]));
console.log(addTheSameNumber(0,[33,0,2,0,9,0]));
console.log(addTheSameNumber(43,[6,0,2,2,3,46]));
