const inputTugas = document.getElementById("inputTugas");
const btnTambah = document.getElementById("btnTambah");
const daftarTugas = document.getElementById("daftarTugas");

const statTotalTugas = document.getElementById("totalTugas");
const statTugasSelesai = document.getElementById("tugasSelesai");
const statBelumSelesai = document.getElementById("belumSelesai");

let totalTugas = 0;
let tugasSelesai = 0;
let belumSelesai = 0;

function updateStatistik() {
    statTotalTugas.textContent = totalTugas;
    statTugasSelesai.textContent = tugasSelesai;
    statBelumSelesai.textContent = belumSelesai;
}

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