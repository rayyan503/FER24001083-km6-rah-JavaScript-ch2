function changeWord(selectedText, changedText, text) {
  return text.replace(selectedText, changedText); //mengembalikan nilai string teks yang diganti dari kedua parameter
}

const kalimat1 = "Andini sangat mencintai kamu selamanya";
const kalimat2 =
  "Gunung bromo tak akan mampu menggambarkan besarnya cintaku padamu";

//lalu function tersebut dipanggil dengan variabel kalimat1 dan kalimat 2
console.log(changeWord("mencintai", "membenci", kalimat1));
console.log(changeWord("bromo", "semeru", kalimat2));
