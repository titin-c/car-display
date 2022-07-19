import React from 'react';
import { ZoneAudio } from './components/ZoneAudio';
import { ZoneCentral } from './components/ZoneCentral';
import { ZoneMap } from './components/ZoneMap';
import { ZoneVelocity } from './components/ZoneVelocity';



export const CarDisplay = () => {
   
    return (
        <div className='car-display-container'>
            <ZoneMap />
            <ZoneAudio />
            <ZoneCentral />
            <ZoneVelocity />
        </div>
    )
}

export default CarDisplay;
