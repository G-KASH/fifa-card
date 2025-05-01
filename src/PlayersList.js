import React from 'react';
import Player from './components/Player';
import players from './data/players';

const PlayersList = () => {
  return (
    <div>
      {players.map((player, index) => (
        <Player key={index} {...player} />
      ))}
    </div>
  );
};

export default PlayersList;
