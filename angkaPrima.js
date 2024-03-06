// 48. Mengambil array bilangan bulat dan mengembalikan nilai salah jika setiap bilangan bukan bilangan prima. Jika tidak, kembalikan nilai true.

function test(arr_nums) {
  // Iterasi melalui setiap angka dalam array
  for (n of arr_nums) {
    // Memeriksa apakah angka saat ini sama dengan 1 atau lebih besar dari 2 dan habis dibagi 2
    if ((n == 1) | ((n > 2) & (n % 2 == 0))) return false; // Jika ada angka yang bukan prima, kembalikan false
  }
  return true; // Jika semua angka adalah prima, kembalikan true
}

// pemanggilan dengan 2 array, lalu dicetak
nums = [2, 3, 5, 7];
console.log("Original array of integers: " + nums);
console.log(
  "In the said array check every numbers are prime or not! " + test(nums)
);

nums = [2, 3, 5, 7, 8];
console.log("Original array of integers: " + nums);
console.log(
  "In the said array check every numbers are prime or not! " + test(nums)
);
