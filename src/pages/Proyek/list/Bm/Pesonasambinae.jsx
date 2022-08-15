import React from 'react';
import './Pesonasambinae.css';
function Pesonasambinae() {
  return (
    <>
      <article className="container_pesona">
        <div className="konten_pesona">
          <h2>SEMESTA PESONA SAMBINAE</h2>
          <img src="/images/posenasambianf.jpg" alt="" />

          <div className="galery_pesona">
            <h4>Galery</h4>
            <div className="img_konten">
              <img src="/images/gal-pesona.jpg" alt="" />
              <img src="/images/gal-pesona.jpg" alt="" />
            </div>
          </div>

          <div className="service_pesona">
            <h4>Prasarana </h4>
            <div className="hero">
              <img src="/images/skemalaresort.png" alt="" />
            </div>
            <div className="konten_text">
              <div className="side">
                <div className="wrap">
                  <i className="fa-solid fa-circle" />
                  <p>Gate Masuk</p>
                </div>
                <div className="wrap">
                  <i className="fa-solid fa-circle" />
                  <p>Poler Lapuapi</p>
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
                  <p>Masjid Ibadah</p>
                </div>
                <div className="wrap">
                  <i className="fa-solid fa-circle" />
                  <p>Klinik Apotek</p>
                </div>
              </div>
              <div className="side">
                <div className="wrap">
                  <i className="fa-solid fa-circle" />
                  <p>Tanah Belum di Kembangkan</p>
                </div>
                <div className="wrap">
                  <i className="fa-solid fa-circle" />
                  <p>Kavling Tanah Matang</p>
                </div>
              </div>
            </div>
          </div>
          <div className="tableunit">
            <img src="/images/laresortpra.jpg" alt="" />
          </div>

          <div className="konten_kavling">
            <h4>Harga Jual Rumah & Kavling Pesona Sambinae</h4>
            <img src="/images/list-la-resort.png" alt="" />
          </div>
        </div>
      </article>
    </>
  );
}

export default Pesonasambinae;
