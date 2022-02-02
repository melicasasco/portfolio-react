import './sobremi.scss';

const SobreMi = () => {
    return (
      <div className="a" id="sobremi">
        <div className="a-left">
        
          <div className="a-card">
            <img
              src="assets/img-code.jpg"
              alt=""
              className="a-img"
            />
          </div>
        </div>
        <div className="a-right">
          <h1 className="a-title">Sobre mí</h1>
          <p className="a-sub">
            Me dicen Meli,
          </p>
          <p className="a-desc">
          soy una persona <span style={{color: 'red'}}>organizada y con una gran motivación</span>, apasionada por el <b>diseño</b> y la <b>tecnología.</b><br></br><br></br> Como egresada en Artes, <span style={{color: 'red'}}>mi devoción por la pintura 
          y el diseño </span>me llevó a indagar sobre la materia en el ámbito digital. <br></br><br></br>
          Actualmente me encuentro trabajando como Frontend Developer en dos agencias de Argentina.
          </p>
        
        </div>
      </div>
    );
  };
  
  export default SobreMi;
