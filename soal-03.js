function getAngkaTerbesarKedua(personName) {
  // validasi apakah data berupa array
  if (!Array.isArray(personName)) {
    return "ERROR : Invalid data type";
  }

  const dataNumbers = personName.sort((a, b) => b - a);

  if (dataNumbers.length < 2) {
    return;
  }

  return dataNumbers[1];
}

const dataAngka = [9, 4, 7, 7, 4, 3, 2, 2, 8];

console.log(getAngkaTerbesarKedua(dataAngka));
console.log(getAngkaTerbesarKedua(0));
console.log(getAngkaTerbesarKedua());
