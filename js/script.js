var penumpang = [];
var tambahPenumpang = function (namaPenumpang, penumpang) {
  //jika angkot kosong
  if (penumpang.length == 0) {
    penumpang.unshift(namaPenumpang); // tambah penumpang di awal array
    console.log(penumpang); // kembalikan isi array & keluar dari function
  }

  //else
  // telusuri seluruh kursi dari awal
  // jika ada kursi kosong
  // tambah penumpang di kursi tersebut
  // kembalikan isi array & keluar dari function
  // jika sudah ada nama yang sama
  // tampilkan pesan kesalahannya
  // kembalikan isi array & keluar dari function
  // jika seluruh kursi terisi
  // tambah penumpang di akhir array
  // kembalikan isi array & keluar dari function
};

tambahPenumpang("Dani", penumpang);
