document.getElementById("mahasiswaForm").addEventListener("submit", function(event) {
  event.preventDefault();  // Menghentikan pengiriman formulir dan memproses secara manual

  // Dapatkan nilai dari input
  var nama = document.getElementById("nama").value;
  var nim = document.getElementById("nim").value;
  var tanggal = document.getElementById("tanggal").value;
  var alamat = document.getElementById("alamat").value;

  // Menambahkan data ke dalam tabel
  var tableBody = document.getElementById("tableBody");
  var newRow = tableBody.insertRow(tableBody.rows.length);
  var cellNo = newRow.insertCell(0);
  var cellNama = newRow.insertCell(1);
  var cellNIM = newRow.insertCell(2);
  var cellAlamat = newRow.insertCell(3);

  cellNo.innerHTML = tableBody.rows.length;
  cellNama.innerHTML = nama;
  cellNIM.innerHTML = nim;
  cellAlamat.innerHTML = alamat;
});