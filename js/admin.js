const ADMIN_API_URL = "https://script.google.com/macros/s/AKfycbxnQrKWOidWHsILtNG66AeLB-uUKFymxoQ7HhyJaU6x0ACi0MiWwhEu0nO6PvfLhT4/exec";

document.addEventListener("DOMContentLoaded", () => {
  const form = document.getElementById("weddingForm");

  form.addEventListener("submit", function (e) {
    e.preventDefault();

    const formData = new FormData(form);

    fetch(ADMIN_API_URL, {
      method: "POST",
      body: formData // ⬅️ PENTING: BUKAN JSON
    })
    .then(res => res.json())
    .then(res => {
      if (res.status === "success") {
        alert("✅ Data berhasil disimpan ke Spreadsheet");
        form.reset();
      } else {
        alert("❌ Error: " + res.message);
      }
    })
    .catch(err => {
      console.error(err);
      alert("❌ Gagal koneksi ke server");
    });
  });
});
