const dataPenjualanNovel = [
  {
    idProduct: "BOOK992421",
    namaProduct: "Pulang - Pergi",
    penulis: "Tere Liye",
    hargaBeli: 68888,
    hargaJual: 86888,
    totalTerjual: 158,
    sisaStok: 17,
  },
  {
    idProduct: "BOOK982351",
    namaProduct: "Selamat Tinggal",
    penulis: "Tere Liye",
    hargaBeli: 75888,
    hargaJual: 183888,
    totalTerjual: 171,
    sisaStok: 28,
  },
  {
    idProduct: "BOOK992941",
    namaProduct: "Garis Waktu",
    penulis: "Fiersa Besari",
    hargaBeli: 67888,
    hargaJual: 99888,
    totalTerjual: 213,
    sisaStok: 5,
  },
  {
    idProduct: "BOOK882941",
    namaProduct: "Laskar Pelangi",
    penulis: "Andrea Hirata",
    hargaBeli: 55888,
    hargaJual: 68888,
    totalTerjual: 28,
    sisaStok: 56,
  },
];

function getInfoPenjualan(dataPenjualan) {
  // Menginisialisasi variabel untuk total keuntungan, total modal, dan objek untuk menyimpan data buku terlaris
  let totalKeuntungan = 0;
  let totalModal = 0;
  let produkBukuTerlaris = { namaProduct: "", totalTerjual: 0 };
  let penulisTerlaris = { penulis: "", totalTerjual: 0 };

  // Menghitung total keuntungan dan total modal
  dataPenjualan.forEach((buku) => {
    totalKeuntungan += (buku.hargaJual - buku.hargaBeli) * buku.totalTerjual;
    totalModal += buku.hargaBeli * buku.totalTerjual;

    // Memeriksa apakah buku saat ini adalah buku terlaris
    if (buku.totalTerjual > produkBukuTerlaris.totalTerjual) {
      produkBukuTerlaris.namaProduct = buku.namaProduct;
      produkBukuTerlaris.totalTerjual = buku.totalTerjual;
    }

    // Memeriksa apakah penulis saat ini adalah penulis terlaris
    if (buku.totalTerjual > penulisTerlaris.totalTerjual) {
      penulisTerlaris.penulis = buku.penulis;
      penulisTerlaris.totalTerjual = buku.totalTerjual;
    }
  });

  // Menghitung persentase keuntungan
  const persentaseKeuntungan = ((totalKeuntungan / totalModal) * 100).toFixed(
    2
  );

  // Mengembalikan hasil dalam bentuk objek
  return {
    totalKeuntungan: "Rp." + totalKeuntungan,
    totalModal: "Rp." + totalModal,
    persentaseKeuntungan: persentaseKeuntungan + "%",
    produkBukuTerlaris,
    penulisTerlaris,
  };
}

console.log(getInfoPenjualan(dataPenjualanNovel));
