// Simpan data dalam sessionStorage agar form.html dan container.html dapat saling berbagi data
document.addEventListener("DOMContentLoaded", () => {
    const currentPage = window.location.pathname;
  
    // Jika di halaman form.html
    if (currentPage.includes("form.html")) {
      const form = document.getElementById("admin-form");
      const addButton = document.getElementById("add-data");
  
      addButton.addEventListener("click", () => {
        const imageUrl = document.getElementById("imageUrl").value.trim();
        const title = document.getElementById("title").value.trim();
        const description = document.getElementById("description").value.trim();
  
        if (!imageUrl || !title || !description) {
          alert("Please fill out all fields!");
          return;
        }
  
        // Simpan data ke sessionStorage
        const existingData = JSON.parse(sessionStorage.getItem("data")) || [];
        existingData.push({ imageUrl, title, description });
        sessionStorage.setItem("data", JSON.stringify(existingData));
  
        alert("Data added successfully! Go to container.html to see the data.");
        form.reset();
      });
    }
  
    // Jika di halaman container.html
    if (currentPage.includes("container.html")) {
      const container = document.querySelector(".container");
  
      // Ambil data dari sessionStorage
      const data = JSON.parse(sessionStorage.getItem("data")) || [];
  
      // Tampilkan data di container
      data.forEach(({ imageUrl, title, description }) => {
        const newObject = document.createElement("div");
        newObject.className = "object-cont";
        newObject.innerHTML = `
          <img src="${imageUrl}" alt="Render">
          <div>
            <h3>${title}</h3>
            <p>${description}</p>
          </div>
        `;
        container.appendChild(newObject);
      });
    }
  });
  