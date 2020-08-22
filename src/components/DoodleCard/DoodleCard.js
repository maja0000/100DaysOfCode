import React from 'react';
import './DoodleCard.css';
// import screboard from '../../vids/scoreboard.mov';

export default function DoodleCard({ doodle }) {
  console.log(doodle.video);
  return (
    <div className="card-wrapper">
      <div className="desc">
        <h1>{doodle.title}</h1>
        <p>{doodle.description}</p>
      </div>
      <video
        style={{ margin: '0 auto' }}
        width="320"
        height="240"
        controls
        src={doodle.video}
        // src={screboard}
      ></video>
    </div>
  );
}
