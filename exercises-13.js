function countProfit(shoppers) {
  let listBarang = [ ['Sepatu Stacattu', 1500000, 10],
                     ['Baju Zoro', 500000, 2],
                     ['Sweater Uniklooh', 175000, 1]
                   ];
  var result = []
  if (shoppers.length !== 0){
    for (var i = 0; i < listBarang.length; i++){
      var obj = {}
      obj.product = listBarang[i][0]
      obj.shoppers = []
      obj.leftOver = listBarang[i][2]
      obj.totalProfit = 0
      for (var j = 0; j < shoppers.length; j++){
        if (shoppers[j].product === listBarang[i][0] && shoppers[j].amount <= obj.leftOver){
          obj.shoppers.push(shoppers[j].name)
          obj.leftOver = obj.leftOver - shoppers[j].amount
          obj.totalProfit = obj.totalProfit + (listBarang[i][1] * shoppers[j].amount)
        }
      }
      result.push(obj)
    }
  }
  return result
}
