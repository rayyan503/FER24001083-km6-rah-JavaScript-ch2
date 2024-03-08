function isPrime(num) {
  // Bilangan prima lebih besar dari 1
  if (num <= 1) return false;

  // Periksa pembagian berdasarkan angka hingga akar kuadrat dari angka
  for (let i = 2; i <= Math.sqrt(num); i++) {
    if (num % i === 0) {
      // Jika bilangan habis dibagi oleh bilangan apa pun selain 1 dan bilangan itu sendiri, maka bilangan tersebut bukan bilangan prima
      return false;
    }
  }

  // Jika tidak ada pembagi yang ditemukan, bilangan adalah bilangan prima
  return true;
}

function areAllPrimes(arr) {
  // Iterasi melalui array
  for (let i = 0; i < arr.length; i++) {
    // Jika ada bilangan dalam array yang bukan bilangan prima, kembalikan salah
    if (!isPrime(arr[i])) {
      return false;
    }
  }

  // If all numbers are prime, return true
  return true;
}

// Test cases
console.log(areAllPrimes([2, 3, 5, 7])); // Output: true
console.log(areAllPrimes([2, 3, 5, 7, 8])); // Output: false
