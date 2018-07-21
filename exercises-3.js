function cariMedian(angka) {
    var hasil = angka.length%2

      if (hasil === 1){
    //kondisi ganjil masuk sini
      var jumlah = angka.length/2
          jumlah = Math.round(jumlah -1)
          //console.log(jumlah)
      // var num = Number(jumlah)
      var median = angka[jumlah]
      return median
      }
      else {

        //kondisi genap
      var jumlah = angka.length/2
      var median = (angka[jumlah] + angka[jumlah-1])/2
      return median
      /*
      var median = angka[jumlah]
      var median2 = Number(median)
          median2 = median2 + 0.5*/
      }

 }
  console.log(cariMedian([1, 2, 3, 4, 5])); // 3
  console.log(cariMedian([1, 3, 4, 10, 12, 13])); // 7
  console.log(cariMedian([3, 4, 7, 6, 10])); // 7
  console.log(cariMedian([1, 3, 3])); // 3
  console.log(cariMedian([7, 7, 8, 8])); // 7.5
