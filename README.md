# Website PPDB Darul Hadits Al-Mubarok

Website statis ini siap dipublikasikan dengan GitHub Pages. Tidak perlu instalasi atau proses build.

## Struktur file

- `index.html` — halaman utama yang dibuka GitHub Pages.
- `css/styles.css` — tampilan website.
- `js/app.js` — navigasi dan formulir website.

## Publikasikan dengan GitHub Pages

1. Buat repository GitHub baru.
2. Unggah **isi folder ini** ke root repository sehingga `index.html` berada langsung di root, bersama folder `css/` dan `js/`.
3. Buka **Settings → Pages** pada repository.
4. Di bagian **Build and deployment**, pilih **Deploy from a branch**.
5. Pilih branch `main` dan folder `/(root)`, lalu simpan.
6. Setelah deployment selesai, buka URL GitHub Pages yang ditampilkan di halaman tersebut.

Navigasi halaman memakai URL hash (`#/info-ppdb` dan `#/formulir-ppdb`), sehingga tetap berfungsi di GitHub Pages tanpa konfigurasi routing tambahan.
