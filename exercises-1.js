function angkaPrima(angka) {
  // you can only write your code here!


  for (var i = 0 ; i < angka ; i++){


  }
      if( i === 0 || i ===  1){

        return false

      }

        else if (i === 2 || i === 3 || i === 5 || i === 7 ){
        return true

      } else if (i%5 === 0|| i%7 === 0 || i%2 === 0 || i%3 === 0) {

        return false

      } else  {

        return true
     }
}

// TEST CASES
console.log(angkaPrima(3)); // true
console.log(angkaPrima(7)); // true
console.log(angkaPrima(6)); // false
console.log(angkaPrima(23)); // true
console.log(angkaPrima(33)); // false
