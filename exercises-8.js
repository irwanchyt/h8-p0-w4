function urutkanAbjad(str) {


  var strS= str.split('')
  var alfabet = 'abcdefghijklmnopqrstuvwxyz'
  var alfabetS= alfabet.split('')
  //console.log(alfabet.length)
  var tamp1 = []

  for(var i = 0 ; i < alfabet.length ;i++){

    for(var j = 0 ; j < strS.length ; j++){
          if(alfabetS[i] === strS[j]){


            tamp1.push(alfabetS[i])
          }

    }



  }
    var tamp2 = ''
  for(var k = 0 ; k < tamp1.length ; k++){
    tamp2 += tamp1[k]

  }
 return tamp2

}


console.log(urutkanAbjad('hello')); // 'ehllo'
console.log(urutkanAbjad('truncate')); // 'acenrttu'
console.log(urutkanAbjad('developer')); // 'deeeloprv'
console.log(urutkanAbjad('software')); // 'aeforstw'
console.log(urutkanAbjad('aegis')); // 'aegis'
