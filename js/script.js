// var penumpang = ["Dani", "JH", "Hairudin"];
var penumpang = [];
var tambahPenumpang = function (namaPenumpang, penumpang) {
  //jika angkot kosong
  if (penumpang.length == 0) {
    // tambah penumpang di awal array
    penumpang.unshift(namaPenumpang);
    // kembalikan isi array & keluar dari function
    return penumpang;
    //else
  } else {
    // telusuri seluruh kursi dari awal
    //
    for (var i = 0; i <= penumpang.length; i++) {
      // jika ada kursi kosong
      // var penumpangLama = penumpang.find(function (e) {
      //   return e == penumpang[i];
      // });
      if (penumpang[i] === namaPenumpang) {
        // tambah penumpang di kursi tersebut
        console.log(namaPenumpang + " sudah ada di dalam angkot!");
        // console.log(penumpang.join());
        // kembalikan isi array & keluar dari function
        return penumpang;
        // jika sudah ada nama yang sama
      } else {
        if (penumpang[i] == undefined) {
          // tampilkan pesan kesalahannya
          penumpang[i] = namaPenumpang;
          // kembalikan isi array & keluar dari function
          return penumpang;
          // jika seluruh kursi terisi
        } else if (i == penumpang.length - 1) {
          // tambah penumpang di akhir array
          penumpang.push(namaPenumpang);
          // kembalikan isi array & keluar dari function
          return penumpang;
        }
      }
    }
  }
};

var hapusPenumpang = function (namaPenumpang, penumpang) {
  // jika angkot kosong
  if (penumpang.length == 0) {
    // tampilkan pesan bahwa angkot kosong, dan
    console.log("Angkot masih kosong, tidak ada penumpang yg turun!");
    // tidak mungkin ada penumpang turun
    // kembalikan isi array & keluar dari function
    return penumpang;
    // else
  } else {
    // telusuri seluruh kursi dari awal
    for (var h = 0; h <= penumpang.length; h++) {
      // jika ada nama penumpang sesuai
      if (penumpang[h] == namaPenumpang) {
        // hapus penumpang dengan mengubah
        penumpang[h] = undefined;
        // namanya menjadi undefined
        // kembalikan isi array & keluar dari function
        return penumpang;
      } else {
        // jika tidak ada nama yg sesuai
        console.log(namaPenumpang + " tidak ada dalam angkot!");
        // tampilkan pesan kesalahannya
        // kembalikan isi array & keluar dari function
        return penumpang;
      }
    }
  }
};
