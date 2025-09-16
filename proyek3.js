const materiTemplate = {
    konversiDolar: {
        judul: "Konversi Dolar ke Rupiah",
        deskripsi: "Masukkan jumlah dolar yang ingin dikonversi ke rupiah",
        form: `
            <div class="form-group">
                <label for="jumlahDolar">Jumlah Dolar:</label>
                <input type="number" id="jumlahDolar" placeholder="Masukkan jumlah dolar">
            </div>
            <div class="form-group">
                <label for="kursRupiah">Kurs Rupiah per USD:</label>
                <input type="number" id="kursRupiah" placeholder="Masukkan kurs rupiah">
            </div>
            <button class="btn-hitung" onclick="hitungKonversiDolar()">Hitung Konversi</button>
        `
    },

    rataRata: {
        judul: "Hitung Rata-rata Siswa",
        deskripsi: "Masukkan nilai untuk menghitung rata-rata",
        form: `
            <div class="form-group">
                <label for="nilaiMtk">Nilai Matematika:</label>
                <input type="number" id="nilaiMtk" placeholder="Contoh: 80">
            </div>
            <div class="form-group">
                <label for="nilaiBindo">Nilai Bahasa Indonesia:</label>
                <input type="number" id="nilaiBindo" placeholder="Contoh: 90">
            </div>
            <div class="form-group">
                <label for="nilaiIpa">Nilai IPA:</label>
                <input type="number" id="nilaiIpa" placeholder="Contoh: 85">
            </div> 
            <button class="btn-hitung" onclick="hitungRataRata()">Hitung Rata-rata</button>
        `
    },

    bagiApel: {
        judul: "Pembagian Apel ke Keranjang",
        deskripsi: "Hitung pembagian apel per keranjang",
        form: `
            <div class="form-group"> 
                <label for="jumlahApel">Jumlah Apel:</label>
                <input type="number" id="jumlahApel" placeholder="Contoh: 53">
            </div>
            <div class="form-group">
                <label for="jumlahKeranjang">Jumlah Keranjang:</label>
                <input type="number" id="jumlahKeranjang" placeholder="Contoh: 5">
            </div>
            <button class="btn-hitung" onclick="bagiApel()">Hitung Pembagian</button>
        `
    },

    waktuTempuh: {
        judul: "Hitung Waktu Tempuh",
        deskripsi: "Hitung waktu tempuh berdasarkan jarak dan kecepatan",
        form: `
            <div class="form-group">
                <label for="jarak">Jarak Tempuh (km):</label>
                <input type="number" id="jarak" placeholder="Contoh: 360">
            </div>
            <div class="form-group">
                <label for="kecepatan">Kecepatan Rata-rata (km/jam):</label>
                <input type="number" id="kecepatan" placeholder="Contoh: 90">
            </div>
            <button class="btn-hitung" onclick="hitungWaktu()">Hitung Waktu Tempuh</button>
        `
    },

    diskon: {
        judul: "Hitung Diskon Baju",
        deskripsi: "Hitung harga setelah diskon",
        form: `
            <div class="form-group">
                <label for="hargaAsli">Harga Asli (RP):</label>
                <input type="number" id="hargaAsli" placeholder="Contoh: 200000">
            </div>
            <div class="form-group">
                <label for="persenDiskon">Diskon (%):</label>
                <input type="number" id="persenDiskon" placeholder="Contoh: 20">
            </div>
            <button class="btn-hitung" onclick="hitungDiskon()">Hitung Harga Setelah Diskon</button>
        `
    },

    hargaBeras: {
        judul: "Analisa Harga Beras",
        deskripsi: "Analisa perubahan harga beras",
        form: `
            <div class="form-group">
                <label for="hargaNormal">Harga Lama per kg:</label>
                <input type="number" id="hargaLama" placeholder="Masukkan harga lama">
            </div>
            <div class="form-group">
                <label for="hargaBaru">Harga Baru per kg:</label>
                <input type="number" id="hargaBaru" placeholder="Masukkan harga baru">
            </div>
            <div class="form-group">
                <label for="jumlahKg">Jumlah Beras yang Dibutuhkan (kg):</label>
                <input type="number" id="jumlahKg" placeholder="Masukkan jumlah kg">
            </div>
            <button class="btn-hitung" onclick="hitungHargaBeras()">Analisa Harga</button>
        `
    },

    startupFintech: {
        judul: "Pertumbuhan Startup Fintech",
        deskripsi: "Hitung proyeksi pertumbuhan startup fintech",
        form: `
            <div class="form-group">
                <label for="awal">Pengguna Awal:</label>
                <input type="number" id="awal" required>
            </div>
            <div class="form-group">
                <label for="sekarang">Pengguna Sekarang:</label>
                <input type="number" id="sekarang" required>
            </div>
            <button class="btn-hitung" onclick="hitungPertumbuhan()">Hitung</button>
        `
    },

    operasiAritmatika: {
        judul: "Operasi Aritmatika Dasar",
        deskripsi: "Hitung hasil penjumlahan, pengurangan, perkalian, pembagian, dan sisa bagi dari dua angka yang kamu masukkan.",
        form: `
          <div class="form-group">
               <label for="angka1">Angka Pertama:</label>
               <input type="number" id="angka1" placeholder="Masukkan angka pertama">
          </div>
          <div class="form-group">
               <label for="angka2">Angka kedua:</label>
               <input type="number" id="angka2" placeholder="Masukkan angka kedua">
          </div>
          <button class="btn-hitung" onclick="penjumlahan()">Hitung Penjumlahan</button>
          <button class="btn-hitung" onclick="pengurangan()">Hitung Pengurangan</button>
          <button class="btn-hitung" onclick="perkalian()">Hitung Perkalian</button>
          <button class="btn-hitung" onclick="pembagian()">Hitung Pembagian</button>
          <button class="btn-hitung" onclick="sisabagi()">Hitung Sisa Bagi</button>`
    }
}

