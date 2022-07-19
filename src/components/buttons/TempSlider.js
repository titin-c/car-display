import React, { useState } from 'react'
import useToggle from '../../hooks/useToggle';

export const TempSlider = () => {
    const { toggled, setToggle } = useToggle(false);

    const [temp, setTemp] = useState(25)
    return (
        <div
            className={toggled ? "temp-container active" : "temp-container"}
            
            onMouseEnter={() => setToggle(!toggled)}
            onMouseLeave={() => setToggle(!toggled)}
        >
            <div className='temp-slider-container'>
                <input
                    type="range"
                    className='temp-slider'
                    min={10}
                    max={45}
                    step={1}
                    value={temp}
                    onChange={event => {
                        setTemp(event.target.valueAsNumber)
                    }}
                />
            </div>
            <div className='clim-data'>{temp}<span>ºC</span></div>
        </div>

    )
}
