import React from 'react';

import './Player.css'; // 👈 Import your CSS file

const Player = ({ name, team, nationality, jerseyNumber, age, imageUrl }) => {
  return (
    <div className="Player-card">
      <img src={imageUrl} alt={name} />
      <h2>{name}</h2>
      <p>Team: {team}</p>
      <p>Nationality: {nationality}</p>
      <p>Jersey Number: {jerseyNumber}</p>
      <p>Age: {age}</p>
    </div>
  );
};

export default Player;
