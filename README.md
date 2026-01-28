Library System with Geolocation
Aplikasi backend sederhana untuk manajemen perpustakaan yang mendukung fitur peminjaman buku berbasis lokasi (geolocation).

 Spesifikasi Teknis
Runtime: Node.js & Express.js.

ORM: Sequelize dengan database MySQL.

Port Database: 3307 (Konfigurasi khusus untuk MySQL Workbench).

Autentikasi: Simulasi menggunakan custom headers (x-user-role & x-user-id).

Instruksi Menjalankan Aplikasi
1. Persiapan Database
Pastikan MySQL Server (XAMPP atau MySQL Standalone) berjalan di port 3307.

Buat database baru dengan nama library_db.

Sesuaikan kredensial di config/database.js.

2. Instalasi Dependensi
Buka terminal di folder proyek dan jalankan:

Bash
npm install
3. Menjalankan Server
Jalankan aplikasi dengan perintah:

Bash
node app.js
Server akan berjalan di http://localhost:3000 dan akan muncul log "Database terhubung!" di terminal jika koneksi sukses.

Daftar Endpoints (API Documentation)
A. Public Mode
Dapat diakses langsung tanpa header khusus.

GET /api/books : Melihat semua daftar buku.

GET /api/books/:id : Melihat detail spesifik satu buku.

B. Admin Mode (Wajib Header x-user-role: admin)
POST /api/books : Menambah buku baru (dengan validasi Title & Author).

PUT /api/books/:id : Memperbarui data buku.

DELETE /api/books/:id : Menghapus buku.

C. User Mode (Wajib Header x-user-role: user & x-user-id)
POST /api/borrow : Meminjam buku dengan mencatat titik koordinat (latitude, longitude).


Tampilan Web (JSON Response)
Dalam proyek REST API, "tampilan web" merujuk pada data JSON yang dikirimkan server ke browser atau Postman.

Langkah Screenshot:

1.Pastikan server node app.js menyala.

2.Buka browser (Chrome/Edge) dan akses: http://localhost:3000/api/books

3.<img width="1920" height="1080" alt="image" src="https://github.com/user-attachments/assets/e98f524d-669f-4e2f-940b-d84cb004f926" />

4.Keterangan: Screenshot ini membuktikan bahwa Public Mode berjalan dan data dari MySQL berhasil ditarik ke web.



Test Endpoint API
POST Tambah Buku (Admin Mode)

<img width="1920" height="1080" alt="image" src="https://github.com/user-attachments/assets/47f17f98-5a8c-474e-9034-265aa4120819" />

GET Lihat Daftar Buku (Public Mode)
<img width="1920" height="1080" alt="image" src="https://github.com/user-attachments/assets/42f399ba-a027-4916-9910-0d16de0e63b0" />

POST Pinjam Buku & Geolocation (User Mode)

<img width="1920" height="1080" alt="image" src="https://github.com/user-attachments/assets/3e7b6b5e-96b1-45a5-ac79-826f78f9e31b" />

POST Tes Validasi (Admin Mode)

<img width="1920" height="1080" alt="image" src="https://github.com/user-attachments/assets/6ffed036-da40-495d-80d0-20e39bb05d2f" />

PUT Update Buku

<img width="1920" height="1080" alt="image" src="https://github.com/user-attachments/assets/f276ad96-0327-4888-84fb-04f0015bfc51" />

DELETE Haps Buku

<img width="1920" height="1080" alt="image" src="https://github.com/user-attachments/assets/7a5f220b-5de9-4315-b5b9-f486a601bfbd" />


Stuktur Database
1. Tabel Books

<img width="1920" height="1080" alt="image" src="https://github.com/user-attachments/assets/b9603653-bfc0-40bc-81f9-13c6d51d4d6a" />

2.Tabel BorrowLogs

<img width="1920" height="1080" alt="image" src="https://github.com/user-attachments/assets/12926187-a5b9-4b5d-b958-85b9ec5a8b1f" />


