// ===============================
// admin.js (FINAL - TANPA FETCH)
// ===============================

document.addEventListener("DOMContentLoaded", function () {
    const form = document.getElementById("weddingForm");

    if (!form) {
        console.error("Form weddingForm tidak ditemukan");
        return;
    }

    form.addEventListener("submit", function () {
        // Feedback ke user (UX saja)
        alert("✅ Data berhasil dikirim ke Spreadsheet");

        // Reset form setelah submit
        setTimeout(() => {
            form.reset();
        }, 500);
    });
});
