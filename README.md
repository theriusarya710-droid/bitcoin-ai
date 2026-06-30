# Bitcoin Price Prediction

## Deskripsi
Website ini merupakan aplikasi prediksi harga penutupan (Close Price) Bitcoin menggunakan algoritma **Linear Regression**. Pengguna dapat memasukkan nilai Open, High, Low, dan Volume, kemudian sistem akan memprediksi harga penutupan Bitcoin.

## Dataset
Dataset yang digunakan:
- **bitcoin_dataset.csv**

## Metode
- Linear Regression (Scikit-Learn)

## Akurasi Model
- R² Score: **0.99947**

## Struktur Project

```
bitcoin-ai/
│── index.html
│── style.css
│── script.js
│── bitcoin_dataset.csv
│── bitcoin_model.pkl
│── cek_akurasi.py
│── train_model.ipynb
│── README.md
```

## Cara Menjalankan Training

1. Buka file `train_model.ipynb`.
2. Jalankan seluruh cell (Run All).
3. Model akan disimpan sebagai `bitcoin_model.pkl`.

## Deployment

Website dapat diakses melalui GitHub Pages:

https://theriusarya710-droid.github.io/bitcoin-ai/

## Author

Nama: Liem Arya