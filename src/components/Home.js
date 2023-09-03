import "./App.css";
import React from "react";

export const Home = () => {
    return (
      <div className="body-content">
        <div className="container_slide">
          <div className="content-left">
            <div className="slider">
              <div className="slider-control">
                <span id="prev">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="48"
                    height="48"
                    viewBox="0 0 24 24"
                    style={{ fill: "rgba(255, 255, 255, 1)" }}
                  >
                    <path d="M13.293 6.293 7.586 12l5.707 5.707 1.414-1.414L10.414 12l4.293-4.293z"></path>
                  </svg>{" "}
                </span>
                <span id="next">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="48"
                    height="48"
                    viewBox="0 0 24 24"
                    style={{ fill: "rgba(255, 255, 255, 1)" }}
                  >
                    <path d="M10.707 17.707 16.414 12l-5.707-5.707-1.414 1.414L13.586 12l-4.293 4.293z">
                    </path>
                  </svg>
                </span>
              </div>
  
              <div
                className="cycle-slideshow"
                data-cycle-fx="fade"
                data-cycle-slides="> div"
                data-cycle-timeout="4000"
              >
                <div>
                  <img src="/img/news_enfermagem_condado.jpg" alt="Condado – Comemoração na área de saúde" />
                  <div className="cycle-overlay">
                    <a href="news/news_enfermagem_condado.html">Condado – Comemoração na área de saúde</a>
                  </div>
                </div>
                <div>
                  <img src="/img/news_tanque.png" alt="Vertentes - Novo tanque de oxigênio no Hospital Evaristo Ferreira Filho" />
                  <div className="cycle-overlay">
                    <a href="news/news_tanque.html">Vertentes - Novo tanque de oxigênio no Hospital Evaristo Ferreira Filho</a>
                  </div>
                </div>
                {/* Adicione mais slides aqui */}
              </div>
            </div>
          </div>
          <div className="content-right">
            <div className="news-board">
              <h3>Últimas Notícias</h3>
              <div className="news-roller">
                <div className="slot1">
                  <h2>Condado – Comemoração na área de saúde</h2>
                  <a href="news/news_enfermagem_condado.html" className="link">Saiba Mais</a>
                </div>
                <div className="slot1">
                  <h2>Vertentes - Novo tanque de oxigênio no Hospital Evaristo Ferreira Filho</h2>
                  <a href="news/news_tanque.html" className="link">Saiba Mais</a>
                </div>
                {/* Adicione mais notícias aqui */}
              </div>
              <a className="slot2handle" href="Noticias.html" style={{ textAlign: "center" }}>Ver Todas</a>
            </div>
          </div>
        </div>
      </div>
    );
  };
  
  export default Home;