// src/App.js
import React from 'react';

const Hello = ({ name, age }) => {
  const bornYear = () => new Date().getFullYear() - age;
  return (
    <div>
      <p>Hello {name}, you are {age} years old</p>
      <p>{name} you were probably born in {bornYear()}</p>
    </div>
  );
}

const App = () => {
  const name = 'PooPoo';
  const age = 35;

  return (
    <div>
      <h1>Hola Mundo</h1>
      <Hello name="PeePee" age={20} />
      <Hello name={name} age={age} />
    </div>
  );
}

export default App;
