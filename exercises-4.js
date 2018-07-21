function cariModus(arr) {

  var tampung1 = []
  var tampung2 = []


    for (var i = 0; i < arr.length-1; i++){
      //console.log(i)

      var tampung1 = []
      for (var j = i+1; j < arr.length; j++){
      // console.log(arr[j] + ' = '+arr[i])
        if (arr[i] === arr[j]){
          tampung1.push(arr[i])
          //console.log(tampung1)
        }

      }

      if (tampung1.length !== 0){
        tampung2.push(tampung1)

      }

    }
    if (tampung2.length === 0){
        return -1
    } else if (tampung2.length === 1){
        return tampung2[0][0]
    } else {
        if (tampung2[0][0] === tampung2[1][0]){
          return -1
        } else {
          return tampung2[0][0]
        }
  }
}


console.log(cariModus([10, 4, 5, 2, 4])); // 4
console.log(cariModus([5, 10, 10, 6, 5])); // 5
console.log(cariModus([10, 3, 1, 2, 5])); // -1
console.log(cariModus([1, 2, 3, 3, 4, 5])); // 3
console.log(cariModus([7, 7, 7, 7, 7])); // -1
