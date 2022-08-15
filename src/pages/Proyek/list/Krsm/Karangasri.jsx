import React from 'react';
import './Karangasri.css';

function Karangasri() {
  return (
    <>
      <article className="container_karangasri">
        <div className="konten_karangasri">
          <h2>SEMESTA BESANG ASRI KARANGASEM</h2>
          <img src="/images/karangasrif.jpg" alt="" />

          <div className="galery_karangasri">
            <h4>Galery</h4>
            <div className="img_konten">
              <img src="/images/gal-karangasri1.jpg" alt="" />
              <img src="/images/gal-karangasri2.jpg" alt="" />
              <img src="/images/gal-karangasri3.jpg" alt="" />
              <img src="/images/gal-karangasri4.jpg" alt="" />
              <img src="/images/gal-karangasri5.jpg" alt="" />
              <img src="/images/gal-karangasri6.jpg" alt="" />
              <img src="/images/gal-karangasri7.jpg" alt="" />
              <img src="/images/gal-karangasri8.jpg" alt="" />
              <img src="/images/gal-karangasri9.jpg" alt="" />
              <img src="/images/gal-karangasri10.jpg" alt="" />
            </div>
          </div>

          <div className="service_karangasri">
            <h4>Prasarana </h4>
            <div className="hero">
              <img src="/images/skem-karangasri.png" alt="" />
            </div>
            <div className="konten_text">
              <div className="side">
                <div className="wrap">
                  <i className="fa-solid fa-circle" />
                  <p>Gate Masuk</p>
                </div>
                <div className="wrap">
                  <i className="fa-solid fa-circle" />
                  <p>Pura Ibadah</p>
                </div>
              </div>
              <div className="side">
                <div className="wrap">
                  <i className="fa-solid fa-circle" />
                  <p>Jalan Lingkungan</p>
                </div>
                <div className="wrap">
                  <i className="fa-solid fa-circle" />
                  <p>Saluran Lingkungan</p>
                </div>
                <div className="wrap">
                  <i className="fa-solid fa-circle" />
                  <p>Jaringan PLN</p>
                </div>
                <div className="wrap">
                  <i className="fa-solid fa-circle" />
                  <p>Jaringan PDAM</p>
                </div>
                <div className="wrap">
                  <i className="fa-solid fa-circle" />
                  <p>Jaringan Internet</p>
                </div>
              </div>

              <div className="side">
                <div className="wrap">
                  <i className="fa-solid fa-circle" />
                  <p>Tanah Belum di Kembangkan</p>
                </div>
              </div>
            </div>
          </div>
          <div className="tableunit">
            <img src="/images/karangasriinfo.jpg" alt="" />
          </div>

          <div className="konten_kavling">
            <h4>Harga Jual Rumah & Kavling Besang Asri</h4>
            <img src="/images/list-karangasri.jpg" alt="" />
          </div>
        </div>
      </article>
    </>
  );
}

export default Karangasri;
