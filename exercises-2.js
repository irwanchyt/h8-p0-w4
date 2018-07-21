function fpb(angka1, angka2) {
      var tampung1 = []
      var tampung2 = []
  for ( var i = 0 ; i < angka1 ; i++){

        var hasil = angka1/(i+1)

        if(Math.floor(hasil) == hasil ){
        tampung1.push(hasil)
        }

  }

  for (var j = 0 ; j < angka2 ; j++){

        var hasil2 = angka2/(j+1)
        if(Math.floor(hasil2) == hasil2){

          tampung2.push(hasil2)
        }

  }

  var com1 = tampung1
  var com2 = tampung2

  var tampung3 = []


  for ( var k = 0 ; k < com1.length; k++){

      for(var l = 0 ; l < com2.length ; l++){
        if(com2[l] === com1[k]){

              tampung3.push(com2[l])
        }

      }
      //console.log(tampung3)
  }
  var fbr = tampung3[0]
  return fbr
}


 console.log(fpb(12, 16)); // 4
 console.log(fpb(50, 40)); // 10
 console.log(fpb(22, 99)); // 11
 console.log(fpb(24, 36)); // 12
 console.log(fpb(17, 23)); // 1
