import React from 'react';
import Title from './Title';
import planets from '../data/planets';
import PlanetCard from './PlanetCard';

class SolarSystem extends React.Component {
  render() {
    const planetsData = planets.map((planet, index) => (
      <li key={ index }>
        <PlanetCard planetName={ planet.name } planetImage={ planet.image } />
      </li>
    ));

    return (
      <div data-testid="solar-system">
        <Title headline="Planetas" />
        { planetsData }
      </div>
    );
  }
}

export default SolarSystem;
