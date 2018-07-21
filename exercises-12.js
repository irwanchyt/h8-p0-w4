function shoppingTime(memberId, money) {
  if (memberId === ''){

     return 'Mohon maaf, toko X hanya berlaku untuk member saja'

  }else if (money <= 50000){

    return 'Mohon maaf, uang tidak cukup'
  }else if (memberId !== ''  && money >= 50000){

    var hasilObj = {}

      hasilObj.memberId = memberId
      hasilObj.money    =  money
      hasilObj.listPurchased = []

      var batas = 0

      while (money >= 50000 && batas === 0 ){

        if (money > 1500000){
          hasilObj.listPurchased.push('Sepatu Stacattu')
          money  -= 1500000

        }else if (money > 500000){
          hasilObj.listPurchased.push('baju zoro')
         money  -= 500000

        }else if (money > 250000){
          hasilObj.listPurchased.push('Baju H&N')
          money  -= 250000


        }else if(money > 175000){
          hasilObj.listPurchased.push('Sweater Uniklooh')
          money  -= 175000

        }else if (money >= 50000){
          hasilObj.listPurchased.push('Casing Handphone')
         money  -= 50000
         batas += 1
       }
      }
      hasilObj.changeMoney = money
      return hasilObj

  }
  return 'Mohon maaf, toko X hanya berlaku untuk member saja'

}

// TEST CASES
console.log(shoppingTime('1820RzKrnWn08', 2475000));
  //{ memberId: '1820RzKrnWn08',
  // money: 2475000,
  // listPurchased:
  //  [ 'Sepatu Stacattu',
  //    'Baju Zoro',
  //    'Baju H&N',
  //    'Sweater Uniklooh',
  //    'Casing Handphone' ],
  // changeMoney: 0 }
 console.log(shoppingTime('82Ku8Ma742', 170000));
// //{ memberId: '82Ku8Ma742',
// // money: 170000,
// // listPurchased:
// //  [ 'Casing Handphone' ],
// // changeMoney: 120000 }
console.log(shoppingTime('', 2475000)); //Mohon maaf, toko X hanya berlaku untuk member saja
console.log(shoppingTime('234JdhweRxa53', 15000)); //Mohon maaf, uang tidak cukup
console.log(shoppingTime()); ////Mohon maaf, toko X hanya berlaku untuk member saja
