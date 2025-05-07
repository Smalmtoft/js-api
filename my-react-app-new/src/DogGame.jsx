import React, { useState } from 'react';

function DogGame() {
  const [dogImage, setDogImage] = useState('');
  const [count, setCount] = useState(0);

  const fetchDog = async () => {
    const response = await fetch('https://dog.ceo/api/breeds/image/random');
    const data = await response.json();
    setDogImage(data.message);
    setCount(count + 1);
  };

  return (
    <div className="dogGame">
      <h1 className="dogTitle">Bilder på hundar</h1>
      <button className="dogBtn" onClick={fetchDog}>Visa en ny gullig hund</button>
      {dogImage && (
        <div>
          <img className="dogImg" src={dogImage} alt="dog"/>
        </div>
      )}
      {count > 0 && (
        <p className="dogAmount">
          Antal gulliga hundar du sett: {count}
        </p>
      )}

    </div>
  );
}

export default DogGame;
