import React, {useState } from 'react'

export const ZoneCentralTopSlider = () => {
    const [position, setPosition] = useState(100);
    const myPosition = {
        left: `-${position}%`
      };
    

  return (
    <div className='zone-slider'>
          <div className='slider-menu'>
            <button onClick={() => setPosition(0)}>Engine</button>
            <button onClick={() => setPosition(100)}>Whole Car</button> 
            <button onClick={() => setPosition(200)}>Wheels</button>
            
            </div>
            <img src='./assets/img/menu-slider-separator.svg' alt="separador"/>
          <div className='slider-container'>
            <div className='slider' style={myPosition}>
            <div className='slide'><img src='./assets/img/car-top-motor.png' width={180} alt="motor" /></div>
            <div className='slide'><img src='./assets/img/car-top.png' width={180}  alt="top" /></div>
            <div className='slide'><img src='./assets/img/car-top-wheels.png' width={180}  alt="ruedas" /></div>
            </div>
                                                 
            </div>
        </div>
  )
}
