import React from 'react';
import Title from './Title';
import missions from '../data/missions';
import MissionCard from './MissionCard';

class Missions extends React.Component {
  render() {
    const missionsData = missions.map((m, index) => (
      <li key={ index }>
        <MissionCard
          name={ m.name }
          year={ m.year }
          country={ m.country }
          destination={ m.destination }
        />
      </li>
    ));

    return (
      <div data-testid="missions">
        <Title headline="Missões" />
        {missionsData}
      </div>
    );
  }
}

export default Missions;
