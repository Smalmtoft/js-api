import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';

function DogGame() {
  const [dogImage, setDogImage] = useState('');
  const [count, setCount] = useState(0);
  const navigate = useNavigate();

  const fetchDog = async () => {
    const response = await fetch('https://dog.ceo/api/breeds/image/random');
    const data = await response.json();
    setDogImage(data.message);
    setCount(count + 1);
  };

  const handleLogout = () => {
    localStorage.removeItem('loggedIn');
    navigate('/');
  };

  return (
    <div className="dogGame">
      <h1 className="dogTitle">Images of dogs</h1>
      <button className="dogBtn" onClick={fetchDog}>Show a new cute dog</button>

      {dogImage && (
        <div>
          <img className="dogImg" src={dogImage} alt="dog" />
        </div>
      )}

      {count > 0 && (
        <p className="dogAmount">
          Amount of cute images you've seen: {count}
        </p>
      )}

      <button className="dogBtn"  onClick={handleLogout}>Log out</button>
    </div>
  );
}

export default DogGame;