document.getElementById('pilihanSoal').addEventListener('change', function() {
    const nilaiTerpilih = this.value;
    const formContainer = document.getElementById('formLatihan');
            
    if (nilaiTerpilih === '') {
        formContainer.innerHTML = '<p>Silahkan pilih latihan terlebih dahulu</p>'
        return
    }

    const template = materiTemplate[nilaiTerpilih];

    if (template) {
        formContainer.innerHTML = `
        <div class="container-muncul">
           <h3>${template.judul}</h3>
           <p>${template.deskripsi}</p>
           ${template.form} 
        </div>
        `
    }
});

function hitungKonversiDolar() {
    const dolar = parseFloat(document.getElementById("jumlahDolar").value);
    const kurs = 15000;
    const rupiah = dolar * kurs;
    
    const tampilHasil = document.getElementById("tampilHasil");
    
    tampilHasil.innerHTML = `
        <div class="hasil-output">
            <h4>Hasil Konversi:</h4>
            <p>${dolar} USD = Rp ${rupiah.toLocaleString('id-ID')}</p>
            <p>Kurs yang digunakan: Rp ${kurs.toLocaleString('id-ID')} per USD</p>
        </div>
    `;
}

function hitungRataRata() {
    const matematika = parseFloat(document.getElementById("nilaiMtk").value);
    const bahasaIndonesia = parseFloat(document.getElementById("nilaiBindo").value);
    const ipa = parseFloat(document.getElementById("nilaiIpa").value);

    const jumlahNilai = matematika + bahasaIndonesia + ipa;
    const rataRata = jumlahNilai / 3;
    const rataRataBulat = rataRata.toFixed(2);
    const tampilHasil = document.getElementById("tampilHasil");
    
    tampilHasil.innerHTML = `
       <div class="hasil-output">
          <h4>Hasil Rata-rata</h4>
          <p>Jumlah nilai siswa tersebut adalah ${jumlahNilai}</p>
          <p>Jadi rata-rata nilai siswa tersebut adalah ${rataRataBulat}</p>
       </div
   `;
}

