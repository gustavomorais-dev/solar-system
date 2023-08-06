import React from 'react';
import Title from './Title';
import planets from '../data/planets';
import PlanetCard from './PlanetCard';
import music from '../music/final-space.mp3';
import solImage from '../images/Sol.png'; // Importe a imagem aqui

class SolarSystem extends React.Component {
  render() {
    const planetsData = planets.map((planet, index) => (
      <li key={index}>
        <PlanetCard planetName={planet.name} planetImage={planet.image} />
      </li>
    ));

    return (
      <div data-testid="solar-system" className="solar-system">
        <Title headline="Planetas" />
        <audio src={music} autoPlay controls>
          <track kind="captions" label="English captions" srcLang="en" default />
          Seu navegador não suporta o elemento de áudio.
        </audio>
        <img src={solImage} id="Sol" alt="Sol" /> {/* Use a imagem importada aqui */}
        {planetsData}
      </div>
    );
  }
}

export default SolarSystem;
