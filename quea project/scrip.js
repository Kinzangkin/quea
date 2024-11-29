document.addEventListener("DOMContentLoaded", () => {
    // Ambil elemen-elemen penting
    const form = document.querySelector("#admin-form");
    const addButton = document.querySelector("#add-admin-object");
    const tableBody = document.querySelector("#admin-table tbody");
    const container = document.querySelector(".container1");
  
    // Tambahkan event listener untuk tombol Tambahkan
    addButton.addEventListener("click", () => {
      // Ambil nilai input dari form
      const imageUrl = form.querySelector("#imageUrl").value.trim();
      const title = form.querySelector("#title").value.trim();
      const description = form.querySelector("#description").value.trim();
  
      // Validasi input (pastikan semua field diisi)
      if (!imageUrl || !title || !description) {
        alert("Harap isi semua field!");
        return;
      }
  
      // Tambahkan data ke tabel
      const rowCount = tableBody.rows.length + 1; // Hitung nomor urut
      const newRow = document.createElement("tr");
      newRow.innerHTML = `
        <td>${rowCount}</td>
        <td><img src="${imageUrl}" alt="Gambar" style="width: 100px; height: auto;"></td>
        <td>${title}</td>
        <td>${description}</td>
        <td><button class="delete-btn">Hapus</button></td>
      `;
      tableBody.appendChild(newRow);
  
      // Tambahkan data ke container1 dalam format yang sesuai
      const newObject = document.createElement("div");
      newObject.className = "object-cont"; // Gunakan class object-cont
      newObject.innerHTML = `
        <img src="${imageUrl}" alt="Render">
        <div>
          <h3>${title}</h3>
          <p>${description}</p>
        </div>
      `;
      container.appendChild(newObject);
  
      // Tambahkan fungsi hapus untuk tombol Hapus
      const deleteButton = newRow.querySelector(".delete-btn");
      deleteButton.addEventListener("click", () => {
        tableBody.removeChild(newRow); // Hapus dari tabel
        container.removeChild(newObject); // Hapus dari container
      });
  
      // Reset input form
      form.reset();
    });
  });
  