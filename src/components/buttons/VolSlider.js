import React, { useState } from 'react'
import useToggle from '../../hooks/useToggle';

export const VolSlider = () => {
    const { toggled, setToggle } = useToggle(false);

    const [volume, setVolume] = useState(45)
    const [muted, setMuted] = useState(false)
    const finalVolume = muted ? 0 : volume
    return (
        <>
        <div
            className={toggled ? "vol-container active" : "vol-container"}
            
            onMouseEnter={() => setToggle(!toggled)}
            onMouseLeave={() => setToggle(!toggled)}
        >
            <div className='vol-slider-container'>
                <input
                    type="range"
                    className='vol-slider'
                    min={0}
                    max={100}
                    step={1}
                    value={volume}
                    onChange={event => {
                        setVolume(event.target.valueAsNumber)
                    }}
                />
            </div>
            <div className='vol-data'>{finalVolume}<span>%</span></div>
            </div>
            <button  className='btn-rounded' onClick={() => setMuted(m => !m)}>
          {muted ? (
            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 32 32"><g id="mute"><path d="M17.87,6.23a2.19,2.19,0,0,0-2.24,0L7.81,11a.41.41,0,0,1-.19.05H4.37A2.37,2.37,0,0,0,2,13.37v5.26A2.37,2.37,0,0,0,4.37,21H7.62a.41.41,0,0,1,.19.05l7.82,4.69a2.21,2.21,0,0,0,2.24,0A2.19,2.19,0,0,0,19,23.84V8.16A2.19,2.19,0,0,0,17.87,6.23ZM17,23.84a.22.22,0,0,1-.11.19.21.21,0,0,1-.23,0L8.84,19.34A2.39,2.39,0,0,0,7.62,19H4.37A.38.38,0,0,1,4,18.63V13.37A.38.38,0,0,1,4.37,13H7.62a2.39,2.39,0,0,0,1.22-.34L16.66,8a.23.23,0,0,1,.23,0,.22.22,0,0,1,.11.19Z"/><path d="M26.83,16l2.92-3.34a1,1,0,0,0-1.5-1.32L25.5,14.48l-2.75-3.14a1,1,0,1,0-1.5,1.32L24.17,16l-2.92,3.34A1,1,0,0,0,22,21a1,1,0,0,0,.75-.34l2.75-3.14,2.75,3.14A1,1,0,0,0,29,21a1,1,0,0,0,.75-1.66Z"/></g></svg>
          ) : (
<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 32 32"><g id="volume"><path d="M17.87,6.17a2.17,2.17,0,0,0-2.24,0L7.81,10.88a.33.33,0,0,1-.19.06H4.37A2.37,2.37,0,0,0,2,13.31v5.26a2.38,2.38,0,0,0,2.37,2.37H7.62a.41.41,0,0,1,.19,0l7.82,4.69a2.21,2.21,0,0,0,2.24,0A2.2,2.2,0,0,0,19,23.77V8.1A2.18,2.18,0,0,0,17.87,6.17ZM17,23.77a.22.22,0,0,1-.11.2.23.23,0,0,1-.23,0L8.84,19.28a2.29,2.29,0,0,0-1.22-.34H4.37A.38.38,0,0,1,4,18.57V13.31a.37.37,0,0,1,.37-.37H7.62a2.39,2.39,0,0,0,1.22-.34l7.82-4.69a.21.21,0,0,1,.23,0A.2.2,0,0,1,17,8.1Z"/><path d="M21.31,10.28a1,1,0,0,0,0,1.41,6.26,6.26,0,0,1,0,8.62,1,1,0,0,0,0,1.41,1,1,0,0,0,1.41,0,8.24,8.24,0,0,0,0-11.38A1,1,0,0,0,21.31,10.28Z"/><path d="M26.75,7.34a1,1,0,0,0-1.5,1.32A11.4,11.4,0,0,1,28,16a11.4,11.4,0,0,1-2.75,7.34,1,1,0,1,0,1.5,1.32A13.38,13.38,0,0,0,30,16,13.38,13.38,0,0,0,26.75,7.34Z"/></g></svg>            )}
        </button>
        </>

    )
}
