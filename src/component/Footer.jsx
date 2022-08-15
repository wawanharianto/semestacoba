import React from 'react';
import './Footer.css';

function Footer() {
  return (
    <>
      <footer className="container__footer">
        <section className="cont__contact">
          <div className="list">
            <h3>Samesta | Perumnas</h3>
            <p>Hubungi kami untuk untuk pertanyaan mengenai produk dan layanan perumnas</p>
            <div className="cont__list">
              <i className="fa-solid fa-phone"></i>
              <p>+62 21 819 4807</p>
            </div>
            <div className="cont__list">
              <i className="fa-solid fa-tty"></i>
              <p>+62 21 819 4807</p>
            </div>
            <div className="cont__list">
              <i className="fa-solid fa-envelope"></i>
              <p>samesta@perumnas.co.id</p>
            </div>
            <div className="cont__list">
              <i className="fa-solid fa-earth-europe"></i>
              <p>Wisma Perumnas, Jl. D.I Pandjaitan Kav. 11, Jakarta TImur 13340</p>
            </div>
          </div>
          <div className="list">
            <h4>Dipercaya :</h4>
            <div className="konten">
              <img src="/images/BUMN.png" alt="" />
              <img src="/images/kmtrn.png" alt="" />
            </div>
          </div>
        </section>
        <hr />
        <section className="cont__etc">
          <div className="cont__list">
            <h4>PROFIL PERUSAHAAN</h4>
            <ul className="profil">
              <li>Tentang Samestaa</li>
              <li>Visi & Misi</li>
              <li>Dewan Pengawas</li>
              <li>Dewan Direksi</li>
              <li>Grup & Afiliasi</li>
              <li>Penghargaan</li>
            </ul>
          </div>
          <div className="cont__list">
            <h4>PRODUK</h4>
            <ul className="profil">
              <li>Residensial</li>
              <li>Komersial</li>
              <li>Pengembangan Kedepan</li>
            </ul>
          </div>
          <div className="cont__list">
            <h4>TATA KELOLA</h4>
            <ul className="profil">
              <li>Tujuan Tata Kelola Perusahaan</li>
              <li>Peraturan Perundangan</li>
              <li>Laporan Tahunan</li>
              <li>Laporan Keuangan</li>
              <li>Laporan PKBL</li>
              <li>Laporan Keberlanjutan</li>
              <li>Sistem Manajemen Anti Penyuapan</li>
            </ul>
          </div>
          <div className="cont__list">
            <h4>ACARA & PROMOSI</h4>
            <ul className="profil">
              <li>Spesial Expo</li>
              <li>Spesial Event</li>
              <li>Spesial Promo</li>
            </ul>
          </div>
          <div className="cont__list">
            <h4>SERVICE</h4>
            <ul className="profil">
              <li>Pengaduan Konsumen</li>
              <li>Peluang Kerja Sama Bisnis</li>
              <li>Pedoman Pengadaan Barang dan Jasa</li>
              <li>Beasisiwa Anak Karyawan</li>
              <li>Unit Pengelola </li>
            </ul>
          </div>
        </section>
        <section className="copyright">
          <p>Copyright © Samesta BALI-NTB-NTT 2022 </p>
          <div className="icon__sosial">
            <i className="fa-brands fa-instagram"></i>
            <i className="fa-brands fa-square-facebook"></i>
            <i className="fa-brands fa-linkedin"></i>

            <i className="fa-brands fa-square-twitter"></i>
          </div>
        </section>
      </footer>
    </>
  );
}

export default Footer;
