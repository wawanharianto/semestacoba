import { React, useEffect, useState } from 'react';
import './News.css';
import { SliderData } from '../../data/images';
import { FaArrowAltCircleRight, FaArrowAltCircleLeft } from 'react-icons/fa';
function News() {
  const [current, setCurrent] = useState(0);
  const length = SliderData.length;

  const nextSlide = () => {
    setCurrent(current === length - 1 ? 0 : current + 1);
  };
  const prevSlide = () => {
    setCurrent(current === 0 ? length - 1 : current - 1);
  };

  if (!Array.isArray(SliderData) || length <= 0) {
    return null;
  }
  return (
    <>
      <article className="container_promo">
        <div className="headkon">
          <h1> PROMO </h1> <button>{length}</button>
        </div>
        <div className="promosi">
          <FaArrowAltCircleLeft className="left-arrow" onClick={prevSlide} />
          <FaArrowAltCircleRight className="right-arrow" onClick={nextSlide} />
          {SliderData.map((slide, index) => {
            return (
              <div className={index === current ? 'slide active' : 'slide'} key={index}>
                {index === current && <img src={slide.images} alt="Properti Promosi" className="images" />}
              </div>
            );
          })}
        </div>

        <hr />
        <div className="berita">
          <h1> BERITA ACARA</h1>
          <hr />

          <div className="wrap_berita">
            <img
              src="https://images.unsplash.com/photo-1600585154340-be6161a56a0c?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1170&q=80"
              alt=""
            />
            <div className="text">
              <h4>Lorem ipsum dolor sit amet.</h4>
              <p>
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Dolor nobis atque neque, voluptatibus laudantium aut, corrupti provident itaque maiores, nisi esse. Animi,
                iste dolore rerum velit ullam laboriosam. Consectetur tenetur repellat at velit labore aliquid, rem aperiam officiis sed perferendis nulla? Inventore vel officia
                aperiam maiores ab eius excepturi, reiciendis praesentium veritatis porro accusantium minima provident veniam obcaecati dolorem ex harum natus soluta assumenda,
                eveniet id necessitatibus? Maxime delectus, at similique minus, odit commodi nulla labore dicta numquam quod sint impedit expedita magni recusandae quasi unde ipsa
                ad aliquam voluptatibus quae nesciunt sequi blanditiis natus soluta! Rem iste possimus debitis.
              </p>
              <a href="">Readmore...</a>
            </div>
          </div>
          <div className="wrap_berita">
            <img
              src="https://images.unsplash.com/photo-1651090430988-ac56ec7608cf?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1074&q=80"
              alt=""
            />
            <div className="text">
              <h4>Lorem ipsum dolor sit amet.</h4>
              <p>
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Dolor nobis atque neque, voluptatibus laudantium aut, corrupti provident itaque maiores, nisi esse. Animi,
                iste dolore rerum velit ullam laboriosam. Consectetur tenetur repellat at velit labore aliquid, rem aperiam officiis sed perferendis nulla? Inventore vel officia
                aperiam maiores ab eius excepturi, reiciendis praesentium veritatis porro accusantium minima provident veniam obcaecati dolorem ex harum natus soluta assumenda,
                eveniet id necessitatibus? Maxime delectus, at similique minus, odit commodi nulla labore dicta numquam quod sint impedit expedita magni recusandae quasi unde ipsa
                ad aliquam voluptatibus quae nesciunt sequi blanditiis natus soluta! Rem iste possimus debitis.
              </p>
              <a href="">Readmore...</a>
            </div>
          </div>
          <div className="wrap_berita">
            <img
              src="https://images.unsplash.com/photo-1616618315347-f573ab590156?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=442&q=80"
              alt=""
            />
            <div className="text">
              <h4>Lorem ipsum dolor sit amet.</h4>
              <p>
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Dolor nobis atque neque, voluptatibus laudantium aut, corrupti provident itaque maiores, nisi esse. Animi,
                iste dolore rerum velit ullam laboriosam. Consectetur tenetur repellat at velit labore aliquid, rem aperiam officiis sed perferendis nulla? Inventore vel officia
                aperiam maiores ab eius excepturi, reiciendis praesentium veritatis porro accusantium minima provident veniam obcaecati dolorem ex harum natus soluta assumenda,
                eveniet id necessitatibus? Maxime delectus, at similique minus, odit commodi nulla labore dicta numquam quod sint impedit expedita magni recusandae quasi unde ipsa
                ad aliquam voluptatibus quae nesciunt sequi blanditiis natus soluta! Rem iste possimus debitis.
              </p>
              <a href="">Readmore...</a>
            </div>
          </div>
        </div>
        <hr />
      </article>
    </>
  );
}

export default News;
