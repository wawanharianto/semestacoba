import React from 'react';
import './Proyek.css';

function Proyek() {
  return (
    <>
      <div className="container_proyek">
        <div className="konten">
          <h2>SAMESTA LABUAPI LA RESORT</h2>
          <img src="/images/laresortf.jpg" alt="" />
          <a href="/proyek/laresort">
            <button> Read More</button>
          </a>
        </div>
        <div className="konten">
          <h2>SAMESTA BESANG ASRI KARANGASEM</h2>
          <img src="/images/karangasri.jpg" alt="" />
          <a href="/proyek/karangasri">
            <button> Read More</button>
          </a>
        </div>
        <div className="konten">
          <h2>SAMESTA PESONA SAMBINAE</h2>
          <img src="/images/pesonabima.jpg" alt="" />
          <a href="/proyek/pesonasambinae">
            <button> Read More</button>
          </a>
        </div>
      </div>
    </>
  );
}

export default Proyek;
