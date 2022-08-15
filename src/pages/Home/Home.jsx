import React from 'react';
import './Home.css';
function home() {
  return (
    <>
      <article className="container_hero">
        <figure className="Hero"></figure>
        <img className="logo-brands" src="/images/perumnas.png" alt="" />
      </article>
      <article className="container_konten">
        <section className="list">
          <h3>Tentang Perumnas</h3>
          <p>
            PERUMNAS adalah Badan Usaha Milik Negara (BUMN) yang berbentuk Perusahaan Umum (Perum) dimana keseluruhan sahamnya dimiliki oleh Pemerintah. Perumnas didirikan sebagai
            solusi pemerintah dalam menyediakan perumahan yang layak bagi masyarakat menengah ke bawah.
            <br /> Perumnas sebagai Pengembang misi Pemerintah dalam menyediakan kebutuhan pokok masyarakat, yaitu perumahan dan pemukiman, sejak didirikan pada tahun 1974 telah
            membangun lebih dari 500.000 unit rumah dengan berbagai tipe di seluruh provinsi di Indonesia. Sebagai perintis pengembangan perkotaan, Perumnas telah berhasil
            melaksanakan misi pemerintah dalam mewujudkan pemerataan pembangunan sampai di wilayah terpencil.
          </p>
        </section>
        <section className="list">
          <h3>SAMESTA</h3>
          <p>
            Identitas logogram terinspirasi dari bentuk kayon (gunungan) yang bermakna kehidupan selaras & harmonis. Rangkaian tiga kayon melambangkan filosofi tridaya yakni cipta,
            rasa, dan karsa. Bentuk garis tidak terputus mempunyai makna interkonektivitas. Bentuk ini menggambarkan komitmen Samesta sebagai hunian yang mengedepankan
            keberlanjutan dan keselarasan jangka panjang. Warna yang digunakan pada logo Samesta berasal dari logo Perumnas sebagai perusahaan induk. Paduan warna biru dan hijau
            merepresentasikan profesionalitas, inovasi, dan kepedulian terhadap kelestarian lingkungan.
          </p>
        </section>
        <section className="list">
          <div className="wraps">
            <img src="/images/MASTERBRAND SAMESTA.png" alt="logo samesta" />
            <div className="text-konten">
              <h4>Hunian Samesta</h4>
              <p>
                Lahir dari sebuah visi besar, Samesta hadir sebagai wajah baru (masterbrand) yang menaungi seluruh produk Perumnas, Samesta berkomitmen untuk terus berinovasi dalam
                mewujudkan hunian yang berkualitas, harmonis dan berkelanjutan bagi Indonesia. 46 Tahun kami menghadirkan tempat pulang paling dirindukan oleh seluruh keluarga
                Indonesia. Sebanyak 2 juta hunian di lebih dari 150 lokasi telah terbangun
              </p>
            </div>
          </div>
        </section>
        <section className="list">
          <h4>SAMESTA PROYEK</h4>
          <div className="img_konten">
            <img src="/images/2karangasem.png" alt="" />
            <img src="/images/2Laresort.png" alt="" />
            <img src="/images/2Pesonasambina.png" alt="" />
          </div>
        </section>
      </article>
    </>
  );
}

export default home;
