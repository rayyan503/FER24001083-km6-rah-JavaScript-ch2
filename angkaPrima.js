// SOAL 48. Mengambil array bilangan bulat dan mengembalikan nilai salah jika setiap bilangan bukan bilangan prima. Jika tidak, kembalikan nilai true.

function test(arr_nums) {
  // Iterasi melalui setiap angka dalam array
  for (n of arr_nums) {
    // memerikasa apakah n sama dengan 1 atau lebih besar dari 2 dan habis dibagi 2 sama dengan 0
    if ((n === 1) | ((n > 2) & (n % 2 === 0))) return false; // Jika ada angka yang bukan prima, kembalikan false
  }
  return true; // Jika semua angka tidak memenuhi kondisi, kembalikan nilai true
}

// pemanggilan dengan 2 array, lalu dicetak
nums = [2, 3, 5, 7];
console.log("Array bilangan bulat asli " + nums);
console.log(
  "Dalam array tersebut, periksa setiap bilangan prima atau tidak! " +
    test(nums)
);

nums = [2, 3, 5, 7, 8];
console.log("Array bilangan bulat asli " + nums);
console.log(
  "Dalam array tersebut, periksa setiap bilangan prima atau tidak! " +
    test(nums)
);

// bilangan prima ->> memiliki 2 faktor yaitu 1 dan bilangan itu sendiri
// 2 = 1x2 dan 2x1
// 3 = 1x3 dan 3x1
// 5 = 1x5 dan 5x1
// 7 = 1x7 dan 7x1

// bukan bilangan prima
// 8 = 1x8 2x4 4x2 8x1 bilangan composit