function bagiApel() {
    const totalApel = parseFloat(document.getElementById("jumlahApel").value);
    const totalKeranjang = parseFloat(document.getElementById("jumlahKeranjang").value);

    const apelPerKeranjang = Math.floor(totalApel / totalKeranjang);
    const sisaApel = totalApel % totalKeranjang;
    const tampilHasil = document.getElementById("tampilHasil"); 

    tampilHasil.innerHTML = `
       <div class="hasil-output">
         <h4>Hasil Pembagian Apel:</h4>
         <p>Total Apel: ${totalApel}</p>
         <p>Total Keranjang: ${totalKeranjang}</p>
         <p>Apel per Keranjang Ada: ${apelPerKeranjang}</p>
         <p>Sisa Apel yang Tersisa Ada: ${sisaApel}</p>
        </div>
    `;
}

function hitungWaktu() {
    const jarakTempuh = parseFloat(document.getElementById("jarak").value);
    const kecepatanRataRata = parseFloat(document.getElementById("kecepatan").value);

    const waktuJam = jarakTempuh / kecepatanRataRata;
    const waktuJamFormat = waktuJam.toFixed(2);
    const tampilHasil = document.getElementById("tampilHasil");

    tampilHasil.innerHTML = `
       <div class="hasil-output">
          <h4>Hasil Perhitungan Waktu:</h4>
          <p>Jarak: ${jarakTempuh} km</p>
          <p>Kecepatan: ${kecepatanRataRata} km/jam</p>
          <p>Waktu Tempuh: ${waktuJamFormat} jam</p>
        `;
}

function hitungDiskon() {
    const hargaAwal = parseFloat(document.getElementById("hargaAsli").value);
    const persentaseDiskon = parseFloat(document.getElementById("persenDiskon").value);

    const jumlahDiskon = hargaAwal * (persentaseDiskon / 100);

    
    const hargaSetelahDiskon = hargaAwal - jumlahDiskon;

    const hargaAwalFormat = hargaAwal.toLocaleString('id-ID');
    const jumlahDiskonFormat = jumlahDiskon.toLocaleString('id-ID');
    const hargaFinalFormat = hargaSetelahDiskon.toLocaleString('id-ID');
    const tampilHasil = document.getElementById("tampilHasil");

    tampilHasil.innerHTML = `
       <div class="hasil-output">
          <h4>Hasil Perhitungan Diskon</h4>
          <p>Harga Asli: RP ${hargaAwalFormat}</p>
          <p>Diskon ${persentaseDiskon}%: ${jumlahDiskonFormat}</p>
          <p>Harga Setelah Diskon: ${hargaFinalFormat}</p>
        `;
}

