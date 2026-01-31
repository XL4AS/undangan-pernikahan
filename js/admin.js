// ===============================
// KONFIGURASI
// ===============================
const ADMIN_API_URL = "https://script.google.com/macros/s/AKfycbxnQrKWOidWHsILtNG66AeLB-uUKFymxoQ7HhyJaU6x0ACi0MiWwhEu0nO6PvfLhT4/exec";

// ===============================
// SUBMIT FORM ADMIN
// ===============================
document.addEventListener("DOMContentLoaded", function () {
    const form = document.getElementById("weddingForm");

    if (!form) {
        console.error("Form #weddingForm tidak ditemukan");
        return;
    }

    form.addEventListener("submit", function (e) {
        e.preventDefault();

        const formData = new FormData(form);
        let data = {};

        // Convert FormData → Object JSON
        formData.forEach((value, key) => {
            data[key] = value;
        });

        // Kirim ke Google Apps Script
        fetch(ADMIN_API_URL, {
            method: "POST",
            headers: {
                "Content-Type": "application/json"
            },
            body: JSON.stringify(data)
        })
        .then(response => response.json())
        .then(result => {
            console.log("Response:", result);

            if (result.status === "success") {
                alert("✅ Data mempelai berhasil disimpan ke Spreadsheet");
                form.reset();
            } else {
                alert("❌ Gagal menyimpan data:\n" + (result.message || "Unknown error"));
            }
        })
        .catch(error => {
            console.error("Fetch Error:", error);
            alert("❌ Terjadi kesalahan koneksi ke server");
        });
    });
});
