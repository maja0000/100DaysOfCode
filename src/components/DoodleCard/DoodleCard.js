import React from 'react';
import './DoodleCard.css';

export default function DoodleCard({ doodle }) {
  console.log(doodle.video);
  return (
    <div className="card-wrapper">
      <div className="desc">
        <h1>{doodle.title}</h1>
        <p>{doodle.description}</p>
      </div>
      <video
        className="video"
        style={{ margin: '0 auto' }}
        // 854 x 480

        controls
        src={doodle.video}
      ></video>
    </div>
  );
}
