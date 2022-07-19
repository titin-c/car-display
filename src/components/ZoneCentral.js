import React from 'react'
import { ZonacentralBottonCentral } from './ZoneCentralBottonCentral'
import { ZoneCentralBottonAudio } from './ZoneCentralBottonAudio'
import { ZoneCentralBottonClimatizador } from './ZoneCentralBottonClimatizador'
import { ZoneCentralTopClock } from './ZoneCentralTopClock'
import { ZoneCentralTopSlider } from './ZoneCentralTopSlider'

export const ZoneCentral = () => {
  return (
    <div className='car-display-grid-item3'>
      <div className='zone-central-top'>
        <ZoneCentralTopClock/>
        <ZoneCentralTopSlider />
        <div className='zone-medidores'>
          <div><img src='./assets/img/medidor-battery.svg' width={33.1} alt="batería" /></div>
          <div><img src='./assets/img/medidor-temperature.svg' width={40.76} alt="temperatura"/></div>
        </div>
      </div>
      <div className='zone-central-bottom'>
        {/* zona de audio */}
        <ZoneCentralBottonAudio />
        {/* zona de central */}
        <ZonacentralBottonCentral />
        {/* zona de<Zone AACC */}
        <ZoneCentralBottonClimatizador />
      </div>
    </div>
  )
}
