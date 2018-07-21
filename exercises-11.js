function changeMe(arr) {

  var biodataObj = {}
  var tahun = 2018



  for(var i = 0 ; i < arr.length ; i++ ){

        console.log(i + 1 +'.'+ arr[i][0]+' ' + arr[i][1])
        biodataObj.firstName = arr[i][0]
        biodataObj.lastName  = arr[i][1]
        biodataObj.gender    = arr[i][2]
        //biodataObj.age       = tahun - arr[i][3]
         if (arr[i][3] > tahun || arr[i][3] === undefined ){
          biodataObj.age       = 'Invalid Birth Year'
        }else {

          biodataObj.age       = tahun - arr[i][3]
        }

        console.log(biodataObj)
  }


}

// TEST CASES
changeMe([['Christ', 'Evans', 'Male', 1982], ['Robert', 'Downey', 'Male']]);
// 1. Christ Evans:
// { firstName: 'Christ',
//   lastName: 'Evans',
//   gender: 'Male',
//   age: 36 }
// 2. Robert Downey:
// { firstName: 'Robert',
//   lastName: 'Downey',
//   gender: 'Male',
//   age: 'Invalid Birth Year' }
changeMe([]); // ""
