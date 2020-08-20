import React from 'react';
import './DoodleCard.css';

export default function DoodleCard({ doodle }) {
  return (
    <div className="card-wrapper">
      <div className="desc">
        <h1>{doodle.title}</h1>
        <h2>{doodle.description}</h2>
      </div>
      <div>222222</div>
    </div>
  );
}
