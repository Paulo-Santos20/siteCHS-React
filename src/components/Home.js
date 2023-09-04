import React, { useState, useRef } from "react";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import conComemoracao from "../assets/img/news_enfermagem_condado.jpg";
import vttTanqueOxigenio from "../assets/img/news_tanque.png";
import tbbAmbulatorio from "../assets/img/news_inauguracao_ambulatorio_tbb.jpg";
import sjeCampanha from "../assets/img/news_sje.jpg";
import allCampanhaVacinacao from "../assets/img/news_vacinacao.jpg";
import allConsumoAgua from "../assets/img/news_agua.jpg";
import allTransparenciaPortal from "../assets/img/news_portal.png";
import allRedesSociais from "../assets/img/news_agua.jpg";
import allSaudavel from "../assets/img/news_frutas.jpg";
import "./App.css";

const Home = () => {
  const [newsData] = useState([
    {
      image: conComemoracao,
      title: "Condado – Comemoração na área de saúde",
      link: "news/news_enfermagem_condado.html",
    },
    {
      image: vttTanqueOxigenio,
      title:
        "Vertentes - Novo tanque de oxigênio no Hospital Evaristo Ferreira Filho",
      link: "news/news_tanque.html",
    },
    {
      image: tbbAmbulatorio,
      title:
        "Timbaúba - Inauguração do Ambulatório Dr. Milton Cândido da Silva",
      link: "news/news_ambulatorio_tbb.html",
    },
    {
      image: sjeCampanha,
      title: "São José do Egito - Campanha Interiorizar a Saúde",
      link: "news/news_sje.html",
    },
    {
      image: allCampanhaVacinacao,
      title: "Campanha de Vacinação 2023",
      link: "news/news_vacinacao.html",
    },
    {
      image: allConsumoAgua,
      title: "Consumo de Água",
      link: "news/news_agua.html",
    },
    {
      image: allTransparenciaPortal,
      title: "CHS divulga área de transparência no Portal",
      link: "news/news_portal.html",
    },
    {
      image: allRedesSociais,
      title: "CHS divulga suas redes sociais",
      link: "news/news_redessociais.html",
    },
    {
      image: allSaudavel,
      title: "Saiba o que fazer para manter sua vida saudável",
      link: "news/news_saudavel.html",
    },
  ]);

  const sliderRef = useRef(null);

  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 4000,
  };

  return (
    <div className="body-content">
      <div className="slider-container">
        <div className="content-left">
          <Slider {...settings} ref={sliderRef}>
            {newsData.map((news, index) => (
              <div key={index}>
                <img src={news.image} alt={news.title} />
                <div className="cycle-overlay">
                  <a href={news.link}>{news.title}</a>
                </div>
              </div>
            ))}
          </Slider>
        </div>
      </div>
      <div className="content-right">
        <div className="news-board">
          <h3>Últimas Notícias</h3>
          <div className="news-roller">
            {newsData.map((news, index) => (
              <div className="slot1" key={index}>
                <h2>{news.title}</h2>
                <a href={news.link} className="link">
                  Saiba Mais
                </a>
              </div>
            ))}
          </div>
          <div className="centerslot2">
            <a
              className="slot2handle"
              href="Noticias.html"
              style={{ textAlign: "center" }}
            >
              Ver Todas
            </a>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Home;
