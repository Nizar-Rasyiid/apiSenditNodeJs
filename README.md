# 🚀 Node.js Express API

## 📝 Deskripsi Proyek
API ini dikembangkan menggunakan **Node.js** dan **Express.js**, dirancang untuk memberikan fitur CRUD (Create, Read, Update, Delete) pada data **Users** serta menyediakan endpoint untuk mendapatkan **Resi**.

### 🌟 Fitur Utama
1. **CRUD Users**
   - Tambah pengguna baru
   - Lihat daftar semua pengguna
   - Perbarui data pengguna
   - Hapus pengguna dari sistem

2. **Get Resi**
   - Ambil data resi berdasarkan nomor resi yang diberikan

Proyek ini cocok digunakan sebagai backend dalam berbagai aplikasi yang memerlukan manajemen pengguna dan pencarian data resi.

---

## 📦 Instalasi dan Menjalankan Proyek

### 1. Clone Repository
```bash
$ git clone https://github.com/username/repo-name.git
```

### 2. Install Dependencies
```bash
$ cd repo-name
$ npm install
```

### 3. Konfigurasi Environment
Buat file `.env` pada root directory dan tambahkan konfigurasi berikut:
```env
PORT=5000
DATABASE_URL=<your_database_url>
API_KEY=<your_api_key>
```

### 4. Jalankan Server
```bash
$ npm start
```
Server akan berjalan pada [http://localhost:5000](http://localhost:5000).

---

## 🔗 Endpoint API

### 1. Users
- **GET /users** - Mendapatkan daftar semua pengguna
- **POST /users** - Menambahkan pengguna baru
- **GET /users/:id** - Mendapatkan detail pengguna berdasarkan ID
- **PUT /users/:id** - Memperbarui data pengguna berdasarkan ID
- **DELETE /users/:id** - Menghapus pengguna berdasarkan ID

### 2. Resi
- **GET /resi/:resiNumber** - Mendapatkan data resi berdasarkan nomor resi

---

## 📚 Teknologi yang Digunakan
- **Node.js**
- **Express.js**
- **MySql** 
- **dotenv** untuk manajemen environment variables

---

## 📂 Struktur Proyek
```
repo-name/
├── src/
│   ├── controllers/
│   │   ├── userController.js
│   │   └── resiController.js
│   ├── models/
│   │   ├── userModel.js
│   │   └── resiModel.js
│   ├── routes/
│   │   ├── userRoutes.js
│   │   └── resiRoutes.js
│   └── app.js
├── .env
├── .gitignore
├── package.json
└── README.md
```

---

## 🤝 Kontribusi
Kontribusi sangat diterima! Jika Anda ingin berkontribusi, silakan fork repositori ini dan kirimkan pull request.

---

## 📧 Kontak
Untuk pertanyaan atau bantuan, silakan hubungi:
- Email: nizarrasyiid1221@gmail.com
- GitHub: [username](https://github.com/Nizar-Rasyiid)
