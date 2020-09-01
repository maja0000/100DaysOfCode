import React from 'react';
import './Header.css';
export default function Header() {
  return (
    <>
      <h1 className="heading">my code doodles</h1>
      <p>
        my
        <a
          href="https://twitter.com/maja_gch"
          target="_blank"
          rel="noopener noreferrer"
        >
          {' '}
          #100DaysOfCode{' '}
        </a>
        highlights
      </p>
    </>
  );
}
