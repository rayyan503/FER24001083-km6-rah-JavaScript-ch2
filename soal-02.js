const checkTypeNumber = (givenNumber) => {
  // Memeriksa apakah givenNumber merupakan angka
  if (typeof givenNumber !== "number") {
    return "Error: Invalid data type";
  }

  // Menentukan givenNumber adalah genap atau ganjil
  if (givenNumber % 2 === 0) {
    return "GENAP";
  } else {
    return "GANJIL";
  }
};

console.log(checkTypeNumber(10));
console.log(checkTypeNumber(3));
console.log(checkTypeNumber("3"));
console.log(checkTypeNumber({}));
console.log(checkTypeNumber([]));
console.log(checkTypeNumber());
