import React from 'react';
import Title from './Title';
import planets from '../data/planets';
import PlanetCard from './PlanetCard';
import music from '../music/final-space.mp3';

class SolarSystem extends React.Component {
  render() {
    const planetsData = planets.map((planet, index) => (
      <li key={ index }>
        <PlanetCard planetName={ planet.name } planetImage={ planet.image } />
      </li>
    ));

    return (
      <div data-testid="solar-system" className='solar-system'>
        <Title headline="Planetas" />
        <audio src={music} autoPlay />
        <img src={require('../images/Sol.png')} id="Sol"/>
        { planetsData }
      </div>
    );
  }
}

export default SolarSystem;
