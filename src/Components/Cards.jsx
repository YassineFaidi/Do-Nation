import React from 'react';
import './Cards.css';
import CardItem from './CardItem';

function Cards() {
  return (
    <div className='cards'>
      <h1>Événement Tendance!</h1>
      <div className='cards__container'>
        <div className='cards__wrapper'>
          <ul className='cards__items'>
            <CardItem
              src='./../src/assets/test_back_2.jpeg'
              text='Explore the hidden waterfall deep inside the Amazon Jungle'
              label='Famine'
              path='/Evenements'
            />
            <CardItem
              src='./../src/assets/test_back_3.jpg'
              text='Travel through the Islands of Bali in a Private Cruise'
              label='Reforestation'
              path='/Evenements'
            />
          </ul>
          <ul className='cards__items'>
            <CardItem
              src='./../src/assets/test_back_4.jpg'
              text='Set Sail in the Atlantic Ocean visiting Uncharted Waters'
              label='Animaux'
              path='/Evenements'
            />
            <CardItem
              src='./../src/assets/test_back_1.jpg'
              text='Experience Football on Top of the Himilayan Mountains'
              label='Éducation'
              path='/Evenements'
            />
            <CardItem
              src='./../src/assets/test_back_5.jpg'
              text='Ride through the Sahara Desert on a guided camel tour'
              label='Santé'
              path='/Evenements'
            />
          </ul>
        </div>
      </div>
    </div>
  );
}

export default Cards;
