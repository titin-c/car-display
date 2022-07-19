import React, { useState } from 'react';

const pistas = [
    { id: 0, band: 'Aretha Frankling', album: 'I Never Loved a Man the Way I Love You', title: 'Respect', url: './assets/img/respect.jpg' },
    { id: 1, band: 'Public Enemy', album: 'Fear of a Black Planet', title: 'Fight the Power', url: './assets/img/Fightthepowersingle.jpg' },
    { id: 2, band: 'Nirvana', album: 'Nevermind', title: 'Smells like a teen spirit', url: './assets/img/nevermind.jpg' },
    { id: 3, band: 'Proyecto Uno', album: 'El Tiburón- Gold Edition', title: 'El tiburón', url: './assets/img/el-tiburon.jpg' },
];

export const ZoneAudio = () => {

    const [selected, setSelected] = useState(0);
    const pistasLenght = pistas.length - 1;
    const handlePrev = () => {
        setSelected(prev => {
            if (prev === 0) {
                return pistasLenght;
            } else {
                return prev - 1;
            }
        });
    };
    const handleNext = () => {

    
        setSelected(next => {
            if (next === pistasLenght) {
                return 0;
            } else {
                return next + 1;
            }
        });
    };
    const employee = pistas.find(obj => {
        return obj.id === selected;
    });



    return (
        <div className='car-display-grid-item2 zone-audio'>
            <div className='zone-audio-container'>
                {employee && (<div className='zone-audio-top'>
                            <div className='zone-audio-img'>
                                <img src={employee.url} alt={employee.title} />
                            </div>
                            <div className='zone-audio-description'>

                                <h3>{employee.band}</h3>
                                <h5>{employee.album}</h5>
                                <p>{employee.title}</p>

                            </div>
                    <div className='zone-audio-list'>
                        <button className='btn btn-square'>
                            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 14 12.98"><g id="Capa_2" data-name="Capa 2"><g id="radio"><g id="playlist"><path className="cls-1" d="M.5,1h13A.5.5,0,0,0,14,.5a.5.5,0,0,0-.5-.5H.5A.5.5,0,0,0,0,.5.5.5,0,0,0,.5,1Z" /><path className="cls-1" d="M.5,4H9A.5.5,0,1,0,9,3H.5a.5.5,0,1,0,0,1Z" /><path className="cls-1" d="M.5,7h7a.5.5,0,0,0,0-1H.5a.5.5,0,0,0,0,1Z" /><path className="cls-1" d="M5,9H.5a.5.5,0,0,0-.5.5.5.5,0,0,0,.5.5H5a.5.5,0,0,0,.5-.5A.5.5,0,0,0,5,9Z" /><path className="cls-1" d="M5,12H.5a.5.5,0,0,0-.5.5.5.5,0,0,0,.5.5H5a.5.5,0,0,0,.5-.5A.5.5,0,0,0,5,12Z" /><path className="cls-1" d="M13.67,4.35l-1.9-.79a1,1,0,0,0-.87.09,1,1,0,0,0-.42.8v4A2.43,2.43,0,0,0,9,8a2.5,2.5,0,1,0,2.49,2.49v-6l1.83.75a.5.5,0,1,0,.38-.92ZM9,12a1.5,1.5,0,1,1,1.49-1.5A1.5,1.5,0,0,1,9,12Z" /></g></g></g></svg>
                        </button>
                    </div>
                </div>)}
                <div className='zone-audio-botton'>
                    <button className='btn-rounded btn-play btn'>
                        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 11.7 13"><g id="Capa_2" data-name="Capa 2"><g id="radio"><path className="cls-1" d="M10.92,5.15,2.3.2A1.52,1.52,0,0,0,.77.21,1.54,1.54,0,0,0,0,1.56v9.88a1.54,1.54,0,0,0,.77,1.35,1.51,1.51,0,0,0,.77.21,1.6,1.6,0,0,0,.76-.2l8.62-5a1.56,1.56,0,0,0,0-2.7Zm-.65,1.57-8.62,5a.23.23,0,0,1-.23,0,.27.27,0,0,1-.12-.23V1.56a.27.27,0,0,1,.12-.23.35.35,0,0,1,.12,0l.11,0,8.62,5a.25.25,0,0,1,0,.44Z" /></g></g></svg>
                    </button>
                    <div className='zone-audio-wave'><img src='./assets/img/wave.svg' alt='wave' width='100%' height={60} /></div>
                    <div className='zone-audio-bottons'>
                        <button
                            className='btn-square btn'
                            onClick={handlePrev}
                        >
                            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 18.2 13"><g id="Capa_2" data-name="Capa 2"><g id="radio"><path className="cls-1" d="M7.28,7.85l8.62,5a1.52,1.52,0,0,0,1.53,0,1.54,1.54,0,0,0,.77-1.35V1.56A1.55,1.55,0,0,0,16.66,0a1.6,1.6,0,0,0-.76.2l-8.62,5a1.56,1.56,0,0,0,0,2.7Zm.64-1.57,8.63-4.95a.21.21,0,0,1,.22,0,.25.25,0,0,1,.13.23v9.88a.25.25,0,0,1-.13.23.29.29,0,0,1-.11,0l-.11,0L7.92,6.72a.26.26,0,0,1,0-.44Z" /><path className="cls-1" d="M2,13h.55a2,2,0,0,0,2-2V2a2,2,0,0,0-2-2H2A2,2,0,0,0,0,2v9A2,2,0,0,0,2,13ZM1.3,2A.7.7,0,0,1,2,1.3h.55a.7.7,0,0,1,.7.7v9a.7.7,0,0,1-.7.7H2a.7.7,0,0,1-.7-.7Z" /></g></g></svg>
                        </button>
                        <button
                            className='btn-square btn'
                            onClick={handleNext}
                        >
                            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 18.2 13"><g id="Capa_2" data-name="Capa 2"><g id="radio"><path className="cls-1" d="M10.92,5.15,2.3.2A1.52,1.52,0,0,0,.77.21,1.54,1.54,0,0,0,0,1.56v9.88a1.54,1.54,0,0,0,.77,1.35,1.51,1.51,0,0,0,.77.21,1.6,1.6,0,0,0,.76-.2l8.62-5a1.56,1.56,0,0,0,0-2.7Zm-.65,1.57-8.62,5a.23.23,0,0,1-.23,0,.27.27,0,0,1-.12-.23V1.56a.27.27,0,0,1,.12-.23.35.35,0,0,1,.12,0l.11,0,8.62,5a.25.25,0,0,1,0,.44Z" /><path className="cls-1" d="M16.2,0h-.56a2,2,0,0,0-2,2v9a2,2,0,0,0,2,2h.56a2,2,0,0,0,2-2V2A2,2,0,0,0,16.2,0Zm.7,11a.7.7,0,0,1-.7.7h-.56A.69.69,0,0,1,15,11V2a.69.69,0,0,1,.69-.7h.56a.7.7,0,0,1,.7.7Z" /></g></g></svg>
                        </button>
                    </div>
                </div>
            </div>
        </div>
    )
}
