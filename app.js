const inputTugas = document.getElementById("inputTugas");
const btnTambah = document.getElementById("btnTambah");
const daftarTugas = document.getElementById("daftarTugas");

function tambah() {
    const teks = inputTugas.value.trim();
    if (teks === "") return alert("Isi dulu tugasnya!");

    const li = document.createElement("li");
    li.innerHTML = `
        <span style="cursor:pointer; flex:1;" class="teks-tugas">${teks}</span>
        <button class="hapus">Hapus</button>
    `;

    li.querySelector(".teks-tugas").addEventListener("click", function() {
        this.classList.toggle("selesai");
    });

    li.querySelector(".hapus").addEventListener("click", function() {
        li.remove();
    });

    daftarTugas.appendChild(li);
    inputTugas.value = "";
}

btnTambah.addEventListener("click", tambah);
inputTugas.addEventListener("keypress", function(e) {
    if (e.key === "Enter") {
        tambah();
    }
});