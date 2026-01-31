// ===============================
// KONFIGURASI
// ===============================
const ADMIN_API_URL = "https://script.google.com/macros/s/AKfycbxnQrKWOidWHsILtNG66AeLB-uUKFymxoQ7HhyJaU6x0ACi0MiWwhEu0nO6PvfLhT4/exec";

// ===============================
// SUBMIT FORM
// ===============================
document.getElementById("weddingForm").addEventListener("submit", function (e) {
    e.preventDefault();

    const form = e.target;
    const formData = new FormData(form);

    // Ambil file foto (jika ada)
    const files = document.getElementById("fileUp").files;
    let fotoCount = files.length;

    // Convert FormData ke Object
    let data = {};
    formData.forEach((value, key) => {
        data[key] = value;
    });

    // Tambahan metadata
    data.total_foto = fotoCount;
    data.timestamp = new Date().toISOString();

    // Kirim ke Apps Script
    fetch(ADMIN_API_URL, {
        method: "POST",
        body: JSON.stringify(data),
        headers: {
            "Content-Type": "application/json"
        }
    })
    .then(res => res.json())
    .then(res => {
        if (res.status === "success") {
            alert("✅ Data mempelai berhasil disimpan!");
            form.reset();
        } else {
            alert("⚠️ Gagal menyimpan data. Coba lagi.");
        }
    })
    .catch(err => {
        console.error(err);
        alert("❌ Terjadi kesalahan koneksi.");
    });
});

// ===============================
// INFO FILE FOTO
// ===============================
document.getElementById("fileUp").addEventListener("change", function () {
    if (this.files.length > 0) {
        alert(`📸 ${this.files.length} foto berhasil dipilih`);
    }
});
