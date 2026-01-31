// ===============================
// KONFIGURASI
// ===============================
const ADMIN_API_URL = "https://script.google.com/macros/s/AKfycbxnQrKWOidWHsILtNG66AeLB-uUKFymxoQ7HhyJaU6x0ACi0MiWwhEu0nO6PvfLhT4/exec";

// ===============================
// SUBMIT FORM
// ===============================
document.getElementById("weddingForm").addEventListener("submit", function (e) {
    e.preventDefault();

    const formData = new FormData(e.target);

    let data = {};
    formData.forEach((value, key) => {
        data[key] = value;
    });

    data.timestamp = new Date().toISOString();

    fetch(ADMIN_API_URL, {
        method: "POST",
        headers: {
            "Content-Type": "application/json"
        },
        body: JSON.stringify(data)
    })
    .then(res => res.json())
    .then(res => {
        console.log(res);
        if (res.status === "success") {
            alert("✅ Data mempelai berhasil disimpan!");
            e.target.reset();
        } else {
            alert("⚠️ Error: " + res.message);
        }
    })
    .catch(err => {
        console.error(err);
        alert("❌ Terjadi kesalahan koneksi");
    });
});
