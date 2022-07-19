import React from 'react'
import useToggle from '../../hooks/useToggle';

export const AlertLights = () => {
    const { toggled, setToggle } = useToggle(false);
    return (
        <button 
        className={toggled ? "btn-danger active" : "btn-danger"}
        onClick={() => setToggle(!toggled)}
        >
            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 31.41 27.99"><g id="Capa_2" data-name="Capa 2"><g id="avg"><path className="cls-1" d="M15.71,0A1.91,1.91,0,0,0,14,1L.28,24.77A2.17,2.17,0,0,0,2.14,28H29.27a2.17,2.17,0,0,0,1.86-3.22L17.39,1A1.94,1.94,0,0,0,15.71,0Zm0,1.32a.59.59,0,0,1,.49.31L30,25.45a.77.77,0,0,1-.68,1.18H2.14a.77.77,0,0,1-.68-1.18L15.21,1.63A.59.59,0,0,1,15.71,1.32Z" /></g></g></svg>
        </button>
    )
}
