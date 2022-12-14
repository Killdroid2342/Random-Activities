import axios from 'axios';
import React, { useState } from 'react';

const RandomActivities = () => {
  const [activites, setActivites] = useState('Click Button For Activity');
  const getRandomActivity = async () => {
    axios
      .get('https://www.boredapi.com/api/activity')
      .then((res) => {
        setActivites(res.data.activity);
      })
      .catch((err) => {
        console.log(err);
      });
  };
  return (
    <div className='flex flex-col items-center justify-center text-center'>
      <h1 className='text-2xl font-serif font-bold mt-36'>
        Want A New Activity?
      </h1>
      <div className='border-2 border-white rounded-md p-10 mt-44'>
        <p className='border-2 border-white font-serif p-4 font-bold'>
          {activites}
        </p>
        <button
          className='border-2 border-white p-3 rounded-lg mt-10 font-bold font-serif'
          onClick={getRandomActivity}
        >
          Click Me For Activities
        </button>
      </div>
    </div>
  );
};

export default RandomActivities;
