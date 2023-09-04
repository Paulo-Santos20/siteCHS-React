import React, { useState, useEffect } from 'react';
import "../../App.css";
import Navbar from "../layout/Navbar.js";

function Institucional() {
  // Defina a página atual
  const currentPage = "Institucional.html"; // Defina a página atual aqui  

 // Função para adicionar uma classe ou estilo ao ícone para indicar que está ativo
 const setActiveIcon = () => {
    const iconElement = document.querySelector(
      '.nav__link[href="' + currentPage + '"] i'
    );

    if (iconElement) {
      iconElement.classList.add("active-icon"); // Adicione uma classe CSS
      // Ou
      // iconElement.style.color = "#287d9e"; // Altere a cor diretamente
    }    
  };

  // Chame a função para definir o ícone ativo
  useEffect(() => {
    setActiveIcon();
  }, []);

 
  return (
    <div>
      <Navbar />
      <div className="fundo">
        <div className="proposito">
          <h4 className="first">
            CHS - João Paulo II
            <br />
            Vocação para cuidar bem
          </h4>
          <h3>Propósito</h3>
          <h4 className="second">
            Fazer o bem e ser feliz. Consolidar com prosperidade.
          </h4>
          <div className="somos">
            <h3>Quem somos</h3>
            <p className="p">
              O Papa João Paulo II, em sua mensagem para a 30ª Jornada Mundial
              de Orações referiu-se ao tema da cultura vocacional como:
              <h7>
                ”A base da cultura da vida nova, vida de gratidão, confiança e
                responsabilidade; no fundo, é a cultura desejo de Deus.”
              </h7>{" "}
              <br />
              E como vocação, acreditamos que a nossa seja proporcionar uma
              atenção multiprofissional ao paciente, através de uma abordagem
              integrada e humanizada, viabilizando uma rede de diálogo
              permanente com reais transformações coletivas.
              <br />
              <br />
              Nosso amplo conhecimento do setor de saúde internacional nos
              permite oferecer um portfólio de serviços para administrar com
              eficiência unidades hospitalares de pequeno e grande porte.
              <br />
              <br />
              Com mais de 300.000 casos ambulatoriais e 150.000 internações por
              ano, o Cuidados Holísticos de Saúde (CHS), trata mais pacientes do
              que grandes núcleos de saúde do mundo e, como resultado, é capaz
              de contar com uma vasta experiência e conhecimento especializado.
              <br />
              <br />E queremos mais. Afim de criar um legado de excelência
              técnico-científica, nossos especialistas estão sempre empenhados
              em reunir e nutrir os melhores profissionais de cada área, para
              que juntos, possamos moldar o futuro da saúde.
            </p>
            <br />
          </div>
        </div>
      </div>
     
      <section class="timeline-section">
	<div class="timeline-items">
		<div class="timeline-item">
			<div class="timeline-dot"></div>
			<div class="timeline-date">1997</div>
			<div class="timeline-content">
				<p>Criação e desenvolvimento da Unidade de Ciências da Saúde junto à Universidade Católica Portuguesa.</p>
			</div>
		</div>
		<div class="timeline-item">
			<div class="timeline-dot"></div>
			<div class="timeline-date">2003</div>
			<div class="timeline-content">
				<p>Consolidação da pesquisa em área de PDT (Terapia Foto Dinâmica).</p>
			</div>
		</div>
		<div class="timeline-item">
			<div class="timeline-dot"></div>
			<div class="timeline-date">2006</div>
			<div class="timeline-content">
				<p>Acordo de transferência clínico-terapêutica com o CIREN - Centro Internacional de Restauração Neurológica.</p>
			</div>
		</div>
		<div class="timeline-item">
			<div class="timeline-dot"></div>
			<div class="timeline-date">2007</div>
			<div class="timeline-content">
				<p>Constituição CHS - CEI na cidade de Braga, Portugal.</p>
			</div>
		</div>
		<div class="timeline-item">
			<div class="timeline-dot"></div>
			<div class="timeline-date">2019</div>
			<div class="timeline-content">
				<p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. </p>
			</div>
		</div>
		<div class="timeline-item">
			<div class="timeline-dot"></div>
			<div class="timeline-date">2011</div>
			<div class="timeline-content">
				<p>Internacionalização para o Brasil. Estado de Pernambuco.</p>
			</div>
		</div>
		<div class="timeline-item">
			<div class="timeline-dot"></div>
			<div class="timeline-date">2013</div>
			<div class="timeline-content">
				<p>Reestruturação da unidade CHS - Nossa Senhora das Graças. Recife – PE.</p>
			</div>
		</div>
        <div class="timeline-item">
			<div class="timeline-dot"></div>
			<div class="timeline-date">2015</div>
			<div class="timeline-content">
				<p>Constituição Associação Beneficente João Paulo II, CHS - João Paulo II.</p>
			</div>
		</div>
        <div class="timeline-item">
			<div class="timeline-dot"></div>
			<div class="timeline-date">2016</div>
			<div class="timeline-content">
				<p>Consolidação como OSS na gestão da saúde pública no estado de Pernambuco.</p>
			</div>
		</div>
        <div class="timeline-item">
			<div class="timeline-dot"></div>
			<div class="timeline-date">2021</div>
			<div class="timeline-content">
				<p>Expansão para o Estado de Goiás.</p>
			</div>
		</div>
	</div>
</section>
          
        
      
      <h3>Missão, visão e valores</h3>
    <div className="mvv">
        <div className="missao">
            <h6>Missão</h6>
            <p>Combinar assistência médica,
                investigação
                e docência ao mais alto nível para
                assegurar uma medicina de qualidade,
                uma
                atenção personalizada e um profundo
                respeito pela dignidade de cada
                pessoa,
                e construir uma organização capaz de
                atrair, desenvolver e reter pessoas
                excepcionais.</p>
        </div>
        <div className="visao">
            <h6>Visão</h6>
            <p>Tornar-se referência na prestação de
                cuidados de saúde, pela prática de
                uma
                medicina humanizada, de excelência e
                inovadora.</p>
        </div>
        <div className="valores">
  <h6>Valores</h6>
  <ul>
    <li>Ética e Confiança</li>
    <li>Pessoas no Centro do nosso Sucesso</li>
    <li>Inovação</li>
    <li>Valorização da vida</li>
    <li>Responsabilidade Social</li>
    <li>Frugalidade e Eficiência</li>
    <li>Cooperação e Independência</li>
    <li>Valorização do conhecimento</li>
  </ul>
</div>

    </div>
      <div className="responsabilidade">
        <h3>Responsabilidade Social</h3>
        <p className="p">
          O senso de responsabilidade social norteia as ações do CHS desde a sua concepção. A vontade de conectar as pessoas, gerando mudanças positivas é um desdobramento natural do seu perfil beneficente.
          <br />
          <br />
          Para que isso se torne parte do cotidiano, frequentemente, em todas as localidades que nossas unidades estão inseridas, realizamos ações para pacientes, familiares, colaboradores e demais agentes da instituição.
        </p>
      </div>
    </div>
  );
}

export default Institucional;