function ubahHuruf(kata) {
  var kataS= kata.split('')
  var alfabet = 'abcdefghijklmnopqrstuvwxyz'
  var alfabetS= alfabet.split('')

  var tampung1 = []

    for(var i = 0 ; i < kataS.length; i++){

      //console.log(kata[i])
      for(var j = 0 ; j < alfabetS.length ; j++){

          if(kataS[i] === alfabetS[j]){

            var balik = alfabetS[j+1]
              tampung1.push(balik)

            }
        }

    }
   //console.log(tampung1)
  var tampung2 = ''

    for(var k = 0 ; k < tampung1.length ; k++ ){
            tampung2 += tampung1[k]
      //console.log(tampung1[k])
    }
    return tampung2

}


console.log(ubahHuruf('wow')); // xpx
console.log(ubahHuruf('developer')); // efwfmpqfs
console.log(ubahHuruf('javascript')); // kbwbtdsjqu
console.log(ubahHuruf('keren')); // lfsfo
console.log(ubahHuruf('semangat')); // tfnbohbu
