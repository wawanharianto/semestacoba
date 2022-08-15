import React from 'react';
import './Produk.css';

function Produk() {
  return (
    <>
      <article className="contproduks">
        <figure className="hero"></figure>
        <figure className="effect"></figure>
        <h1>PRODUK</h1>
        <div className="wrap_search">
          <form>
            <input type="text" name="search" placeholder="Cari Produk Samesta(Perumnas)" />
            <button type="submit">
              <i className="fa-solid fa-magnifying-glass" />
            </button>
          </form>
        </div>
        <section className="kontenlist">
          <div className="filter">
            <h3> Filter</h3>
            <div className="konten">
              <div class="dropdown">
                <button class="btn btn-secondary dropdown-toggle" type="button" id="dropdownMenuButton" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
                  Harga
                </button>
                <div class="dropdown-menu" aria-labelledby="dropdownMenuButton">
                  <a class="dropdown-item" href="#">
                    Harga Terendah
                  </a>
                  <a class="dropdown-item" href="#">
                    Harga Tertinggi
                  </a>
                </div>
              </div>
              <div class="dropdown">
                <button class="btn btn-secondary dropdown-toggle" type="button" id="dropdownMenuButton" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
                  Lokasi
                </button>
                <div class="dropdown-menu" aria-labelledby="dropdownMenuButton">
                  <a class="dropdown-item" href="#">
                    Lombok
                  </a>
                  <a class="dropdown-item" href="#">
                    Bali
                  </a>
                  <a class="dropdown-item" href="#">
                    Bima
                  </a>
                </div>
              </div>
              <div class="dropdown">
                <button class="btn btn-secondary dropdown-toggle" type="button" id="dropdownMenuButton" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
                  Tipe
                </button>
                <div class="dropdown-menu" aria-labelledby="dropdownMenuButton">
                  <a class="dropdown-item" href="#">
                    Action
                  </a>
                  <a class="dropdown-item" href="#">
                    Another action
                  </a>
                  <a class="dropdown-item" href="#">
                    Something else here
                  </a>
                </div>
              </div>
            </div>
          </div>
          <div className="wrap-produk">
            <div className="produk-konten">
              <figure className="img">
                <img
                  src="https://images.unsplash.com/photo-1512359953714-f0c9a632ab85?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1090&q=80"
                  alt=""
                />
              </figure>
              <h5>Nama Produk</h5>
              <h6>Rp.300000000</h6>
              <div className="text">
                <div className="list">
                  <h5>KM. TIDUR</h5>
                  <p>1</p>
                </div>
                <div className="list">
                  <h5>KM. MANDI</h5>
                  <p>1</p>
                </div>
                <div className="list">
                  <h5>TIPE</h5>
                  <p>1</p>
                </div>
              </div>
            </div>
            <div className="produk-konten">
              <figure className="img">
                <img
                  src="https://images.unsplash.com/photo-1512359953714-f0c9a632ab85?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1090&q=80"
                  alt=""
                />
              </figure>
              <h5>Nama Produk</h5>
              <h6>Rp.300000000</h6>
              <div className="text">
                <div className="list">
                  <h5>KM. TIDUR</h5>
                  <p>1</p>
                </div>
                <div className="list">
                  <h5>KM. MANDI</h5>
                  <p>1</p>
                </div>
                <div className="list">
                  <h5>TIPE</h5>
                  <p>1</p>
                </div>
              </div>
            </div>
            <div className="produk-konten">
              <figure className="img">
                <img
                  src="https://images.unsplash.com/photo-1512359953714-f0c9a632ab85?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1090&q=80"
                  alt=""
                />
              </figure>
              <h5>Nama Produk</h5>
              <h6>Rp.300000000</h6>
              <div className="text">
                <div className="list">
                  <h5>KM. TIDUR</h5>
                  <p>1</p>
                </div>
                <div className="list">
                  <h5>KM. MANDI</h5>
                  <p>1</p>
                </div>
                <div className="list">
                  <h5>TIPE</h5>
                  <p>1</p>
                </div>
              </div>
            </div>
            <div className="produk-konten">
              <figure className="img">
                <img
                  src="https://images.unsplash.com/photo-1512359953714-f0c9a632ab85?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1090&q=80"
                  alt=""
                />
              </figure>
              <h5>Nama Produk</h5>
              <h6>Rp.300000000</h6>
              <div className="text">
                <div className="list">
                  <h5>KM. TIDUR</h5>
                  <p>1</p>
                </div>
                <div className="list">
                  <h5>KM. MANDI</h5>
                  <p>1</p>
                </div>
                <div className="list">
                  <h5>TIPE</h5>
                  <p>1</p>
                </div>
              </div>
            </div>
            <div className="produk-konten">
              <figure className="img">
                <img
                  src="https://images.unsplash.com/photo-1512359953714-f0c9a632ab85?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1090&q=80"
                  alt=""
                />
              </figure>
              <h5>Nama Produk</h5>
              <h6>Rp.300000000</h6>
              <div className="text">
                <div className="list">
                  <h5>KM. TIDUR</h5>
                  <p>1</p>
                </div>
                <div className="list">
                  <h5>KM. MANDI</h5>
                  <p>1</p>
                </div>
                <div className="list">
                  <h5>TIPE</h5>
                  <p>1</p>
                </div>
              </div>
            </div>
            <div className="produk-konten">
              <figure className="img">
                <img
                  src="https://images.unsplash.com/photo-1512359953714-f0c9a632ab85?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1090&q=80"
                  alt=""
                />
              </figure>
              <h5>Nama Produk</h5>
              <h6>Rp.300000000</h6>
              <div className="text">
                <div className="list">
                  <h5>KM. TIDUR</h5>
                  <p>1</p>
                </div>
                <div className="list">
                  <h5>KM. MANDI</h5>
                  <p>1</p>
                </div>
                <div className="list">
                  <h5>TIPE</h5>
                  <p>1</p>
                </div>
              </div>
            </div>
            <div className="produk-konten">
              <figure className="img">
                <img
                  src="https://images.unsplash.com/photo-1512359953714-f0c9a632ab85?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1090&q=80"
                  alt=""
                />
              </figure>
              <h5>Nama Produk</h5>
              <h6>Rp.300000000</h6>
              <div className="text">
                <div className="list">
                  <h5>KM. TIDUR</h5>
                  <p>1</p>
                </div>
                <div className="list">
                  <h5>KM. MANDI</h5>
                  <p>1</p>
                </div>
                <div className="list">
                  <h5>TIPE</h5>
                  <p>1</p>
                </div>
              </div>
            </div>
            <div className="produk-konten">
              <figure className="img">
                <img
                  src="https://images.unsplash.com/photo-1512359953714-f0c9a632ab85?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1090&q=80"
                  alt=""
                />
              </figure>
              <h5>Nama Produk</h5>
              <h6>Rp.300000000</h6>
              <div className="text">
                <div className="list">
                  <h5>KM. TIDUR</h5>
                  <p>1</p>
                </div>
                <div className="list">
                  <h5>KM. MANDI</h5>
                  <p>1</p>
                </div>
                <div className="list">
                  <h5>TIPE</h5>
                  <p>1</p>
                </div>
              </div>
            </div>
          </div>
        </section>
      </article>
    </>
  );
}

export default Produk;