function hitungHargaBeras() {
    const hargaLama = parseInt(document.getElementById("hargaLama").value);
    const hargaBaru = parseInt(document.getElementById("hargaBaru").value);
    const jumlahKg = parseInt(document.getElementById("jumlahKg").value);

    const totalLama = hargaLama * jumlahKg;
    const totalBaru = hargaBaru* jumlahKg;
    const selisih = totalBaru - totalLama;
    const tampilHasil = document.getElementById("tampilHasil");

    let kategori = "";
    if (selisih < 100000) {
        kategori = "Masih Tertahan";
    } else if (selisih < 200000) {
        kategori = "Mulai Berat";
    } else if (selisih < 300000) {
        kategori = "Sangat Berat";
    } else {
        kategori = "Krisis";
    }

    tampilHasil.innerHTML = `
       <div class="hasil-output">
          <h4>Analisa Harga Beras</h4>
          <p>Harga Lama: ${hargaLama.toLocaleString('id-ID')}/kg</p>
          <p>Harga Baru: ${hargaBaru.toLocaleString('id-ID')}/kg</p>
          <p>Jumlah Beras: ${jumlahKg} kg</p>
          <p>Selisihnya: ${selisih.toLocaleString('id-ID')}
          <p>Kategori: ${kategori}
        </div>`;
}

 function hitungPertumbuhan() {
      const awal = parseInt(document.getElementById("awal").value);
      const sekarang = parseInt(document.getElementById("sekarang").value);
      const tampilHasil = document.getElementById("tampilHasil");

      if (awal <= 0) {
        document.getElementById("output").innerHTML = " Masukkan angka yang valid!";
        return;
      }

      const kenaikan = sekarang - awal;
      const persentase = (kenaikan / awal) * 100;

      let kategori = "";
      if (persentase < 100) {
        kategori = "Lambat";
      } else {
        if (persentase <= 199) {
          kategori = "Cukup Cepat";
        } else {
          if (persentase <= 499) {
            kategori = "Cepat";
          } else {
            if (persentase <= 999) {
              kategori = "Sangat Cepat";
            } else {
            if (persentase = 1000) {
              kategori = "Booming Viral";
            }
            }
          }
        }
      }

      tampilHasil.innerHTML = `
          <div class="hasil-output">
             <h4>Proyeksi Pertumbuhan Startup Fintech</h4>
             <p>Pengguna Awal: ${awal}</p>
             <p>Pengguna Sekarang: ${sekarang}</p>
             <p>Persentase Pertumbuhan: ${persentase}%</p>
             <p>Kategori: ${kategori}</p>
         </div>
        `;
}

function penjumlahan() {
    const x = parseFloat(document.getElementById("angka1").value);
    const y = parseFloat(document.getElementById("angka2").value);
    const tampilHasil = document.getElementById("tampilHasil");

    let z = x + y;

    tampilHasil.innerHTML = `
      <div class="hasil-output">
         <h4>Hasil Penjumlahan</h4>
         <p>Hasil dari ${x} + ${y} adalah ${z}
      </div>
    `;
     
}

function pengurangan() {
    const x = parseFloat(document.getElementById("angka1").value);
    const y = parseFloat(document.getElementById("angka2").value);
    const tampilHasil = document.getElementById("tampilHasil");

    let z = x - y;

    tampilHasil.innerHTML = `
      <div class="hasil-output">
         <h4>Hasil Pengurangan</h4>
         <p>Hasil dari ${x} - ${y} adalah ${z}
      </div>
    `;
     
}

function perkalian() {
    const x = parseFloat(document.getElementById("angka1").value);
    const y = parseFloat(document.getElementById("angka2").value);
    const tampilHasil = document.getElementById("tampilHasil");

    let z = x * y;

    tampilHasil.innerHTML = `
      <div class="hasil-output">
         <h4>Hasil Perkalian</h4>
         <p>Hasil dari ${x} * ${y} adalah ${z}
      </div>
    `;
     
}

function pembagian() {
    const x = parseFloat(document.getElementById("angka1").value);
    const y = parseFloat(document.getElementById("angka2").value);
    const tampilHasil = document.getElementById("tampilHasil");

    let z = x / y;

    tampilHasil.innerHTML = `
      <div class="hasil-output">
         <h4>Hasil Pembagian</h4>
         <p>Hasil dari ${x} / ${y} adalah ${z}
      </div>
    `;
     
}

function sisabagi() {
    const x = parseFloat(document.getElementById("angka1").value);
    const y = parseFloat(document.getElementById("angka2").value);
    const tampilHasil = document.getElementById("tampilHasil");

    let z = x % y;

    tampilHasil.innerHTML = `
      <div class="hasil-output">
         <h4>Hasil Sisabagi</h4>
         <p>Hasil dari ${x} % ${y} adalah ${z}
      </div>
    `;
     
}