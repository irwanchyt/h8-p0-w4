function kaliTerusRekursif(angka) {
  var angkaStr = String(angka)
  var hasil = 1
  for (var i = 0; i < angkaStr.length; i++){
    hasil = hasil * Number(angkaStr[i])
  }
  if (String(hasil).length === 1){
    return Number(hasil)
  }
  return kaliTerusRekursif(Number(hasil))
}
