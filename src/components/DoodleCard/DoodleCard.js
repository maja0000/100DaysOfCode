import React from 'react';
import './DoodleCard.css';
import Button from './Button';

export default function DoodleCard({ doodle }) {
  return (
    <div className="card-wrapper">
      <div className="desc">
        <h1>{doodle.title}</h1>
        <p>{doodle.description}</p>
        {doodle.language.length > 1 ? (
          doodle.language.map((each, index) => (
            <Button key={index} variant={each} props={each}>
              {each}
            </Button>
          ))
        ) : (
          <Button variant={doodle.language.join()} props={doodle}>
            {doodle.language}
          </Button>
        )}
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
