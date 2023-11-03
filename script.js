function generateTriangle(event) {
  event.preventDefault(); // agar tidak refresh saat submit

  // jangan dihapus atau diubah
  let tinggi = parseInt(document.getElementById("tinggiSegitiga").value);
  let karakter = document.getElementById("karakter").value;

  if (Number.isInteger(tinggi) && tinggi > 0) { //Sudah diperbaiki
    let segitiga = ""; 
    for (let i = 1; i <= tinggi; i++) { //Sudah diperbaiki
      for (let j = 1; j <= tinggi - i; j++) { //Sudah diperbaiki
        segitiga += "&nbsp;&nbsp;";
      }
      for (let k = 1; k <= 2 * i - 1; k++) { //Sudah diperbaiki
        segitiga += karakter;
      }
      segitiga += "<br>";
    }

    // jangan dihapus atau diubah
    document.getElementById("triangleResult").innerHTML = segitiga;
  } else {
    document.getElementById("triangleResult").innerHTML = "Tinggi segitiga harus berupa bilangan bulat positif.";
  }
}