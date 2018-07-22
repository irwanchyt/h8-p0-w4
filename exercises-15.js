function changeVocals (str) {

  var alfa = 'abcdefghijklmnopqrstuvwxyz'
  var hasil = ''
    for (var i = 0; i < str.length; i++){
      //console.log(str[i])
      //console.log(hasil)
      switch (str[i]){
        case 'a' : {hasil += alfa[1];break;}
        case 'A' : {hasil += alfa[1].toUpperCase();break;}
        case 'i' : {hasil += alfa[9];break;}
        case 'I' : {hasil += alfa[9].toUpperCase();break;}
        case 'u' : {hasil += alfa[21];break;}
        case 'U' : {hasil += alfa[21].toUpperCase();break;}
        case 'e' : {hasil += alfa[5];break;}
        case 'E' : {hasil += alfa[5].toUpperCase();break;}
        case 'o' : {hasil += alfa[15];break;}
        case 'O' : {hasil += alfa[15].toUpperCase();break;}
        default : {hasil += str[i];}
      }
    }
    return hasil
}
//console.log(changeVocals('jakarta'))

function reverseWord (str) {
   var b =  changeVocals (str)
   b = b.split('')
   var balik = b.reverse().join('')
  return balik
}

//console.log(reverseWord ('jaka))
function setLowerUpperCase (str) {

 var hasil2 = ''
  for (var i = 0; i < str.length; i++){
    if (str[i] === str[i].toUpperCase()){
      hasil2 += str[i].toLowerCase()
    } else if (str[i] === str[i].toLowerCase()){
      hasil2 +=  str[i].toUpperCase()
    }
  }
  return hasil2


}

function removeSpaces (str) {
var hasil3 = ''
  for (var i = 0; i < str.length; i++){
    if (str[i] !== ' '){
      hasil3 += str[i]
    }
  }
  return hasil3
}

function passwordGenerator (name) {

if (name.length < 5){
    return 'Minimal karakter yang diinputkan adalah 5 karakter'
  } else {
  var listChangeVoc = changeVocals (name)
  var listReverse = reverseWord (listChangeVoc)
  var listSetLowUp = setLowerUpperCase (listReverse)
  var listRemoveSpace = removeSpaces (listSetLowUp)
  return listRemoveSpace
  }
}
console.log(passwordGenerator('Sergei Dragunov'))
console.log(passwordGenerator('Dimitri Wahyudiputra')); // 'BRTVPJDVYHBwJRTJMJd'
console.log(passwordGenerator('Alexei')); // 'JFXFLb'
console.log(passwordGenerator('Alex')); // 'Minimal karakter yang diinputkan adalah 5 karakter'
