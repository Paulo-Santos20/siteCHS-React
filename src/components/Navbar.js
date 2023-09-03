import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faHouseUser } from "@fortawesome/free-solid-svg-icons";
import { faPlus } from "@fortawesome/free-solid-svg-icons";
import { faHospital } from "@fortawesome/free-solid-svg-icons";
import { faFile } from "@fortawesome/free-solid-svg-icons";
import { faUserGroup } from "@fortawesome/free-solid-svg-icons";
import { faW } from "@fortawesome/free-solid-svg-icons";
import { faHeadset } from "@fortawesome/free-solid-svg-icons";
import logo from "../assets/img/LogoCHS.png";
import "./App.css";

export const Navbar = () => {
  return (
    <header className="header" id="header">
      <nav className="nav container">
      <img src={logo} alt="" className="nav_img" />
        <div className="nav__menu" id="nav-menu">
          <ul className="nav__list">
            <li className="nav__item">
              <a href="index.html" className="nav__link active-link">
                <FontAwesomeIcon icon={faHouseUser} />
                <span className="nav__name">Início</span>
              </a>
            </li>
            <li class="nav__item">
              <a href="Institucional.html" class="nav__link">
                <FontAwesomeIcon icon={faPlus} />
                <span class="nav__name">Institucional</span>
              </a>
            </li>

            <li class="nav__item">
              <a href="Unidades.html" class="nav__link">
                <FontAwesomeIcon icon={faHospital} />
                <span class="nav__name">Unidades</span>
              </a>
            </li>

            <li class="nav__item">
              <a href="transparencia.html" class="nav__link">
                <FontAwesomeIcon icon={faFile} />
                <span class="nav__name">Transparência</span>
              </a>
            </li>

            <li class="nav__item">
              <a href="Oportunidades.html" class="nav__link">
                <FontAwesomeIcon icon={faUserGroup} />
                <span class="nav__name">Oportunidades</span>
              </a>
            </li>

            <li class="nav__item">
              <a
                href="https://ceijoaopauloii.local.conectew.com.br"
                target="_blank"
                class="nav__link"
              >
                <FontAwesomeIcon icon={faW} />
                <span class="nav__name">Gestor</span>
              </a>
            </li>
            <li class="nav__item">
              <a href="contato.html" class="nav__link">
                <FontAwesomeIcon icon={faHeadset} />
                <span class="nav__name">Contato</span>
              </a>
            </li>
          </ul>
        </div>
      </nav>
    </header>
  );
};
