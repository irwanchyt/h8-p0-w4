function hitungHuruf(kata) {
  var arr = kata.split(' ');
  var countSementara = 0;
  var hasil = -1;
  for (var i = 0; i < arr.length; i++) {
    var isi = arr[i].split('');
    for (var p = 0; p < isi.length; p++) {
      for (var j = 0; j < isi.length; j++) {
        var count = 0;
        if (isi[j] === isi[p] && j !== p) {
          count++;
        }
        if (count > countSementara) {
          countSementara = count;
          hasil = arr[i];
        }
      }
    }
  }
  return hasil;
}


// TEST CASES
console.log(hitungHuruf('Today, is the greatest day ever')); // greatest
